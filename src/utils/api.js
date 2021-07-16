import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://game-reviews-project.herokuapp.com/api',
});

export const fetchReviews = async (
  selectedCategory,
  selectedSortBy,
  orderBy
) => {
  let altSortBy = 'created_at';
  if (selectedSortBy === 'Title') altSortBy = 'title';
  if (selectedSortBy === 'Written By') altSortBy = 'owner';
  if (selectedSortBy === 'Date') altSortBy = 'created_at';
  if (selectedSortBy === 'Popular') altSortBy = 'votes';

  let path = `/reviews?sort_by=${altSortBy}&order=${orderBy}`;
  if (selectedCategory) path += `&category=${selectedCategory}`;
  const { data } = await apiUrl.get(path);
  return data.reviews;
};

export const fetchReviewById = async (review_id) => {
  const { data } = await apiUrl.get(`/reviews/${review_id}`);

  return data.review;
};

export const handlePatchVotes = async (
  review_id,
  setVotes,
  currVotes,
  setIsDisabled
) => {
  try {
    await apiUrl.patch(`/reviews/${review_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    setVotes(currVotes);
    setIsDisabled(false);
  }
};

export const preventDefault = async (event) => {
  event.preventDefault();
};

export const handleSubmitComment = async (
  username,
  review_id,
  newComment,
  commentCount,
  setCommentCount,
  setPostedComment
) => {
  setPostedComment(`You have posted: ${newComment}`);

  try {
    await apiUrl.post(`/reviews/${review_id}/comments`, {
      username: username,
      body: newComment,
    });

    setCommentCount(commentCount + 1);
  } catch (err) {
    setPostedComment('Failed to post comment');
  }
};

export const fetchCommentsByReviewId = async (review_id) => {
  const { data } = await apiUrl.get(`/reviews/${review_id}/comments`);

  return data.comments;
};

export const handlePatchCommentLikes = async (
  comment_id,
  currentLikes,
  setCurrentLikes,
  setIsDisabled
) => {
  try {
    await apiUrl.patch(`/comments/${comment_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    setCurrentLikes(currentLikes);
    setIsDisabled(false);
  }
};

export const fetchUsers = async () => {
  const { data } = await apiUrl.get('/users');
  return data.users;
};

export const fetchUserAvatars = async (username) => {
  const { data } = await apiUrl.get(`/users/${username}`);
  return data.user;
};

export const fetchCategories = async () => {
  const { data } = await apiUrl.get(`/categories`);
  return data.categories;
};

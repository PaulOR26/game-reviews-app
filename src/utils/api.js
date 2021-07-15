import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://game-reviews-project.herokuapp.com/api',
});

export const fetchReviews = async () => {
  const { data } = await apiUrl.get('/reviews');
  return data.reviews;
};

export const fetchReviewById = async (review_id) => {
  const { data } = await apiUrl.get(`/reviews/${review_id}`);

  return data;
};

export const handlePatchVotes = async (review_id, setVotes, currVotes) => {
  try {
    await apiUrl.patch(`/reviews/${review_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    setVotes(currVotes);
  }
};

export const preventDefault = async (event) => {
  event.preventDefault();
};

export const handleSubmitComment = async (
  review_id,
  newComment,
  commentsLength,
  setCommentsLength,
  setPostedComment
) => {
  setPostedComment(`You have posted: ${newComment}`);
  try {
    await apiUrl.post(`/reviews/${review_id}/comments`, {
      username: 'cooljmessy',
      body: newComment,
    });
    setCommentsLength(commentsLength + 1);
    console.log(commentsLength + 1);
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
  setCurrentLikes
) => {
  try {
    await apiUrl.patch(`/comments/${comment_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    setCurrentLikes(currentLikes - 1);
  }
};

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
    const { data } = await apiUrl.patch(`/reviews/${review_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    setVotes(currVotes);
  }
};

export const handleSubmitComment = async (event) => {
  event.preventDefault();
};

export const fetchCommentsByReviewId = async (review_id) => {
  console.log(review_id);
  console.log(`/reviews/${review_id}/comments`);
  const { data } = await apiUrl.get(`/reviews/${review_id}/comments`);
  console.log(data);
  return data.comments;
};

export const handlePatchComments = async (
  comment_id,
  setCommentVotes,
  currVotes
) => {
  try {
    const { data } = await apiUrl.patch(`/comments/${comment_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    setCommentVotes(currVotes);
  }
};

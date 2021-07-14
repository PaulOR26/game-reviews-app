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

export const preventDefault = async (event) => {
  event.preventDefault();
  // try {
  //   console.log(event.target.value);
  // const { data } = await apiUrl.post(`reviews/${review_id}/comments`, {
  //   inc_votes: 1,
  // });
  // } catch (err) {
  // do something
  // }
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
    console.log(newComment);
    console.log(`/reviews/${review_id}/comments`);
    const { data } = await apiUrl.post(`/reviews/${review_id}/comments`, {
      username: 'cooljmessy',
      body: newComment,
    });
    setCommentsLength(commentsLength + 1);
    console.log('infinite?');
  } catch (err) {
    setPostedComment('Failed to post comment');
    console.log(err);
  }
};

export const fetchCommentsByReviewId = async (review_id) => {
  const { data } = await apiUrl.get(`/reviews/${review_id}/comments`);

  return data.comments;
};

export const handlePatchComments = async (comment_id) => {
  try {
    const { data } = await apiUrl.patch(`/comments/${comment_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    // setCommentVotes(currVotes);
  }
};

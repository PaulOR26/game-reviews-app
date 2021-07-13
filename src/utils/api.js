import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://game-reviews-project.herokuapp.com/api',
});

export const fetchReviews = async () => {
  const { data } = await apiUrl.get('/reviews');
  return data.reviews;
};

export const handlePatchVotes = async (review_id, setVotes, currVotes) => {
  setVotes(currVotes + 1);
  try {
    const { data } = await apiUrl.patch(`/reviews/${review_id}`, {
      inc_votes: 1,
    });
  } catch (err) {
    setVotes(currVotes);
  }
};

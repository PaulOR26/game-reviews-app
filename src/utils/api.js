import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://game-reviews-project.herokuapp.com/api',
});

export const fetchReviews = async () => {
  const { data } = await apiUrl.get('/reviews');
  return data.reviews;
};

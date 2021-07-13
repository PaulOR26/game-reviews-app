import { useEffect } from 'react';
import { fetchReviews } from '../utils/api';

const Home = ({ reviews, setReviews }) => {
  useEffect(() => {
    fetchReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [setReviews]);
  console.log(reviews[0]);
  return (
    <div>
      <h1>Paul's Game Review Project</h1>
      <h2>Latest reviews:</h2>
      <ul>
        {reviews.map((singleReview) => {
          return (
            <li key={singleReview.review_id}>
              <h3>{singleReview.title}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../utils/api';
import { handlePatchVotes } from '../utils/api';
import Expandable from './Expandable';
import SingleReview from './SingleReview';

const Home = ({ reviews, setReviews }) => {
  useEffect(() => {
    fetchReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [setReviews]);
  console.log(reviews);
  return (
    <div>
      <h2>Reviews:</h2>

      <ul>
        {reviews.map((singleReview) => {
          return (
            <li key={singleReview.review_id}>
              <Expandable singleReview={singleReview}>
                <SingleReview
                  reviews={reviews}
                  review_id={singleReview.review_id}
                />
              </Expandable>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

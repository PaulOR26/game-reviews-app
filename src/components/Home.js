import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../utils/api';
import { handlePatchVotes } from '../utils/api';
import Expandable from './Expandable';

const Home = ({ reviews, setReviews }) => {
  useEffect(() => {
    fetchReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [setReviews]);
  return (
    <div>
      <h2>Reviews:</h2>

      <ul>
        {reviews.map((singleReview) => {
          return (
            <li key={singleReview.review_id}>
              <Link to={`/reviews/${singleReview.review_id}`}>
                <h3>{singleReview.title}</h3>
                <img
                  src={singleReview.review_img_url}
                  className='review-images'
                />
              </Link>
              Votes: {singleReview.votes}
              <p>{singleReview.comment_count} comments</p>
              <Expandable>
                <p>testing</p>
                <p>testing</p>
              </Expandable>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

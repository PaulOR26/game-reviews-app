import Loader from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../utils/api';
import { handlePatchVotes } from '../utils/api';
import Expandable from './Expandable';
import SingleReview from './SingleReview';

const Home = ({ reviews, setReviews }) => {
  const [selectedReview, setSelectedReview] = useState();
  const [votes, setVotes] = useState();

  useEffect(() => {
    fetchReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [setReviews]);
  // console.log(reviews);
  if (reviews) {
    return (
      <div>
        ;<h2>Reviews:</h2>
        <ul>
          {reviews.map((singleReview) => {
            return (
              <li key={singleReview.review_id}>
                <Expandable
                  singleReview={singleReview}
                  selectedReview={selectedReview}
                  setSelectedReview={setSelectedReview}
                  setVotes={setVotes}
                >
                  <SingleReview
                    reviews={reviews}
                    review_id={singleReview.review_id}
                    votes={votes}
                    setVotes={setVotes}
                  />
                </Expandable>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else
    return (
      <Loader
        type='Circles'
        color='#008000'
        height={100}
        width={100}
        visible='true'
      />
    );
};

export default Home;

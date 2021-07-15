import { useState, useEffect } from 'react';
import { fetchReviews } from '../utils/api';
import ExpandableReviews from './ExpandableReviews';
import SingleReview from './SingleReview';
import Loading from './Loading';
import SelectCategory from './SelectCategory';

const Home = () => {
  const [reviews, setReviews] = useState();
  const [selectedReview, setSelectedReview] = useState();
  const [votes, setVotes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchReviews(selectedCategory).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [selectedCategory]);

  if (isLoading) return <Loading />;
  else {
    return (
      <div className='home-component'>
        <h1>Game Reviews</h1>
        <SelectCategory setSelectedCategory={setSelectedCategory} />
        <ul>
          {reviews.map((singleReview) => {
            return (
              <li key={singleReview.review_id} className='review-box'>
                <ExpandableReviews
                  singleReview={singleReview}
                  selectedReview={selectedReview}
                  setSelectedReview={setSelectedReview}
                >
                  <SingleReview
                    reviews={reviews}
                    review_id={singleReview.review_id}
                    votes={votes}
                    setVotes={setVotes}
                  />
                </ExpandableReviews>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Home;

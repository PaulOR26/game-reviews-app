import { useState, useEffect } from 'react';
import { fetchReviews } from '../utils/api';
import ExpandableReviews from './ExpandableReviews';
import SingleReview from './SingleReview';
import SelectCategory from './SelectCategory';
import Loading from './Loading';

const Home = () => {
  const [reviews, setReviews] = useState();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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
                <ExpandableReviews singleReview={singleReview}>
                  <SingleReview singleReview={singleReview} />
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

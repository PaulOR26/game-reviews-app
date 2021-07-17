import { useState, useEffect } from 'react';
import { fetchReviews } from '../utils/api';
import ExpandableReviews from './ExpandableReviews';
import SingleReview from './SingleReview';
import SelectCategory from './SelectCategory';
import SortBy from './SortBy';

import Loading from './Loading';

const Home = ({
  reviewWithBody,
  setReviewWithBody,
  onReviewPage,
  setOnReviewPage,
}) => {
  const [reviews, setReviews] = useState();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSortBy, setSelectedSortBy] = useState('Date');
  const [orderBy, setOrderBy] = useState('desc');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(selectedCategory, selectedSortBy, orderBy).then(
      (reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false);
      }
    );
  }, [selectedCategory, selectedSortBy, orderBy]);

  if (isLoading) return <Loading />;
  else {
    return (
      <div className='home-component'>
        <h1>Game Reviews</h1>
        <div className='home-filters'>
          <SelectCategory setSelectedCategory={setSelectedCategory} />
          <SortBy
            selectedSortBy={selectedSortBy}
            setSelectedSortBy={setSelectedSortBy}
            setOrderBy={setOrderBy}
            orderBy={orderBy}
          />
        </div>
        <h2>Showing {selectedCategory || 'all'} games</h2>
        <ul>
          {reviews.map((singleReview) => {
            return (
              <li key={singleReview.review_id} className='review-box'>
                <ExpandableReviews
                  singleReview={singleReview}
                  openClose={false}
                  setOnReviewPage={setOnReviewPage}
                  isOnReviewPage={false}
                >
                  <SingleReview
                    singleReview={singleReview}
                    reviewWithBody={reviewWithBody}
                    setReviewWithBody={setReviewWithBody}
                    onReviewPage={onReviewPage}
                    setOnReviewPage={setOnReviewPage}
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

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviewById } from '../utils/api';
import { Link } from 'react-router-dom';
import ExpandableReviews from './ExpandableReviews';
import SingleReview from './SingleReview';
import Loading from './Loading';

const ReviewPage = ({
  reviewWithBody,
  setReviewWithBody,
  onReviewPage,
  setOnReviewPage,
}) => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchReviewById(review_id)
      .then((returnedReview) => {
        setReviewWithBody(returnedReview);
        setOnReviewPage(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.response.data.msg);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Loading />;
  if (errorMsg)
    return (
      <div className='router-error'>
        <div className='home-component'>
          <h1>Game Reviews</h1>
        </div>
        <h2>{errorMsg}</h2>
        <div className='router-link'>
          <Link to={`/`}>
            <button className='review-page-btn'>
              Click here to go to our reviews
            </button>
          </Link>
        </div>
      </div>
    );
  else {
    return (
      <div className='review-page'>
        <div className='home-component'>
          <h1>Game Reviews</h1>
        </div>
        <ExpandableReviews
          singleReview={reviewWithBody}
          openClose={true}
          setOnReviewPage={setOnReviewPage}
          isOnReviewPage={false}
        >
          <SingleReview
            singleReview={reviewWithBody}
            reviewWithBody={reviewWithBody}
            setReviewWithBody={setReviewWithBody}
            onReviewPage={onReviewPage}
            setOnReviewPage={setOnReviewPage}
          />
        </ExpandableReviews>
      </div>
    );
  }
};

export default ReviewPage;

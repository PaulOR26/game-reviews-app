import Loader from 'react-loader-spinner';
import ExpandableComments from './ExpandableComments';
import { fetchReviewById, handlePatchVotes } from '../utils/api';
// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comments from './Comments';

const SingleReview = ({ reviews, review_id, votes, setVotes }) => {
  const [fullReview, setFullReview] = useState();
  const [selectedReview] = reviews.filter((review) => {
    return review.review_id === review_id;
  });

  useEffect(() => {
    fetchReviewById(selectedReview.review_id).then((returnedReview) => {
      setFullReview(returnedReview);
      setVotes(returnedReview.review.votes);
    });
  }, []);

  if (fullReview) {
    return (
      <div>
        <p>{fullReview.review.review_body}</p>
        <p>Likes: {votes}</p>
        <p
          onClick={() => {
            setVotes(votes + 1);
            return handlePatchVotes(selectedReview.review_id, setVotes, votes);
          }}
        >
          Like
        </p>
        <ExpandableComments commentCount={selectedReview.comment_count}>
          <Comments review_id={selectedReview.review_id} />
        </ExpandableComments>
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

export default SingleReview;

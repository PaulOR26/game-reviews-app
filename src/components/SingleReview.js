import Loader from 'react-loader-spinner';
import { fetchReviewById, handlePatchVotes } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleReview = ({ reviews, review_id }) => {
  const [fullReview, setFullReview] = useState();

  // const { review_id } = useParams();
  // console.log(reviews, review_id);

  const [selectedReview] = reviews.filter((review) => {
    // console.log(review.review_id, review_id);
    return review.review_id === review_id;
  });

  useEffect(() => {
    fetchReviewById(selectedReview.review_id).then((returnedReview) => {
      setFullReview(returnedReview);
    });
  }, []);

  // console.log(fullReview.review.title);

  const [votes, setVotes] = useState(selectedReview.votes);
  if (fullReview) {
    return (
      <div>
        <p>{fullReview.review.review_body}</p>
        <p
          onClick={() => {
            setVotes(votes + 1);
            return handlePatchVotes(selectedReview.review_id, setVotes, votes);
          }}
        >
          Votes: {votes}
        </p>

        <p>{selectedReview.comment_count} comments</p>
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

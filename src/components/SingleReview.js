import { fetchReviewById, handlePatchVotes } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleReview = ({ reviews, review_id }) => {
  const [fullReview, setFullReview] = useState({});

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

  console.log(fullReview);

  const [votes, setVotes] = useState(selectedReview.votes);

  return (
    <div>
      <p>{fullReview.review.title}</p>
      <p
        onClick={() => {
          return handlePatchVotes(selectedReview.review_id, setVotes, votes);
        }}
      >
        Votes: {votes}
      </p>

      <p>{selectedReview.comment_count} comments</p>
    </div>
  );
};

export default SingleReview;

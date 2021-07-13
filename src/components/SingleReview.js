import { handlePatchVotes } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const SingleReview = ({ reviews }) => {
  const { review_id } = useParams();

  const [selectedReview] = reviews.filter((review) => {
    return review.review_id.toString() === review_id;
  });
  const [votes, setVotes] = useState(selectedReview.votes);

  return (
    <div>
      <h3>{selectedReview.title}</h3>
      <img src={selectedReview.review_img_url} className='review-images' />

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

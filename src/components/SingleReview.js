import ExpandableComments from './ExpandableComments';
import { fetchReviewById, handlePatchVotes } from '../utils/api';
import { useState, useEffect } from 'react';
import Comments from './Comments';
import Loading from './Loading';

const SingleReview = ({ reviews, review_id, votes, setVotes }) => {
  const [fullReview, setFullReview] = useState();
  const [commentVotes, setCommentVotes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentCounter, setCommentCounter] = useState();

  const [selectedReview] = reviews.filter((review) => {
    return review.review_id === review_id;
  });

  useEffect(() => {
    fetchReviewById(selectedReview.review_id).then((returnedReview) => {
      setFullReview(returnedReview);
      setVotes(returnedReview.review.votes);
      setIsLoading(false);
      setCommentCounter(returnedReview.review.comment_count);
    });
  }, []);

  if (isLoading) return <Loading />;
  else {
    return (
      <div className='expanded-review'>
        <p>{fullReview.review.review_body}</p>
        <p>
          By {fullReview.review.owner} {fullReview.review.created_at}
        </p>
        <div className='likes-section'>
          <p>Likes: {votes}</p>
          <p
            className='likebtn'
            onClick={() => {
              setVotes(votes + 1);
              return handlePatchVotes(
                selectedReview.review_id,
                setVotes,
                votes
              );
            }}
          >
            Like
          </p>
        </div>

        <ExpandableComments commentCounter={commentCounter}>
          <Comments
            review_id={selectedReview.review_id}
            commentVotes={commentVotes}
          />
        </ExpandableComments>
      </div>
    );
  }
};

export default SingleReview;

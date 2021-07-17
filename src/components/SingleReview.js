import { Link } from 'react-router-dom';
import { fetchReviewById, handlePatchVotes } from '../utils/api';
import { useState, useEffect } from 'react';
import ExpandableComments from './ExpandableComments';
import Comments from './Comments';
import dateFormat from 'dateformat';
import Loading from './Loading';

const SingleReview = ({
  singleReview,
  reviewWithBody,
  setReviewWithBody,
  onReviewPage,
  setOnReviewPage,
}) => {
  const [votes, setVotes] = useState();
  const [commentCount, setCommentCount] = useState(singleReview.comment_count);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviewById(singleReview.review_id).then((returnedReview) => {
      setReviewWithBody(returnedReview);
      setVotes(returnedReview.votes);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;
  else {
    let buttonText;
    let linkPath;
    if (onReviewPage) {
      buttonText = 'All Reviews';
      linkPath = '/';
    } else {
      buttonText = 'Review Page';
      linkPath = `/reviews/${reviewWithBody.review_id}`;
    }

    return (
      <div className='expanded-review'>
        <div className='router-link'>
          <Link
            to={linkPath}
            onClick={() => {
              return setOnReviewPage((currState) => !currState);
            }}
          >
            <button className='review-page-btn'>{buttonText}</button>
          </Link>
        </div>

        <p className='review-body'>{reviewWithBody.review_body}</p>

        <div className='author-details'>
          <p>
            {dateFormat(reviewWithBody.created_at, 'mmmm dS, yyyy, h:MM:ss TT')}
          </p>
        </div>

        <div className='likes-section'>
          <p>Likes: {votes}</p>
          <button
            className='likebtn'
            disabled={isDisabled}
            onClick={() => {
              setIsDisabled(true);
              setVotes(votes + 1);
              return handlePatchVotes(
                singleReview.review_id,
                setVotes,
                reviewWithBody.votes,
                setIsDisabled
              );
            }}
          ></button>
        </div>

        <ExpandableComments commentCount={commentCount}>
          <Comments
            review_id={singleReview.review_id}
            commentCount={commentCount}
            setCommentCount={setCommentCount}
          />
        </ExpandableComments>
      </div>
    );
  }
};

export default SingleReview;

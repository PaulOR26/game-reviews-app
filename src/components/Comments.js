import { useState, useEffect } from 'react';
import { fetchCommentsByReviewId } from '../utils/api';
import Loading from './Loading';
import Likes from './Likes';
import CommentsForm from './CommentsForm';
import dateFormat from 'dateformat';

const Comments = ({ review_id, commentCount, setCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [commentCount]);

  if (isLoading) return <Loading />;
  else {
    return (
      <div>
        <CommentsForm
          review_id={review_id}
          commentCount={commentCount}
          setCommentCount={setCommentCount}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <li className='individual-comments' key={comment.comment_id}>
                <p className='comment-body'>{comment.body}</p>
                <div className='author-details'>
                  <p>By</p>
                  <p className='author-name'>{comment.author}</p>
                  <p>
                    {' '}
                    -{' '}
                    {dateFormat(
                      comment.created_at,
                      'dddd, mmmm dS, yyyy, h:MM:ss TT'
                    )}
                  </p>
                </div>
                <Likes
                  currLikes={comment.votes}
                  commentId={comment.comment_id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Comments;

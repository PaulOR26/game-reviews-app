import { useState, useEffect } from 'react';
import { fetchCommentsByReviewId } from '../utils/api';
import Loading from './Loading';
import Likes from './Likes';
import CommentsForm from './CommentsForm';

const Comments = ({ review_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentsLength, setCommentsLength] = useState(comment_count);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [commentsLength]);

  if (isLoading) return <Loading />;
  else {
    return (
      <div>
        <CommentsForm
          newComment={newComment}
          setNewComment={setNewComment}
          review_id={review_id}
          commentsLength={commentsLength}
          setCommentsLength={setCommentsLength}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <li className='individual-comments' key={comment.comment_id}>
                <p className='comment-body'>{comment.body}</p>
                <div className='author-details'>
                  <p>By</p>
                  <p className='author-name'>{comment.author}</p>
                  <p>{comment.created_at}</p>
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

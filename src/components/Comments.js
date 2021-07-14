import { useState, useEffect } from 'react';
import { fetchCommentsByReviewId } from '../utils/api';
import Loader from 'react-loader-spinner';
import { handlePatchComments } from '../utils/api';
import Likes from './Likes';
import CommentsForm from './CommentsForm';

const Comments = ({
  review_id,
  commentVotes,
  setCommentVotes,
  comment_count,
}) => {
  const [comments, setComments] = useState([]);
  const [commentVotesChange, setCommentVotesChange] = useState({});
  const [newComment, setNewComment] = useState('');
  const [commentsLength, setCommentsLength] = useState(comment_count);

  console.log('infinite?');

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setCommentVotesChange((currentState) => {
        const newObject = { currentState };
        return comments.forEach((comment) => {
          newObject[comment.comment_id] = comment.votes;
        });
      });
    });
  }, [commentsLength]);

  console.log(comments.length);
  //   console.log(commentVotesChange, comments, 'HERE');
  //   console.log(comments);

  //   setCommentVotes(() => {
  //     return { ...commentVotes, comment_id: comment.votes };
  //   });

  if (comments) {
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
          {comments.map((comment, index) => {
            return (
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>Likes:</p>
                <Likes
                  currLikes={comment.votes}
                  commentId={comment.comment_id}
                />
                <p>User:</p>
                <p>{comment.author}</p>
                <p>Created:</p>
                <p>{comment.created_at}</p>
              </li>
            );
          })}
        </ul>
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

export default Comments;

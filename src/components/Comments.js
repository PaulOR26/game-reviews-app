import { handleSubmitComment } from '../utils/api';
import { useState, useEffect } from 'react';
import { fetchCommentsByReviewId } from '../utils/api';
import Loader from 'react-loader-spinner';
import { handlePatchComments } from '../utils/api';

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState();
  const [commentVotes, setCommentVotes] = useState();

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [setComments]);
  console.log(comments);
  if (comments) {
    return (
      <div>
        <form onSubmit={handleSubmitComment}>
          <label htmlFor='comment-box'>Leave a comment</label>
          <input id='comment-box' placeholder='Your comment here...'></input>
          <button type='submit'>Submit</button>
        </form>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>Votes:</p>
                <p>{commentVotes}</p>
                <p
                  onClick={() => {
                    setCommentVotes(commentVotes + 1);
                    return handlePatchComments(
                      comment.comment_id,
                      setCommentVotes,
                      commentVotes
                    );
                  }}
                >
                  Like
                </p>
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

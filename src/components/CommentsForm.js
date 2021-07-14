import { preventDefault } from '../utils/api';
import { handleSubmitComment } from '../utils/api';
import { useState } from 'react';

const CommentsForm = ({
  newComment,
  setNewComment,
  review_id,
  commentsLength,
  setCommentsLength,
}) => {
  const [postedComment, setPostedComment] = useState('');

  return (
    <form onSubmit={preventDefault}>
      <label htmlFor='comment-box'>Leave a comment</label>
      <input
        id='comment-box'
        placeholder='Your comment here...'
        onChange={(event) => setNewComment(event.target.value)}
      ></input>
      <button
        type='submit'
        onClick={() => {
          handleSubmitComment(
            review_id,
            newComment,
            commentsLength,
            setCommentsLength,
            setPostedComment
          );
        }}
      >
        Submit
      </button>
      <p>{postedComment}</p>
    </form>
  );
};

export default CommentsForm;

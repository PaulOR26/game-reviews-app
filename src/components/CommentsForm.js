import { preventDefault } from '../utils/api';
import { handleSubmitComment } from '../utils/api';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const CommentsForm = ({
  newComment,
  setNewComment,
  review_id,
  commentsLength,
  setCommentsLength,
  setCommentCounter,
}) => {
  const [postedComment, setPostedComment] = useState('');
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <form onSubmit={preventDefault} className='login-form'>
      <label htmlFor='comment-box'>Leave a comment</label>
      <textarea
        id='comment-box'
        placeholder='Your comment here...'
        type='text'
        onChange={(event) => setNewComment(event.target.value)}
      ></textarea>
      <button
        type='submit'
        onClick={() => {
          handleSubmitComment(
            review_id,
            newComment,
            commentsLength,
            setCommentsLength,
            setPostedComment,
            setCommentCounter,
            user.username
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

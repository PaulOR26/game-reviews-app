import { preventDefault } from '../utils/api';
import { handleSubmitComment } from '../utils/api';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const CommentsForm = ({ review_id, commentCount, setCommentCount }) => {
  const { user } = useContext(UserContext);

  const [newComment, setNewComment] = useState('');
  const [postedComment, setPostedComment] = useState('');

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
            user.username,
            review_id,
            newComment,
            commentCount,
            setCommentCount,
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

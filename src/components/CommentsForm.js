import { preventDefault } from '../utils/api';
import { handleSubmitComment } from '../utils/api';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useAlert } from 'react-alert';

const CommentsForm = ({
  review_id,
  commentCount,
  setCommentCount,
  setComments,
}) => {
  const alert = useAlert();

  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState('');
  const [postedComment, setPostedComment] = useState('');

  return (
    <form onSubmit={preventDefault} className='login-form'>
      <div className='submit-comment-section'>
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
            if (newComment === '')
              alert.show(
                'Please enter something into the comment field before posting'
              );
            else {
              setComments((currState) => {
                return [
                  {
                    author: user.username,
                    body: newComment,
                    comment_id: 'new',
                    created_at: new Date(),
                    votes: 0,
                  },
                  ...currState,
                ];
              });
              handleSubmitComment(
                user.username,
                review_id,
                newComment,
                commentCount,
                setCommentCount,
                setPostedComment,
                setComments
              );
            }
          }}
        >
          Submit
        </button>
      </div>
      <p>{postedComment}</p>
    </form>
  );
};

export default CommentsForm;

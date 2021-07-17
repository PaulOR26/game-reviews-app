import { preventDefault } from '../utils/api';
import { handleSubmitComment } from '../utils/api';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const CommentsForm = ({
  review_id,
  commentCount,
  setCommentCount,
  setComments,
}) => {
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
            // console.log(newComment, currState)
            setComments((currState) => {
              console.log({
                author: user.username,
                body: newComment,
                comment_id: 73,
                votes: 0,
              });
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
              setPostedComment
            );
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

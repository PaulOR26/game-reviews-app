import { useState } from 'react';
import { handlePatchCommentLikes } from '../utils/api';

const Likes = ({ currLikes, commentId }) => {
  const [currentLikes, setCurrentLikes] = useState(currLikes);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className='like-component'>
      <p>Likes: {currentLikes}</p>
      <button
        className='likebtn'
        disabled={isDisabled}
        onClick={() => {
          setIsDisabled(true);
          setCurrentLikes(currentLikes + 1);
          return handlePatchCommentLikes(
            commentId,
            currentLikes,
            setCurrentLikes,
            setIsDisabled
          );
        }}
      ></button>
    </div>
  );
};

export default Likes;

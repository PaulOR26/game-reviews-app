import { useState } from 'react';
import { handlePatchCommentLikes } from '../utils/api';

const Likes = ({ currLikes, commentId }) => {
  const [currentLikes, setCurrentLikes] = useState(currLikes);
  return (
    <div className='like-component'>
      <p>Likes: {currentLikes}</p>
      <p
        className='likebtn'
        onClick={() => {
          setCurrentLikes(currentLikes + 1);
          return handlePatchCommentLikes(
            commentId,
            currentLikes,
            setCurrentLikes
          );
        }}
      >
        Like
      </p>
    </div>
  );
};

export default Likes;

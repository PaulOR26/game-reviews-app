import { useState } from 'react';
import { handlePatchComments } from '../utils/api';

const Likes = ({ currLikes, commentId }) => {
  const [currentLikes, setCurrentLikes] = useState(currLikes);
  return (
    <div>
      <p>{currentLikes}</p>
      <p
        onClick={() => {
          setCurrentLikes(currentLikes + 1);
          // setCommentVotes(commentVotes + 1);
          return handlePatchComments(commentId);
        }}
      >
        Like
      </p>
    </div>
  );
};

export default Likes;

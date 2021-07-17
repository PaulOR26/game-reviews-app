import { useState } from 'react';
import { handlePatchCommentLikes } from '../utils/api';
import { useAlert } from 'react-alert';

const Likes = ({ currLikes, commentId }) => {
  const alert = useAlert();

  const [currentLikes, setCurrentLikes] = useState(currLikes);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className='like-component'>
      <p>Likes: {currentLikes}</p>
      <button
        className='likebtn'
        disabled={isDisabled}
        onClick={() => {
          if (commentId === 'new')
            alert.show("Oops, you can't like a comment you've just posted");
          else {
            setIsDisabled(true);
            setCurrentLikes(currentLikes + 1);
            return handlePatchCommentLikes(
              commentId,
              currentLikes,
              setCurrentLikes,
              setIsDisabled
            );
          }
        }}
      ></button>
    </div>
  );
};

export default Likes;

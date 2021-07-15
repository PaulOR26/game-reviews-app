import { useState } from 'react';

const ExpandableComments = ({ children, commentCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div className='whole-expand-section'>
      <div onClick={toggleOpen} className='comments-expand-section'>
        <p>Comments: {commentCount}</p>
        <p className='expand-icon'>{isOpen ? '↕️' : '↕️'}</p>
      </div>
      {isOpen && children}
    </div>
  );
};

export default ExpandableComments;

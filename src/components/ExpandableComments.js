import { useState } from 'react';

const ExpandableComments = ({ children, commentCounter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div className='whole-comments-expand-section'>
      <div onClick={toggleOpen} className='comments-expand-section'>
        <p>Comments: {commentCounter}</p>
        <p className='expand-icon'>{isOpen ? '↕️' : '↕️'}</p>
      </div>
      {isOpen && children}
    </div>
  );
};

export default ExpandableComments;

import { useEffect, useState } from 'react';

const ExpandableComments = ({ children, commentCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div>
      <div onClick={toggleOpen}>
        <p>Comments: {commentCount}</p>
        <p>{isOpen ? 'Collapse' : 'Expand'}</p>
      </div>
      {isOpen && children}
    </div>
  );
};

export default ExpandableComments;

import { useState } from 'react';

const Expandable = ({ children, singleReview }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div onClick={toggleOpen}>
      <h3>{singleReview.title}</h3>
      <img src={singleReview.review_img_url} className='review-images' />
      <p>{isOpen ? 'Colapse' : 'Expand'}</p>
      {isOpen && children}
    </div>
  );
};

export default Expandable;

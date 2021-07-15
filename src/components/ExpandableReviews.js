import { useState } from 'react';

const ExpandableReviews = ({ children, singleReview }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div className='whole-expand-section'>
      <div onClick={toggleOpen} className='review-expand-section'>
        <h3 className='review-title'>{singleReview.title}</h3>
        <div className='image-category'>
          <img
            src={singleReview.review_img_url}
            className='review-images'
            alt={singleReview.title}
          />
          <p>{singleReview.category}</p>
        </div>
        <p className='expand-icon'>↕️</p>
      </div>
      {isOpen && children}
    </div>
  );
};

export default ExpandableReviews;

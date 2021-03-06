import { useState } from 'react';

const ExpandableReviews = ({
  children,
  singleReview,
  openClose = false,
  setOnReviewPage,
  isOnReviewPage,
}) => {
  const [isOpen, setIsOpen] = useState(openClose);

  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <div className='whole-expand-section'>
      <div onClick={toggleOpen} className='review-expand-section'>
        <div className='review-title'>
          <h3>{singleReview.title}</h3>
          <p>{singleReview.owner}</p>
        </div>
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

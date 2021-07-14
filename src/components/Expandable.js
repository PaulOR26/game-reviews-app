import { useEffect, useState } from 'react';

const Expandable = ({
  children,
  singleReview,
  selectedReview,
  setSelectedReview,
}) => {
  const toggleOpen = () => {
    if (singleReview.review_id === selectedReview) {
      setSelectedReview();
    } else setSelectedReview(singleReview.review_id);
  };

  return (
    <div>
      <div onClick={toggleOpen}>
        <h3>{singleReview.title}</h3>
        <img src={singleReview.review_img_url} className='review-images' />
        <p>
          {selectedReview === singleReview.review_id ? 'Colapse' : 'Expand'}
        </p>
      </div>
      {selectedReview === singleReview.review_id && children}
    </div>
  );
};

export default Expandable;

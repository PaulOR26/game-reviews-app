const ExpandableReviews = ({
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
        <p className='expand-icon'>
          {selectedReview === singleReview.review_id ? '↕️' : '↕️'}
        </p>
      </div>
      {selectedReview === singleReview.review_id && children}
    </div>
  );
};

export default ExpandableReviews;

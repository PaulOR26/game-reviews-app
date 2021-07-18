import asc from '../images/sortup.png';
import desc from '../images/sortdown.png';

const SortBy = ({ selectedSortBy, setSelectedSortBy, setOrderBy, orderBy }) => {
  return (
    <div className='sortby'>
      <select
        onChange={(event) => {
          setSelectedSortBy(event.target.value);
        }}
      >
        <option value=''>Sort By: {selectedSortBy}</option>
        <option value='Title'>Title</option>
        <option value='Written By'>Written By</option>
        <option value='Date'>Date</option>
        <option value='Popular'>Popularity</option>
      </select>
      <button
        className='sort-btn'
        onClick={() => {
          setOrderBy((currState) => {
            if (currState === 'desc') return 'asc';
            else return 'desc';
          });
        }}
      >
        <p>Order</p>
        <img src={orderBy === 'desc' ? desc : asc} alt='sort order' />
      </button>
    </div>
  );
};

export default SortBy;

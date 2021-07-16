import sortup from '../images/sortup.png';
import sortdown from '../images/sortdown.png';

const SortBy = ({ selectedSortBy, setSelectedSortBy, setOrderBy }) => {
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
        <option value='Popular'>Popular</option>
      </select>
      <img
        src={sortup}
        alt='Sort ascending'
        onClick={() => {
          setOrderBy('asc');
        }}
      />
      <img
        src={sortdown}
        alt='Sort descending'
        onClick={() => {
          setOrderBy('desc');
        }}
      />
    </div>
  );
};

export default SortBy;

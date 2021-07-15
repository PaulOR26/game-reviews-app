import { useState, useEffect } from 'react';
import { fetchCategories } from '../utils/api';
import Loading from './Loading';

const SelectCategory = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;
  else {
    return (
      <select
        onChange={(event) => {
          setSelectedCategory(event.target.value);
        }}
      >
        <option value=''>Select Category</option>
        {categories.map((category) => {
          return (
            <option key={category.slug} value={category.slug}>
              {category.slug}
            </option>
          );
        })}
      </select>
    );
  }
};

export default SelectCategory;

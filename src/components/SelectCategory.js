import { useState, useEffect } from 'react';
import Loading from './Loading';
import { fetchCategories } from '../utils/api';

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

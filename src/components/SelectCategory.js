import { useState, useEffect } from 'react';
import Loading from './Loading';
import { fetchCategories } from '../utils/api';

const SelectCategory = () => {
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
      <select>
        <option>Select Category</option>
        {categories.map((category) => {
          return <option>{category.slug}</option>;
        })}
      </select>
    );
  }
};

export default SelectCategory;

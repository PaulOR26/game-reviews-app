import { useState, useEffect } from 'react';
import { handleFetchUsers } from '../utils/api';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    handleFetchUsers().then((usersFromApi) => {
      setAllUsers(usersFromApi);
      //   setIsLoading(false);
    });
  }, [setAllUsers]);

  return <div>hello</div>;
};

export default Users;

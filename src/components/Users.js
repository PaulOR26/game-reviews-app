import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { fetchUsers, fetchUserAvatars } from '../utils/api';
import Loading from './Loading';

const Users = () => {
  const { setUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((usernamesFromApi) => {
      usernamesFromApi.forEach((user) => {
        fetchUserAvatars(user.username).then((returnedUser) => {
          setUserDetails((currentState) => {
            return [
              ...currentState,
              {
                name: returnedUser.name,
                username: returnedUser.username,
                avatar: returnedUser.avatar_url,
              },
            ];
          });
          setIsLoading(false);
        });
      });
    });
  }, []);
  if (isLoading) return <Loading />;
  return (
    <ul className='user-list'>
      {userDetails.map((user) => {
        return (
          <li
            key={user.username}
            className='user-details'
            onClick={() => {
              setUser(user);
            }}
          >
            <p>{user.name}</p>
            <img
              className='review-images'
              alt='unavailable'
              src={user.avatar}
            />
            <p>{user.username}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;

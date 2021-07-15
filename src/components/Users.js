import { useState, useEffect } from 'react';
import { fetchUsers } from '../utils/api';
import { fetchUserAvatars } from '../utils/api';
import Loading from './Loading';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetchUsers().then((usernamesFromApi) => {
      usernamesFromApi.map((user) => {
        fetchUserAvatars(user.username).then((returnedUser) => {
          setUserDetails((currentState) => {
            console.log(currentState, returnedUser);
            const newUserArray = [
              ...currentState,
              {
                name: returnedUser.name,
                username: returnedUser.username,
                avatar: returnedUser.avatar_url,
              },
            ];
            return newUserArray;
          });
          setIsLoading(false);
        });
      });
    });
  }, [setUserDetails]);
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
              alt='image unavailable'
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

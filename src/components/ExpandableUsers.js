import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const ExpandableUsers = ({ children, usersIsOpen, setUsersIsOpen }) => {
  const { user } = useContext(UserContext);

  const toggleOpen = () => setUsersIsOpen((currOpen) => !currOpen);

  return (
    <div className='nav-expandable'>
      <div onClick={toggleOpen} className='nav-element-container'>
        <p className='nav-element'>Change User</p>
        <div className='nav-user'>
          <p className='nav-element'>{user.name}</p>
          <img src={user.avatar} alt={user.username} className='nav-element' />
        </div>
      </div>
      {usersIsOpen && children}
    </div>
  );
};

export default ExpandableUsers;

import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const ExpandableUsers = ({ children }) => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div className='nav-expandable'>
      <div onClick={toggleOpen} className='nav-element-container'>
        <p className='nav-element'>Login/Change User</p>
        <p className='nav-element'>{user}</p>
      </div>
      {isOpen && children}
    </div>
  );
};

export default ExpandableUsers;

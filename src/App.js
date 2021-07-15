import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import { useContext } from 'react';
import ExpandableUsers from './components/ExpandableUsers';
import Users from './components/Users';

function App() {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='app-styling'>
        <ExpandableUsers>
          <Users />
        </ExpandableUsers>
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;

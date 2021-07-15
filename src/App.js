import './App.css';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import Home from './components/Home';
import Users from './components/Users';
import ExpandableUsers from './components/ExpandableUsers';

function App() {
  const [user, setUser] = useState({ name: 'Not logged in' });

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

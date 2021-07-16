import './App.css';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import Home from './components/Home';
import Users from './components/Users';
import ExpandableUsers from './components/ExpandableUsers';

function App() {
  const [user, setUser] = useState({
    name: 'Jess Jelly',
    username: 'jessjelly',
    avatar:
      'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
  });

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

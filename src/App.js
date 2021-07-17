import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import Home from './components/Home';
import ReviewPage from './components/ReviewPage';
import Users from './components/Users';
import ExpandableUsers from './components/ExpandableUsers';

function App() {
  const [user, setUser] = useState({
    name: 'Jess Jelly',
    username: 'jessjelly',
    avatar:
      'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
  });
  const [usersIsOpen, setUsersIsOpen] = useState(false);
  const [reviewWithBody, setReviewWithBody] = useState();
  const [onReviewPage, setOnReviewPage] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className='app-styling'>
          <ExpandableUsers
            usersIsOpen={usersIsOpen}
            setUsersIsOpen={setUsersIsOpen}
          >
            <Users setUsersIsOpen={setUsersIsOpen} />
          </ExpandableUsers>
          <Switch>
            <Route path='/reviews/:review_id'>
              <ReviewPage
                reviewWithBody={reviewWithBody}
                setReviewWithBody={setReviewWithBody}
                onReviewPage={onReviewPage}
                setOnReviewPage={setOnReviewPage}
              />
            </Route>
            <Route path='/'>
              <Home
                reviewWithBody={reviewWithBody}
                setReviewWithBody={setReviewWithBody}
                onReviewPage={onReviewPage}
                setOnReviewPage={setOnReviewPage}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

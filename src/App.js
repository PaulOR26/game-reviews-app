import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import SingleReview from './components/SingleReview';

function App() {
  //NEEDS ACCESS:
  //Home | Post Review | Delete Review | Edit Review
  const [reviews, setReviews] = useState();

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Switch>
        <Route path='/reviews/:review_id'>
          <SingleReview reviews={reviews} />
        </Route>
        <Route path='/'>
          <Home reviews={reviews} setReviews={setReviews} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

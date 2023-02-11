import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewReview from './college/pages/NewReview';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserReview from './college/pages/UserReview';
import UpdateReview from './college/pages/UpdateReview';
import Auth from './user/pages/Auth';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/college" exact>
            <UserReview></UserReview>
          </Route>
          <Route path="/college/new" exact>
            <NewReview />
          </Route>
          <Route path="/college/:collegeId" exact>
            <UpdateReview/>
          </Route>
          <Route path="/auth" exact>
            <Auth/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

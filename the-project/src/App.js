import React, {useState, useCallback} from 'react';
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
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLogIn, setIsLogin] = useState(false);

  const login = useCallback(() => {
    setIsLogin(true)
  }, []);
  
  const logout = useCallback(() => {
    setIsLogin(false)
  }, []);

  let routes;
  if(isLogIn){
    routes = (
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
        <Redirect to="/" />
      </Switch>
    );
  }else{
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/college" exact>
          <UserReview></UserReview>
        </Route>
        <Route path="/auth" exact>
          <Auth/>
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{isLogIn: isLogIn, login: login, logout: logout}}>
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

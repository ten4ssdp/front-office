import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// import PrivateRoute from './components/ProtectedRoute';
import './assets/styles/index.scss';

import Home from './views/Home';
import StoreProvider from './store/MainStore';
import AuthProvider from './store/UserStore';
import Auth from './views/Auth';

function Root(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact component={Auth} path="/auth" />
        <Route exact component={Home} path="/home/:components" />
        <Redirect from="/" to="/home/home" />
        <Route exact component={Home} path="/home/home" />
      </Switch>
    </Router>
  );
}

render(
  <AuthProvider>
    <StoreProvider>
      <Root />
    </StoreProvider>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

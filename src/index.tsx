import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './views/app/App';
import * as serviceWorker from './serviceWorker';
import StoreProvider from './store/MainStore';
import AuthProvider from './store/UserStore';
import Auth from './views/auth';
import PrivateRoute from './components/ProtectedRoute';

import './styles/index.scss';

function Root(): JSX.Element {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact component={App} path="/" />
        <Route exact component={Auth} path="/auth" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
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

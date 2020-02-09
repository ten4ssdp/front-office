import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import PrivateRoute from './components/ProtectedRoute';
import './assets/styles/index.scss';

import DashboardNav from './views/Dashboard/dashboard-nav';
import Home from './views/Home';
import Header from './views/Header';
import StoreProvider from './store/MainStore';
import AuthProvider from './store/UserStore';
import Auth from './views/Auth';
import Hostels from './views/hostels/hostels';
import Vehicles from './views/Vehicles';
import UserList from './views/userList/userList';

function Root(): JSX.Element {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        <DashboardNav></DashboardNav>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Auth} path="/auth" />
          <Route exact component={Hostels} path="/hotels" />
          <Route exact component={Vehicles} path="/vehicules" />
          <Route exact component={UserList} path="/effectif" />
        </Switch>
      </div>
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

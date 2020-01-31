import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import PrivateRoute from './components/ProtectedRoute';
import './assets/styles/index.scss';

import DashboardNav from './views/dashboard/dashboard-nav';
import App from './views/app/App';
import Header from './views/header/header';
import StoreProvider from './store/MainStore';
import AuthProvider from './store/UserStore';
import Auth from './views/auth';
import Hostels from './views/hostels/hostels';
import Vehicles from './views/vehicles/vehicles';

function Root(): JSX.Element {
  return (
    <Router>
      <Header></Header>
      <div style={{display: 'flex'}}>
        <DashboardNav></DashboardNav>
        <Switch>
          <Route exact component={App} path="/" />
          <Route exact component={Auth} path="/auth" />
          <Route exact component={Hostels} path="/hotels" />
          <Route exact component={Vehicles} path="/vehicules" />
        </Switch>
      </div>
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

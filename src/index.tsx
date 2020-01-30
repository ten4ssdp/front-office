import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './views/app/App';
import * as serviceWorker from './serviceWorker';
import StoreProvider from './store/MainStore';

function Root() : JSX.Element {
  return (
    <Router>
      <Switch>
        <Route component={App} path="/" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <StoreProvider>
    <Root />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

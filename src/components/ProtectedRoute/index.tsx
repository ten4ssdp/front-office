import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookie from 'js-cookie';

interface RouteType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: JSX.Element | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ component: Component, ...rest }: RouteType) => {
  return (
    <Route
      {...rest}
      render={props =>
        cookie.get('token') === null || cookie.get('token') === undefined ? (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;

import React, { useContext, memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserStore } from '../../store/UserStore';

interface RouteType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: JSX.Element | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ component: Component, ...rest }: RouteType) => {
  const { userState } = useContext(UserStore);
  return (
    <Route
      {...rest}
      render={props =>
        userState.token !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

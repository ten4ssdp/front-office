import React, { createContext } from 'react';
import { UserState } from '../interface/userInterface';
import userReducer from '../reducer/UserReducer';

const userInitialState: UserState = {
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  address: '',
  isLogin: true,
  token: null
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserStore = createContext<UserState | any>(userInitialState);

export default function AuthProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userState, dispatch] = React.useReducer<any>(
    userReducer,
    userInitialState
  );
  return (
    <UserStore.Provider value={{ userState, dispatch }}>
      {children}
    </UserStore.Provider>
  );
}

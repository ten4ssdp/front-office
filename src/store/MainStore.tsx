import React, { createContext } from 'react';
import mainReducer from '../reducer/MainReducer';
import { MainState } from '../interface/storeInterface';

const initialState: MainState = {
  title: 'Samu Social de Paris Planning Maker'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MainStore = createContext<MainState | any>(initialState);

export default function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return (
    <MainStore.Provider value={{ state, dispatch }}>
      {children}
    </MainStore.Provider>
  );
}

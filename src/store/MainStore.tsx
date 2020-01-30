import React, { createContext } from 'react';
import mainReducer from '../reducer/MainReducer';
import { MainState } from '../interface/storeInterface';

const initialState: MainState = {
  title: 'Samu Social de Paris Planning Maker',

  events: [
    {
      id: 0,
      title: 'Hotel Ibis',
      start: new Date(),
      end: new Date(),
    },
    {
      id: 1,
      title: 'Formule 1',
      start: new Date(),
      end: new Date(),
    }
  ]
};

export const MainStore = createContext<MainState>(initialState);

export default function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  //TODO: change the any type
  const [state, dispatch] = React.useReducer<any>(mainReducer, initialState);
  return (
    <MainStore.Provider value={{ state, dispatch }}>
      {children}
    </MainStore.Provider>
  );
}

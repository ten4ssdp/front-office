import React, { createContext } from 'react';
import mainReducer from '../reducer/MainReducer';
import { MainState } from '../interface/storeInterface';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

const initialState: MainState = {
  title: 'Samu Social de Paris Planning Maker',
  modalOpen: false,
  dayOff: [moment(new Date(), dateFormat), moment(new Date(), dateFormat)],
  areaSelected: '',
  events: [
    {
      id: 0,
      title: 'Hotel Ibis',
      start: new Date(),
      end: new Date()
    },
    {
      id: 1,
      title: 'Formule 1',
      start: new Date(),
      end: new Date()
    }
  ]
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

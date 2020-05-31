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
  idDetailToShow: '',
  hostels: [],
  cars: [],
  visits: [],
  teamsAndSector: [],
  teamId: '',
  idToEdit: '',
  selectedWeekFirstDay: moment()
    .startOf('isoWeek')
    .day(1)
    .format('MM-DD-YYYY'),
  refresh: false
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MainStore = createContext<MainState | any>(initialState);

export default function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer<any>(mainReducer, initialState);
  return (
    <MainStore.Provider value={{ state, dispatch }}>
      {children}
    </MainStore.Provider>
  );
}

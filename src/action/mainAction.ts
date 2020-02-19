import {
  TOGGLE_MODAL,
  SET_DAY_OFF,
  SELECT_AREA,
  FETCH_HOTEL,
  FETCH_CAR,
  SET_ID_TO_EDIT,
  CAN_REFRESH,
  ID_TO_SHOW
} from '../constant/mainStore';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toggleModal = (dispatch: any, payload: boolean) => {
  return dispatch({
    type: TOGGLE_MODAL,
    payload
  });
};

export const setDayOff = (dispatch: any, payload: string[]) => {
  return dispatch({
    type: SET_DAY_OFF,
    payload
  });
};

export const selectArea = (dispatch: any, payload: string) => {
  return dispatch({
    type: SELECT_AREA,
    payload
  });
};

export const setHostelsDatasToStore = (dispatch: any, payload: any[]) => {
  return dispatch({
    type: FETCH_HOTEL,
    payload
  });
};
export const setCarsDatasToStore = (dispatch: any, payload: any[]) => {
  return dispatch({
    type: FETCH_CAR,
    payload
  });
};

export const setIdToEdit = (dispatch: any, payload: string | number) => {
  return dispatch({
    type: SET_ID_TO_EDIT,
    payload
  });
};

export const refreshApp = (dispatch: any, payload: boolean) => {
  return dispatch({
    type: CAN_REFRESH,
    payload
  });
};

export const setIdDetailToShow = (dispatch: any, payload: string) => {
  return dispatch({
    type: ID_TO_SHOW,
    payload
  });
};

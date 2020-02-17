import { TOGGLE_MODAL, SET_DAY_OFF, SELECT_AREA } from '../constant/mainStore';

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

import { TOGGLE_MODAL, SET_DAY_OFF } from '../constant/mainStore';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toggleModal = (dispatch: any, payload: boolean) => {
  return dispatch({
    type: TOGGLE_MODAL,
    payload
  });
};

export const setDayOff = (dispatch: any, payload: any) => {
  return dispatch({
    type: SET_DAY_OFF,
    payload
  });
};

import {
  TOGGLE_MODAL,
  SET_DAY_OFF,
  SELECT_AREA,
  FETCH_HOTEL,
  FETCH_CAR,
  SET_ID_TO_EDIT,
  CAN_REFRESH,
  ID_TO_SHOW,
  SET_VISIT_TO_STORE,
  SET_TEAM_ID_TO_STORE,
  SET_SECTOR_AND_TEAM_TO_STORE,
  SET_WEEK_FIRST_DAY,
  ADD_EMERGENCY
} from '../constant/mainStore';
import { HotelFromDB } from 'interface/hotel';
import { Dispatch } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toggleModal = (
  dispatch: Dispatch<{ type: string; payload: boolean }>,
  payload: boolean
) => {
  return dispatch({
    type: TOGGLE_MODAL,
    payload
  });
};

export const setDayOff = (
  dispatch: Dispatch<{ type: string; payload: string[] }>,
  payload: string[]
) => {
  return dispatch({
    type: SET_DAY_OFF,
    payload
  });
};

export const selectArea = (
  dispatch: Dispatch<{ type: string; payload: string }>,
  payload: string
) => {
  return dispatch({
    type: SELECT_AREA,
    payload
  });
};

export const setHostelsDatasToStore = (
  dispatch: Dispatch<{ type: string; payload: HotelFromDB[] }>,
  payload: HotelFromDB[]
) => {
  return dispatch({
    type: FETCH_HOTEL,
    payload
  });
};
export const setCarsDatasToStore = (
  dispatch: Dispatch<{ type: string; payload: any[] }>,
  payload: any[]
) => {
  return dispatch({
    type: FETCH_CAR,
    payload
  });
};

export const setIdToEdit = (
  dispatch: Dispatch<{ type: string; payload: string | number }>,
  payload: string | number
) => {
  return dispatch({
    type: SET_ID_TO_EDIT,
    payload
  });
};

export const refreshApp = (
  dispatch: Dispatch<{ type: string; payload: boolean }>,
  payload: boolean
) => {
  return dispatch({
    type: CAN_REFRESH,
    payload
  });
};

export const setIdDetailToShow = (
  dispatch: Dispatch<{ type: string; payload: string }>,
  payload: string
) => {
  return dispatch({
    type: ID_TO_SHOW,
    payload
  });
};

export const setVisitToStore = (
  dispatch: Dispatch<{ type: string; payload: any }>,
  payload: any
) => {
  return dispatch({
    type: SET_VISIT_TO_STORE,
    payload
  });
};

export const setTeamIdToStore = (
  dispatch: Dispatch<{ type: string; payload: string }>,
  payload: string
) => {
  return dispatch({
    type: SET_TEAM_ID_TO_STORE,
    payload
  });
};

export const setSectorAndTeam = (
  dispatch: Dispatch<{ type: string; payload: any }>,
  payload: any
) => {
  return dispatch({
    type: SET_SECTOR_AND_TEAM_TO_STORE,
    payload
  });
};

export const setWeekFirstDay = (
  dispatch: Dispatch<{ type: string; payload: any }>,
  payload: any
) => {
  return dispatch({
    type: SET_WEEK_FIRST_DAY,
    payload
  });
};
export const addEmergency = (
  dispatch: Dispatch<{ type: string; payload: any }>,
  payload: any
) => {
  return dispatch({
    type: ADD_EMERGENCY,
    payload
  });
};

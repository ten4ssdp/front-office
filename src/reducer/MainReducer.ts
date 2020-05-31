import { MainState } from '../interface/storeInterface';
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
  SET_WEEK_FIRST_DAY
} from 'constant/mainStore';
function mainReducer(
  state: MainState,
  action: { type: string; payload: MainState }
) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modalOpen: action.payload };
    case SET_DAY_OFF:
      return { ...state, dayOff: action.payload };
    case SELECT_AREA:
      return { ...state, areaSelected: action.payload };
    case FETCH_HOTEL:
      return { ...state, hostels: action.payload };
    case FETCH_CAR:
      return { ...state, cars: action.payload };
    case SET_ID_TO_EDIT:
      return { ...state, idToEdit: action.payload };
    case CAN_REFRESH:
      return { ...state, refresh: action.payload };
    case ID_TO_SHOW:
      return { ...state, idDetailToShow: action.payload };
    case SET_VISIT_TO_STORE:
      return { ...state, visits: action.payload };
    case SET_TEAM_ID_TO_STORE:
      return { ...state, teamId: action.payload };
    case SET_SECTOR_AND_TEAM_TO_STORE:
      return { ...state, teamsAndSector: action.payload };
    case SET_WEEK_FIRST_DAY:
      return { ...state, selectedWeekFirstDay: action.payload };
    default:
      return state;
  }
}

export default mainReducer;

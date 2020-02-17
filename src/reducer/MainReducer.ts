import { MainState } from '../interface/storeInterface';
import { TOGGLE_MODAL, SET_DAY_OFF, SELECT_AREA } from 'constant/mainStore';
function mainReducer(
  // state: { title: string, events: []},
  state: MainState,
  //TODO: change the any type
  action: { type: string; payload: MainState }
) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modalOpen: action.payload };
    case SET_DAY_OFF:
      return { ...state, dayOff: action.payload };
    case SELECT_AREA:
      return { ...state, areaSelected: action.payload };
    default:
      return state;
  }
}

export default mainReducer;

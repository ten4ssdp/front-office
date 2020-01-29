import { MainState } from '../interface/storeInterface';
function mainReducer(
  state: MainState,
  //TODO: change the any type
  action: { type: string; payload: MainState }
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainReducer;

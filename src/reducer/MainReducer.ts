import { MainState } from '../interface/storeInterface';
function mainReducer(
  // state: { title: string, events: []},
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


function mainReducer(
  state: { title: string, events: []},
  //TODO: change the any type
  action: { type: string; payload: any }
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainReducer;


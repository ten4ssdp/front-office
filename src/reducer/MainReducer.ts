function mainReducer(
  state: { title: string },
  action: { type: string; payload: any }
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainReducer;

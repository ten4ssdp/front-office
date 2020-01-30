function mainReducer(
  state: { title: string },
  //TODO: change the any type
  action: { type: string; payload: any }
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainReducer;

/*
 {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2015, 3, 0),
          end: new Date(2015, 3, 1),
  },
  {
      id: 1,
      title: 'Long Event',
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10),
  },

  {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
  },

*/ 

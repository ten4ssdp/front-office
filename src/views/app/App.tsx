import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import { momentLocalizer } from 'react-big-calendar';
// import Calendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const Calendar = require('react-big-calendar');
const localizer = momentLocalizer(moment);

function App(): any {
  const { state } = useContext(MainStore);

  React.useEffect(() => {
    if (isElectron()) {
      alert('hello world');
    }
  }, []);

  return (
    <div className="App">
      <Calendar
        events={[
          {
            id: 0,
            title: 'Hotel Ibis',
            allDay: true,
            start: new Date(),
            end: new Date(),
          }
        ]}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
      ></Calendar>
    </div>
  );
}

export default App;


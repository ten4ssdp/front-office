import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './app.scss';
import UserOverview from '../userOverview/userOverview';


const Calendar = require('react-big-calendar');
const localizer = momentLocalizer(moment);

function App(): JSX.Element {
  const { state } = useContext(MainStore);

  React.useEffect(() => {
    if (isElectron()) {
      alert('hello world');
    }
  }, []);

  return (
    
    <div className="App">
      <div className="App-container">
        <UserOverview></UserOverview>
        <Calendar
          className="App-calendar"
          events={state.events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          defaultView="week"
        ></Calendar>
      </div>
    </div>
  );
}

export default App;


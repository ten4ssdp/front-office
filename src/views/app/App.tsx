import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Header from '../header/header';
import DashboardNav from '../dashboard/dashboard-nav';

import 'react-big-calendar/lib/css/react-big-calendar.css';

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
    
    <div className="App" style={{margin: 0, padding: 0}}>
      <Header></Header>
      <div style={{display: 'flex'}}>
        <DashboardNav></DashboardNav>
        <Calendar
          events={state.events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          defaultView="week"
          style={{ width: 80 + '%', height: 700 }}
        ></Calendar>
      </div>
    </div>
  );
}

export default App;


import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import Header from '../header/header';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DashboardNav from '../dashboard/dashboard-nav';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './app.scss';


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
      <div className="App-container">
        <DashboardNav></DashboardNav>
        <Calendar
          className="App-calendar"
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


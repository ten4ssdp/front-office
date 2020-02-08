import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import MyCalendar from '../calendar/calendar'
import UserOverview from '../userOverview/userOverview';
import './app.scss';


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
        <MyCalendar/>
      </div>
    </div>
  );
}

export default App;


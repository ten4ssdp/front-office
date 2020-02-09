import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import MyCalendar from '../Calendar';
import UserOverview from '../userOverview/userOverview';
import './app.scss';

function Home(): JSX.Element {
  const { state } = useContext(MainStore);

  React.useEffect(() => {
    if (isElectron()) {
      alert('hello world');
    }
  }, []);

  return (
    <div className="Home">
      <div className="Home-container">
        <UserOverview />
        <MyCalendar />
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Route } from 'react-router-dom';

// import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import DashboardNav from '../../components/Sidebar';
import './home.scss';
import Header from '../../components/Header';
import HomeRoot from './Home';
import Hostels from '../Hostels';
import Vehicles from '../Vehicles';
import UserList from '../UserList';

function Home(): JSX.Element {
  // const { state } = React.useContext(MainStore);
  React.useEffect(() => {
    if (isElectron()) {
      alert('hello world');
    }
  }, []);

  return (
    <div className="Home" style={{ display: 'flex' }}>
      <DashboardNav />
      <div className="Home-layout">
        <Header />
        <div className="Home-container">
          <Route component={HomeRoot} path="/home/home" />
          <Route exact component={Hostels} path="/home/hotels" />
          <Route exact component={Vehicles} path="/home/vehicules" />
          <Route exact component={UserList} path="/home/effectif" />
        </div>
      </div>
    </div>
  );
}

export default Home;

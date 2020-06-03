import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

// import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';
import DashboardNav from '../../components/Sidebar';
import './home.scss';
import Header from '../../components/Header';
import HomeRoot from './Home';
import Hostels from '../Hostels';
import Vehicles from '../Vehicles';
import UserList from '../UserList';
import Cookies from 'js-cookie';
import { getCurrentUser } from 'action/userAction';
import { UserStore } from 'store/UserStore';
import { API_URL } from 'utils/constant';

function Home(): JSX.Element {
  const { dispatch } = React.useContext(UserStore);
  useEffect(() => {
    if (isElectron()) {
      alert('hello world');
    }
  }, []);

  useEffect(() => {
    const token: string = Cookies.get('token') || '';
    getCurrentUser(dispatch, Cookies.get('token') as string);
    const socket = socketIOClient(API_URL);
    socket.on('connect', () => {
      socket.emit('join', token);
      socket.on('messages', function(data: any) {
        console.log(data);
      });
      socket.on('emergency', function(data: any) {
        alert(JSON.stringify(data));
      });
    });
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

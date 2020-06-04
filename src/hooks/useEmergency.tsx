import { useState, useEffect, useContext } from 'react';
import { MainStore } from 'store/MainStore';
import Cookies from 'js-cookie';
import { API_URL } from 'utils/constant';
import socketIOClient from 'socket.io-client';
import { Visit } from 'interface/hotel';
import { addEmergency } from 'action/mainAction';

export default () => {
  const [notifications, setNotification] = useState<any>([]);
  const { state, dispatch } = useContext(MainStore);

  useEffect(() => {
    Notification.requestPermission();
    const token: string = Cookies.get('token') || '';
    const socket = socketIOClient(API_URL);
    socket.on('connect', () => {
      socket.emit('join', token);
      socket.on('emergency', function(data: any) {
        setNotification(data);
      });
    });
  }, []);
  useEffect(() => {
    if (notifications !== null && state?.teamId === notifications?.teamId) {
      new Notification('Nouvelle urgence', {
        body: notifications?.hotel?.name
      });
      notifications !== null && addEmergency(dispatch, notifications);
    }
  }, [notifications]);

  return [notifications];
};

import { useState, useEffect, useContext } from 'react';
import { MainStore } from 'store/MainStore';
import Cookies from 'js-cookie';
import { API_URL } from 'utils/constant';
import socketIOClient from 'socket.io-client';
import { addEmergency } from 'action/mainAction';

export default (
  defaultEmergencies: Array<any> = []
): [Array<any>, React.Dispatch<any>] => {
  const [notifications, setNotification] = useState<any>([]);
  const [emergencies, setEmergencies] = useState(defaultEmergencies);
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
    console.log(notifications);
    if (notifications !== null && state?.teamId === notifications?.teamId) {
      new Notification('Nouvelle urgence', {
        body: notifications?.hotel?.name
      });
    }
    if (notifications !== null) addEmergency(dispatch, notifications);
  }, [notifications]);
  useEffect(() => {
    if (state?.visits?.emergencies?.length) {
      const em = state.visits?.emergencies;
      setEmergencies(em);
    } else {
      setEmergencies([]);
    }
  }, [state.visits]);

  return [emergencies, setEmergencies];
};

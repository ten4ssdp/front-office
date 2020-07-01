import React, { useContext, useState, useEffect, useCallback } from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import 'tui-calendar/dist/tui-calendar.css';
import './calendar.scss';
import { MainStore } from 'store/MainStore';
import { Button, Icon, message } from 'antd';
import { Visit } from 'interface/hotel';
import { setWeekFirstDay } from 'action/mainAction';
import moment from 'moment';
import ModalContainer from 'components/Modal';
import crud from 'utils/crud';

const MyCalendar = () => {
  const [visits, setVisits] = useState([]);
  const { state, dispatch } = useContext(MainStore);
  const calendarRef = React.useRef<any>(null);

  const handleClickButton = (navigationType: string) => {
    const calendarInstance = calendarRef && calendarRef?.current?.getInstance();
    calendarInstance[navigationType]();
    const weekFirstDay = moment(calendarInstance?.getDateRangeStart().toDate())
      .startOf('isoWeek')
      .day(1)
      .format('MM-DD-YYYY');
    setWeekFirstDay(dispatch, weekFirstDay);
  };

  const launchMickey = useCallback(async () => {
    const status = await crud.handlePost(
      `mickey/${state.selectedWeekFirstDay}`,
      {}
    );
    if (status === 200) {
      message.success('Le planning a bien été (re)généré');
    }
  }, [state.selectedWeekFirstDay]);

  useEffect(() => {
    const calendarInstance = calendarRef && calendarRef?.current?.getInstance();
    const weekFirstDay = moment(calendarInstance?.getDateRangeStart().toDate())
      .startOf('isoWeek')
      .day(1)
      .format('MM-DD-YYYY');
    setWeekFirstDay(dispatch, weekFirstDay);
  }, []);

  useEffect(() => {
    if (state?.visits?.visits?.length) {
      const vi = state.visits?.visits.map((v: Visit) => {
        let calendarId;
        switch (v?.status) {
          case 0:
            calendarId = 1;
            break;
          case -1:
            calendarId = -1;
            break;
          default:
            calendarId = 1;
        }
        return {
          calendarId,
          title: v?.hotel?.name,
          category: 'time',
          start: v?.start,
          end: v?.end,
          location: `${v?.hotel?.address} ${v?.hotel?.zipCode} ${v?.hotel?.city}`,
          isReadOnly: true
        };
      });
      setVisits(vi);
    }
  }, [state?.visits, state.teamId]);
  return (
    <div className="calendar">
      <div className="controls-header">
        <div>
          <Button htmlType="button" onClick={() => handleClickButton('prev')}>
            <Icon type="left" />
          </Button>
          <Button htmlType="button" onClick={() => handleClickButton('next')}>
            <Icon type="right" />
          </Button>
        </div>
        <Button htmlType="button" onDoubleClick={launchMickey}>
          <Icon type="interaction" />
          Double cliquer pour lancer mickey
        </Button>
        <ModalContainer title="Signaler une absence">
          <div>lol</div>
        </ModalContainer>
      </div>
      <Calendar
        ref={calendarRef}
        taskView={false}
        height="50%"
        week={{
          startDayOfWeek: 1,
          hourStart: 9,
          hourEnd: 20,
          workweek: true,
          daynames: [
            'Dimanche',
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi'
          ]
        }}
        calendars={[
          {
            id: '-1',
            name: 'Annulé',
            bgColor: '#e2e2e2',
            borderColor: '#e2e2e2'
          },
          {
            id: '0',
            name: 'Urgence',
            bgColor: '#D50000',
            borderColor: '#D50000'
          },
          {
            id: '1',
            name: 'Visite',
            bgColor: '#2C98F0',
            borderColor: '#2C98F0'
          }
        ]}
        disableDblClick={true}
        disableClick={false}
        view="week"
        isReadOnly={false}
        schedules={visits}
        timezones={[
          {
            timezoneOffset: -60,
            tooltip: 'Paris'
          }
        ]}
        useDetailPopup
        useCreationPopup
      />
    </div>
  );
};

export default MyCalendar;

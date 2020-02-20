import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import 'tui-calendar/dist/tui-calendar.css';
import './calendar.scss';

const MyCalendar = () => {
  const start = new Date();
  const end = new Date(new Date().setHours(start.getHours() + 1));

  return (
    <div className="calendar">
      <Calendar
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
        schedules={[
          {
            id: '1',
            calendarId: '1',
            title: 'Visite Maximus',
            category: 'time',
            dueDateClass: '',
            color: 'white',
            start: start.toISOString(),
            end,
            location: 'paris'
          },
          {
            id: '2',
            calendarId: '1',
            title: 'Practice',
            dueDateClass: '',
            color: 'white',
            category: 'time',
            start: new Date(
              new Date('02/25/2020').setHours(start.getHours() + 3)
            ).toISOString(),
            end: new Date(
              new Date('02/25/2020').setHours(start.getHours() + 4)
            ).toISOString()
          },
          {
            id: '3',
            calendarId: '1',
            title: 'FE Workshop',
            dueDateClass: '',
            category: 'time',
            start: new Date(
              new Date().setHours(start.getHours() + 6)
            ).toISOString(),
            end: new Date(new Date().setHours(start.getHours() + 8)),
            isReadOnly: true
          },
          {
            id: '4',
            calendarId: '1',
            title: 'FE Workshop',
            dueDateClass: '',
            category: 'time',
            start: new Date(
              new Date(start.setHours(start.getHours())).setDate(
                start.getDate() + 1
              )
            ).toISOString(),
            end: new Date(
              new Date(start.setHours(start.getHours() + 4)).setDate(
                start.getDate() + 1
              )
            ).toISOString(),
            isReadOnly: true
          }
        ]}
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

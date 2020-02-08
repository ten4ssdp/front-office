import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import "tui-calendar/dist/tui-calendar.css";
import './calendar.scss'


const MyCalendar = () =>{ 
  const start = new Date();
  const end = new Date(new Date().setHours(start.getHours() + 1));
  return(
  <div className="calendar">
    <Calendar
      height="50%"
      calendars={[
      {
        id: '0',
        name: 'Urgence',
        bgColor: '#9e5fff',
        borderColor: '#9e5fff'
      },
      {
        id: '1',
        name: 'Visite',
        bgColor: '#00a9ff',
        borderColor: '#00a9ff'
      }
    ]}
    disableDblClick={true}
    disableClick={false}
    view="week"    
    isReadOnly={false}
    schedules={[
      {
        id: '1',
        calendarId: '0',
        title: 'TOAST UI Calendar Study',
        category: 'time',
        dueDateClass: '',
        start: start.toISOString(),
        end: end
      },
    ]}
    scheduleView
    taskView
    template={{
      milestone(schedule) {
        return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
          schedule.title
          }</span>`;
      },
      milestoneTitle() {
        return 'Milestone';
      },
      allday(schedule) {
        return `${schedule.title}<i class="fa fa-refresh"></i>`;
      },
      alldayTitle() {
        return 'All Day';
      }
    }}
    timezones={[
      {
        timezoneOffset: 540,
        displayLabel: 'GMT+09:00',
        tooltip: 'Seoul'
      },
      {
        timezoneOffset: -420,
        displayLabel: 'GMT-08:00',
        tooltip: 'Los Angeles'
      }
    ]}
    useDetailPopup
    useCreationPopup
    week={{
      showTimezoneCollapseButton: true,
      timezonesCollapsed: true
    }}
  />
  </div>

)};

export default MyCalendar;

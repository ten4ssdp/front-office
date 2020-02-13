import React from 'react';
import MyCalendar from '../../components/Calendar';
import UserOverview from '../../components/UserOverview/userOverview';

export default function HomeRoot() {
  return (
    <>
      <UserOverview />
      <MyCalendar />
    </>
  );
}

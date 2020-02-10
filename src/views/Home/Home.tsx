import React from 'react';
import MyCalendar from '../../components/Calendar';
import UserOverview from '../UserOverview/userOverview';

export default function HomeRoot() {
  return (
    <>
      <UserOverview />
      <MyCalendar />
    </>
  );
}

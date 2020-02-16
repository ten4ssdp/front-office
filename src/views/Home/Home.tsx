import React from 'react';
import MyCalendar from '../../components/Calendar';
import PlanningOVerview from '../../components/Overview/PlanningOverview';

export default function HomeRoot() {
  return (
    <>
      <PlanningOVerview />
      <MyCalendar />
    </>
  );
}

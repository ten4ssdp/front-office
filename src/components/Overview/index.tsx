import React from 'react';
import './userOverview.scss';

function Overview({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  return <div className="userOverWiew">{children}</div>;
}

export default Overview;

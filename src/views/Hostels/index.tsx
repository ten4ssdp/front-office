import React from 'react';
import List from '../../components/List';
import UserOverview from '../../components/UserOverview/userOverview';
import { Icon } from 'antd';

const columns = [
  {
    title: 'Hôtels',
    dataIndex: 'hotel'
  },
  {
    title: 'Date de visite',
    dataIndex: 'visite'
  },
  {
    title: 'Note',
    dataIndex: 'rate'
  },
  {
    title: 'Secteur',
    dataIndex: 'area'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    // eslint-disable-next-line react/display-name
    render: () => (
      <a>
        <Icon type="edit" onClick={() => console.log('edit')} />
      </a>
    )
  }
];

const data: any[] | undefined = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    hotel: `hotel Ibis`,
    visite: Date.now(),
    rate: 32,
    area: `London, Park Lane no. ${i}`
  });
}

function Hostels(): JSX.Element {
  return (
    <div style={{ height: '100%', padding: '0 5%' }}>
      <UserOverview />
      <List columns={columns} data={data} title="Liste des hôtels" />
    </div>
  );
}

export default Hostels;

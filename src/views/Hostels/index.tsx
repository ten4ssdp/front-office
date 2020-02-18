import React, { useContext } from 'react';
import { Button, PageHeader } from 'antd';

import List from 'components/List';
import {
  HotelsDatasInterface,
  ColumnsInterface
} from '../../interface/listInterface';
import ModalForm from 'components/Modal/ModalForm';
import HotelForm from 'components/Forms/Hotel';
import { MainStore } from 'store/MainStore';
import { toggleModal } from 'action/mainAction';
import Action from 'components/Action';

const columns: ColumnsInterface[] = [
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
    render: (text, record) => (
      <Action
        wording="Êtes-vous sur de vouloir supprimer cette hôtel ?"
        record={record}
      />
    )
  }
];

const data: HotelsDatasInterface[] = [];
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
  const { dispatch } = useContext(MainStore);

  return (
    <div style={{ height: '100%' }}>
      <PageHeader
        title="Liste des hôtels"
        subTitle="Île de France"
        footer={[
          <Button key="1" onClick={() => toggleModal(dispatch, true)}>
            Ajouter un hôtel
          </Button>
        ]}
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      />
      <List columns={columns} data={data} />
      <ModalForm title="Ajouter un hôtel">
        <HotelForm />
      </ModalForm>
    </div>
  );
}

export default Hostels;

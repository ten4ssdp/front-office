import React, { useContext } from 'react';
import { Icon, Button, PageHeader, Popconfirm } from 'antd';

import List from 'components/List';
import ModalForm from 'components/Modal/ModalForm';
import { MainStore } from 'store/MainStore';
import { toggleModal } from 'action/mainAction';
import {
  ColumnsInterface,
  EffectifsDatasInterface
} from 'interface/listInterface';
import EffectifForm from 'components/Forms/Effectif';

const columns: ColumnsInterface[] = [
  {
    title: 'Nom',
    dataIndex: 'lastname'
  },
  {
    title: 'Lastname',
    dataIndex: 'firstname'
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
      <div>
        <Icon type="edit" onClick={() => console.log('edit')} />
        <Popconfirm
          title="Êtes-vous sur de vouloir supprimer cette hôtel ?"
          onConfirm={() => console.log('delete')}
          okText="Oui"
          cancelText="Non"
        >
          <Icon type="delete" />
        </Popconfirm>
      </div>
    )
  }
];

const data: EffectifsDatasInterface[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    lastname: 'Doe',
    firstname: `John-${i}`,
    area: '75'
  });
}

function UserList(): JSX.Element {
  const { dispatch } = useContext(MainStore);

  return (
    <div className="UserList">
      <PageHeader
        title="Liste des intervenants"
        subTitle="Île de France"
        extra={[
          <Button key="1" onClick={() => toggleModal(dispatch, true)}>
            Ajouter un intenvant
          </Button>
        ]}
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      />
      <List columns={columns} data={data} />
      <ModalForm title="Ajouter un hôtel">
        <EffectifForm />
      </ModalForm>
    </div>
  );
}

export default UserList;

import React, { useContext } from 'react';
import { Button, PageHeader } from 'antd';

import List from 'components/List';
import ModalForm from 'components/Modal/ModalForm';
import { MainStore } from 'store/MainStore';
import { toggleModal } from 'action/mainAction';
import {
  ColumnsInterface,
  EffectifsDatasInterface
} from 'interface/listInterface';
import EffectifForm from 'components/Forms/Effectif';
import Action from 'components/Action';

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
      <Action wording="Êtes-vous sur de vouloir supprimer cet intervenant ?" />
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
        footer={[
          <Button key="1" onClick={() => toggleModal(dispatch, true)}>
            Ajouter un intenvant
          </Button>
        ]}
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      />
      <List columns={columns} data={data} />
      <ModalForm title="Ajouter un intervenant">
        <EffectifForm />
      </ModalForm>
    </div>
  );
}

export default UserList;

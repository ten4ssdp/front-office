import React, { useContext } from 'react';
import { Icon, Button, PageHeader, Popconfirm } from 'antd';

import List from 'components/List';
import { ColumnsInterface, CarsDatasInterface } from 'interface/listInterface';
import { toggleModal } from 'action/mainAction';
import { MainStore } from 'store/MainStore';
import ModalForm from 'components/Modal/ModalForm';
import CarForm from 'components/Forms/Car';

const columns: ColumnsInterface[] = [
  {
    title: 'Immatriculation',
    dataIndex: 'carId'
  },
  {
    title: 'Modèle',
    dataIndex: 'carModel'
  },
  {
    title: 'Disponible',
    dataIndex: 'available'
  },
  {
    title: 'Adresse',
    dataIndex: 'parkingAddress'
  },
  {
    title: 'Ville',
    dataIndex: 'city'
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
          title="Êtes-vous sur de vouloir supprimer ce véhicule ?"
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

const data: CarsDatasInterface[] = [];
for (let i = 0; i < 8; i++) {
  data.push({
    key: i,
    carId: `XT-${i}-DE`,
    carModel: 'Citroen C3',
    city: 'Ivry',
    available: 'disponible',
    parkingAddress: '38 rue adresse'
  });
}

function Vehicles(): JSX.Element {
  const { dispatch } = useContext(MainStore);

  return (
    <div className="Vehicles">
      <PageHeader
        title="Liste des véhicules"
        subTitle="Île de France"
        extra={[
          <Button key="1" onClick={() => toggleModal(dispatch, true)}>
            Ajouter un véhicule
          </Button>
        ]}
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      />
      <List columns={columns} data={data} />
      <ModalForm title="Ajouter un véhicule">
        <CarForm />
      </ModalForm>
    </div>
  );
}

export default Vehicles;

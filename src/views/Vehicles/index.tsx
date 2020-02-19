import React, { useContext, useEffect, useState } from 'react';
import { Button, PageHeader } from 'antd';

import List from 'components/List';
import { ColumnsInterface, CarsDatasInterface } from 'interface/listInterface';
import { toggleModal, setCarsDatasToStore } from 'action/mainAction';
import { MainStore } from 'store/MainStore';
import ModalForm from 'components/Modal/ModalForm';
import CarForm from 'components/Forms/Car';
import Action from 'components/Action';
import useFetch from 'hooks/useFetch';

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
      <Action wording="Êtes-vous sur de vouloir supprimer ce véhicule ?" />
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
  const [carsDatas, setCarsDatas] = useState<CarsDatasInterface[] | []>([]);

  const { dispatch } = useContext(MainStore);

  const { isloading, error, datas } = useFetch(
    'http://localhost:5000/api/vehicle'
  );

  useEffect(() => {
    !isloading && setCarsDatasToStore(dispatch, datas);
    const arr: any = datas.map((d: any) => ({
      key: d.id,
      carId: d.numberPlate,
      carModel: d?.type,
      city: 'none',
      available: true,
      parkingAddress: '38 rue adresse'
    }));
    setCarsDatas(arr);
  }, [isloading]);

  return (
    <div className="Vehicles">
      <PageHeader
        title="Liste des véhicules"
        subTitle="Île de France"
        footer={[
          <Button key="1" onClick={() => toggleModal(dispatch, true)}>
            Ajouter un véhicule
          </Button>
        ]}
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      />
      <List loading={isloading} columns={columns} data={carsDatas} />
      <ModalForm title="Ajouter un véhicule">
        <CarForm />
      </ModalForm>
    </div>
  );
}

export default Vehicles;

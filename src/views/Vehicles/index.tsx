import React, { useContext, useEffect, useState } from 'react';
import { Button, PageHeader, Badge } from 'antd';

import List from 'components/List';
import { ColumnsInterface, CarsDatasInterface } from 'interface/listInterface';
import { toggleModal, setCarsDatasToStore } from 'action/mainAction';
import { MainStore } from 'store/MainStore';
import ModalForm from 'components/Modal/ModalForm';
import CarForm from 'components/Forms/Car';
import Action from 'components/Action';
import useFetch from 'hooks/useFetch';
import DetailCar from 'components/Detail/DetailCar';
import { CarFromDB } from 'interface/car';

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
    dataIndex: 'available',
    // eslint-disable-next-line react/display-name
    render: (_text, record) =>
      record.available ? (
        <Badge status="success" text="Disponible" />
      ) : (
        <Badge status="error" text="Pas disponible" />
      )
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
    render: (text, record) => (
      <Action
        record={record}
        wording="Êtes-vous sur de vouloir supprimer ce véhicule ?"
        showDetail={true}
        endpoint="vehicle"
      />
    )
  }
];

function Vehicles(): JSX.Element {
  const [carsDatas, setCarsDatas] = useState<CarsDatasInterface[] | []>([]);
  const [car, setCar] = useState<CarFromDB | null>(null);

  const { dispatch, state } = useContext(MainStore);

  const { isloading, datas } = useFetch('http://localhost:5000/api/vehicles');

  useEffect(() => {
    !isloading && setCarsDatasToStore(dispatch, datas);
    const arr = datas.map((d: CarFromDB) => ({
      key: d.id,
      carId: d.numberPlate,
      carModel: d?.type,
      city: d?.parking?.city,
      available: true,
      parkingAddress: d?.parking?.address
    }));
    setCarsDatas(arr);
    setCarsDatasToStore(dispatch, datas);
  }, [isloading]);

  useEffect(() => {
    const car = state.cars.find(
      (car: CarFromDB) => car.id === state.idDetailToShow
    );
    setCar(car);
  }, [state.idDetailToShow]);

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
      {car && <DetailCar car={car} />}
    </div>
  );
}

export default Vehicles;

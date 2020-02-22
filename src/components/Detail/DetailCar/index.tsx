import React, { useContext } from 'react';
import { Row, Divider, Button, Popconfirm, message } from 'antd';

import Detail from '..';
import {
  setIdToEdit,
  toggleModal,
  setIdDetailToShow,
  refreshApp
} from 'action/mainAction';
import { MainStore } from 'store/MainStore';
import { CarFromDB } from 'interface/car';
import crud from 'utils/crud';

interface Props {
  car: CarFromDB;
}

export default function DetailCar(props: Props) {
  const { dispatch } = useContext(MainStore);
  const handleDelete = async () => {
    const status = await crud.handleDelete('vehicle', props.car?.id);
    try {
      if (status === 200) {
        await setIdDetailToShow(dispatch, '');
        await refreshApp(dispatch, true);
        await message.success('Supprimé avec succès');
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Detail>
      <>
        <Row>
          <h3 className="subtitle">Voiture</h3>
          <p>Plaque d&apos;immatriculation: {props.car?.numberPlate}</p>
          <p className="address">Modèle : {props.car?.type}</p>
        </Row>
        <Divider />
        <Row>
          <h3 className="subtitle">Adresse de dépôt</h3>
          <p>Adresse : {props.car?.parking?.address}</p>
          <p className="address">
            <span>Code postal : {props.car?.parking?.zipCode}</span>
            <span>Ville : {props.car?.parking?.city}</span>
          </p>
        </Row>
        <Divider />

        <div>
          <Button
            onClick={() => {
              setIdToEdit(dispatch, props.car?.id);
              toggleModal(dispatch, true);
              setIdDetailToShow(dispatch, '');
            }}
            htmlType="button"
            type="primary"
            style={{ marginRight: '5%' }}
          >
            Modifier
          </Button>
          <Popconfirm
            title="Êtes-vous sur de vouloir supprimer cette hôtel ?"
            onConfirm={() => handleDelete()}
            okText="Oui"
            cancelText="Non"
          >
            <Button htmlType="button" type="danger">
              Supprimer
            </Button>
          </Popconfirm>
        </div>
      </>
    </Detail>
  );
}

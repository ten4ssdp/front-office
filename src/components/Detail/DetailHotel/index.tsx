import React, { useContext } from 'react';
import Detail from '..';
import { MainStore } from 'store/MainStore';
import { Row, Divider, Icon, Button, Popconfirm, message, Card } from 'antd';
import moment from 'moment';
import {
  setIdToEdit,
  toggleModal,
  setIdDetailToShow,
  refreshApp
} from 'action/mainAction';

import { LastestHotelVisits } from 'interface/hotel';

import '../detail.scss';
import crud from 'utils/crud';

export default function DetailHotel(props: any) {
  const { dispatch } = useContext(MainStore);
  const handleDelete = async () => {
    const status = await crud.handleDelete('hotel', props.hotel?.id);
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
        <h1 className="title">{props.hotel?.name}</h1>
        <Row>
          <h3 className="subtitle">Coordonnée</h3>
          <p>Adresse: {props.hotel?.address}</p>
          <p className="address">
            <span>Code Poste: {props.hotel?.zipCode}</span>
            <span>Ville: {props.hotel?.city}</span>
          </p>
          <p>Secteur: {props.hotel?.sector?.name}</p>
          <p>Nombre de Chambre: {props.hotel?.roomCount}</p>
        </Row>
        <Divider />
        <Row>
          <h3 className="subtitle">Dernière visite</h3>
          {props.hotel?.visits.length ? (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {props.hotel?.visits.slice(0, 3).map((v: LastestHotelVisits) => (
                <Card
                  title={`Visite du ${moment(v.date).format('DD/MM/YYYY')}`}
                  bordered={false}
                  style={{ width: 300 }}
                  key={v.id}
                >
                  <p>Note: {v.rate}</p>
                </Card>
              ))}
            </div>
          ) : (
            <div className="empty">
              <Icon type="frown" style={{ fontSize: 20, marginBottom: '1%' }} />
              <p>Pas de visite</p>
            </div>
          )}
        </Row>
        <Divider />
        <div>
          <Button
            onClick={() => {
              setIdToEdit(dispatch, props.hotel?.id);
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

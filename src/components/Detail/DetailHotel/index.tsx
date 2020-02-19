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
import './detail-hotel.scss';

export default function DetailHotel(props: any) {
  const { dispatch } = useContext(MainStore);
  const handleDelete = async () => {
    const deletedHotel = await fetch(
      `http://localhost:5000/api/hotel/${props.hotel?.id}`,
      {
        method: 'DELETE'
      }
    );
    await setIdDetailToShow(dispatch, '');
    await refreshApp(dispatch, true);
    await message.success('Supprimé avec succès');

    return deletedHotel;
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
              {props.hotel?.visits.slice(0, 3).map((v: any) => (
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
              console.log(props.hotel?.id);
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
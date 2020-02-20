import React from 'react';
import Detail from '..';
import { Row, Divider } from 'antd';
import { User } from 'interface/userInterface';

interface Props {
  user: User;
}

export default function DetailUser(props: Props) {
  return (
    <Detail>
      <>
        <h1 className="title">
          {props.user?.lastname} {props.user?.name}
        </h1>
        <Row>
          <h3 className="subtitle">Coordonnée</h3>
          <p>Adresse: {props.user?.address}</p>
          <p>Poste: {props.user?.role?.name}</p>
          <p>Secteur: {props.user?.sector?.name}</p>
          <p>Adresse mail: {props.user?.email}</p>
        </Row>
        <Divider />
      </>
    </Detail>
  );
}

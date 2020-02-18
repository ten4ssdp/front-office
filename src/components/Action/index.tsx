import React from 'react';
import { Popconfirm, Icon } from 'antd';

interface Props {
  wording: string;
  text?: string;
  record?: any;
}

export default function Action(props: Props) {
  return (
    <div>
      <Icon
        type="edit"
        onClick={() => console.log(`edit ${props.record.key}`)}
        style={{ marginRight: '10%', fontSize: '18px' }}
      />
      <Popconfirm
        title={props.wording} //"Êtes-vous sur de vouloir supprimer ce véhicule ?"
        onConfirm={() => console.log(`delete ${props.record.key}`)}
        okText="Oui"
        cancelText="Non"
        style={{ color: '#006BB4' }}
      >
        <Icon type="delete" style={{ fontSize: '18px' }} />
      </Popconfirm>
    </div>
  );
}

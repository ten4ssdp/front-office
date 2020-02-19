import React, { useContext } from 'react';
import Popconfirm from 'antd/lib/popconfirm';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
import {
  setIdToEdit,
  toggleModal,
  refreshApp,
  setIdDetailToShow
} from 'action/mainAction';
import { MainStore } from 'store/MainStore';
import { BASE_URL } from '../../utils/constant';

interface Props {
  wording: string;
  text?: string;
  record?: any;
  endpoint?: string;
  showDetail?: boolean;
}

export default function Action(props: Props) {
  const { dispatch } = useContext(MainStore);

  const handleDelete = async (id: string | number) => {
    const deletedhotel = await fetch(`${BASE_URL}/{${props.endpoint}/${id}`, {
      method: 'DELETE'
    });
    console.log(deletedhotel);
    await refreshApp(dispatch, true);
    await message.success('Supprimé avec Succès');
  };
  return (
    <div>
      <Icon
        type="edit"
        onClick={() => {
          setIdToEdit(dispatch, props.record.key);
          toggleModal(dispatch, true);
        }}
        style={{ marginRight: '10%', fontSize: '18px' }}
      />
      <Popconfirm
        title={props.wording} //"Êtes-vous sur de vouloir supprimer ce véhicule ?"
        onConfirm={() => {
          handleDelete(props.record.key);
        }}
        okText="Oui"
        cancelText="Non"
        style={{ color: '#006BB4' }}
      >
        <Icon type="delete" style={{ fontSize: '18px' }} />
      </Popconfirm>
      {props.showDetail && (
        <p
          style={{
            color: '#006BB4',
            marginTop: '10%',
            fontWeight: 600,
            cursor: 'pointer'
          }}
          onClick={() => setIdDetailToShow(dispatch, props.record.key)}
        >
          Voir détail
        </p>
      )}
    </div>
  );
}

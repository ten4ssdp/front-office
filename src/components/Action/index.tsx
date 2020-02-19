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
    const deletedhotel = await fetch(
      `http://localhost:5000/api/${props.endpoint}/${id}`,
      {
        method: 'DELETE'
      }
    );
    await refreshApp(dispatch, true);
    await message.success('Supprimé avec Succès');
    return deletedhotel;
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
        title={props.wording}
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
          onClick={() => setIdDetailToShow(dispatch, props.record?.key)}
        >
          Voir détail
        </p>
      )}
    </div>
  );
}

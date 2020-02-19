import React, { useContext } from 'react';
import Modal from 'antd/lib/modal';
import { MainStore } from 'store/MainStore';
import { toggleModal, setIdToEdit } from 'action/mainAction';

interface Props {
  title: string;
  children: JSX.Element;
  fn: () => void;
}

export default function ModalContainer(props: Props) {
  const { state, dispatch } = useContext(MainStore);

  return (
    <Modal
      title={props.title}
      visible={state.modalOpen}
      onOk={() => {
        toggleModal(dispatch, false);
        setIdToEdit(dispatch, '');
      }}
      onCancel={() => {
        toggleModal(dispatch, false);
        setIdToEdit(dispatch, '');
      }}
    >
      {props.children}
    </Modal>
  );
}

import React, { useContext } from 'react';
import Modal from 'antd/lib/modal';
import { MainStore } from 'store/MainStore';
import { toggleModal } from 'action/mainAction';

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
        props.fn();
        toggleModal(dispatch, false);
      }}
      onCancel={() => toggleModal(dispatch, false)}
    >
      {props.children}
    </Modal>
  );
}

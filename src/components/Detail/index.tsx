import React, { useContext } from 'react';
import { Drawer } from 'antd';
import { MainStore } from 'store/MainStore';
import { setIdDetailToShow } from 'action/mainAction';

interface Props {
  children: JSX.Element;
}

export default function Detail(props: Props) {
  const { state, dispatch } = useContext(MainStore);
  return (
    <Drawer
      width={640}
      placement="right"
      closable={false}
      visible={!!state.idDetailToShow}
      onClose={() => setIdDetailToShow(dispatch, '')}
    >
      {props.children}
    </Drawer>
  );
}

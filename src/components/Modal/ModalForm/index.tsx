import React from 'react';
import ModalContainer from '..';

interface Props {
  children: JSX.Element;
  title: string;
}

export default function ModalForm(props: Props) {
  return (
    <ModalContainer
      fn={() => {
        console.log('hi');
      }}
      title={props.title}
    >
      {props.children}
    </ModalContainer>
  );
}

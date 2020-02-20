import React from 'react';
import ModalContainer from '..';

interface Props {
  children: JSX.Element;
  title: string;
}

export default function ModalForm(props: Props) {
  return <ModalContainer title={props.title}>{props.children}</ModalContainer>;
}

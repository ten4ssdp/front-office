import React, { useContext } from 'react';
import { Tag, Button } from 'antd';

import Overview from '..';
import { MainStore } from 'store/MainStore';
import { toggleModal } from 'action/mainAction';
import ModalDatePicker from 'components/Modal/ModalDatePicker';

export default function PlanningOVerview() {
  const { dispatch } = useContext(MainStore);

  return (
    <Overview>
      <h3>Binone {'personne 1/ personne 2'}</h3>
      <p>secteur {'92/94'}</p>
      <Tag closable>personne 1</Tag>
      <Tag closable>personne 2</Tag>
      <Button onClick={() => toggleModal(dispatch, true)}>
        Signaler une absence
      </Button>
      <ModalDatePicker />
    </Overview>
  );
}

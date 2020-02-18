import React, { useContext } from 'react';
import { Tag } from 'antd';

import Overview from '..';
import { MainStore } from 'store/MainStore';

export default function PlanningOVerview() {
  const { dispatch } = useContext(MainStore);

  return (
    <Overview>
      <h3>Binone {'personne 1/ personne 2'}</h3>
      <p>Secteur {'92/94'}</p>
      <Tag>personne 1</Tag>
      <Tag>personne 2</Tag>
    </Overview>
  );
}

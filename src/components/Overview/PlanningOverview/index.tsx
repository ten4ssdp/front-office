import React, { useContext } from 'react';
import { Tag } from 'antd';

import Overview from '..';
import { MainStore } from 'store/MainStore';

export default function PlanningOVerview() {
  const { state } = useContext(MainStore);

  const team = state.teamsAndSector.find((t: any) => t.id === state.teamId);

  return (
    <Overview>
      {state.teamId ? (
        <>
          <h3>Binone {team?.name}</h3>
          <p>Secteur {team?.sector?.name}</p>
          <Tag>
            {team?.users?.[0]?.lastname} {team?.users?.[0]?.name}
          </Tag>
          <Tag>
            {team?.users?.[1]?.lastname} {team?.users?.[1]?.name}
          </Tag>
        </>
      ) : (
        <h1>Selectionner une équipe </h1>
      )}
    </Overview>
  );
}

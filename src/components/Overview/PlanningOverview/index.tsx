import React, { useContext } from 'react';
import { Tag, Button } from 'antd';

import Overview from '..';
import { MainStore } from 'store/MainStore';
import ModalForm from 'components/Modal/ModalForm';
import { toggleModal } from 'action/mainAction';
import UrgenceForm from 'components/Forms/Urgence';

export default function PlanningOVerview() {
  const { dispatch, state } = useContext(MainStore);

  const team = state.teamsAndSector.find((t: any) => t.id === state.teamId);

  return (
    <Overview>
      {state.teamId ? (
        <>
          <div style={{ display: 'flex' }}>
            <div>
              <h3>Binome {team?.name}</h3>
              <p>Secteur {team?.sector?.name}</p>
              <Tag>
                {team?.users?.[0]?.lastname} {team?.users?.[0]?.name}
              </Tag>
              <Tag>
                {team?.users?.[1]?.lastname} {team?.users?.[1]?.name}
              </Tag>
            </div>
            <Button onClick={() => toggleModal(dispatch, true)}>
              Ajouter une urgence
            </Button>
          </div>
          <ModalForm title={`Créer une urgence - ${team?.name}`}>
            <UrgenceForm date={team?.date} teamId={team?.id} />
          </ModalForm>
        </>
      ) : (
        <h1>Selectionner une équipe </h1>
      )}
    </Overview>
  );
}

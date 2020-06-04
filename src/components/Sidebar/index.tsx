import React, { useContext } from 'react';
import { Avatar, Card } from 'antd';

import { UserStore } from 'store/UserStore';
import SelectTeam from 'components/SelectTeam';

import './sidebar.scss';
import useEmergency from 'hooks/useEmergency';

function Sidebar(): JSX.Element {
  const {
    userState: { currentUser }
  } = useContext(UserStore);
  const [emergencies] = useEmergency();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ongconseil.com%2Fphp%2Fwp-content%2Fuploads%2F2017%2F01%2Fsamusocialparis.png&f=1&nofb=1"
          alt="Samu Social Paris"
        />
      </div>
      <div className="sidebar-container">
        <Avatar
          size={100}
          style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          {currentUser?.name[0]} {currentUser?.lastname[0]}
        </Avatar>
        <p>
          {currentUser?.name} {currentUser?.lastname}
        </p>
        <SelectTeam />
        {emergencies.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            {emergencies.map((e: any, i: number) => {
              return (
                e?.hotel && (
                  <Card key={i} title={'Urgence'} style={{ marginTop: '8px' }}>
                    {e?.hotel?.name} - {e?.hotel?.address}
                  </Card>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

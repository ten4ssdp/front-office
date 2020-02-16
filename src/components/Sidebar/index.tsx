import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';

import { UserStore } from '../../store/UserStore';

import './sidebar.scss';

function Sidebar(): JSX.Element {
  const { userState } = useContext(UserStore);
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
          className="sidebar-img"
          alt="Remy Sharp"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthecharlestonphotographer.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fprofessional-business-portrait-photography-by-charleston-headshot-photographers-king-street-studios-21.jpg&f=1&nofb=1"
        />
        {
          <p>
            {userState.firstname} {userState.lastname}
          </p>
        }
      </div>
    </div>
  );
}

export default Sidebar;

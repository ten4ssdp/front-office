import React, {useContext} from 'react';
import './dashboard-nav.scss'
import Avatar from '@material-ui/core/Avatar';
import { UserStore } from '../../store/UserStore';


function DashboardNav(): JSX.Element {
  const { userState } = useContext(UserStore);
  return (
    <div className="DashboardNav">
      <div className="DashboardNav-container">
        <Avatar
          className="DashboardNav-img"
          alt="Remy Sharp"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthecharlestonphotographer.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fprofessional-business-portrait-photography-by-charleston-headshot-photographers-king-street-studios-21.jpg&f=1&nofb=1"
          />
        {<p>{userState.firstname} {userState.lastname}</p>}
      </div>
    </div>
  );
}

export default DashboardNav;


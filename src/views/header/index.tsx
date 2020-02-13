import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './header.scss';

function Header(): JSX.Element {
  const history = useHistory();
  return (
    <div className="Header">
      <div className="Header-container">
        <img
          className="Header-logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ongconseil.com%2Fphp%2Fwp-content%2Fuploads%2F2017%2F01%2Fsamusocialparis.png&f=1&nofb=1"
          alt="Samu Social Paris"
        />
        <nav className="Header-nav">
          <ul className="Header-nav-container">
            <li className="Header-nav-element">
              <NavLink to="/home/home">Planning</NavLink>
            </li>
            <li className="Header-nav-element">
              <NavLink to="/home/hotels">Les Hôtels</NavLink>
            </li>
            <li className="Header-nav-element">
              <NavLink to="/home/vehicules">Les vehicules</NavLink>
            </li>
            <li className="Header-nav-element">
              <NavLink to="/home/effectif">Effectifs</NavLink>
            </li>
          </ul>
        </nav>

        <Button variant="contained" onClick={() => history.push('/auth')}>
          Se déconneter
        </Button>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'antd';

import './header.scss';

function Header(): JSX.Element {
  const history = useHistory();
  return (
    <header className="Header">
      <nav className="Header-nav">
        <ul className="Header-nav-container">
          <li className="Header-nav-element">
            <NavLink to="/home/home" activeClassName="active">
              Planning
              <span />
            </NavLink>
          </li>
          <li className="Header-nav-element">
            <NavLink to="/home/hotels" activeClassName="active">
              Les Hôtels
              <span />
            </NavLink>
          </li>
          <li className="Header-nav-element">
            <NavLink to="/home/vehicules" activeClassName="active">
              Les vehicules
              <span />
            </NavLink>
          </li>
          <li className="Header-nav-element">
            <NavLink to="/home/effectif" activeClassName="active">
              Effectifs
              <span />
            </NavLink>
          </li>
        </ul>
      </nav>

      <Button
        type="primary"
        shape="round"
        onClick={() => history.push('/auth')}
        icon="logout"
        htmlType="button"
        className="Header-button"
      >
        Se déconnecter
      </Button>
    </header>
  );
}

export default Header;

import React, { useContext } from 'react';
// import { MainStore } from '../../store/MainStore';
// import { UserStore } from '../../store/UserStore';
import './header.scss';
import { NavLink } from 'react-router-dom';

function Header(): JSX.Element {
  // const { state } = useContext(MainStore);
  // const { userState } = useContext(UserStore);

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
              <NavLink to="/">Planning</NavLink>
            </li>
            <li className="Header-nav-element">
              <NavLink to="/hotels">Les Hôtels</NavLink>
            </li>
            <li className="Header-nav-element">
              <NavLink to="/vehicules">Les vehicules</NavLink>
            </li>
            <li className="Header-nav-element">
              <NavLink to="/effectif">Effectifs</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

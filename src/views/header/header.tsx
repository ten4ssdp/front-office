import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { UserStore } from '../../store/UserStore';


function Header(): JSX.Element {
  const { state } = useContext(MainStore);
  const { userState } = useContext(UserStore);

  return (
    <div className="Header">
      <div style={{height: 90}}>
        <h1>{state.title}</h1>
        {userState.firstname && <p>{userState.firstname}</p>}
      </div>
    </div>
  );
}

export default Header;


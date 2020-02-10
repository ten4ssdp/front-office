import React, { useContext } from 'react';
import AuthForm from '../../components/AuthFom/index';
import { UserStore } from '../../store/UserStore';

import './auth.scss';

export default function Auth(): JSX.Element {
  const { userState } = useContext(UserStore);
  return (
    <div className="auth">
      <div className="auth__img-container">
        <div />
        <img
          src={
            userState.isLogin
              ? 'https://www.samusocial.paris/sites/default/files/inline-images/2019-07-22%2014_38_47-JJA00754-1%20-%20Visionneuse%20de%20photos%20Windows.jpg'
              : 'https://www.francetvinfo.fr/image/75e0nrqip-9f32/1500/843/11544691.jpg'
          }
          alt="samuSocial"
        />
      </div>
      <AuthForm />
    </div>
  );
}

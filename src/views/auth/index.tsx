import React, { useContext } from 'react';
import AuthForm from '../../components/Forms/AuthFom/index';

import './auth.scss';

export default function Auth(): JSX.Element {
  return (
    <div className="auth">
      <div className="auth__img-container">
        <div />
        <img
          src={
            'https://www.samusocial.paris/sites/default/files/inline-images/2019-07-22%2014_38_47-JJA00754-1%20-%20Visionneuse%20de%20photos%20Windows.jpg'
          }
          alt="samuSocial"
        />
      </div>
      <AuthForm />
    </div>
  );
}

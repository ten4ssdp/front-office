import React, { useContext } from 'react';
import { Input, Button } from 'antd';
import useAuth from '../../hooks/useAuth';
import { UserState } from '../../interface/userInterface';
import { UserStore } from '../../store/UserStore';
import { useHistory } from 'react-router-dom';

import './auth-form.scss';

const INITIAL_STATE: UserState = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
};

export default function AuthForm(): JSX.Element {
  const { userState } = useContext(UserStore);
  const history = useHistory();

  const { values, handleChange, handleSubmit } = useAuth(
    INITIAL_STATE,
    userState.isLogin
  );

  const submit = (path: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    history.push(path);
  };

  return (
    <div className="auth-form">
      <h1 className="auth-form__title">Connectez-vous</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => submit('/', e)}
        className="auth-form__form"
      >
        <fieldset>
          <label htmlFor="email">
            Adresse mail
            <Input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              className="auth-form__input"
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            Mot de passe
            <Input.Password
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              className="auth-form__input"
              required
            />
          </label>
        </fieldset>
        <Button htmlType="submit" color="primary">
          S&apos;identifier
        </Button>
      </form>
    </div>
  );
}

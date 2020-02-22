import React from 'react';

import { Input, Button } from 'antd';
import useAuth from 'hooks/useAuth';

import './auth-form.scss';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default function AuthForm(): JSX.Element {
  const { values, handleChange, handleSubmit } = useAuth(INITIAL_STATE, true);

  const submit = async (path: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
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
        <Button htmlType="submit" className="auth-form__btn">
          S&apos;identifier
        </Button>
      </form>
    </div>
  );
}

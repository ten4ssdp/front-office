import React, { useContext } from 'react';
// import { TextField } from 'office-ui-fabric-react/lib/TextField';
import TextField from '@material-ui/core/TextField';
import useAuth from '../../hooks/useAuth';
import { UserState } from '../../interface/userInterface';
import Button from '@material-ui/core/Button';
import { UserStore } from '../../store/UserStore';
import { toogleAuth } from '../../action/userAction';
import { useHistory } from 'react-router-dom';

import './auth-form.scss';

const INITIAL_STATE: UserState = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
};

export default function AuthForm(): JSX.Element {
  const { userState, dispatch } = useContext(UserStore);
  const history = useHistory();

  const { values, handleChange, handleSubmit } = useAuth(
    INITIAL_STATE,
    userState.isLogin
  );

  const toogleWording = userState.isLogin
    ? 'Identifiez-vous'
    : 'Créer un compte';

  const test = (path: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    history.push(path);
  };

  return (
    <div className="auth-form">
      <h1 className="auth-form__title">{toogleWording}</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => test('/', e)}
        className="auth-form__form"
      >
        {!userState.isLogin && (
          <>
            <TextField
              label="Prénom"
              name="firstname"
              type="text"
              onChange={handleChange}
              value={values.firstname}
              className="auth-form__input"
              required
            />
            <TextField
              label="Nom"
              name="lastname"
              type="text"
              onChange={handleChange}
              value={values.lastname}
              className="auth-form__input"
              required
            />
          </>
        )}
        <TextField
          label="Adresse mail"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          className="auth-form__input"
          required
        />
        <TextField
          label="Mot de passe"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
          className="auth-form__input"
          required
        />
        <Button variant="contained" type="submit" color="primary">
          {userState.isLogin ? "S'identifier" : 'Créer un compte'}
        </Button>
      </form>

      <p className="auth-form__toogle">
        Vous avez déjà un compte ?{' '}
        <span onClick={() => toogleAuth(userState, dispatch)}>
          {toogleWording}
        </span>
      </p>
    </div>
  );
}

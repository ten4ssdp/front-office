import { useState, useEffect, useContext } from 'react';
import { UserState } from '../interface/userInterface';
import useForm from './useForm';
import { UserStore } from '../store/UserStore';
import { SIGNIN_USER, SIGNUP_USER, SIGNOUT_USER } from '../constant/user';

function validateLogin({ email, password }: UserState) {
  const errors: {
    email?: string;
    password?: string;
  } = {};

  if (!email) {
    errors.email = "L'adresse mail est obligatoire";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "L'adresse mail est invalide";
  }

  if (!password) {
    errors.password = 'Le mot de passe est obligatoire';
  }

  return errors;
}

function useAuth(initialState: UserState, isLogin: boolean) {
  const [errors, setErrors] = useState<object>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [values, handleChange] = useForm(initialState);
  const { dispatch } = useContext(UserStore);

  const signin = ({ email, password }: UserState) => {
    return dispatch({
      type: SIGNIN_USER,
      payload: { email, password }
    });
  };

  const signup = ({ email, password, lastname, firstname }: UserState) => {
    return dispatch({
      type: SIGNUP_USER,
      payload: {
        email,
        password,
        lastname,
        firstname
      }
    });
  };

  const signout = () => {
    return dispatch({ type: SIGNOUT_USER });
  };

  const handleBlur = () => {
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        isLogin ? signin(values) : signup(values);
        setIsSubmit(false);
      } else {
        setIsSubmit(false);
      }
    }
  }, [errors]);

  return {
    signout,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  };
}

export default useAuth;

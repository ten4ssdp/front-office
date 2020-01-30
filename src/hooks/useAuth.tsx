import { useState, useEffect, useContext } from 'react';
import { UserState } from '../interface/userInterface';
import useForm from './useForm';
import { UserStore } from '../store/UserStore';
import { SIGNIN_USER, SIGNUP_USER, SIGNOUT_USER } from '../constant/user';

function useAuth(initialState: UserState, isLogin: boolean) {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(values);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      isLogin ? signin(values) : signup(values);
    }
    // eslint-disable-next-line
  }, [isLogin, isSubmit]);

  return {
    values,
    signout,
    handleChange,
    handleSubmit
  };
}

export default useAuth;

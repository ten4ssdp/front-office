import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cookie from 'js-cookie';

import useForm from 'hooks/useForm';
import crud from 'utils/crud';

interface FormAuth {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
}

function useAuth(
  initialState: { [k: string]: string | number },
  isLogin: boolean
) {
  const history = useHistory();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [values, handleChange] = useForm(initialState);

  const signin = async ({ email, password }: FormAuth) => {
    const { token } = await crud.handleLogin({ email, password });
    cookie.set('token', token);
    await history.push('/');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      isLogin && signin(values);
    }
    // eslint-disable-next-line
  }, [isLogin, isSubmit]);

  return {
    values,
    handleChange,
    handleSubmit
  };
}

export default useAuth;

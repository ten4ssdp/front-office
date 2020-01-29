import { useState } from 'react';
import { UserState } from '../interface/userInterface';
import { MainState } from '../interface/storeInterface';
type InputReact = (e: React.FormEvent<HTMLInputElement>) => void;

function useForm(initialValues: UserState | MainState) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [values, setvalues] = useState<UserState | MainState | any>(
    initialValues
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setvalues({ ...values, [name]: value });
  };

  return [values, handleChange];
}

export default useForm;

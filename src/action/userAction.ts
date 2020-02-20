import { GET_CURRENT_USER } from '../constant/user';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { Dispatch } from 'react';

export const getCurrentUser = (
  dispatch: Dispatch<{ type: string; payload: any }>,
  token: string
) => {
  let payload;
  if (token) {
    payload = jwtDecode(token);
  } else {
    Cookies.remove('token');
    throw new Error('Something went wrong with the token');
  }
  return dispatch({
    type: GET_CURRENT_USER,
    payload
  });
};

import { IS_LOGIN_USER } from '../constant/user';
import { UserState } from '../interface/userInterface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toogleAuth = (state: UserState, dispatch: any): void => {
  return dispatch({
    type: IS_LOGIN_USER,
    payload: !state.isLogin
  });
};

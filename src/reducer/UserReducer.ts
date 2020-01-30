import { UserState, UserAction } from '../interface/userInterface';
import {
  SIGNIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
  IS_LOGIN_USER
} from '../constant/user';

function userReducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case SIGNIN_USER:
      return state;
    case SIGNUP_USER:
      return state;
    case SIGNOUT_USER:
      return state;
    case IS_LOGIN_USER:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
}

export default userReducer;

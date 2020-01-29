import { UserState, UserAction } from '../interface/userInterface';
import { SIGNIN_USER, SIGNUP_USER, SIGNOUT_USER } from '../constant/user';

function userReducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case SIGNIN_USER:
      return state;
    case SIGNUP_USER:
      return state;
    case SIGNOUT_USER:
      return state;
    default:
      return state;
  }
}

export default userReducer;

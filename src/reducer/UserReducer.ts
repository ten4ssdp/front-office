import { UserState, UserAction } from '../interface/userInterface';
import { GET_CURRENT_USER } from '../constant/user';

function userReducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}

export default userReducer;

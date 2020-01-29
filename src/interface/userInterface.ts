export interface UserState {
  lastname?: string;
  firstname?: string;
  email?: string;
  password?: string;
  address?: string;
  team?: string;
  token?: string;
}

export interface UserAction {
  type: string;
  payload: UserState;
}

export type UserDispatch = React.Dispatch<UserAction>;

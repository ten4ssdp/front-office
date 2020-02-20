export interface UserState {
  currentUser: null | User;
}

export interface User {
  name: string;
  lastname: string;
  address?: string;
  email?: string;
  role?: Role;
  level?: number;
  sector?: Sector;
  iat?: number | string;
}

interface Sector {
  id: string;
  name: string;
}

interface Role {
  id: number | string;
  name: string;
}
export interface UserAction {
  type: string;
  payload: UserState;
}

export type UserDispatch = React.Dispatch<UserAction>;

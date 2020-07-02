declare global {
  interface Window {
      _env_:any;
  }
}

export const API_URL: string =
  process.env.REACT_APP_API_URL || window._env_.API_URL || 'http://15.188.3.249:5000';
export const BASE_URL = `${API_URL}/api`;

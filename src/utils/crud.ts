import Cookies from 'js-cookie';

class Crud {
  private BASE_URL: string;
  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }
  async handleDelete(path: string, id: string | number) {
    const res = await fetch(`${this.BASE_URL}/${path}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer: ${Cookies.get('token')}`
      }
    });
    return res.status;
  }

  async handlePost(
    path: string,
    body: { [k: string]: string | number | boolean }
  ) {
    const res = await fetch(`${this.BASE_URL}/${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        authorization: `bearer: ${Cookies.get('token')}`
      }
    });
    return res.status;
  }
  async handleLogin(body: { [k: string]: string | number | boolean }) {
    const res = await fetch(`${this.BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    });
    const token = await res.json();
    return token;
  }

  async handleUpdate(
    path: string,
    id: string | number,
    body: { [k: string]: string | number | boolean }
  ) {
    const res = await fetch(`${this.BASE_URL}/${path}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        authorization: `bearer: ${Cookies.get('token')}`
      }
    });
    return res.status;
  }
}

export default new Crud('http://localhost:5000/api');

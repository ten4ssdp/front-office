class Crud {
  private BASE_URL: string;
  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }
  async handleDelete(path: string, id: string | number) {
    const res = await fetch(`${this.BASE_URL}/${path}/${id}`, {
      method: 'DELETE'
    });
    return res.status;
  }

  async handlePost(path: string, body: any) {
    const res = await fetch(`${this.BASE_URL}/${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    });
    return res.status;
  }

  async handleUpdate(path: string, id: string | number, body: any) {
    const res = await fetch(`${this.BASE_URL}/${path}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    });
    return res.status;
  }
}

export default new Crud('http://localhost:5000/api');
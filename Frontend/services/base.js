const URL = 'http://127.0.0.1:3000';
const token = localStorage.getItem('token');

export function base(url, method, data) {
  return fetch(URL + url, {
    method: method,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : null
  })
    .then(async res => {
      const newToken = res.headers.get('Authorization');
      if (newToken !== null) {
        localStorage.setItem('token', newToken)
      }
      return await res.json()
    })
    .then(res => { return res.data })
    .catch(err => { return err.message })
}
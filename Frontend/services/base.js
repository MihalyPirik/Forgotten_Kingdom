const URL = "https://bgs.jedlik.eu:8100";
const token = localStorage.getItem('token')

export function base(url, method, data) {
  return fetch(URL + url, {
    method: method,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : null
  })
    .then(async res => { return await res.json() })
    .then(res => { return res.data })
    .catch(err => { return err.message })
}
export function (tvshow) {
  return fetch('https://tvshows-deploy.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tvshow)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}

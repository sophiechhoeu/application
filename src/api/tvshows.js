const TVSHOWS_API_URL=`${process.env.API_URL}/tvshows`


export function save(tvshow) {
  return fetch(TVSHOWS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tvshow)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}

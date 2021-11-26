export const fetchMasters = () => Promise.race([
  fetch('https://swapi.dev/api/people/1'),
  fetch('https://swapi.dev/api/people/4')
])
  .then(response => response.json())
  .then(data => data.name);

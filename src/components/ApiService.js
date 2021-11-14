import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

export async function fetchHeroes(page) {
  const hero = await axios
    .get(`/heroes?page=${page}&limit=5`)
    .then(resp => resp.data);

  return hero;
}

export async function fetchAddHero(data) {
  const hero = await axios.post(`/heroes`, data).then(resp => resp.data.hero);

  return hero;
}

export async function fetchDeleteHero(id) {
  const hero = await axios
    .delete(`/heroes/${id}`)
    .then(resp => resp.data.message);

  return hero;
}

export async function fetchEditHero(id, data) {
  const hero = await axios
    .put(`/heroes/${id}`, data)
    .then(resp => resp.data.hero);

  return hero;
}

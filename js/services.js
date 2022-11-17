const API_KEY = 'bf2e9f5e35c4522129e83118826b2393';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';


const getData = (url) => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw `Что-то пошло не так, ошибка ${response.status}`
  })
  .catch(err => console.error(err))
;


export const getTriends = async (type = 'all', periud = 'day', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${periud}?api_key=${API_KEY}${LANG}&page=${page}`;
  return await getData(url);
}


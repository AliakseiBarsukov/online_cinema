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

export const getPopular = async (page = 1) => {
  const url =`${BASE_URL}/movie/popular?api_key=${API_KEY}${LANG}&page=${page}`;
  return await getData(url);
}

export const getTop = async (page = 1) => {
  const url =`${BASE_URL}/movie/top_rated?api_key=${API_KEY}${LANG}&page=${page}`;
  return await getData(url);
}

export const getPopularTv = async (page = 1) => {
  const url =`${BASE_URL}/tv/popular?api_key=${API_KEY}${LANG}&page=${page}`;
  return await getData(url);
}

export const getRatedTv = async (page = 1) => {
  const url =`${BASE_URL}/tv/top_rated?api_key=${API_KEY}${LANG}&page=${page}`;
  return await getData(url);
}

export const getVideo = async (id, type) => {
  const url =`${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANG}`;
  return await getData(url);
}

export const search = async (query, page) => {
  const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANG}&page=${page}&include_adult=false&query=${query}`
  return await getData(url);
}





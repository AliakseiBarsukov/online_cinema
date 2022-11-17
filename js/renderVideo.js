import { getTriends } from './services.js'

const filmWeek = document.querySelector('.film-week');


const firstRender = data => {
  console.log('data: ', data);

  filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${data.vote_average
    }">
      <div class="film-week__poster-wrapper">
          <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.poster_path}" alt="${data.title}">
          <p class="film-week__title_origin">${data.original_title
          }</p>
      </div>
      <h2 class="film-week__title">${data.title}</h2>
      <a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M" aria-label="смотреть трейлер"></a>
    </div>
  `;
}


const renderVideo = async () => {
  const data = await getTriends();

  firstRender(data.results[0]);
}


export default renderVideo;
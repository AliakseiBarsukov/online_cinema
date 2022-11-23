import {
  getTriends,
  getTop,
  getPopular,
  getPopularTv,
  getRatedTv,
} from './services.js';
import renderCard from './renderCard.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');


const menuLink = () => {
  getNav.forEach(nav => {
    nav.addEventListener('click', event  => {

      const target = event.target.closest('.get-nav__link');

      if (target) {
        event.preventDefault();

        filmWeek.style.display = 'none';
        title.textContent = target.textContent;

        if (target.classList.contains('get-nav__link_triends')) {
          getTriends('movie')
          .then(data => renderCard(data.results));
        }
        if (target.classList.contains('get-nav__link_popular-movies')) {
          getPopular('movie')
          .then(data => renderCard(data.results));
        }

        if (target.classList.contains('get-nav__link_top-movies')) {
          getTop('movie')
          .then(data => renderCard(data.results));
        }

        if (target.classList.contains('get-nav__link_popular-tv')) {
          getRatedTv('movie')
          .then(data => renderCard(data.results))
        }

        if (target.classList.contains('get-nav__link_top-tv')) {
          getPopularTv('tv')
          .then(data => renderCard(data.results))
        }
      }
    })
  });
}


export default menuLink;

// https://api.themoviedb.org/3/movie/top_popular?api_key=bf2e9f5e35c4522129e83118826b2393&language=ru-RU&page=1
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/top_popular?api_key=bf2e9f5e35c4522129e83118826b2393&language=ru-RU&page=1
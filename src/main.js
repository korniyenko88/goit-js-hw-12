import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchFotos } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreButtonEl = document.querySelector('.js-load-more');
const loader = document.querySelector('.loader');
let searchedValue = '';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
  event.preventDefault();
  searchedValue = searchFormEl.elements.user_query.value.trim();

  if (searchedValue === '') {
    iziToast.warning({
      title: 'Warning',
      position: 'topRight',
      message: 'Please enter a search query.',
    });
    return;
  }

  loader.style.display = 'inline-block';
  loadMoreButtonEl.style.display = 'none';

  fetchFotos(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'Warning',
          position: 'topRight',
          message: 'No images found. Please try a different search query.',
        });
        return;
      }

      const galleryCardTemplate = data.hits
        .map(img => createGalleryCardTemplate(img))
        .join('');
      galleryEl.innerHTML = galleryCardTemplate;

      lightbox.refresh();

      loadMoreButtonEl.style.display = 'block';

      searchFormEl.reset();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: 'An error occurred while uploading images. Please try again.',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};

const onLoadMoreClick = () => {
  loader.style.display = 'inline-block';

  fetchFotos(searchedValue)
    .then(data => {
      if (data.hits.length > 0) {
        const galleryCardTemplate = data.hits
          .map(img => createGalleryCardTemplate(img))
          .join('');
        galleryEl.insertAdjacentHTML('beforeend', galleryCardTemplate);

        lightbox.refresh();

        const cardHeight =
          galleryEl.lastElementChild.getBoundingClientRect().height;
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });

        
      } else {
        iziToast.info({
          title: 'Info',
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: 'An error occurred while uploading images. Please try again.',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};

loadMoreButtonEl.addEventListener('click', onLoadMoreClick);

searchFormEl.addEventListener('submit', onSearchFormSubmit);

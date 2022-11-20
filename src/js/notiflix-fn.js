import { Notify } from 'notiflix/build/notiflix-notify-aio';

export { firstLoad, onWarningFinisf, onWarning, onError };

const firstLoad = totalHits => {
  Notify.success(`'Hooray! We found ${totalHits} images.'`);
};

const onWarningFinisf = () => {
  Notify.warning("We're sorry, but you've reached the end of search results.");
};

const onWarning = () => {
  Notify.warning('Too many matches found. Please enter a more specific name');
};

const onError = () => {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
};
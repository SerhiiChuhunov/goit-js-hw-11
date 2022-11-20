import axios from 'axios';

const API_KEY = '31462994-04e6be6ae8320ed4eb968a8c8';
const BASE_URL = 'https://pixabay.com/api/';
const OPTIONS_PHOTO =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

export default class NewsApiServise {
  constructor() {
    this.inputValue = '';
    this.page = null;
  }

  async fetchPhotos() {
    const responce = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.inputValue}&${OPTIONS_PHOTO}&page=${this.page}`);
      this.page += 1;
      return responce.data;
  }

  resetPage() {
    this.page = 1;
  }

  get value() {
    return this.inputValue;
  }

  set value(newInputValue) {
    this.inputValue = newInputValue;
  }
}
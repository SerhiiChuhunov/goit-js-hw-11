export { createImg };

const getEl = selector => document.querySelector(selector);

function createImg(photos) {
    const markupCards = photos.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          ` <li class="gallery__item">
            <div class="gallery__card">
                <a class="gallery__link" href="${largeImageURL}">
                    <img  class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" height='280' width='420'/>
                </a>
                    <div class="thumb">
                        <p class="stat">
                            <b>Likes: ${likes}</b>
                        </p>
                        <p class="stat">
                            <b>Views: ${views}</b>
                        </p>
                        <p class="stat">
                            <b>Comments: ${comments}</b>
                        </p>
                        <p class="stat">
                            <b>Downloads: ${downloads}</b>
                        </p>
                    </div>
            </div>
        </li> `
      )
      .join('');

    getEl('.gallery').innerHTML += markupCards;
}
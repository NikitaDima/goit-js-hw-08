// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const wrapperEl = document.querySelector('.gallery');

const galleryListEl = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
  `;
  })
  .join('');

wrapperEl.innerHTML = galleryListEl;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

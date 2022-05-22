import { galleryItems } from './gallery-items.js';

const imgGalleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);

imgGalleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);


function createImgGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__items">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>        
        </li>`;
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
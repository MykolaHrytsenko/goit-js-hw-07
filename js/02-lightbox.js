import { galleryItems } from './gallery-items.js';

const imgGalleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);

imgGalleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
// imgGalleryContainer.addEventListener('click', onGalleryContainerClick);

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

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 600, animationSpeed: 600, fadeSpeed: 600, overlayOpacity: 0.5 });
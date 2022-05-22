import { galleryItems } from './gallery-items.js';

const imgGalleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);

imgGalleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
imgGalleryContainer.addEventListener('click', onGalleryContainerClick);


function createImgGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
};

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    const isNotIMG = evt.target.classList.contains('gallery__image');

    if (!isNotIMG) {
        return
    }
    else {
        const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`, {
            onShow: () => { window.addEventListener('keydown', onEscPress) }
        });

        instance.show();

        function onEscPress(e) {
            if (e.code === 'Escape') {
                instance.close();
                window.removeEventListener('keydown', onEscPress);
            };
        };
    };
};
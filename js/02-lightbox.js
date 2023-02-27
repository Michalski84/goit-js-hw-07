import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems
  .map(
    (item) =>   
      `<a class="gallery__item" href="${item.original}"><img src="${item.preview}" class="gallery__image" alt="${item.description}"</img></a>`
  )
  .join("");
gallery.innerHTML = (galleryItem);

document.querySelector('.gallery').onclick = (event) => {
 event.preventDefault();
	basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()

}

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,

});
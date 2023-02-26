
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems
  .map(
    (item) =>
          `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}"><img src="${item.preview}" data-source="${item.original}" class="gallery__image" alt="${item.description}"</img></a></div>`
  )
  .join("");
gallery.innerHTML = (galleryItem);

document.querySelector('.gallery').onclick = (event) => {
 event.preventDefault();
	basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()

}
import { imgDOM, priceDOM, categoryDOM, titleDOM, ratingDOM, descriptionDOM } from '../productDOM.js';

class ProductUI {
	createProductUI(data) {
		console.log(data);
		imgDOM.innerHTML = `<img class="product-photo" src=${data.image} alt="product item"/>`;
		categoryDOM.innerHTML = `${data.category}`;
		titleDOM.innerHTML = `${data.title}`;
		console.log(data.rating.rate);
		ratingDOM.innerHTML = `${data.rating.rate} / 5.0`;
		descriptionDOM.innerHTML = `${data.description}`;
		priceDOM.innerHTML = `${data.price.toFixed(2)} $`;
	}
}

let productUI = new ProductUI();

export { productUI };

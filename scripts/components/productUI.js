import { containerDOM } from '../DOM.js';

class ProductUI {
	createProductUI(data) {
		console.log('create product ui:', data);

		containerDOM.innerHTML = `
			<div class="product-container">
				<div class="column" id="left">
					<div class="img-container"></div>
				</div>
				<div class="column" id="right">
					<div class="category-container"></div>
					<div class="title-container"></div>
					<div class="rating-container"></div>
					<div class="description-container"></div>
					<div class="price-container"></div>
				</div>
			</div>
		`;

		console.log('createProductUI');

		let imgDOM = document.querySelector('.img-container');
		let categoryDOM = document.querySelector('.category-container');
		let titleDOM = document.querySelector('.title-container');
		let ratingDOM = document.querySelector('.rating-container');
		let descriptionDOM = document.querySelector('.description-container');
		let priceDOM = document.querySelector('.price-container');

		imgDOM.innerHTML = `<img class="product-photo" src=${data.image} alt="product item"/>`;
		categoryDOM.innerHTML = `${data.category}`;
		titleDOM.innerHTML = `${data.title}`;
		ratingDOM.innerHTML = `${data.rating.rate} / 5.0`;
		descriptionDOM.innerHTML = `${data.description}`;
		priceDOM.innerHTML = `${data.price.toFixed(2)} $`;
	}
}

let productUI = new ProductUI();

export { productUI };

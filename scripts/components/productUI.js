import { productInfoDOM } from '../DOM.js';

class ProductUI {
	createProductUI(data) {
		productInfoDOM.innerHTML = '';

		productInfoDOM.innerHTML += `
            <div class="products-item">
                <div class="products-title">${data.title}</div>
                <div class="products-title">${data.id}</div>
                <div class="products-title">${data.rating.rate}</div>
            </div>
        `;
	}
}

let productUI = new ProductUI();

export { productUI };

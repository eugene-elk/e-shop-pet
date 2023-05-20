import { productsDOM, containerDOM } from '../DOM.js';
import { productById } from './productById.js';

class UI {
	createUI(data) {
		productsDOM.innerHTML = '';
		data.forEach((item) => {
			productsDOM.innerHTML += `
                <div class="products-item" id="${item.id}">
                    <div class="products-title">${item.title}</div>
                    <div>
                        <img class="products-photo" src=${item.image} alt="product item"/>    
                    </div>                        
                    <div class="products-price">${item.price.toFixed(2)} $</div>
                </div>
            `;
		});

		let products = document.querySelectorAll('.products-item');

		products.forEach((product) => {
			product.addEventListener('click', () => {
				productById.getProductByID(product.id);
			});
		});
	}
}

let ui = new UI();

export { ui };

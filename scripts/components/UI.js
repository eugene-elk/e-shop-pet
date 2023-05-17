import { productsDOM } from '../DOM.js';

class UI {
	createUI(data) {
		productsDOM.innerHTML = '';
		data.forEach((item) => {
			productsDOM.innerHTML += `
                <a href="${window.location.href}item.html?id=${item.id}" class="products-item">
                    <div class="products-title">${item.title}</div>
                    <div class="products-title">${item.id}</div>
                    <div><img class="products-photo" src=${item.image} alt="product item"/></div>
                    <div class="products-price">${item.price.toFixed(2)} $</div>
                </a>
            `;
		});
	}
}

let ui = new UI();

export { ui };

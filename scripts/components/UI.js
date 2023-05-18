import { productsDOM } from '../indexDOM.js';

class UI {
	createUI(data) {
		productsDOM.innerHTML = '';
		data.forEach((item) => {
			productsDOM.innerHTML += `
                <a href="${window.location.origin}/product.html?id=${item.id}">
                    <div class="products-item">
                        <div class="products-title">${item.title}</div>
                        <div>
                            <img class="products-photo" src=${item.image} alt="product item"/>    
                        </div>
                        <div class="products-price">${item.price.toFixed(2)} $</div>
                    </div>
                </a>
            `;
		});
	}
}

let ui = new UI();

export { ui };

import { BASE_URL } from '../api.js';
import { ui } from '../components/UI.js';

class ProductsByCategory {
	async getProductsByCategory(value) {
		try {
			let url = BASE_URL + `/products/category/${value}`;
			let result = await fetch(url);
			let data = await result.json();
			return data;
		} catch (err) {
			console.log('Error getProducts:', err);
		}
	}
}

let productsByCategory = new ProductsByCategory();

export { productsByCategory };

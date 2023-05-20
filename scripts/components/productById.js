import { BASE_URL } from '../api.js';
import { productUI } from './productUI.js';

class ProductById {
	async getProductByID(productID) {
		try {
			let result = await fetch(BASE_URL + `/products/${productID}`);
			let data = await result.json();
			//console.log(data);
			productUI.createProductUI(data);
		} catch (err) {
			console.log('Error getProductByID:', err);
		}
	}
}

let productById = new ProductById();

export { productById };

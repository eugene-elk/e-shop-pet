import { BASE_URL } from '../api.js';

class ProductItem {
	async getProductItem(productID) {
		try {
			let result = await fetch(BASE_URL + `/products/${productID}`);
			let data = await result.json();
			return data;
		} catch (err) {
			console.log('Error getProductItem:', err);
		}
	}
}

let productItem = new ProductItem();

export { productItem };

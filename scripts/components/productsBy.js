import { BASE_URL } from '../api.js';
import { ui } from '../components/UI.js';

class ProductsByCategory {
	async getProductsByCategory(value) {
		try {
			let url = BASE_URL + `/products/category/${value}`;
			console.log(url);
			let result = await fetch(url);
			let data = await result.json();
			return data;
		} catch (err) {
			console.log('Error getProducts:', err);
		}

		/*
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("got products by category");
        ui.createUI(data);
      })
      .catch((error) => {
        console.log("Products error:", error);
      });
    */
	}
}

let productsByCategory = new ProductsByCategory();

export { productsByCategory };

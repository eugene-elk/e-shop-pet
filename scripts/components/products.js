import { BASE_URL } from '../api.js';

class Products {
	async getProducts() {
		try {
			let result = await fetch(BASE_URL + '/products');
			let data = await result.json();
			return data;
		} catch (err) {
			console.log('Error getProducts:', err);
		}
		/*
    fetch(BASE_URL + "/products")
      .then((response) => response.json())
      .then((data) => {
        //createUI(data);
        return data;
      })
      .catch((error) => {
        console.log("Products error:", error);
      });
  }
  */
	}
}

let products = new Products();

export { products };

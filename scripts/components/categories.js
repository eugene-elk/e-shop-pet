import { BASE_URL } from '../api.js';
import { selectDOM } from '../DOM.js';

class Categories {
	getCategories() {
		fetch(BASE_URL + '/products/categories')
			.then((response) => response.json())
			.then((categories) => {
				categories.unshift('all');
				categories.forEach((category) => {
					const newOption = document.createElement('option');
					newOption.innerHTML = category;
					selectDOM.appendChild(newOption);
				});
			})
			.catch((error) => {
				console.log('Categories error:', error);
			});
	}
}

let categories = new Categories();

export { categories };

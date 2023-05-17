import { productItem } from './components/productItem.js';
import { productUI } from './components/productUI.js';

const productId = window.location.href.split('?').pop().split('=')[1];
console.log(productId);

document.addEventListener('DOMContentLoaded', async function () {
	let result = await productItem.getProductItem(productId);
	productUI.createProductUI(result);
});

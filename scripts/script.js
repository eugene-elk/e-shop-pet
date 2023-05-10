import { products } from "./components/products.js";
import { ui } from "./components/UI.js";
import { categories } from "./components/categories.js";
import { productsByCategory } from "./components/productsBy.js";
import { selectDOM } from "./DOM.js";

const BASE_URL = "https://fakestoreapi.com";

document.addEventListener("DOMContentLoaded", async function () {
  let productsData = await products.getProducts();
  ui.createUI(productsData);
  categories.getCategories();
});

// get products from category
selectDOM.addEventListener("change", async function () {
  console.log("select", selectDOM.value);
  if (selectDOM.value === "all") {
    let productsData = await products.getProducts();
    ui.createUI(productsData);
  } else {
    productsByCategory.getProductsByCategory(selectDOM.value);
  }
});
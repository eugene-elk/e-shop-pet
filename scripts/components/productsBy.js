import { BASE_URL } from "../api.js";
import { ui } from "../components/UI.js";

class ProductsByCategory {
  getProductsByCategory(value) {
    fetch(BASE_URL + `/products/category/${value}`)
      .then((response) => response.json())
      .then((data) => {
        ui.createUI(data);
      })
      .catch((error) => {
        console.log("Products error:", error);
      });
  }
}

let productsByCategory = new ProductsByCategory();

export { productsByCategory };

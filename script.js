const BASE_URL = 'https://fakestoreapi.com'

let productsDOM = document.querySelector(".products-center");
let selectDOM = document.querySelector(".choose-category");   

function createUI(data) {
    productsDOM.innerHTML = "";
    data.forEach((item) => {
        productsDOM.innerHTML += `
            <div class="products-item">
                <div class="products-title">${item.title}</div>
                <div><img class="products-photo" src=${item.image} alt="product item"/></div>
                <div class="products-price">${item.price} $</div>
            </div>
        `
    })
}

function getProducts() {    
    fetch(BASE_URL + '/products')
        .then(response => response.json())
        .then(data => {
            createUI(data);
        })
        .catch(error => {
            console.log('Products error:', error);
        })
}

function getCategories() {
    fetch(BASE_URL + '/products/categories')
        .then(response => response.json())
        .then(categories => {
            categories.unshift('all');
            categories.forEach((category) => {
                const newOption = document.createElement('option');
                newOption.innerHTML = category;
                selectDOM.appendChild(newOption);
            })
        })
        .catch(error => {
            console.log('Categories error:', error);
        })
}

function getProductFromCategory(value) {
    fetch(BASE_URL + `/products/category/${value}`)
        .then(response => response.json())
        .then(data => {
            createUI(data);
        })
        .catch(error => {
            console.log('Products error:', error);
        })
}

document.addEventListener("DOMContentLoaded", function() {
    getProducts();
    getCategories();
}) 

// get products from category
selectDOM.addEventListener('change', function() {
    console.log('select', selectDOM.value);
    if (selectDOM.value === "all") {
        getProducts();
    }
    else {
        getProductFromCategory(selectDOM.value);
    }
})
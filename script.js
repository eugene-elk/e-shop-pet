/*
let productsList = [
    {
        title: "Orange",
        priceInDollars: 3,
        weightInGramms: 500,
    },
    {
        title: "Watermelon",
        priceInDollars: 6,
        weightInGramms: 1500,
    },
    {
        title: "Melon",
        priceInDollars: 10,
        weightInGramms: 1000,
    }
]

productsList.forEach(product => {
    console.log(product.title);
})
*/

/*
console.log("hello 1");

fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => console.log("Response:", response.json()));

console.log("hello 2");
*/

/*
let promise = new Promise((resolve, reject) => {
    // задача - выполнить асинхронную функцию, и вернуть статус
    let isDonateBike = 'yes';
    resolve(isDonateBike); // status - fulfilled
});

let promiseError = new Promise((resolve, reject) => {
    let isDonateBike = 'no';
    reject(new Error('error')); // status - rejected
});
*/

/*
let promise = new Promise((resolve, reject) => {
    let data = getData();
    resolve(data); // state - fulfilled
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})
*/

console.log("script");

let productsDOM = document.querySelector(".products-center");

const API_URL = 'https://api.escuelajs.co/api/v1/products'

let isLoading = true;
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(product => {
            productsDOM.innerHTML += `
                <h1>${product.title}</h1>
                <div class="price">Price: ${product.price}$</div>
            `
        });
    })
    .catch((error) => console.error("ERROR:", error))
    .finally(() => {
        isLoading = false;
    })
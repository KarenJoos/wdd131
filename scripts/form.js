let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const d = new Date();
let currentyear = d.getFullYear();
document.getElementById('currentyear').innerHTML = currentyear;

const reviewsDisplay = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews !== 0) {
    reviewsDisplay.textContent = numReviews;
}
// else {
//     reviewsDisplay.textContent = WRITE IN localStorage
// }


numReviews++;

//localStorage.setItem("numReviews-ls, numReviews");

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// document.querySelector("#submit").addEventListener("click", () => {
//     getProducts(products);
// });

getProduct(products);

function getProduct(filteredProducts) {
    var sub = document.getElementById("submit");
    var opt = document.getElementById("option");

    filteredProducts.forEach(product => {
        var names = product.name;
        //submit.option.append(names);
        
        opt.text = names;
        sub.appendChild(names);
    });
}


// Shopping Cart Functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " added to cart!");
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Filter Products by Category
function filterProducts(category) {
    let products = document.querySelectorAll('.content');
    products.forEach(product => {
        if (product.querySelector("h3").innerText.toLowerCase() === category.toLowerCase()) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("shopping").style.display = "none";
}

function showShopping() {
    document.getElementById("home").style.display = "none";
    document.getElementById("shopping").style.display = "block";
}

// Assign Event Listeners to Buy Now Buttons
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".content button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.parentElement.querySelector("h3").innerText;
            let price = this.parentElement.querySelector("h6").innerText.replace('$', '');
            addToCart(productName, price);
        });
    });

    // Assign Event Listeners to Categories
    let categories = document.querySelectorAll(".category");
    categories.forEach(category => {
        category.addEventListener("click", function () {
            filterProducts(this.innerText);
        });
    });
});

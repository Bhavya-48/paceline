//search button click event
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function() {
    alert("Search feature coming soon!");
});

//newsletter form submit event
const newsletterForm = document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thanks for subscribing to Paceline!");
});

// Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function() {
    alert("Login feature coming soon!");
});

//signup button
const signupButton = document.querySelector(".signup-btn");

signupButton.addEventListener("click", function() {
    alert("Signup feature coming soon!");
});

//cart button
const cartButton = document.querySelector(".cart-btn");

cartButton.addEventListener("click", function() {
    alert("Your cart is currently empty!");
});

//shop buttons
const shopButtons = document.querySelectorAll(".shop-link");

shopButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Shop feature coming soon!");
    });
});
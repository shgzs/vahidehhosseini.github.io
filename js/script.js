// This is an example of a simple script.js file

// When the page loads, display an alert message
window.onload = function () {
//    alert("Welcome to my website!");
};

// When the user clicks on a button with the ID "btn-coaching",
// display a message about your coaching services
document.getElementById("btn-coaching").addEventListener("click", function () {
    alert("I offer coaching services to help you achieve your goals!");
});

// When the user clicks on a button with the ID "btn-contact",
// display a message about how to contact you
document.getElementById("btn-contact").addEventListener("click", function () {
    alert("You can contact me at [your email address].");
});

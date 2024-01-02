"use strict"

// variables
let ratingNumber;
let ratings = document.querySelector(".ratings");
let submit = document.querySelector(".button");

ratings.addEventListener("click", (e) => {
    ratingNumber = e.target.innerText;
});

submit.addEventListener("click", () => {
    if (ratingNumber == null) {
        alert("😒 Kindly rate us by clicking a number and then submit.");
    } else {
        document.querySelector(".score").innerText = ratingNumber;
        document.querySelector("#rating-state").classList.add("hidden");
        document.querySelector("#thank-you-state").classList.remove("hidden");
    }
});
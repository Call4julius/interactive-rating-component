"use strict"

// variables
let ratingNumber;
let ratings = document.querySelector(".ratings");
let submit = document.querySelector(".button");
let closeThankYou = document.querySelector(".close-btn");
let caution = document.querySelector(".caution");

ratings.addEventListener("click", (e) => {
    ratingNumber = e.target.innerText;
    submit.classList.remove("m-top");
    caution.classList.add("hidden");
});

submit.addEventListener("click", () => {
    if (ratingNumber == null) {
        submit.classList.add("m-top")
        caution.classList.remove("hidden");
    } else {
        document.querySelector(".score").innerText = ratingNumber;
        document.querySelector("#rating-state").classList.add("hidden");
        document.querySelector("#thank-you-state").classList.remove("hidden");
    }
});

closeThankYou.addEventListener("click", () => {
    document.querySelector("#rating-state").classList.remove("hidden");
    document.querySelector("#thank-you-state").classList.add("hidden");
    ratingNumber = null;
});

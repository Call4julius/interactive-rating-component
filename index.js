"use strict"

// variables
let ratingNumber;
const ratings = document.querySelector(".ratings");
const submit = document.querySelector(".button");
const closeThankYou = document.querySelector(".close-btn");
const caution = document.querySelector(".caution");

ratings.addEventListener("click", (e) => {
    ratingNumber = e.target.innerText;

    if (submit.classList.contains("m-top")) {
        submit.classList.remove("m-top");
        caution.classList.add("hidden");
    }
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

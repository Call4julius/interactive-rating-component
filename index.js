"use strict"

// variables
let ratingNumber;
const ratings = document.querySelector(".ratings");
const cautionMessage = document.querySelector(".caution-message");
const submitButton = document.querySelector(".button");
const closeThankYou = document.querySelector(".close-btn");

// event listeners
ratings.addEventListener("click", (e) => {
    ratingNumber = e.target.innerText;

    if (!cautionMessage.classList.contains("hidden")) {
        document.getElementById("button").style.marginTop = "";
        cautionMessage.classList.add("hidden");
    }
});

submitButton.addEventListener("click", () => {
    if (ratingNumber == null) {
        document.getElementById("button").style.marginTop = "10px";
        cautionMessage.classList.remove("hidden");
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

let currentPasscode = "";
const correctPasscode = "0000"; // This can be changed as needed
let currentSlide = 1;

function pressKey(num) {
    if (currentPasscode.length < 4) {
        currentPasscode += num;
        updatePasscodeDisplay();
        if (currentPasscode.length === 4) {
            setTimeout(checkPasscode, 300);
        }
    }
}

function clearPasscode() {
    currentPasscode = "";
    updatePasscodeDisplay();
}

function updatePasscodeDisplay() {
    const dots = document.querySelectorAll("#passcode-display span");
    dots.forEach((dot, index) => {
        if (index < currentPasscode.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }
    });
}

function checkPasscode() {
    if (currentPasscode === correctPasscode) {
        nextSlide(2);
    } else {
        alert("Incorrect passcode! Hint: its are fav code");
        clearPasscode();
    }
}

function nextSlide(slideNum) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active"));

    const targetSlide = document.getElementById("slide" + slideNum);
    if (targetSlide) {
        targetSlide.classList.add("active");
        currentSlide = slideNum;
    }
}

function prevSlide(slideNum) {
    nextSlide(slideNum);
}

function blowCandles() {
    const flames = document.querySelector(".flames");
    if (flames) {
        flames.style.display = "none";
        setTimeout(() => {
            nextSlide(5);
        }, 1000);
    }
}

// Initialize first slide
document.addEventListener("DOMContentLoaded", () => {
    nextSlide(1);
});
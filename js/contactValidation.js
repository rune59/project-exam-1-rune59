
const form = document.querySelector("#contactForm");
const name = document.querySelector("#fornameAndLastname");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactMessage = document.querySelector("#contactMessage");
const contactMessageError = document.querySelector("#contactMessageError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fornameAndLastname.value, 6) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(subject.value, 16) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(contactMessage.value, 26) === true) {
        contactMessageError.style.display = "none";
    } else {
        contactMessageError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function submitForm(event) {
    event.preventDefault();
    // clear the messages
    message.innerHTML = "";
    // display an "OK-message" if the form has been submitted and was validated
    if (checkLength(fornameAndLastname.value, 6) &&
        checkLength(subject.value, 16) &&
        validateEmail(email.value) &&
        checkLength(contactMessage.value, 26)) {
        button.disabled = false;
        message.innerHTML = '<div id="message">Your message has been sent</div>';
        // clear all input values
        form.reset();
        button.disabled = true;
    } else {
        // disable button
        // button.disabled = true;
        message.innerHTML = '<div id="message">Your message has not been sent</div>';
        // form.reset();
    }
    
}
form.addEventListener("submit", submitForm);


// const myForm = document.getElementById("form");
// const first_name = document.getElementById("first_name");
// const last_name = document.getElementById("last_name");
// const phone = document.getElementById("phone");
// const email = document.getElementById("email");
// const message = document.getElementById("message");

// document.addEventListener("DOMContentLoaded", () => {
//     first_name.focus();
// });

// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs();
// });

const myForm = document.getElementById("form");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

document.addEventListener("DOMContentLoaded", () => {
    first_name.focus();
});

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const isFormValid = checkInputs();

    if (isFormValid) {
        myForm.submit();
    }
});

function checkInputs() {
    const first_nameValue = first_name.value.trim();
    const last_nameValue = last_name.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    let isFormValid = true;

    if (first_nameValue === "") {
        setError(first_name, "First name is required.");
        isFormValid = false;
    } else {
        setSuccess(first_name);
    }

    if (last_nameValue === "") {
        setError(last_name, "Last name is required.");
        isFormValid = false;
    } else {
        setSuccess(last_name);
    }

    if (phoneValue === "") {
        setError(phone, "Phone number is required.");
        isFormValid = false;
    } else if (isNaN(phoneValue) || phoneValue.length !== 10 ) {
        setError(phone, "Must be a valid phone number.");
        isFormValid = false;
        phone.focus();
    } else {
        setSuccess(phone);
    }

    if (emailValue === "") {
        setError(email, "Email address is required.");
        isFormValid = false;
    } else if (!isValid(emailValue)) {
        setError(email, "Must be a valid email address.");
        isFormValid = false;
        email.focus();
    } else {
        setSuccess(email);
    }

    function isValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }

    if (
        setSuccess(first_name) &&
        setSuccess(last_name) &&
        setSuccess(phone) &&
        setSuccess(email)
        ) {
        myForm.submit();
    }

};

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classList.add("error");
    formControl.classList.remove("success");
};

function setSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add("success");
    formControl.classList.remove("error");
};
const form = document.getElementById("form");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

document.addEventListener("DOMContentLoaded", () => {
    first_name.focus();
});

form.addEventListener("submit", (e) => {
    // e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const first_nameValue = first_name.value.trim();
    const last_nameValue = last_name.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if (first_nameValue === "") {
        setError(first_name, "First name is required.");
    } else {
        setSuccess(first_name);
    }

    if (last_nameValue === "") {
        setError(last_name, "Last name is required.");
    } else {
        setSuccess(last_name);
    }

    if (phoneValue === "") {
        setError(phone, "Phone number is required.");
    } else if (isNaN(phoneValue)) {
        setError(phone, "Must be a valid phone number.");
        phone.focus();
    } else {
        setSuccess(phone);
    }

    if (emailValue === "") {
        setError(email, "Email address is required.");
    } else if (!isValid(emailValue)) {
        setError(email, "Must be a valid email address.");
        email.focus();
    } else {
        setSuccess(email);
    }

    function isValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }

    if (
        first_name.parentElement.classList.contains("success") &&
        last_name.parentElement.classList.contains("success") &&
        phone.parentElement.classList.contains("success") &&
        email.parentElement.classList.contains("success")
    ) {
        form.submit();
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
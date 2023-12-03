const form = document.getElementById("form");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const validateInputs = () => {
    const first_nameValue = first_name.value.trim();
    const last_nameValue = last_name.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if (first_nameValue === '') {
        setError(first_name, 'First name is required.');
    } else {
        setSuccess(first_name);
    }

    if (last_nameValue === '') {
        setError(last_name, 'Last name is required.');
    } else {
        setSuccess(last_name);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required.');
    } else if (isNaN(phoneValue) || phoneValue.length !== 10 ) {
        setError(phone, 'Must be a valid phone number.');
    } else {
        setSuccess(phone);
    }

    if (emailValue === '') {
        setError(email, 'Email address is required.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Must be a valid email address.');
    } else {
        setSuccess(email);
    }

    if (document.querySelectorAll('.success').length === 4) {
        form.submit();
    } 

};
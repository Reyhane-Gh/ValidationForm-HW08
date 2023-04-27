const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Add 'input' event listener to the form
form.addEventListener('input', e => {
    const inputElement = e.target;
    validateInput(inputElement);
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
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInput = inputElement => {
    const inputValue = inputElement.value.trim();

    switch (inputElement.id) {
        case 'username':
            if (inputValue === '') {
                setError(inputElement, 'Username is required');
            } else {
                setSuccess(inputElement);
            }
            break;
        case 'email':
            if (inputValue === '') {
                setError(inputElement, 'Email is required');
            } else if (!isValidEmail(inputValue)) {
                setError(inputElement, 'Provide a valid email address');
            } else {
                setSuccess(inputElement);
            }
            break;
        case 'password':
            if (inputValue === '') {
                setError(inputElement, 'Password is required');
            } else if (inputValue.length < 8) {
                setError(inputElement, 'Password must be at least 8 characters.');
            } else {
                setSuccess(inputElement);
            }
            break;
        case 'password2':
            const passwordValue = password.value.trim();
            if (inputValue === '') {
                setError(inputElement, 'Please confirm your password');
            } else if (inputValue !== passwordValue) {
                setError(inputElement, "Passwords don't match");
            } else {
                setSuccess(inputElement);
            }
            break;
        default:
            break;
    }
};

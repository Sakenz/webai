document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission

        const displayName = document.getElementById('displayName');
        const username = document.getElementById('username');
        const emailAddress = document.getElementById('emailAddress');
        const password = document.getElementById('password');
        const passwordConfirm = document.getElementById('passwordConfirm');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (displayName.value === '') {
            displayName.classList.remove('is-valid');
            displayName.classList.add('is-invalid');
        } else {
            displayName.classList.remove('is-invalid');
            displayName.classList.add('is-valid');
        }

        if (username.value.length < 6) {
            username.classList.add('is-invalid');
        } else {
            username.classList.remove('is-invalid');
            username.classList.add('is-valid');
        }

        if (!emailRegex.test(emailAddress.value)) {
            emailAddress.classList.add('is-invalid');
        } else {
            emailAddress.classList.remove('is-invalid');
            emailAddress.classList.add('is-valid');
        }

        if (password.value.length < 8) {
            password.classList.add('is-invalid');
        } else {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
        }

        if (passwordConfirm.value !== password.value) {
            passwordConfirm.classList.remove('is-valid');
            passwordConfirm.classList.add('is-invalid');
        } else if (password.value !== '') {
            passwordConfirm.classList.remove('is-invalid');
            passwordConfirm.classList.add('is-valid');
        }
    });
});

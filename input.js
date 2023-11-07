document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var nameInput = document.getElementById("name");
    var emailError = document.getElementById("errorEmail");
    var passwordError = document.getElementById("errorPassword");
    var nameError = document.getElementById("errorName");

    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var nameRegex = /^[A-Za-z '-]+$/;

    var signUpButton = document.querySelector(".signup-button");

    emailInput.addEventListener('input', validateEmailSignUp);
    passwordInput.addEventListener('input', validatePasswordSignUp);
    nameInput.addEventListener('input', validateNameSignUp);

    signUpButton.addEventListener('click', function(event) {
        validateEmailSignUp();
        validatePasswordSignUp();
        validateNameSignUp();

        if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value) && nameRegex.test(nameInput.value)) {
            window.location.href = "dash.html?name=" + encodeURIComponent(nameInput.value);
        } else {
            event.preventDefault();
        }
    });

    function validateEmailSignUp() {
        if (emailRegex.test(emailInput.value)) {
            emailError.innerHTML = "";
            emailInput.style.border = "1px solid gray";
        } else {
            emailError.innerHTML = "Invalid email format";
            emailInput.style.border = "1px solid red";
        }
    }

    function validatePasswordSignUp() {
        if (passwordRegex.test(passwordInput.value)) {
            passwordError.innerHTML = "";
            passwordInput.style.border = "1px solid gray";
        } else {
            passwordError.innerHTML = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number";
            passwordInput.style.border = "1px solid red";
        }
    }

    function validateNameSignUp() {
        if (nameRegex.test(nameInput.value)) {
            nameError.innerHTML = "";
            nameInput.style.border = "1px solid gray";
        } else {
            nameError.innerHTML = "Invalid name format";
            nameInput.style.border = "1px solid red";
        }
    }
});

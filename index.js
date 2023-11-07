document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var errorName = document.getElementById("errorName");
    var errorPhone = document.getElementById("errorPhone");
    var formDiv = document.querySelector("#formDiv");

    formDiv.addEventListener('submit', function(event) {
        event.preventDefault();
        var nameValue = nameInput.value;
        var nameRegex = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
        if (nameRegex.test(nameValue)) {
            errorName.innerHTML = "";
            nameInput.style.border = "1px solid gray";

        } else {
            nameInput.style.border = "1px solid red";
            errorName.innerHTML = "This is invalid";
        }
        var phoneValue = phoneInput.value;
        var phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
        if (phoneRegex.test(phoneValue)) {
            errorPhone.innerHTML = "";
            phoneInput.style.border = "1px solid gray";
        } else {
            phoneInput.style.border = "1px solid red";
            errorPhone.innerHTML = "This is not a valid Phone Number";
        }
    });
});

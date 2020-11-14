// let signUpButton = document.getElementById("signUpButton");
// let firstName = document.getElementById("firstName");
// let lastName = document.getElementById("lastName");
// let signUpEmail = document.getElementById("signUpEmail");
// let signUpPassword = document.getElementById("signUpPassword")

let visibilityIcon = document.getElementById("signUpVisibility");

function togglePasswordVisibility() {
    let signUpPassword = document.getElementById("signUpPassword");
    let signUpVisibility = document.getElementById("signUpVisibility");

    if (signUpPassword.type === "password") {
        signUpPassword.type = "text";
    } else {
        signUpPassword.type = "password";
    };

    signUpVisibility.classList.toggle("fa-eye-slash");
    signUpVisibility.classList.toggle("fa-eye");
}

visibilityIcon.addEventListener("click", togglePasswordVisibility);
let visibilityIcon = document.getElementById("loginVisibility");

function togglePasswordVisibility() {
    let loginPassword = document.getElementById("loginPassword");
    let loginVisibility = document.getElementById("loginVisibility");

    if (loginPassword.type === "password") {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    };

    loginVisibility.classList.toggle("fa-eye-slash");
    loginVisibility.classList.toggle("fa-eye");
}

visibilityIcon.addEventListener("click", togglePasswordVisibility);
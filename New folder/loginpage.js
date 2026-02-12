function togglePassword() {
    if (check.checked) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    for (var i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            break;
        }
    }
    if (i === email.length) {
        alert("Please enter a valid email address.");
        return false;
    }

    for (var j = 0; j < password.length; j++) {
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
        }
        return email !== "" && password !== "";
    }
}
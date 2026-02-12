document.addEventListener("DOMContentLoaded", function() {
    var newsletterForm = document.getElementById("newsletter-form");
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var emailInput = document.getElementById("email");
        var email = emailInput.value.trim();
        if (validateEmail(email)) {
            alert("Thank you for subscribing to our newsletter!");
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

for (var i = 0; i < document.forms.length; i++) {
    document.forms[i].addEventListener("submit", function(event) {
        event.preventDefault();
    });
}
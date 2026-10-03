const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const correctUsername = "MaameYaa";
    const correctPassword = "MaameYaa123";

    const errorMessage = document.getElementById("errorMessage");

    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        // Correct details → go to the next page
        window.location.href = "home.html";

    } else {

        // Wrong details → stay on login page
        errorMessage.textContent =
            "Incorrect username or password.";

        errorMessage.style.display = "block";
    }

});
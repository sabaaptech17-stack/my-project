const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

// Open and close the mobile navigation menu.
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  // Close the menu after choosing a section.
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    });
  });
}

// Keep the footer year up to date automatically.
const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        message.style.color = "#b33a3a";
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (password.length < 6) {
        message.style.color = "#b33a3a";
        message.textContent = "Password must be at least 6 characters.";
        return;
    }

    message.style.color = "#64815b";
    message.textContent = "Demo sign-in successful! Welcome back.";
});

document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();

    message.style.color = "#986f55";
    message.textContent = "Please contact me for password assistance.";
});

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

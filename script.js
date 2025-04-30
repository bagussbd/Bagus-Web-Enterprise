// Menu active effect
const menuItems = document.querySelectorAll('.sidebar nav ul li');
const mainContent = document.querySelector('.main-content');
const aboutContent = document.querySelector('.about-content');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Tampilkan About jika klik ABOUT, sisanya Main Content
    if (item.textContent === 'ABOUT') {
      mainContent.style.display = 'none';
      aboutContent.style.display = 'block';
    } else {
      mainContent.style.display = 'flex';
      aboutContent.style.display = 'none';
    }
  });
});

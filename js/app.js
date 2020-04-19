const navBtn = document.querySelector('nav .nav-btn');
const theNav = document.querySelector('nav ul');
navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('active');
  theNav.classList.toggle('active');
});

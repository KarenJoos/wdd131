const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    mainnav.classList.toggle('active');
    hamburger.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainnav.classList.remove('active');
}))
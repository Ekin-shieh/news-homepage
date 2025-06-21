const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const navMenu = document.querySelector('.menu');
const overLay = document.querySelector('.overlay');

openBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
    overLay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overLay.classList.remove('active');
});

overLay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overLay.classList.remove('active');
});

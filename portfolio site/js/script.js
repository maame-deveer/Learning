const menuBtn = document.querySelector('#open-menu-btn');
const closeMenu = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav-menu');

// open nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeMenu.style.display = 'inline-block';
});

// close nav menu
const closeNav = () => {
    menu.style.display = 'none';
    closeMenu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
};

closeMenu.addEventListener('click', closeNav);

// close nav menu when items are clicked

if(window.innerWidth < 1025){
    document.querySelectorAll(".nav-menu li a").forEach(navItem => {
        navItem.addEventListener('click', closeNav);
    })
};

// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})
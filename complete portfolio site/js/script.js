//open and close nav
const openMenuBtn = document.querySelector('#open');
const closeMenuBtn = document.querySelector('#close');
const navMenu = document.querySelector('.nav-links');

//open nav
openMenu = () => {
    navMenu.style.display = 'block';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'inline-block';
}
openMenuBtn.addEventListener('click', openMenu);

//close nav
closeMenu = () => {
    navMenu.style.display = 'none';
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'inline-block';
}
closeMenuBtn.addEventListener('click', closeMenu);

//close nav when link is clicked
if(document.body.clientWidth < 1024){
    navMenu.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeMenu);
    })
}


//toggle active class
const navItems = navMenu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

//show more text when read mpre is clicked
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent = "Show Less";
    }else{
        readMoreBtn.textContent = "Show More";
    }
})

//show or hide skills
const skillItems = document.querySelector('section.skills .skill .items');
const skillOne = document.querySelector('#skill-1');
const skillTwo = document.querySelector('#skill-2');
const skillThree = document.querySelector('#skill-3');
const skillFour = document.querySelector('#skill-4');

openSkill = () => {
    if(skillItems.style.display === 'block'){
        skillItems.style.display = 'none';
    }else{
        skillItems.style.display = 'block';
    }
}
skillOne.addEventListener('click', openSkill);
skillTwo.addEventListener('click', openSkill);
skillThree.addEventListener('click', openSkill);
skillFour.addEventListener('click', openSkill);

//add box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})
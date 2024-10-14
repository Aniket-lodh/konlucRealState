//******************** Change Background Header ********************\\
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is higher than the 75 viewport height,toggle the scroll-header
    if (this.scrollY >= 75)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


//******************** Swiper JS Bundle in Popular ********************\\
let swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//******************** Value Accordion ********************\\
let accordionItems = document.querySelectorAll('.value__accordion-item');
accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.value__accordion-header');
    accordionHeader.addEventListener('click', () => {
        // Toggle the other descriptions and keep only one opened
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);
        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
})
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content');
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }

}
//******************** Scroll Section Active Link ********************\\
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


//******************** SHOW SCROLL UP ********************\\
function scrollUp() {
    const scrollUp = document.getElementById('scrollup');
    //when the scroll is higher than 350 viewport, add the show-scroll class to the a tag
    if (this.scrollY >= 350)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');

}

window.addEventListener('scroll', scrollUp);

//******************** SHOW SCROLL UP ********************\\
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'ri-sun-line'
//Obtain previously selected theme & icon (if user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon');
//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
    getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}
// Activate / deActivate the theme manually
themeButton.addEventListener('click', () => {
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


//******************** SCROLL REVEAL ANIMATION ********************\\
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})
sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container');
sr.reveal('.home__description, .footer__info', {delay: 500});
sr.reveal('.home__search', {delay: 600});
sr.reveal('.home__value', {delay: 700});
sr.reveal('.home__images', {delay: 800, origin: 'bottom'});
sr.reveal('.logos__img', {interval: 100});
sr.reveal('.value__images, .contact__content', {origin:'left'});
sr.reveal('.value__content, .contact__images', {origin:'right'});
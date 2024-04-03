let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

};
const sr= ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'bottom'});
sr.reveal('.icons',{delay:200, origin:'left'});
sr.reveal('.h1',{delay:200, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

/*==================typed js==============================*/
const typed = new Typed('.multiple-text', {
    strings : ['Full Stack Developer','Java Developer','Desktop App Developer','Web App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


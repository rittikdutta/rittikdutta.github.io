let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});
/*==================typed js==============================*/
const typed = new Typed('.multiple-text', {
    strings : ['Full Stack Developer','Java Developer','Desktop App Developer','Web App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
  /**---------------------navbar js ------------------------------------- */
  let menu = document.querySelector('#menu-icon');
  let navlist = document.querySelector('.navlist');
  
  menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('open');
  
  };
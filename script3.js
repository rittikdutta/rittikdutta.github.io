const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');

content1.addEventListener('mouseenter', function() {
  this.classList.add('hover');
});

content1.addEventListener('mouseleave', function() {
  this.classList.remove('hover');
});

content2.addEventListener('mouseenter', function() {
  this.classList.add('hover');
});

content2.addEventListener('mouseleave', function() {
  this.classList.remove('hover');
});
/*------------------------------auto slider code js ------------------------*/
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
/*-------------------------------------------------------------------------*/


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

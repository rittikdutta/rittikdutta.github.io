document.getElementById('scrollRight').addEventListener('click', function() {
    document.querySelector('.certificate-wrapper').scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  });
  
  document.getElementById('scrollLeft').addEventListener('click', function() {
    document.querySelector('.certificate-wrapper').scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  });

  /**----------------------2ND SCROLLER-------------------------- */
  document.getElementById('scrollRight1').addEventListener('click', function() {
    document.querySelector('.certificate-wrapper1').scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  });
  
  document.getElementById('scrollLeft1').addEventListener('click', function() {
    document.querySelector('.certificate-wrapper1').scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  });
  /**------------------------------------------------ */
  
  function openCertificateDialog(imageSrc) {
    var dialog = document.getElementById('certificateDialog');
    var img = document.getElementById('certificateDialogImg');
    img.src = imageSrc;
    dialog.style.display = 'block';
  }
  
  function closeCertificateDialog() {
    var dialog = document.getElementById('certificateDialog');
    dialog.style.display = 'none';
  }

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
  
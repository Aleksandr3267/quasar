let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.menu');
let bodyLock = document.querySelector('body');
document.addEventListener('click', burg);

function burg(event){
  if(event.target.closest('.header-burger')){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
  }
  if(!event.target.closest('.header-burger') & !event.target.closest('.menu')){
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  }
}

document.addEventListener('keyup', function(event){
  if(event.code === 'Escape'){
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  }
});


/* ----------------------------- animate circle ----------------------------- */

window.onload = function(){
  const  parallax = document.querySelector('.wrapper');
  if(parallax){
    //обьекты
    const circle = document.querySelector('.main .main__image-token');
    //коэфициент
    const forCircle = 10;
    const speed = 0.05;
    //обьявление переменных
    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;
    function setMouseParallaxStyle(){
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;
      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);
      //передаём стили
      circle.style.cssText = `transform: translate(${positionX / forCircle}%,${positionY / forCircle}%);`;
      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();
    parallax.addEventListener("mousemove", function (e) {
      //ПОЛУЧЕНИЕ ШИРИНЫ И ВЫСОТЫ БЛОКА
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;
      //НОЛЬ ПО СЕРЕДИНЕ
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;
      //получаем полценты
      coordXprocent = coordX / parallaxWidth * -50;
      coordYprocent = coordY / parallaxHeight * -50;
    });
  }
}



$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() >= 700) {
  $('.wrapper__block').fadeIn();
  } else {
  $('.wrapper__block').fadeOut();
  }
  });
  $('.wrapper__block').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });


$("a.wrapper__tre").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});



// slider DAO is changing
new Swiper('.DAO-is-changing__slider', {
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },
  autoHeight: true,
  slidesPerView:3,
  spaceBetween:64,
  sledesPerGroup: 1,
  // adaptive
  breakpoints: {
      320:{
        slidesPerView: 2,
        spaceBetween:20,
      },
      450:{
        slidesPerView: 2,
        spaceBetween:26,
      },
      1101:{
        slidesPerView: 3,
        spaceBetween:64,
      },
      1501:{
        slidesPerView: 2,
      },
      1700: {
          slidesPerView: 3,
      }

  },
});






const sliderThumbs = new Swiper('.whats-mini-news__slider', {
  slidesPerView: 5,
  spaceBetween:63,
  watchOverflow:true,
  initialSlide:0,
});

// slider whats-news
new Swiper('.whats-news__slider', {
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },
  autoHeight: true,
  slidesPerView:1,
  slidesPerGroup: 1,
  effect:'fade',
  fadeEffect:{
    crossFade: true,
  },
  thumbs:{
    swiper: sliderThumbs
  },
});









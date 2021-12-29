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

// ВЫДВИГАЕМОЕ МЕНЮ
let top_menu = document.querySelector('.wrapper__menu-top');
let nav_bar =  document.getElementById("navbar");

$(document).ready(function () {
  var previousScroll = 0,
    navBarOrgOffset = $('#navbar').offset().top;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > navBarOrgOffset) {
      if (currentScroll > previousScroll) {
        document.getElementById("navbar").style.top = "-150px";
        document.getElementById("wrapper__m-top").classList.add('active');
      } else {
        document.getElementById("navbar").style.top = "-150px";
        document.getElementById("wrapper__m-top").classList.add('active');
      }
    } else {
      nav_bar.classList.remove('fixed');
      document.getElementById("wrapper__m-top").classList.remove('active');
      document.getElementById("navbar").style.top = "0px";
    }
    previousScroll = currentScroll;
  });
});

top_menu.addEventListener('mouseover', function(){
  nav_bar.classList.add('fixed');
  document.getElementById("wrapper__m-top").classList.remove('active');
  document.getElementById("navbar").style.top = "0px";
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
      801:{
        slidesPerView: 3,
        spaceBetween:54,
      },
      1501:{
        slidesPerView: 2,
      },
      1700: {
          slidesPerView: 3,
      }
  },
});


/* ------------------------------ economic-here ----------------------------- */



window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");
var numStars = 1000;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;
var stars = [], star;
var i;
let animate=false;


let sdf = document.querySelector('.economic-here__video-circle');
sdf.addEventListener('mouseenter',  function(){
  animate = true;
  executeFrame();
});
sdf.addEventListener('mouseleave', function(){
  animate = false;
});


initializeStars();
function executeFrame(){
  if(animate)
    requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
}
function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}
function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}
function drawStars(){
  var pixelX, pixelY, pixelRadius;
  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }
  if(warp==0)
  {c.fillStyle = "rgba(0,10,20,1)";
  c.fillRect(0,0, canvas.width, canvas.height);}
  c.fillStyle = "rgba(209, 255, 255, "+radius+")";
  for(i = 0; i < numStars; i++){
    star = stars[i];
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 3 * (focalLength / star.z);
    if (document.documentElement.clientWidth < 950) {
      pixelRadius = 2 * (focalLength / star.z);
    }if (document.documentElement.clientWidth < 550) {
      pixelRadius = 1 * (focalLength / star.z);
    }
    c.beginPath();
    c.arc(pixelX, pixelY, 7, 0, 2*Math.PI, false);
    c.fillStyle = "rgba(209, 255, 255, 1)";
    c.fill();



  }
}
executeFrame();














/* ---------------------------------- news ---------------------------------- */
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









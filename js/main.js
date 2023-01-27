let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.menu');
let bodyLock = document.querySelector('body');
document.addEventListener('click', burg);
// anchor

document.querySelector("body").addEventListener('click', function (event) {
    if (!event.target.matches('[href*="#"]')) return;
    var fixed_offset = 100;
    var target = document.querySelector(event.target.hash);
    if (!target) return;
    event.preventDefault();
    var targetTop = target.getBoundingClientRect().top + window.pageYOffset - fixed_offset;
    window.scrollTo({
        top: targetTop,
        behavior: "smooth"
    });
});

function burg(event) {
    if (event.target.closest('.header-burger')) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    }
    if (!event.target.closest('.header-burger') & !event.target.closest('.menu')) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        bodyLock.classList.remove('lock');
    }
}
menu.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
});
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        burger.classList.remove('active');
        menu.classList.remove('active');
        bodyLock.classList.remove('lock');
    }
});
let top_menu = document.querySelector('.wrapper__menu-top');
let nav_bar = document.getElementById("navbar");


document.addEventListener("DOMContentLoaded", function () {
    var previousScroll = 0,
        navBarOrgOffset = document.getElementById("navbar").offsetTop;
    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset;
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


top_menu.addEventListener('mouseover', function () {
    nav_bar.classList.add('fixed');
    document.getElementById("wrapper__m-top").classList.remove('active');
    document.getElementById("navbar").style.top = "0px";
});

/* ----------------------------- animate circle ----------------------------- */
window.onload = function () {
    const parallax = document.querySelector('.wrapper');
    if (parallax) {
        const circle = document.querySelector('.main .main__image-token');
        const forCircle = 10;
        const speed = 0.05;
        let positionX = 0,
            positionY = 0;
        let coordXprocent = 0,
            coordYprocent = 0;
        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);
            circle.style.cssText = `transform: translate(${positionX / forCircle}%,${positionY / forCircle}%);`;
            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();
        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;
            coordXprocent = coordX / parallaxWidth * -50;
            coordYprocent = coordY / parallaxHeight * -50;
        });
    }
}
// document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 700) {
        document.querySelectorAll('.wrapper__block').forEach(function (el) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; });
    } else {
        document.querySelectorAll('.wrapper__block').forEach(function (el) { el.style.opacity = '0'; el.style.pointerEvents = 'none'; });
    }
});
// document.querySelectorAll('.wrapper__block').forEach(function (el) {
//     el.addEventListener("click", function () {
//         window.scroll({
//             top: 0,
//             left: 0,
//             behavior: 'smooth'
//         });
//     });
// });
document.querySelectorAll("a.wrapper__tre").forEach(function (el) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        var anchor = el.getAttribute('href');
        var scrollAnchor = document.querySelector(anchor);
        if (!scrollAnchor) return;
        window.scroll({
            top: scrollAnchor.getBoundingClientRect().top + window.pageYOffset - 60,
            left: 0,
            behavior: 'smooth'
        });
    });
});
// });













// slider DAO is changing
new Swiper('.DAO-is-changing__slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 64,
    sledesPerGroup: 1,
    // adaptive
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 26,
        },
        801: {
            slidesPerView: 3,
            spaceBetween: 54,
        },
        1501: {
            slidesPerView: 2,
        },
        1700: {
            slidesPerView: 3,
        }
    },
});
/* ------------------------------ economic-here ----------------------------- */
let sdf = document.querySelector('.economic-here__video-circle');
// lines
let lineLa = document.querySelector('.economic-here__video-line-large');
let lineSm = document.querySelector('.economic-here__video-line-small');
if (document.documentElement.clientWidth > 1080) {
    sdf.addEventListener('mouseenter', function () {
        speed = 1;
        // lines
        lineLa.style.transform = "scale(0.9)";
        lineSm.style.transform = "scale(0.92)";
    });
    sdf.addEventListener('mouseleave', function () {
        speed = 0;
        // lines
        lineLa.style.transform = "none";
        lineSm.style.transform = "none";
    });
}
var speed = 0;
var starsCount = 800;
var stars = [];
class Star {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
    }
    update() {
        this.z -= speed;
        if (this.z < 1) {
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.z = width;
        }
    }
    draw() {
        fill(255);
        noStroke();
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 10, 0);
        ellipse(sx, sy, r, r);
    }
}
function setup() {
    var width = document.querySelector('.economic-here__video-circle').offsetWidth;
    var height = document.querySelector('.economic-here__video-circle').offsetHeight;
    var myCanvas = createCanvas(width, height);
    for (var i = 0; i < starsCount; i++) {
        stars[i] = new Star();
    }
    let ss = document.querySelector('.space-over');
    myCanvas.parent(ss);
}
function draw() {
    background(0, 180);
    translate(width / 2, height / 2);
    for (var i = 0; i < starsCount; i++) {
        stars[i].draw();
        stars[i].update();
    }
}
addEventListener('resize', () => {
    resizeCanvas(width, height);
})
// for text economic
let ecoClick = document.querySelector('.economic-here');
let eco1 = document.querySelector('.block1');
let eco2 = document.querySelector('.block2');
let eco3 = document.querySelector('.block3');
let eco4 = document.querySelector('.block4');
let butCl = document.querySelector('.economic-here__tap-ic');
function sddedf() {
    lineLa.style.animation = "lineS 4s ease-in-out";
    lineSm.style.animation = "lineS 4s ease-in-out";
};
ecoClick.addEventListener('click', function (event) {
    if (document.documentElement.clientWidth < 1080) {
        lineLa.style.transform = "scale(0.92)";
        lineSm.style.transform = "scale(0.92)";
        setTimeout("lineLa.style.transform= 'none';", 400);
        setTimeout("lineSm.style.transform= 'none';", 400);
        butCl.classList.add('hide');
        setTimeout("butCl.style.display = 'none';", 600);
        if (eco4.classList.contains('active')) {
            eco4.classList.remove('active');
            eco1.classList.add('active');
        } else if (eco1.classList.contains('active')) {
            eco1.classList.remove('active');
            eco2.classList.add('active');
        } else if (eco2.classList.contains('active')) {
            eco2.classList.remove('active');
            eco3.classList.add('active');
        } else if (eco3.classList.contains('active')) {
            eco3.classList.remove('active');
            eco4.classList.add('active');
        }
    }
});
/* ---------------------------------- news ---------------------------------- */
const sliderThumbs = new Swiper('.whats-mini-news__slider', {
    slidesPerView: 5,
    spaceBetween: 63,
    watchOverflow: true,
    initialSlide: 0,
});
// slider whats-news
new Swiper('.whats-news__slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    thumbs: {
        swiper: sliderThumbs
    },
});
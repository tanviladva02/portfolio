// SLIDER

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

// SERVICES-SLIDER

$('.responsive').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 4,
slidesToScroll: 1,
responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
    }
    },
    {
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
    },
    {
    breakpoint: 576,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
]
});

// ACCORDIAN

$(document).ready(function(){
       $("h2").click(function(){
            $(this).parent(".accordian-item").find(".accordian-content").slideToggle();
            $(this).parent(".accordian-item").siblings(".accordian-item").children(".accordian-content").slideUp();
       });
  });

//   PROJECTS

(() => {
const counter = document.querySelectorAll('.counter');
const array = Array.from(counter);
array.map((item) => {
let counterInnerText = item.textContent;

let count = 1;
let speed = item.dataset.speed / counterInnerText
function counterUp() {
    item.textContent = count++
    if (counterInnerText < count) {
        clearInterval(stop);
    }
}
const stop = setInterval(() => {
    counterUp();
}, speed);
})
})()

// TESTIMONIAL

var swiper = new Swiper(".testimonial-slider", {
pagination: {
el: ".swiper-pagination",
dynamicBullets: true,
},
});

// BACK-TO-TOP

$(document).ready(function(){
    $(".back-to-top").click(function(){
        $("html").animate({scrollTop:0});
    });
});

// SCROLL

$(window).scroll(function(){
    if($(this).scrollTop() > 0)
    {
        $("header").addClass("active");
        $(".back-to-top").fadeIn("");
    }
    else
    {
        $("header").removeClass("active");
        $(".back-to-top").fadeOut("");
    }
});

// LOADER

$(window).on('load',function(){
    $(".overlay").fadeOut(2000);
});

// TOGGLE

$(".toggle").click(function(){
    $("nav").slideToggle();
});


// THEME-SWITCHER

$(document).ready(function(){
    $(".switch i").click(function(){
        $(".switch").toggleClass("switcher");
    });
});

$(".switch li").click(function(){
    var color = $(this).css("background-color");
    $(":root").css("--theme-color",color);
});

$(".switch li").click(function(){
    var color = $(this).css("color");
    $(":root").css("--theme-text",color);
});
// TOGGLE

$(".toggle").click(function(){
    $("nav").slideToggle();
}); 

// SCROLLING

$(window).scroll(function(){
    if($(this).scrollTop()>0)
    {
        $("header").addClass("active");
        $(".backtotop").fadeIn();
    }
    else
    {
        $("header").removeClass("active");
        $(".backtotop").fadeOut();
    }
});

// BACK-TO-TOP

$(document).ready(function(){
    $(".backtotop").click(function(){
        $("html").animate({scrollTop:0});
    });
});

// LOADER

$(window).on('load',function(){
    $(".overlay").fadeOut(4000);
});

// SLIDER-MAIN


$('.slider').each(function() {              
    var $this   = $(this);                   
    var $group  = $this.find('.slide-group'); 
    var $slides = $this.find('.slide');      
    var buttonArray  = [];                   
    var currentIndex = 0;                    
    var timeout;                             
  
    function move(newIndex) {          
      var animateLeft, slideLeft;     
  
      advance();                       
  
     
      if ($group.is(':animated') || currentIndex === newIndex) {  
        return;
      }
  
      buttonArray[currentIndex].removeClass('active'); 
      buttonArray[newIndex].addClass('active');       
  
      if (newIndex > currentIndex) {   
        slideLeft = '100%';            
        animateLeft = '-100%';         
      } else {                        
        slideLeft = '-100%';          
        animateLeft = '100%';          
      }
      
      $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
  
      $group.animate( {left: animateLeft}, function() {    
        $slides.eq(currentIndex).css( {display: 'none'} );     
        $slides.eq(newIndex).css( {left: 0} ); 
        $group.css( {left: 0} );               
        currentIndex = newIndex;               
      });
    }
  
    function advance() {                     
      clearTimeout(timeout);               
      timeout = setTimeout(function() {     
        if (currentIndex < ($slides.length - 1)) { 
          move(currentIndex + 1);       
        } else {                             
          move(0);                          
        }
      }, 4000);                             
    }
  
    $.each($slides, function(index) {
    
      var $button = $('<button type="button" class="slide-btn">&bull;</button>');
      if (index === currentIndex) {    
        $button.addClass('active');   
      }
      $button.on('click', function() { 
        move(index);                   
      }).appendTo('.slide-buttons');   
      buttonArray.push($button);       
    });
  
    advance();                          
  
  
  });

  // SPECIALITY-SLIDER

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ANIMATION

  new WOW().init();

//  GALLERY

$('[data-fancybox="gallery"]').fancybox({
  buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
  ],
  loop: false,
  protect: true
  });
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 10,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:2,
          nav:true,
          loop:false
      }
    }
  });
});
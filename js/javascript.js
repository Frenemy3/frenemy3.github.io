
$(document).ready(function(){
  $('.carousel').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png" alt="" /></button>',
    nextArrow:  '<button type="button" class="slick-next"><img src="icons/next.png" alt="" /></button>',
    autoplay:true
  });
  $('.hamburger').on('click' ,  function(){
    $('.hamburger').toggleClass('hamburger_active'),
    $('.nav').toggleClass('nav_active')
  })
});
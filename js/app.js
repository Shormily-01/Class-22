
$(function () {

    $(window).on('scroll', function () {
 
       var scrollSize = $(window).scrollTop()
 
       if (scrollSize > 500) {
          $('#backToTop').css({
             bottom: '40px',
             opacity:1
          });
       } else {
          $('#backToTop').css({
             bottom: '500px',
             opacity:0
          });
       }
    })

    $('.banner_slider').slick({
      prevArrow:false,
      nextArrow:false,
      dots:true,
      dotsClass:'banner_slider_dot',
      speed:500,
    });
 
    $('#backToTop').on('click', function () {
       $('html, body').animate({
          scrollTop:0,
       },1000)
    })
 
 $(window).on('scroll' , function(){
   var scrollSize = $(window).scrollTop()

   if(scrollSize > 65){
      $('#header').addClass('active')
   }
   else {
      $('#header').removeClass('active') 
   }
 })

 $(window).on('load' , function() {
    $('.preloader').fadeOut(800);
 })

//slider section start
$(function(){
   $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
      nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
      autoplaySpeed:500,
      dots:false,
      centerMode:true,
      centerPadding:"0",
   });         
})
//slider section end
//counter up section start
$('.counter').counterUp({
   delay: 10,
   time: 1000
});
//counter up section end

//count down section start
$('.count_down').countdown('2022/12/31', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<div class="count_down_item"><span>%D</span><span>Days</span></div>'
     + '<div class="count_down_item"><span>%H</span><span>Hours</span></div>'
     + '<div class="count_down_item"><span>%M</span><span>Minutes</span></div>'
     + '<div class="count_down_item"><span>%S</span><span>Seconds</span></div>'
     ));
 });
 //count down section end

//typed section start 
   var typed = new Typed('.type_plug', {
   strings: [
      'WEB TEAM...', 
      'GRAPHICS TEAM...' ,
      'DEGITAL MARKETING TEAM...',
      'VIDEO EDITTING TEAM...',
      'MOTION GRAPHICS TEAM...',
   ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
 });
//typed section end

new VenoBox({
   spinner:'grid',
   spinColor:'orange',
   titleattr:'title',
   titlePosition:	'top',
});

 })
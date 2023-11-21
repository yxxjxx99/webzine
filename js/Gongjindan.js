$(function() {
    $('#btn').on('click', function() {                   
        $('.black_bg').toggleClass('on');
     });
     $('#btn').on('click', function() {                   
        $('.main_bg').toggleClass('on');
     });
});

$(function() {
    $('.close_btn').on('click', function() {                   
        $('.black_bg').toggleClass('on');
     });
     $('.close_btn').on('click', function() {                   
        $('.main_bg').toggleClass('on');
     });
});


$(function() {
   $('#mobile_btn').on('click', function() {                   
       $('.black_bg').toggleClass('on');
    });
    $('#mobile_btn').on('click', function() {                   
       $('.main_bg').toggleClass('on');
    });
});

$(function() {
   $('#m_btn').on('click', function() {                   
       $('.black_bg').toggleClass('on');
    });
    $('#m_btn').on('click', function() {                   
       $('.main_bg').toggleClass('on');
    });
});


$(function() {
   $('.more_view').on('click', function() {                   
       $('.more_contents').toggleClass('on');
    });
});
$(function() {
   $('.more_view').on('click', function() {                   
       $('.material-symbols-outlined').toggleClass('on');
    });
});

/* mySwiper */
$(function() {
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      autoplay: {
         delay : 3000, 
      },
   });

   var swiper = new Swiper(".mySwiper2", {
   slidesPerView: 1,
   spaceBetween: 25,
   loop: true,
   autoplay: {
      delay : 3000, 
   },
   });

   var swiper = new Swiper(".mySwiper3", {
   slidesPerView: 1,
   spaceBetween: 25,
   loop: true,
   autoplay: {
      delay : 3000, 
   },
   });

   var swiper = new Swiper(".mySwiper4", {
   slidesPerView: 4,
   spaceBetween: 25,
   loop: true,
   autoplay: {
      delay : 3000, 
   },
   });
   var swiper = new Swiper('.mySwiper4', {
   slidesPerView: 2, 
   spaceBetween: 25,
   breakpoints: {
   810: { 
   slidesPerView: 4, },
   800: { slidesPerView: 2, },
   loop: true,
   autoplay: {
      delay : 3000, 
   },
   }});

   var swiper = new Swiper(".mySwiper5", {
   slidesPerView: 4,
   spaceBetween: 25,
   loop: true,
   autoplay: {
      delay : 3000, 
   },
   });
   var swiper = new Swiper('.mySwiper5', {
   slidesPerView: 2, 
   spaceBetween: 25,
   breakpoints: {
   810: { 
   slidesPerView: 4, },
   800: { slidesPerView: 2, },
   loop: true,
   autoplay: {
      delay : 3000, 
   },
   }});
})

/* sub_page */
$(window).on('scroll',function(){
   if($(window).scrollTop()){
       $('#header').addClass('active');
   }else{
       $('#header').removeClass('active');
   }
});




$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('nav.okscroll').offset().top }, 'slow');
      return false;
    });
    $('nav ul li').click(function(){
        $('li').removeClass('active')
        $(this).addClass("active");
    })
  });
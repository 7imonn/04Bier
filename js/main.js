$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('nav.okscroll').offset().top }, 'slow');
      return false;
    });
    $('nav ul li').click(function(){
        $('li').removeClass('active')
        $(this).addClass("active");
    });
    
    $("#main").load("../home.html");
    $("#Home").click(function(){
        $("#main").load("../home.html");
    });
    $("#Rezepte").click(function(){
        $("#main").load("../rezepte.html");
    });
    $("#Brauen").click(function(){
        $("#main").load("../brauen.html");
    });
    $("#About").click(function(){
        $("#main").load("../about.html");
    });
  });
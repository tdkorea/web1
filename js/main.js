$(function(){

    $('.plusBtn > i').click(function(){
        $('.plusBtn > i').css({'display':'none'});
        $('.plusBtn .toggle').animate({'bottom':'5%'});
    })//.plusBtn

    $('.plusBtn .toggle .close').click(function(){
        $('.plusBtn > i').css({'display':'block'});
        $('.plusBtn .toggle ').animate({'bottom':'-50%'});
    })//.plusBtn

    $('.lazy').lazy();



})//fin.
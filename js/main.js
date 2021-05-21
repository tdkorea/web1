$(function(){

    $('.mobileNav > i').click(function(){
        $('.mobileNav > i').css({'display':'none'});
        $('.mobileNav .toggle').animate({'bottom':'10%'});
    })//.mobileNav

    $('.mobileNav .toggle .close').click(function(){
        $('.mobileNav > i').css({'display':'block'});
        $('.mobileNav .toggle ').animate({'bottom':'-20%'});
    })//.mobileNav



})//fin.
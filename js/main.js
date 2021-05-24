$(function(){

    $('.plusBtn > i').click(function(){
        $('.plusBtn > i').css({'display':'none'});
        $('.plusBtn .toggle').animate({'bottom':'5%'});
    })//.plusBtn

    $('.plusBtn .toggle .close').click(function(){
        $('.plusBtn > i').css({'display':'block'});
        $('.plusBtn .toggle ').animate({'bottom':'-50%'});
    })//.plusBtn

    $('.lazy').lazy();//sec2 lazy

    $('section.sec2 .sec2-flex .item a').hover(
        function(){
            $(this).find('img').attr('data-src',"image/9.jpg").replace('_off','_on')},
        function(){
            $(this).find('img').attr('data-src').replace('_on','_off')}
        );//hover



})//fin.
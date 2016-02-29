$(document).ready(function(){
choosecolour();
var $colour = $('.header').css('background').val();

});



function choosecolour(){

$('.red').click(function(){

    $('.header').css('background','#ff0000');

});

$('.green').click(function(){

    $('.header').css('background','#008000');

});

$('.blue').click(function(){

    $('.header').css('background','#3B88DE');

});

$('.white').click(function(){

    $('.header').css('background','#ffffff');

});

$('.yellow').click(function(){

    $('.header').css('background','#ffd700');

});

}
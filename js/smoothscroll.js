
$('#ban_down').on('click',function(){
	$('html, body').animate({
    scrollTop: $("#about_bloc").offset().top
}, 1500);
}); //first bloc

$('#pro').on('click',function(){
	$('html, body').animate({
    scrollTop: $(".slider").offset().top
}, 1500);
}); //program bloc

$('.slides').on('click',function(){
	$('html, body').animate({
    scrollTop: $("#team_bloc").offset().top
}, 1500);
}); //team bloc



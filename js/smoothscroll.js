$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});// end smooth scroll

$('#ban_down').on('click',function(){
	$('html, body').animate({
    scrollTop: $("#about_bloc").offset().top
}, 2000);
});


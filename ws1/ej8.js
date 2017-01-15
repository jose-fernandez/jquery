var bool= true;
$(document).ready(function(){
	$('.notice1 *').css("font-size", "22px");
	$('.notice2 *').css("font-size", "10px");
	$('.notice3 *').css("font-size", "48px");

//usar toggle

	$("div>h1").on('click', function(){
		$(this).siblings().toggle(2000);
	});


	$('div>h1').mouseenter(function(){
		$(this).css("background-color","blue");
	});

	$('div>h1').mouseleave(function(){
		$(this).css("background-color","white");
	});
});
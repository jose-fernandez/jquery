$(document).ready(function(){
	$('.focus').click(function(){
		$('textarea').focus();
	});
	$('.focusout').click(function(){
		$('textarea').focusout();
	});
});
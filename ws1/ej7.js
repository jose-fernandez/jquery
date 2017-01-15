$(document).ready(function(){
	alert("Página cargada");

	$('button.buttonHeader').click(function(){
		alert($('head').html());
	});
	$('button.buttonBody').click(function(){
		alert($('body').html());
	});

	$('.container>p:first').on("click",function(){
		alert($(this).html());
	});

	$('.container>p:last').on("click",function(){
		$(this).hide(2000);
	});

	$('.lista>li').prepend("#");

	$('.lista>li').on("click",function(){
		$(this).hide(2000);
	});
	$('a').html("enlace");

	$('.table1 tr>td').on("click", function(){
		$(this).css('background-color', 'blue');
	});

	$('.table2 tr>td').on("click", function(){
		$(this).hide(2000);
	});
});
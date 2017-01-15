$(document).ready(function(){
	$('tr:gt(2)>td').css("background-color","blue");
	$('tr:lt(2)>td').css("background-color","red");
});
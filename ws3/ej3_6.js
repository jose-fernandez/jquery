$(document).ready(function(){
	var i=10;
	var cont=0;
	$('p').click(function(){
		if(cont<2){
			i+=4;
			$('p').css('font-size',`${i}px`);
			cont++;
		}else{
			i=10;
			cont=0;
			$('p').css('font-size',`${i}px`);
		}
	});
});
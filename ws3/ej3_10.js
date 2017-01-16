$(document).ready(function () {
	var check;
    $('.password').keyup(function(){
    	if($('.password').val().length < 5){
    		check="No segura";
    	}else if($('.password').val().length >= 5 && 
    		$('.password').val().length < 8){
    		check="Medianamente segura";
    	}else{
    		check="Segura";
    	}
    	$('.check').html(check);
    });
});
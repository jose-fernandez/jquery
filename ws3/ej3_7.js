$(document).ready(function(){

	$('.animated').click(function(){
		$('#div').animate({
    		color: "green",
    		backgroundColor: "brown"
  		}, 1200);
  		$('#div').animate({
    		color: "blue",
    		backgroundColor: "green"
  		}, 1200);
  		$('#div').animate({
    		color: "red",
    		backgroundColor: "blue"
  		}, 1200);
  		$('#div').animate({
    		color: "yellow",
    		backgroundColor: "black"
  		}, 1200);
	});
	$('.nonanimated').click(function(){
		  $('#div').clearQueue();
      $('#div').stop();
	});
});
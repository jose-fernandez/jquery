$(document).ready(function(){
    $("#start").click(function(){
        $("#div1").animate({marginLeft:'0px',backgroundColor: "blue"},1000);
        $("#div1").animate({opacity:0,marginTop:'10px'},1000);
    });
    $('#stop').click(function(){
    	$('#div1').clearQueue();
    	$('#div1').stop();
    });
});
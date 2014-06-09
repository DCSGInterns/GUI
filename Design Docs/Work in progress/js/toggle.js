/*Utilsied pageYOffset and innerHeight  - MUST CHECK TO SEE IF CROSS BROWSER COMPATIBLE*/


var keeper=1;
var keeper_2=1;
var scrolled = 0;
var required = window.innerHeight;
required = required-40;

$('#wrapper_heading_1').click(function () {

	if(keeper==0)
	{
    	$('#wrapper_body_1').slideDown('slow');
		keeper=1;
		$("#toggle_image_1").removeClass('glyphicon glyphicon-chevron-down')
		$("#toggle_image_1").addClass('glyphicon glyphicon-chevron-up')
	}
	else if(keeper==1)
	{
	 $('#wrapper_body_1').slideUp('slow');
	 keeper=0;
	 
	 $("#toggle_image_1").removeClass('glyphicon glyphicon-chevron-up')
	$("#toggle_image_1").addClass('glyphicon glyphicon-chevron-down')
	}
});


$('#wrapper_heading_2').click(function () {
	if(keeper_2==0)
	{
    	$('#wrapper_body_2').slideDown('slow');
		keeper_2=1;
		
		$("#toggle_image_2").removeClass('glyphicon glyphicon-chevron-down')
		$("#toggle_image_2").addClass('glyphicon glyphicon-chevron-up')
		
		if(keeper==1){
		scrolled = window.pageYOffset
		scrolled = scrolled+required;
        $("body").animate({
				        scrollTop:scrolled
				   });
		}
	}
	else if(keeper_2==1)
	{
		$('#wrapper_body_2').slideUp('slow');
		keeper_2=0;
		
		$("#toggle_image_2").removeClass('glyphicon glyphicon-chevron-up')
		$("#toggle_image_2").addClass('glyphicon glyphicon-chevron-down')
	}
});

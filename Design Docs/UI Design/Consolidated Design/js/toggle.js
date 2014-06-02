/*Utilsied pageYOffset and innerHeight  - MUST CHECK TO SEE IF CROSS BROWSER COMPATIBLE*/


var keeper=1;
var keeper_2=1;
var scrolled = 0;
var required = window.innerHeight;


$('#wrapper_heading_1').click(function () {

	if(keeper==0)
	{
    	$('#wrapper_body_1').slideDown('slow');
		keeper=1;
		$("#toggle_image_1").css({
        "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "-ms-transform": "rotate(0deg)"
								});
	}
	else if(keeper==1)
	{
	 $('#wrapper_body_1').slideUp('slow');
	 keeper=0;
	 $("#toggle_image_1").css({
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "-ms-transform": "rotate(180deg)"
    });
	}
});


$('#wrapper_heading_2').click(function () {
	if(keeper_2==0)
	{
    	$('#wrapper_body_2').slideDown('slow');
		keeper_2=1;
		$("#toggle_image_2").css({
       "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "-ms-transform": "rotate(0deg)" 
								})
		scrolled = window.pageYOffset
		scrolled = scrolled+required;
        $("body").animate({
				        scrollTop:scrolled
				   });
	}
	else if(keeper_2==1)
	{
	 $('#wrapper_body_2').slideUp('slow');
	 keeper_2=0;
		$("#toggle_image_2").css({
       "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "-ms-transform": "rotate(180deg)" 
								})
	}
});

var keeper=1;
var keeper_2=1;

$('#toggle_image_1').click(function () {

	if(keeper==0)
	{
    	$('#toggle_1').slideDown('slow');
		keeper=1;
	}
	else if(keeper==1)
	{
	 $('#toggle_1').slideUp('slow');
	 keeper=0;
	}
});

$('#toggle_image_2').click(function () {

		$(this).css({
       "-webkit-transform": "+rotate(180deg)",
        "-moz-transform": "+rotate(180deg)",
        "transform": "+rotate(180deg)" /* For modern browsers(CSS3)  */
    });

	if(keeper_2==0)
	{
    	$('#toggle_2').slideDown('slow');
		keeper_2=1;
	}
	else if(keeper_2==1)
	{
	 $('#toggle_2').slideUp('slow');
	 keeper_2=0;
	}
});

$('img').click(function(){
    
});
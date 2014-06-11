function hvr(id)
{
	//id.style.background-color = 'red';
	id.style.background="lavender";
}

function out(id)
{
	//id.style.background-color = 'red';
	id.style.background="aliceblue";
}

$(document).ready(function(){

  // Custom jQuery code goes here
  //$('#cssmenu > ul > li:has(ul)').addClass("has-sub");
  $('.panel-heading').click(function() {

  var checkElement = $(this).next();

 // $('#cssmenu li').removeClass('active');
//  $(this).closest('li').addClass('active'); 

  if(checkElement.is(':visible')) {
    //$(this).closest('li').removeClass('active');
	$(this).children('#toggle_image').removeClass('glyphicon glyphicon-chevron-up');
	$(this).children('#toggle_image').addClass('glyphicon glyphicon-chevron-down');
    checkElement.slideUp('normal');
  }

  if(!checkElement.is(':visible')) {
	$('#slideable #toggle_image').removeClass('glyphicon glyphicon-chevron-down');
	$('#slideable #toggle_image').removeClass('glyphicon glyphicon-chevron-up');
	$('#slideable #toggle_image').addClass('glyphicon glyphicon-chevron-down');
	$(this).children('#toggle_image').removeClass('glyphicon glyphicon-chevron-down');
	$(this).children('#toggle_image').addClass('glyphicon glyphicon-chevron-up');
	
    $('#slideable #slideable-body').slideUp('normal');
    checkElement.slideDown('normal');
  }

 
});
});

//document.getElementsByClassName("form-group").onmouseover="hvr(this)";
//document.getElementsByClassName("form-group").onmouseout="out(this)";

$(document).ready(function(){

$( ".pstr" ).draggable();


/*$(".text").hide();*/

/*$( "#fancy" ).hover(
  function() {
    $( ".text" ).show();
  }, function() {
    $( ".text" ).hide();
  }
);*/

$('.highlight').click(function() {

	$("img").addClass("grid");
	$( "img" ).draggable();
	$("div").removeClass("highlight");


	});

});
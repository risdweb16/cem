$(document).ready(function(){

	console.log("helloworld")
	/*$(".cursor").hide();

	$(document).on('mousemove', function(e){
		$('#custom-cursor').css({
			left:  e.pageX,
			top:   e.pageY
		});
	});*/


	$(".projects").hide();
	$(".ex").hide();

	$( "#clickpro" ).click(function() {
	$(".projects").show( "highlight", 500 );
	});

	$( "#clickex" ).click(function() {
	$(".ex").show( "highlight", 500 );
	});

});
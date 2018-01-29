$(document).ready(function() {

	//Tecnica para deslizar ao clicar no href :target com coldown de 1s
	var $doc = $("html, body");
	$(".scrollSuave").click(function() {
	    $doc.animate({
	        scrollTop: $( $.attr(this, "href")).offset().top
	    }, 1000);
	    return false;
	});
	
});

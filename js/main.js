$(document).ready(function() {

	//Tecnica para deslizar ao clicar no href :target com coldown de 1s
	var $doc = $("html, body");
	$(".scrollSuave").click(function() {
	    $doc.animate({
	        scrollTop: $( $.attr(this, "href")).offset().top
	    }, 1000);
	    return false;
	});

		/*
			<blockquote class="blockquote">
		  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
		  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
		</blockquote>
		*/
});

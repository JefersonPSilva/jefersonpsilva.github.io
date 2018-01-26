$(document).ready(function() {
	// Tecnica para o menu desligar assim que sair do foco do banner
   	var navMenuFixa = $(".navMenuFixa").offset().top;
   	var menuFixo = function(){
	    var scrollTop = $(window).scrollTop();
	    if (scrollTop > navMenuFixa) {
            $(".navMenuFixa").addClass("navFixa");
	    } else {
            $(".navMenuFixa").removeClass("navFixa");
	    }
	};

	menuFixo();
	// Executar toda vez que usar o scroll
	$(window).scroll(function() {
		menuFixo();
	});

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

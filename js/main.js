$(document).ready(function() {
	//Tecnica para deslizar ao clicar no href :target com coldown de 1s
	var $doc = $("html, body");
	$(".scrollSuave").click(function() {
	    $doc.animate({
	        scrollTop: $( $.attr(this, "href")).offset().top
	    }, 1000);
	    return false;
	});
	
	// Evento drop down área conhecimento, itens especificos
	$("[id^=detail-]").hide();
    $(".toggle").click(function() {
        $input = $( this );
        $target = $("#"+$input.attr("data-toggle"));
        $target.slideToggle();
    });	

	$(".box").on("click", function(){
		$(".box").toggleClass("flipped");
	});
});

// Event flip card área conhecimento
$(function() {
    $("div.flipcard").on("click", function(evt) {
       $(this).toggleClass("flip");
    });
});

//Evento drop down área conhecimentos
$(document).on("click", ".card-title", function(e){
    var $this = $(this);
	if(!$this.hasClass("collapsed")) {
		$this.parents(".card").find(".card-body").slideUp();
		$this.addClass("collapsed");
		$this.find("i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
	} else {
		$this.parents(".card").find(".card-body").slideDown();
		$this.removeClass("collapsed");
		$this.find("i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
	}
});

//Evento drop down área conhecimentos itens internos
$(document).on("click", ".toggle", function(e){
    var $this = $(this);
	if(!$this.hasClass("collapsed")) {
		$this.find("i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
	} else {
		$this.find("i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
	}
});


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

    // Iniciar com todos os data-togle dropdown fechados
    $(".pressionado").addClass("panel-collapsed");
    $(".panel-body").css("display", "none");
    $(".pressionado i").removeClass("glyphicon-chevron-up");
    $(".pressionado i").addClass("glyphicon-chevron-down");
});
	

//Evento drop down área conhecimentos
$(document).on("click", ".panel-heading span.pressionado", function(e){
    var $this = $(this);
	if(!$this.hasClass("panel-collapsed")) {
		$this.parents(".panel").find(".panel-body").slideUp();
		$this.addClass("panel-collapsed");
		$this.find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
	} else {
		$this.parents(".panel").find(".panel-body").slideDown();
		$this.removeClass("panel-collapsed");
		$this.find("i").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
	}
});


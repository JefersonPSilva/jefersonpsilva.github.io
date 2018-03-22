$(document).ready(function() {
	//Tecnica para scroll suave para link interno
	$('.nav a[href^="#"], nav a[href^="#"').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;
				
		$('html, body').animate({ 
			scrollTop: targetOffset - 55
		}, 800);
	});
	
	// Evento drop down área conhecimento, itens especificos
	$("[id^=detail-]").hide();
    $(".toggle").click(function() {
        $input = $( this );
        $target = $("#"+$input.attr("data-toggle"));
        $target.slideToggle();
    });	

    //flip container on click
	$(".flip-container").on("click", function(){
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


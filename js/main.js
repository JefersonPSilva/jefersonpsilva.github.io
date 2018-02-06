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
	$('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
    });

    // Validar form e-mail
    $('#btnenviar').click(function(e){   
        var inNome = $('#txtinputnome'),
        	inEmail = $('#txtinputemail'),
        	inAssunto = $('#txtinputassunto'),
        	inArea = $('#txtinputarea'),
        	btnEnviar = $('#btnenviar');
        
        var emailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var latinformat=/[^a-zA-Z\-\'\ ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏàáâãäåæçèéêëìíîïÐÑÒÓÔÕÖØÙÚÛÜÝÞßðñòóôõöøùúûüýþÿ]/i;
        
        if($inNome.val().length<=2 || latinformat.test($inNome.val())){
            e.preventDefault();
            $('#txtinputnome + span').toggle().html("Informe um nome válido !");
            $inNome.focus();                 
        }else if(!emailformat.test($inEmail.val())){
            e.preventDefault();
            $('#txtinputemail + span').toggle().html("Informe um e-mail válido !");
            $inEmail.focus();                 
        }else if($inAssunto.val().length<=2 || !latinformat.test($inAssunto.val())){
            e.preventDefault();
            $('#txtinputassunto + span').toggle().html("Informe um assunto válido !");
            $inAssunto.focus();                 
        }else if($inArea.val().length<=2 || !latinformat.test($inArea.val())){
            e.preventDefault();
            $('#txtinputarea + span').toggle().html("Informe uma mensagem válida !");
            $inArea.focus();                 
        }
    });
	
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
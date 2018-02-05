$(document).ready(function() {
	//Tecnica para deslizar ao clicar no href :target com coldown de 1s
	var $doc = $("html, body");
	$(".scrollSuave").click(function() {
	    $doc.animate({
	        scrollTop: $( $.attr(this, "href")).offset().top
	    }, 1000);
	    return false;
	});
	

	$('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
    });
	
});

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

$("#eesubmit").click(function() {
	sendMail();
});

var sendMail = function(){
	Email.send("from@jeferson_p.silva@outlook.com",
"to@jeferson_p.silva@outlook.com",
"This is a subject",
"this is the body",
"smtp.elasticemail.com",
"jeferson_p.silva@outlook.com",
"37fc1db2-3db3-4262-ac36-1c0962fb7d66");
}
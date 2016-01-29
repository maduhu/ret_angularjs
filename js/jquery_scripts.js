
// jquery
$(document).ready(function(){

	$('.close').click(function() {
		console.log("close");
		$('.window').fadeOut('slow');
		$(".hexa_grid li").css("opacity", 1);
		
	});

	$('.audio').click(function() {
		$(this).children().css('margin-top', '-80px');
	});
	$('.toggle').click(function(e) {
	  	e.preventDefault();
	    var $this = $(this);
	    if ($this.next().hasClass('show')) {
	        $this.next().removeClass('show');
	        $this.children().removeClass('selected');
	        $this.next().slideUp(350);
	    } else {
	        $this.parent().parent().find('li .inner').removeClass('show');
	        $this.parent().parent().find('li .inner').slideUp(350);
	        $this.next().toggleClass('show');
	        $this.next().slideToggle(350);
	        $this.children().addClass('selected');
	    }
	});
	// accordion referencias

	$('ul.accordion li li .inner').hide();
	var hash = window.location.hash;
	console.log(hash + ' hola');

		if (hash!==null) {
			console.log('no');
			$('ul.accordion '+hash).children().show();
			$("html, body").animate({scrollTop:$(hash).offset().top},500);
		} else {
			console.log('si');
			$('ul.accordion li li .inner:first-child').show();
		};
	
	new WOW().init();

	$('.various').fancybox({
		width		: '80%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'easeIn',
		closeEffect	: 'none',
		mouseWheel	: 'false'
	});
	//fullpage fichas

	 $('#fullpage').fullpage({
	 	anchors: ['Titulo', 'Contexto', 'Mapa','Fichas_relacionadas'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Título', 'Contexto', 'Mapa', 'Fichas relacionadas']
		//scrollBar: true
	});
});
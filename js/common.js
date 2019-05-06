$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});



//Gallery carousel
$(function() {
$(".brand_slider").owlCarousel({
    items:1,
    loop:true,
    dots:true,
   nav:true,
   navText: ""

});
});

$(function() {

	$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
			if ($(".top_mnu").is(":visible")) {
					$(".top_text").css("opacity", "1");
					$(".top_mnu").fadeOut(600);
					$(".top_mnu ul li a").removeClass("fadeInUp animated");
			} else {
					$(".top_text").css("opacity", ".1");
					$(".top_mnu").fadeIn(600);
					$(".top_mnu ul li a").addClass("fadeInUp animated");
			};
	});

});
$(function() {




	$(".btn_rond").click(function() {
			if ($(".message_window").is(":visible")) {
					$(".top_text").css("opacity", "1");
					$(".message_window").fadeOut(600);
					$(".message_window .social").removeClass("fadeInUp animated");
			} else {
					$(".top_text").css("opacity", ".1");
					$(".message_window").fadeIn(600);
					$(".message_window .social").addClass("fadeInUp animated");
			};
	});

});

$('.more').click(function(){
  $(this).prev('.hidden_text').slideToggle();
  if(!$(this).hasClass('trigger')){
    $(this).addClass('trigger');
    $(this).html('Скрыть');
  } else {
    $(this).removeClass('trigger');
     $(this).html('Ещё...');
  }  
});

$('.open_price button').html('Раскрыть прайс полностью');

$('.open_price button').on('click', function(e){
  e.preventDefault();
  
  var
    $this = $(this),
    content = $('.tab_item .table_hide');  
  
  
  if(!$this.hasClass('trigger')){
    $this.addClass('trigger');
    $this.html('Скрыть прайс полностью');
    
    content.slideDown();
  } else {
    $this.removeClass('trigger');
    $this.html('Раскрыть прайс полностью');
    
    content.slideUp();
  }
});






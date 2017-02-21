$(function() {



$(".to-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

$(".navbar-nav").navigation();

});



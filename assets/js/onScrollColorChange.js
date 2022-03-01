$(function() {
	
	$("header").addClass("header-hidden");
	let page = document.body.id;
	
	if (page == "top-page") {
		$(window).scroll(function() {
			if ($(document).scrollTop() > $(window).height() * 0.9) {
				$("header").addClass("fillBg");
			} else {
				$("header").removeClass("fillBg");
			}
		})
	} else {
		$(window).scroll(function() {
			if ($(document).scrollTop() > 300) {
				$("header").addClass("fillBg");
			} else {
				$("header").removeClass("fillBg");
			}
		})
	}
	
	
});
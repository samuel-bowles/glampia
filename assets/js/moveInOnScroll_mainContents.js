$(function() {
		// $('div').on('inview', ...); will trigger the effect only once rather than every time
		$(".fade-mainContents").on("inview", function(event, isInView) {
			if (isInView) {
				$(this).addClass("fade-in");
			} else {
				$(this).removeClass("fade-in");
			}
		});
});

$(function() {
		$( document ).ready(function() {
			$(".fade").addClass("fade-hide");
		})
		
		$(".fade").one("inview", function(event, isInView) {
			if (isInView) {
				var mfThis = $(this);
				mfThis.addClass("fade-in");
				setTimeout(function(){
					 mfThis.removeClass("fade-hide fade-in");
				}, 1100 );
			}
		});
});

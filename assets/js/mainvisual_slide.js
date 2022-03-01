$(function(){
	var count = $("#main-visual-slider li").length;
	var current = 1;
	var next = 2;
	var interval = 10000;
	var duration = 3000;
	var timer;
	
	$("#main-visual-slider li:not(:first-child)").hide();
	
	timer = setInterval(slideTimer,interval);
	
	function slideTimer(){
		$("#main-visual-slider li:nth-child(" + current + ")").fadeOut(duration);
		$("#main-visual-slider li:nth-child(" + next + ")").fadeIn(duration);
		current = next;
		next = ++next;
		
		if (next > count) {
			next = 1;
		}
		
		$("#main-visual-button li a").removeClass("target");
		
		$("#main-visual-button li:nth-child(" + current + ") a").addClass("target");
	}
	
	$("#main-visual-button li a").click(function(){
		next = $(this).html();
		
		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		slideTimer();
		
		return false;
	});
});





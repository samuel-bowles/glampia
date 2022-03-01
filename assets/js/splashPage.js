$(document).ready(function() {
	
	function loadDb() { 
        return JSON.parse(localStorage.getItem('splashCount'));
    };

    function populateStorage(sC) {
        localStorage.setItem('splashCount', JSON.stringify(sC));
    };
	
	let splashCount = loadDb() ? loadDb() : 0;
	splashCount += 1;
	
	if (splashCount == 1) {
		$("header").addClass("header-hidden");
		$("header").append("<div class='splash'></div>");
		$(".wrapper").css({"opacity": 1});
		$(".splash-logo").css({"z-index": 99});
		$(".splash-logo").fadeTo(2000, 1).fadeTo(500, 0, function() {
			$(".splash-logo").css({"opacity": 1, "z-index": 1, "postition": "relative"});
			$(".splash").fadeOut(500);
		})
		populateStorage(splashCount);
	} else if (splashCount == 5) {
		splashCount = 0;
		populateStorage(splashCount);
	} else {
		populateStorage(splashCount);
	}
	
});




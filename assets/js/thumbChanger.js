$( window ).on("load", function() { 

	let thumbs = document.querySelectorAll(".small-image");
	thumbs.forEach(function(element) {
		element.addEventListener("click", function(event) {
			let clickedElemId = event.target.id.slice(-1);
			let classesList = event.target.className.split(" ");
			let bigPic;
			
			function changeSource(newId, bigPicElem) {
				let newSrc = bigPicElem.src.slice(0, -5) + clickedElemId + ".jpg";
				bigPicElem.src = newSrc;
			}

			if ( classesList.includes("lsv-small") ) {
				bigPic = document.querySelector("#lsv-big");
			} else if ( classesList.includes("estt-small") ) {
				bigPic = document.querySelector("#estt-big");
			} else if ( classesList.includes("msv-small") ) {
				bigPic = document.querySelector("#msv-big");
			} else if ( classesList.includes("esct-small") ) {
				bigPic = document.querySelector("#esct-big");
			} else {
				return false;
			}
			
			changeSource(clickedElemId, bigPic);
		})
	})
	
});
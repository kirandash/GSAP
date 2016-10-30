$(document).ready(function(){
	startTween();
});

function startTween(){
	// time in sec not millisec
	// ask tweenlite to move toolBox by 2sec in horizontal direction by 50pixels
	TweenLite.to($('#toolBox'), 1, {x: 200, y: 225, scale: 1.5});

	TweenLite.to($('.asapReg'), 1, {color: "#ff0000", fontSize: "+=75"});

	// fontSize: "+=150" += for relative adding - better than % add - also note that css properties are camelcase
}

/*document.addEventListener("DOMContentLoaded", function(){
	alert('pure js ready');
});*/
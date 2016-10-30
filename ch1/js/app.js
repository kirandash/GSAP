$(document).ready(function(){
	startTween();
});

function startTween(){
	// time in sec not millisec
	// ask tweenlite to move toolBox by 2sec in horizontal direction by 50pixels
	TweenLite.to($('#toolBox'), 1, {x: 200, y: 225});
}

/*document.addEventListener("DOMContentLoaded", function(){
	alert('pure js ready');
});*/
$(document).ready(function(){
	startTween();
});

function startTween(){
	// time in sec not millisec
	// ask tweenlite to move toolBox by 2sec in horizontal direction by 50pixels (from current location)
	TweenLite.to($('#toolBox'), 1, {x: 290, y: 225, scale: 1.5, onComplete: returnToNormal, onCompleteParams: [$('#toolBox')]});

	TweenLite.to($('.asapReg'), 1, {color: "#ff0000", fontSize: "+=75", onComplete: returnTextToNormal});

	// fontSize: "+=150" += for relative adding - better than % add - also note that css properties are camelcase
}

function returnToNormal(obj){
	if(obj){
		TweenLite.to(obj, 1, {x: 0, y: 0, scale: 1});	
	}
}

function returnTextToNormal(){
	TweenLite.to($('.asapReg'), 1, {color: "#fff", fontSize: "-=75"});
}

/*document.addEventListener("DOMContentLoaded", function(){
	alert('pure js ready');
});*/
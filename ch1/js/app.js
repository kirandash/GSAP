$(document).ready(function(){
	startTween();
});

function startTween(){
	d = 1;
	// time in sec not millisec
	// ask tweenlite to move toolBox by 2sec in horizontal direction by 50pixels (from current location)
	TweenLite.to($('#toolBox'), 1, {delay: d,x: 290, y: 225, scale: 1.5, onComplete: returnToNormal, onCompleteParams: [$('#toolBox')]});

	TweenLite.to($('.asapReg'), 1, {delay: (d+.5),color: "#ff0000", fontSize: "+=75", onComplete: returnTextToNormal, onCompleteParams: [d]});

	// fontSize: "+=150" += for relative adding - better than % add - also note that css properties are camelcase
}

function returnToNormal(obj){
	if(obj){
		TweenLite.to(obj, 1, {x: 0, y: 0, scale: 1});	
	}
}

function returnTextToNormal(delay){
	TweenLite.to($('.asapReg'), 1, {delay: delay, color: "#fff", fontSize: "-=75"});
}

/*document.addEventListener("DOMContentLoaded", function(){
	alert('pure js ready');
});*/
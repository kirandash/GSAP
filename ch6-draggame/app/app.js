var titleText = new SplitText(".title"),
	tl = new TimelineLite(),
	numWords = titleText.chars.length,
	gameContainer = $(".gameBoard"),
	dropTargets = $(".target"), // array of targets
	totalTargets = 6, // or dropTargets.length
	totalHit = 0; // total hits to target - game is over when totalHit == totalTargets

function initTitle(){
	for(var i=0; i<numWords; i++){
		tl.from(titleText.chars[i], .5, {
			force3D: true, // forces the GPU to process the information a bit later
			opacity: 0,
			x: -500,
			transformOrigin: "0 50%",
			ease: Back.easeOut
		}, Math.random());
	}
}

initTitle();
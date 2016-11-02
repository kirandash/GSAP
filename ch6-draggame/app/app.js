// Set Properties
TweenMax.set(".image", {scale: 0, opacity: 0});
TweenMax.set(".title", {perspective: 400, textShadow: "2px 2px 15px rgba(0,0,0,.6)"});
// TweenMax.set(".instruction", {textShadow: "2px 2px 15px rgba(0,0,0,.6)"});

var titleText = new SplitText(".title"),
	tl = new TimelineLite({onComplete: loadGameBoard}),
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

function loadGameBoard() {
	TweenMax.staggerTo(".image", 0.2, {opacity: 1, scale: 1, ease: Back.easeOut, force3D: true}, 0.1, initDraggableItem)
	// 0.2s - duration between two stagger and 0.1s for individual stagger
}

function initDraggableItem() {
	Draggable.create(".dragItem", {
		bounds: gameContainer,
		edgeResistance: .65,
		onPress: function(){
			console.log("Pressed");
		},
		onDragEnd: function(){
			console.log("drag end");
		}
	})
}

initTitle();
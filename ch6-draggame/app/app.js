// Set Properties
TweenMax.set(".image", {scale: 0, opacity: 0});
TweenMax.set(".title", {perspective: 400, textShadow: "2px 2px 15px rgba(0,0,0,.6)"});
// TweenMax.set(".instruction", {textShadow: "2px 2px 15px rgba(0,0,0,.6)"});
TweenMax.set(".tryAgain", {scale: 0});

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
			// take current x and y value and store them in current dragging instance
			this.startX = this.x;
			this.startY = this.y;
			this.offsetTop = this.startY - $(this.target).position().top;
			// $(this.target).position().top - position within it's parent this.startY - current position / dragging instance
			this.offsetLeft = this.startX - $(this.target).position().left;
		},
		onDragEnd: function(){
			var dragThing = this; // To avoid conflict between jquery this and drag instance this
			var dragID = this.target.id + "Drop";

			// Loop through each targets and check if drag matches anything
			$.each(dropTargets, function(idx, spot){
				// idx - index, spot: drop target
				var spotID = spot.id;
				// get position of spot
				var pos = $(spot).position();
				// top difference - where the dragthing top is and where the spot top is
				var diffTop = dragThing.offsetTop + pos.top;
				var diffLeft = dragThing.offsetLeft + pos.left;

				if(spotID == dragID){

					// hit test
					if(dragThing.hitTest(spot, "10%")) {
						TweenMax.to(".correct", .3, {scale: 2, autoAlpha: 1, onComplete: function(){
							// Hide tryagain message after .2s
							TweenMax.to(".correct", .2, {scale:0, autoAlpha: 0, delay: .5});
						}});
						// if our through hits the 10% of spot
						TweenMax.to(dragThing.target, .5, {x: diffLeft, y: diffTop, onComplete: hideMatches, onCompleteParams: [dragThing, spot] });
					}else{
						TweenMax.to(".tryAgain", .3, {scale: 2, autoAlpha: 1, onComplete: function(){
							// Hide tryagain message after .2s
							TweenMax.to(".tryAgain", .2, {scale:0, autoAlpha: 0, delay: .5});
						}});
						TweenMax.to(dragThing.target, .5, {x: dragThing.startX, y: dragThing.startY});
						// at the end of drag return back to starting position
					}
				}
			});
			
		}
	})
}

function hideMatches(dragItem, targetItem) {
	totalHit++; // Increase the total number of hits
	TweenMax.to([dragItem.target, targetItem], .5, {autoAlpha: 0, onComplete: checkTargetCount});
}

function checkTargetCount() {
	if(totalHit == totalTargets){
		TweenLite.to(".modal", .3, {autoAlpha: 1});
	}
}

initTitle();
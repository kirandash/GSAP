$(document).ready(function(){
    init();
});


function init(){
	// New instance of TimelineLite
	var toolTimeline = new TimelineLite();
	// Add tween sequence to the timeline
	toolTimeline.add(TweenLite.to('#toolBox', 1, {y: -100}));
	toolTimeline.add(TweenLite.to('#weightLifter', 1, {y: -100}));
}
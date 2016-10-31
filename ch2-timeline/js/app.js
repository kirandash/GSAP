$(document).ready(function(){
    init();
});


function init(){
	// New instance of TimelineLite
	var toolTimeline = new TimelineMax();
	// paused: true in the timeline constructor makes sure that the timeline is paused in the beginning
	var duration = .5;
	// Add tween sequence to the timeline
	toolTimeline.to('#toolBox', duration, {y: -100, ease: Linear.easeInOut});
	toolTimeline.to('#weightLifter', duration, {y: -100, ease: Bounce.easeInOut});
	toolTimeline.to('#crazy', duration, {y: -100, ease: Elastic.easeInOut});
	toolTimeline.to('#leaf', duration, {y: -100, ease: Back.easeInOut});
}
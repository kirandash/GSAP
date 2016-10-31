$(document).ready(function(){
    init();
});


function init(){
	// New instance of TimelineLite
	var toolTimeline = new TimelineMax();
	var duration = .5;
	// Add tween sequence to the timeline
	toolTimeline.from('.mainTitle', duration, {opacity: 0, scale: 25, ease: Linear.easeInOut});
	
	toolTimeline.from('.title', duration, {opacity: 0, scale: 25, ease: Linear.easeInOut}, .2);
	// Instead of delay an additional argument can be passed as time delay
	/*toolTimeline.to('#crazy', duration, {y: -100, ease: Elastic.easeInOut});
	toolTimeline.to('#leaf', duration, {y: -100, ease: Back.easeInOut});*/
}
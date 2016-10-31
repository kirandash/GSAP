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
	toolTimeline.to('.superman img', duration, {left: 0, ease: Back.easeInOut});

	toolTimeline.from('.superman img', duration, {skewX: "20deg", ease: Back.easeInOut}, .9);

	toolTimeline.to('.mainTitle', duration, {right: -50, ease: Back.easeInOut}, .7);

	// An array
	toolTimeline.staggerTo('.tool', duration, {top: 150, ease: Back.easeInOut}, .2, .7);
	// it will take .7s of whole animation but .2s between each animation
}
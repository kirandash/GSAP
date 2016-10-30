$(document).ready(function(){
    init();
});


function init(){
	// New instance of TimelineLite
	var toolTimeline = new TimelineLite({paused: true});
	// paused: true in the timeline constructor makes sure that the timeline is paused in the beginning
	var duration = .5;
	// Add tween sequence to the timeline
	toolTimeline.add(TweenLite.to('#toolBox', duration, {y: -100, ease: Linear.easeInOut}));
	toolTimeline.add(TweenLite.to('#weightLifter', duration, {y: -100, ease: Bounce.easeInOut}));
	toolTimeline.add(TweenLite.to('#crazy', duration, {y: -100, ease: Elastic.easeInOut}));
	toolTimeline.add(TweenLite.to('#leaf', duration, {y: -100, ease: Back.easeInOut}));

	$('#start').click(function(){
		toolTimeline.play();
	});

	$('#pause').click(function(){
		toolTimeline.pause();
	});

	$('#stop').click(function(){
		toolTimeline.stop();
	});

	$('#reverse').click(function(){
		toolTimeline.reverse();
	});	
}
function initProject (){
	var gridContainer = $(".gridContainer");

	// Applying a dragging instance on top of everything with .moveAble class
	Draggable.create(".moveAble", {
		bounds: gridContainer,
		edgeResistance: .65
	})
}

$(document).ready(function(){
	initProject();
});
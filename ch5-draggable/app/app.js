function initProject (){
	var gridContainer = $(".gridContainer");

	// Applying a dragging instance on top of everything with .moveAble class
	Draggable.create(".moveAble", {
		bounds: gridContainer,
		edgeResistance: 1,
		dragResistance: .75,
		cursor: "pointer",
		type: "X"
		// edgeResistance 0 to 1 - 1 can't move outside at all
		// dragResistance 0 to 1 - 1 can't drag at all
	})
}

$(document).ready(function(){
	initProject();
});
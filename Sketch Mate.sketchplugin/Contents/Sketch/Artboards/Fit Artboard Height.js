// Resizes the height of the artboard to fit all its layers

// Sort function, descending
function sortBottom(a, b) {
	return b.bottom - a.bottom;
}

var onRun = function (context) {

    // old school variable
    var doc = context.document;
    var selection = context.selection;
		var artboards = [doc.currentPage().currentArtboard()];

    for (var i = 0; i < selection.count(); i++) {
        if (selection.objectAtIndex(i).className() == "MSArtboardGroup") {
            artboards.push(selection.objectAtIndex(i));
        }
    }

		for (var i = 0; i < artboards.length; i++) {
			fitArtboard(artboards[i]);
		}
}

function fitArtboard(artboard) {
	// Store some meta data about all layers and their respective bottom position
	var meta = [];
	var layers = artboard.children();

	// Loop through all children of the artboard
	for (var j = 0; j < layers.count(); j++) {

			// Remember the current layer
			var layer = layers[j];

			if (layer !== undefined && layer.className() != "MSArtboardGroup" && layer.isVisible() == true) {

					// Calculate the bottom edge position
					var bottom = layer.frame().y() + layer.frame().height();
					meta.push({
							layer: layer,
							bottom: bottom
					});
			}
	}

	// Sort the layers by bottom position, descending
	meta.sort(sortBottom);

	// Finally set the height of the artboard
	artboard.frame().setHeight(meta[0].bottom)
}

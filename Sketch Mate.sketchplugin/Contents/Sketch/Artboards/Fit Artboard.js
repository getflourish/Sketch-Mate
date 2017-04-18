// Resizes the artboard to fit all its layers

// Sort function, descending
function sortBottom(a, b) {
	return b.bottom - a.bottom;
}

// Sort function, descending
function sortRight(a, b) {
	return b.right - a.right;
}


var onRun = function (context) {

    // old school variable
    var doc = context.document;
    var selection = context.selection;

    // Get the current artboard
    artboard = doc.currentPage().currentArtboard();

    // Store some meta data about all layers and their respective bottom position
    var meta = [];
    var layers = artboard.children();

    // Loop through all children of the artboard
    for (var i = 0; i < layers.count(); i++) {

        // Remember the current layer
        var layer = layers[i];

        if (layer !== undefined && layer.className() != "MSArtboardGroup" && layer.isVisible() == true) {

            // Calculate the bottom edge position
            var bottom = layer.frame().y() + layer.frame().height();
            var right = layer.frame().x() + layer.frame().width();
            meta.push({
                layer: layer,
                bottom: bottom,
                right: right
            });
        }
    }

    // Sort the layers by bottom position, descending
    meta.sort(sortBottom);

    // Finally set the height of the artboard
    artboard.frame().setHeight(meta[0].bottom);

    // Sort the layers by right edge, descending
    meta.sort(sortRight);

    // Finally set the width of the artboard
    artboard.frame().setWidth(meta[0].right);


}

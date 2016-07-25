// (shift cmd option ←)

/**
 * This plugin pulls every layer next to the current layer by 10 pixels.
 */


var onRun = function (context) {

    // old school variable
    var doc = context.document;
    var selection = context.selection;


    // the selection
    var selected = selection[0];

    // get the parent group, or if it is an artboard, use the selected layer
    var parent = selected.parentGroup();

    // top edge
    var rightEdge = selected.frame().x() + selected.frame().width();

    var layersToBeMoved = [];
    var shift = true;

    // storage
    var persistent = [[NSThread mainThread] threadDictionary];

    // offset
    var offset;

    if (persistent["com.getflourish.increments"] == null) {
        var value = parseFloat([doc askForUserInput:"Increments:" initialValue:10]);
        persistent["com.getflourish.increments"] = value;
    }

    offset = persistent["com.getflourish.increments"];

    // loop through all layers on the same level as the parent group
    var layers = parent.layers().objectEnumerator();
    while (layer = layers.nextObject()) {
        if (layer != parent && selected != layer.parentGroup()) {

            // get the top position of the current layer
            currentLeft = layer.frame().x();

            // push all layers below the selected one down
            if (currentLeft > rightEdge + offset) {

                // add the layer to the potentially shifted layers
                layersToBeMoved.push(layer);

            } else if(currentLeft > rightEdge) {

                // if layer is in offset distance, shift it to the bottom edge
                offset = currentLeft - rightEdge;
                layer.frame().setX(rightEdge);

            } else if (currentLeft == rightEdge) {

                // if there is a layer at the bottom edge, there will be not shift
                layersToBeMoved = [];
                shift = false;
            }
        }
    }


    // only shift layers if the shift variable is set to true

    if (shift == true) shiftLayers(layersToBeMoved);
    
    function shiftLayers(layersToBeMoved) {
        var layer = null;

        for (var i = 0; i < layersToBeMoved.length; i++) {
            layer = layersToBeMoved[i];
            layer.frame().setX(layer.frame().x() - offset);
        }

        doc.showMessage("Pulled by " + persistent["com.getflourish.increments"] + "px");
    }
}


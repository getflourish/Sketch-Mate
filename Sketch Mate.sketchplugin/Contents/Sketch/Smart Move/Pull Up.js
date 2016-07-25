// (shift cmd option ↑)

/**
 * This plugin pulls every layer below the current layer up by 10 pixels.
 */

var onRun = function (context) {

    var doc = context.document;
    var selection = context.selection;

    var selected = selection[0];

    // get the parent group, or if it is an artboard, use the selected layer
    var parent = selected.parentGroup();

    // top edge
    var bottomEdge = selected.frame().y() + selected.frame().height();

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
        	currentTop = layer.frame().y();

        	// push all layers below the selected one down
        	if (currentTop > bottomEdge + offset) {

        		// add the layer to the potentially shifted layers
        		layersToBeMoved.push(layer);

        	} else if(currentTop > bottomEdge) {

        		// if layer is in offset distance, shift it to the bottom edge
        		offset = currentTop - bottomEdge;
        		layer.frame().setY(bottomEdge);

        	} else if (currentTop == bottomEdge) {

        		// if there is a layer at the bottom edge, there will be not shift
        		layersToBeMoved = [];
        		shift = false;
        	}
        }
    }


    // only shift layers if the shift variable is set to true

    if (shift == true) {
        shiftLayers(offset);
    } else {
        var task = NSTask.alloc().init();
        task.setLaunchPath("/usr/bin/afplay");

        task.setArguments(["/Users/florians/Library/Containers/com.bohemiancoding.sketch3.beta/Data/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/tap-hollow.aif"]);
        task.launch();
    }

    function shiftLayers(offset) {
        var layer = null;

        for (var i = 0; i < layersToBeMoved.length; i++) {
            layer = layersToBeMoved[i];
            layer.frame().setY(layer.frame().y() - offset);
        }

        doc.showMessage("Pulled by " + persistent["com.getflourish.increments"] + "px");
    }
}
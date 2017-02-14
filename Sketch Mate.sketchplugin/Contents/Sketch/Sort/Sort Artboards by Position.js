/**
 * This plugin sorts selected artboards in the layer list by their left position.
 *
 * Florian Schulz Copyright 2014, MIT License
 */


@import '../inventory.js'


var doc;
var selection;

// sorts two objects by their left property
function sortLeft(a,b) {
    return a.left - b.left;
}

// sorts two objects by their vertical, then horizontal position
function sortTopLeft(a,b) {
    var topDiff = a.top - b.top;
    if (topDiff != 0) { return topDiff; }
    return a.left - b.left;
}


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // at least two artboards need to be selected
    if (selection.count() > 1 && selection[0].className() == "MSArtboardGroup") {
        var layersMeta = [];

        for (var i = 0; i < selection.count(); i++) {
            var layer = selection[i];
            var left = layer.frame().x();
            var top = layer.frame().y();
            layersMeta.push({
                layer: layer,
                left: left,
                top: top
            });
        }

        // sort artboards by their top-left corner position
        layersMeta.sort(sortTopLeft);

        // convert the array of meta objects to a flat array of artboard layers
        var layersMetaArray = [];

        for (var i = 0; i < layersMeta.length; i++) {
            layersMetaArray.push(layersMeta[i].layer);
        }

        // sort layer list
        com.getflourish.layers.sortIndices(layersMetaArray);

    } else {
        doc.showMessage("Please select at least two artboards.")
    }


}

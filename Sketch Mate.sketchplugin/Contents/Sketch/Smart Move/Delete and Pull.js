// (cmd ⌫)

/**
 * This plugin deletes the selected layer and pulls all layers below up
 */

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;


    // the selection
    var selected = selection[0];

    // get the parent group, or if it is an artboard, use the selected layer
    var parent = selected.parentGroup();


    // top edge
    var bottomEdge = selected.frame().y() + selected.frame().height();

    var layersToBeMoved = [];
    var shift = true;

    // top positions
    var topPositions = [];

    // Get layers below

    // set the scope to the layer group that the currently selected layer is in
    var scope = selected.parentGroup().layers().array();

    // calculate the bottom position of the selected layer
    var bottom = selected.absoluteRect().y() + selected.absoluteRect().height();

    // set up the predicate and receive an array of matched layers
    var predicate = NSPredicate.predicateWithFormat("absoluteRect.y >= %@", bottom);
    var queryResult = scope.filteredArrayUsingPredicate(predicate);

    var offset = getOffset(queryResult, selected.frame().height(), bottomEdge);

    // Remove layer
    parent.removeLayer(selected);

    // select all layers that match the query
    doc.currentPage().selectLayers(queryResult);

    for (var i = 0; i < queryResult.count(); i++) {
        var frame = queryResult.objectAtIndex(i).frame();
        frame.setY(frame.y() - offset);
    }



    // Sorts numbers. By default, sort would handle numbers as strings and thus not sort them as intended.
    function sortNumber(a,b) {
        return a - b;
    }

    function getOffset (queryResult, offset, bottomEdge) {
        var currentTop;

        // loop through all layers on the same level as the parent group
        var layers = queryResult.objectEnumerator();
        while (layer = layers.nextObject()) {

            // get the top position of the current layer
            currentTop = layer.frame().y();
            log(currentTop)

            // push all layers below the selected one down
            if (currentTop > bottomEdge) {

                // add the layer to the potentially shifted layers
                topPositions.push(parseInt(layer.frame().y()));
            }
        }

        topPositions.sort(sortNumber);

        log(topPositions)

        // add the margin between the selected and the nearest layer
        offset += topPositions[0] - bottomEdge;

        return offset;
    }
}
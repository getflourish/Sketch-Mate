// Selects the current artboard if a layer was selected,
// or selects all artboards if an artboard was selected

@import '../inventory.js'

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;


    var sel = selection[0];
    if (String(sel.className()) == "MSArtboardGroup") {
        log("yo artboard")
        var page = [doc currentPage],
            artboards = [page artboards]

        [page deselectAllLayers]

        var bottom;
        var loop = [artboards objectEnumerator]
        while (artboard = loop.nextObject()) {
            bottom = sel.frame().y() + sel.frame().height();
            if (artboard.frame().y() >= sel.frame().y() && artboard.frame().y() < bottom) {
                [artboard select:true byExpandingSelection:true]
            }
        }

        // collapse artboards
        com.getflourish.utils.sendAction("collapseGroupsInLayerList:");
    } else {
        [[doc currentPage] deselectAllLayers];
        [[[doc currentPage] currentArtboard] select:true byExpandingSelection:true]
    }

    if (selection.count() > 1 && [sel className] == "MSArtboardGroup") {
        com.getflourish.layers.select(doc.currentPage().artboards());

        // collapse artboards
        com.getflourish.utils.sendAction("collapseGroupsInLayerList:");
    }
}
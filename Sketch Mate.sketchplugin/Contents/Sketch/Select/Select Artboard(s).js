// Selects the current artboard if a layer was selected,
// or selects all artboards if an artboard was selected

@import '../inventory.js'

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;
    var sel = selection[0];
    var page = [doc currentPage],
        artboards = [page artboards]

    if (String(sel.className()) == "MSArtboardGroup") {

        deselectAllLayers(page);

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
        deselectAllLayers(page)
        page.changeSelectionBySelectingLayers_([page.currentArtboard()]);
    }

    if (selection.count() > 1 && [sel className] == "MSArtboardGroup") {
        doc.currentPage().changeSelectionBySelectingLayers_(artboards);

        // collapse artboards
        com.getflourish.utils.sendAction("collapseGroupsInLayerList:");
    }
}


function deselectAllLayers (page) {
    if (page.deselectAllLayers) {
        page.deselectAllLayers();
    } else {
        page.changeSelectionBySelectingLayers_([]);
    }
}

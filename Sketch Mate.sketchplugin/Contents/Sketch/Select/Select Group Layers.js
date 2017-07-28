// This plugin selects all layers of a layer group


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    var page = doc.currentPage();

    if (selection.count() == 1) {
        if (selection[0].className() == "MSLayerGroup") {
            var group = selection[0];

            deselectAllLayers(page);

            page.changeSelectionBySelectingLayers_(group.layers());
        }
    } else {
        doc.showMessage("Please select a layer group");
    }
}

function deselectAllLayers (page) {
    if (page.deselectAllLayers) {
        page.deselectAllLayers();
    } else {
        page.changeSelectionBySelectingLayers_([]);
    }
}

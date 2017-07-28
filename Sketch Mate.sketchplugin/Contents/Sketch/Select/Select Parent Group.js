// Selects the parent group of a layer

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;
    var page = doc.currentPage();

    if (selection.count() > 0) {
        var parent = selection[0].parentGroup();
        if (parent.className() != "MSPage") {
            deselectAllLayers(page)
            page.changeSelectionBySelectingLayers_([parent]);
        }
    } else {
        doc.showMessage("Please select a layer.");
    }
}


function deselectAllLayers (page) {
    if (page.deselectAllLayers) {
        page.deselectAllLayers();
    } else {
        page.changeSelectionBySelectingLayers_([]);
    }
}

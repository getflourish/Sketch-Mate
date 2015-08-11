// Selects the parent group of a layer

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    if (selection.count() > 0) {
        var parent = selection[0].parentGroup();
        if (parent.className() != "MSPage") {
            doc.currentPage().deselectAllLayers();
            parent.setIsSelected(true)
        }
    } else {
        doc.showMessage("Please select a layer.");
    }
}

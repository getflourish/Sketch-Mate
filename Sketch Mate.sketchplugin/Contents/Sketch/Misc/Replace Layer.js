@import '../inventory.js'

// Replaces the selection with the clipboard contents
// Calls paste in place and removes the selected layer
var doc;

var onRun = function (context) {

    // old school variable
    doc = context.document;
    var selection = context.selection;

    // Make sure a layer is selected

    var selectedLayers = selection;

    if (selectedLayers.count() > 0) {
        doc.currentPage().deselectAllLayers();

        for (var i = 0; i < selectedLayers.count(); i++) {
            // Remember the selected layer
            var selectedLayer = selectedLayers[i];
            selectedLayer.setIsSelected(true);

            // Paste in Place
            com.getflourish.utils.sendPasteOverSelection();

            // Select the original layer
            doc.currentPage().deselectAllLayers();

            // Select again
            selectedLayer.setIsSelected(true);

            // Remove
            com.getflourish.utils.sendDelete();
        }
        com.getflourish.layers.select(selectedLayers);
    } else {
        doc.showMessage("Please select a layer.");
    }
}
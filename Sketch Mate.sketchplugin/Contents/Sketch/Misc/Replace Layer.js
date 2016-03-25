@import '../inventory.js'

// Replaces the selection with the clipboard contents
// Calls paste in place and removes the selected layer
var doc;
var diff;
var selectedLayers;
var reference;


var onRun = function (context) {

    // old school variable
    doc = context.document;
    var selection = context.selection;

    // Make sure a layer is selected

    selectedLayers = selection;

    var before = doc.currentPage().children();

    var newLayers;

    if (selectedLayers.count() > 0) {
        doc.currentPage().deselectAllLayers();

        for (var i = 0; i < selectedLayers.count(); i++) {
            // Remember the selected layer
            var selectedLayer = selectedLayers[i];
            selectedLayer.setIsSelected(true);

            // Paste in Place
            com.getflourish.utils.sendPasteOverSelection();

            reference = context.document.findSelectedLayers()[0];

            // Select the original layer
            doc.currentPage().deselectAllLayers();

            // Select again
            selectedLayer.setIsSelected(true);

            // Remove
            com.getflourish.utils.sendDelete();
        }

        // HACK to restore the selection;
        // problem: selection won’t show in inspector and will be lost on click.

        coscript.setShouldKeepAround(true)
        coscript.scheduleWithInterval_jsFunction(0.1, function (int) {

            var after = doc.currentPage().children();

            var arrayOneCopy = [NSMutableArray arrayWithArray:after];
            [arrayOneCopy removeObjectsInArray:before];

            diff = arrayOneCopy

            restoreSelection(diff);
        });


    } else {
        doc.showMessage("Please select a layer.");
    }
}


function restoreSelection () {

    for (var i = 0; i < diff.count(); i++) {
        if (diff.objectAtIndex(i).name() == reference.name()) {
            diff.objectAtIndex(i).setIsSelected(true)
       }
    }
    NSApp.delegate().refreshCurrentDocument()

}
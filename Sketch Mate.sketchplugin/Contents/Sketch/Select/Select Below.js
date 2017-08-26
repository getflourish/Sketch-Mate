@import "library.cocoascript";

var onRun = function(context) {

  var doc = context.document;
  var selection = context.selection[0];
  var page = doc.currentPage();

  // set the scope to the layer group that the currently selected layer is in
  var scope = selection.parentGroup().layers();

  // calculate the bottom position of the selected layer
  var bottom = selection.absoluteRect().y() + selection.absoluteRect().height();

  // set up the predicate and receive an array of matched layers
  var predicate = NSPredicate.predicateWithFormat("absoluteRect.y >= %@", bottom);
  var queryResult = scope.filteredArrayUsingPredicate(predicate);

  // code below contains code from Ashung Hung, Ashung.hung@gmail.com

  // Deselect all layers
  if (page.deselectAllLayers) {
      page.deselectAllLayers();
  } else {
      page.changeSelectionBySelectingLayers(nil);
  }

  var loop = queryResult.objectEnumerator();
  var layer;
  while (layer = loop.nextObject()) {
      if (layer.parentGroup().class() != "MSPage") {
          // Fix Sketch 45
          if (MSApplicationMetadata.metadata().appVersion < 45) {
              layer.select_byExpandingSelection(true, true);
          } else {
              layer.select_byExtendingSelection(true, true);
          }
      }
  }
};

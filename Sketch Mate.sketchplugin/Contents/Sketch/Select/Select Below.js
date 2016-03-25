@import "library.cocoascript";

var onRun = function(context) {

  var doc = context.document;
  var selection = context.selection[0];

  // set the scope to the layer group that the currently selected layer is in
  var scope = selection.parentGroup().layers().array();

  // calculate the bottom position of the selected layer
  var bottom = selection.absoluteRect().y() + selection.absoluteRect().height();

  // set up the predicate and receive an array of matched layers
  var predicate = NSPredicate.predicateWithFormat("absoluteRect.y >= %@", bottom);
  var queryResult = scope.filteredArrayUsingPredicate(predicate);

  // select all layers that match the query
  doc.currentPage().selectLayers(queryResult);
};
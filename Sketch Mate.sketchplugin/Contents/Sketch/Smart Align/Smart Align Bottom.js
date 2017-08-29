// Aligns layers to their parent group’s bottom edge (control cmd ↓)

@import '../inventory.js'


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    // action

    if (selection.count() == 1) {

    	// remember layer
    	var layer = selection[0];

    	// get the layers height
    	var height = layer.frame().height();

    	// get layers bottom coordinate
    	var bottom = layer.absoluteRect().y() + height;

    	// get the parents left position
    	var edge = layer.parentGroup().absoluteRect().y() + layer.parentGroup().absoluteRect().height();

      // set the scope to the layer group that the currently selected layer is in
      var scope = layer.parentGroup().layers();
      // set up the predicate and receive an array of matched layers
      var predicate = NSPredicate.predicateWithFormat("absoluteRect.y > %@", bottom);
      var queryResult = scope.filteredArrayUsingPredicate(predicate);

      // find topmost layer (queryResult seems not to be sortable)
      var loop = queryResult.objectEnumerator();
      var item, topmost = Number.MAX_VALUE;
      while (item = loop.nextObject()) {
        var top = item.absoluteRect().y() - height;
        if (top < topmost) {topmost = top}
      }

      // position layer
      if (topmost != Number.MAX_VALUE) {
        layer.absoluteRect().setY(topmost);
      } else if (bottom < edge) {
        layer.absoluteRect().setY(edge - height);
      } else {
        com.getflourish.utils.sendAlignBottom();
      }

    	// display relative position info
    	com.getflourish.common.showMarginsOf(layer);
    } else {
    	com.getflourish.utils.sendAlignBottom();
    }
}

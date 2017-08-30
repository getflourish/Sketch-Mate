// Aligns layers to their parent group’s top edge (control cmd ↑)

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

        // get layers top
        var top = layer.absoluteRect().y();

        // get parent absolute y
        var parentY = layer.parentGroup().absoluteRect().y();

        // set the scope to the layer group that the currently selected layer is in
        var scope = layer.parentGroup().layers();

        // set up the predicate and receive an array of matched layers
        var predicate = NSPredicate.predicateWithFormat("absoluteRect.y+absoluteRect.height < %@", top);
        var queryResult = scope.filteredArrayUsingPredicate(predicate);

        // find bottommost layer (queryResult seems not to be sortable)
        var loop = queryResult.objectEnumerator();
        var item, bottommost = -Number.MAX_VALUE;
        while (item = loop.nextObject()) {
          var bottom = item.absoluteRect().y() + item.absoluteRect().height()
          if (bottom > bottommost) {bottommost = bottom}
        }

        // position layer
        if (bottommost != -Number.MAX_VALUE) {
          layer.absoluteRect().setY(bottommost);
        } else if (top > parentY) {
          layer.absoluteRect().setY(parentY);
        } else {
          com.getflourish.utils.sendAlignTop();
        }

        // display relative position info
        com.getflourish.common.showMarginsOf(layer);
    } else {
        com.getflourish.utils.sendAlignTop();
    }

}

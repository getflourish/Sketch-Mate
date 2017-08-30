// Aligns layers to their parent group’s right edge (control cmd →)

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

        // get the layers right edge
        var width = layer.frame().width();

        // get layers right coordinate
        var right = layer.absoluteRect().x() + width;

        // get the parents left position
        var edge = layer.parentGroup().absoluteRect().x() + layer.parentGroup().absoluteRect().width();

        // set the scope to the layer group that the currently selected layer is in
        var scope = layer.parentGroup().layers();
        // set up the predicate and receive an array of matched layers
        var predicate = NSPredicate.predicateWithFormat("absoluteRect.x > %@", right);
        var queryResult = scope.filteredArrayUsingPredicate(predicate);

        // find leftmost layer (queryResult seems not to be sortable)
        var loop = queryResult.objectEnumerator();
        var item, leftmost = Number.MAX_VALUE;
        while (item = loop.nextObject()) {
          var left = item.absoluteRect().x() - width;
          if (left < leftmost) {leftmost = left}
        }

        // position layer
        if (leftmost != Number.MAX_VALUE) {
            layer.absoluteRect().setX(leftmost);
        } else if (right < edge) {
          layer.absoluteRect().setX(edge - width);
        } else {
          com.getflourish.utils.sendAlignRight();
        }

        // display relative position info
        com.getflourish.common.showMarginsOf(layer);
    } else {
        com.getflourish.utils.sendAlignRight();
    }
}

// Aligns layers to their parent group’s left edge (control cmd ←)

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

        // get the layers width
        var width = layer.frame().width();

        // get layers left
        var left = layer.absoluteRect().x();

        // get parent absolute x
        var parentX = layer.parentGroup().absoluteRect().x();

        // set the scope to the layer group that the currently selected layer is in
        var scope = layer.parentGroup().layers();
        // set up the predicate and receive an array of matched layers
        var predicate = NSPredicate.predicateWithFormat("absoluteRect.x+absoluteRect.width < %@", left);
        var queryResult = scope.filteredArrayUsingPredicate(predicate);

        // find rightmost layer (queryResult seems not to be sortable)
        var loop = queryResult.objectEnumerator();
        var item, rightmost = -Number.MAX_VALUE;
        while (item = loop.nextObject()) {
          var right = item.absoluteRect().x() + item.absoluteRect().width()
          if (right > rightmost) {rightmost = right}
        }
        // move layer
        if (rightmost != -Number.MAX_VALUE) {
          layer.absoluteRect().setX(rightmost);
        } else if (left > parentX) {
          layer.absoluteRect().setX(parentX);
        } else {
          com.getflourish.utils.sendAlignLeft();
        }

        com.getflourish.common.showMarginsOf(layer);
    } else {
        com.getflourish.utils.sendAlignLeft();
    }
}

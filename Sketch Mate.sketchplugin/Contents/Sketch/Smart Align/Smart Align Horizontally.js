// Center aligns the selected layer within its group (control cmd ,)

@import '../inventory.js'


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    // action


    var selected,
        parent;

    if (selection.count() == 1) {

        // the selected element
        selected = selection[0];

        // select parent group
        parent = selected.parentGroup();
        parent.setIsSelected(true);

        // in case the selection is the outermost layer of the group
        if (selected.absoluteRect().x() < parent.absoluteRect().x() || selected.absoluteRect().x() > parent.absoluteRect().x() + parent.frame().width()) {

            // Move selection
            selected.frame().setX(0);

            // deselect to refresh boundin box
            selected.setIsSelected(false);
            parent.setIsSelected(false);

            // select again
            selected.setIsSelected(true);
            parent.setIsSelected(true);

            // center align
            com.getflourish.utils.sendAlignHorizontally();

        // in case the selection is inside the group
        } else {
            // center selection within group
            com.getflourish.layers.alignLayersHorizontally(selection);
        }

        // deselect parent
        parent.setIsSelected(false);

    } else if (selection.count() >= 2) {
        // align layers
        com.getflourish.utils.sendAlignHorizontally();

    } else {
        doc.showMessage("Please select a layer.");
    }
}

// Middle aligns the selected layer within its group (control cmd .)

@import '../inventory.js'

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    var selected,
        parent;

    if (selection.count() == 1) {

        // the selected element
        selected = selection[0];

        // select parent group
        parent = selected.parentGroup();
        parent.setIsSelected(true);

        // in case the selection is the outermost layer of the group
        if (selected.absoluteRect().y() < parent.absoluteRect().y() || selected.absoluteRect().y() > parent.absoluteRect().y() + parent.frame().height()) {

            // Move selection
            selected.frame().setY(0);

            // deselect to refresh boundin box
            selected.setIsSelected(false);
            parent.setIsSelected(false);

            // select again
            selected.setIsSelected(true);
            parent.setIsSelected(true);
            // center align
            com.getflourish.utils.sendAlignVertically();
        } else {
            // center selection within group
            com.getflourish.layers.alignLayersVertically(selection);
        }

        // deselect parent
        parent.setIsSelected(false);

    } else if (selection.count() >= 2) {
        // align layers
        com.getflourish.utils.sendAlignVertically();

    } else {
        doc.showMessage("Please select a layer.");
    }

}

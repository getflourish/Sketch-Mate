// Make the selection fill the width of parent group or the width of the artboard

@import '../inventory.js'

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    // action
    var layer = selection[0];
    var frame = layer.frame();
    var parent = layer.parentGroup();

    frame.setX(0);

    var aWidth = doc.currentPage().currentArtboard().frame().width();

    if (frame.width() == parent.frame().width()) {
        frame.setWidth(aWidth);
        com.getflourish.utils.sendAlignLeft();
    } else {
        frame.setWidth(parent.frame().width());
    }
}

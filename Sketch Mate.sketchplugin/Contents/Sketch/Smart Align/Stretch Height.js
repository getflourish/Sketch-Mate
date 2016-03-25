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

    frame.setY(0);

    var aHeight = doc.currentPage().currentArtboard().frame().height();

    if (frame.height() == parent.frame().height()) {
        frame.setHeight(aHeight);
        com.getflourish.utils.sendAlignLeft();
    } else {
        frame.setHeight(parent.frame().height());
    }

    if (layer.name().indexOf("@fullheight") == -1) layer.setName(layer.name() + " @fullheight");
}
// Distributes layers (control option cmd ,)

@import '../inventory.js'

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    // align
    com.getflourish.utils.sendDistributeHorizontally();
}
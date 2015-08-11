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

    	// align layer with parent
    	if (bottom != edge) {
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
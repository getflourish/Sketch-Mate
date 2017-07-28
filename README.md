Sketch Mate
===========

These plugins will make you best friends with Sketch.

## Plugin Directory

#### Artboards
* Duplicate Artboard `shift` + `⌘` + `D`
* Fit Artboard
* Fit Artboard Height `ctrl` + `shift` + `A`
* Remove Artboard `⌘` + `⌫`
* Sort Artboards

#### Misc
* Goto Page
* Replace Layer `⌘` + `⌥` + `R`
* Set Line Height
* Toggle Click Through
* Wrap in Bounding Box

#### Smart Align
* Distribute Horizontally `control` + `⌘` + `⌥` + `,`
* Distribute Vertically `control` + `⌘` + `⌥` + `.`
* Smart Align Horizontally `⌘` + `⌥` + `,`
* Smart Align Vertically `⌘` + `⌥` + `.`
* Smart Align Bottom `control` + `⌘` + `↓`
* Smart Align Left `control` + `⌘` + `←`
* Smart Align Right `control` + `⌘` + `→`
* Smart Align Top `control` + `⌘` + `↑`
* Space Horizontally
* Space Vertically
* Stretch Height `⌘` + `⌥` + `e`
* Stretch Width `⌘` + `e`

#### Smart Move
* Delete and Pull `⌘` + `⌫`
* Pull Left `shift` + `⌘` + `⌥` + `←`
* Pull Up `shift` + `⌘` + `⌥` + `↑`
* Push Down `shift` + `⌘` + `⌥` + `↓`
* Push Right `shift` + `⌘` + `⌥` + `→`
* Set Increments `shift` + `⌘` + `⌥` + `I`

#### Sort
* Reverse Layer Order
* Reverse Positions
* Sort Artboards by Name
* Sort Layers `ctrl` + `⌘` + `⌥` + `S`


## Installation

To install all plugins, [download](https://github.com/getflourish/Sketch-Mate/archive/master.zip) them all first, unzip the archive, and place the folder contents in your Sketch Plugins folder by navigating to `Sketch > Plugins > Reveal Plugins Folder…`

To install only a selection of plugins, you will first need to place the library file `inventory.js` in the root of your Sketch Plugins directory. This is very important as all plugins rely on its functionality.

You can then install selected plugins by double-clicking the file, or alternatively, drag and drop the file onto the Sketch app icon. This will automatically copy the plugin to your Sketch Plugins folder.

## Keyboard Shortcuts

Most plugins have a pre-defined keyboard shortcut. You can always change it by editing the shortcut written in parenthesis at the end of the first line of a plugin.

For example, the first line of `Duplicate Artboard.sketchplugin`:

> // Duplicates the current artboard right next to it. (shift command d)

You can use modifier keys such as `option`, `command`, `control`, `shift`

## Artboards

### Duplicate Artboard (next to the current artboard)

This improves the built in behavior of artboard duplication in Sketch. If the selected artboard is in the middle of other artboards, all artboards on the right side will be shifted to the right before the artboard is duplicated. Requires any layer of an artboard to be selected.

**Shortcut:** `shift` + `⌘` + `D`

![Duplicate Artboard Animation](https://d26dzxoao6i3hh.cloudfront.net/items/3G3Y36281g451R0g240m/Duplicate%20Artboard.gif?v=b480cb36)

### Remove Artboard

This improves the built in behavior of artboard removal in Sketch. If the selected artboard is in the middle of other artboards, all artboards on the right side will be shifted to the left after the artboard has been removed. Requires any layer of an artboard to be selected.

**Shortcut:** `⌘` + `⌫` (Backspace)

![Remove Artboard Animation](https://d26dzxoao6i3hh.cloudfront.net/items/2w2A0J1F1c0E1Z3d3f0e/Remove%20Artboard.gif?v=65b75ab7)


### Fit Artboard

Resizes the artboard to fit its layers.


### Fit Artboard Height

Resizes the artboard to fit the height of its layers.

**Shortcut:** `shift` + `ctrl` + `A`

![Resize Artboard Animation](https://d26dzxoao6i3hh.cloudfront.net/items/27453E17311M3m0y183Z/Resize%20Artboard.gif?v=9cb1c381)


### Sort Artboards

Sorts selected artboard layers by their horizontal position. Useful when your layer list does not reflect the artboard arrangement on your canvas.


## Text

### Set Line Height

Plugin that allows you to set the line height of a text layer as a multiple of the font size. It’s like using em in CSS. Supports multiple selections.

**Shortcut:** `⌘` + `L`

![Screenshot](https://cl.ly/37182K2e1L46/Sketch-Line-Height.png)


## Misc

### Replace Layer

Replaces the selected layer with the content in the clipboard. Basically this plugin does paste in place while removing the original selection.

**Shortcut:** `⌥` + `cmd` + `R`

![Animation](https://cl.ly/2t2T0w0N2J2R/Replace%20Layer.gif)

## Smart Align

### Distribute Horizontally
Calls the menu command "Distribute Horizontally". Just for shortcut purposes.

**Shortcut:** `ctrl` + `⌘` + `⌥` + `,`

### Distribute Vertically
Calls the menu command "Distribute Vertically". Just for shortcut purposes.

**Shortcut:** `ctrl` + `⌘` + `⌥` + `.`

### Smart Align Horizontally
`experimental` Aligns the selected layer relative to its parent group.

**Shortcut:** `⌘` + `⌥` + `,`

### Smart Align Vertically

`experimental` Aligns the selected layer relative to its parent group.

**Shortcut:** `⌘` + `⌥` + `.`

### Space Horizontal
Distributes the selected elements horizontally, with the same distante beetween them. If only one layer is selected, the layer will be moved by the spacing that has been input.

![Screenshot](https://cl.ly/372L3T32293Z/Space.gif)

### Space Vertical
Distributes the selected elements vertically, with the same distante beetween them. If only one layer is selected, the layer will be moved by the spacing that has been input.

## Smart Move

`experimental` Allows you to pull or push layers in relation to the selected layer.

* Pull Left `shift` + `⌘` + `⌥` + `←`
* Pull Up `shift` + `⌘` + `⌥` + `↑`
* Push Down `shift` + `⌘` + `⌥` + `↓`
* Push Right `shift` + `⌘` + `⌥` + `→`

![Screenshot](https://cl.ly/3k1G2X0K1R0A/Smart%20Move.gif)

## Sorting

### Sort Layers

There are also plugins to reverse the order of the layers in the layer list and a plugin that reverses the position of the selected layers on the artboard.

**Options:** `Text (A->Z)`, `Text (Z->A)`, `Layer Name (A->Z)`, `Layer Name (Z->A)`, `Top`, `Left`, `Random`

**Shortcut:** `ctrl` + `⌘` + `⌥` + `S`

## Sorting Layers by text, visually
![Selection Animation](https://cl.ly/0B1H122X0C3I/Sorting.gif)

## Sorting Layers in the layer list by position
![Selection Animation](https://cl.ly/1x0U3R3k0v3A/Sorting%20Layers%202.gif)

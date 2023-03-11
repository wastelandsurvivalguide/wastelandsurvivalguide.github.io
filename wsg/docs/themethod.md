# The Method

## Requirements

- **Mod Organizer 2**: Preferably the Alpha 3 of version 2.4.5, which you can download in the release channel of the [MO2 Discord server](https://discord.gg/6GKR9jZ). Vortex is simply too slow and the way it handles load order just makes The Method a pain. In case you don't want to use the MO2 Alpha, keep in mind that plugins in your LO that are written in bold text (meaning they are ESM) will often have to be pushed manually for them to appear in their correct position, which is always above non-ESM plugins. This version also fixes the bug with the loadorder.txt file being reset to alphabetical order randomly. Basic knowledge of the tool is required since going into specific steps for everything would make this guide too long.
- **xEdit and knowing how to use it**: You can find the absolute latest version in the [xEdit Discord server](https://discord.gg/5t8RnNQ). 4.0.4 on Nexus is fine for New Vegas. If you get crashes with this version then roll back to 4.0.3. To use The Method effectively you also need to know how plugins are structured and how you use xEdit to patch mods together or make other changes. A basic guide is available [here](xedit).
- Plenty of **time**.

## Terminology

The 2 basic terms you will need to know for The Method are these:

- VQSC: Command line argument you can use on xEdit to skip reference loading (which speeds up loading but will not allow you to view or jump to references) and directly load a conflict filter on all plugins enabled in your load order.
- ModGrouping: Feature of xEdit that consists in logic statements that hide conflicts you have already checked, allowing you to isolate new conflicts for the next mod you enable, these statements are contained in the .modgroups file xEdit will create when you go through this process.

## Objective and logic

In order to make sure that all conflicts between your plugins are intended and/or harmless, you need to check conflicts with xEdit after each mod gets enabled. At every run you can choose how to patch the plugins involved and at the end you will ModGroup the remaining conflicts between the mod and the patches against the mods you have above. At the end you will have a fully patched load order and every conflict that doesn't need intervention will be hidden, leaving room for additions and ease of patching.

## First ModGroup

1. After you get working install of the latest TTW, you will need to add xEdit to your MO2 list of executables with the argument -FNV. Then add it again but with -FNV -VQSC (You only need "-FNV" if your xEdit executable is not named FNVEdit.exe). The first one is for general use and the 2nd is for quick conflict checking, which we will soon need.
1. The first ModGroup you will need to make is for the base game plugins conflicting between eachother and with TTW/YUPTTW.

   1. Load up xEdit with VQSC.

1. Since the mod is obviously intended to edit the base game plugins, nothing needs patching here.
1. Now create a ModGroup for all these plugins by highlighting them (CTRL+A), right-clicking and then selecting the "Create ModGroup" option.
1. When asked to include the current CRC32s, always click **Yes**
1. In this menu you can name your ModGroup and assign tags to each plugin involved (Explained below). The fastest way to name it would be to select the mod you just enabled (In this case TTW) and then pressing CTRL+N

1. Then you can store the ModGroup in TaleOfTwoWastelands.esm or YUPTTW.esm. Storing it just means that whenever that plugin is loaded then the statement will be used.
1. The ModGroup you just created will appear in the **Overwrite** folder in MO2, simply take that file and drag it to the corresponding mod, which is Tale Of Two Wastelands in this case.

Remember that this method of selecting every plugin on the left and then ModGrouping should only be used for your base content, which is always present and all of its conflicts are safe to ignore (these conflicts are between your main patch mod and also between all of the game's original plugins). Another example where you would do this is on New Vegas but without TTW, where the YUP mod should be ModGrouped with all of the game DLCs and main plugin above it.

### Tags

- **Optional**: What the name says, having this plugin disabled will not invalidate the ModGroup, so the remaining conflicts will still be hidden correctly. (This is used when dealing with patches for other mods for example, since having those combinations may not be permanent)
- **Target**: Any conflicting override between this plugin and other sources below will be hidden.
- **Source**: Any conflicting override between this plugin and other targets above will be hidden.
- **Forbidden**: If this module is loaded, the ModGroup is invalid.
- **Ignore LO**: If this is not selected, the module must be loaded in the same order as listed in this ModGroup. There are two values for this column:
  - Always: The load order of the module does not matter at all
  - In Block: all consecutive modules with this flag form a Block. Any module above the block must be loaded before any module in the block. Any module after the block must be loaded after any module in the block. The modules inside the block can load in any order.

## **ModGrouping your own mods**

Right after TTW, enable your next mod in MO2 and if multiple plugins or patches are present, then make sure those are loaded and placed below the main plugin.
In short, the process from this point on is this: (Detailed instructions and example below)

1. Enable a mod and launch xEdit with the VQSC argument.
1. Once loaded, you will see all conflicts caused by it. Check the records involved and patch where necessary.
1. Once patched, reload the filter or reload xEdit, then ModGroup the remaining conflicts into a ModGroup file made for that mod.
1. Take the ModGroup file you created and drag it from overwrite to the corresponding mod.
1. Repeat for the next mod going down your load order.

### **Example**

1. I will use the "(Benny Humbles You) and Steals Your Stuff" mod as example for the next ModGroup.
1. Since there is a TTW patch available, i enable that on top of the main mod plugin, then i load up VQSC.
1. Here you can see that the remaining conflicts are only between the main mod plugin and TTW, but since i already have a patch taking care of this, then it means that the remaining conflict is already taken care of and you can safely hide it via ModGroup.

1. Expand any of the record in either plugin, then once it is open, right-click the top right of the plugin name to create a new ModGroup for that specific combination of plugins conflicting as shown in the record you opened.

1. Now name your new ModGroup just like before, but since this one is more specific, i suggest you start creating your own naming scheme for combinations or you just use mine, which is the name of the main plugin from the mod you just enabled + the name of the plugin you are ModGrouping against, as shown in the picture.

1. Now that the ModGroup is done, you can check if it's working by closing and opening xEdit with VQSC again or by right-clicking on the xEdit tree-view while it is still open and removing the applied filter, then right-clicking anywhere on the tree-view and applying a filter for conflicts. If no conflicts are showing then you hid the previous ones correctly and you can keep ModGrouping your mods

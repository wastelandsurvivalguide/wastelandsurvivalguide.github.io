# xEdit Basics

## Requirements

### xEdit

I use 4.0.4c, available in the [xEdit Discord server](https://discord.gg/5t8RnNQ). 4.0.4 on Nexus is
fine. If you get crashes with this version, roll back to 4.0.3.

## Introduction and Terminology

xEdit is a tool you can use to edit plugins and have a visual representation of how the edits
overlap with the base game or other mods. This allows you to compare changes and easily do things
such as patching, editing via script (Written in Pascal) or perform more basic functions with a few
clicks. The basic rule of how plugins work is that only the latest instance of a record gets loaded,
but there are a few exceptions to that, such as NAVI or Previous INFO. These are some of the terms
you'll need to know:

- Override: Taking an existing record in a plugin and then editing it in another plugin.
- Conflict: These happen once you start adding more than 1 plugin editing that record and if the
  plugins try changing the content into their own thing, which makes them conflict so the user has to
  decide what needs to be done. xEdit will represent these conflicts based on their type and with
  different colors both for the background of that record and for the text (Theres a legend for this).

The **Red or Green** color of a record does not indicate whether you need to act or not, it's simply
a classification of the type of conflict.

- Forwarding: If you want a change in a specific plugin to also be contained in another plugin, then
  you can drag that value or container of values into the other plugin. For example if a mod does not
  include a fix from the unofficial patch but it edits that record elsewhere, you can forward the fix
  and have both changes at once. Generally it is not recommended to forward or edit things directly in
  the mod plugins, you should always override into a new plugin that acts as a patch.

## Plugin Structure

Any plugin will be loaded by the game as long as it is properly structured (Created by tools such as
xEdit or GECK) and if its extension is "ESP" or "ESM". The basic content of a plugin is its own
header, which defines info such as the version of that plugin (Has to match what the game uses for
proper functionality, this is especially important if you want to port a mod from Fallout 3 to
FNV/TTW). There is also information more important to an editor such as the author, description of
that plugin, the number of records it contains (Any record, even overrides) and the flags assigned
to the plugin (You'll mostly see "ESM" here).

If the plugin lacks an ESM flag but it has ESM as extension, the game will automatically load it as
ESM during runtime.

You can view plugins as a list of objects in unique containers that specify which type of content is
inside. For example a weapon record will be contained under the Weapons category. Each of these
objects has it's own ID called FormID written in [HEX](https://en.wikipedia.org/wiki/Hexadecimal)
which makes it unique, but there is also an Editor ID which the game ignores and you can use for
easier identification or filtering. Going back to the weapon example, you can have the weapon itself
(Base ID) or you can have instances of that weapon placed in the game world (Reference/Ref ID).

### FormIDs

A FormID is split in 2 parts, the **Index** and the **ID**. The Index (First 2 digits of the FormID)
is an indicator of where the plugin that record originates from is located in your load order. In
the next picture, the record I expanded has the FormID `1200186D`, so that plugin is placed at index
12 and the record selected has the ID 186D. You can tell the record is unique not only by the index,
but also the fact that it has no color, so it is completely unique to that plugin and no other
plugin in the load order has overridden it.

But if I select an override in that same plugin you will see a different index, since that record in
green was first created by the plugin that has index 06, which is `Fallout3.esm`.

You cannot patch or edit everything with xEdit. Records involving **navmeshes**, **scripts**,
**quest stages**, and **terrain** all need to be modified through GECK since they rely on the render
window, compilation, or specific functions.

## Example

Now let's say i want to edit something in the base game, such as the damage of the Assault Rifle.
Let's also assume we don't know the ID of that weapon so we will first filter it using its name in
xEdit.

1. Start by loading the base plugins for TTW

1. Once everything has loaded (The tips will go away) you can start looking for that gun by using
   the xEdit filter, just right-click any plugin on the tree-view (List on the left) and selecting
   "**Apply Filter**". This will open a menu with all sorts of criteria to filter by, but first you
   need to uncheck all the boxes it has selected by default, then we will proceed with our own custom
   filter that will find the weapon.

Now apply the filter and you will be presented will all the plugins that have created or overridden
a record going by that name and record type you filtered. In this case the filter found multiple
weapons, expand the last plugin (So that we can override the latest instance of that weapon, since
TTW edits it and we don't want to lose those changes) and right-click the Assault Rifle, then select
the "Copy as override into..." option. This will let you create a new plugin with a name of your
choice where the damage change will happen.

To make a new plugin, select `**<new file>.esp**` in the prompt, then name it. Once created, you
will see your plugin appear at the bottom of the tree-view and a new override appearing in the
record you opened in the right pane. Let's also filter for "damage" on the top left of the right
pane, so that we can see where damage is defined in that record.

Now you can just edit that number (Right-click, edit) in your plugin. The plugin that are you
changing is dictated by the column you choose to edit values in. Once you are done, just close xEdit
and it will ask you to save. When you are back in Mod Organizer 2, you will find a new plugin in
your overwrite folder, which is the plugin you just created.

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

# User Interface & HUD

---

### [Mod Configuration Menu](https://www.nexusmods.com/newvegas/mods/42507)

Adds a settings menu to configure mods in-game. **Required** for many mods.

#### Installation:

- Main File - The Mod Configuration Menu
- Update File - MCM Bugfix 2 **(Do not skip this file!)**

### [FOV Slider](https://www.nexusmods.com/newvegas/mods/55085)

Adds an MCM menu with options for adjust World Field of View, Player Field of View, Pipboy Field of View and Terminal Screen Field of View.
 
### [Vanilla UI Plus](https://www.moddb.com/mods/vanilla-ui-plus/downloads/vanilla-ui-plus-nv)

Modernized vanilla-style UI with many enhancements and bugfixes.

#### Installation:

  - Readne:
    - [x] Quick Readme
  - Font Options:<br/>
    <RadioButtonCheckedIcon fontSize="small" /> Default Font Tweaks<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Classic Pip-Boy Font<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> No Font Tweaks<br/>
  - Keybinds:
    - [x] WASD Compatible

### [yUI - User Ynterface](https://www.nexusmods.com/newvegas/mods/74357)

NVSE plugin that aims to fix UI bugs and add new UI features. Doesn't do anything
that noticeable on its own without [ySI - Sorting Ycons](#ysi---sorting-ycons).

#### Installation:

After installing the Main File, double-click the mod and go to **INI Editor**. Select all of the existing content and replace it with this:

```ini title="yUI.ini" showLineNumbers
[General]

; fix the issue where items with different conditions would 'jump around' on update
bFixIndefiniteSorting = 1

; fix the issue where Container Menu would display only a single dropped item at a time
bFixDroppedItems = 1

; fix the issue where Inventory Menu tabline shows up with buttons already selected
bFixTablineSelected = 1

; enable Sorting and Icons section which controls ySI, don't enable this if you don't have ySI installed unless you know what you are doing
bSortingIcons = 1

; match cursor color to HUD color
bMatchingCursor = 1


[Sorting and Icons]

; sort inventory according to tag names supplied in .json
bSortInventory = 1

; add ycons to inventory, container and barter menus
bAddInventoryIcons = 1

; replace hotkey icons with ycons
bReplaceHotkeyIcons = 1

; enable keyring-like clickable categories (this destroys vanilla keyring, so you have to have .json files supplying a new keyring category, i.e. ySI.json)
bEnableCategories = 1
```

### [ySI - Sorting Ycons](https://www.nexusmods.com/newvegas/mods/74358)

Uses yUI features to add 140+ custom icons and advanced sorting logic to improve inventory
management. Make sure `bSortingIcons = 1` is enabled in [yUI.ini](#yui---user-ynterface)
(it should be if following the guide). Pick up the colorful icons too, looks really good in-game. Recommended with white HUD.

#### Installation:

- Main File - ySI - Sorting Icons
- Main File - [Colorful Inventory Ycons](https://www.nexusmods.com/newvegas/mods/78674)

### [Clean Vanilla HUD](https://www.nexusmods.com/newvegas/mods/70001)

Hand-made up-scaled/cleaned recreations of many vanilla HUD elements.

#### Installation:

- Main File - Clean Vanilla Hud
  - Main Mod:
    - [x] Main Files
    - [x] Clean Fonts
    - [x] Clean Map Icons
    - [x] Clean Radiation Bar
    - [x] Clean Shared Interface
  - Clean Roulette Loading Wheel:<br/>
     <RadioButtonCheckedIcon fontSize="small" /> Loading Roulette Wheel<br/>
     <RadioButtonCheckedIcon fontSize="small" /> Loading Roulette Wheel HD<br/>
     <RadioButtonCheckedIcon fontSize="small" /> None above<br/>
  - Patches:
    - [x] Vanilla UI+ Patch
    - [x] I am not a Height Indicator User
    - [ ] Alternative Just Hit Indicator
    - [ ] Clean Fonts for DarnUI

### [Consistent Pip-Boy Icons v5 - Framework Plugin](https://www.nexusmods.com/newvegas/mods/83432)

Needed for the following mod.

### [Consistent Pip-Boy Icons](https://www.nexusmods.com/newvegas/mods/65046)

High-quality icons.

#### Installation:

- Main File - 1. Consistent Pip-boy Icons
- Main File - 2. Consistent Addon Icons
  - Use the default settings.
 
### More high quality menus.

<details>
<summary>The rest of ItsMeJesusHChrist's mods.</summary>
DP farming is annoying. Please stop. -very

### [Clean Companion Wheel](https://www.nexusmods.com/newvegas/mods/70486?tab=files)

This is a interface overhaul that cleans up all of the smudgy Icons and the textures surrounding the Companion Wheel while retaining the original design as much as possible.

#### Installation:

- Main File - Clean Companion Wheel 256x256 Edition

### [Vault Boy Paper Doll](https://www.nexusmods.com/newvegas/mods/76966)

This is a faithful recreation of the Vault Boy Paper Doll. You'll see the paper doll when you take damage or in the Condition menu in your Pip-Boy. Fixes a couple of alignment issues too.

### [Pop-Up Message Icons](https://www.nexusmods.com/newvegas/mods/76516)

"Pop-Up Message Icons!" Is an overhaul to ever single Pop-Up Vault Boy Head that you see in the top left corner of the screen in FO3/NV.

#### Installation:

- Main File - Pop-Up Message Icons
  - Pop-Up Message Icons!:
    - [x] Main Mod
    - [x] Extension - Hunger, Dehydration, Sleep and Radiation
    - [x] Extension - Reputation
    - [x] Extension - Challenges

### [Consistent Pip-Boy Icons v5 - Items](https://www.nexusmods.com/newvegas/mods/82074)

This update features a hand drawn recreation of every single item icon in two games.

### [Consistent Pip-Boy Icons v5 - Weapons](https://www.nexusmods.com/newvegas/mods/82740)

This update features a hand drawn recreation of every single weapon icon in two games.

### [Consistent Pip-Boy Icons v5 - Apparel](https://www.nexusmods.com/newvegas/mods/83248)

This update features a hand drawn recreation of every single apparel icon in two games.

### [Consistent Pip-Boy Icons v5 - Extension](https://www.nexusmods.com/newvegas/mods/83639)

This mod adds unique icons to Apparel, Weapons and Items on things that previously did not have any. 

### [Consistent Pip-Boy Icons v5 - DLC's Items](https://www.nexusmods.com/newvegas/mods/83629)

Featuring meticulously hand-drawn item icons seen in the DLC's of Fallout New Vegas and Fallout 3.

### [Consistent Pip-Boy Icons v5 - Reputation](https://www.nexusmods.com/newvegas/mods/83840)

A meticulously hand-drawn recreation of every karma and reputation icon.

### [Map Marker Icons](https://www.nexusmods.com/newvegas/mods/83575)

A total overhaul to every Map Marker icon, also including an extension that replaces 87 generic Map Markers Icons with something that is more memorable and unique. Recommended to enable all options for more variety.

#### Installation:

- Main File - Map Marker Icons
  - Main Mod:
    - [x] Vanilla
    - [x] Vanilla Plus
    - [x] Faction Specific
    - [x] Numbered Vaults
    - [x] Unique DLC Starter Marks
    - [x] Unique Location Icons
    - [x] Unique Icons with General Mod Support

### [TTW Goodies](https://www.nexusmods.com/newvegas/mods/83603)

A collection of patches and V5 Icons for Tale Of Two Wastelands.

#### Installation:

- Main File - TTW Goodies
  - Patch for Pop-Up Message Icons:<br/>
     <RadioButtonCheckedIcon fontSize="small" /> Install It<br/>
     <RadioButtonUncheckedIcon fontSize="small" /> Don't<br/>
  - Patch for CPI V5 Icons:<br/>
     <RadioButtonCheckedIcon fontSize="small" /> Install It<br/>
     <RadioButtonUncheckedIcon fontSize="small" /> Don't<br/>
  - Patch for Weapon Hotkey Icons:<br/>
     <RadioButtonUncheckedIcon fontSize="small" /> Install It<br/>
     <RadioButtonCheckedIcon fontSize="small" /> Don't<br/>
  - Patch for Map Marker Icons:
    - [x] Vanilla Plus
    - [x] Numbered Vaults
    - [x] Unique Location Icons
    - [x] Unique DLC Starter Marker
    - [ ] None for me, thanks!
asdkajsdkjaksdjalkjsdlkajsd
/details>

### [Main Menu Redone](https://www.nexusmods.com/newvegas/mods/76352)

A completely reworked re-imagining of the TTW main menu image. Choose the file that matches your resolution.

#### Installation:

Choose the file matching your monitor's resolution.

### [Vault Door Loading Wheel](https://www.nexusmods.com/newvegas/mods/62998)

Changes the loading wheel to resemble a vault door, fitting very well within the theme of TTW.

### [Simple Maps](https://www.nexusmods.com/newvegas/mods/83902)

Replaces all of the maps with simple vector imagery akin to Fallout 4.

#### Installation:

- Main File - Simple Maps - TTW

### [MAPMO](https://www.nexusmods.com/newvegas/mods/74365)

##### Main & Pause Menus Overhaul

Adds a bunch of features to the Main and Pause menus. Fully customizable.

#### Installation:

- First install [AnhNVSE](https://www.nexusmods.com/newvegas/mods/74012); this is a prerequisite for MAPMO.
- Main File - Main And Pause Menus Overhaul
  - Press **M** from the pause menu to access the MCM
  - Press **N** from the pause menu to configure MAPMO's settings
- Optional File - Extras - Hi-Res Icons
- Optional File - Extras - Hi-Res Logos
- Optional File - Extras - Stewie's Tweaks Sorting Icons Replacer
- Main File - [MAPMO Custom INI](https://www.nexusmods.com/newvegas/mods/79005)

:::caution

This mod will hide the **Mod Configuration Menu** button in the pause menu!
You can access it with the **M** key.

:::

### [B42 Notify - Corner Messages Overhaul](https://www.nexusmods.com/newvegas/mods/80085)

Notifications!

### [Recent Loot Log](https://www.nexusmods.com/newvegas/mods/80180)

A little UI widget to satisfy your need to see what you just looted.

### [Tutorial Killer](https://www.nexusmods.com/newvegas/mods/47746)

Removes message boxes that pop up during the tutorial, as well as those that occur once
during a new game, and repeating corner-messages.

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

# User Interface & HUD

---

#### Separator:

- Right-click the empty space in the left pane of MO2 and select **Create separator**.
- Name the separator **User Interface & HUD**.

### [Mod Configuration Menu](https://www.nexusmods.com/newvegas/mods/42507)

Adds a settings menu to configure mods in-game. **Required** for many mods.

#### Installation:

- Main File - The Mod Configuration Menu
- Update File - MCM Bugfix 2 **(Do not skip this file!)**

### [FOV Slider](https://www.nexusmods.com/newvegas/mods/55085)

Adds an MCM menu with options for adjusting World Field of View, Player Field of View, Pipboy Field of View and Terminal Screen Field of View.

:::note
This mod can sometimes cause an issue with VATS, making the screen turn completely grey. If this happens, resetting the settings to default could fix it, and if not, removing it is a solution. I've never had issues with it personally. - Audixas
:::
 
### [Vanilla UI Plus](https://www.moddb.com/mods/vanilla-ui-plus/downloads/vanilla-ui-plus-nv)

Modernized vanilla-style UI with many enhancements and bugfixes.

#### Installation:

  - Readme:
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
(it should be if following the guide). The colorful icons are recommended, they look really good in-game.

#### Installation:

- Main File - ySI - Sorting Icons
- Main File - [Colorful Inventory Ycons](https://www.nexusmods.com/newvegas/mods/78674)
- Main File - [ySI - Colorful Icons Fix](https://www.nexusmods.com/newvegas/mods/85075)
- Main File - [ySI - Pick Up Prompts](https://www.nexusmods.com/newvegas/mods/85117)

### [Clean Vanilla HUD](https://www.nexusmods.com/newvegas/mods/70001)

Hand-made up-scaled/cleaned recreations of many vanilla HUD elements.

#### Installation:

- Main File - Clean Vanilla Hud
  - Main Mod:
    - [x] Main Files
    - [x] Extras
    - [x] Clean Shared Interface
  - Clean Roulette Loading Wheel:<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Loading Roulette Wheel HD<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Loading Roulette Wheel UHD<br/>
    <RadioButtonCheckedIcon fontSize="small" /> None above.<br/>
  - Clean Main Menu Background:<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Main Menu Replacer HD<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Main Menu Replacer UHD<br/>
    <RadioButtonCheckedIcon fontSize="small" /> None above.<br/>
  - Patches:
    - [x] Vanilla UI+ Patch
    - [x] I am not a Height Indicator User
    - [ ] Alternative Just Hit Indicator

### [Vanilla Fonts Revisited](https://www.nexusmods.com/newvegas/mods/85136)

A faithful HD remake of the vanilla Monofonto and Futura fonts.

#### Installation:

- Main File - Vanilla Fonts Revisited

### [High Resolution Screens](https://www.nexusmods.com/newvegas/mods/77989)

Sharper, clearer screens for terminals, Pip-Boy, etc.

### [Vault Boy Paper Doll](https://www.nexusmods.com/newvegas/mods/76966)

This is a faithful recreation of the Vault Boy Paper Doll. You'll see the paper doll when you take damage or in the Condition menu in your Pip-Boy. Fixes a couple of alignment issues too.

### [Clean Companion Wheel](https://www.nexusmods.com/newvegas/mods/70486)

This is a interface overhaul that cleans up all of the smudgy Icons and the textures surrounding the Companion Wheel while retaining the original design as much as possible.

#### Installation:

- Main File - Clean Companion Wheel 256x256 Edition

### [Consistent Pip-Boy Icons v5 - Framework Plugin](https://www.nexusmods.com/newvegas/mods/83432)

Needed for the following mods.

### [Consistent Pip-Boy Icons](https://www.nexusmods.com/newvegas/mods/65046)

High-quality icons.

#### Installation:

- Main File - 1. Consistent Pip-boy Icons
 
### More high quality menus.

<details>
<summary>The rest of ItsMeJesusHChrist's mods.</summary>
<p>Placed here to keep LOC's mods from bloating the page. In our opinion, base Consistent Pip-Boy Icons is fine. If you want more high quality UI aspects, continue on.

### [Pop-Up Message Icons](https://www.nexusmods.com/newvegas/mods/76516)

"Pop-Up Message Icons!" Is an overhaul to ever single Pop-Up Vault Boy Head that you see in the top left corner of the screen in FO3/NV.

#### Installation:

- Main File - Pop-Up Message Icons
  - Pop Up Message Icons!:
    - [x] Main Mod
    - [x] Extension - Hunger, Dehydration, Sleep and Radiation
    - [x] Extension - Reputation
    - [x] Extension - Challanges

### [Consistent Pip-Boy Icons v5 - Items](https://www.nexusmods.com/newvegas/mods/82074)

This update features a hand drawn recreation of every single item icon in two games.

### [Consistent Pip-Boy Icons v5 - Weapons](https://www.nexusmods.com/newvegas/mods/82740)

This update features a hand drawn recreation of every single weapon icon in two games.

### [Consistent Pip-Boy Icons v5 - Apparel](https://www.nexusmods.com/newvegas/mods/83248)

This update features a hand drawn recreation of every single apparel icon in two games.

### [Consistent Pip-Boy Icons v5 - Extension](https://www.nexusmods.com/newvegas/mods/83639)

This mod adds unique icons to Apparel, Weapons and Items on things that previously did not have any. 

### [Consistent Pip-Boy Icons v5 - Addendumb](https://www.nexusmods.com/newvegas/mods/85024)

This mod adds unique icons to Apparel, Weapons and Items on things that previously did not have any. 
*(No, this is not a mistake. They have the exact same description. DP farming to the max.)*

### [Consistent Pip-Boy Icons v5 - Dynamicon](https://www.nexusmods.com/newvegas/mods/85411)

Perk Icons Dynamically change depending on your rank. This mod also introduces distinctive Icons for Weapons, Apparel and Items.

#### Installation:

- Main File - Consistent Pip-Boy Icons v5 - Dynamicon
  - Dynamicon:
    - [x] Main Mod
    - [x] Optional ESPLess Plugin

### [Consistent Pip-Boy Icons v5 - DLC's Items](https://www.nexusmods.com/newvegas/mods/83629)

Featuring meticulously hand-drawn item icons seen in the DLC's of Fallout New Vegas and Fallout 3.

### [Consistent Pip-Boy Icons v5 - Reputation](https://www.nexusmods.com/newvegas/mods/83840)

A meticulously hand-drawn recreation of every karma and reputation icon.

### [Map Marker Icons](https://www.nexusmods.com/newvegas/mods/83575)

A total overhaul to every Map Marker icon, also including an extension that replaces 87 generic Map Markers Icons with something that is more memorable and unique. 

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

That's a wrap.</p>
</details>

### [Main Menu Redone](https://www.nexusmods.com/newvegas/mods/76352)

A complete rework of the TTW main menu image in higher resolution with better detail.

#### Installation:

Choose the file matching your monitor's resolution.

### [Scum's Considerably Cute Corner Load Wheel](https://www.nexusmods.com/newvegas/mods/71915)

Moves the loadwheel to the corner of the screen and removes the bars.

#### Installation:

- Main File - Scum's Considerably Cute Corner Load Wheel (Vanilla)

### [Simple Loadwheels](https://www.nexusmods.com/newvegas/mods/78974)

Replaces the vanilla loading wheel with a sleek, minimal design.

#### Installation:

- Main File - Radiation Loadwheel

### [Simple Maps](https://www.nexusmods.com/newvegas/mods/83902)

Replaces all of the maps with simple vector imagery akin to Fallout 4.

#### Installation:

- Main File - Simple Maps - TTW

### [High Res Local Maps](https://www.nexusmods.com/newvegas/mods/77963)

Sharper, clearer local maps.

### [MAPMO](https://www.nexusmods.com/newvegas/mods/74365)

##### Main & Pause Menus Overhaul

Adds a bunch of features to the Main and Pause menus. Fully customizable.

#### Installation:

- Main File - [AnhNVSE](https://www.nexusmods.com/newvegas/mods/74012) (moving it to the Utilities separator is recommended for the sake of organization)
- Main File - Main And Pause Menus Overhaul
  - Press **M** from the pause menu to access the MCM
  - Press **N** from the pause menu to configure MAPMO's settings
- Optional File - Extras - Hi-Res Logos
- Optional File - Extras - Stewie's Tweaks Sorting Icons Replacer
- Main File - [MAPMO Custom INI](https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000126504&nmm=1)

### [Pip-Boy UI Tweaks](https://www.nexusmods.com/newvegas/mods/85343)

Assorted tweaks for the Pip-Boy UI. Updated Weapon Mod Menu, extended item comparisons, colorful stat info, ySI Icon integration, and more! 

#### Installation:

- Main File - Pip-Boy UI Tweaks
  - Main File:
    - [x] Plugin (Recommended)
    - [ ] Scriptrunner
  - UI Compatability:
    - [ ] Default
    - [x] Vanilla UI+
    - [ ] DarNified UI
  - General:
    - [x] Smooth Glow Cursor
  - ySI - Sorting Icons
    - [x] MAPMO Bottle Cap (Color)
    - [ ] MAPMO Bottle Cap (Grayscale)

### [B42 Notify - Corner Messages Overhaul](https://www.nexusmods.com/newvegas/mods/80085)

Changes the corner notifications to work like in Skyrim - multiple are shown at a time and fading out as new ones appear for better readability.

### [Recent Loot Log](https://www.nexusmods.com/newvegas/mods/80180)

Adds a little UI widget that displays what you just looted.

### [Tutorial Killer](https://mod.pub/falloutnv/53-esp-less-tutorial-killer)

Removes message boxes that pop up during the tutorial, as well as those that occur once during a new game, and repeating corner-messages.

:::note
This mod removes **useful information** for new players! If this is your first time playing Fallout 3 or Fallout: New Vegas, we would recommend **skipping this mod**, as the info it provides will not be learned through normal gameplay.
:::

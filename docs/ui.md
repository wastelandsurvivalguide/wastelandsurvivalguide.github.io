import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

# User Interface & HUD 

---

#### Separator:

- Right-click the empty space in the left pane of MO2 and select **Create separator**.
- Name the separator **User Interface & HUD**.

## User Interface

### [Mod Configuration Menu](https://www.nexusmods.com/newvegas/mods/42507)

Adds a settings menu to configure mods in-game. 

#### Installation:

- Main File - The Mod Configuration Menu
- Update File - MCM Bugfix 2 

:::caution
The mod **WILL NOT FUNCTION** without the update file!
:::

### [Vanilla UI Plus](https://www.moddb.com/mods/vanilla-ui-plus/downloads/vanilla-ui-plus-nv)

Modernized vanilla-style UI with many enhancements and bug fixes. 

#### Installation:

  - Readme:
    - [x] Quick Readme
  - Font Options:<br/>
    <RadioButtonCheckedIcon fontSize="small" /> Default Font Tweaks<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Classic Pip-Boy Font<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> No Font Tweaks<br/>
  - Keybinds:
    - [x] WASD Compatible

### [Clean Vanilla HUD](https://www.nexusmods.com/newvegas/mods/70001)

Hand-made up-scaled and cleaned recreations of many vanilla HUD elements.

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
    - [ ] DarnUI Patch
    - [x] Cursor Unilaterally Matched Patch
    - [x] I am not a Height Indicator User
    - [ ] Alternative Just Hit Indicator

### [Vanilla Fonts Revisited](https://www.nexusmods.com/newvegas/mods/85136)

A faithful HD remake of the vanilla Monofonto and Futura fonts.

#### Installation:

- Main File - Vanilla Fonts Revisited

### [MAPMO](https://www.nexusmods.com/newvegas/mods/74365)

Adds ample features to the Main and Pause menus. Fully customizable.

#### Installation:

- Main File - Main And Pause Menus Overhaul
- Optional File - Extras - Hi-Res Logos
- Optional File - Extras - Stewie's Tweaks Sorting Icons Replacer
- Main File - [MAPMO - WSG Preset](https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000127132&nmm=1)

:::important Instructions:
- Press **M** from the pause menu to access the MCM.
- Press **N** from the pause or main menu to configure MAPMO's settings.

Apply the WSG preset by opening the MAPMO configuration screen with **N** while in the pause menu, then selecting **Presets -> Wasteland Survival Guide**.
:::

### [Scum's Considerably Cute Corner Load Wheel](https://www.nexusmods.com/newvegas/mods/71915)

Makes the loadwheel less intrusive by moving it to the corner of the screen and removing the associated bars.

#### Installation:

- Main File - Scum's Considerably Cute Corner Load Wheel (Vanilla)

### [Simple Loadwheels](https://www.nexusmods.com/newvegas/mods/78974)

Replaces the vanilla loading wheel with a sleek, minimalist design.

#### Installation:

- Main File - Radiation Loadwheel

### [Main Menu Redone](https://www.nexusmods.com/newvegas/mods/76352)

A complete high-resolution and more detailed rework of the Tale of Two Wastelands Main menu image.

#### Installation:

- Choose the file matching your monitor's resolution.

### [Quick Select - A Zelda BOTW Style Quick Menu](https://www.nexusmods.com/newvegas/mods/82249)

Adds high-quality quick select menus for weapons and items. Dramatically improves item usability and weapon swapping in combat and on the go!

#### Installation:

- Main File - Quick Select
- Main File - [Quick Select - Custom INI](https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000131042&nmm=1)
  - Remaps the hotkeys for weapons to 1 and aid to 2. Disables throwables in favor of B42 quickthrow.
 
### [B42 Notify - Corner Messages Overhaul](https://www.nexusmods.com/newvegas/mods/80085)

Changes the corner notifications to improve readability. Multiple messages appear simultaneously and fade out as newer ones appear.

### [Recent Loot Log](https://www.nexusmods.com/newvegas/mods/80180)

Adds a UI widget that displays your recent loot.

### [Sleep Wait Hardcore Needs](https://www.nexusmods.com/newvegas/mods/85148)

The Sleep and Wait menu will show the amount of H2O, FOD, and SLP to be gained and lost based on the time selected.

### [Clean Companion Wheel](https://www.nexusmods.com/newvegas/mods/70486)

This is a interface overhaul that improves all of the low resolution icons and the textures of the Companion Wheel.

#### Installation:

- Main File - Clean Companion Wheel 256x256 Edition

### [FOV Slider](https://www.nexusmods.com/newvegas/mods/55085)

Adds an MCM menu with options for adjusting World Field of View, Player Field of View, Pipboy Field of View, and Terminal Screen Field of View.

:::caution Known Bug!
This mod can cause the screen to turn grey with VATS. If this happens, reset the settings to default. If the issue persists, remove the mod.
:::

### [Tutorial Killer](https://mod.pub/falloutnv/53-esp-less-tutorial-killer)

Removes tutorial messages, one-time help pop-ups, and repeating corner-messages.

:::tip
This mod **REMOVES INFORMATION** that new players may find useful. If playing Fallout: New Vegas for the first time, consider **SKIPPING** this mod.
:::

## Pip-Boy

### [yUI - User Ynterface](https://www.nexusmods.com/newvegas/mods/74357)

Fixes various UI bugs and adds new UI features.

#### Installation:

- Main File - yUI
- After installing the main file, double-click the mod, go to **INI Files**, select all of the content within the INI, and replace it with:

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

Uses yUI features to add many custom icons and advanced sorting logic to improve inventory management.

:::important
**REQUIRES** `bSortingIcons = 1` to be enabled in [yUI.ini](#yui---user-ynterface), which was done in the previous step.
:::

#### Installation:

- Main File - ySI - Sorting Icons
- Main File - [Colorful Inventory Ycons](https://www.nexusmods.com/newvegas/mods/78674)
- Main File - [ySI - Colorful Icons Fix](https://www.nexusmods.com/newvegas/mods/85075)
- Main File - [ySI - Pick Up Prompts](https://www.nexusmods.com/newvegas/mods/85117)
- Main File - [ySI - Assorted Fixes](https://www.nexusmods.com/newvegas/mods/86715?tab=files)
- Optional File - [Exit Categories with Tab](https://www.nexusmods.com/newvegas/mods/86715?tab=files)
- Main File - [ySI Extended TTW](https://www.nexusmods.com/newvegas/mods/84352)
- Main File - [ySI Vanilla MiscQuest Items Patch](https://www.nexusmods.com/newvegas/mods/81230)

### [High Resolution Screens](https://www.nexusmods.com/newvegas/mods/77989)

Sharper, clearer screens for terminals, Pip-Boy, and other screens.

### [High Res Local Maps](https://www.nexusmods.com/newvegas/mods/77963)

Sharper, clearer local maps.

### [Simple Power Armor HUD](https://www.nexusmods.com/newvegas/mods/86369)

A stripped down and updated version of No PipBoy in Power Armor, which replaces the Pip-Boy with a holopanel while wearing power armor.

#### Installation:

- Main File - SPAHUD
- Main File - [Alternate Holographic Panel - Background Version](https://www.nexusmods.com/newvegas/mods/82636)
  - Provides an improved holographic control panel interface for use alongside Simple Power Armor HUD.

### [Vault Boy Paper Doll](https://www.nexusmods.com/newvegas/mods/76966)

This is a faithful recreation of the Vault Boy Paper Doll, which appears when taking damage or in the Condition menu in your Pip-Boy. Also fixes some alignment issues.

### [Consistent Pip-Boy Icons v5 - Framework Plugin](https://www.nexusmods.com/newvegas/mods/83432)

Greatly expands the framework for Pip-Boy Icon creation.

:::important
**REQUIRED** for the following 'Icons' mods.
:::

### [Pop-Up Message Icons](https://www.nexusmods.com/newvegas/mods/76516)

"Pop-Up Message Icons!" Is an overhaul to every single Pop-Up Vault Boy Head that you see in the top left corner of the screen.

#### Installation:

- Main File - Pop-Up Message Icons
  - Pop Up Message Icons!:
    - [x] Main Mod
    - [x] Extension - Hunger, Dehydration, Sleep and Radiation
    - [x] Extension - Reputation
    - [x] Extension - Challanges
   
### [Weapon Hotkey Icons](https://www.nexusmods.com/newvegas/mods/83476)

Adds custom icons for weapons in hotkeys.

#### Installation:

- Main File - Weapon Hotkey Icons
  - Optionals:
    - [x] ItsMeJesusHChrist Mods Support
    - [ ] FO3 Weapons Restoration
  - Compatibility Patches:
    - [x] Just Assorted Mods Compatibility Patch
    - [ ] Just Weapon Hweel Compatibility Patch

### [Map Marker Icons](https://www.nexusmods.com/newvegas/mods/83575)

A total overhaul to Map Marker icons, also including an extension that replaces 87 generic Map Markers Icons with something that is more memorable and unique. 

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

### Consistent Pip-Boy Icons Collection

Various high-quality Pip-Boy icons.

#### Installation:

- Main File - [1. Consistent Pip-boy Icons](https://www.nexusmods.com/newvegas/mods/65046)
- Main File - [Consistent Pip-Boy Icons v5 - Items](https://www.nexusmods.com/newvegas/mods/82074)
- Main File - [Consistent Pip-Boy Icons v5 - Weapons](https://www.nexusmods.com/newvegas/mods/82740)
- Main File - [Consistent Pip-Boy Icons v5 - Apparel](https://www.nexusmods.com/newvegas/mods/83248)
- Main File - [Consistent Pip-Boy Icons v5 - DLC's Items](https://www.nexusmods.com/newvegas/mods/83629)
- Main File - [Consistent Pip-Boy Icons v5 - Extension](https://www.nexusmods.com/newvegas/mods/83639)
- Main File - [Consistent Pip-Boy Icons v5 - Vault Girl Extension](https://www.nexusmods.com/newvegas/mods/84838)
- Main File - [Consistent Pip-Boy Icons v5 - Addendumb](https://www.nexusmods.com/newvegas/mods/85024)
- Main File - [Consistent Pip-Boy Icons v5 - Reputation](https://www.nexusmods.com/newvegas/mods/83840)
- Main File - [Consistent Pip-Boy Icons v5 - Stats (and Some Perks)](https://www.nexusmods.com/newvegas/mods/86122)
- Main File - [Consistent Pip-Boy Icons v5 - Dynamicon](https://www.nexusmods.com/newvegas/mods/85411)
  - Dynamicon:
    - [x] Main Mod
    - [x] Optional ESPLess Plugin
- Main File - [TTW Goodies](https://www.nexusmods.com/newvegas/mods/83603)
  - TTW patches for the above 'Icons' mods.
  - Patch for Pop-Up Message Icons:<br/>
    <RadioButtonCheckedIcon fontSize="small" /> Install It<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Don't<br/>
  - Patch for CPI V5 Icons:<br/>
    <RadioButtonCheckedIcon fontSize="small" /> Install It<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Don't<br/>
  - Patch for Weapon Hotkey Icons:<br/>
    <RadioButtonCheckedIcon fontSize="small" /> Install It<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Don't<br/>
  - Patch for Map Marker Icons:
    - [x] Vanilla Plus
    - [x] Numbered Vaults
    - [x] Unique Location Icons
    - [x] Unique DLC Starter Marker
    - [ ] None for me, thanks

### [Simple Maps](https://www.nexusmods.com/newvegas/mods/83902)

Replaces all maps with simple vector imagery akin to Fallout 4, vastly improving readability and utility.

#### Installation:

- Main File - Simple Maps - TTW
- Optional File - Simple Maps - No Urban Shading - TTW

### [Pip-Boy UI Tweaks](https://www.nexusmods.com/newvegas/mods/85343)

Assorted tweaks for the Pip-Boy UI. Updated Weapon Mod Menu, extended item comparisons, colorful stat info, ySI Icon integration, and more! 

#### Installation:

- Main File - Pip-Boy UI Tweaks
  - Main File:
    - [x] Plugin (Recommended)
    - [ ] Scriptrunner
  - Texture Addon:
    - [x] Smooth Glow Cursor
    - [x] MAPMO Bottle Cap Icon
    - [x] Colorful Interface Icons
   
### [Instant and Faster Pipboy (No Stutter)](https://www.nexusmods.com/newvegas/mods/85294)

Speeds up the animation for pulling out and putting away the Pip-Boy.

#### Installation:

- Choose the desired speed and the version that aligns with your character's sex.

:::note
The female version has built in realignment, which fixes the tilt that could sometimes occur when opening the Pip-Boy. Some Pip-Boy replacers **ALREADY** realign the Pip-Boy, causing this effect to compound. If this happens to you, **try the regular (non-female) version instead**.
:::

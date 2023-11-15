import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

# User Interface & HUD

---

## Core HUD/UI Mods

### [Mod Configuration Menu](https://www.nexusmods.com/newvegas/mods/42507)

Adds a settings menu to configure mods in-game. **Required** for many mods.

#### Installation:

- Main File - The Mod Configuration Menu
- Update File - MCM Bugfix 2 **(Do not skip this file!)**

### [Vanilla UI Plus](https://www.moddb.com/mods/vanilla-ui-plus/downloads/vanilla-ui-plus-nv)

Modernized vanilla-style UI with many enhancements and bugfixes.

### [yUI - User Ynterface](https://www.nexusmods.com/newvegas/mods/74357)

NVSE plugin that aims to fix UI bugs and add new UI features. Doesn't do anything
that noticeable on its own without [ySI - Sorting Ycons](#ysi---sorting-ycons).

#### Installation:

After installing the Main File, double-click the mod and go to **INI Editor**. Paste in the following, replacing the existing contents:

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
    <RadioButtonUncheckedIcon fontSize="small" /> Loading Roulette Wheel<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Loading Roulette Wheel HD<br/>
    <RadioButtonCheckedIcon fontSize="small" /> None above<br/>
  - Patches:
    - [x] Vanilla UI+ Patch
    - [x] I am not a Height Indicator User
    - [x] Alternative Just Hit Indicator
    - [ ] Clean Fonts for DarnUI
- Optional File - Cursor Unilaterally Matched - Patch
  - You do **not** need to install "Cursor Unilaterally Matched";
    it is already built into [yUI](#yui---user-ynterface).
- [Clean Companion Wheel 256x256 Edition](https://www.nexusmods.com/newvegas/mods/70486)

### [Consistent Pip-Boy Icons v5 - Framework Plugin](https://www.nexusmods.com/newvegas/mods/83432)

Needed for the following mod.

### [Consistent Pip-Boy Icons](https://www.nexusmods.com/newvegas/mods/65046)

High-quality icons.

#### Installation:

- Main File - 1. Consistent Pip-boy Icons
- Main File - 2. Consistent Addon Icons
  - Use the default settings.

:::note Where are all the new CPI mods?
We felt that the amount of mod you have to download is too excessive to warrant including in the guide. Each one is perfectly fine for use, and is recommended if you aren't content with V4 on its own.
:::

### [Main Menu Redone](https://www.nexusmods.com/newvegas/mods/76352)

A completely reworked re-imagining of the TTW main menu image. Choose the file that matches your resolution.

### [MAPMO](https://www.nexusmods.com/newvegas/mods/74365)

##### Main & Pause Menus Overhaul

Adds a bunch of features to the Main and Pause menus. Fully customizable.

#### Installation:

- First install [AnhNVSE](https://www.nexusmods.com/newvegas/mods/74012); this is a prerequisite for MAPMO.
- Main File - Main And Pause Menus Overhaul
  - Press **M** from the pause menu to access the MCM
  - Press **N** from the pause menu to configure MAPMO's settings
- Optional Files - Extras - Stewie's Tweaks Sorting Icons Replacer

:::caution

With this mod installed, the **Mod Configuration Menu** button in the pause menu will be hidden!
You will have to access the MCM by pressing the **M** key.

:::

### [Tutorial Killer](https://www.nexusmods.com/newvegas/mods/47746)

Removes message boxes that pop up during the tutorial, as well as those that occur once
during a new game, and repeating corner-messages.

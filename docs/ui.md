import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

# User Interface & HUD

---

#### Separator:

- Right-click the empty space in the left pane of MO2 and select **Create separator**.
- Name the separator **User Interface & HUD**.

## User Interface

### [Mod Configuration Menu](https://www.nexusmods.com/newvegas/mods/42507)

Adds a settings menu to configure mods in-game. **Required** for many mods.

#### Installation:

- Main File - The Mod Configuration Menu
- Update File - MCM Bugfix 2 **(Do not skip this file!)**

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

Aims to fix UI bugs and add new UI features.

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

Uses yUI features to add many custom icons and advanced sorting logic to improve inventory
management. Make sure `bSortingIcons = 1` is enabled in [yUI.ini](#yui---user-ynterface)
(it should be if following the guide). The colorful icons are recommended and look great in-game.

#### Installation:

- Main File - ySI - Sorting Icons
- Main File - [Colorful Inventory Ycons](https://www.nexusmods.com/newvegas/mods/78674)
- Main File - [ySI - Colorful Icons Fix](https://www.nexusmods.com/newvegas/mods/85075)
- Main File - [ySI - Pick Up Prompts](https://www.nexusmods.com/newvegas/mods/85117)

### [Main Menu Redone](https://www.nexusmods.com/newvegas/mods/76352)

A complete high-resolution and more detailed rework of the Tale of Two Wastelands main menu image.

#### Installation:

Choose the file matching your monitor's resolution.

### [Scum's Considerably Cute Corner Load Wheel](https://www.nexusmods.com/newvegas/mods/71915)

Makes the loadwheel less intrusive by moving it to the corner of the screen and removing the associated bars.

#### Installation:

- Main File - Scum's Considerably Cute Corner Load Wheel (Vanilla)

### [Simple Loadwheels](https://www.nexusmods.com/newvegas/mods/78974)

Replaces the vanilla loading wheel with a sleek, minimalist design.

#### Installation:

- Main File - Radiation Loadwheel

### [Sleep Wait Hardcore Needs](https://www.nexusmods.com/newvegas/mods/85148)

The Sleep/Wait menu will show the amount of H2O, FOD, and SLP to be gained/lost based on the time selected.

## HUD

### [FOV Slider](https://www.nexusmods.com/newvegas/mods/55085)

Adds an MCM menu with options for adjusting World Field of View, Player Field of View, Pipboy Field of View, and Terminal Screen Field of View.

:::note
This mod can sometimes cause an issue with VATS, making the screen turn completely grey. If this happens, resetting the settings to default could fix it, and if not, removing it is a solution.
:::

### [Simple Power Armor HUD](https://www.nexusmods.com/newvegas/mods/86369)

A stripped down and updated version of No PipBoy in Power Armor, which replaces the Pip-Boy with a holopanel while wearing power armor.

#### Installation:

- Main File - SPAHUD

### [Alternate Holographic Panel](https://www.nexusmods.com/newvegas/mods/82636) 

Provides an improved holographic control panel interface for use alongside Simple Power Armor HUD.

#### Installation:

- Main File - Alternate Holographic Panel - Background Version

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

### [B42 Notify - Corner Messages Overhaul](https://www.nexusmods.com/newvegas/mods/80085)

Changes the corner notifications to improve readability. Multiple messages appear simultaneously and fade out as newer ones appear.

### [Recent Loot Log](https://www.nexusmods.com/newvegas/mods/80180)

Adds a UI widget that displays your recent loot.

### [MAPMO](https://www.nexusmods.com/newvegas/mods/74365)

##### Main & Pause Menus Overhaul

Adds ample features to the Main and Pause menus. Fully customizable.

#### Installation:

- Main File - [AnhNVSE](https://www.nexusmods.com/newvegas/mods/74012) (you should already have this if following the guide)
- Main File - Main And Pause Menus Overhaul
  - Press **M** from the pause menu to access the MCM
  - Press **N** from the pause or main menu to configure MAPMO's settings
- Optional File - Extras - Hi-Res Logos
- Optional File - Extras - Stewie's Tweaks Sorting Icons Replacer
- Main File - [MAPMO - WSG Preset](https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000127132&nmm=1)

:::note
Remember to apply the preset by opening the MAPMO configuration screen with **N** while in the pause menu, then selecting **Presets -> Wasteland Survival Guide**.
:::

## Pip-Boy

### [Vanilla Fonts Revisited](https://www.nexusmods.com/newvegas/mods/85136)

A faithful HD remake of the vanilla Monofonto and Futura fonts.

#### Installation:

- Main File - Vanilla Fonts Revisited

### [High Resolution Screens](https://www.nexusmods.com/newvegas/mods/77989)

Sharper, clearer screens for terminals, Pip-Boy, and other screens.

### [Vault Boy Paper Doll](https://www.nexusmods.com/newvegas/mods/76966)

This is a faithful recreation of the Vault Boy Paper Doll. You'll see the paper doll when you take damage or in the Condition menu in your Pip-Boy. Fixes a couple of alignment issues too.

### [Clean Companion Wheel](https://www.nexusmods.com/newvegas/mods/70486)

This is a interface overhaul that improves all of the low resolution icons and the textures of the Companion Wheel.

#### Installation:

- Main File - Clean Companion Wheel 256x256 Edition

### [Consistent Pip-Boy Icons v5 - Framework Plugin](https://www.nexusmods.com/newvegas/mods/83432)

A framework for the following Consistent Pip-Boy Icon mods.

### [Consistent Pip-Boy Icons](https://www.nexusmods.com/newvegas/mods/65046)

High-quality Pip-Boy icons.

#### Installation:

- Main File - 1. Consistent Pip-boy Icons
 
### More high quality menus.

<details>
<summary>The rest of ItsMeJesusHChrist's mods.</summary>
<p>Placed here to keep these mods from bloating the page. If you want more high-quality UI mods, continue on.


### [Pop-Up Message Icons](https://www.nexusmods.com/newvegas/mods/76516)

"Pop-Up Message Icons!" Is an overhaul to every single Pop-Up Vault Boy Head that you see in the top left corner of the screen.

#### Installation:

- Main File - Pop-Up Message Icons
  - Pop Up Message Icons!:
    - [x] Main Mod
    - [x] Extension - Hunger, Dehydration, Sleep and Radiation
    - [x] Extension - Reputation
    - [x] Extension - Challanges

### [Consistent Pip-Boy Icons v5 - Items](https://www.nexusmods.com/newvegas/mods/82074)

More high-quality item icons.

### [Consistent Pip-Boy Icons v5 - Weapons](https://www.nexusmods.com/newvegas/mods/82740)

More high-quality weapon icons.

### [Consistent Pip-Boy Icons v5 - Apparel](https://www.nexusmods.com/newvegas/mods/83248)

More high-quality apparel icons.

### [Consistent Pip-Boy Icons v5 - Extension](https://www.nexusmods.com/newvegas/mods/83639)

More high-quality assorted icons.

### [Consistent Pip-Boy Icons v5 - Addendumb](https://www.nexusmods.com/newvegas/mods/85024)

More high-quality assorted icons.

### [Consistent Pip-Boy Icons v5 - Dynamico](https://www.nexusmods.com/newvegas/mods/85411)

More high-quality perk icons that dynamically change depending on your rank.

#### Installation:

- Main File - Consistent Pip-Boy Icons v5 - Dynamico
  - Dynamico:
    - [x] Main Mod
    - [x] Optional ESPLess Plugin

### [Consistent Pip-Boy Icons v5 - DLC's Items](https://www.nexusmods.com/newvegas/mods/83629)

More high-quality DLC item icons.

### [Consistent Pip-Boy Icons v5 - Reputation](https://www.nexusmods.com/newvegas/mods/83840)

More high-quality reputation icons.

### [Consistent Pip-Boy Icons v5 - Stats (and Some Perks)](https://www.nexusmods.com/newvegas/mods/86122)

More high-quality stats, special, skill, and perk icons.

### [Consistent Pip-Boy Icons v5 - Vault Girl Extension](https://www.nexusmods.com/newvegas/mods/84838)

More high-quality apparel icons.

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

### [Simple Maps](https://www.nexusmods.com/newvegas/mods/83902)

Replaces all maps with simple vector imagery akin to Fallout 4, vastly improving readability and utility.

#### Installation:

- Main File - Simple Maps - TTW

### [High Res Local Maps](https://www.nexusmods.com/newvegas/mods/77963)

Sharper, clearer local maps.

### [Pip-Boy UI Tweaks](https://www.nexusmods.com/newvegas/mods/85343)

Assorted tweaks for the Pip-Boy UI. Updated Weapon Mod Menu, extended item comparisons, colorful stat info, ySI Icon integration, and more! 

#### Installation:

- Main File - Pip-Boy UI Tweaks
  - Main File:
    - [x] Plugin (Recommended)
    - [ ] Scriptrunner
  - General:
    - [x] Smooth Glow Cursor
  - ySI - Sorting Icons
    - [x] MAPMO Bottle Cap (Color)
    - [ ] MAPMO Bottle Cap (Grayscale)
   
### [Instant and Faster Pipboy (No Stutter)](https://www.nexusmods.com/newvegas/mods/85294)

Speeds up the animation for pulling out and putting away the Pip-Boy.

#### Installation:

Choose the desired speed and the version that aligns with your character's sex.

## Optional Extras

:::danger Spicy Mods Ahead
The **OPTIONAL** mods ahead may deviation significantly from vanilla aesthetics. However, many of us consider them indespensible and feel that they greatly enhance the game. **Procceed with caution!**
:::

### [Item Cards](https://www.nexusmods.com/newvegas/mods/85868) 

Adds Item Cards with detailed stat comparisons while hovering over weapons, armor, and more.

#### Installation:

- Main File - Item Cards
  - Main File:
    - [x] Plugin (Recommended)
    - [ ] Scriptrunner
- Main File - [Item Cards Custom INI](https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000129342&nmm=1)

### [3D Grenade Indicator](https://www.nexusmods.com/newvegas/mods/86243)

Adds a UI element showing the position of grenades in 3D space, additionally highlighting blast radius and fuse timer.
   
### [Quick Select - A Zelda BOTW Style Quick Menu](https://www.nexusmods.com/newvegas/mods/82249) 

Adds high-quality quick select menus for weapon and item. Dramatically improves item usability and weapon swapping in combat and on the go!

#### Installation:

- Main File - [SUP NVSE Plugin](https://www.nexusmods.com/newvegas/mods/73160?tab=files) (you should already have this if following the guide)
- Main File - Quick Select

### [Drowning Visuals - ESPless](https://www.nexusmods.com/newvegas/mods/84841)

Adds a customizable visual effect when the player is drowning or holding their breath.

### [Radiation Visuals - ESPless](https://www.nexusmods.com/newvegas/mods/84917)

Adds a customizable visual effect when the player is exposed to radiation. Ionizing particles, static noise, blurred vision, and more!

- Main File - Radiation Visuals
  - Main File:
    - [x] Plugin (Recommended)
    - [ ] Scriptrunner
  - Texture Quality:
    - [x] 2k
    - [ ] 1k
  - Texture Options:
    - [x] Compress Textures

### [Simple Night Vision - ESPless](https://www.nexusmods.com/newvegas/mods/84991)

Adds togglable night vision and thermal imaging modes to power armor helmets. Fully configurable! Use the N key to toggle night vision, and hold the N key to add support to your current headgear.

#### Installation:

- Main File - [Keywords](https://www.nexusmods.com/newvegas/mods/83088) (you should already have this if following the guide)
- Main File - Simple Night Vision

### [Tutorial Killer](https://mod.pub/falloutnv/53-esp-less-tutorial-killer)

Removes tutorial messages, one-time help pop-ups, and repeating corner-messages.

:::note
This mod removes **useful information** for new players! If this is your first time playing Fallout 3 or Fallout: New Vegas, we would recommend **skipping this mod**, as the info it provides will not be learned through normal gameplay.
:::

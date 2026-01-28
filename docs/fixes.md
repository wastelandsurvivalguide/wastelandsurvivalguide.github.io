import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

# Extra Utilities & Fixes

---

#### Separator:

- Right-click the empty space in the left pane of MO2 and select **Create separator**.
- Name the separator **Extra Utilities & Fixes**.

## Extra Utilities

### [AnhNVSE](https://www.nexusmods.com/newvegas/mods/74012)

A script extender plugin that adds many new functions, required by some of the mods in the guide. 

### [SUP NVSE](https://www.nexusmods.com/newvegas/mods/73160)

Another script extender plugin that adds new functions to the game. 

### [zlib Updated - NVSE](https://www.nexusmods.com/newvegas/mods/85267)

Updates zlib to the latest version for faster loading and less stutter.

### [Cell Offset Generator - NVSE](https://www.nexusmods.com/newvegas/mods/92182)

Removes cell loading stutter caused by unoptimized plugins.

:::important
On initial load, the game will **take longer to load** to generate offsets for each plugin. These will be placed in your **overwrite folder** on game exit. This is not a problem and they can either be dragged into the mod in the left pane or left as-is. Subsequent loads will be normal.
:::

### [Shader Loader - NVSE](https://www.nexusmods.com/newvegas/mods/87814)

Allows loading shaders from loose files. Required for other mods within the guide.

### [Keywords](https://www.nexusmods.com/newvegas/mods/83088)

Implements a framework to create and automatically load keywords in a simple user-friendly way, via use of INI config files.

### [Climate Control NVSE](https://www.nexusmods.com/newvegas/mods/77205)

Fixes bugs and adds utilities for weather mods.

### [Stewies Tweaks - Custom INI](https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000137870&nmm=1)

A custom INI file for Stewie's Tweaks that enables many useful gameplay and quality of life tweaks.

### [Faster Main Menu](https://www.nexusmods.com/newvegas/mods/67811)

Makes the game's main menu load faster.

### [Faster Sleep-Wait](https://www.nexusmods.com/newvegas/mods/66785)

Decreases the delay between hours while waiting or sleeping.

#### Installation:

- Main File - Faster Sleep Wait

### [Auto-Save Manager](https://www.nexusmods.com/newvegas/mods/67248)

Lightweight mod adding timed autosaves, save slots and incremental/full save hotkeys.

### [Smooth True Iron Sights Camera](https://www.nexusmods.com/newvegas/mods/69074)

Aim down sights without the camera snapping to place.

#### Installation:

- Main File - Smooth True Ironsights

## Fixes

### [Audio Region Fix - NVSE](https://www.nexusmods.com/newvegas/mods/91241)

Fixes acoustic spaces not changing with exterior regions.

### [Blood Decal Flashing Fix](https://www.nexusmods.com/newvegas/mods/87830)

Fixes color overflow in blood decal shaders, which caused colorful flashes on certain GPUs or if using DXVK.

### [Depth of Field Fix](https://www.nexusmods.com/newvegas/mods/81200)

Fix for depth of field bleeding over onto player's viewmodel.

### [External Emittance Fix](https://www.nexusmods.com/newvegas/mods/80443)

Fixes a bug that would cause certain particles to appear black.

### [Fallout Alpha Rendering Tweaks](https://www.nexusmods.com/newvegas/mods/80316)

Fixes some alpha rendering issues like broken effects when using Transparency Multisampling.

### [LOD Flicker Fix - NVSE](https://www.nexusmods.com/newvegas/mods/91705)

Fixes flickering objects caused by lack of depth buffer precision.

### [Muzzle Flash Light Fix](https://www.nexusmods.com/newvegas/mods/81201)

Fixes muzzle flash lights not being culled after firing, which would cause the game to continue using them for illumination.

### [Viewmodel Shading Fix](https://www.nexusmods.com/newvegas/mods/84781)

Fixes incorrect specular lighting and lack of muzzle flash lights on viewmodels and pip-boy.

### [Viewmodel Shake Fix](https://www.nexusmods.com/newvegas/mods/84443)

Fix for massive shaking during aiming caused by floating point precision loss.

### [Consistent Spread - Firearms Accuracy and Wobble Fix](https://www.nexusmods.com/newvegas/mods/77974)

Fixes firearms inconsistent accuracy caused by vanilla weapon wobble and bugged character spread settings.

### [Ammo Script Fixes](https://www.nexusmods.com/newvegas/mods/63997)

Fixes several problems at a fundamental level with how ammo scripts and effects work, plus some tweaks for consistency and fun.

### [Critical and Effects - Fixes and Tweaks](https://www.nexusmods.com/newvegas/mods/69200)

Fixes damage dealing critical effects of most vanilla weapons so that they cannot cause you to miss "killcounts" and other proc effects, plus some personal tweaks.

### [Equip and Movement Speed Fix - ESPless](https://www.nexusmods.com/newvegas/mods/71774)

Fixes animation speed not updating correctly while in-game for weapon drawing, weapon holstering, and running.

#### Installation:

- Main File - Equip and Movement Speed Fix - ESPless

### [Mostly Fixed FaceGen Tints (NV or TTW)](https://www.nexusmods.com/newvegas/mods/71577)

Fixes vanilla FaceGen tints.

#### Installation:

- Main File - FaceGen Tint Fixes for TTW

### [Vanilla Placement Fixes](https://www.nexusmods.com/newvegas/mods/90593)

Fixes hundreds of clipping/floating/misaligned objects in the vanilla game that aren't covered by other mods.

#### Installation:

- Main File - Placement Fixes TTW

### [Gas Trap Performance Fix](https://www.nexusmods.com/newvegas/mods/88587)

Fixes the script lag﻿ occurring in cells with numerous gas traps.

#### Installation:
- Main File - Gas Trap Performance Fix
  - Main File:<br/>
  <RadioButtonCheckedIcon fontSize="small" /> Plugin (Recommended)<br/>
  <RadioButtonUncheckedIcon fontSize="small" /> Scriptrunner<br/>

### [Consistent Weapon Mod Descriptions](https://www.nexusmods.com/newvegas/mods/85957)

Certain weapon mods have an empty line above the description. This simple fix rectifies that issue.

#### Installation:
- Main File - Consistent Weapon Mod Descriptions
  - Main File:<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Vanilla (Plugin)<br/>
    <RadioButtonUncheckedIcon fontSize="small" /> Tale of Two Wastelands (Plugin)<br/>
    <RadioButtonCheckedIcon fontSize="small" /> Scriptrunner (ESPless)<br/>
  - Additional Options:
    - [ ] Remove Stat Values

### [Slideshow FOV Fix - ESPLess](https://www.nexusmods.com/newvegas/mods/87119)

Fixes the issue with slideshows being the wrong size based on your FOV.

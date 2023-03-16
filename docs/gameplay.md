# Gameplay
---

## Tweaks & Quality-Of-Life

### [Casino Exchange All](https://www.nexusmods.com/newvegas/mods/35701)

Trade in all Caps, Legion, NCR & (optionally) Pre-war Money at once, at the casino cashiers.

#### Installation:

- Main File - Casino Exchange All 1-5a (Pick whatever you want in the FOMOD)
- Optional File - Voices for Casino Exchange All

### [Configurable Pip-Boy Light](https://www.nexusmods.com/newvegas/mods/73792)

Allows you to configure the Pip-Boy's light color as well as the radius and other things.

#### Installation:

Main File - Configurable Pip-Boy Light Color

### [Delay DLC Redux TTW](https://www.nexusmods.com/newvegas/mods/75851)

Prevents the game's DLC from spamming the new game startup messages and requires you be near
a given DLC's starting location to receive its quest. It cannot be stressed enough that you
need to **read the description** for this mod so you understand how to start the DLCs while
it is installed. Repeat for any additional files mentioned.

#### Installation:

Main File - Delay DLC Redux TTW

### [Faster Pip-Boy Animation](https://www.nexusmods.com/newvegas/mods/67761)

Modifies the Pip-Boy animation to be 2x or 3x faster than default.
Works with most Pip-Boy mods.

#### Installation:

Main File - Faster Pip-Boy Animation (2x)

### [Misc Gamesetting Tweaks](https://www.nexusmods.com/newvegas/mods/72983)

Customizes some vanilla gamesettings with text files powered by Stewie's Tweaks.

#### Installation:

Main File - Misc Gamesetting Tweaks Presets

- Make your selections & click Install

:::tip Changing Your Settings

The easiest way to modify your gamesetting tweaks is to simply reinstall the mod.

:::

:::info Perk Every Level

This tweak actually has no effect in TTW, as TTW already grants a perk every level
in non-Hardcore mode, and as for Hardcore, this gamesetting won't actually affect it.
If you want a perk every level in Harcore Mode, install _Hardcore Perk Every Level_
from [Wasteland Supplements](https://www.nexusmods.com/newvegas/mods/79005).

:::

### [Root 'n Loot](https://www.nexusmods.com/newvegas/mods/59378)

Replaces all static (non-interactive) containers with lootable equivalents.

#### Installation:

Main File - Root'n Loot TTW

### [Stash Organizer](https://eddoursul.win/mods/stash-organizer/)

Automatically organizes your items in any interior cell, modded or vanilla.
It is recommended to read the description for this mod so you understand how to use its features.

#### Installation:

Main File - Stash Organizer

### [Supplemental Ammo Crafting](https://www.nexusmods.com/newvegas/mods/76175)

Adds missing crafting and breakdown recipes for ballistic ammo types.

#### Installation:

Main File - Supplemental Ammo Crafting

### [TTW Quick Start](https://www.nexusmods.com/newvegas/mods/65937)

Quick start plugin to skip the Vault 101 intro sequence and start in the cave just outside the vault.
The Medicine Bobblehead is not given at the start, you can pick it up later during _Trouble on the Homefront_.

#### Installation:

Main File - TTW Quick Start

### [Tweaks for TTW](https://www.nexusmods.com/newvegas/mods/77934/)

A collection of miscellaneous tweaks for TTW, customizable via config file.

#### Installation:

Main File - Tweaks for TTW
  - Double-click the mod in the left pane and go to **INI Files**. Paste in:
  ```ini showLineNumbers title="config\TweaksTTW\config.ini"
  [All]
  ;Note: Settings that affect what armor or weapons NPCs use may not take effect until after they respawn or their cell resets if loaded on a preexisting save
  bBosCombatArmor=1
  ; Lower leveled Brotherhood patrols have a chance to spawn wearing combat armor instead of power armor.
  ; The Combat Armor comes with a custom BoS texture
  bEnclaveCeasefire=1
  ; the Enclave in the Capital Wasteland will stop being hostile to the player should they:
  ; 1. convince Autumn to walk away at Project Purity
  ; 2. infect Project Purity with the FEV 
  ; 3. destroy the Citadel. 
  ; Will work retroactively when installed with preexisting saves if you did any of these actions.
  ; If the Enclave stop being hostile by doing either 1 or 2, they will become hostile again if you continue to help the Brotherhood in the Broken Steel DLC and start the quest "Death from Above." 
  ; You can get them to stop being hostile again if you destroy the Citadel at the end of "Who Dares Win."
  bBosNoPlasma=1
  ; Removes plasma weapons from the Brotherhood's weapon leveled lists then adds them back after you complete "Take It Back."
  ; Don't enable this if you are loading a save in which you have already beaten "Take It Back"
  bBosSawbones=1
  ; Gives Sawbones a Brotherhood paintjob
  ; No need to enable this if you have Rebuild the Capital. This feature is already included in RtC
  bCrossCountryFastTravel=1
  ;  Allows you to travel back and forth between the Mojave and Capital Wasteland using map markers. 
  ;  You have to the travel to the Mojave the normal way before these map markers will be added.
  bRepublicOfDaveRenamer=1
  ; Will rename the Map Marker, the Interiors (except for the Museum of Dave since I don't think Shawna would rename that) depending on who wins the election.
  iTalonCompanyContract=1
  ; Upon taking the Contract Killer Perk, Talon Company Mercs will not attack you
  ; if set to 2, you must have very evil karma and the Contract Killer perk
  bServiceRifleSemi=1
  ; Makes the Service Rifle semi-automatic like in Vanilla.
  bEnclaveEviction=1
  ; If you destroy the Mobile Base Crawler at the end of "Who Dares Win," the Enclave Encampments in the wasteland are disabled
  ; No need to enable this if you have Rebuild the Capital. This feature is already included in RtC
  bAtomConfront=1
  ; If Confessor Cromwell detects you diffusing the Megaton bomb, he will confront you
  bReducedNuka=0
  ; Reduces the Loot Spawn rate for Nuka-Cola Vending Machines, including reduced amount of Nuka-Cola and Liquid Nitrogen
  bNoHitSquads=0
  ; Stops Talon Company and Regulator karma hit squads from spawning.
  bNoRandomEncounters=0
  ; Stops random encounters from triggering (if for whatever reason you want that)
  ; Once this tweak is enabled, keep it enabled for the remainder of the playthrough. Disabling this Tweak mid save will reset all encounters which may have unpredictable results
  bNoEyebotVertibirds=1
  ; Disables the chance of destroyed eyebots spawning in an Enclave vertibird that lands Enclave troopers.
  bNoPonyExpress=0
  ; Disables Pony Express Boxes
  iBrokenArmor=0
  ; If an NPC is wearing power armor when they die, the power armor breaks
  ; If set to 2, all armor breaks on death, not just power armor
  bRaiderFriend=0
  ; If you have very evil karma, raiders will not attack you
  bStandardIssuedRifle=0
  ; NCR Troopers only carry service rifles like in vanilla.
  ; If you are loading this setting on an existing save, NCR Troopers will keep whatever weapon they had before until they respawn
  bFo3Enclave=0
  ; The Enclave will only use MkII power armor like in vanilla Fo3
  ; Might make early level Enclave Encounters harder
  bBosNoT51=0
  ; Lyon's Brotherhood does not use T51b power armor, only T45d
  bOutcastNoT51=0
  ; The Brotherhood Outcast does not use T51b power armor, only T45d
  bTalonCompanyPowerArmor=0
  ; High Leveled Talon Company Merc have a chance to spawn with Power Armor
  bEnclaveTSeriesPA=0
  ; Adds a chance for Enclave Troopers to spawn wearing T45d and T51b Power Armor
  iOutcastLootEnclave=0
  ; If set to 1, the Outcast have chance to spawn wearing looted Enclave power armor after the quest "Take It Back"
  ; If set to 2, the Outcast will wear looted Enclave power armor after the quest "Who Dares Wins"
  iBoSLootEnclave=1
  ; If set to 1, the Brotherhood have chance to spawn wearing looted Enclave power armor after the quest "Take It Back"
  ; If set to 2, the Brotherhood will wear looted Enclave power armor after the quest "Who Dares Wins"
  bPaintGunPowerArmor=1
  ; Allows you to use paint guns to retexture power armor
  ; Useful if you have enabled any of the custom power armor tweaks above, as you will need to paint the modded power armor into vanilla power armor before you can turn them into Casdin
  ; Currently allows you to repaint T-45d, T-51b, Enclave, and Hellfire power armor
  ; You cannot paint unique power armor like the Winterized T51b or Ashur's power armor
  ; Also, does not work with power armor added by other mods, but someone could easily make a patch if they wanted to
  bMojaveReps=1
  ; A Regulator Represenative and Littlehorn & Associates Rep can be found in the Mojave. You can give them fingers/ears.
  ; The Regulator can be found at the 188 Trade Post. The Littlehorn Rep can be found at the Atomic Wrangler
  bTenpennyPeace=1
  ; If you kill Roy after moving the ghouls in, then he won't slaughter all the smoothskin residents
  ; You have about 3 days before he kills everyone
  ; Bessie Lynn and Michael Masters will also put on nicer clothes if keep the peace after they move in
  ; Inspired by Kazopert's Tenpenny Tower Quest Redux mod
  ```
  You can customize any of the settings to your liking, this is only a "starter pack".

## New Features

### [JIP CCC](https://www.nexusmods.com/newvegas/mods/50468)

##### Companions Command and Control

Revolutionizes the way companions are controlled and interacted with. A must-have, it has every
feature imaginable when it comes to companions.
[JIP CCC HD Icons](https://www.nexusmods.com/newvegas/mods/75378) is also recommended.
If you don't like the avatars, try
[Vault Boy JIP CCC Avatars](https://www.nexusmods.com/newvegas/mods/67270) or
[Perk Styled CCC Icons](https://www.nexusmods.com/newvegas/mods/70849).

#### Installation:

Main File - JIP Companions Command and Control

### [Just Assorted Mods](https://www.nexusmods.com/newvegas/mods/66666)

A compilation of interface and gameplay-enhancing mods in one package, configurable in MCM.

- HUD features like Dynamic Crosshair, Hit Marker, Hit Indicator, Visual Objectives.
- Gameplay features like FO4-style Loot Menu, Sprint, Bullet Time, Hold Breath, Weapon Hweel.

#### Installation:

- Main File - Just Assorted Mods
  - Toggle/configure features in the MCM
- Optional File - [JAM Sprint Animation Replacers](https://www.nexusmods.com/newvegas/mods/74839)
- Optional File - [Clean Just Weapons Hweel](https://www.nexusmods.com/newvegas/mods/76357)

### [Mothership Zeta Rewards](https://www.nexusmods.com/newvegas/mods/76001)

Adds a container upon completing Mothership Zeta, it will be populated with the items from
any abductees you decided to keep alive during your playthrough. Think Honest Hearts, but better!

#### Installation:

Main File - TTW - Mothership Zeta Rewards

### [Sweet6Shooter Perks](https://www.nexusmods.com/newvegas/mods/73438)

Adds 60+ perks and 12+ traits in a vanilla friendly, immersive way.

#### Installation:

- Main File - Sweet 6 Shooter Perk Pack TTW Version
- Optional File - NVB1Patch

### [Tale of Bi Wastelands](https://www.nexusmods.com/newvegas/mods/72721)

Adds Confirmed Bachelor and Cherchez La Femme options for the canonically gay & lesbian merchants
to mirror any Black Widow and Lady Killer options in Fallout 3 and its DLC.

#### Installation:

Main File - Tale of Bi Wastelands

### [Transportalponder EX](https://www.nexusmods.com/newvegas/mods/76128)

Upgrades the vanilla Big MT Transportalponder! received at the conclusion of Old World Blues
into a configurable teleportation device.

#### Installation:

Main File - TTW Transportalponder Extended

### [TTW Reputations](https://www.nexusmods.com/newvegas/mods/68604)

Adds a functional reputation system to Fallout 3 for parity with New Vegas; compatible with TTW New Vegas Speech Checks.

#### Installation:

Main File - TTW Reputations

### [TTW N.V. Speech Checks](https://www.nexusmods.com/newvegas/mods/68736)

Converts all Fallout 3 dialogue to use the New Vegas speech system; compatible with TTW Reputations.

#### Installation:

- Main File - TTW New Vegas Speech Checks
- Optional File - TTW New Vegas Speech Checks - TTW Reputations Patch
- Optional File -
  [TTW NV Speech Checks & Reputations - Tale of Bi Wastelands Patches](https://www.nexusmods.com/newvegas/mods/76206)
  - **Both files** if you use both mods

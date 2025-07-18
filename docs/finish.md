﻿# Final Steps 

---

## Load Order

This section ensures that your load order is correct for the guide by overwriting
MO2's `loadorder.txt` file. It's fine if you skipped any number of mods in the guide;
this process will still work.

Click the ![MO2 folder button](../static/img/mo2_folders.webp) button at the top of MO2 and select <button>Open Profile Folder</button>. Double-click `loadorder.txt` to open it in your text editor of choice and **replace** any existing contents with the following:

```txt title="C:\Users<YOUR USERNAME>\AppData\Local\ModOrganizer\TTW\profiles\Default\loadorder.txt"
# This file was automatically generated by Mod Organizer.
# ╔═════════════ Wasteland Survival Guide Load Order ══════════════╗
# ║ This is a file for MO2 to parse automatically; you don't need  ║
# ║ to read or edit it. Many listed mods are NOT part of the guide ║
# ║ and are only here as contingencies. Please ignore them!        ║
# ╚════════════════════════════════════════════════════════════════╝
FalloutNV.esm
DeadMoney.esm
HonestHearts.esm
OldWorldBlues.esm
LonesomeRoad.esm
GunRunnersArsenal.esm
Fallout3.esm
Anchorage.esm
ThePitt.esm
BrokenSteel.esm
PointLookout.esm
Zeta.esm
CaravanPack.esm
ClassicPack.esm
MercenaryPack.esm
TribalPack.esm
TaleOfTwoWastelands.esm
YUPTTW.esm
Restored Physics Sounds.esm
Placement Fixes.esm
PerformanceOfTheTitans.esm
NavmeshOverhaul.esm
FO3_Optimization.esm
Main And Pause Menus Overhaul.esm
Tale of Bi Wastelands.esm
TTW Reputations.esm
Tale of Bi Wastelands + TTW Reputations Patch.esm
TTW New Vegas Speech Checks.esm
TTW New Vegas Speech Checks - TTW Reputations Patch.esm
Tale of Bi Wastelands + TTW NV Speech Checks Patch.esm
Essential Capital Enhancements Merged.esm
Repeatable Quests Rewards Rebalanced.esm
Functional Post Game Ending Lite.esm
Functional Post Game Ending Lite TTW Patch.esm
3DNPCFNVBundle.esm
Lived-In AIO.esm
Lived-In Strip.esm
Goodies.esp
Goodies - TTW Patch.esp
Mojave Scenery Overhaul.esm
Mojave Scenery Overhaul - TTW.esm
Lived-In AIO - Mojave Scenery Patch.esm
Goodies - Mojave Scenery Overhaul Patch.esm
TGMIO.esm
TGDCIO.esm
AWorldOfPainFO3.esm
A World of Pain Revised.esm
Sweet Pain.esm
Sweet Pain NV.esm
MoreMojave.esm
Mojave Scenery Overhaul - A World of Less Pain Patch.esm
TLD_Travelers.esm
Lived-In AIO - TLD Patch.esm
Mojave Scenery Overhaul - TLD Patch.esm
Faction Wasteland Presence.esm
Mojave Raiders Lite.esm
Mojave Raiders Lite - TTW Patch.esm
Mojave Wildlife (FO3-Style + No Chanced).esp
Mojave Wildlife - TTW Patch.esm
SD_Transporters.esp
Home and Safehouse Tweaks.esm
mil.esp
mil-TTWPlacements.esp
mil_Add-On.esp
Tactapack.esp
ZL_Armaments_Remastered.esm
zlArms3DNPCsPatch.esp
TTW Dialogue and Interactions Expansion Overhaul.esp
PerformanceOfTheTitans - TTW Patch.esm
TLD_Travelers - TTW Patch.esm
ATMOS Ambient Overhaul.esp
TTW FaceGen Fix.esp
TTW No PipBoy Glove Equipping or Race Changes.esp
The Mod Configuration Menu.esp
AmmoScriptFixes.esp
CriticalEffectFixes.esp
ExRB-TTW.esp
Vanilla UI Plus.esp
JustAssortedMods.esp
JBTImproved.esp
JIP Companions Command & Control.esp
Stash Organizer.esp
QuickSelect.esp
TTW Quick Start.esp
TTW Quick Start Item Remover.esp
Wasteland Starting Gear DC.esp
TTW No Free Levelup Quick Start.esp
TTW Quick NV Train Start.esp
DelayDLCRedux.esp
DelayDLCReduxPOPP.esp
TTWTransportalponderEx.esp
SD_Transporters spelling.esp
Benny Humbles You and Steals Your Stuff.esp
TLD LVLI Total Overhaul.esp
SP TTW Patch.esp
TGMIO_TLD_Patch.esp
MoreMojave DSE- Mojave Scenery Patch.esp
WeaponRequirementSystem.esp
Reload Reloaded.esp
RAD.esp
RAD-Fixed-TTW.esp
Quickthrow.esp
QuickthrowTweaks.esp
Supplemental Ammo Crafting.esp
TTWPerkOverhaul.esp
DIEO - Tale of Bi Wastelands Patch.esp
DIEO - AWOPFO3 Patch.esp
Famine.esp
Famine - Flora.esp
Famine - Flora TTW.esp
GRA Scavenger Hunt Unbalanced.esp
Simple Attack Reactions - NV+TTW.esp
MigPowerAttack.esp
SMAC - Simple Melee Attack Cancel and Parry.esp
Hitstop.esp
Enhanced Movement.esp
B42Inertia.esp
Kyu_Ballistics_TTW.esp
BulletTrails.esp
AWSOMER.esp
ATMOS - ExRB Patch.esp
ATMOS NV - TTW Patch.esp
ATMOS Ambient Overhaul - DLC.esp
ATMOS Ambient Overhaul - AWOP Revision.esp
ATMOS Sound Overhaul - TTW.esp
Atmospheric Lighting Tweaks TTW.esp
ATMOS - Atmospheric Lighting Tweaks Patch.esp
LOD additions and improvements - TTW Patch.esp
Wasted LOD rocks.esp
TTW Fallout 3 LOD.esp
VNV LOD Plugins.esp
DNWeathers.esp
Interior Rain.esp
Interior Rain - TTW.esp
CC - Rain.esp
CC - 3D Rain.esp
```

Press F5 to refresh MO2 and if everything went correctly, the list of plugins in the right pane will be reordered. If you installed all of the mods in the guide then the final plugin should be `CC - 3D Rain.esp`, however if you opted to skip some mods then it may be something else. This is fine, as long as you saw the list of plugins being reordered after refreshing.

Click the <button>**Create a Backup**</button> button so if something ever goes wrong you can instantly restore this load order:

![MO2 Backup Load Order Button](../static/img/backup.webp)

# Finishing Notes

Congratulations! You now have a modded Tale of Two Wastelands setup to enjoy. For additional resources such as incompatible mods, performance tips, frequently asked questions and more, see the [Appendix](appendix). Join the [TTW Discord](https://discord.gg/taleoftwowastelands) if you have any additional questions about the guide, modding, or just to chill.

# Additional Mods

Check out our [Additions](additions) page for mods approved and recommended by our team that did not make it into the guide for one reason or another. Unfortunately, we do not have the time or energy to provide support for setups that install extra mods on top of the guide. We cannot stress enough that it is only recommended to add your own mods if you are an experienced modder and know how to manually make conflict resolution patches and sort your load order! If you don't know [how to do that](https://moddinglinked.com/themethod.html) in [xEdit](https://moddinglinked.com/xedit.html), or you are unwilling to spend the time to do so, it is not recommended to add your own mods. You can't just throw a bunch of mods on top of the guide without doing any conflict resolution, or use automated tools like LOOT as a substitute for proper conflict resolution, and expect your game to function as intended. Once again, **we will not support setups that have added any mods**.

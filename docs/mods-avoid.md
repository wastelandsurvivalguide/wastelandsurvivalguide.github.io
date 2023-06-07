# Mods to Avoid
---
In this section we will go over some of the popular mods that shouldn't be used for Fallout New Vegas or
Tale of Two Wastelands, along with an explanation of the issue(s), and what to use instead.
## Utilities to Avoid
### ENBoost
New Vegas Tick Fix has much better memory management than ENBoost, and will increase performance/decrease
stuttering more. ENBoost also needs a lot of system-specific configuration to work properly and can degrade
performance without proper tweaking. ENB in general for New Vegas has been more or less abandoned in favor
of Skyrim and Fallout 4.
### New Vegas Stutter Remover
Irreparably broken by Windows 10 due to relying on undefined behavior. Will cause crashes every ~15 minutes.
Every single feature from NVSR has been replaced in a modern manner by the combination of
[New Vegas Tick Fix](https://www.nexusmods.com/newvegas/mods/66537),
[New Vegas Heap Replacer](https://www.nexusmods.com/newvegas/mods/69779), and
[lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347). These mods also have many great features
that NVSR never had, like the high FPS physics fix. There is no reason to use NVSR, even on Windows 7.
### Save Cleaner
Works by going through your save file and deleting every REFR file, which will most likely break your save.
### Zan AutoPurge Crash Protector/PCB Hotkey
The script command used by these mods is a leftover command from development that forcefully clears buffered
cells from memory, which can lead to unforeseen consequences. Essentially the same function is performed
safely by the INI tweaks in the guide.
## Visual Mods to Avoid
### Asset rips that aren't optimized for games
These assets are either taken from far more recent games like Call of Duty or Fallout 4, or from ArtStation, DeviantArt 
and other sources which showcase 3D models that are meant for 3D animation. In the majority of cases they are *not* 
optimized for a game context, and even the ones which are intended to be game-ready are not intended to be used in a
game as old as Fallout New Vegas. FNV runs on Direct3D 9, a graphics API that received its final update nearly 
**two decades ago**. As such, FNV has a very narrow "pipeline" for draw calls, and having a more powerful computer
cannot overcome this limitation. The tri count for the models in these mods tends to be exponentially higher than anything 
that would normally appear in the game and these mods have been documented to cause performance loss, instability and 
crashing.
It is recommended to look into modding Fallout 4 instead if one wishes to import a bunch of hi-poly assets. As a 
DirectX 11 game, it may be better able to handle such things.
### Borderlands Inspired Numeric Damage
BLIND does not properly destroy the data it creates which will cause your save file to balloon in size and
eventually become unusable. It's also highly performance-intensive and has major bugs causing NPCs to teleport.
### Charge's HD Texture Pack/other AI-upscaled texture packs
Mods upscaled with AI or other lazy techniques generally are not worth the resolution increase. Charge's in
particular upscales files it shouldn't such as normal maps and glow maps, and has textures with
[major artifacting](https://imgur.com/a/9VhuCkm).
### Dragbody 10 Year Anniversary Pack and any other armor replacers
Breaks fixes from YUP & TTW and causes crashing in TTW.
### Electro City
Has broken LOD that can cause crashing. Also includes
[unnecessary bloat and leftover features from a planned quest](https://imgur.com/a/spSSCZD). I recommend
[A Little More Lamplight](https://www.nexusmods.com/newvegas/mods/69226) instead.
### ENB
As mentioned earlier with ENBoost, ENBs were never fully developed for New Vegas and have been abandoned by
the author. They have a ton of bugs and performance issues, such as broken anti-aliasing, transparent objects,
and glowing objects. They also use a lot of [vision-obscuring effects](https://imgur.com/a/8UT356J) like depth
of field, lens flares, bloom, and chromatic aberration to obscure the broken Anti-aliasing, which makes them
very hard to play with. If you need some kind of visual effects we recommend Reshade, but offer no support or 
advice regarding it.
### Fallout Character Overhaul
One of the most notoriously broken-yet-popular mods out there, FCO suffers from a plethora of issues:
- Incorrect file paths cause missing meshes (i.e. "those red triangles"), and pink textures.
- Thoroughly broken installer selects patches for mods you don't have installed and installs
  patches you didn't select.
- Glowing Ghouls file which causes massive performance drops and save bloat.
- Doesn't cover **any** Capital Wasteland NPC, any NPC from a mod, or even every regular NPC in FNV, which
  makes [uncovered NPCs look very out of place](https://imgur.com/a/jMgRjBO).
- Requires the `bLoadFaceGenHeadEGTFiles` INI setting to be enabled, which causes performance loss due
  to generating NPC face textures on the fly in-game. Any which says it requires this setting should not
  be used, full stop. Instead, mod authors must provide FaceGen data and pack it with their mod.
- Overwrites many (YUP)TTW fixes for NPCs, meaning it would need extensive patching with xEdit.
  We recommend [Two Wastelands Redesigned](https://www.nexusmods.com/newvegas/mods/73667) instead, which
  covers all NPCs in both the Capital Wasteland and the Mojave Wasteland. Note that this mod will require
  patching to work correctly with the other mods in the WSG though.
### New Vegas Landscape Overhaul Remastered
Has broken navmeshes, deleted objects with the `Has Tree LOD` flag (Which can cause crashing), many 
floating/clipping objects, and bad balance. I recommend 
[New Vegas Landscape Overhaul Re-Remastered](https://www.nexusmods.com/newvegas/mods/74218) instead. 
Be aware that the mod is still pretty performance-intensive and should be avoided on weaker systems.
### Oversized textures
Based on the object size and how the texture is wrapped around it, you should pick textures with a reasonable
resolution and avoid the very big ones also based on your display resolution. Keep in mind that the textures
will not be displayed with their full resolution at all times, in fact they will be scaled down because of
[mipmaps](https://imgsli.com/MTMwNjU2) based on distance and other factors, as shown with these sliders.
Just for reference, a maximum of 2K at 1080p is a pretty safe bet in terms of balance.
### Project Reality
Very poor scripting, will cause massive performance issues and save bloat.
### Unnecessary Physics
Causes save bloat since the game has to save the position of every individual part of every object you move.
Also very buggy. If you don't believe me try picking up a rubber tire and throwing it around.
### Vault 22 Flora Overhaul
Disables objects with the `Has Tree LOD` flag, which can cause crashing. Also has tons of unnecessary
bloat such as new weapons, enemies, poison effects, skill books, and more. I recommend
[Vault 22 Flora Overhaul Remastered](https://www.nexusmods.com/newvegas/mods/71521) instead. Be aware
that the mod is still pretty performance-intensive and should be avoided on weaker systems.
## Gameplay Mods to Avoid
### Any AI mods
AI mods generally just edit gamesettings, which can both break set scenes (such as Liberty Prime, the vault in Dead Money, 
and saving the Goodsprings settler in the tutorial mission) and make combat more frustrating than realistic. Enemies can 
sometimes detect you the second you enter an interior, so they will all rush you at the entrance.
### Any mods that edit timescale
Vanilla AI packages and scripts are based on the vanilla timescale, and can break and/or run when they aren't supposed to if the timescale is changed.
### DUST
Poorly made mod with almost 1000 errors in FNVEdit. Has a combination of deleted records, null references, missing records, and more.
### FOOK, New Vegas Enhanced Content, and Mission Mojave Ultimate Edition
Massive compilation mods like these eventually get outdated and break other mods, including TTW.
For example, NVEC includes the old version of the Burning Campfires that causes save bloat, an old version of EVE
that is even more performance-intensive than the current one, outdated bug fixes that break YUPTTW, and much more.
### Freeside Open
Suffers from the same engine limitations as Populated Casinos. Adds many new NPCs and pieces of unpolished restored 
content that cause many bugs and performance drops and lacks any sort of performance optimization. 
I recommend [Simple Open Freeside](https://www.nexusmods.com/newvegas/mods/73128) instead; 
be aware it will require patching for TTW due to the train station being in Freeside.
### Increased Wasteland Spawns
Causes save bloat due to using the **PlaceAtMe** function.
### Project Nevada
A "kitchen sink" mod that was on top of the world a decade ago with a lot of features thrown in, but they work better as individual mods. 
Some of the functions don't even work properly, like the sneaking feature which has a scripting issue causing infinite stacking. The chargeable 
energy weapons don't even do more damage, and other stealth-related features break the Dead Money ghosts and Lanius. 
There's also a bug in FO3's FWE which causes Liberty Prime to wander off, breaking the main quest.
#### Replacing Project Nevada:
Although it may seem counterproductive to install a bunch of small mods to replace one big mod, these alternatives are all more efficient 
and performance friendly. They are 100% safe to use, and actually work fully as intended, unlike Project Nevada:
##### Core Module
- Dynamic Crosshair, Bullet Time, Sprint, and more: [Just Assorted Mods](https://www.nexusmods.com/newvegas/mods/66666)
- Grenade Hotkey: [Quick Grenade Hotkey](https://www.nexusmods.com/newvegas/mods/64874) and [Quick Grenade Hotkey Tweaks](https://www.nexusmods.com/newvegas/mods/79358)
- Headwear Overlay: [Helmet Overlay](https://www.nexusmods.com/newvegas/mods/67870)
- Variable Zoom and Slower Backpedaling: [lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347)
  - Enable **Adjustable Scope Zoom** and **Movement Penalties** in the Tweaks menu
- Immersive Health Visuals: [Custom Health and AP Visuals](https://www.nexusmods.com/newvegas/mods/67696)
- Enhanced Vision: [Enhanced Vision](https://eddoursul.win/mods/enhanced-vision/)
- Explosive Entry: [Simple Explosive Entry](https://www.nexusmods.com/newvegas/mods/66992)
- Immersive Primary Needs: [Immersive Primary Needs](https://eddoursul.win/mods/immersive-primary-needs/)
- Inventory Sorter: [ySI - Sorting Ycons](ui#ysi---sorting-ycons)
##### Cyberware Module
- [Cyberware 2281](https://eddoursul.win/mods/cyberware-2281/)
##### Equipment Module
- Fallout 3 Weapons: **Tale of Two Wastelands**
- Classic Fallout Weapons: [Classic Fallout Weapons Remastered](https://www.nexusmods.com/newvegas/mods/73805)
##### Rebalance Module
- Better character progression/combat: [SawyerBatty](overhauls#sawyerbatty)
- Item rarity changes: [Unfound Loot](https://eddoursul.win/mods/unfound-loot/)
- Lethal headshots: [JIP LN NVSE](https://www.nexusmods.com/newvegas/mods/58277) (Enable `bLocalizedDTDR` in the INI)
- Alternate repairing system: [Repair Tools](https://www.nexusmods.com/newvegas/mods/74884) or
  [Alternative Repairing](https://www.nexusmods.com/newvegas/mods/52510)
- Miscellaneous gameplay changes: [lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347)
  - Enable **bMovementPenalties** , **bNoKarmaMessages** , and **bRemoveSneakLabel** in the INI
### Populated Casinos
Poorly made mod with many dirty edits/ITMs/UDRs. The engine also can't handle that many NPCs in the same area without performance loss. 
I recommend [Casino Crowds](https://www.nexusmods.com/newvegas/mods/71037) instead.
### Sinitar's Gameplay Overhaul (Or anything made by Sinitar)
Sinitar knows nothing about modding, as shown by his guide that includes most of the mods on this list. SGO is full of bugs, broken features, awful balance, and Sinitar's trademark typos. Avoid anything he makes at all costs. If you have a few hours and want more information about Sinitar's lies, scamming, and lack of modding knowledge, check out [this](https://docs.google.com/document/d/1F1-6lF8dI4i2Zz8iT-bv_Ci1VO9MSU4MiSUrT5JqgHA/edit) _twenty-eight_ page essay that goes into excruciating detail about it.
### Strip Open
Same deal as Freeside Open; it pushes the engine to its limit with the large worldspace and added NPCs without any performance optimization. 
I recommend [Simple Open Strip](https://www.nexusmods.com/newvegas/mods/73127) instead. It doesn't need any TTW patch unlike Freeside Open.
### True Wasteland Economy
Incredibly script-heavy, will cause save bloat and deteriorate performance over time. Moreover, TTW already overhauls the economy, so no mod is needed here.
### Unlimited Companions (Or any other companion-related mods)
Unlimited Companions re-compiles every script in the game and will break many mods. If you want unlimited companions,
or other companion-related features like equipment managing, infinite ammo, combat-ready companions, and much more,
use [JIP Companions Command and Control](https://www.nexusmods.com/newvegas/mods/50468). Before installing any mods
that edit companion behavior, you should check if JIP CCC already does it.
## Content Mods to Avoid
### CAGE - Continue After Games Ending
Broken, use [Functional Post Game Ending](https://www.nexusmods.com/newvegas/mods/66726) 
or [FPGE Lite](https://www.nexusmods.com/newvegas/mods/73668) instead.
### Classic Fallout Weapons
Countless broken meshes and leveled lists, will cause crashes. I recommend 
[Classic Fallout Weapons Remastered](https://www.nexusmods.com/newvegas/mods/73805) instead.
### Honest Hearts Reborn
Re-compiles every script in the game, so if you want to use it you must clean it in FNVEdit first. It will still have many bugs after cleaning though.
### More Perks
Made in 2010 without the use of any script extenders, so many of the perks are broken or have poor implementation. 
Use [More Perks Reimagined](https://www.nexusmods.com/newvegas/mods/76584) instead.
### NV Interiors
Causes save bloat due to the large amount of havok-enabled items that all have their individual positions stored on the save when you enter an interior. Use [NV Interiors Remastered](https://www.nexusmods.com/newvegas/mods/71228) instead, or run [Simple Cell Save Bloat Fixer](https://www.nexusmods.com/newvegas/mods/72872) on the original mod.
### TTW Interiors
Same issues as NV Interiors above, but even if you were to apply the save bloat fix, it still won't be compatible with TTW 3.3. Avoid this one altogether for now.
### Weapon Mods Expanded/Extended
Overwrites TTW/Weapon Mesh Improvement Mod's mesh fixes and requires conflict resoluton with any mods 
that edit weapon records. Also very unbalanced in my opinion, since many of the mods are either silencers 
or damage increases.
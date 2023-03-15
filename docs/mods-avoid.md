# Mods to Avoid

In this section we will go list some of the popular mods that shouldn't be used for Fallout New Vegas or
Tale of Two Wastelands, along with an explanation of the issue(s), and what to use instead.

## Utilities to Avoid

### New Vegas Stutter Remover

Irreparably broken by Windows 10 due to relying on undefined behavior. Will cause crashes every ~15 minutes.
Every single feature from NVSR has been replaced in a modern manner by the combination of
[New Vegas Tick Fix](https://www.nexusmods.com/newvegas/mods/66537),
[New Vegas Heap Replacer](https://www.nexusmods.com/newvegas/mods/69779), and
[lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347). These mods also have many great features
that NVSR never had, like the high FPS physics fix. There is no reason to use NVSR, even on Windows 7.

### ENBoost

New Vegas Tick Fix has much better memory management than ENBoost, and will increase performance/decrease
stuttering more. ENBoost also needs a lot of system-specific configuration to work properly and can degrade
performance without proper tweaking. ENB in general for New Vegas has been more or less abandoned in favor
of Skyrim and Fallout 4.

### Zan AutoPurge Crash Protector/PCB Hotkey

The script command used by these mods is a leftover command from development that forcefully clears buffered
cells from memory, which can lead to unforeseen consequences. Essentially the same function is performed
safely by the INI tweaks in the guide.

### Save Cleaner:

Works by going through your save file and deleting every REFR file, which will most likely break your save.

## Any Bugfix/Unoffical Patch Mod

TTW already contains its own bugfixes and has its own unofficial patch (YUPTTW). As a result, the FNV
bugfix mods like YUP, Unofficial Patch NVSE, etc. will conflict with or break the fixes already included in TTW.

## Visual Mods to Avoid

### ENB

As mentioned earlier with ENBoost, ENBs were never fully developed for New Vegas and have been abandoned by
the author. They have a ton of bugs and performance issues, such as broken anti-aliasing, transparent objects,
and glowing objects. They also use a lot of [vision-obscuring effects](https://imgur.com/a/8UT356J) like depth
of field, lens flares, bloom, and chromatic aberration to obscure the broken Anti-aliasing, which makes them
very hard to play with. If you need some kind of visual effects we recommend using a ReShade preset instead,
such as [Vibrance](https://www.nexusmods.com/newvegas/mods/76715) or
[Vanilla Plus ReShade Preset](https://www.nexusmods.com/newvegas/mods/71772).

### Oversized textures

Based on the object size and how the texture is wrapped around it, you should pick textures with a reasonable
resolution and avoid the very big ones also based on your display resolution. Keep in mind that the textures
will not be displayed with their full resolution at all times, in fact they will be scaled down because of
[mipmaps](https://imgsli.com/MTMwNjU2) based on distance and other factors, as shown with these sliders.
Just for reference, a maximum of 2K at 1080p is a pretty safe bet in terms of balance.

### Charge's HD Texture Pack/other AI-upscaled texture packs

Mods upscaled with AI or other lazy techniques generally are not worth the resolution increase. Charge's in
particular upscales files it shouldn't such as normal maps and glow maps, and has textures with
[major artifacting](https://imgur.com/a/9VhuCkm).

### Borderlands Inspired Numeric Damage

BLIND does not properly destroy the data it creates which will cause your save file to balloon in size and
eventually become unusable. It's also highly performance-intensive and has major bugs causing NPCs to teleport.

### Fallout Character Overhaul

One of the most notoriously broken-yet-popular mods out there, FCO suffers from a plethora of issues:

- Incorrect file paths cause missing meshes (i.e. "those red triangles"), and pink textures.
- Thoroughly broken installer selects patches for mods you don't have installed and installs
  patches you didn't select
- Glowing Ghouls file which causes massive performance drops and save bloat.
- Doesn't cover **any** Capital Wasteland NPC, any NPC from a mod, or even every regular NPC in FNV, which
  makes [uncovered NPCs look very out of place](https://imgur.com/a/jMgRjBO).
- Requires the `bLoadFaceGenHeadEGTFiles` INI setting to be enabled, which causes performance loss due
  to generating NPC face textures on the fly in-game. Any which says it requires this setting should not
  be used, full stop. Instead, mod authors must provide FaceGen data and pack it with their mod.
- Overwrites many (YUP)TTW fixes for NPCs, meaning it would need extensive patching with xEdit.
  We recommend [Two Wastelands Redesigned](https://www.nexusmods.com/newvegas/mods/73667) instead, which
  covers all NPCs in both the Capital Wasteland and the Mojave Wasteland.

### Handheld Pip-Boys, such as the 2500

All hand-held Pip-Boys share the [same common visual bugs](https://imgur.com/a/3NBafn5) that occur if
you enter/exit your Pip-Boy too fast. The methods these mods use to hide the Pip-Boy in third person
are also quite janky, as they were made before NVSE extensions like JIP LN. These bugs and quirks have
mostly been removed with [Handheld Fixes](https://www.nexusmods.com/newvegas/mods/76009) though. I still
recommend either the [2500a](https://www.nexusmods.com/newvegas/mods/49732) or
[2000 Mk VI](https://www.nexusmods.com/newvegas/mods/65980) for wrist-mounted Pip-Boys.

### Electro City

Has broken LOD that can cause crashing. Also includes
[unnecessary bloat and leftover features from a planned quest](https://imgur.com/a/spSSCZD). I recommend
[A Little More Lamplight](https://www.nexusmods.com/newvegas/mods/69226) instead (already in the guide).

### Unnecessary Physics

Causes save bloat since the game has to save the position of every individual part of every object you move.

### Vault 22 Flora Overhaul

Disables objects with the `Has Tree LOD` flag, which can cause crashing. Also has tons of unnecessary
bloat such as new weapons, enemies, poison effects, skill books, and more. I recommend
[Vault 22 Flora Overhaul Remastered](https://www.nexusmods.com/newvegas/mods/71521) instead. Be aware
that the mod is still pretty performance-intensive and should be avoided on weaker systems.

### New Vegas Landscape Overhaul Remastered

Has broken navmeshes, deleted objects with the `Has Tree LOD` flag (Which can cause crashing), many floating/clipping objects, and bad balance. I recommend [New Vegas Landscape Overhaul Re-Remastered](https://www.nexusmods.com/newvegas/mods/74218) instead. Be aware that the mod is still pretty performance-intensive and should be avoided on weaker systems.

### Project Reality

Very poor scripting, will cause massive performance issues and save bloat. If you want a different weather mod than DN Weathers, I recommend either [Altitude](https://www.nexusmods.com/newvegas/mods/71404), [Yellow Goodbye](https://www.nexusmods.com/newvegas/mods/67277), or [Clarity](https://www.nexusmods.com/newvegas/mods/62481) instead.

## Gameplay Mods to Avoid

### Project Nevada

A "kitchen sink" mod that was on top of the world a decade ago, but

- it has a lot of features thrown in, but they work better as individual mods. Some of the functions don't even work properly, like the sneaking feature which has a scripting issue causing infinite stacking. The chargeable energy weapons don't even do more damage, and other stealth-related features break the ghosts and Lanius. There's also a bug in FO3's FWE which causes Liberty Prime to wander off.

#### Replacing Project Nevada:

Although it may seem counterproductive to install a bunch of small mods to replace one big mod, these alternatives are all more efficient and performance friendly. They are 100% safe to use, and actually work, unlike Project Nevada:

##### Core Module

- Dynamic Crosshair, Bullet Time, Sprint, and more: [Just Assorted Mods](https://www.nexusmods.com/newvegas/mods/66666)
- Grenade Hotkey: [Quick Grenade Hotkey](https://www.nexusmods.com/newvegas/mods/64874) and [Quick Grenade Hotkey Tweaks](https://www.nexusmods.com/newvegas/mods/79358)
- Headwear Overlay: [Helmet Overlay](https://www.nexusmods.com/newvegas/mods/67870)
- Variable Zoom and Slower Backpedaling: [lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347) (Enable ### bAdjustableScopeZoom### and ### bMovementPenalties### in the INI)
- Immersive Health Visuals: [Custom Health and AP Visuals](https://www.nexusmods.com/newvegas/mods/67696)
- Enhanced Vision: [Enhanced Vision](https://eddoursul.win/mods/enhanced-vision/)
- Explosive Entry: [Simple Explosive Entry](https://www.nexusmods.com/newvegas/mods/66992)
- Immersive Primary Needs: [Immersive Primary Needs](https://eddoursul.win/mods/immersive-primary-needs/)
- Inventory Sorter: [Universal Item Sorter](https://www.nexusmods.com/newvegas/mods/63867)

##### Cyberware Module:###

- [Cyberware 2281](https://eddoursul.win/mods/cyberware-2281/)

##### Rebalance Module

- Better character progression/combat: [JSawyer Ultimate Edition](https://www.nexusmods.com/newvegas/mods/61592) (Enable `bSurvivalModeDamage` in the INI)
- Item rarity changes: [Famine](https://www.nexusmods.com/newvegas/mods/74985)
- Lethal headshots: [JIP LN NVSE](https://www.nexusmods.com/newvegas/mods/58277) (Enable `bLocalizedDTDR` in the INI)
- Alternate repairing system: [Repair Tools](https://www.nexusmods.com/newvegas/mods/74884) or
  [Alternative Repairing](https://www.nexusmods.com/newvegas/mods/52510)
- Miscellaneous gameplay changes: [lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347) (Enable ### bMovementPenalties### , ### bNoKarmaMessages### , and ### bRemoveSneakLabel### in the INI)

##### Equipment Module

- Fallout 3 Weapons: **Tale of Two Wastelands**
- Classic Fallout Weapons: [Classic Fallout Weapons Remastered](https://www.nexusmods.com/newvegas/mods/73805)

### FOOK, New Vegas Enhanced Content, and Mission Mojave Ultimate Edition

Massive compilation mods like these eventually get outdated and break other mods, including TTW.
For example, NVEC includes the old version of the Burning Campfires that causes save bloat, an old version of EVE
that is even more performance-intensive than the current one, outdated bug fixes that break YUPTTW, and much more.

### Unlimited Companions (Or any other companion-related mods)

Unlimited Companions re-compiles every script in the game and will break many mods. If you want unlimited companions,
or other companion-related features like equipment managing, infinite ammo, combat-ready companions, and much more,
use [JIP Companions Command and Control](https://www.nexusmods.com/newvegas/mods/50468). Before installing any mods
that edit companion behavior, you should check if JIP CCC already does it.

### Populated Casinos

Poorly made mod with many dirty edits/ITMs/UDRs. The engine also can't handle that many NPCs in the same area without performance loss. I recommend [Casino Crowds](https://www.nexusmods.com/newvegas/mods/71037) instead.

### Freeside Open

Suffers from the same engine limitations as Populated Casinos. Adds many new NPCs and pieces of unpolished restored content that cause many bugs and performance drops and lacks any sort of performance optimization. I recommend [Simple Open Freeside](https://www.nexusmods.com/newvegas/mods/73128) instead.

### Strip Open

Same deal as Freeside Open, it pushes the engine to its limit with the large worldspace and added NPCs without any performance optimization. I recommend [Simple Open Strip](https://www.nexusmods.com/newvegas/mods/73127) instead.

### Increased Wasteland Spawns

Causes save bloat due to using the ### PlaceAtMe### function. I recommend [Mojave Wildlife](https://www.nexusmods.com/newvegas/mods/64638) (I recommend the ### Vanilla No Chanced Spawns Version### version, though any version will work) and [The Living Desert](https://www.nexusmods.com/newvegas/mods/64623) (already in the guide) instead.

### True Wasteland Economy

Incredibly script-heavy, will cause save bloat and deteriorate performance over time. I recommend [Economy Overhaul](https://www.nexusmods.com/newvegas/mods/62899) or [New Vegas Improved Economy](https://www.nexusmods.com/newvegas/mods/71604) instead.

### DUST

Poorly made mod with almost 1000 errors in FNVEdit. Has a combination of deleted records, null references, missing records, and more.

### Sinitar's Gameplay Overhaul (Or anything made by Sinitar)

Sinitar knows nothing about modding, as shown by his guide that includes most of the mods on this list. SGO is full of bugs, broken features, awful balance, and Sinitar's trademark typos. Avoid anything he makes at all costs. If you have a few hours and want more information about Sinitar's lies, scamming, and lack of modding knowledge, check out [this](https://docs.google.com/document/d/1F1-6lF8dI4i2Zz8iT-bv_Ci1VO9MSU4MiSUrT5JqgHA/edit) _twenty-eight_ page essay that goes into excruciating detail about it.

### Any AI mods

AI mods generally just edit gamesettings, which can both break set scenes (such as the vault in Dead Money and saving the Goodsprings settler in the tutorial mission) and make combat more frustrating than realistic. Enemies can sometimes detect you the second you enter an interior, so they will all rush you at the entrance.

### Any mods that edit timescale

Vanilla AI packages and scripts are based on the vanilla timescale, and can break and/or run when they aren't supposed to if the timescale is changed.

## Content Mods to Avoid

### Weapon Mods Expanded/Extended

Overwrites Weapon Mesh Improvement Mod's mesh fixes and requires conflict resoluton with any mods that edit weapon records. Also very unbalanced in my opinion, since many of the mods are either silencers or damage increases.

### More Perks

Made in 2010 without the use of any script extenders, so many of the perks are broken or have poor implementation. Use [More Perks Reimagined](https://www.nexusmods.com/newvegas/mods/76584) instead.

### CAGE - Continue After Games Ending

Broken, use [Functional Post Game Ending](https://www.nexusmods.com/newvegas/mods/66726) or [FPGE Lite](https://www.nexusmods.com/newvegas/mods/73668) instead.

### NV Interiors Project

Causes save bloat due to the large amount of havok-enabled items that all have their individual positions stored on the save when you enter an interior. Use [NV Interiors Remastered](https://www.nexusmods.com/newvegas/mods/71228) instead.

### Classic Fallout Weapons

Countless broken meshes and leveled lists, will cause crashes. I recommend [Classic Fallout Weapons Remastered](https://www.nexusmods.com/newvegas/mods/73805) instead.

### Honest Hearts Reborn

Re-compiles every script in the game, so if you want to use it you must clean it in FNVEdit first. It will still have many bugs after cleaning though.

---

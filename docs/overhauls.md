# Overhauls
---
:::danger Spicy Mods Ahead
The mods in this section may change the game dramatically, and some are **very challenging**. Don't overdo it and remember that everything is **optional**!
:::
### [Benny Humbles You](https://www.nexusmods.com/newvegas/mods/71112)
Resets the player's Level, XP, Skills, Perks and Karma upon travelling from the CW to the Mojave for the first time; optionally confiscates gear as well. 
#### Installation:
- Main File - Benny Humbles You and Steals Your Stuff
  - After install, double-click (Benny Humbles You) and Steals Your Stuff in the left pane, choose INI Files & configure the mod to your preferences
- Recommended Optional File - [Nail Gun Semi Auto  Rework](https://www.nexusmods.com/newvegas/mods/74465)
### [BLEED](https://www.nexusmods.com/newvegas/mods/61141)
Overhauls how damage and force is applied, making combat much more unforgiving and closer to classic Fallout. Crippled limbs on crit, burning and bleeding effects and more. 
#### Installation:
- Main File - BLEED
- Patch File - [BLEED TTW - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945)
### [BURN](https://www.nexusmods.com/newvegas/mods/76060)
Causes unprotected humans and flammable creatures to panic and flee when set on fire, adding an extra gameplay mechanic for incendiary weapons and ammo. This mod restores some companion screams cut from FNV which some people find disturbing. Give this one a skip if realistic screams of pain would be a trigger for you. 
#### Installation:
- Main File - BURN - Hardcore Fire Effects
- Patch File - BURN - TTW Patch (Script Runner)
- Optional File - [BLEED and BURN Scriptrunner Patch](https://www.nexusmods.com/newvegas/mods/76489)
### [Charisma Tweaks](https://www.nexusmods.com/newvegas/mods/71310)
Barter and speech checks (And optionally, ALL skill checks) take into account both your charisma and the intelligence of the person you're speaking to. Optionally, it can use the charisma of the person you're speaking to instead.
### [CyberJAM](https://www.nexusmods.com/newvegas/mods/74655)
Integrates Cyberware 2281 and Just Assorted Mods, allowing them to interact like the old PN Core and Cyberware modules. Reintroduces and expands upon the cut Wired Synapses implant. 
#### Installation:
- Main File - CyberJAM
- Optional File - CyberJAM INI File
### [Cyberware 2281](https://eddoursul.win/mods/cyberware-2281/)
Recreates the functionality of the Cyberware implants from Project Nevada, without all the problems caused by that ancient mod.
#### Installation:
- Main File - Cyberware 2281
- Patch File - Cyberware 2281 TTW Patch
### [GRA Uniques Relocated](https://www.nexusmods.com/newvegas/mods/68153)
Makes the GRA unique weapons unavailable for purchase and scatters them across the Mojave, Zion, and the Big MT - just like all the other unique weapons. 
#### Installation:
- Main File - GUWR Unbalanced
- Patch File - [GRA Unique Weapons Relocated - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945)
### JIP LN INI Tweaks
Customizes some settings in JIP LN to make the game more dynamic and challenging, for example by distributing weapon mods to NPCs. Double-click **JIP LN NVSE** in the left pane and click **INI Files**. Paste in the following, replacing the existing contents:
```ini showLineNumbers title="jip_nvse.ini"
[GamePatches]
bIgnoreDTDRFix=1
;	Fixes the Ignore DT/DR effect (mostly found in some melee/unarmed weapons), which is completely broken in the game.
;	In addition, modifies the game's damage-reduction calculation, such that DT is subtracted BEFORE DR is applied.

bEnableFO3Repair=1
;	Brings back the FO3-style item repair menu to FNV. The max repair amount of items will be capped to the player's
;	(Repair Skill * 0.6) + 40. For example, with 50 skill, items can only be repaired for up to 70% of their max health,
;	as opposed to 100% as before, regardless of skill level.

bEnableBigGunsSkill=0
;	Restores Big Guns as a fully-functional, playable skill.

bProjImpactDmgFix=1
;	Fixes an engine bug where weapons which fire projectiles that explode upon impact (i.e. Missile Launcher, Grenade
;	Launcher, etc.) would only apply the damage from the explosion, even on direct hit, ignoring the weapon's hit damage.

bGameDaysPassedFix=1
;	Fixes an engine bug where the 'GameDaysPassed' and 'GameHour' global timers would "freeze" and stop increasing in
;	game real-time (they would only be increased when sleeping, waiting or fast traveling). This issue directly affected
;	hardcore needs build-up, which would also freeze in game real-time.

bHardcoreNeedsFix=1
;	Fixes an issue where some hardcore needs could, for undetermined reasons, end up having negative values. This resulted
;	in hardcore needs not increasing at the correct rate/at all.

bNoFailedScriptLocks=1
;	Fixes an engine behavior where a script that has failed (due to any reason) at some point during execution will be
;	effectively disabled by the game and will no longer be processed again until the game is restarted.

bDoublePrecision=1
;	Modifies the game's code such that arithmetic/relational operations in scripts are calculated/evaluated with
;	double-precision floating-point accuracy (instead of single-precision). This was causing various issues, where
;	relational operators (==, !=, <=, <, >=, >) were not evaluating correctly, and numeric calculations ended with
;	inaccurate results (this was especially observed with relatively high absolute values). Additionally, this patch also
;	guarantees no script errors/crashes in cases of division by zero.

bQttSelectShortKeys=1
;	If enabled, (a) when selecting an item stack in either the inventory, container, or barter menus, holding SHIFT will
;	transfer/drop the entire stack, whilst holding CTRL will transfer/drop a single item from the stack - thus skipping
;	the quantity-select menu. (b) Picking up from a container a stack of items that are weightless (such as ammo on
;	non-hardcore mode) will bring up the quantity-select menu, instead of automatically picking the entire stack.

bLocalizedDTDR=0
;	When enabled, a distinction will be made between head-armor and body-armor when applying damage reduction from DR/DT.
;	Head hits will benefit only from DT/DR gained from worn head-armor (if any), whereas body hits, in similar fashion,
;	only from DT/DR gained from worn body-armor. (Note: Requires bIgnoreDTDRFix to be enabled).

bVoiceModulationFix=1
;	Adds voice modulation (a slight distortion effect) for talking activators and holotapes.

bSneakBoundingBoxFix=1
;	Fixes a longstanding Bethesda games' bug where the dimensions of the collision bounding box encapsulating the player
;	(as well as all NPCs) remained fixed and did not scale to correspond to body posture. This, effectively, had made it
;	impossible to crawl through breaches and spaces when crouched, despite being able to easily fit through them.
;	This patch fixes this issue for the player character and human companions.

bEnableNVACAlerts=0
;	If NVAC is installed, enable this setting to receive in-game alerts in the event an exception has occurred in the game's
;	code that was successfully handled by NVAC. You will be notified by a corner message, and the error's details will be
;	printed to the console. This should make it a lot easier to identify the precise circumstances/location in which the
;	error has occurred.

bLoadScreenFix=1
;	Forces the load menu to give priority to location-specific load screens (if any are found to match current location)
;	when selecting a load screen to display.

bNPCWeaponMods=1
uWMChancePerLevel=1
uWMChanceMin=5
uWMChanceMax=30
;	When enabled, all NPCs will have a chance for their main weapon to include weapon mods. The chance is based on each NPC's level -
;	the higher the level, the greater the chance. The type of mod(s) is selected randomly from the ones available for the particular
;	weapon. Weapons have a chance to include multiple mods, though 2 mods is rare, and a fully-modded weapon is uncommon.
;	uWMChancePerLevel controls chance % increase per NPC level.
;	uWMChanceMin and uWMChanceMax set the minimum/maximum possible chance.
;	Formula: Chance(%) = MinOf( uWMChanceMax , MaxOf( uWMChanceMin , Level * uWMChancePerLevel ) )

uNPCPerks=1
;	Unlocks perks for NPCs (perks will no longer be restricted to the player character and player teammates).
;	This option has 2 modes:
;	uNPCPerks=1 : Script commands such as AddPerk/RemovePerk/HasPerk/etc. will work on ANY NPC in the game.
;	uNPCPerks=2 : (In addition to the above) Perks will automatically be added to human NPCs:
;				  * 1 random starting Trait.
;				  * 1 random Perk for every 3 levels of the NPC, up to 10 perks max.

bCreatureSpreadFix=1
;	Fixes a bug where all non-human actors suffer a massive penalty to weapon-spread (equal to the fUnaimedSpreadPenalty game setting)
;	due to not having weapon aiming animations, and therefore not technically being able to aim. Note that although this is almost
;	certainly a bug and an oversight of the game devs, this fix will make certain enemies much deadlier and may affect game balance.
```
### [Rebuild the Capital](https://www.nexusmods.com/newvegas/mods/68030)
Expand the Brotherhood of Steel and their role in the wasteland following the events of Broken Steel. Features new armors, weapons, quests, perks, NPCs, and a recruitment system.
#### Installation:
- Main File - Rebuild the Capital 2.35
In the FOMOD check **No Pony Express Boxes** then click <button>Install</button>.
- Patch File - Another Interior Patch
- Patch File - Desert Natural Weathers Patch
- Patch File - Root n Loot Patch
### [Save Restrictions](https://www.nexusmods.com/newvegas/mods/72672)
Allows you to set various restrictions on when the game can be saved. Double-click the mod in the left pane & select **INI Files** to set desired restrictions.
### [SawyerBatty](https://www.nexusmods.com/newvegas/mods/75598)
TTW version of the famous [JSawyer](https://fallout-archive.fandom.com/wiki/JSawyer#Main_features) mod by FNV's director Josh Sawyer. Changes to carry weight, level cap & Logan's Loophole were reverted. The pre-order packs are placed in logical areas around Springvale and Megaton when you start in DC.
#### Installation:
- Main File - TTWSawyerBatty
- Patch File - [SawyerBatty TTW - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945)
- Patch File - [SawyerBatty TTW - Uncut Wasteland Patch](https://www.nexusmods.com/newvegas/mods/79005)
### [Simple Diseases](https://www.nexusmods.com/newvegas/mods/74802)
A simple and modular disease system for Fallout New Vegas. Adds a chance to get sick from eating bad food and drinking untreated water as well as the risk of contracting diseases from wild animal attacks.
### [Three Perk Bounty](https://www.nexusmods.com/newvegas/mods/77783)
Presents a random selection of 3 perks to choose from instead of the full perk list. You may re-roll up to three times, but with bad luck you may receive a negative "curse" perk which lasts until next level.
### [Weapon Requirements System](https://www.nexusmods.com/newvegas/mods/69161)
Makes weapon Strength and Skill requirements matter, allowing you to equip any weapon but assigning significant dynamic penalties for those you aren't proficient with.
#### Installation:
- Main File - Weapon Requirements System
- Patch File - [Weapon Requirements System - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945)

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
- Recommended Optional File - [Nail Gun Semi Auto Rework](https://www.nexusmods.com/newvegas/mods/74465)

### [Charisma Tweaks](https://www.nexusmods.com/newvegas/mods/71310)

Barter and speech checks (And optionally, ALL skill checks) take into account both your charisma and the intelligence of the person you're speaking to. Optionally, it can use the charisma of the person you're speaking to instead.

### [GRA Uniques Relocated](https://www.nexusmods.com/newvegas/mods/68153)

Makes the GRA unique weapons unavailable for purchase and scatters them across the Mojave, Zion, and the Big MT - just like all the other unique weapons.

#### Installation:

- Main File - GUWR Unbalanced
- Patch File - [GRA Unique Weapons Relocated - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945)

### [Hardcore Perk Every Level](https://www.nexusmods.com/newvegas/mods/79005)

Changes TTW's Hardcore mode to grant perk every level, instead of every two.

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

bLocalizedDTDR=1
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
- Patch File - Trail of Crumbs Patch

### [Weapon Requirements System](https://www.nexusmods.com/newvegas/mods/69161)

Makes weapon Strength and Skill requirements matter, allowing you to equip any weapon but assigning significant dynamic penalties for those you aren't proficient with.

#### Installation:

- Main File - Weapon Requirements System
- Patch File - [Weapon Requirements System - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945)

### [JIP Localized Damage Fix](https://www.nexusmods.com/newvegas/mods/76330)

Standardizes all of the player's body part damage multipliers when using the setting `bLocalizedDTDR=1` in JIP LN NVSE, which is enabled in our INI recommendations. 

### [New Blood](https://www.nexusmods.com/newvegas/mods/69161)

Sweet's take on a lighter alternative to BLEED's damage overhaul.

### [Aid Addon](https://www.nexusmods.com/newvegas/mods/74379)

Featuring 16 new healing items and new Survival healing options, this mod is a nice addition to New Blood, adding items to deal with the actual bleed effect, among many others. All configurable via INI.

```ini showLineNumbers title="Aid Addon Config.ini"
[Aid Addon Settings]
bDocBagUseInCombat=0
bMedkitUseInCombat=0
;Aid Addon's design philosophy is that medkits are a cost effective way to recover health outside of combat, but stimpaks are still more ideal while in combat.
;Not using doc bags in combat makes medx and army syrettes much more valuable and important

bDocBagPassTime=1
bMedkitPassTime=1
;having these items pass time is intended to complement these being used outside of combat, to help justify why they can't be used outside of combat, and how effective they are compared to doctors

fMedKitTime=2.0
fDocBagTime=1.0
;number of hours each passes when used

iSteroidHealthBoost=30
;how much max health will be increased by using steroids

fSplintHealing=8.0
;amount of health healed out of 100 when using a splint

;amount of max health healed by each medkit
;1.0 = max health; 0.35 is 35% health; default is posted after each one
fMedkitMultImprovised=0.3
;0.3
fMedkitMultSurvival=0.6
;0.6
fMedkitMultSmall=0.5
;0.5
fMedkitMultArmy=0.7
;0.7
fMedkitMultScientific=1.0
;1.0
fMedkitMultField=1.5
;1.5
fMedkitMultScientificRads=0.7
;0.35
;1.0 = 1000 rads; 0.35% is 350 rads
;keep in mind this value is multiplied by your survival/medicine skill x 100, so the larger items exceed 1.0 so that they don't require 100 med skill to be decent

;setting these values to a value above 1 will repeat the integration of it's item, to increase it's saturation
;setting this to 0 will have no effect
iAntisepticCount=2
iBandageCount=4
iBandageMilitaryCount=1
iSplintCount=1
iSyretteCount=1
iHemostaticPillCount=1
iBloodDrawKitCount=2
iBloodDrawKitPreservedCount=1
iBloodPackPreservedCount=1
iMedkitImprovisedCount=1
iMedkitSurvivalCount=1
iMedkitSmallCount=1
iMedkitArmyCount=1
iMedkitScientificCount=1
iMedkitFieldCount=1
iCombatStimCount=2
iStimpakUltraCount=1
iCombatStimUltraCount=1
iEmptyBloodPackCount=1
iCountPainkillers=1
iCountAfterburnerGum=1

iScalpelSaturationIncrease=3
;simply increases the saturation of scalpels in loot for easier crafting
;can be set to 0

iScissorsSaturationIncrease=3
;simply increases the saturation of scissors in loot for easier crafting
;can be set to 0

bSteroids=1
;0 or 1, can't be increased further like the other settings above

;Icon Changes
iIconCombatStim=0
;0 is default, 1 is non-vanilla style, 2 is vanilla med-x
iIconMorphineSyrette=0
;0 is default, 1 is non-vanilla style, 2 is vanilla med-x
iIconHemostaticPill=0
;1 for vanilla buffout icon
iIconMedkitArmy=0
;0 is default, 1 is non-vanilla style, 2 is vanilla doctor's bag
iIconMedkitField=0
;0 is default, 1 is non-vanilla style, 2 is vanilla doctor's bag
iIconMedkitImprovised=0
;0 is default, 1 is non-vanilla style, 2 is vanilla doctor's bag
iIconMedkitScientific=0
;0 is default, 1 is non-vanilla style, 2 is vanilla doctor's bag
iIconMedkitSmall=0
;0 is default, 1 is non-vanilla style, 2 is vanilla doctor's bag
iIconMedkitSurvival=0
;0 is default, 1 is vanilla lunchbox, 2 is vanilla doctor's bag
iIconSplint=0
;0 is default, 1 has no text on it, 2 has no lines on it, 3 has a funny diagram on it

;Name Changes
iMorphineSyretteName=1
;turned on by default, this renames the Morphine Syrette to Med-X Syrette

[Aid Debug]
iDebug=0
;turn this on to have the console print messages detailing which items have been integrated, and showing how many times each one has looped if the Aid Addon Settings are set above 1
```

### [Sweet Consumables](https://www.nexusmods.com/newvegas/mods/73437)

Top to bottom overhaul of consumable and misc items. Goes well with the previous two mods.

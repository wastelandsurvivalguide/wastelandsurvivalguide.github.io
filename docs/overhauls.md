# Overhauls
---

:::danger Spicy Mods Ahead

The mods in this section may change the game dramatically, and some are **very challenging**. Don't
overdo it and remember that everything is **optional**!

:::

### [AWOP4FO3](https://www.nexusmods.com/newvegas/mods/66265)

##### TTW A World of Pain for Fallout 3

Adds many intense and unique locations to the Capital Wasteland, new items, 4D storage, two companions and a couple of quests.

🌶️🌶️🌶️🌶️〰️

#### Installation:

- Main File - AWOP4FO3
- Optional File - JIP CCC Avatars
- Patch File - [AWOP FO3 - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945)

### [Benny Humbles You](https://www.nexusmods.com/newvegas/mods/71112)

Resets the player's Level, XP, Skills, Perks and Karma upon travelling from the CW to the Mojave for
the first time; optionally confiscates gear as well.

🌶️🌶️〰️〰️〰️

#### Installation:

- Main File - Benny Humbles You and Steals Your Stuff
  - After install, double-click (Benny Humbles You) and Steals Your Stuff in the left pane, choose INI
    Files & configure the mod to your preferences
- Recommended Optional File - [Nail Gun Semi Auto
  Rework](https://www.nexusmods.com/newvegas/mods/74465)

### [BLEED](https://www.nexusmods.com/newvegas/mods/61141)

Overhauls how damage and force is applied, making combat much more unforgiving and closer to classic
Fallout. Crippled limbs on crit, burning and bleeding effects and more.

🌶️🌶️🌶️〰️〰️

#### Installation:

Main File - BLEED

### [BURN](https://www.nexusmods.com/newvegas/mods/76060)

Causes unprotected humans and flammable creatures to panic and flee when set on fire, adding an
extra gameplay mechanic for incendiary weapons and ammo. This mod restores some companion screams
cut from FNV which some people find disturbing. Give this one a skip if realistic screams of pain
would be a trigger for you.

🌶️🌶️〰️〰️〰️

#### Installation:

- Main File - BURN - Hardcore Fire Effects
- Patch File - BURN - TTW Patch (Script Runner)
- Optional File - [BLEED and BURN Scriptrunner Patch](https://www.nexusmods.com/newvegas/mods/76489)

### [Charisma Tweaks](https://www.nexusmods.com/newvegas/mods/71310)

Barter and speech checks (And optionally, ALL skill checks) take into account both your charisma and
the intelligence of the person you're speaking to. Optionally, it can use the charisma of the person
you're speaking to instead.

🌶️〰️〰️〰️〰️

#### Installation:

Main File - Charisma Tweaks

### [Cyberware 2281](https://eddoursul.win/mods/cyberware-2281/)

Recreates the functionality of the Cyberware implants from Project Nevada, without all the problems
caused by that ancient mod.

〰️〰️〰️〰️〰️

#### Installation:

- Main File - Cyberware 2281
- Patch File - Cyberware 2281 TTW Patch

### [CyberJAM](https://www.nexusmods.com/newvegas/mods/74655)

Integrates Cyberware 2281 and Just Assorted Mods, allowing them to interact like the old PN Core and
Cyberware modules. Reintroduces and expands upon the cut Wired Synapses implant.

〰️〰️〰️〰️〰️

#### Installation:

- Main File - CyberJAM
- Optional File - CyberJAM INI File

### [GRA Uniques Relocated](https://www.nexusmods.com/newvegas/mods/68153)

Makes the GRA unique weapons unavailable for purchase and scatters them across the Mojave, Zion, and
the Big MT - just like all the other unique weapons.

🌶️〰️〰️〰️〰️

#### Installation:

- Main File - GUWR Unbalanced
- Patch File - [GRA Unique Weapons Relocated - TTW
  Patch](https://www.nexusmods.com/newvegas/mods/77945)

### [Harder Strip Access](https://www.nexusmods.com/newvegas/mods/71643)

Makes it harder to access The Strip in New Vegas, forcing the player to engage with the early game.

🌶️〰️〰️〰️〰️

#### Installation:

Main File - Harder New Vegas Strip Access

### [Infirmary Overhaul](https://www.nexusmods.com/newvegas/mods/73435)

Changes the infirmary. No limitless healing, rad removing or limb fixing. Your skill in medicine
will greatly affect the amount healed or rads removed.

🌶️〰️〰️〰️〰️

#### Installation:

Main File - Infirmary Overhaul TTW

### JIP LN Tweaks

Customizes some settings in JIP LN to make the game more dynamic and challenging, for example by
distributing weapon mods to NPCs.

🌶️〰️〰️〰️〰️

#### Installation:

Double-click **JIP LN NVSE** in the left pane and click **INI Files**. Paste in the following, replacing the existing contents:

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
bLoadScreenFix=0
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

### [RAD](https://www.nexusmods.com/newvegas/mods/71541)

Radiation now damages your health at a rate of 1% HP per 10 rads until it is removed; the UI
reflects the affected portion in red like in Fallout 4. With hardcore mode enabled, your primary
needs will decrease your AP as well; dehydration penalties are twice as severe.

🌶️🌶️〰️〰️〰️

#### Installation:

Main File - RAD - Overhaul

- Make sure you enable the "JSawyer" setting in the MCM if you are also using SawyerBatty.

### [Rebuild the Capital](https://www.nexusmods.com/newvegas/mods/68030)

Expand the Brotherhood of Steel and their role in the wasteland following the events of Broken Steel.
Features new armors, weapons, quests, perks, NPCs, and a recruitment system.

〰️〰️〰️〰️〰️

#### Installation:

- Main File - Rebuild the Capital
  - In the FOMOD check No Pony Express Boxes then click _Install_.
- Patch File - [Rebuild the Capital - A World of Pain for Fallout 3 Patch](https://www.nexusmods.com/newvegas/mods/77945)

### [ROOG](https://www.nexusmods.com/newvegas/mods/75599)

Restores Fallout 3 weapon degrading, repair and overhauls the difficulty of the game for a
**much harder experience and slower progression**.

🌶️🌶️🌶️🌶️🌶️

#### Installation:

- Main File - ROOG TTW
- Optional File - sawyerbattyROOG

### [Save Restrictions](https://www.nexusmods.com/newvegas/mods/72672)

Allows you to set various restrictions on when the game can be saved.

🌶️🌶️〰️〰️〰️

#### Installation:

Main File - Save Restrictions

- Double-click the mod in the left pane, select **INI Files** and set your desired restrictions
  in `Config\SaveRestrictions\SR.ini`

### [SawyerBatty](https://www.nexusmods.com/newvegas/mods/75598)

TTW version of the famous [JSawyer](https://fallout-archive.fandom.com/wiki/JSawyer#Main_features)
mod by FNV's director Josh Sawyer. Changes to carry weight, level cap & Logan's Loophole were
reverted. The pre-order packs are placed in logical areas around Springvale and Megaton when you
start in DC.

🌶️〰️〰️〰️〰️

#### Installation:

Main File - TTWSawyerBatty

### [Simple Diseases](https://www.nexusmods.com/newvegas/mods/74802)

A simple and modular disease system for Fallout New Vegas. Adds a chance to get sick from eating bad
food and drinking untreated water as well as the risk of contracting diseases from wild animal
attacks.

🌶️🌶️〰️〰️〰️

#### Installation:

Main File - Simple Diseases

### [Three Perk Bounty](https://www.nexusmods.com/newvegas/mods/77783)

Presents a random selection of 3 perks to choose from instead of the full perk list. You may re-roll
up to three times, but with bad luck you may receive a negative "curse" perk which lasts until next
level.

🌶️🌶️〰️〰️〰️

#### Installation:

Main File - Three Perk Bounty

### [Transporters](https://www.nexusmods.com/newvegas/mods/77645)

Take on the Wastelands with a new alternative form of Fast-Travel, with over 37+ travel destinations! It is strongly recommended to disable fast travel when using this mod, which it enables you to do easily via the MCM.

- Main File - SD_Transporters FOMOD
  - Select Tale of Two Wastelands in the FOMOD installer
- Patch File - [SD Transporters - AWOP FO3 Patch](https://www.nexusmods.com/newvegas/mods/77945)

〰️〰️〰️〰️〰️

### [Weapon Requirements System](https://www.nexusmods.com/newvegas/mods/69161)

Makes weapon Strength and Skill requirements matter, allowing you to equip any weapon but assigning
significant dynamic penalties for those you aren't proficient with.

🌶️🌶️〰️〰️〰️

#### Installation:

Main File - Weapon Requirements System

### [Your Buddy Is Dead](https://www.nexusmods.com/newvegas/mods/79635)

NPCs react to encountering the dead bodies of their friends for a short while after death, and for a
brief window will put two and two together to conclude the player had killed a friendly.

🌶️〰️〰️〰️〰️

#### Installation:

Main File - Your Buddy Is Dead

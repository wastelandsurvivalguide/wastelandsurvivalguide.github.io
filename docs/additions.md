import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

# Additions

This section is intended for advanced users who are looking for a more robust modding experience beyond the foundation laid by WSG. <u>Users <b>must</b> be capable of performing their own load order adjustments, patching, and troubleshooting.</u>

:::caution Important!
Do not install this entire section indiscriminately. Pick and choose only the mods that interest you. Otherwise you will end up with a broken game that crashes. The [Basics of xEdit](https://moddinglinked.com/xedit.html) and [The Method](https://moddinglinked.com/themethod.html) can be used to learn the basic principles of patching and conflict resolution.
:::

The WSG team <u>will not</u> provide support for the following mods. Rather, the intent of this section is to provide a list of proven and reliable mods that can be used in conjunction with WSG. In isolation, the majority of these mods will work with the main guide with only minimal patching, though when added in conjunction with one another, they may create a large patching and compatibility burden.


## Fixes
[zlib Updated - NVSE](https://www.nexusmods.com/newvegas/mods/85267) - Updates zlib to the latest version for faster loading and less stutter.

[Lossless Scaling](https://store.steampowered.com/app/993090/Lossless_Scaling/) - Not necessarily a fix per say, but contains fairly robust frame generation capabilities and can functionally double your FPS at the cost of some visual artifact. Would not recommend using the scaling option, ONLY the frame generation. Can be purchased on steam.


## User Interface & HUD
[Alternate Holographic Panel](https://www.nexusmods.com/newvegas/mods/82636) - For use with [No PipBoy in Power Armor](https://www.nexusmods.com/newvegas/mods/66916), provides an improved holographic control panel interface when activating the pip-boy. This mod is useful for those using [STARS](https://www.nexusmods.com/newvegas/mods/76016).

[Dialogue DoF Disabler](https://www.nexusmods.com/newvegas/mods/77220) - Removes the depth of field effect while in the dialogue interface.

[JIP Improved Recipe Menu](https://www.nexusmods.com/newvegas/mods/75920) - Improves usability and aesthetics of the recipe menu.

[PipBoy DoF Disabler](https://www.nexusmods.com/newvegas/mods/77321) - Removes the depth of field effect while in the pip-boy interface.

[Show Water Source H2O](https://www.nexusmods.com/newvegas/mods/85103) - Water sources will show their hydration amount instead of HP when the player is in hardcore mode.
- Currently incompatible with [M.U.X.](https://www.nexusmods.com/newvegas/mods/80642)

[Sleep, Wait, Hardcore Needs](https://www.nexusmods.com/newvegas/mods/85148) - Shows the amount of H2O, FOD, and SLP that will be gained/lost while sleeping.

[Quick Select - A Zelda BOTW Style Quick Menu](https://www.nexusmods.com/newvegas/mods/82249) - Zelda BOTW/TOTK style weapon and item selection menus.

[ySI Expanded](https://www.nexusmods.com/newvegas/mods/84352) - Adds additional ySI sorting subcategories and icons.

[ySI Misc Quest Items Patch](https://www.nexusmods.com/newvegas/mods/81230?tab=files) - Adds additional ySI sorting icons for sheet music, pre-war books, and dog-tags.


## Gameplay 
### Quality of Life
[Auto-Save Manager](https://www.nexusmods.com/newvegas/mods/67248) - Adds timed autosaves, save slots, and incremental/full save hotkeys.

[B42 Optics](https://www.nexusmods.com/newvegas/mods/81641) - Adds working Dual-Render Scopes into Fallout New Vegas!
- Can be performance intensive. If looking for a lightweight alternative, look into [PSRO](https://www.nexusmods.com/newvegas/mods/71781), which is discussed below.
- Requires patches for NV weapons, TTW weapons, and [Real Time Reflections](https://www.nexusmods.com/newvegas/mods/82343).
  - [NV Patch](https://www.nexusmods.com/newvegas/mods/82136)
  - [TTW Patch](https://www.nexusmods.com/newvegas/mods/81884)
  - [RTR Patch](https://www.nexusmods.com/newvegas/mods/82466)
- Also requires patches for weapon addition mods, many of which are already included in the Iron Sights Aligned mod.

[B42 Quickthrow](https://www.nexusmods.com/newvegas/mods/66686) - Adds brand new, modern throwing weapons mechanics, as seen in Metro, COD, Fallout 4 and some other FPS games.
- Recommended to be used with Piber’s patch - [B42 Quickthrow Tweaks - Give Player Perks Method](https://www.nexusmods.com/newvegas/mods/77674?tab=files)
  - Allows perks affecting throwables to work alongside B42 Quickthrow.

[Baka Skill Book Scanner](https://www.nexusmods.com/newvegas/mods/75828) - Dynamic quest markers that highlights nearby skill books, anywhere, anytime.

[Base Object Swapper](https://www.nexusmods.com/newvegas/mods/83934) - Framework for swapping base objects and references. Requires additional mods to utilize its functions, some of which are listed on this page.
- Examples of mods utilizing this function include [Kaleidoscope](https://www.nexusmods.com/newvegas/mods/84017), [Lootable Statics](https://www.nexusmods.com/newvegas/mods/83946), and [Movable Statics Replaced with Lootable Versions](https://www.nexusmods.com/newvegas/mods/83961).

[Basic Retrievable Throwables](https://www.nexusmods.com/newvegas/mods/82211) - Adds any throwable weapon which hits a target to the target's inventory.

[Better Weapon Restrictions](https://www.nexusmods.com/newvegas/mods/81295) - Makes open carry of weapons in restricted areas a hostile action.

[Cookable Grenades](https://www.nexusmods.com/newvegas/mods/81678) - Holding a grenade before throwing it decreases its fuse.

[Companion Carry Weight Adder](https://www.nexusmods.com/newvegas/mods/85266) - Adds the free space of your companions’ inventory to your own.

[Complex Vendors](https://www.nexusmods.com/newvegas/mods/71512) - Makes vendors only buy items related to their profession.

[Consistent Caliber Naming](https://www.nexusmods.com/newvegas/mods/85497) - Renames vanilla ballistic ammo types to be more consistent and match their real-world counterpart.
- Use alongside the TTW Patch provided on the main mod page.
- [CaliberZL](https://www.nexusmods.com/newvegas/mods/85399) and [Tactapack](https://www.nexusmods.com/newvegas/mods/80219) patches are also available on the main mod page.
- A [SPARE - CaliberZL Consistent Caliber Naming Patch](https://www.nexusmods.com/newvegas/mods/85632) is available as well.

[Creatures Aren’t Evil](https://www.nexusmods.com/newvegas/mods/83403) - Prevents karma gain from killing creatures.

[Destroyable Bottles](https://www.nexusmods.com/newvegas/mods/85631) - A mod that lets bottles and other glass objects be destroyed when hit with weapons. Yields a small performance benefit.

[Double Jump and Coyote Time](https://www.nexusmods.com/newvegas/mods/81716) - Allows a configurable double jump or a period of time you can still jump while no longer touching the ground or running off a cliff.

[Faster Sleep-Wait](https://www.nexusmods.com/newvegas/mods/66785) - Decreases the delay between hours while waiting or sleeping.

[Hardcore Forever](https://www.nexusmods.com/newvegas/mods/75682) - Enables Hardcore mode and disables the selection message.

[Iron Sights Aligned](https://www.nexusmods.com/newvegas/mods/81933) - Aligns iron sights across mods that alter or add animations and weapons.
- Use both the main Iron Sights Aligned file and the Iron Sights Aligned Mod Support file provided on the main mod page if using mods that add new weapons to the game.
- This mod also comes with built in patches for [B42 Optics](https://www.nexusmods.com/newvegas/mods/81641).

[Kaleidoscope](https://www.nexusmods.com/newvegas/mods/84017) - Uses the [Base Object Swapper](https://www.nexusmods.com/newvegas/mods/83934) to dynamically swap static objects with similar ones of different textures.
- Requires [Base Object Swapper](https://www.nexusmods.com/newvegas/mods/83934).

[Lootable Statics](https://www.nexusmods.com/newvegas/mods/83946) - Uses [Base Object Swapper](https://www.nexusmods.com/newvegas/mods/83934) to allow you to loot previously static vents, hollowed trees/logs, lockers, desks, etc.
- Requires [Base Object Swapper](https://www.nexusmods.com/newvegas/mods/83934).

[More Shovels](https://www.nexusmods.com/newvegas/mods/75126) - Makes shovels more common in barter and enemy loot.

[More Throwing Weapons](https://www.nexusmods.com/newvegas/mods/75199) - Increases the saturation of throwing weapons throughout the game.

[Movable Statics Replaced with Lootable Versions](https://www.nexusmods.com/newvegas/mods/83961) - Uses base object swapper to swap hundreds of statics with lootable versions.
- Requires [Base Object Swapper](https://www.nexusmods.com/newvegas/mods/83934).

[No More Motion Sickness](https://www.nexusmods.com/newvegas/mods/73613) - Removes any kind of blur (motion blur, get hit blur, etc...) from the game.

[Power Armor Explosive Resistance](https://www.nexusmods.com/newvegas/mods/83995) - Provides direct explosion resistance for power armor.

[PSRO - Peripheral Scope Reticle Overhaul](https://www.nexusmods.com/newvegas/mods/71781) - A comprehensive overhaul of all vanilla scope reticles with pixel perfect alignments and a full clear view of surroundings.
- Less performance intensive than [B42 Optics](https://www.nexusmods.com/newvegas/mods/81641), though still visually pleasing.
- Compatible with all vanilla TTW scopes.
- A mod compatibility patch for any mods that add new weapons to the game is also provided on the main mod page.
- Pairs nicely with Nehred's [Scope Aim Tweaks](https://www.nexusmods.com/newvegas/mods/80701).

[Real Weapon Mods 2](https://www.nexusmods.com/newvegas/mods/46873) - Gives weapon mods real meshes and adds them to random locations across the Mojave.
- Also get the placed in-game patch provided on the main mod page.
- If a more hardcore experience is desired, get [Sweet's configuration patch](https://www.nexusmods.com/newvegas/mods/74502).

[Retrievable Railway Spikes](https://www.nexusmods.com/newvegas/mods/83676) - Allows for retrieval of railway spikes from targets who are hit by TTW's railway rifle.

[Simply Less Junk](https://www.nexusmods.com/newvegas/mods/84277) - Culls a customizable percentage of various item types to help mitigate save bloat and useless world loot.

[Skill Book Auto-Use](https://www.nexusmods.com/newvegas/mods/82674) - Automatically uses skill books upon pickup.

[SMAC - Simple Melee Attack Canceling](https://www.nexusmods.com/newvegas/mods/82732) - Blocking interrupts your melee/unarmed attacks for quick and responsive defense.

[TTW Quick Train to NV Prompt](https://www.nexusmods.com/newvegas/mods/82311) - Allows for starting in NV without the imperfections that can accompany the standard TTW provided option, and that [TTW Quick Start](https://mod.pub/ttw/54-ttw-3-3-esp-less-quick-start) disables.

[Unmissable Casino Rewards](https://www.nexusmods.com/newvegas/mods/83485) - Prevents you from bypassing reward tiers in casinos.

[Viewmodel Recoil](https://www.nexusmods.com/newvegas/mods/71852) - A recoil mod that affects the 1st person model only and does not move the camera. It is purely aesthetic. Can be used in conjunction with [Immersive Recoil 2.0](https://www.nexusmods.com/newvegas/mods/61973).


### Functional Additions
[Bottle the Water](https://www.nexusmods.com/newvegas/mods/83913) - Bottle some water to take with you on the go.

[Camping](https://www.nexusmods.com/newvegas/mods/85061) - A sleeping bag and campfire that you can carry with you and drop anywhere.

[Forced Entry](https://www.nexusmods.com/newvegas/mods/83712) - Bypass locks on doors and containers by damaging them.

[Immersive Minigames](https://www.nexusmods.com/newvegas/mods/58246) - Real-time, character-skill based replacement for hacking and lockpicking.

[Magic Sewer](https://www.nexusmods.com/newvegas/mods/75589) - For all your cross-continental travel needs.

[Pip-boy Weapon Mod Vendor](https://www.nexusmods.com/newvegas/mods/84997) - Purchase weapon mods directly through the Pip-boy interface. Optionally have them shipped to any unlocked dropbox.

[Simple Night Vision](https://www.nexusmods.com/newvegas/mods/84991) - Adds a simple night vision and thermal signature toggle onto power armor helmets.

[Skill Practice PlusPlus](https://www.nexusmods.com/newvegas/mods/83633) - Implements a practice based skill system, where the player increases skills in a "Skyrim-style" by performing actions that use those skills.
- Pairs nicely with Shabby’s [Lower Starting Skills](https://www.nexusmods.com/newvegas/mods/85334).

[Stash Organizer](https://mod.pub/falloutnv/4-stash-organizer) - Automatically organizes your items in any interior cell. Can be tricky to set up initially, though pays dividends in item organization later in the game.

[Transporters](https://www.nexusmods.com/newvegas/mods/77645) - A fast-travel overhaul implementing an alternative that uses molerats and moleholes. Adds a new faction, settlement, and quest as well.

[Vendor Radio](https://www.nexusmods.com/newvegas/mods/85305) - Purchase items from any vendor directly through the Pip-boy radio menu. Optionally have them shipped to any unlocked dropbox.


### Balance
[ANVIL - Ammo New Variants in Loot](https://www.nexusmods.com/newvegas/mods/78561) - Adds ammo variants to loot pools.

[CaliberZL](https://www.nexusmods.com/newvegas/mods/85399) - A caliber expansion mod.
- Pairs nicely alongside Conzo's [Ammo Press Overhaul CaliberZL Version](https://www.nexusmods.com/newvegas/mods/85549).
- Soft incompatibility with [Supplemental Ammo Crafting](https://www.nexusmods.com/newvegas/mods/76175), as recipes will not be standardized.
- Compatible with [SPARE](https://www.nexusmods.com/newvegas/mods/83937) through the use of Conzo’s [CaliberZL - Spare Patch](https://www.nexusmods.com/newvegas/mods/85632).

[Harder Barter Faster Stronger](https://www.nexusmods.com/newvegas/mods/80360) - Makes the economy harsher for characters with low barter, makes barter affect prices more, and slightly narrows the difference between max sell and min buy prices.

[Immersive Recoil NPC](https://www.nexusmods.com/newvegas/mods/69971) - Adds a recoil-like mechanic for all NCPs, including creatures, robots, etc. Induces a short period of time to recover between a series of shots.

[Inaccurate NPCs](https://www.nexusmods.com/newvegas/mods/79619) - Increases NPCs threshold to miss you when shooting at you by editing the fNPCMaxGunWobbleAngle gamesetting.
- Vanilla fNPCMaxGunWobbleAngle is 15. A good starting value for this setting is 30, then it can be increased as needed to induce further inaccuracy.

[Larger Packs - Spawn Multiplier](https://www.nexusmods.com/newvegas/mods/76061) - Makes NPCs/creatures spawning in larger numbers.
- Use with caution if using other difficulty enhancing mods like [New Blood](https://www.nexusmods.com/newvegas/mods/75666).

[More or Less Rads](https://www.nexusmods.com/newvegas/mods/84757) - User-configurable increase or decrease in the size and intensity of all ambient radiation in the game.

[RAD - Radiation (Is) Actually Dangerous](https://www.nexusmods.com/newvegas/mods/71541) - Overhauls all aspects of radiation.

[Reload Reloaded](https://www.nexusmods.com/newvegas/mods/62266) - Replacements for agility modifiers to reload and draw speed, strength modifiers to throwing range, and custom sneak attack damage multipliers.

[SIDE - Simple Items Distributed Everywhere](https://www.nexusmods.com/newvegas/mods/75746) - Distributes various items that are otherwise not readily available across the wastelands.

[Simple Headshots](https://www.nexusmods.com/newvegas/mods/84763) - After crippling an enemy's head, the next shot will be fatal. Can be configured per enemy type.

[SPARE - Sweet Part and Ammo Rebalance and Expansion](https://www.nexusmods.com/newvegas/mods/83937) - A complete rebalance of the ammo crafting system.
- Incompatible with [Supplemental Ammo Crafting](https://www.nexusmods.com/newvegas/mods/76175).
- Compatible with [CaliberZL](https://www.nexusmods.com/newvegas/mods/85399) through the use of Conzo’s [CaliberZL - Spare Patch](https://www.nexusmods.com/newvegas/mods/85632).

[STARS - Sweet’s Total Armor Rework System](https://www.nexusmods.com/newvegas/mods/76016) - A complete rework of the entire armor suite, including the rebalancing and addition of ample armors.
- <b>HIGHLY recommended</b> but difficult to install. Installation instructions are available at Sal's [STARS Installation Guide](https://salamand3r.fail/stars).
- Has a lot of incompatibilies, though several patches are provided on the main mod page, including patches for [Benny Humbles You and Steals Your Stuff](https://www.nexusmods.com/newvegas/mods/71112), [Wasteland Starting Gear DC](https://www.nexusmods.com/newvegas/mods/75789), and [Dead Money Tweaks](https://www.nexusmods.com/newvegas/mods/72139).
  - This will require manual patching for mods that alter NPC appearances.

[Sweet Dynamic Detection System](https://www.nexusmods.com/newvegas/mods/81293) - Enhances NPCs ability to detect the player at medium and long ranges, ameliorating the wildly overpowered state of sniping.

[Sweet Healing Systems](https://www.nexusmods.com/newvegas/mods/83473) - A complete overhaul and rebalancing of doctors, sleep, endurance, and infirmary based healing and radiation removal, radiation dispersal, infirmary detox, and addiction removal.

[Unfound Loot](https://mod.pub/falloutnv/24-unfound-loot) - A highly customizable loot scarcity mod.

[Vanilla SWEEP - Sweet Weapon Enhancement and Expansion Package](https://www.nexusmods.com/newvegas/mods/81043) - A complete rebalance of the weapons in TTW to create a cohesively balanced system that takes more time for progressive and diminishes the degree to which later weapons eclipse earlier ones.
- ONLY affects vanilla TTW weapons. This will eventually be expanded into a complete overhaul including modded weaponry similar to [STARS](https://www.nexusmods.com/newvegas/mods/76016).
- Soft incompatibility with mods that add new weapons to the game, though most popular weapon addition mods have similar balancing (including [ZL Armaments Remastered](https://www.nexusmods.com/newvegas/mods/84213), [Another Millenia](https://www.nexusmods.com/newvegas/mods/76133), and [Tactapack](https://www.nexusmods.com/newvegas/mods/80219).

[Weapon Jamming Tweaks](https://www.nexusmods.com/newvegas/mods/71852) - Replaces the formula for weapon jamming when firing and reloading.
- Use Sweet’s configuration file if a more hardcore experience is desired.

[Well Rested Overhaul](https://www.nexusmods.com/newvegas/mods/64628) - Expands how the well rested effect works, including additional buffs and changes in duration of effect.
- Soft incompatibility with [Sweet Healing System](https://www.nexusmods.com/newvegas/mods/83473), as they both alter the well rested bonus in conflicting ways.


## Content
### Major World & Game Changes
[AGE - Anchorage Gameplay Expansion - Complete Overhaul](https://www.nexusmods.com/newvegas/mods/72031) - A complete overhaul of the Anchorage DLC including rebalancing, new gear, new weapons, new enemies, new boss fights, and new encounters. Inspired by Call of Duty, Doom Eternal, and Half-Life.
- Please review the mod page requirements and patch availability carefully.

[Claim the Mojave (and the Capital)](https://www.nexusmods.com/newvegas/mods/75196) - An expansive end-game mod that allows the player to build outposts at locations across the two wastelands.
- This mod will require a significant number of patches to maintain compatibility. This is incompatible with [Rebuild the Capital](https://www.nexusmods.com/newvegas/mods/68030).

[DMT - Dead Money Tweaks - Complete Overhaul](https://www.nexusmods.com/newvegas/mods/72139) - A complete overhaul of the Dead Money DLC including rebalancing, new gear, new weapons, and new enemies. Intended to be a pseudo-RPG-survival horror experience and inspired by Resident Evil.
- Please review the mod page requirements and patch availability carefully.

[EDGE - Early Decisions and Gameplay Enhancement](https://www.nexusmods.com/newvegas/mods/74921) - A complete overhaul of TTW, particularly focused on enhancing engagement and variety in DC’s early game.

[JER - Just Enough Realism](https://www.nexusmods.com/newvegas/mods/69407) - A TTW wide rebalance mod.
- Requires both the main file and the TTW patch provided on the main mod page.
- Would <u>ONLY</u> recommend using this mod in conjunction with [Sweet's JER Patch](https://www.nexusmods.com/newvegas/mods/83034), paying special attention to [Sweet's specified load order](https://pastebin.com/NKbhdHSn) in relation to her other overhaul mods.

[Point Lookout Reborn](https://www.nexusmods.com/newvegas/mods/85032) - Large overhaul of Point Lookout in an attempt to make it more enjoyable, level friendly, and to reward exploration. Includes new quests, enemies, locations, and more.
- This can have a performance impact given the amount of clutter it adds across Point Lookout.

[Rebuild the Capital](https://www.nexusmods.com/newvegas/mods/68030) - Massive end-game expansion of the Brotherhood of steel. Features new armors, weapons, quests, perks, NPCs, and a recruiting system.
- This mod will require a significant number of patches to maintain compatibility with other mods. It is also worth noting that there are ~6,000 unvoiced dialogue lines. However, this is an amazing and expansive addition of content, which more than makes up for its short-comings.

[True Open World DC](https://www.nexusmods.com/newvegas/mods/84575) - Disables the FO3 main quest, and allows you to visit all main quest locked locations such as Raven Rock and Vault 101 through alternate means, providing a true open world experience in the Capital Wasteland.
- Incompatible with TTW Quickstart as both mods alter the game's start.
- Incompatible with Rebuild the Capital.


### Location Additions & Overhauls
[Another Interior Mod](https://www.nexusmods.com/newvegas/mods/66611) - Adds additional interiors in the DC Wasteland.

[Better Strip View](https://www.nexusmods.com/newvegas/mods/73261) - Adds strip signs and adjusts building position to remain consistent when viewing from anywhere.

[Big Town Extended](https://www.nexusmods.com/newvegas/mods/74825) - Overhauls Big Town.

[Believable Grub n’ Gulp](https://www.nexusmods.com/newvegas/mods/73974) - Overhauls Grub n’ Gulp.

[Canterbury Commons Redesigned](https://www.nexusmods.com/newvegas/mods/85293) - Overhauls Canterbury Commons.

[Cottonwood Cove Slave Market](https://www.nexusmods.com/newvegas/mods/74495) - Adds a slave market at Cottonwood Cove to support in-game lore.

[Detailed New Vegas Suburban Overhaul - Westside](https://www.nexusmods.com/newvegas/mods/84318) - Merges two mods, ([Detailed New Vegas - Westside](https://www.nexusmods.com/newvegas/mods/77383), [New Vegas Suburban Overhaul](https://www.nexusmods.com/newvegas/mods/80526)) to overhaul Westside.

[Freeside Facelift Lite](https://www.nexusmods.com/newvegas/mods/72411) - Overhauls Freeside.

[Gun Runners Actually Run Guns](https://www.nexusmods.com/newvegas/mods/42503) - Expands the Gun Runners to a more lore appropriate role and adds a Gun Runner caravan that travels the Mojave Wasteland.
- Would recommend use alongside [Sweet's GRARG Patch](https://www.nexusmods.com/newvegas/mods/73327) for generalized balancing.

[Hidden Valley: Overhauled](https://www.nexusmods.com/newvegas/mods/70859) - Overhauls the Brotherhood of Steel’s Hidden Valley.

[Hoover Dam Bridge Overhaul](https://www.nexusmods.com/newvegas/mods/84212) - Overhauls the Hoover Dam Bridge.

[Interiors Improved - Vault 21](https://www.nexusmods.com/newvegas/mods/84082) - Overhauls Vault 21.

[Irradiated Lonesome Road](https://www.nexusmods.com/newvegas/mods/74599) - Irradiates the entirety of Lonesome Road to increase difficulty and highlight the desolation of the divide.

[Less Empty Nellis](https://www.nexusmods.com/newvegas/mods/70716) - Overhauls the Nellis region.

[Less Empty Primm](https://www.nexusmods.com/newvegas/mods/70716) - Overhauls the Nellis region.

[Lightbright Strip Overhaul](https://www.nexusmods.com/newvegas/mods/77093) - Overhauls the New Vegas Strip.

[Lucky 38 Lights Redone](https://www.nexusmods.com/newvegas/mods/73273) - Overhauls the Lucky 38s lights.
- Combines nicely with [Animated Spotlights for Lucky 38 Lights Redone](https://www.nexusmods.com/newvegas/mods/85553).

[Lux Aeterna - The True Revival of Luxury - An Ultra-Luxe Overhaul](https://www.nexusmods.com/newvegas/mods/63251) - Overhauls The Ultra-Luxe.

[Meresti Metro Redesign TTW](https://www.nexusmods.com/newvegas/mods/83799) - Overhauls the Meresti Metro.

[Nellis Air Force Base Lightweight Overhaul](https://www.nexusmods.com/newvegas/mods/68839) - Overhauls Nellis Air Force Base.

[Shanty Arefu](https://www.nexusmods.com/newvegas/mods/83904) - Overhauls Arefu.

[Strip and Freeside Wall Replacers - Cleaned](https://www.nexusmods.com/newvegas/mods/82952) - Replaces the Strip and Freeside walls with concrete walls.

[The Town of Vice - A Gomorrah Overhaul](https://www.nexusmods.com/newvegas/mods/64499) - Overhauls Gomorrah and the Omertas.

[Ultra-Luxe Fountain Expanded](https://www.nexusmods.com/newvegas/mods/69781) - Overhauls the Ultra-Luxe fountain.

[Van Graff Faction Overhaul](https://www.nexusmods.com/newvegas/mods/68500) - Overhauls the Van Graffs and The Silver Rush.

[Vault 22 Flora Overhauled Remastered](https://www.nexusmods.com/newvegas/mods/71521) - Overhauls Vault 22.

[Vikki and Vance Improvements](https://www.nexusmods.com/newvegas/mods/71531) - Overhauls The Vikki & Vance casino.


### NPC, Faction, & Dialogue Overhauls

[Brave New World](https://www.nexusmods.com/newvegas/mods/69562) - A massive re-voicing project using professional voice actors. Revoices ~7,000 lines across 145 NPCs.
- The voices only version retains compatibility with other NPC overhaul mods, such as [TTW NPC Overhaul](https://www.nexusmods.com/newvegas/mods/79809).
- There is also a [TTW Patch](https://www.nexusmods.com/newvegas/mods/81210) for the full version, courtesy of Sweet. This patch is incompatible with the voices only version.

[D.C. NPCs](https://www.nexusmods.com/newvegas/mods/83419) - Adds reactivity, clutter, and minor NPCs to the DC wasteland.

[Faction Wasteland Presence](https://www.nexusmods.com/newvegas/mods/73524) - Adds Great Khans, Securitrons, NCR, Legion patrols, and Brotherhood of Steel paladins in lore-friendly locations.

[Friendly Strip Factions](https://www.nexusmods.com/newvegas/mods/80453) - Makes the various Strip factions friendly after completing their respective quests.

[Mojave Raiders](https://www.nexusmods.com/newvegas/mods/64660) - Overhauls New Vegas’ raider factions, balancing their loot and adding more of them to fight.
- A [Very Uncreative TTW Compatibility Patch](https://www.nexusmods.com/newvegas/mods/78465) is available.
- Has a large patch burden if using in conjunction with [STARS](https://www.nexusmods.com/newvegas/mods/76016) or NPC overhaul mods, such as [TTW NPC Overhaul](https://www.nexusmods.com/newvegas/mods/79809).

[NCR Dialogue Expanded](https://www.nexusmods.com/newvegas/mods/83819) - 238 new lines of dialogue for generic NCR troopers, rangers, and MPs.

[Raiders of the Capital Wasteland](https://www.nexusmods.com/newvegas/mods/83487) - Expands the Raiders into a joinable faction with new settlements, interactions, and quests.


### Creature & Enemy Overhauls

[Better Ghouls - No Roar Animation](https://www.nexusmods.com/newvegas/mods/71101) - Removes ghouls "roar" animation that plays before they attack, meaning they now charge the player instantly - making them much deadlier.

[Mojave Wildlife](https://www.nexusmods.com/newvegas/mods/64638) - Adds hundreds of leveled, vanilla-friendly creatures throughout the Mojave.
- A [Very Uncreative TTW Compatibility Patch](https://www.nexusmods.com/newvegas/mods/78465) is available.

[Monster Mod Lite 2021 TTW-NV](https://www.nexusmods.com/newvegas/mods/71714) - Integrates many lore friendly creatures into the game.
- Requires the [assets from the original mod](https://www.nexusmods.com/newvegas/mods/41361).
- Please use with caution, as this mod has poorly made meshes and can cause instability.

[Prodlimen Creature Integration Pack](https://www.nexusmods.com/newvegas/mods/71569) - Integrates many lore friendly creatures into the game.
- Please use with caution, as this mod has poorly made meshes and can cause instability.


### Quests
[3DNPCs DC](https://www.nexusmods.com/newvegas/mods/83484) - Adds 15 quests, 8 companions, background NPCs, and a radio channel to the DC Wasteland.

[3DNPCs NV](https://www.nexusmods.com/newvegas/mods/84274) - Adds 5 quests, 3 companions, and a lot of background NPCs to the Mojave Wasteland.

[Autumn Leaves](https://www.nexusmods.com/newvegas/mods/50146) - A DLC-sized Quest Mod with more than 2000 pro-voiced lines. Delve into a centuries-old library inhabited by sentient machines, and solve Hypatia's mysteries. Five different endings, unique O.S.T.
- Also use the update file provided on the main mod page.
- A [Very Uncreative TTW Compatibility Patch](https://www.nexusmods.com/newvegas/mods/78465) is available.
- AVOID the [Autumn Leaves Tweaks](https://www.nexusmods.com/newvegas/mods/74092), as this mod can cause several abnormalities.

[Havasu Blues](https://www.nexusmods.com/newvegas/mods/76680) - Embark on an adventure south to the town of Lake Havasu City and its surroundings! With over 60 voiced characters, dozens of new locations to explore and a bunch of quests to solve.

[Th3Overseer’s Collection](https://mod.pub/falloutnv/55-th3overseer-mod-collection) - Includes Th3Overseer's Core ESM (required for the specific quest mods), The Initiation, Eliza, The High Desert, The North Road Remastered, Headhunting, and The Depths of Depravity.
- This is the definitive version. The various fix and tweak mods across nexus are incompatible with this version.


### Perks & Traits
[PerkPackPlus](https://www.nexusmods.com/newvegas/mods/70473) - Adds various new perks suited for specialization and to add spice to your build. Compliments [S6S Perks](https://www.nexusmods.com/newvegas/mods/73438) and [Sweet Perk Overhaul](https://www.nexusmods.com/newvegas/mods/73946) well.
- Also use [Sweet's Patch](https://www.nexusmods.com/newvegas/mods/76523) to prevent perk overlap.

[Vegas Elysium Perk Park](https://www.nexusmods.com/newvegas/mods/74052) - A perk and trait pack inspired by Disco Elysium. Includes a thought cabinet and a new flaw system.
- Please carefully read the trigger warning on the mod page prior to downloading.


## Visuals
### Visual Improvements
Sal's [New Vegas Visual Renewal](https://salamand3r.fail/new-vegas-visual-renewal) is <b>HIGHLY</b> recommended for core visual, audio, and lighting needs.
  
[Accurate NASA Stars](https://www.nexusmods.com/newvegas/mods/75522) - New 4k star texture and mesh using NASA satellite images to create a real-world accurate starfield for New Vegas.
- Needs to be loaded after weather mods.

[Armed To The Teeth - Redux](https://www.nexusmods.com/newvegas/mods/74936) - Allows you to holster up to 4 weapons on your body at once.

[Dual Wasteland Street Lights](https://www.nexusmods.com/newvegas/mods/76230) - Adds functioning street lights across the DC and Mojave wastelands.
- Contrary to the description on the mod page, the less street lights version does not appear to appreciably impact performance.

[Radiation Visuals](https://www.nexusmods.com/newvegas/mods/84917) - Adds a customizable visual effect when the player is exposed to radiation. Includes ionizing particles, static noise, blurred vision, and more.
- Please note that the high quality verison will increase menu main load time, but will not worsen in-game performance.

[Titans of the New West (TOTNW)](https://www.nexusmods.com/newvegas/mods/78688) - A complete overhaul and restyle of power armor to obtain a more classic, heavy, and imposing experience.
- See [Webb’s Patch Emporium](https://www.nexusmods.com/newvegas/mods/74174) for the most readily available TOTNW patches.

[TTW - Robco Lights](https://www.nexusmods.com/newvegas/mods/79641) - Adds lights to areas on robots you'd expect would actually emit light.

[Window Ambient Light at Night](https://www.nexusmods.com/newvegas/mods/84945) - Windows that light up at night now emit a light and light up their surroundings.


### Landscape Overhauls
Sal's [New Vegas Visual Renewal](https://salamand3r.fail/new-vegas-visual-renewal) is <b>HIGHLY</b> recommended for core visual, audio, and lighting needs.

[New Vegas Landscape Overhaul Remastered](https://www.nexusmods.com/newvegas/mods/74218)

[Enhanced Landscapes](https://www.nexusmods.com/newvegas/mods/69406)
- Ensure use of the compatibility version if using [New Vegas Landscape Overhaul Remastered](https://www.nexusmods.com/newvegas/mods/74218).

[Desert Landscapes](https://www.nexusmods.com/newvegas/mods/84284?tab=description)

[Red on the Rocks](https://www.nexusmods.com/newvegas/mods/80534)
- Can have a significant performance impact, but is a beautiful rendition of Red Rocks Canyon.
  

### NPCs
The following are designed to be placed in the following load order if using the entire suite.

[TTW NPC Overhaul](https://www.nexusmods.com/newvegas/mods/79809) - A lore friendly and restrained visual overhaul of NPCs from both wastelands.
- This will require manual patching if other mods altering NPCs are being used.
- Shabby has been kind enough to create a [patch for those using EDGE or STARS](https://www.nexusmods.com/newvegas/mods/83929 )

[T4](https://www.nexusmods.com/newvegas/mods/66903) - A female Body replacer
- Also requires [T4 Modest](https://www.nexusmods.com/newvegas/mods/69642) to prevent incompatibility and clipping with mods that edit armors.

[Improved Vanilla Male Body (IVMB)](https://www.nexusmods.com/newvegas/mods/70160) - A male body replacer.

[CKR - Character Kit Remake](https://www.nexusmods.com/newvegas/mods/82145) - Replaces all humanoid character assets.
- Note that this mod becomes progressively more performance demanding as you have more mods that add NPCs.
- Use the optional CKR - IVMB - T4 patch provided on the main mod page.
- Avoid the uncompressed face patch, as it will have a substantial performance impact.

[CKR - Teeth](https://www.nexusmods.com/newvegas/mods/82146) 

[CKR - Hands](https://www.nexusmods.com/newvegas/mods/82148)
- Also get the optional IVMB - T4 patch provided on the main mod page.

[CKR - Hands](https://www.nexusmods.com/newvegas/mods/82147)

Facegen Patches - These can be found all across the nexus. Lack of appropriate patching will result in SIGNIFICANT visual oddities. Alternatively, the bLoadFaceGenHeadEGTFiles setting in the falloutcustom.ini can be enabled in lieu of using facegen patches. Enabling this setting will have a large performance impact.
- [TTW Facegen Patch](https://www.nexusmods.com/newvegas/mods/82447)
- Facegen Patches for Various Mods
  - [Facegen Patches Location #1](https://www.nexusmods.com/newvegas/mods/83129)
  - [Facegen Patches Location #2](https://www.nexusmods.com/newvegas/mods/83104)
  - [Facegen Patches Location #3](https://www.nexusmods.com/newvegas/mods/75435)


### Animations
Sal's [New Vegas Visual Renewal](https://salamand3r.fail/new-vegas-visual-renewal) is <b>HIGHLY</b> recommended for core visual, audio, and lighting needs.

[B42 True Leaning](https://www.nexusmods.com/newvegas/mods/81872) - Adds contextual leaning around corners.

[Enhanced Movement](https://www.nexusmods.com/newvegas/mods/85459) - AIO movement expansion - featuring movement bug fixes, 1st person diagonal movement, enhanced sprint, enhanced sneak, enhanced leaning, animated prone framework, new animations, and more.
- Pairs nicely with [B42 True Leaning](https://www.nexusmods.com/newvegas/mods/81872) after disabling the built-in lean setting, though this comes down to personal preference.

[Idle Variety](https://www.nexusmods.com/newvegas/mods/85718) - Adds idle animation variants to NPCs - More life and less monotony.

[Melee Hitstop Effects](https://www.nexusmods.com/newvegas/mods/75981) - Adds hitstop for melee weapons, by slowing down gametime to 0.1 for a few frames, then restoring it.

[Modern Stagger Animations](https://www.nexusmods.com/newvegas/mods/80456) - Replacers for stagger and crippled animations.

Ragdolls & Death Throes - Improves the animations associated with all ragdoll physics.
- The following are designed to be placed in the following load order.
- [NV Compatibility Skeleton](https://www.nexusmods.com/newvegas/mods/68776)
- [Ragdolls](https://www.nexusmods.com/newvegas/mods/59147)
- [Death Throes](https://www.nexusmods.com/newvegas/mods/81591?tab=description)
  - Modified Ragdolls
    - This plugin overwrites the original Ragdolls plugin.
  - Reactive Ragdolls
    - This is the death throes main file and should follow the modified Ragdolls plugin.
  - Constraints
    - This is an optional file that changes the physical properties of many armor types to allow for more convincing ragdoll animations.
  - Projectile Forces
    - This is an optional file that provides custom re-assignment of projectile forces, as vanilla values are inconsistent with their real-life caliber counterparts.

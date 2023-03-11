# Utilities

In this section we will install a multitude of required tools and mods. It's very important not to skip anything on this page,
with the sole exception of the totally optional _Discord Rich Presence_.

### Utilities Separator

Right-click in MO2's left pane and choose "Create a separator". Name it _Utilities_ and organize
the mods in this section below it.

## Utilities Installed Manually

### [FNV 4GB Patcher](https://www.nexusmods.com/newvegas/mods/62552)

Makes Fallout New Vegas 4GB aware and automatically loads xNVSE.

#### Installation:

**Manual Download** the **Main File - 4GB Patcher**, extract the `FNVpatch.exe` to the game's [Root folder](./setup/#important-locations),
then right-click it and **Run as administrator**. Close the `FalloutNV.exe patched!`
command prompt that appears. There should now be a `FalloutNV_backup.exe` in the game's [Root](./setup/#important-locations) folder.

### [xNVSE](https://www.nexusmods.com/newvegas/mods/67883)

Expands the engine and scripting capabilities of Fallout New Vegas, fixing bugs and adding hundreds of new functions.

#### Installation:

**Manual Download** the **Main File - New Vegas Script Extender (NVSE)** and extract the contents
to the game's [Root folder](./setup/#important-locations). Note that even if you have the GOG version,
you still need to include `nvse_steam_loader.dll`.
![xNVSE post-install root folder](./img/root.webp)

### [New Vegas Heap Replacer](https://www.nexusmods.com/newvegas/mods/69779)

An optimized replacement for the game's [heap](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)
which will benefit load times, stutter and frame rate.

#### Installation:

**Manual Download** the **Main File - NVHR** and extract the contents of the archive to the game's [Root](./setup/#important-locations) folder.

:::note NVHR Terminal Window

By default, NVHR will create a terminal window every time the game is launched, letting you know it has loaded successfully.
If you would like the terminal to stop appearing, create a file named `d3dx9_38.tmp` in the [Root](./setup/#important-locations) folder.
This will not affect anything in-game. If you want the terminal to appear again, you can delete `d3dx9_38.tmp`.

:::

### [Discord Rich Presence](https://www.nexusmods.com/newvegas/mods/68976)

Shows your character info & what you're doing in-game on your Discord profile.
Obviously, if you don't use Discord or simply aren't interested then this particular mod can be skipped

#### Installation:

**Manual Download** the **Main File - Discord Rich Presence** and extract the contents of the archive to the game's [Root](./setup/#important-locations) folder.

## Utilities Installed Using MO2

If you don't know what these instructions mean, review [How to Install Mods](mo2#how-to-install-mods).

### [AnhNVSE](https://www.nexusmods.com/newvegas/mods/74012)

Another script extender plugin for NVSE.

#### Installation:

Main File - AnhNVSE

### [Combat Lag Fix (NVSE)](https://www.nexusmods.com/newvegas/mods/71973)

Improves framerate in combat by fixing an engine bug.

#### Installation:

Main File - Fast Weapon Lag Fix

### [Console Paste Support](https://www.nexusmods.com/newvegas/mods/65906)

Adds clipboard paste support, as well as ctrl left/right and backspace/delete to aid typing in console.

#### Installation:

**Main File - Console Paste**

### [Improved Console (NVSE)](https://www.nexusmods.com/newvegas/mods/70801)

Overcomes several limitations present in the vanilla console.

#### Installation:

**Main File - Improved Console**

### [JIP LN NVSE](https://www.nexusmods.com/newvegas/mods/58277)

An extension of NVSE adding 1000+ new functions, numerous engine bug fixes/tweaks, and restoring
several broken game features.

#### Installation:

**Main File - JIP LN NVSE**

### [JohnnyGuitar NVSE](https://www.nexusmods.com/newvegas/mods/66927)

xNVSE extender that adds new script functions, features and engine bug fixes.

#### Installation:

**Main File - JohnnyGuitar NVSE**

### [kNVSE Animation Plugin](https://www.nexusmods.com/newvegas/mods/71336)

Allows for custom animations to be loaded without overwriting, making it possible to use animations
made specifically for certain weapons without affecting the others.

#### Installation:

**Main File - kNVSE**

### [lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347)

Plugin with engine bugfixes, optional tweaks and new features with no performance impact. Fully customisable
via in-game menu and INIs. Changes made in the in-game menu require a game restart to take effect.

:::tip There's a tweak for that

It cannot be overstated just how many different things this mod does & how many
[mods it replaces/obsoletes](https://forums.nexusmods.com/index.php?/topic/10248968-mods-that-are-redundant-with-stewies-tweaks-list/).
Always **check the Tweaks menu** before installing additional mods, as Tweaks likely already does it.

:::

#### Installation:

- Main File - Stewie Tweaks
- Main File - [Stewie Tweaks Essentials INI](https://www.nexusmods.com/newvegas/mods/76522)

### [Mod Limit Fix](https://www.nexusmods.com/newvegas/mods/68714)

Greatly increases the plugin limit by fixing a vanilla bug.
Improves performance, even if you are nowhere near the limit.

#### Installation:

Main File - MLF

### [New Vegas Tick Fix](https://www.nexusmods.com/newvegas/mods/66537)

Allows New Vegas to run above 60fps without physics issues, while reducing stuttering and increasing performance.
NVTF's memory patches disable Alt-Tab functionality. Follow the
[Perfomance Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#NVTF) for the solution.

#### Installation:

- Main File - NVTF

### [ShowOff NVSE](https://www.nexusmods.com/newvegas/mods/72541)

An NVSE plugin which adds new functions, as well as some engine-level tweaks.

#### Installation:

- Main File - ShowOff NVSE
- Main File - ShowOff INI

### [TTW NVSE](https://www.nexusmods.com/newvegas/mods/77415)

Currently known as "ROOG NVSE", this NVSE plugin is required for TTW to function properly.

#### Installation:

Main File - TTW NVSE

## Testing Utilities

Launch the game using the **Tale of Two Wastelands** option in MO2 (**NOT** the **NVSE** option), and hit the `~` key (above the tab key) to open the console.

Enter `GetNVSEVersion`, and the console should print `NVSE version: 6`.

- If not, [xNVSE](#xnvse) is installed incorrectly.

Next, enter `GetIsLAA`, and the console should print `GetIsLAA >> 2`.

- If it prints `>> 0`, then the [4GB Patch](#fnv-4gb-patcher) was applied incorrectly.
- If it prints an error message, then [JIP LN NVSE](#jip-ln-nvse) is installed incorrectly.

Next, enter `IsDLLLoaded d3dx9_38`, and the console should print `IsDLLLoaded "d3dx9_38.dll" >> 1`.

- If it prints `>> 0`, then [Heap Replacer](#new-vegas-heap-replacer) is installed incorrectly.
- If it prints an error message, then [JohnnyGuitar NVSE](#johnnyguitar-nvse) is installed incorrectly.

Next, enter `IsDLLLoaded mlf`, and the console should print IsDLLLoaded "mlf.dll" >> 1.

- If not, then [Mod Limit Fix](#mod-limit-fix) is installed incorrectly.

Finally, enter `IsDLLLoaded NVTF`, and the console should print IsDLLLoaded "nvtf.dll" >> 1.

- If not, then [NVTF](#new-vegas-tick-fix) is installed incorrectly.

:::danger Before Moving On...

Make sure you passed all of these tests before continuing onto the next section!
If any of these tools aren't working correctly, your game will not be stable.

:::

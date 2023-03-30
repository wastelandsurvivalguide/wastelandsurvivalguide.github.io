# Tools to Avoid
---

In this section we will go over some popular mod managers and mod tools that shouldn't be used for
Fallout New Vegas or Tale of Two Wastelands, an explanation of the issue(s), and what to use instead.

## Mod Managers to Avoid

### Mod Organizer 1

There is no reason to use Mod Organizer 1 over Mod Organizer 2.

### Nexus Mod Manager/Fallout Mod Manager

Outdated/abandoned, NMM/FOMM have no virtual file system or even dynamic movement of mods with loose files.

### Vortex

Vortex features a convoluted and inconvenient conflict management system that simply isn't compatible
with how the modding community shares load orders. For example, imagine that we have been instructed 
to apply the following load order:

```txt showLineNumbers
FalloutNV.esm
Mod1.esp
Mod2.esp
Mod3.esp
```

In Mod Organizer 2, this is as easy as it gets - simply drag the files into the desired order.
Vortex, on the other hand, provides no  straightforward way to do this. Instead it relies an on overly
complicated, unintuitive and frequently confusing system of "rules" which need to be painstakingly 
created one-at-a-time. Nobody wants to deal with this:

![Vortex conflicts](https://media.discordapp.net/attachments/766115316333150290/1091117196534616284/image.png)


This conflict management system is cumbersome and inconvenient enough to be a dealbreaker when it comes 
to the kind of workflow we are aiming for, where we have granular control over our game and the order in
which it loads content. We also need to be able to easily get an overview of the current conflict situation,
and the incomprehensible web of nightmares that Vortex provides for this is unsuitable:

![Vortex web of nightmares](https://cdn.discordapp.com/attachments/267355049666019329/1084050657574658068/unknown.jpg)

Vortex also doesn't track generated files, is slower than MO2, and relies on hardlinks which results in higher
measured disk space usage.

## Modding Tools to Avoid

### LOOT

LOOT isn't an AI. It can't magically make intelligent decisions about how your mods should be ordered. In reality,
LOOT relies on a simple **masterlist** being maintained by humans, which it compares to your modlist. This works 
fine for highly popular games with dedicated communities maintaining that masterlist, such as Skyrim. However, 
nobody maintains the masterlist for Fallout New Vegas, and no masterlist even exists for TTW. Consequently, there 
is no underlying logic when you use LOOT on TTW - your mods will essentially be randomized. LOOT is greyed-out when
MO2 is in TTW mode for good reason! (Although you shouldn't really use it for vanilla FNV either.)

### Merge Plugins Standalone/zMerge

Automated merging can potentially cause major breakage in mods, especially heavily-scripted ones.

### New Vegas Configator

Outdated and possibly dangerous. You won't need any INI tweaks other than the ones in the guide.

### Ordenador/DDSopt

Breaks many textures by needlessly converting/adding/resizing alpha channels, cubemaps, and mipmaps. Use
[BSArch Pro](https://www.nexusmods.com/fallout4/mods/63243) instead.

### Wrye Bash/Flash and Mator Smash

These programs have their use cases and in skilled hands can save a tremendous amount of time. It's not that they
should be completely avoided period. However, like some of the other aforementioned tools, they are fully automated, 
and without the oversight of a human being they are liable to misidentify intentional overwrites as "conflicts" that 
need to be solved. Actual critical conflicts are often missed too. For this reason, it's only recommended to use them
if you are both capable and willing to comb over the results by hand after processing the automated batch.

### zEdit/zClean

Neither have any real advantages over [xEdit](https://www.nexusmods.com/newvegas/mods/34703), and lack some essential
features/support than xEdit has.





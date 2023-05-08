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
LOOT relies on a simple **masterlist** being maintained by human hobbyists, which it compares to your modlist. 
This works fine to a certain extent if that list is actually being maintained, but nobody maintains the masterlist 
for Fallout New Vegas, and no masterlist even exists for TTW. Consequently, there will be no underlying logic if you
use LOOT on TTW. For all intents and purposes you might as well be randomizing your load order. LOOT is greyed-out when
MO2 is in TTW mode for good reason, although you shouldn't use it for FNV either.

A little bit more about LOOT and its limitations, taken from 
*[On Sinitar](https://docs.google.com/document/d/1F1-6lF8dI4i2Zz8iT-bv_Ci1VO9MSU4MiSUrT5JqgHA/edit#)* by Phoenix (a Skyrim modder):
> LOOT does not, in fact, work miracles. The load order it applies is based on a master list compiled by various contributors. 
> That means, theoretically, to work as well as some people think it does, the master list would have to be aware of every conflict 
> between every combination of plugins. Of which there are hundreds of thousands. This is literally not possible.
>
> So LOOT sorts to the best of its ability, and the resulting load order will probably be better than not sorting at all. 
> It doesn’t even approach being sufficient though. Some people, like Lexy, use LOOT with a ton of LOOT rules (that define where 
> certain plugins and groups of plugins should be placed), but how did she find out where these plugins should be put in the first
> place? By checking them in xEdit for their conflicts, of course. Using LOOT with custom rules is a viable option but only if you
> use xEdit to determine the correct order in the first place.
>
> The notifications LOOT shows you (errors, missing records etc.) are once again drawn from the aforementioned master list which may,
> for example, include a link to a missing patch. This works by checking your load order for the specific plugin name of that patch 
> and alert you if it didn’t find it. What if the plugin was renamed, or merged, or you actually fixed what that patch does in a custom 
> plugin? LOOT has no way to tell. LOOT only knows what has been entered into its database. And that database is filled by a handful of 
> people as a hobby. It doesn’t even approach comprehensive. Don’t get me wrong, I respect the people working on it! But I know I cannot
> trust them with fixing my load order for me because they are human and not omnipotent.


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
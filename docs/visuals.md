# Visuals

---

:::note Where are all the texture mods?

WSG keeps things very light on textures, but please check out
[Salamand3r's Texture Guide](https://salamand3r.fail/texture-guide) if it's something you
are looking to add to your game.

:::

## Visual Fixes & Optimizations

### [Aqua Performa](https://www.nexusmods.com/newvegas/mods/78617)

Significantly improves performance on the New Vegas strip by removing unseen water LOD.

### [Exterior Emittance Fix](https://www.nexusmods.com/newvegas/mods/80443)

Fixes a bug that would cause certain particles to appear black.

### [Fog-based Object Culling](https://www.nexusmods.com/newvegas/mods/79516)

Dynamically adjusts draw distance in accordance with the fog to improve performance with little to no visual difference.

### [High Resolution Water Fog](https://www.nexusmods.com/newvegas/mods/78400)

Increases resolution of water depth render target, thus significantly reducing aliasing and improving image quality.

### [High Resolution Screens](https://www.nexusmods.com/newvegas/mods/77989)

Increases the render resolution of in-game screens (Pip-Boy, terminals, character creation menu) to match your monitor resolution, making them much sharper and more readable.

### [High Res Local Maps](https://www.nexusmods.com/newvegas/mods/77963)

Increases resolution of local maps, resulting in a sharper and clearer image.

## Visual Improvements

### [ISControl Enabler](https://www.nexusmods.com/newvegas/mods/75417)

Removes the requirement to patch weapons manually for ISControl nodes of animations. **Required** for Anniversary Anim Pack.

### [Anniversary Anim Pack](https://www.nexusmods.com/newvegas/mods/70158)

Includes three of Hitman's previous animation/bugfix mods, Subtle Camera Motion,
Iron Sights Recoil Animations, and Fire Animation Variants. Also includes some
new previously unreleased animations.

### [Anniversary Anim General Bugfix](https://www.nexusmods.com/newvegas/mods/72320)

Fixed camera jumps, animation snapping, movement lock, broken aim in 3rd person.

#### Installation:

- Main File - AnniAnimPack_BugFix
- Main File - Bonus Patch (rename appropriately when prompted)

### [B42 Weapon Inertia](https://www.nexusmods.com/newvegas/mods/64335)

Makes weapon movement feel more natural and realistic. Watch the provided video to see.

### [Compatibility Skeleton](https://www.nexusmods.com/newvegas/mods/68776)

Allows multiple mods that edit the skeleton mesh to work together; required for B42 Weapon Inertia. 
Choose "Vanilla Weights" when installing.

### [CPI - Mod Patches](https://www.nexusmods.com/newvegas/mods/65046)

Gives the "Consistent Pip-Boy Icons" treatment to modded content such as Cyberware.
In the installer just click **Install**.

### [Improved LOD Noise Texture](https://www.nexusmods.com/newvegas/mods/46451)

Makes distant land textures less ugly.

### [Metro Map Replacer](https://taleoftwowastelands.com/viewtopic.php?f=55&t=7779)

Texture replacers for the underground metro maps, making them actually useful for navigation.

### [Mostly Fixed Facegen Tints](https://www.nexusmods.com/newvegas/mods/71577)

Removes unsightly green tint from NPC face textures.



### [Power Armor Visual Enhancement](https://www.nexusmods.com/newvegas/mods/74786)

PAVE is a retexture pack for all power armors in FNV and F3/TTW.

#### Installation:

- Main File - Power Armor Visual Enhancement 2K
  - Double-click the mod in the left pane & use the Optional ESPs menu to hide `PAVE_NV.esp`.
    - Select the file from *Available ESPs*, then click the ⬅️ button to move it into *Optional ESPs*.
  - Use the Filetree menu to find the file `meshes\armor\PAVE\T45PAPink\OutfitGO.nif`.
    - Select the file and press F2 to **Rename** it to `OutfitArmyGO.nif`:
  ```
  📁meshes
   └📁armor
     └📁PAVE
       └📁T45PAPink
         └📄OutfitArmyGO.nif   <-- renamed from OutfitGO.nif!
  ```
- Update File - PAVE Compatiblity Plugins
  - Just as with the main file, hide `PAVE_NV.esp` using the *Optional ESPs* menu.

### [Simply Upscaled Grass](https://www.nexusmods.com/newvegas/mods/79716)

Upscaled grass texture, improving visual quality with negligible performance impact.

## Lighting & Weather

### [Dusty Distance Redone](https://www.nexusmods.com/newvegas/mods/75183)

Applies a subtle "distant fog" effect that looks nice and can hide ugly LOD, z-fighting and other engine bugs without feeling intrusive.
I prefer the 39k version, but choose whichever you like.

### [High Resolution Bloom NVSE](https://www.nexusmods.com/newvegas/mods/77933)

Increases bloom precision, reducing its flicker.

### [Improved Lighting Shaders](https://www.nexusmods.com/newvegas/mods/69833)

Fixes exterior lighting bugs & allows up to 4x the number of active lights.

### [MoonlightNVSE](https://www.nexusmods.com/newvegas/mods/77683)

Fixes moonlight, making the moon the light caster instead of the sun.

### [No Muzzle Flash Lights](https://www.nexusmods.com/newvegas/mods/77781)

Improves game performance in combat by disabling lights cast on the environment by muzzle flashes.
Only the radiant light cast _by_ the flashes is disabled - not the muzzle flashes themselves.

### [Pip-Boy Shading Fix NVSE](https://www.nexusmods.com/newvegas/mods/77957)

By default, the Pip-Boy ignores external lights, making it appear oddly dark - especially in interiors. This mod fixes that.

### [Depth of Field Fix - NVSE](https://www.nexusmods.com/newvegas/mods/81200)

Fix for depth of field bleeding over onto player's viewmodel.

### [Muzzle Flash Light Fix - NVSE](https://www.nexusmods.com/newvegas/mods/81201)

Fixes muzzle flash lights not being culled after shot, leading to game still using them for illumination.

### [Dynamic Pip-Boy Light - NVSE](https://www.nexusmods.com/newvegas/mods/81203)

Attaches Pip-Boy light to the Pip-Boy making it able to move alongside with player animations.

### [Atmospheric Lighting Tweaks](https://www.nexusmods.com/newvegas/mods/79378)

Makes changes to Image Spaces and Lighting Templates to give interiors a more dynamic and atmospheric look.

### [Desert Natural Weathers TTW](https://www.nexusmods.com/newvegas/mods/75437)

An overhaul of weathers with 360 degree panoramic cloud textures, improved lighting, and DLC support. Make sure you install the TTW version, not the FNV one.
# Mod Organizer 2

In this step, we will install and configure Mod Organizer 2, the best mod manager for any Bethesda game and the only one supported for the guide.

## Installing MO2

Download [Main File - Mod Organizer 2](https://www.nexusmods.com/skyrimspecialedition/mods/6194?tab=files)
using the **Manual Download** link. Run the downloaded installer and choose an unoccupied, non-UAC folder such as
`C:\Modding\Mod Organizer 2` (do **not** choose the [Root](./setup/#important-locations) folder).

Once installed, run `ModOrganizer.exe`, click _Next_ on the _Creating an instance_ pop-up,
then select _Create a global instance_:
![Create a global instance](./img/mo2%20global%20instance.webp)

Select _TTW_ from the list of games, then click _Next_:

![Choose TTW from list of games](./img/mo2ttwinstallation.png)

If TTW is not in the list, you very likely
forgot to run Fallout 3 once through Steam/GOG during the
[Generating Fresh .INI Files](setup#generating-fresh-ini-files) step.

Leave the _Location_ file path default and click _Finish_. Say _No_ to the _Show Guide?_
pop-up, then say _Yes_ to the _Register_ pop-up (if you receive one). If at any point you
get a _INI file is read-only_ pop-up, select _Remember my choice_ from the drop-down at
the bottom, then click _Clear the read-only flag_.

If there is a plugin called `FalloutNV_lang.esp` in the **right pane** of Mod Organizer 2, navigate
to the game's [Data folder](setup#important-locations) and delete it. This plugin conflicts with
(i.e. breaks) most mods by making thousands of direct record edits to the game in order to translate
the language.

## Configuring Settings

Click the ![MO2 Settings](./img/mo2%20settings.webp) button at the top of MO2 or press **Ctrl+S**
to open the Settings menu, and make the following changes:

- General tab:
  - Enable _Compact list_ and disable _Show menubar when pressing Alt_.
- Theme tab:
  - Choose any theme you prefer. We suggest _dracula_, _VS15-Dark_ or _1809 Dark Mode_.
    Linux users should select _Fusion_.
- Nexus tab:
  - Click _Connect to Nexus_ and follow the process, then close the browser
    and exit the MO2 settings menu. Allow MO2 to restart if asked.
    You may not need to do this if you have already connected your Nexus account
    on another instance of MO2.

![MO2 Connect to Nexus](./img/mo2%20connect.webp)

Click the ![MO2 Profiles](./img/mo2%20profiles.webp) button at the top of MO2
or press **Ctrl+P** to open the Profiles menu. Ensure both **Use profile-specific Game INI Files** and
**Automatic Archive Invalidation** are enabled on the default profile.

![MO2 Profile Settings](./img/mo2%20profile%20settings.png)

## FalloutCustom.ini

Click the ![MO2 INI Button](./img/mo2%20ini.png) button at the top of MO2 and select **INI Editor**.
Make sure you are in the **FalloutCustom.ini** tab and NOT the **Custom.ini** tab. It should be blank right now.
Paste in the following:

```ini
[Audio]
; Enables additional worker thread for minor performance improvement. Disable if you encounter audio stutter
bMultiThreadAudio=1
; Disables debug logging to save memory and CPU time
bUseAudioDebugInformation=0
; Increases memory buffers to reduce audio issues
iAudioCacheSize=8192
iMaxSizeForCachedSound=1024

[BackgroundLoad]
; Forces cell unload on fast travel to lessen memory usage
bSelectivePurgeUnusedOnFastTravel=1

[Controls]
; Disables mouse acceleration
fForegroundMouseAccelBase=0
fForegroundMouseAccelTop=0
fForegroundMouseBase=0
fForegroundMouseMult=0

[Display]
; Enables Fullscreen mode (space in setting is NOT a typo)
bFull Screen=1
; Forces highest texture quality so the game will not crash if you had it set to anything lower
iTexMipMapSkip=0

[General]
; Forces faster cell unload to lessen memory usage
bPreemptivelyUnloadCells=1
; Spawns additional AI worker threads
bUseThreadedAI=1
; Enables multithreading for most operations
iNumHWThreads=2
; Sets TTW's starting quest
SCharGenQuest=001FFFF8
; Disables FNV intro movie
SIntroMovie=

[Grass]
; Increases grass draw distance
fGrassStartFadeDistance=11200

[Loading]
; Increases time interval between background slides
fMainMenuBkgdUpdateInterval=60.0000

[Menu]
; Changes console font
iConsoleFont=3

[PipBoy]
; Fixes flicker when opening Pip-Boy when its light is on
fLightEffectFadeDuration=400

[SpeedTree]
; Forces max draw distance for bushes
bForceFullLOD=1

[TerrainManager]
; Increases LOD draw distance
fBlockLoadDistance=300000.0000
fBlockLoadDistanceLow=125000.0000
```

## How to Install Mods

To minimize repetition, the install instructions for a typical mod in the guide are very concise:

> **Installation**:
>
> - Main File - Example Mod 1.5
> - Optional File - Example Mod 1.5

This refers to the mod's Nexus **category**, **file name**, and **file version**.
Unless instructed otherwise, simply click the **Mod Manager Download** button for the listed
file(s). They will appear in the **Downloads** tab of MO2's right pane where you must then
double-click them to install.

### Manual & Off-Nexus Downloads

If a mod has no **Mod Manager Download** button, or is hosted on a site other than Nexus, click the
**Manual Download** (or equivalent) button & save the archive somewhere. Drag the downloaded archive into MO2's
**Downloads** pane and finish as usual. Another option is to press Ctrl+M to open the "Install
from Archive" interface, then navigate to wherever you saved the archive.

### Merge, Replace, or Rename?

When you install multiple mods from the same Nexus page, MO2 will ask if you want to **Merge**,
**Replace**, or **Rename**. Always **Rename** to the respective **file name** so that MO2
installs each file separately. The only time you should ever use **Replace** instead of Rename is
if you are updating a mod, as this will delete all the files from the old version of the mod and
replace them with the ones from the new version. **Merge** should be avoided unless explicitly
instructed to use it by a mod author.

:::info Extract BSA?

If at any point during mod installation you get the message **Extract BSA**, select **No**.

:::

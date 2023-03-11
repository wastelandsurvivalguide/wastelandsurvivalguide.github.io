import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Game Setup

Before we can proceed with the guide, a **clean installation** is required for both Fallout NV and Fallout 3.
:::tip Video Walkthrough Available

A [YouTube video](https://youtu.be/I7yfNSFVyx4) covering the steps in this section is available.

:::

## Install Location

It is vitally important to **avoid any default Windows folders** such as `C:\Program Files`, `C:\Program Files x86`,
`Desktop`, `Documents` (not an exhaustive list). Windows User Account Control (UAC) monitors these folders which
will interfere with the games and modding tools. A safe location is any non-default Windows folder, e.g. `C:\Games\Steam`.
It is also recommended to install on an SSD, as this will vastly improve performance and loading times.

### Enabling File Extensions

By default, file extensions (such as .ini, .dll, or .esp) are hidden in Windows File Explorer,
which will make distinguishing between files more difficult. Open File Explorer from the Start Menu,
from your desktop, or with the keyboard shortcut **Win + E**, and select
**View > Show > File name extensions** to disable this behaviour.
![Show file extensions in File Explorer](./img/show%20file%20extensions.webp)

## Uninstalling the Games

If the game(s) are installed, uninstall them now. Open your Steam or GOG library, right-click Fallout New Vegas and choose **Manage > Uninstall**.
Next, delete all `.ini` files in `Documents\My Games\FalloutNV`. Repeat these steps for **Fallout 3**.

## New Steam Library

Steam users must create a new Steam Library to install the game into, as the default library is in a default Windows UAC-protected folder
(`C:\Program Files x86\Steam`). Open **Steam > Settings > Downloads > Steam Library Folders** and select a location outside of any default
Windows folders (e.g. `C:\Games\Steam`).

:::danger "Steam Already Has a Library On This Drive"

If you want your new Steam library to be on the same drive as the default `C:\Program Files x86\Steam`, you must
[circumvent Steam's one-library-per-drive limit](https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide).

:::

## Installing the Games

Open your Steam or GOG Galaxy library, find **Fallout New Vegas** in the list and select **Install**.
When prompted to choose a location, use the new Steam library you just created, or any non-UAC folder if on GOG.
Repeat these steps for **Fallout 3**.

### Important Locations

The guide will frequently refer to two important folders:

- **Root** is the folder where Fallout New Vegas is installed.
- **Data** is a subfolder inside root where the game's assets are located.

<Tabs groupId="platforms">
<TabItem value="steam" label="Steam">
<b>Root</b>: <code>Steam\steamapps\common\Fallout New Vegas</code><br/>
<b>Data</b>: <code>Steam\steamapps\common\Fallout New Vegas\Data</code>
 </TabItem>
<TabItem value="gog" label="GOG">
<b>Root</b>: <code>GOG Galaxy\Games\Fallout New Vegas</code><br/>
<b>Data</b>: <code>GOG Galaxy\Games\Fallout New Vegas\Data</code>
</TabItem>
</Tabs>

### Generating Fresh .INI Files

Run Fallout New Vegas through Steam or GOG. If you do not get a **Detecting Video Hardware** pop-up, ensure you deleted all
.ini files in `Documents\My Games\FalloutNV` and try again. After clicking OK to the **Detecting Video Hardware** pop-ups,
click **Options**. Choose either the **High** or **Ultra** preset then set your preferred **Resolution**. Click **OK** then **Exit**.

Now run **Fallout 3** through Steam, GOG, or Epic. Click OK to the **Detecting Video Hardware** pop-ups, and exit the launcher.

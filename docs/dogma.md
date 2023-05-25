# Dangerous Dogma
---
The goal with this page is to collect all the dangerous information shared over the years about anything related to modding in general but also specifically Fallout New Vegas and Tale of Two Wastelands. The main sources are sadly often the most popular ones, such as YouTube videos that keep getting recommended or posts on sites like Nexus or Reddit.

Keep in mind that this is in no way a complete list, since modding methods and information changes often and obviously I am not aware of all of the info that belongs here.
### Changing uGridsToLoad
Greatly reduces performance and breaks the game since most of the engine assumes this value is set to default (5).
### Cleaning masterlists in xEdit
Breaks plugin loading in Geck because it cannot look for masters recursively.
### Installing mods mid-game that affect the world or cells
Not advised since the player's save file is essentially an ESP that is loaded last, and baked information can override and break any changes new mods introduce, causing bugs and crashes.
### Levelled List Injection
Makes patching and balancing harder since you cannot see the whole LL together as you would normally.
### Persistence leads to bloated saves
Proven false by TTW which flags the totality of NPCs, creatures and activators as persistent and adds a very tiny amount of data in the save.
### QAC magically fixing mods
Quick Automatic Cleaning does not do any magic to plugins, it just applies filters for ITM's (which are almost always safe to ignore) and removes them regardless, also filters for deleted references and flips them into initially disabled with the enable parent opposite of player as a fallback in case that reference was already part of the save.
### Removing plugins mid-game
This is not an intended scenario and will almost always result in all kinds of weird issues. There are cases where the changes or additions in a plugin are safe to disable, but that would require knowing everything the plugin does and how that affects the game. Better to avoid at all times unless you know what you are doing or if you are debugging something.
### Setting quest stages
People often do this as a last resort to fix a problem they encounter. Obviously this breaks the natural progression of the quest so any trigger point (and everything it sets in motion) will be skipped, breaking the quest even more and leading to a broken save file. This is why you are supposed to have a working list when you want to start an actual playthrough, since these issues are often not fixable if not starting a new game and letting that quest work properly.
### Setting Z -30000
This is not confirmed. Dropping refs -30K units down might cause Havok issues because of the Havok bounds being at around -27K unlike in newer titles where it is 32768.
### TTW and Fallout 3 mods
99% of Fallout 3 mods will **NOT** work with Tale Of Two Wastelands, since the plugin format is different and most of the Fallout 3 mods are either badly made or do not take TTW and Fallout New Vegas changes into account.
### Using the COC command
Skips trigger points and a multitude of things related to any quest you have running or events contained in the cells you skip and teleport to. Especially dangerous if used from the game's main menu since it will create partial character info and once again, broken quests. This command is purely meant for debugging. 
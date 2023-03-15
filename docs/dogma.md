# Dangerous Dogma

The goal with this page is to collect all the dangerous information shared over the years about anything related to modding in general but also specifically Fallout New Vegas and Tale of Two Wastelands. The main sources are sadly often the most popular ones, such as YouTube videos that keep getting recommended or posts on site like Nexus or Reddit.

Keep in mind that this is in no way a complete list, since modding methods and information changes often and obviously i am not aware of all of the info that belongs here.

### Installing mods mid-game that affect the world or cells

Not advised since the player's save file is essentially an ESP that is loaded last, and baked information can override and break any changes new mods introduce, causing bugs and crashes.

### Removing plugins mid-game

This is not an intended scenario and will almost always result in all kinds of weird issues. There are cases where the changes or additions in a plugin are safe to disable, but that would require knowing everything the plugin does and how that affects the game. Better to avoid at all times unless you know what you are doing or if you are debugging something.

### Setting quest stages

People often do this as a last resort to fix a problem they encounter. Obviously this breaks the natural progression of the quest so any trigger point (and everything it sets in motion) will be skipped, breaking the quest even more and leading to a broken save file. This is why you are supposed to have a working list when you want to start an actual playthrough, since these issues are often not fixable if not starting a new game and letting that quest work properly.

### Using the COC command

Skips trigger points and a multitude of things related to any quest you have running or events contained in the cells you skip and teleport to. Especially dangerous if used from the game's main menu since it will create partial character info and once again, broken quests. This command is purely meant for debugging.

### Cleaning masterlists in xEdit

Breaks plugin loading in Geck because it cannot look for masters recursively.

### Changing uGridsToLoad

Greatly reduces performance and breaks the game since most of the engine assumes this value is set to default (5).

### TTW and Fallout 3 mods

99% of Fallout 3 mods will **NOT** work with Tale Of Two Wastelands, since the plugin format is different and most of the Fallout 3 mods are either badly made or do not take TTW and Fallout New Vegas changes into account (obviously).

### Persistence leads to bloated saves

Proven false over and over, such as the totality of NPCs, creatures and activators being persistent in TTW and not adding any relevant amount of data to the save files.

### Levelled List Injection

Has no benefit over manual LL editing. Makes patching and balancing harder since you cannot see the whole LL together as you would normally.

### Using NVAC

Crashes are not something you simply skip, they are safety measures used by the games to avoid running while something broke and possibly leads to unintended behaviour. All NVAC does is make you ignore real issues such as badly made meshes, this does not help your game with being stable nor the modding community with fixing those problems.

### QAC magically fixing mods

Quick Automatic Cleaning does not do any magic to plugins, it just applies filters for ITM's (which are almost always safe to ignore and can also be intentional) and removes them regardless, also filters for deleted references and flips them into initially disabled with the enable parent opposite of player as a fallback in case that reference was already loaded. It is good that deletions are removed, but the enable parent opposite of player can be a bad idea in Fallout 3 and New Vegas as explained in the next point.

### Initially disabled and enable state opposite of parent with the player as the parent

This is an invalid combination, it's one or the other. Since you shouldn't be loading mods mid-save anyways, the former is correct to disable anything except for trees, simply move them under the map instead.

### Setting Z -30000

This is a horrible thing to do in both Fallout 3 and New Vegas as cells have Havok bounds of only 27000 units, setting it higher causes crazy havok bugs and can also cause crashes.

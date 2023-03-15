# LOD Guide

Before getting started, there are a few things you should know. First, generating LOD is not a requirement, but it will add detail in the distance thanks to the mod linked below. It becomes a requirement for proper visuals if you installed texture mods (such as NMCs or Poco Bueno) or are using a mod that requires LOD to be generated (like MoreMojave). Terrain LOD creates a much larger file size (+500mb) and potential performance loss for a very minimal visual improvement. Therefore, this guide will focus only on generating object LOD with xLODGen. If you need to generate xLODGen terrain LOD for whatever reason, the instructions will be the exact same except you will need to enable **Terrain LOD** option in addition to the **Object LOD** option.

## **Installing xLODGen**

1. Download the latest **xLODGen** file from [here](https://stepmodifications.org/forum/topic/13451-xlodgen-terrain-lod-beta-94-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal-enderalse/).
1. Once the download has finished, extract the contents of the archive to any location of your choice.
1. In MO2, select the button at the top of MO2 to open the executables menu.
1. Click the **+** at the top of the window and the select **Add from file...**
1. From the pop-up, navigate to where xLODGen is installed and select **xLODGen.exe**.
1. In the **Arguments** box in the right pane, enter: -FNV -O:"C:\Output\"

This argument will make the files generated through xLODGen appear in a folder called **Output** on your \*\*C:\*\* drive (the drive Windows is installed on). You can change this path to whatever you would like if you would prefer the files to be generated elsewhere (Not a UAC protected folder or the game folder).

9. Select **Apply** then **OK**.

## **Installing LOD Resources**

- [LOD Additions and Improvements](https://www.nexusmods.com/newvegas/mods/61206) - **Main File - LODadditions**
- [LOD Additions - TTW Patch](https://www.nexusmods.com/newvegas/mods/77945) - **Patch File**

This mod will eventually be merged into TTW.

- [Wasted LOD - Cliffs of DC](https://www.nexusmods.com/newvegas/mods/79734) - **Main File - Wasted DC**

## **Running xLODGen**

1. Select xLODGen from the executables drop-down in the top right of MO2 and click **Run**.
1. Once the program has loaded, right-click in the left pane and click **Select All**.
1. In the right pane, check **Objects LOD** but leave **Trees LOD** unchecked.

Tree LOD is not functional in New Vegas. LOD for trees is covered in Object LOD.

4. Under the **Objects LOD** section, change the **Atlas size** option to **8192** x **8192**.
5. Select **Generate**.
6. Wait for the message **LOD Generator: finished (you can close this application now)** to appear (Generation time depends on your CPU performance), then close out of the program.
7. In MO2, right-click on the _Overwrite_ folder at the bottom of the left pane and select **All Mods -> Create empty mod above.**
8. Title the mod **FNVLODGen Output.**
9. Navigate to where the LOD files were generated and select both the textures and meshes folders.
10. Cut them to the **FNVLODGen Output** mod you just created (right-click on the mod and select **Open in Explorer).**

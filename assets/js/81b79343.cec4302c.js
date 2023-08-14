"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[2816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),h=s(n),c=o,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[h]="string"==typeof e?e:o,r[1]=d;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={},r="xEdit: The Basics",d={unversionedId:"xedit",id:"xedit",title:"xEdit: The Basics",description:"---",source:"@site/docs/xedit.md",sourceDirName:".",slug:"/xedit",permalink:"/docs/xedit",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/docs/xedit.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Incompatible Mods",permalink:"/docs/incompatible"},next:{title:"xEdit: The Method",permalink:"/docs/themethod"}},l={},s=[{value:"Introduction and Terminology",id:"introduction-and-terminology",level:2},{value:"Setup",id:"setup",level:2},{value:"Plugin Structure",id:"plugin-structure",level:2},{value:"FormIDs",id:"formids",level:3},{value:"Example",id:"example",level:2}],p={toc:s},h="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xedit-the-basics"},"xEdit: The Basics"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction-and-terminology"},"Introduction and Terminology"),(0,o.kt)("p",null,"xEdit is a tool you can use to edit plugins and have a visual representation of how the edits overlap with the base game or other mods. This allows you to compare changes and easily do things such as patching, understanding what a mod does, changing things about the mods or the vanilla game and more. The basic rule of how plugins work is that only the latest instance of a record gets loaded (there are a few exceptions to that, such as NAVI or Previous INFO, but you do not need to worry about them for now)."),(0,o.kt)("p",null,"These are some of the terms you'll need to know:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Override: Taking an existing record in a plugin and then editing it in another plugin."),(0,o.kt)("li",{parentName:"ul"},"Conflict: These happen once you start adding >=2 unique edits to that record (so for example you have the original record in vanilla, then a mod changing it, then another mod editing it to something different from the previous 2). xEdit will represent these conflicts based on their type and with different colors both for the background of that record and for the text (Theres a legend for this).")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The colors of a record do ",(0,o.kt)("strong",{parentName:"p"},"NOT")," indicate whether you need to act or not, it's simply a classification of the type of conflict. Green does not mean good and red does not mean bad.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forwarding: If you want a change in a specific plugin to also be contained in another plugin, then you can drag that value or container of values into the other plugin. For example if a mod does not include a fix from the unofficial patch but it edits that record elsewhere, you can forward the fix and have both changes at once. Generally it is not recommended to forward or edit things directly in the mod plugins, you should always override into a new plugin that acts as a patch.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the program. I use 4.0.4c, available in the ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/5t8RnNQ"},"xEdit Discord server"),". 4.0.4 on the game's Nexus page is fine."),(0,o.kt)("li",{parentName:"ol"},"Extract the archive and place the files inside a folder of your choosing. Do ",(0,o.kt)("strong",{parentName:"li"},"NOT")," place it inside a system folder nor the game folder. Mod Organizer 2 by default will create a folder in your C drive called Modding, that is a good place for all your tools."),(0,o.kt)("li",{parentName:"ol"},"Add xEdit to MO2 by pressing CTRL + E and ",(0,o.kt)("inlineCode",{parentName:"li"},"Add from file..."),", then point it to the xEdit executable you placed in your modding folder before."),(0,o.kt)("li",{parentName:"ol"},"If you downloaded xEdit from the Discord server then you will need to add ",(0,o.kt)("strong",{parentName:"li"},'"-FNV"')," as command line argument for it to start in the right game mode. This is not required if you downloaded the tool from the game's Nexus or if you renamed the executable file to FNVEdit.exe."),(0,o.kt)("li",{parentName:"ol"},"Run the program from Mod Organizer 2 (it won't see your mods otherwise).")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not use the x64 executable. It will introduce rounding errors, it only becomes required with huge amounts data being loaded (very unlikely on FNV) or very long sessions.")),(0,o.kt)("h2",{id:"plugin-structure"},"Plugin Structure"),(0,o.kt)("p",null,'Any plugin will be loaded by the game as long as it is properly structured (created by tools such as xEdit or GECK) and if its extension is "ESP" or "ESM". The basic content of a plugin is its own header, which defines info such as the version of that plugin (has to match what the game uses for proper functionality, this is especially important if you want to port a mod from Fallout 3 to FNV/TTW). There is also information more important to an editor such as the author, description of that plugin, the number of records it contains (any record, even overrides) and the flags assigned to the plugin (you\'ll mostly see "ESM" here).'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Remember that for a plugin to be an ESM, it is almost always preferable to only flag it as such in the header. Changing extension to ESM is just an alternative that will ",(0,o.kt)("strong",{parentName:"p"},"always")," force the ESM flag on runtime, this means that in order to get rid of the flag from a plugin with the ESM extension, you'd break any other mods that have such plugin in their masterlist (since the removal involves renaming the plugin).")),(0,o.kt)("p",null,"You can view plugins as a list of objects in unique containers that specify which type of content is inside. For example a weapon record will be contained under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Weapons category"),". Each of these objects has it's own ID called FormID written in ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hexadecimal"},"HEX")," which makes it unique, but there is also an ",(0,o.kt)("strong",{parentName:"p"},"EditorID")," which the game ignores and you can use for easier identification or filtering. Going back to the weapon example, you can have the weapon itself with its ",(0,o.kt)("strong",{parentName:"p"},"BaseID")," or you can have instances of that weapon placed in the game world which are called references, so they each have their own ",(0,o.kt)("strong",{parentName:"p"},"RefID"),"."),(0,o.kt)("h3",{id:"formids"},"FormIDs"),(0,o.kt)("p",null,"A FormID is split in 2 parts, the ",(0,o.kt)("strong",{parentName:"p"},"index")," and the ",(0,o.kt)("strong",{parentName:"p"},"ID"),". The index (indicated by the first 2 digits of the FormID) is an indicator of where the plugin that record originates from is located in your load order. In the next picture, the record I expanded has the FormID ",(0,o.kt)("inlineCode",{parentName:"p"},"1200186D"),", so that plugin is placed at index 12 and the record selected has the ID 186D. You can tell the record is unique not only by the index, but also the fact that it has no color, so it is completely unique to that plugin and no other plugin in the load order has changed it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Index example",src:n(8160).Z,width:"773",height:"182"})),(0,o.kt)("p",null,"But if I select an override in that same plugin you will see a different index, since that record in\ngreen was first created by the plugin that has index 06, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"Fallout3.esm"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Index example 2",src:n(2716).Z,width:"131",height:"41"})),(0,o.kt)("p",null,"You cannot patch or edit everything with xEdit. Records involving ",(0,o.kt)("strong",{parentName:"p"},"navmeshes"),", ",(0,o.kt)("strong",{parentName:"p"},"scripts"),", ",(0,o.kt)("strong",{parentName:"p"},"quest stages"),", and ",(0,o.kt)("strong",{parentName:"p"},"terrain")," all need to be modified through GECK since they rely on the render window, compilation, or specific functions."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Now let's say i want to edit something in the base game, such as the damage of the Assault Rifle. Let's also assume we don't know the ID of that weapon so we will first filter it using its name in xEdit."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start by loading the base plugins for TTW.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example Loading Plugins",src:n(243).Z,width:"315",height:"401"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Once everything has loaded (the tips will go away) you can start looking for that gun by using the xEdit filter, just right-click any plugin on the tree-view (that's the list on the left) and selecting \"",(0,o.kt)("strong",{parentName:"li"},"Apply Filter"),'". This will open a menu with all sorts of criteria to filter by, but first you need to uncheck all the boxes it has selected by default, then we will proceed with our own custom filter that will find the weapon.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example Filtering",src:n(3154).Z,width:"1055",height:"844"})),(0,o.kt)("p",null,'Now apply the filter and you will be presented will all the plugins that have created or overridden a record going by that name and record type you filtered. In this case the filter found multiple weapons, expand the last plugin (so that we can override the latest instance of that weapon, since TTW edits it and we don\'t want to lose those changes) and right-click the Assault Rifle, then select the "Copy as override into..." option. This will let you create a new plugin with a name of your choice where the damage change will happen.'),(0,o.kt)("p",null,"To make a new plugin, select ",(0,o.kt)("inlineCode",{parentName:"p"},"**<new file>.esp**"),' in the prompt, then name it. Once created, you will see your plugin appear at the bottom of the tree-view and a new override appearing in the record you opened in the right pane. Let\'s also filter for "damage" on the top left of the right pane, so that we can see where damage is defined in that record.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example Override",src:n(1474).Z,width:"1311",height:"382"})),(0,o.kt)("p",null,"Now you can just edit that number (Right-click, edit) in your plugin. The plugin that are you changing is dictated by the column you choose to edit values in. Once you are done, just close xEdit and it will ask you to save. When you are back in Mod Organizer 2, you will find a new plugin in your overwrite folder, which is the plugin you just created."))}u.isMDXComponent=!0},3154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/examplefilter-0e616404bfc73db48ba726f4ae094ff9.png"},243:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1474:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exampleoverride-e781e78086875f8a2f3f7fb93bf5f94f.png"},8160:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/indexexample-0535ca87ee06d06296afd798347b8a98.png"},2716:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAApCAMAAAAhxGrcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACfUExURQAAAICAgGZmZg0NDQAAZrb/////////25A6ALb/2zqQ2//bkDoAAGa2//+2ZgAAOpDb/7ZmAAA6kNv//9uQkP//tmYAANuQOpA6OgBmttv/ttvb/9vbkJDb29vb29v/2//btrbb2zoAOjExADFSAAvfAADfABxSADFxAADFACoxABTfABRxABzFAACpACKpACIxACqOABypAAvFAAuOAKt7lxwAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH2SURBVFhH7ZYLV4JAEIXRAN+i9jB7F7piiorx/39bd3YHhEQKhTid+Dyn3RnMuXtn3NL21Hj971Q+KCofFGX7UA/guAzqF4qYBt0wzUaTA4Xeisd5kqwBBdudLkeSUjR8KVqsBpNI1tAzzb6mWQPTHCLUjT5nRpfmFR5jub7hXzmHvQ81fgGqr3qBnTUYy83tYMjPdGOotRtNeteEnp3L0ZmkE05oNEd3dFa9dU/lVOahS1Jgg3TlbI7OA0B16zHQYDxRE1SGNcgHOcC3Q/x+YA2TTnf0HPai2RtzJuiFkUcjmIN7kjVgGF9eMZ3oDM2kNei8qQw6wjOZSy9OJbdGMKf8vejFr7Bfhy6MXC6GCNX/D4ryfLBDItuQpFzuRIrUeI2SlMudygfFn/RhOhNijtURYvEeREshxApJl38KsbbtjVo4mUJmH5YrFN7aHgTso+VWLu7clRpIIzSo0pxMIasPDmp7OJi7jUbQQFsUPNTAyRSy+uCt7c1it5p+7ITwg0j2QopSGhBBBvXCD5MpfOcDbs/wRQnPd32ccDrD5y7nHAW92JdzIKkwHxwaMBc+wPnNiiPSoDoQlkPmFA0/mgccXraeKmLL0YEPaFJxPqCWbD0t+GiOaB4gigYBISL6TvJ3k5MpZPahADL7UACVD4ryfbDtT4CKUBDN45fpAAAAAElFTkSuQmCC"}}]);
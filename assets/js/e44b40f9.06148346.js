"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[8992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),p=l,h=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const i={},r="Combat",o={unversionedId:"combat",id:"combat",title:"Combat",description:"---",source:"@site/docs/combat.md",sourceDirName:".",slug:"/combat",permalink:"/docs/combat",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/docs/combat.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Gameplay",permalink:"/docs/gameplay"},next:{title:"Content",permalink:"/docs/content"}},s={},m=[{value:"Separator:",id:"separator",level:4},{value:"Guns",id:"guns",level:2},{value:"Weapon Requirements System",id:"weapon-requirements-system",level:3},{value:"Installation:",id:"installation",level:4},{value:"B42 FireMode - Selective Fire and First Shot Precision - ESPless",id:"b42-firemode---selective-fire-and-first-shot-precision---espless",level:3},{value:"Installation:",id:"installation-1",level:4},{value:"Reload Reloaded",id:"reload-reloaded",level:3},{value:"B42 Recoil - ESPless",id:"b42-recoil---espless",level:3},{value:"B42 True Leaning",id:"b42-true-leaning",level:3},{value:"Accuracy Manager (NVSE)",id:"accuracy-manager-nvse",level:3},{value:"Installation:",id:"installation-2",level:4},{value:"Melee",id:"melee",level:2},{value:"Power Attack Tweaks",id:"power-attack-tweaks",level:3},{value:"SMAC - Simple Melee Attack Canceling",id:"smac---simple-melee-attack-canceling",level:3},{value:"Melee Hitstop Effects",id:"melee-hitstop-effects",level:3},{value:"Grenades",id:"grenades",level:2},{value:"B42 Quickthrow",id:"b42-quickthrow",level:3},{value:"Installation:",id:"installation-3",level:4},{value:"Cookable Grenades",id:"cookable-grenades",level:3},{value:"Reactions &amp; Animations",id:"reactions--animations",level:2},{value:"Simple Attack Reactions - Limb-Specific Animations",id:"simple-attack-reactions---limb-specific-animations",level:3},{value:"Installation:",id:"installation-4",level:4}],c={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"combat"},"Combat"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"separator"},"Separator:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Right-click the empty space in the left pane of MO2 and select ",(0,l.kt)("strong",{parentName:"li"},"Create separator"),"."),(0,l.kt)("li",{parentName:"ul"},"Name the separator ",(0,l.kt)("strong",{parentName:"li"},"Combat"),".")),(0,l.kt)("h2",{id:"guns"},"Guns"),(0,l.kt)("h3",{id:"weapon-requirements-system"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69161"},"Weapon Requirements System")),(0,l.kt)("p",null,"Implements customizable Strength and Skill requirements for weapons, making them actually adhere to their previously inconsequential listed requirements."),(0,l.kt)("h4",{id:"installation"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - Weapon Requirements System"),(0,l.kt)("li",{parentName:"ul"},"Main File - ",(0,l.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000131852&nmm=1"},"Weapon Requirements System - Custom INI"))),(0,l.kt)("h3",{id:"b42-firemode---selective-fire-and-first-shot-precision---espless"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/82576"},"B42 FireMode - Selective Fire and First Shot Precision - ESPless")),(0,l.kt)("p",null,"Adds selective fire to various weapons and introduces first shot accuracy mechanic."),(0,l.kt)("h4",{id:"installation-1"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - B42 FireMode")),(0,l.kt)("h3",{id:"reload-reloaded"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/62266"},"Reload Reloaded")),(0,l.kt)("p",null,"Replacements for agility modifiers to reload and draw speed, strength modifiers to throwing range, and custom sneak attack damage multipliers. Highly customizable."),(0,l.kt)("h3",{id:"b42-recoil---espless"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/90536"},"B42 Recoil - ESPless")),(0,l.kt)("p",null,"Adds smooth and extremely customizable visual and camera recoil to firearms."),(0,l.kt)("h3",{id:"b42-true-leaning"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81872"},"B42 True Leaning")),(0,l.kt)("p",null,"Adds contextual leaning around corners."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - B42 True Leaning"),(0,l.kt)("li",{parentName:"ul"},"Main File - ",(0,l.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000130112&nmm=1"},"B42 True Leaning - Custom INI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A custom INI for B42 True Leaning that intentionally disables lean hotkeys in favor of the contextual lean feature.")))),(0,l.kt)("h3",{id:"accuracy-manager-nvse"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/88215"},"Accuracy Manager (NVSE)")),(0,l.kt)("p",null,"Accuracy Manager is a simple mod that lets you modify NPC combat accuracy."),(0,l.kt)("h4",{id:"installation-2"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - Accuracy Manager (NVSE)"),(0,l.kt)("li",{parentName:"ul"},"Main File - ",(0,l.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/89324"},"Sweet Accuracy Preset"))),(0,l.kt)("h2",{id:"melee"},"Melee"),(0,l.kt)("h3",{id:"power-attack-tweaks"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69238"},"Power Attack Tweaks")),(0,l.kt)("p",null,"Gives melee power and auto attacks an optional cost in Action Points, allows for regular and special forward power attacks to be used by the player, and allows them to trigger special VATS effects out of VATS."),(0,l.kt)("h3",{id:"smac---simple-melee-attack-canceling"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/82732"},"SMAC - Simple Melee Attack Canceling")),(0,l.kt)("p",null,"Blocking interrupts your melee/unarmed attacks for quick and responsive defense!"),(0,l.kt)("h3",{id:"melee-hitstop-effects"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/75981"},"Melee Hitstop Effects")),(0,l.kt)("p",null,"Adds hitstop to melee weapons by slowing down gametime to 0.1 for a few frames, then restoring it. Greatly improves the flow of combat."),(0,l.kt)("h2",{id:"grenades"},"Grenades"),(0,l.kt)("h3",{id:"b42-quickthrow"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/66686"},"B42 Quickthrow")),(0,l.kt)("p",null,"Adds brand new, modern throwing weapons mechanics, as seen in Metro, COD, Fallout 4 and some other FPS games."),(0,l.kt)("h4",{id:"installation-3"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - B42 Quickthrow"),(0,l.kt)("li",{parentName:"ul"},"Main File - ",(0,l.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/77674"},"B42 Quickthrow Tweaks"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A patch that makes B42 Quickthrow compatible with perks and other player effects.")))),(0,l.kt)("admonition",{title:"Instructions:",type:"important"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Press ",(0,l.kt)("strong",{parentName:"li"},"M")," from the pause menu to access the MCM, then navigate to B42 Quickthrow to customize the hotkeys."))),(0,l.kt)("h3",{id:"cookable-grenades"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81678"},"Cookable Grenades")),(0,l.kt)("p",null,"Holding a grenade before throwing it decreases its fuse."),(0,l.kt)("h2",{id:"reactions--animations"},"Reactions & Animations"),(0,l.kt)("h3",{id:"simple-attack-reactions---limb-specific-animations"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/79687"},"Simple Attack Reactions - Limb-Specific Animations")),(0,l.kt)("p",null,"Adds a simple animation command line to each grunt when hit. Greatly enhances the flow and realism of combat."),(0,l.kt)("h4",{id:"installation-4"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - Simple Attack Reactions - TTW"),(0,l.kt)("li",{parentName:"ul"},"Update File - (A) SAR Settings - DT"),(0,l.kt)("li",{parentName:"ul"},"Update File - (B) SAR Settings - DT - Player")))}d.isMDXComponent=!0}}]);
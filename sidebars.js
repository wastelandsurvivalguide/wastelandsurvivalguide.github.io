// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    "intro",
    "fixes",
    "optimizations",
    "ui",
    "gameplay",
    "combat",
    "content",
    "overhaul",
    "ambience",
    "lod",
    "finish",
    {
      type: "category",
      label: "Appendix",
      link: {
        type: "generated-index",
        title: "Appendix",
        description: "Important resources and information."
      },
      items: [
        "appendix/contributors",
        "appendix/additions",
        "appendix/incompatible",
      ],
    },
    {
      type: "category",
      label: "Resources",
      items: [
        {
          type: "link",
          label: "LOD Guide",
          href: "https://vivanewvegas.moddinglinked.com/lod.html",
        },
        {
          type: "link",
          label: "Safe Modding",
          href: "https://vivanewvegas.moddinglinked.com/safe-modding.html",
        },
        {
          type: "link",
          label: "Dogmas",
          href: "https://moddinglinked.com/dogmas.html",
        },
        {
          type: "link",
          label: "xEdit - The Basics",
          href: "https://moddinglinked.com/xedit.html",
        },
        {
          type: "link",
          label: "xEdit - The Method",
          href: "https://moddinglinked.com/themethod.html",
        },
      ],
    },
  ],
  changelog: [
    "changelog/2026",
    "changelog/2025",
    "changelog/2024",
    "changelog/2023",
    "changelog/2022",
    "changelog/additions-changelog",
  ],
};

export default sidebars;

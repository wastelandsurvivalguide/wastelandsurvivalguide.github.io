// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wasteland Survival Guide', // my site
  tagline: 'A Tale of Two Wastelands Modding Guide', // Dinosaurs are cool
  favicon: 'img/wsg.webp', //img/favicon.ico
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    }
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wastelandsurvivalguide.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wastelandsurvivalguide', // Usually your GitHub org/user name.
  projectName: 'wastelandsurvivalguide.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: null,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/survivalguru.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Search bar
      algolia: {
        appId: "PGDR3J962U",
        apiKey: "a62240650a1665512559c9fd6006d035",
        indexName: "wastelandsurvivalguide",
        contextualSearch: false,
      },
      // Replace with your project's social card
      image: 'img/social.webp',
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Wasteland Survival Guide",
        logo: {
          alt: "Wasteland Survival Guide Logo",
          src: "img/wsg.webp",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            label: "Guide",
            position: "left",
          },
          {
            to: "/docs/category/appendix",
            label: "Appendix",
            position: "left",
          },
          {
            to: "/faq",
            label: "FAQ",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'changelog',
            label: 'Changelog',
          },
          {
            href: "https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io",
            //label: "GitHub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: "The Wasteland Supplemental",
            href: "https://discord.gg/JcbZGDeMmC",
          },
          {
            label: "ModdingLinked",
            href: "https://moddinglinked.com",
          },
          {
            label: "Performance Guide",
            href: "https://performance.moddinglinked.com/falloutnv.html",
          },
          {
            label: "New Vegas Visual Renewal",
            href: "https://www.nexusmods.com/newvegas/mods/95649",
          },
          {
            label: "TTW Discord",
            href: "https://discord.gg/taleoftwowastelands",
          },
          {
            label: "GECK Wiki",
            href: "https://geckwiki.com",
          },
          {
            label: "Patreon",
            href: "https://www.patreon.com/WastelandSurvivalGuide",
          },
        ],
        logo: {
          alt: "Tale of Two Wastelands Logo",
          src: "img/TTW.webp",
          href: "https://taleoftwowastelands.com",
        },
        copyright: `Copyright <a href="/docs/important">©</a> ${new Date().getFullYear()} Wasteland Survival Guide Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        as: "image",
        href: "/img/banner.webp",
        fetchpriority: "high",
      },
    },
  ],
};

export default config;

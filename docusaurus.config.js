// @ts-check
  import { themes } from 'prism-react-renderer';
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wasteland Survival Guide",
  tagline: "A Tale of Two Wastelands Modding Guide",
  favicon: "img/wsg.webp",
  url: "https://wastelandsurvivalguide.github.io/",
  baseUrl: "/",
  organizationName: "wastelandsurvivalguide",
  projectName: "wastelandsurvivalguide.github.io",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: ["docusaurus-plugin-image-zoom"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/",
        },
        blog: {
          showReadingTime: false,
          editUrl:
            "https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
      // Search bar
      algolia: {
        appId: "PGDR3J962U",
        apiKey: "a62240650a1665512559c9fd6006d035",
        indexName: "wastelandsurvivalguide",
        contextualSearch: false,
      },
      // Image zoom plugin
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgba(0,0,0,0.3)",
          dark: "rgba(0,0,0,0.5)",
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      image: "img/social.webp",
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
            position: "left",
            label: "Guide",
          },
          {
            type: "doc",
            docId: "faq",
            position: "left",
            label: "FAQ",
          },
          {
            type: "doc",
            docId: "appendix",
            position: "left",
            label: "Appendix",
          },
          { to: "/blog", label: "Changelog", position: "left" },
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
        style: "dark",
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
            href: "https://salamand3r.fail/texture-guide",
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
        copyright: `Copyright <a href="/docs/important">©</a> ${new Date().getFullYear()} Wasteland Survival Guide`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ini"],
      },
    }),
};

module.exports = config;

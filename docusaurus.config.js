// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Wasteland Survival Guide",
    tagline: "A Tale of Two Wastelands Modding Guide",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://wastelandsurvivalguide.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "wastelandsurvivalguide", // Usually your GitHub org/user name.
    projectName: "wastelandsurvivalguide.github.io", // Usually your repo name.
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/',
                },
                blog: {
                    showReadingTime: false,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl: 'https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/',
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
        stylesheets: [
            "https://fonts.googleapis.com/icon?family=Material+Icons",
        ],
        algolia: {
            // The application ID provided by Algolia
            appId: 'PGDR3J962U',

            // Public API key: it is safe to commit it
            apiKey: 'a62240650a1665512559c9fd6006d035',

            indexName: 'wastelandsurvivalguide',

            // Optional: see doc section below
            //contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            // replaceSearchResultPathname: {
            //     from: '/docs/', // or as RegExp: /\/docs\//
            //     to: '/',
            // },

            // Optional: Algolia search parameters
            //searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            //searchPagePath: 'search',

            //... other Algolia params
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
        // Replace with your project's social card
        image: "img/social.png",
        navbar: {
            title: "Wasteland Survival Guide",
            logo: {
                alt: "Wasteland Survival Guide Logo",
                src: "img/logo.webp",
            },
            items: [{
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
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [{
                    title: "Other Guides",
                    items: [{
                            label: "Performance Guide",
                            href: "https://wallsogb.github.io/FalloutNV-Performance-Guide/",
                        },
                        {
                            label: "Texture Guide",
                            href: "https://salamand3r.fail/texture-guide",
                        },
                        {
                            label: "Viva New Vegas",
                            href: "https://vivanewvegas.github.io/",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [{
                            label: "TTW Discord",
                            href: "https://discord.gg/taleoftwowastelands",
                        },

                        {
                            label: "xNVSE Discord",
                            href: "https://discord.gg/EebN93s",
                        },
                        {
                            label: "GECKWiki",
                            href: "https://geckwiki.com/index.php/Main_Page",
                        },
                    ],
                },
            ],
            //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ["ini"],
        },
    }),
};

module.exports = config;
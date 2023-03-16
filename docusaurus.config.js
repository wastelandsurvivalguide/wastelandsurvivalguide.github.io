// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Wasteland Survival Guide",
    tagline: "A Tale of Two Wastelands Modding Guide",
    favicon: "img/favicon.ico",
    url: "https://wastelandsurvivalguide.com",
    baseUrl: "/",
    organizationName: "wastelandsurvivalguide",
    projectName: "wastelandsurvivalguide.github.io",
    deploymentBranch: "gh-pages",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

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
                    editUrl: "https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/",
                },
                blog: {
                    showReadingTime: false,
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
        stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
        // algolia: {
        //     appId: 'PGDR3J962U',
        //     apiKey: 'a62240650a1665512559c9fd6006d035',
        //     indexName: 'wastelandsurvivalguide',
        // },
        colorMode: {
            defaultMode: "dark",
            respectPrefersColorScheme: true,
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        image: "img/social.png",
        navbar: {
            title: "Wasteland Survival Guide",
            logo: {
                alt: "Wasteland Survival Guide Logo",
                src: "img/logo.svg",
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
            copyright: `Copyright © ${new Date().getFullYear()} Wasteland Survival Guide`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ["ini"],
        },
    }),
};

module.exports = config;
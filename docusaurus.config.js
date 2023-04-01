// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Wasteland Survival Guide",
    tagline: "A Tale of Two Wastelands Modding Guide",
    favicon: "img/wsg.webp",
    url: "https://wastelandsurvivalguide.com",
    baseUrl: "/",
    organizationName: "wastelandsurvivalguide",
    projectName: "wastelandsurvivalguide.github.io",
    deploymentBranch: "gh-pages",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    plugins: [
        'docusaurus-plugin-image-zoom'
    ],

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
                    editUrl: 'https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/',
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
            appId: 'PGDR3J962U',
            apiKey: 'a62240650a1665512559c9fd6006d035',
            indexName: 'wastelandsurvivalguide',
            contextualSearch: false,
        },
        // Image zoom plugin
        zoom: {
            selector: '.markdown :not(em) > img',
            background: {
                light: 'rgba(0,0,0,0.3)',
                dark: 'rgba(0,0,0,0.5)'
            },
            // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
            config: {}
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
        image: "img/social.png",
        navbar: {
            title: "Wasteland Survival Guide",
            logo: {
                alt: "Wasteland Survival Guide Logo",
                src: "img/wsg.webp",
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
                    //label: "GitHub",
                    position: "right",
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
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
                    title: "Information",
                    items: [{
                            label: "GECKWiki",
                            href: "https://geckwiki.com/index.php/Main_Page",
                        },
                        {
                            label: "Independent Fallout Wiki",
                            href: "https://fallout.wiki",
                        },
                        {
                            label: "Tome of xEdit",
                            href: "https://tes5edit.github.io/docs/6-themethod.html",
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
                    ],
                },
            ],
            logo: {
                alt: 'Tale of Two Wastelands Logo',
                src: 'img/TTW.png',
                href: 'https://taleoftwowastelands.com',
            },
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
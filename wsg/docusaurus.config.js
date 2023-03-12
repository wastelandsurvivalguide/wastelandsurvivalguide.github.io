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
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: false,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
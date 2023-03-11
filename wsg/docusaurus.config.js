// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Wasteland Survival Guide',
    tagline: 'The customizable TTW modding guide',
    //favicon: 'static/img/favicon.ico',
    favicon: 'img/favicon.ico',

    url: 'https://wsg.github.io',
    baseUrl: '/wsg.github.io/',
    organizationName: 'wastelandsurvivalguide', // Usually your GitHub org/user name.
    trailingSlash: false,
    projectName: 'wsg.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Remove this to remove the "edit this page" links.
                    //editUrl: 'https://github.com/wastelandsurvivalguide/wsg.github.io/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Remove this to remove the "edit this page" links.
                    //editUrl: 'https://github.com/wastelandsurvivalguide/wsg.github.io/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'Wasteland Survival Guide',
            logo: {
                alt: 'Wasteland Survival Guide',
                src: 'img/logo.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Guide',
                },
                {
                    type: 'doc',
                    docId: 'faq',
                    position: 'left',
                    label: 'FAQ',
                },
                {
                    type: 'doc',
                    docId: 'appendix',
                    position: 'left',
                    label: 'Appendix',
                },
                { to: '/blog', label: 'Changelog', position: 'left' },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
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
            copyright: `Copyright © ${new Date().getFullYear()} Wasteland Survival Guide.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['ini'],
        },
    }),
};

module.exports = config;
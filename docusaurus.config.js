// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Lact',
    tagline: 'Access controller methods directly in your frontend.',
    favicon: 'img/favicon.ico.ico',

    // Set the production url of your site here
    url: 'https://getlact.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'msamgan', // Usually your GitHub org/user name.
    projectName: 'lact', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace it with your project's social card
            announcementBar: {
                id: 'support_us',
                content:
                    '🙌 Hey Laravel devs! If you find LACT helpful, please consider giving it a ⭐ on GitHub – <a target="_blank" rel="noopener noreferrer" href="https://github.com/msamgan/lact">your support means a lot!</a>',
                backgroundColor: 'black',
                textColor: 'white',
                isCloseable: false,
            },
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
            image: 'img/lact-logo.png',
            navbar: {
                // title: 'Lact',
                logo: {
                    alt: 'lact logo',
                    src: 'img/lact-logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        html: '<b>Docs</b>',
                    },
                    {
                        sidebarId: 'contributors',
                        position: 'left',
                        html: '<b>Contributors</b>',
                        href: 'https://github.com/msamgan/lact/graphs/contributors',
                    },
                    /* {to: '/blog', label: 'Blog', position: 'left'},*/
                    {
                        sidebarId: 'github',
                        href: 'https://github.com/msamgan/lact',
                        html: '<img src="/img/github-mark-white.png" alt="github" width="30" />',
                        position: 'right',
                    },
                ],
                hideOnScroll: true,
                style: 'dark',
            },
            footer: {
                style: 'dark',
                /*links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'X',
                                href: 'https://x.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/msamgan/lact',
                            },
                        ],
                    },
                ],*/
                copyright: `Copyright © ${new Date().getFullYear()} Lact`,
            },
            prism: {
                theme: prismThemes.dracula,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['php', 'bash']
            },
        }),
};

export default config;

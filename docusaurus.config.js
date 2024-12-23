// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EasiCaptcha',
  tagline: '',
  favicon: 'img/baby_logo_.png',

  // Set the production url of your site here
  url: 'https://babycaptcha.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EasiCaptcha', // Usually your GitHub org/user name.
  projectName: 'easicaptcha.github.io', // Usually your repo name - for custom domain it will be /

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'Abg6JsRKdP9dE02oVk4JT8AksyrdK6VIldUQAhTA4oE', // Your Google site verification code
      },
    },
    {
      tagName: 'script',
      attributes: {
        async: 'true', // The "async" attribute must be a string ('true'), not a boolean.
        src: 'https://www.googletagmanager.com/gtag/js?id=G-KE0E0Q3V3J', // Your Google Analytics 4 ID
      },
    },
    {
      tagName: 'script',
      attributes: {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KE0E0Q3V3J'); // Your Google Analytics 4 ID
        `,
      },
    },
  ],  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Keep blog disabled as in your configuration
        theme: {
          customCss: './src/css/custom.css',
        },
        // Add Google Tag Manager configuration here
        googleTagManager: {
          containerId: 'GTM-MC3R92B5', // Replace with your GTM container ID
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Easi Captcha',
        logo: {
          alt: 'My Site Logo',
          src: 'img/baby_logo_.png', //logo address for captcha
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'Blogggg', position: 'left'},
          {
            href: 'https://github.com/EasiCaptcha',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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
            // items: [
            //   {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //   },
            //   {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            //   },
            //   {
            //     label: 'Twitter',
            //     href: 'https://twitter.com/docusaurus',
            //   },
            // ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/EasiCaptcha',
              },
              {
                label: 'Nuget',
                href: 'https://www.nuget.org/packages/EasiCaptcha',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

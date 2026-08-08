import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Sashalosh Engineering',
  tagline: '3rd Wave',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.sashalosh.shop',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'karenka7', // Usually your GitHub org/user name.
  projectName: 'sashalosh-engineering-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
           customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
  },

  navbar: {
    title: 'Sashalosh Engineering',
    logo: {
      alt: 'Sashalosh Engineering Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'docsSidebar',
        position: 'left',
        label: 'Documentation',
      },
      {
        href: 'https://github.com/karenka7/sashalosh-engineering-docs',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: 'Documentation',
        items: [
          {
            label: 'System Overview',
            to: '/',
          },
        ],
      },
      {
        title: 'Source',
        items: [
          {
            label: 'Documentation Repository',
            href: 'https://github.com/karenka7/sashalosh-engineering-docs',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Sashalosh Engineering. Built with Docusaurus.`,
  },

  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
  } satisfies Preset.ThemeConfig,
};

export default config;

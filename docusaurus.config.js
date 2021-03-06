// const path = require('path');
// const remarkJargon = require('remark-jargon');
// const remarkOpenAPI = require('remark-openapi');
// var jargon = require('./jargon.js')

module.exports = {
  title: 'Trefle documentation',
  customFields: {
    swagger: '/swagger.yaml',
  },
  tagline: 'Get started using the Trefle REST API',
  url: 'https://docs.trefle.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'treflehq',
  projectName: 'documentation',
  themeConfig: {
    prism: {
      additionalLanguages: ['ruby'],
    },
    algolia: {
      apiKey: '70f8bce4d8dbe34fdddaa7c207a7ccc6',
      indexName: 'trefle',
    },
    googleAnalytics: {
      trackingID: 'UA-105084612-2',
      anonymizeIP: true, // Should IPs be anonymized?
    },
    disableDarkMode: true,
    navbar: {
      title: 'Trefle documentation',
      hideOnScroll: true,
      logo: {
        alt: 'Trefle documentation',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/guides/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'reference/',
          activeBasePath: 'reference',
          label: 'Reference',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/treflehq/documentation',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://trefle.io/profile',
          label: 'Account',
          position: 'right',
        },
        {
          href: 'https://trefle.io/profile',
          label: 'Sign in',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

          // remarkPlugins: [
          //   [remarkJargon, { jargon }],
          //   remarkOpenAPI
          // ],
          // Please change this to your repo.
          editUrl:
            'https://github.com/treflehq/documentation/edit/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Trefle.`,
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/treflehq/documentation/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://unicons.iconscout.com/release/v2.1.9/css/unicons.css',
  ],
  // plugins: [
  //   [path.resolve(__dirname, 'plugins/plugin-token-fetcher/'), {}],
  // ],
};

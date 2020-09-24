module.exports = {
  title: "Quirrel",
  tagline: "The Task Queueing Solution for Next.js x Vercel.",
  url: "https://docs.quirrel.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "quirrel-dev", // Usually your GitHub org/user name.
  projectName: "Quirrel", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like Quirrel, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/quirrel-dev/quirrel">GitHub</a>! ⭐️',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    navbar: {
      title: "Quirrel",
      logo: {
        alt: "Quirrel Logo Logo",
        src: "https://tailwindui.com/img/logos/workflow-mark-on-white.svg",
        href: "https://quirrel.dev",
      },
      hideOnScroll: true,
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/quirrel-dev",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
            {
              label: "Deploy to Vercel",
              to: "/deployments/vercel",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/quirrel",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/quirrel_dev",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://dev.to/quirrel",
            },
            {
              label: "GitHub",
              href: "https://github.com/quirrel-dev",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              to: "https://quirrel.dev/privacy",
            },
            {
              label: "Terms",
              href: "https://quirrel.dev/terms",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simon Knott. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/quirrel-dev/docs.quirrel.dev/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

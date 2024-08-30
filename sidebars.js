/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro', // Make sure the id matches the markdown file name without the extension
    'installation',
    'getting-started',
    "text-base captcha configuration",
    {
      type: 'category',
      label: 'Cache Configuration',
      items: [
        'Cache Configuration/Redis',
        'Cache Configuration/In Memory',
      ],
    },
    {
      type: 'category',
      label: 'State Configuration',
      items: [
        'State Configuration/Client Side',
        'State Configuration/Server Side',
      ],
    }

  ],
};

export default sidebars;

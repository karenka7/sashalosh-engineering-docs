import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  engineeringSidebar: [
    {
      type: 'link',
      label: 'Sashalosh Engineering',
      href: '/',
    },

    {
      type: 'category',
      label: 'Engineering Domains',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Frontend',
          items: [
            {type: 'link', label: 'Overview', href: '/frontend/'},
            {type: 'link', label: 'Architecture', href: '/frontend/architecture'},
            {type: 'link', label: 'Development', href: '/frontend/development'},
          ],
        },

        {
          type: 'category',
          label: 'Infrastructure',
          collapsed: false,
          items: [
            {type: 'doc', id: 'README', label: 'Overview'},
            {type: 'doc', id: 'architecture', label: 'Architecture'},
            {type: 'doc', id: 'deployment', label: 'Deployment'},
          ],
        },

        {
          type: 'category',
          label: 'BFF',
          items: [
            {type: 'link', label: 'Overview', href: '/bff/'},
          ],
        },

        {
          type: 'category',
          label: 'Backend',
          items: [
            {type: 'link', label: 'Overview', href: '/backend/'},
          ],
        },
      ],
    },
  ],
};

export default sidebars;
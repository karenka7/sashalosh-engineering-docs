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
          collapsed: false,
          items: [
            {type: 'doc', id: 'index', label: 'Overview'},
            {type: 'doc', id: 'architecture', label: 'Architecture'},
            {type: 'doc', id: 'development', label: 'Development'},
          ],
        },

        {
          type: 'category',
          label: 'Infrastructure',
          items: [
            {type: 'link', label: 'Overview', href: '/infrastructure/'},
            {type: 'link', label: 'Architecture', href: '/infrastructure/architecture'},
            {type: 'link', label: 'Deployment', href: '/infrastructure/deployment'},
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
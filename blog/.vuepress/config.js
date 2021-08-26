const { description } = require('../../package')

module.exports = {

  title: '9th grade blog',

  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'about us',
        link: '/about-us/',
      },
      {
        text: 'guide',
        link: '/guide/',
      },
      {
        text: 'topics',
        link: '/topics/'
      },
      {
        text: 'our school',
        link: 'https://lacordaire.edu.co/'
      }
    ],
    sidebar: {
      '/topics/': [
        '',
        {
          collapsable: false,
          children: [         
            'english/',
            'lenguaje/',
          ]
        }
      ],

      // '/guide/': [
      //   {
      //     title: 'Guide',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //     ]
      //   }
      // ],
    }
  },


  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-blog',
  ]
}
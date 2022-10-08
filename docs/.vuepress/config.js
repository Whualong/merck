module.exports = {
    title: '默克文档',
    description: '默克项目文档',
    // port: 6666,
    // dest: './dist',   // 设置输出目录
    head: [
      ['link', { rel: 'shortcut icon', type: 'image/png', href: `./logo.png` }]
    ],
    markdown: {
      // lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: '基础库', link: '/Library/znxy/base' },
        { text: '基础组件', link: '/Components/custom/ruler' },
        { text: '项目说明', link: '/Ques/deploy/base' },
      ],
      sidebar: {
        '/Library/': [
          {
            title: 'znxy',
            collapsable: false,
            children: [
              'znxy/base',
            ]
          },
          {
            title: 'jweixin',
            collapsable: false,
            children: [
               'jwx/base',
            ]
          }
        ],
        '/Components/': [
          {
            title: '自定义组件',
            collapsable: false,
            children: [
               'custom/ruler',
               'custom/voice',
               'custom/swipe',
               'custom/timePicker',
               'custom/calendar',
               'custom/rate',
               'custom/ring'
            ]
          },
          {
            title: '基于vant封装',
            collapsable: false,
            children: [
              'vant/input'
            ]
          },
        ],
        '/Ques/' : [
            {
                title: '项目部署',
                collapsable: false,
                children: [
                   'deploy/base'
                ]
            },
            {
                title: '注意事项',
                collapsable: false,
                children: [
                    'attention/base'
                ]
            },
            {
                title: '待改进要素',
                collapsable: false,
                children: [
                    'improve/base'
                ]
            },
        ]
      }
    },
    chainWebpack (config) {
      config.resolve.alias.set('core-js/library/fn', 'core-js/features');
    },
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              'cache-loader',
              {
                loader: 'babel-loader',
                options: {
                  babelrc: false,
                  configFile: false,
                  presets: [
                    '@babel/preset-env', // 可以识别es6语法
                    '@vue/babel-preset-jsx' // 解析jsx语法
                  ]
                }
              },
              {
                loader: 'ts-loader',
                options: {
                  appendTsxSuffixTo: [/\.vue$/, /\.md$/]
                }
              }
            ]
          }
        ]
      }
    },
    plugins: [
      [
        'vuepress-plugin-typescript',
        {
          tsLoaderOptions: {
            // ts-loader 的所有配置项
          },
        },
      ],
      // ['@vuepress/plugins-back-to-top', false],
      ['vuepress-plugin-gotop-plus', {
        // mobileShow: false,
        threshold: 150
      }],
      '@vuepress-reco/extract-code'
    ]
  }
  
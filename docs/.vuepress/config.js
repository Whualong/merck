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
        { text: '基础组件', link: '/Components/' },
        { text: '实际项目问题', link: '/Ques' },
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
            title: '基础组件',
            collapsable: true,
            children: [
              {
                title: '常用组件',
                collapsable: false,
                children: [
                 
                ]
              },
              {
                title: '表单组件',
                collapsable: false,
                children: [
                  
                ]
              },
              {
                title: 'TTable组件',
                collapsable: false,
                children: [
                 
                ]
              },
              {
                title: 'TTreeTable组件',
                collapsable: false,
                children: [
                  'ElementUi/TTable/tree' // TreeTable组件
                ]
              },
              {
                title: '图片/文件上传组件',
                collapsable: false,
                children: [
                  
                ]
              }
            ]
          },
          {
            title: '基于AntDesign封装',
            collapsable: true,
            children: [
              {
                title: '常用组件',
                collapsable: false,
                children: [
                ]
              }
            ]
          },
        ],
        '/Ques/' : [

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
  
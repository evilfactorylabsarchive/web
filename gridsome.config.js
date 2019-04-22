class extractor {
  static extract (content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

module.exports = {
  siteName: 'evilfactory: The Web Technologies tinkerer team',
  siteDescription: 'we are tinkering with modern web technologies. Believe in OSS and speak JavaScript both on frontend and backend',
  siteUrl: 'https://evilfactory.id',
  titleTemplate: '%s',
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js'
        ],
        extractor: extractor,
        extensions: ['vue', 'js']
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-126921948-1'
      }
    }
  ]
}

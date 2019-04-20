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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:year/:slug',
        refs: {
          category: {
            typeName: 'Category',
            route: '/c/:slug',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-126921948-1'
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Thoughts by evilfactory',
          feed_url: 'https://evilfactory.id/blog/rss.xml',
          site_url: 'https://evilfactory.id'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://evilfactory.id/blog/' + node.slug,
          author: 'evilfactory'
        }),
        output: {
          dir: './static/blog/',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'daily',
            priority: 0.3
          }
        }
      }
    }
  ]
}

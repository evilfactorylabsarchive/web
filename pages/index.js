import { Component } from 'react'
import Head from 'next/head'

import Hero from '../components/fragments/Index/Hero'
import About from '../components/fragments/Index/About'
import Stacks from '../components/fragments/Index/Stacks'
import Projects from '../components/fragments/Index/Projects'

import Footer from '../components/Footer'

class IndexPage extends Component {
  state = {
    links: [
      {
        id: 'blog',
        title: 'Blog',
        url: 'https://github.com/evilfactorylabs/blog/issues'
      },
      {
        id: 'twitter',
        title: 'Twitter',
        url: 'https://twitter.com/evilfactorylabs'
      },
      {
        id: 'github',
        title: 'GitHub',
        url: 'https://github.com/evilfactorylabs'
      }
    ],
    stacks: [
      {
        id: 'javascript',
        title: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        id: 'react',
        title: 'React',
        url: 'https://reactjs.org'
      },
      {
        id: 'vue',
        title: 'Vue',
        url: 'https://vuejs.org'
      },
      {
        id: 'nextjs',
        title: 'Next.js',
        url: 'https://nextjs.org'
      },
      { id: 'nuxtjs', title: 'Nuxt.js', url: 'https://nuxtjs.org' },
      {
        id: 'react-native',
        title: 'React Native',
        url: 'https://facebook.github.io/react-native'
      },
      {
        id: 'jest',
        title: 'Jest',
        url: 'https://jestjs.io'
      },
      {
        id: 'webpack',
        title: 'Webpack',
        url: 'https://webpack.js.org'
      },
      {
        id: 'webgl',
        title: 'WebGL',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API'
      },
      {
        id: 'pwa',
        title: 'PWA',
        url: 'https://developers.google.com/web/progressive-web-apps/'
      },
      {
        id: 'amp',
        title: 'AMP',
        url: 'https://amp.dev'
      },
      {
        id: 'redis',
        title: 'Redis',
        url: 'https://redis.io'
      },
      {
        id: 'postgres',
        title: 'Postgres',
        url: 'https://www.postgresql.org/'
      },
      {
        id: 'couchdb',
        title: 'CouchDB',
        url: 'https://couchdb.apache.org/'
      },
      {
        id: 'graphql',
        title: 'GraphQL',
        url: 'https://graphql.org'
      },
      {
        id: 'docker',
        title: 'Docker',
        url: 'https://www.docker.com'
      }
    ],
    projects: [
      {
        id: 'nadya',
        title: 'nadya',
        url: 'https://nadya.app',
        description:
          'Personal financial tracker built on top PWA & offline-first principles.'
      }
    ]
  }
  render() {
    const { links, stacks, projects } = this.state
    return (
      <div>
        <Head>
          <title>evilfactory: The Web Technologies tinkerer team</title>
          <meta
            name='description'
            content='We are tinkering with modern web technologies. Believe in OSS and speak JavaScript both on frontend and backend'
          />
        </Head>
        <Hero />
        <About />
        <Stacks stacks={stacks} />
        <Projects projects={projects} />
        <Footer links={links} />
      </div>
    )
  }
}

export default IndexPage

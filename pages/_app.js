import React, { Component } from 'react'
import App, { Container } from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  componentDidMount() {
    this.loadFont(
      'https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap'
    )
  }

  loadFont = url => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let css = xhr.responseText

        const head = document.getElementsByTagName('head')[0]
        const style = document.createElement('style')
        style.appendChild(document.createTextNode(css))
        head.appendChild(style)
      }
    }
    xhr.send()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          ::selection {
            background-color: #ccc;
            color: #fff;
          }

          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 16px;
            font-family: 'Poppins', 'Roboto', -apple-system, BlinkMacSystemFont,
              “Roboto”, “Droid Sans”, “Helvetica Neue”, Helvetica, Arial,
              sans-serif;
            background-color: #000;
            color: #fff;
            max-width: 666px;
            width: 100%;
            animation: 0.5s bhaa;
          }
          .u-with-padding {
            padding: 0.666rem;
          }
          h2 {
            margin-top: 1.8rem;
            font-size: 36px;
          }
          h4 {
            font-size: 28px;
            margin-bottom: 0.13rem;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
          a:hover,
          a:focus {
            text-decoration: underline;
          }
          p,
          li {
            font-family: 'Roboto';
            font-size: 18px;
            line-height: 1.7rem;
            color: #666;
          }
          p + p {
            margin-top: 1.666rem;
          }
          ul {
            margin-top: 1rem;
            margin-left: 2rem;
          }
          li {
            margin-bottom: 0.5rem;
            list-style-type: square;
          }
          footer p {
            margin-top: 2rem;
            font-size: inherit;
            font-family: inherit;
            text-align: center;
          }

          @media screen and (min-width: 40em) {
            h2 {
              font-size: 48px;
            }
            footer p {
              text-align: left;
            }
            .u-with-padding {
              padding: 2.666rem;
            }
          }

          @keyframes bhaa {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </Container>
    )
  }
}

export default MyApp

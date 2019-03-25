import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import * as serviceWorker from './serviceWorker'

const animeScript = document.createElement('script')
animeScript.src = "https://unpkg.com/animejs@2.2.0/anime.min.js"
document.body.append(animeScript)

render(<App />, document.getElementById('root'))
serviceWorker.unregister()

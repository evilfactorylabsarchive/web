import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/tachyons.min.css'
import '~/assets/css/prism-tomorrow.min.css'
import '~/assets/css/global.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'preconnect',
    href: 'https://www.google-analytics.com'
  })
}

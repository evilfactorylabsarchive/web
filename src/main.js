import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/global.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'preconnect',
    href: 'https://www.google-analytics.com'
  })

  head.link.push({
    href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
    rel: 'pefetch stylesheet'
  })

  head.link.push({
    href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-tomorrow.min.css',
    rel: 'prefetch stylesheet'
  })
}

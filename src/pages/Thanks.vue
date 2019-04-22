<template>
  <Layout>
    <h1>Thanks</h1>
    <p>Your submission successfully submitted. We'll get in touch soon.</p>
  </Layout>
</template>

<script>
import metaTagGenerator from '~/metaTagGenerator'

export default {
  metaInfo () {
    return {
      title: 'Thanks',
      meta: metaTagGenerator({
        title: 'Thanks',
        description: "Your submission successfully submitted. We'll get in touch soon.",
        url: 'https://evilfactory.id/thanks/'
      })
    }
  },
}
</script>

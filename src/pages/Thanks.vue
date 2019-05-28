<template>
  <Layout>
    <h1>Thanks</h1>
    <p>Your submission has been successfully submitted. We will get in touch with you soon.</p>
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
        description: "Your submission has been successfully submitted. We will get in touch with you soon.",
        url: 'https://evilfactory.id/thanks/'
      })
    }
  },
}
</script>

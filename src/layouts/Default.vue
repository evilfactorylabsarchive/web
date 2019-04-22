<template>
  <div>
    <Navbar />
    <div class="o-layout">
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
    Footer: () => import('~/components/Footer')
  }
}
</script>

<style scoped>
.o-layout {
  min-height: 100vh;
  max-width: 760px;
  margin: 0 auto;
  margin-top: 8rem;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

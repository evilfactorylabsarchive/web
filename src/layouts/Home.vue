<template>
  <div>
    <Navbar />
    <div class="o-layout">
      <slot/>
    </div>
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
    Navbar
  }
}
</script>

<style scoped>
.o-layout {
  max-width: 760px;
  margin: 0 auto;
  margin-top: 8rem;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

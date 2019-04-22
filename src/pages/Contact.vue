<template>
  <Layout>
    <h1>Contact</h1>
    <p>Launching a new web application? Need help with an existing project? Let's talk.</p>
    <form
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      @submit.prevent="handleSubmit"
    >
      <p class="dn">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <div class="mt3">
        <label
          class="f6"
          for="name"
        >
          Name (required)
        </label>
        <input
          class="db ph2 pv2 lh-copy f6 mt1 w-100"
          id="name"
          type="text"
          placeholder="Your name"
          v-model="name"
          name="name"
          required
        >
      </div>
      <div class="mt3">
        <label
          class="f6"
          for="email"
        >
          Email (required)
        </label>
        <input
          class="db ph2 pv2 lh-copy f6 mt1 w-100"
          id="email"
          type="email"
          placeholder="Your email address so we can get in touch"
          v-model="email"
          name="email"
          required
        >
      </div>
      <div class="mt3">
        <label
          class="f6"
          for="website"
        >
          Website
        </label>
        <input
          class="db ph2 pv2 lh-copy f6 mt1 w-100"
          id="website"
          type="text"
          name="website"
          v-model="website"
          placeholder="Your company website URL"
        >
      </div>
      <div class="mt3">
        <label
          class="f6"
          for="notes"
        >
          About your project (required)
        </label>
        <textarea
          rows="8"
          class="db pa3 lh-copy f6 mt1 w-100"
          id="notes"
          v-model="notes"
          name="notes"
          placeholder="How can we help?"
          required
        >
        </textarea>
      </div>
      <div class="mv3">
        <button
          :disabled="shouldButtonDisabled || isLoading"
          type="submit"
          class="c-button w-100 w-20-ns"
        >
          Submit
        </button>
      </div>
    </form>
  </Layout>
</template>

<script>
import metaTagGenerator from '~/metaTagGenerator'

export default {
  metaInfo () {
    return {
      title: "We'd love to talk",
      meta: metaTagGenerator({
        title: "We'd love to talk",
        description: "Launching a new web application? Need help with an existing project? Let's talk.",
        url: 'https://evilfactory.id/contact/'
      })
    }
  },
  data: () => ({
    name: '',
    email: '',
    notes: '',
    website: '',
    isLoading: false
  }),
  computed: {
    shouldButtonDisabled () {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(this.email)) return true
      if (this.name.length < 3 || this.email.length < 3 || this.notes.length < 3) return true

      return false
    }
  },
  methods: {
    handleSubmit () {
      this.isLoading = true
      const encode = data => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      }

      window.fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'Contact',
          'name': this.name,
          'email': this.email,
          'notes': this.notes,
          'website': this.website
        })
      })
        .then(() => {
          window.location.replace('/thanks/')
          this.isLoading = false
        })
        .catch(error => {
          window.alert(error)
          this.isLoading = false
        })
    }
  }
}
</script>

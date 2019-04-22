<template>
  <Layout>
    <h1>Contact</h1>
    <p>Launching a new web application? Need help with an existing project? Let's talk.</p>
    <form
      name="Contact"
      method="post"
      action="/thanks/"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
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
          class="db ph2 pv1 lh-copy f6 mt1 w-100"
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
          class="db ph2 pv1 lh-copy f6 mt1 w-100"
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
          class="db ph2 pv1 lh-copy f6 mt1 w-100"
          id="website"
          type="text"
          name="website"
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
          class="db ph2 pv1 lh-copy f6 mt1 w-100"
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
          :disabled="shouldButtonDisabled"
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
export default {
  data: () => ({
    name: '',
    email: '',
    notes: ''
  }),
  computed: {
    shouldButtonDisabled () {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(this.email)) return true
      if (this.name.length < 3 || this.email.length < 3 || this.notes.length < 3) return true

      return false
    }
  }
}
</script>

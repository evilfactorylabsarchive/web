<template>
  <Layout>
    <h1>Join</h1>
    <p>
      Wanna having fun and learning together? We don't have enough time to create this UI,
      but you can apply by sending a POST request to <code>https://join.evilfactory.now.sh</code>
      with parameters:
    </p>
    <ul>
      <li><code>name</code> string of your name</li>
      <li><code>role</code> string from ['backend', 'frontend', 'designer', 'whatever']</li>
      <li><code>github</code> string of your github username</li>
      <li><code>email</code> string of your email address so we can contact you</li>
      <li><code>portfolios</code> array of string of your portfolios url (medium, dribbble, personal website, etc)</li>
      <li><code>notes</code> string of optional notes for us</li>
    </ul>
    <p>
      Example:
    </p>
    <pre class="language-bash">$ curl https://join.evilfactory.now.sh \
    -d '{
      "name": "Fariz",
      "role": "backend",
      "github": "108kb",
      "email": "hello@evilfactory.id",
      "portfolios": ["https://108kb.io"],
      "notes": "cool"
    }' \
    -H "Content-Type: application/json"</pre>
    <p>
      Once the request was succesfully sent, we'll getting in touch with you via email.
    </p>
    <p>
      Currently we are only accepting for intern position.
    </p>
  </Layout>
</template>

<script>
import metaTagGenerator from '~/metaTagGenerator'

export default {
  metaInfo () {
    return {
      title: 'Join with us',
      meta: metaTagGenerator({
        title: 'Join with us',
        description: 'Wanna having fun and learning together?',
        url: 'https://evilfactory.id/join/'
      })
    }
  },
}
</script>


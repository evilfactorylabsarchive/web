<template>
  <Layout>
    <h1>Blog</h1>
    <p>We do write a blog post. Enjoy</p>
    <ul>
      <li
        v-for="post in posts"
        :key="post.node_id"
        class="lh-copy"
      >
        <a
          :href="post.html_url"
          target="_blank"
          rel="noopener"
          class="black no-underline hover-red"
        >
          <span class="b">
            {{ post.title }}
          </span>
        </a>
        <span>
          by
          <a
            :href="post.user.html_url"
            target="_blank"
            rel="noopener"
            class="black no-underline hover-red"
          >
            @{{ post.user.login }}
          </a>
        </span>
        <span>
          at {{ new Date(post.created_at).toDateString() }}
        </span>
      </li>
    </ul>
    <div class="mt5 tc">
      <a
        class="black hover-red db no-underline"
        href="https://github.com/evilfactorylabs/blog/issues"
        target="_blank"
        rel="noopener"
      >
        View All
      </a>
    </div>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    posts: []
  }),
  mounted () {
    window.fetch('https://api.github.com/repos/evilfactorylabs/blog/issues')
      .then(res => res.json())
      .then(res => {
        this.posts = res
      })
      .catch(err => window.alert(`Error while fetching the blog posts: ${err}`))
  }
}
</script>

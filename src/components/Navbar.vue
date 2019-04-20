<template>
  <header class="c-navbar cf ph5">
    <div class="fl w-20-l w-40-m w-60 pt1">
      <g-link to="/">
        <img
          alt="evilfactory logo"
          src="@/assets/img/logo.png"
          width="160"
        />
      </g-link>
    </div>
    <nav class="fl w-80-l w-60-m w-40 tr pt3 mt1 b">
      <g-link
        class="white no-underline ml4 hover-red dib"
        to="/blog"
      >
        Blog
      </g-link> 
      <g-link
        class="white no-underline ml4 hover-red dib"
        to="/contact"
      >
        Contact
      </g-link> 
      <g-link
        class="white no-underline ml4 hover-red dib"
        to="/join"
      >
        Join
      </g-link> 
    </nav>
  </header>
</template>

<style scoped>
.c-navbar {
  z-index: 1;
  background-color: #000000;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
}
</style>

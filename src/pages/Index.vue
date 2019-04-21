<template>
  <Layout class="pt4-ns mt3-ns">
    <div class="o-bg">
      <img
        class="w-100 dn db-ns"
        src="@/assets/img/bg.jpg"
      />
    </div>
    <div class="bg-white pa4-ns br1-l relative">
      <h2 class="f2 lh-title tracked mt0">
        Welcome
      </h2>
      <p class="lh-copy mt4">
        evilfactory is a small team specializing in Modern Web Technologies.
        We are tinkering with existing web technologies, JavaScript, Web Assembly
        and Developer Experience.
      </p>
      <p class="lh-copy mt4">
        Also, the Platform itself.
      </p>
      <p class="lh-copy mt4">
        Our work (and posts) cover numerous topics, mostly about Web Platform; Its ecosystem,
        JavaScript and so on like exploring new technologies.
      </p>
      <p class="lh-copy mt4">
        Launching a new web application? Need help with an existing project?
      </p>
      <g-link
        to="/contact"
        class="mt3 br1 lh-title c-button"
      >
        work with us
      </g-link>
    </div>
  </Layout>
</template>

<style scoped>
.c-button {
  color: #ffffff;
  border: 1px solid var(--red);
  background-color: var(--red);
  padding: 12px 20px;
  transition: 0.3s all;
  text-decoration: none;
  display: inline-block;
}

.c-button:hover,
.c-button:focus {
  cursor: pointer;
  background-color: var(--red-darker);
}

.o-bg {
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100vh;
  overflow: hidden;
}

.o-bg img {
  height: 100vh;
  animation: gerak 6.5s infinite;
}

@keyframes gerak {
  50% {
    transform: translate(0, 3.5%);
  }
}
</style>

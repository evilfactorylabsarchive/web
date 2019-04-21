<template>
  <header class="c-navbar cf ph5-l ph3">
    <div class="fl w-20-l w-40-m w-60 pt1">
      <g-link to="/">
        <img
          alt="evilfactory logo"
          src="@/assets/img/logo.png"
          width="160"
        />
      </g-link>
    </div>
    <nav class="fl w-80-l w-60-m w-40 tr pt3 b _navbar-hack">
      <button
        class="bn bg-transparent white b pointer hover-red dib dn-l"
        @click="isMenuOpen = !isMenuOpen"
      >
        <template v-if="isMenuOpen">
          Close [-]
        </template>
        <template v-else>
          Menu [+]
        </template>
      </button>
      <div
        :class="{'js-menu--is-open': isMenuOpen}"
        class="js-menu pr4"
      >
        <g-link
          class="white no-underline ml4 hover-red dib-l db mv3 mv0-l"
          to="/blog"
        >
          Blog
        </g-link> 
        <g-link
          class="white no-underline ml4 hover-red dib-l db mv3 mv0-l"
          to="/contact"
        >
          Contact
        </g-link> 
        <g-link
          class="white no-underline ml4 hover-red dib-l db mv3 mv0-l"
          to="/join"
        >
          Join
        </g-link> 
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    isMenuOpen: false
  })
}
</script>

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

._navbar-hack {
  padding-top: 17px;
}

@media screen and (max-width: 60em) {
  ._navbar-hack {
    padding-top: 20px;
  }

  .js-menu {
    background: #000;
    position: absolute;
    width: 100%;
    height: 0px;
    visibility: hidden;
    top: 60px;
    right: 0;
    transition: 0.3s ease-in-out all;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    opacity: 0;
  }

  .js-menu--is-open {
    visibility: visible;
    height: 150px;
    opacity: 1;
  }
}
</style>

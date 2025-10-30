<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      // is app loaded
      loaded: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 100);
  },
}
</script>

<template>
  <NavBar :class="{ loaded: loaded }" />
  <router-view />
  <Footer />
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection
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
  <FooterSection />
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import fontsReady from './utils/fontsReady'

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
    // Hold the intro until the webfonts are in, otherwise they swap in
    // partway through the animation.
    fontsReady().then(() => {
      setTimeout(() => {
        this.loaded = true;
      }, 100);
    });
  },
}
</script>

<template>
  <NavBar :class="{ loaded: loaded }" />
  <router-view />
  <FooterSection />
</template>
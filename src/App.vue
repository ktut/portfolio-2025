<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
  <NavBar v-bind:class="{ loaded: loaded }" />
  <router-view />
</template>
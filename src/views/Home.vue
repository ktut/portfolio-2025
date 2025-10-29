<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { startViewTransition } from 'vue-view-transitions'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      // is app loaded
      loaded: false,
    }
  },
  methods: {
    async animate() {
      const viewTransition = startViewTransition()
      await viewTransition.captured
    },
    async transform() {
      const viewTransition = startViewTransition()
      await viewTransition.captured
    },
    async delayTransform() {
      const viewTransition = startViewTransition(async () => {
      })
      await viewTransition.captured
    }
  },
  mounted() {
    this.loaded = true;
  },
}
</script>

<template>
  <div class="home" v-bind:class="{ loaded: loaded }">
    <RouterLink to="/chase">
      <figure style="margin: 0">
        <img v-view-transition-name="'img'" src="../assets/test.jpg" style="width: 200px">
        <figcaption>
          Chase Performance Dashboard
        </figcaption>
      </figure>
    </RouterLink>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

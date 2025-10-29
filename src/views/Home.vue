<script>
import { startViewTransition } from 'vue-view-transitions'

export default {
  name: 'HomeView',
  data() {
    return {
      // is app loaded
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true;
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
}
</script>

<template>
  <div
    class="home"
    :class="{ loaded: loaded }"
  >
    <RouterLink to="/chase">
      <figure style="margin: 0">
        <img
          v-view-transition-name="'img'"
          src="../assets/test.jpg"
          style="width: 200px"
        >
        <figcaption>
          Chase Performance Dashboard
        </figcaption>
      </figure>
    </RouterLink>
  </div>
</template>

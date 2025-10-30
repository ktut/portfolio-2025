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
}
</script>

<template>
  <div class="home" :class="{ loaded: loaded }">
    <RouterLink to="/chase">
      <figure>
        <img v-view-transition-name="'img'" src="../assets/Chase-portfolio-mock.jpg">
        <figcaption>
          Chase Performance Dashboard
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span></button>
        </figcaption>
      </figure>
    </RouterLink>
  </div>
</template>

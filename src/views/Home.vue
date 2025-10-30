<script>
import LogoSlider from '@/components/LogoSlider.vue'

export default {
  name: 'HomeView',
  components: {
    LogoSlider
  },
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
  <main :class="{ loaded: loaded }">
    <RouterLink to="/chase" class="project-link">
      <figure>
        <img v-view-transition-name="'img'" src="../assets/Chase-portfolio-mock.jpg">
        <figcaption>
          <h3 class="title">JPMorgan Chase Performance Dashboard</h3>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span></button>
        </figcaption>
      </figure>
    </RouterLink>
    <RouterLink to="/chicagomagazine" class="project-link cover">
      <figure>
        <div class="video-composite">
          <video src="../assets/vid-10.mov" autoplay loop muted playsinline></video>
          <video src="../assets/vid-14.mov" autoplay loop muted playsinline></video>
          <video class="not-mobile" src="../assets/vid-3.mov" autoplay loop muted playsinline></video>
          <video class="not-mobile" src="../assets/vid-4.mov" autoplay loop muted playsinline></video>
          <video class="not-mobile" src="../assets/vid-6.mov" autoplay loop muted playsinline></video>
          <video class="not-mobile" src="../assets/vid-8.mov" autoplay loop muted playsinline></video>
        </div>
        <figcaption>
          <h3 class="title">Chicago Magazine editorial web design</h3>
          <button class="cta">
            View Projects <span class="unicode">&#x2197;</span></button>
        </figcaption>
      </figure>
    </RouterLink>

    <LogoSlider />
  </main>
</template>
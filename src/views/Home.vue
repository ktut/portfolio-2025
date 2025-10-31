<script>
import IPhone from '@/components/iPhone.vue';
import HomepageTopText from '../components/HomepageTopText.vue'
export default {
  name: 'HomeView',
  components: {
    HomepageTopText,
    IPhone
  },
  data() {
    return {
      // is app loaded
      loaded: false,
      windowWidth: window.innerWidth,
      minWidth: 840
    }
  },
  mounted() {
    this.loaded = true;
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  computed: {
    shouldMountComponent() {
      return this.windowWidth > this.minWidth;
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.windowWidth = window.innerWidth;
    }
  }
}
</script>

<template>
  <main :class="{ loaded: loaded }">
    <HomepageTopText />
    <RouterLink to="/chase" class="project-link cover">
      <figure>
        <div class="img-bg">
          <IPhone v-if="shouldMountComponent" class="iphone-in-image" />
          <img v-view-transition-name="'img'" src="../assets/Chase-portfolio-mock.jpg"></img>
        </div>
        <figcaption>
          <h2 class="title">
            JPMorgan Chase Performance Dashboard
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
      </figure>
    </RouterLink>
    <RouterLink to="/chicagomagazine" class="project-link cover">
      <figure>
        <div class="video-composite">
          <div class="video-bg">
            <video src="../assets/vid-10.mov" autoplay loop muted playsinline />
          </div>
          <div class="video-bg">
            <video src="../assets/vid-14.mov" autoplay loop muted playsinline />
          </div>
          <div class="video-bg not-mobile">
            <video src="../assets/vid-4.mov" autoplay loop muted playsinline />
          </div>
          <div class="video-bg not-mobile">
            <video src="../assets/vid-3.mov" autoplay loop muted playsinline />
          </div>
          <div class="video-bg not-mobile">
            <video src="../assets/vid-6.mov" autoplay loop muted playsinline />
          </div>
          <div class="video-bg not-mobile">
            <video src="../assets/vid-8.mov" autoplay loop muted playsinline />
          </div>
        </div>
        <figcaption>
          <h2 class="title">
            <em>Chicago</em> Magazine editorial web design
          </h2>
          <button class="cta">
            View Projects <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
      </figure>
    </RouterLink>
  </main>
</template>

<style lang="scss" scoped>
figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  cursor: pointer;

  img,
  .video-composite {
    display: block;
    width: 100%;
    border-radius: 16px;
    border: 2px solid transparent;
    transition: border 0.3s ease;
    overflow: hidden;
  }

  figcaption {
    text-align: left;
    color: $textColor !important;
    text-decoration: none !important;
    display: block;
    margin-top: 20px;
    font-size: 1.5rem;

    @media (min-width: 840px) {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }

    .title {
      margin-right: 16px;
    }
  }

  .cta {
    margin-top: 12px;
    display: block;
    background: transparent;
    border: 2px solid $redPunch;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    padding: 3px 6px;

    .example {
      font-family: "meursault-variable", serif;
      font-variation-settings: 'wdth' 200, 'wght' 300;
    }

    cursor: pointer;
    margin-top: 12px;
    display: inline-block;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    color: $redPunch;
    text-transform: uppercase;

    @media (min-width: 840px) {
      margin-top: 0;
      position: relative;
      top: -8px;
    }

    .unicode {
      color: $redPunch;
      -webkit-transition: transform 0.3s ease;
      transition: transform 0.3s ease;
      display: inline-block;
    }
  }

  &:hover {

    img,
    .video-composite {
      border: 2px solid $redPunch;
    }

    .cta {
      background: $redPunch;
      color: white;

      .unicode {
        color: white;
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
    }
  }
}
</style>
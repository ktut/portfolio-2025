<script>
import IPhone from '@/components/iPhone.vue';
import HomepageTopText from '../components/HomepageTopText.vue'
import Tout from '@/components/Tout.vue'
import PortraitSlivers from '@/components/PortraitSlivers.vue'

// Hero composite images for Portrait Photography
import heroImg1 from '@/assets/photo/ruffalo-1.jpg'
import heroImg2 from '@/assets/photo/1100-westwick.jpg'
import heroImg3 from '@/assets/photo/00-aless.jpg'
import heroImg4 from '@/assets/photo/IMG-365.jpg'
import heroImg5 from '@/assets/photo/lefty-3.jpg'
import heroImg6 from '@/assets/photo/WhoWatchR-SLH-122114.01-2.jpg'

export default {
  name: 'HomeView',
  components: {
    HomepageTopText,
    IPhone,
    Tout,
    PortraitSlivers
  },
  data() {
    return {
      // is app loaded
      loaded: false,
      windowWidth: window.innerWidth,
      minWidth: 840,
      photoHeroImages: [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg1, heroImg2, heroImg3]
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
        <div class="img-bg" v-view-transition-name="'img'"
          :style="{ backgroundImage: 'url(' + require('@/assets/Chase-portfolio-mock.jpg') + ')' }">
          <IPhone v-if="shouldMountComponent" class="iphone-in-image" />
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
            <em>Chicago</em> editorial web design
          </h2>
          <button class="cta">
            View Projects <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
      </figure>
    </RouterLink>
    <RouterLink to="/chicagomagazine-subscription" class="project-link cover">
      <figure>
        <div class="chimag-subscription-bg"
          :style="{ backgroundImage: 'url(' + require('@/assets/ipad-chimag-mock.jpg') + ')' }">
        </div>
        <figcaption>
          <h2 class="title">
            <em>Chicago</em> subscription page redesign
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
      </figure>
    </RouterLink>
    <RouterLink to="/high5games" class="project-link cover">
      <figure>
        <div class="tout-container" ref="toutContainer" @mouseenter="handleToutHover">
          <Tout :animate="toutAnimate" />
        </div>
        <figcaption>
          <h2 class="title">
            High 5 Games casino web design
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
      </figure>
    </RouterLink>
    <RouterLink to="/suntimes" class="project-link cover">
      <figure>
        <div class="suntimes-bg"
          :style="{ backgroundImage: 'url(' + require('@/assets/print-design/IMG_0008.jpg') + ')' }">
        </div>
        <figcaption>
          <h2 class="title">
            Chicago Sun-Times print design
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
      </figure>
    </RouterLink>
    <RouterLink to="/photo" class="project-link cover">
      <figure>
        <div class="photo-composite-wrapper">
          <PortraitSlivers :images="photoHeroImages" />
        </div>
        <figcaption>
          <h2 class="title">
            Portrait Photography
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
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


  .video-composite {
    overflow: hidden;
  }

  .tout-container,
  .img-bg,
  .video-composite,
  .chimag-subscription-bg,
  .suntimes-bg,
  .photo-composite-wrapper {
    display: block;
    width: 100%;
    border-radius: 16px;
    border: 2px solid #eee;
    transition: border 0.3s ease;
  }

  .tout-container {
    border-radius: 16px;
    max-width: 100%;
    width: 960px;
  }

  .chimag-subscription-bg {
    width: 800px;
    max-width: 100%;
    height: 0;
    padding-bottom: 64%;

    @media (min-width: 840px) {
      padding-bottom: 500px;
    }

    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    border-radius: 16px;

    @media (min-width: 840px) {
      background-size: cover;
    }
  }

  .suntimes-bg {
    width: 800px;
    max-width: 100%;
    height: 0;
    padding-bottom: 64%;

    @media (min-width: 840px) {
      padding-bottom: 500px;
    }

    background-size: 1350px;
    background-position: 54% 49%;
    background-repeat: no-repeat;
    border-radius: 16px;
  }

  .photo-composite-wrapper {
    width: 800px;
    max-width: 100%;
    height: 0;
    padding-bottom: 64%;
    position: relative;
    overflow: hidden;

    @media (min-width: 840px) {
      padding-bottom: 500px;
    }
  }

  figcaption {
    text-align: left;
    color: $textColor !important;
    text-decoration: none !important;
    display: block;
    font-size: 1.5rem;

    @media (min-width: 840px) {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }

    .title {
      margin-right: 16px;
      text-wrap: balance;
    }
  }

  .cta {
    margin-top: 12px;
    display: block;
    background: transparent;
    border: 2px solid $redPunch;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    padding: 0 6px 3px;

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

    .tout-container,
    .img-bg,
    .video-composite,
    .chimag-subscription-bg,
    .suntimes-bg,
    .photo-composite-wrapper {
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
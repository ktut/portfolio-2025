<script>
import IPhone from '@/components/iPhone.vue';
import HomepageTopText from '../components/HomepageTopText.vue'
import Tout from '@/components/Tout.vue'
import PortraitSlivers from '@/components/PortraitSlivers.vue'
import TravelAnim from '@/components/TravelAnim.vue'

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
    PortraitSlivers,
    TravelAnim
  },
  data() {
    return {
      // is app loaded
      loaded: false,
      windowWidth: window.innerWidth,
      minWidth: 840,
      photoHeroImages: [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6],
      projectLinksLoaded: [],
    }
  },
  mounted() {
    this.loaded = true;
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
    this.animateProjectLinks();
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
    },
    animateProjectLinks() {
      const projectLinks = document.querySelectorAll('.project-link');
      projectLinks.forEach((link, index) => {
        setTimeout(() => {
          this.projectLinksLoaded.push(index);
        }, 400 + (index * 150)); // Start at 400ms, stagger by 150ms
      });
    },
  }
}
</script>

<template>
  <main :class="{ loaded: loaded }">
    <HomepageTopText />
    <RouterLink to="/chase" class="project-link cover" :class="{ 'animate-in': projectLinksLoaded.includes(0) }">
      <figure>
        <div class="img-bg" v-view-transition-name="'img'"
          :style="{ backgroundImage: 'url(' + require('@/assets/PD-night-mock.jpg') + ')' }">
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
        <ul class="project-metadata">
          <li>
            <span><b>Role</b></span>
            <span>Lead Frontend Software Engineer</span>
          </li>
          <li>
            <span><b>Tech</b></span>
            <span>Vue.js, Typescript, Pinia</span>
          </li>
          <li>
            <span><b>Dates</b></span>
            <span>2022-2025</span>
          </li>
        </ul>
      </figure>
    </RouterLink>
    <RouterLink to="/chase-travel" class="project-link cover" :class="{ 'animate-in': projectLinksLoaded.includes(1) }">
      <figure>
        <div class="travel-anim-container">
          <TravelAnim />
        </div>
        <figcaption>
          <h2 class="title">
            Case Study: Redesigning Chase Travel
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
        <ul class="project-metadata">
          <li>
            <span><b>Tech</b></span>
            <span>Claude Code, Vue.js, Typescript, Pinia</span>
          </li>
          <li>
            <span><b>Dates</b></span>
            <span>2025</span>
          </li>
        </ul>
      </figure>
    </RouterLink>
    <RouterLink to="/high5games" class="project-link cover" :class="{ 'animate-in': projectLinksLoaded.includes(2) }">
      <figure>
        <div class="tout-container" ref="toutContainer">
          <Tout v-view-transition-name="'tout-animation'" />
        </div>
        <figcaption>
          <h2 class="title">
            High 5 Games Casino
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
        <ul class="project-metadata">
          <li>
            <span><b>Role</b></span>
            <span>Frontend Developer</span>
          </li>
          <li>
            <span><b>Tech</b></span>
            <span>React, CSS, Tailwind, Lottie, Firebase</span>
          </li>
          <li>
            <span><b>Dates</b></span>
            <span>2019-2022</span>
          </li>
        </ul>
      </figure>
    </RouterLink>
    <RouterLink to="/chicagomagazine" class="project-link cover"
      :class="{ 'animate-in': projectLinksLoaded.includes(3) }">
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
        <ul class="project-metadata">
          <li>
            <span><b>Role</b></span>
            <span>Lead Frontend Developer and Site Administrator</span>
          </li>
          <li>
            <span><b>Tech</b></span>
            <span>CSS, Adobe Creative Suite, jQuery</span>
          </li>
          <li>
            <span><b>Dates</b></span>
            <span>2017-2019</span>
          </li>
        </ul>
      </figure>
    </RouterLink>
    <RouterLink to="/chicagomagazine-subscription" class="project-link cover"
      :class="{ 'animate-in': projectLinksLoaded.includes(4) }">
      <figure>
        <div class="chimag-subscription-bg" v-view-transition-name="'chimag-subscription-redesign'"
          :style="{ backgroundImage: 'url(' + require('@/assets/ipad-chimag-mock.jpg') + ')' }">
        </div>
        <figcaption>
          <h2 class="title">
            <em>Chicago</em> subscription page overhaul
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
        <ul class="project-metadata">
          <li>
            <span><b>Role</b></span>
            <span>Lead Frontend Developer and Site Administrator</span>
          </li>
          <li>
            <span><b>Tech</b></span>
            <span>CSS, Adobe Creative Suite, jQuery</span>
          </li>
          <li>
            <span><b>Dates</b></span>
            <span>2017-2019</span>
          </li>
        </ul>
      </figure>
    </RouterLink>
    <RouterLink to="/suntimes" class="project-link cover" :class="{ 'animate-in': projectLinksLoaded.includes(5) }">
      <figure>
        <div class="suntimes-bg" v-view-transition-name="'cst-image'"
          :style="{ backgroundImage: 'url(' + require('@/assets/print-design/IMG_0008.jpg') + ')' }">
        </div>
        <figcaption>
          <h2 class="title">
            Chicago <em>Sun-Times</em> print design
          </h2>
          <button class="cta">
            View Project <span class="unicode">&#x2197;</span>
          </button>
        </figcaption>
        <ul class="project-metadata">
          <li>
            <span><b>Role</b></span>
            <span>Multimedia Producer/Designer</span>
          </li>
          <li>
            <span><b>Tech</b></span>
            <span>Adobe Creative Suite</span>
          </li>
          <li>
            <span><b>Dates</b></span>
            <span>2012-2016</span>
          </li>
        </ul>
      </figure>
    </RouterLink>
    <p :class="{ 'animate-in': projectLinksLoaded.includes(6) }" class="extra-projects project-link"><span>📸</span>
      Earlier in my career, I was a <b>photographer</b> as well, shooting portraits and events. You can see <RouterLink
        to="/photo">some of my favorite
        shots from over the years here</RouterLink>.
    </p>
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

  .travel-anim-container {
    max-width: 1200px;
    overflow: hidden;
  }

  .travel-anim-container,
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
    color: $textColor !important;
    text-decoration: none !important;
    display: block;
    font-size: 1.5rem;
    width: 100%;

    @media (min-width: 840px) {
      width: unset;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }

    .title {
      margin-right: 16px;
      text-wrap: balance;
      margin-bottom: 0;

      @media (min-width: 840px) {
        margin-bottom: 1rem;
      }
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

    .travel-anim-container,
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

  .project-metadata {
    width: 100%;
    padding: 16px 4px 0;
    margin-left: 0;

    @media (min-width: 760px) {
      display: flex;
      justify-content: center;
      max-width: unset;
      margin: 0 auto;
    }

    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      @media (min-width: 760px) {
        display: block;
        padding-left: 16px;
        padding-right: 16px;

        span {
          display: block;
          white-space: nowrap;
        }
      }

      span {
        text-align: right;

        @media (min-width: 760px) {
          text-align: center;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.project-link {
  opacity: 0;
  transform: perspective(1000px) rotateX(-8deg) translateY(30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);

  &.animate-in {
    opacity: 1;
    transform: perspective(1000px) rotateX(0deg) translateY(0);
  }

  &.extra-projects {
    max-width: 640px;
    padding: 48px 12px;

    @media (min-width: 760px) {
      text-align: center;
    }
  }
}
</style>
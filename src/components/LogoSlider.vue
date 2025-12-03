<script>
export default {
  name: 'LogoSlider',
  data() {
    return {
      logos: [
        { src: require('@/assets/logos/ada25-min.png'), height: '50px', tooltip: 'Portrait photography' },
        { src: require('@/assets/logos/avant-min.png'), height: '50px', tooltip: 'Portrait, event photography' },
        { src: require('@/assets/logos/barrys-min.png'), height: '40px', tooltip: 'Event photography' },
        { src: require('@/assets/logos/cct-min.png'), height: '75px', tooltip: 'Portrait, event photography' },
        { src: require('@/assets/logos/chimag-min.png'), height: '60px', tooltip: 'Web design, development, admin work, photo, video, print design' },
        { src: require('@/assets/logos/conagra-min.png'), height: '90px', tooltip: 'Portrait photography' },
        { src: require('@/assets/logos/cps-min.png'), height: '70px', tooltip: 'Portrait, event photography' },
        { src: require('@/assets/logos/cruises-min.png'), height: '30px', tooltip: 'Videography' },
        { src: require('@/assets/logos/dalhousie-min.png'), height: '50px', tooltip: 'Portrait photography' },
        { src: require('@/assets/logos/firsttee-min.png'), height: '50px', tooltip: 'Event photography' },
        { src: require('@/assets/logos/fitch-min.png'), height: '70px', tooltip: 'Web development, design' },
        { src: require('@/assets/logos/h5g-min.png'), height: '60px', tooltip: 'Web development' },
        { src: require('@/assets/logos/hb-min.png'), height: '60px', tooltip: 'Web development, design, video production' },
        { src: require('@/assets/logos/knstrct-min.png'), height: '30px', tooltip: 'Portrait photography' },
        { src: require('@/assets/logos/marianos-min.png'), height: '70px', tooltip: 'Portrait, event, product photography' },
        { src: require('@/assets/logos/printavo-min.png'), height: '50px', tooltip: 'Videography, photography' },
        { src: require('@/assets/logos/rag-and-bone-min.png'), height: '50px', tooltip: 'Interior photography' },
        { src: require('@/assets/logos/reuters-min.png'), height: '50px', tooltip: 'Photography assistance' },
        { src: require('@/assets/logos/splash-min.png'), height: '45px', tooltip: 'Web design, development, admin work; photo, video, print design' },
        { src: require('@/assets/logos/suntimes-min.png'), height: '72px', tooltip: 'Web design, development, admin work; photo, video, print design' }
      ]
    }
  }
}
</script>

<template>
  <div class="outer-logo-slider">
    <div class="inner-logo-slider">
      <!-- First set of logos -->
      <div class="logo-track">
        <div class="brandlogo" v-for="(logo, index) in logos" :key="'set1-' + index">
          <img :src="logo.src" class="lazy loading" data-was-processed="true" :style="{ height: logo.height }">
          <div class="tooltip">
            <span class="tooltip-inner">{{ logo.tooltip }}</span>
          </div>
        </div>
      </div>
      <!-- Duplicate set for seamless loop -->
      <div class="logo-track">
        <div class="brandlogo" v-for="(logo, index) in logos" :key="'set2-' + index">
          <img :src="logo.src" class="lazy loading" data-was-processed="true" :style="{ height: logo.height }">
          <div class="tooltip">
            <span class="tooltip-inner">{{ logo.tooltip }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outer-logo-slider {
  overflow-x: hidden;
  padding-bottom: 50px;
}

.inner-logo-slider {
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  width: fit-content;
  animation: scroll 30s linear infinite;
}

.logo-track {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.brandlogo {
  position: relative;
  flex-shrink: 0;
  margin: 0 27px;
}

@media (min-width: 451px) {
  .brandlogo:hover {
    transition: transform 0.3s;
    transform: scale(1.1);
  }
}

.brandlogo img {
  width: auto;
  height: 50px;
}

.brandlogo>.tooltip {
  opacity: 0;
  transition: opacity 0.3s;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  text-align: center;
  pointer-events: none;
  white-space: nowrap;
}

.brandlogo>.tooltip>.tooltip-inner {
  display: inline-block;
  font-size: 0.7rem;
  line-height: 1.3;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 5px;
}

@media (min-width: 451px) {
  .brandlogo:hover .tooltip {
    opacity: 1;
  }
}

@media (min-width: 451px) {
  .inner-logo-slider:hover {
    animation-play-state: paused;
  }
}

/* Desktop animation - continuous scroll */
@media (min-width: 451px) {
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }
}

/* Mobile - simpler animation with smaller distance */
@media (max-width: 450px) {
  .inner-logo-slider {
    animation: scrollMobile 20s linear infinite;
  }

  .brandlogo {
    margin: 0 20px;
  }

  @keyframes scrollMobile {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }
}
</style>

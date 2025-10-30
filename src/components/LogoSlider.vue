<script>
export default {
  name: 'LogoSlider',
}
</script>

<template>
  <div class="outer-logo-slider">
    <div class="inner-logo-slider">
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/ada25-min.png"
          class="lazy loading" data-was-processed="true" style="height: 50px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/avant-min.png"
          class="lazy loading" data-was-processed="true" style="height: 50px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait, event photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/barrys-min.png"
          class="lazy loading" data-was-processed="true" style="height: 40px;">
        <div class="tooltip"><span class="tooltip-inner"> Event photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/cct-min.png"
          class="lazy loading" data-was-processed="true" style="height: 75px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait, event photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/chimag-min.png"
          class="lazy loading" data-was-processed="true" style="height: 60px;">
        <div class="tooltip"><span class="tooltip-inner"> Web design, development, admin work, photo, video, print
            design </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/conagra-min.png"
          class="lazy loading" data-was-processed="true" style="height: 90px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/cps-min.png"
          class="lazy loading" data-was-processed="true" style="height: 70px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait, event photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/cruises-min.png"
          class="lazy loading" data-was-processed="true" style="height: 30px;">
        <div class="tooltip"><span class="tooltip-inner"> Videography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/dalhousie-min.png"
          class="lazy loading" data-was-processed="true" style="height: 50px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/firsttee-min.png"
          class="lazy loading" data-was-processed="true" style="height: 50px;">
        <div class="tooltip"><span class="tooltip-inner"> Event photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/fitch-min.png"
          class="lazy loading" data-was-processed="true" style="height: 70px;">
        <div class="tooltip"><span class="tooltip-inner"> Web development, design </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/h5g-min.png"
          class="lazy loading" data-was-processed="true" style="height: 60px;">
        <div class="tooltip"><span class="tooltip-inner"> Web development </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/hb-min.png"
          class="lazy loading" data-was-processed="true" style="height: 60px;">
        <div class="tooltip"><span class="tooltip-inner"> Web development, design, video production </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/knstrct-min.png"
          class="lazy loading" data-was-processed="true" style="height: 30px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/marianos-min.png"
          class="lazy loading" data-was-processed="true" style="height: 70px;">
        <div class="tooltip"><span class="tooltip-inner"> Portrait, event, product photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/printavo-min.png"
          class="lazy loading" data-was-processed="true" style="height: 50px;">
        <div class="tooltip"><span class="tooltip-inner"> Videography, photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/rag-and-bone-min.png"
          class="lazy loading" data-was-processed="true" style="height: 50px;">
        <div class="tooltip"><span class="tooltip-inner"> Interior photography </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/reuters-min.png"
          class="lazy loading" data-was-processed="true" style="height: 50px;">
        <div class="tooltip"><span class="tooltip-inner"> Photography assistance </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/splash-min.png"
          class="lazy loading" data-was-processed="true" style="height: 45px;">
        <div class="tooltip"><span class="tooltip-inner"> Web design, development, admin work; photo, video, print
            design </span></div>
      </div>
      <div class="brandlogo"><img src="https://ktut.github.io/portfolio/assets/logos-upload/suntimes-min.png"
          class="lazy loading" data-was-processed="true" style="height: 72px;">
        <div class="tooltip"><span class="tooltip-inner"> Web design, development, admin work; photo, video, print
            design </span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brandlogo {
  position: relative;
  flex-shrink: 0;
  /* width: 250px; */
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
  width: 100%;
  display: block;
  text-align: center;
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

.outer-logo-slider {
  padding-top: 25px;
}

@media (min-width: 451px) {
  .inner-logo-slider:hover {
    animation-play-state: paused;
  }
}

.inner-logo-slider {
  position: relative;
  animation: marquee 40s linear infinite;
  animation-direction: alternate;
  display: flex;
  align-items: center;
  padding-bottom: 25px;
}

@media (min-width: 451px) {
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-3300px);
    }
  }
}

@media (max-width: 450px) {
  .inner-logo-slider {
    flex-wrap: wrap;
    justify-content: center;
    animation: marquee 40s linear infinite;
    animation-direction: alternate;
    width: 960px;
  }

  .brandlogo {
    margin: 10px 27px;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-600px);
    }
  }
}
</style>

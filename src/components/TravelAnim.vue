<script>
export default {
  name: 'TravelAnim',
  data() {
    return {
      // Animation data
    }
  },
  mounted() {
    // Initialize animation
  }
}
</script>

<template>
  <div class="image-top-group" v-view-transition-name="'travel-anim'">
    <div class="parallax__layer parallax__layer--back">
      <img src="@/assets/g0.png" srcset="@/assets/g0-lo.png 480w, @/assets/g0.png 1920w"
        sizes="(max-width: 768px) 480px, 1920px" alt="Background layer" />
    </div>
    <div class="parallax__layer parallax__layer--base">
      <img src="@/assets/g1.png" srcset="@/assets/g1-lo.png 480w, @/assets/g1.png 1920w"
        sizes="(max-width: 768px) 480px, 1920px" alt="Middle layer" />
    </div>
    <div class="parallax__layer parallax__layer--fore">
      <img src="@/assets/g2.png" srcset="@/assets/g2-lo.png 480w, @/assets/g2.png 1920w"
        sizes="(max-width: 768px) 480px, 1920px" alt="Foreground layer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes breathe-fore {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.12);
  }
}

@keyframes breathe-base {

  0%,
  100% {
    transform: scale(1) translateX(0) translateY(0);
  }

  50% {
    transform: scale(1.04) translateX(-5px) translateY(-4px);
  }
}

// @keyframes breathe-back {

//   0%,
//   100% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(1);
//   }
// }

.image-top-group {
  position: relative;
  transform-style: preserve-3d;
  margin: 0 auto;
  width: 100%;
  height: 450px;
  overflow: hidden;

  @media (min-width: 1000px) {
    height: 640px;
  }

  .parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  // .parallax__layer--back {
  //   // transform: translateZ(-2px) scale(3);
  //   // z-index: 1;
  //   transform-origin: top center;
  //   animation: breathe-back 12s ease-in-out infinite;
  // }

  /* Middle layer - slow scroll (g1.svg) */
  .parallax__layer--base {
    // transform: translateZ(-1px) scale(2);
    // z-index: 2;
    animation: breathe-base 12s ease-in-out infinite;
  }

  /* Top layer - faster scroll (g2.svg) */
  .parallax__layer--fore {
    // transform: translateZ(-0.5px) scale(1.5);
    // z-index: 3;
    animation: breathe-fore 12s ease-in-out infinite;
  }
}
</style>

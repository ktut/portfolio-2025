<script>
export default {
  name: 'Tout',
  data() {
    return {
      animate: true,
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.animate = !this.animate;
    }, 2000);
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
}
</script>

<template>
  <div class="tout" :class="{ animate: animate }">
    <img class="layer-1" src="@/assets/tout-5.png">
    <img class="layer-2" src="@/assets/tout-4.png">
    <img class="layer-3" src="@/assets/tout-3.png">
    <img class="layer-4" src="@/assets/tout-2.png">
    <img class="layer-5" src="@/assets/tout-1.png">
  </div>
</template>

<style lang="scss" scoped>
.tout {
  position: relative;
  max-width: 100%;
  height: 0px;
  padding-bottom: 70%;
  -webkit-perspective: 1500px;
  perspective: 1500px;
  -webkit-perspective-origin: center center;
  perspective-origin: center center;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: transform 1s ease-out;

  .layer-1,
  .layer-2,
  .layer-3,
  .layer-4,
  .layer-5 {
    transition: transform 2s ease, filter 2s ease;
    filter: drop-shadow(3px 3px 25px rgba(0, 0, 0, 0));
  }

  &.animate {
    // -webkit-transform: rotateY(25deg) rotateZ(-10deg);
    transform: rotateY(-30deg) rotateZ(-5deg);

    .layer-1,
    .layer-2,
    .layer-3,
    .layer-4,
    .layer-5 {
      filter: drop-shadow(3px 3px 25px rgba(0, 0, 0, 1));
    }

    .layer-1 {
      transform: translateX(-50px) translateY(-40px);
    }

    .layer-2 {
      transform: translateX(-20px) translateY(-20px);
    }

    .layer-3 {
      transform: translateX(0px) translateY(0px);
    }

    .layer-4 {
      transform: translateX(20px) translateY(20px);
    }

    .layer-5 {
      transform: translateX(50px) translateY(40px);
    }

  }

  >img {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: transform 1s ease-out;
    transition: transform 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

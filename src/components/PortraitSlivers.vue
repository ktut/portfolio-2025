<script>
export default {
  name: 'PortraitSlivers',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  mounted() {
    this.startAnimation()
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    startAnimation() {
      this.timer = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.images.length
      }, 3500)
    }
  }
}
</script>

<template>
  <div class="photo-composite">
    <div class="sliver-container">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Portrait"
        :class="['portrait-sliver', { active: index === activeIndex }, `image-${index}`]">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo-composite {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;

  .sliver-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
  }

  .portrait-sliver {
    height: 100%;
    width: 60px;
    object-fit: cover;
    object-position: center 25%;
    flex-shrink: 0;
    filter: grayscale(40%);
    position: relative;
    clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
    margin-right: 2px;
    opacity: 0.6;
    transition: all 0.8s ease-in-out;

    @media (min-width: 840px) {
      width: 100px;
      margin-right: 3px;
    }

    &:last-child {
      margin-right: 0;
    }

    &.active {
      width: 250px;
      filter: grayscale(0%);
      opacity: 1;
      z-index: 3;
      transform: scale(1.05);
      object-position: center 35%;

      @media (min-width: 840px) {
        width: 400px;
        object-position: center 40%;
      }
    }

    // First image (ruffalo) - crop to show face better
    &.image-0.active {
      object-position: center 20%;

      @media (min-width: 840px) {
        object-position: center 25%;
      }
    }

    // Third image (00-aless) - crop to show face, not chest
    &.image-2.active {
      object-position: center 15%;

      @media (min-width: 840px) {
        object-position: center 18%;
      }
    }
  }
}
</style>

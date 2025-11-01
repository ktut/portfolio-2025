<script>
export default {
  name: 'PortraitSlivers',
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="photo-composite">
    <div class="sliver-container">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Portrait" class="portrait-sliver">
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
  background: #000;

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
    animation: sliverPan 20s ease-in-out infinite;
  }

  .portrait-sliver {
    height: 100%;
    width: 100px;
    object-fit: cover;
    object-position: center 25%;
    flex-shrink: 0;
    filter: grayscale(20%);
    position: relative;
    margin-left: -8px;

    @media (min-width: 840px) {
      width: 180px;
      margin-left: -12px;
    }

    &:first-child {
      margin-left: 0;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 20px;
      background: linear-gradient(to right, #000 0%, transparent 100%);
      z-index: 5;
      transform: skewX(-10deg);
      transform-origin: top left;

      @media (min-width: 840px) {
        width: 28px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 20px;
      background: linear-gradient(to left, #000 0%, transparent 100%);
      z-index: 5;
      transform: skewX(-10deg);
      transform-origin: top right;

      @media (min-width: 840px) {
        width: 28px;
      }
    }
  }
}

@keyframes sliverPan {
  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-5%);
  }
}
</style>

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
    clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
    margin-right: 2px;

    @media (min-width: 840px) {
      width: 180px;
      margin-right: 3px;
    }

    &:last-child {
      margin-right: 0;
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

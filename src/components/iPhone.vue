<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'iPhone',
  setup() {
    const iphoneVideo = ref(null)
    const isRotated = ref(false)

    const handleScroll = () => {
      if (!iphoneVideo.value) return

      const rect = iphoneVideo.value.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0

      if (window.scrollY === 0) {
        // User scrolled back to the top
        isRotated.value = false
      } else if (isInViewport) {
        // Element is in viewport
        isRotated.value = true
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      iphoneVideo,
      isRotated
    }
  }
}
</script>

<template>
  <div class="iphone-container">
    <div ref="iphoneVideo" class="iphone-video" :class="{ rotated: isRotated }">
      <video width="100%" autoplay loop muted playsinline src="@/assets/PD-mobile-walkthrough.mov"></video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iphone-container {
  width: 375px;
  height: 810px;
  margin: 0 auto;
  -webkit-perspective: 1500px;
  perspective: 1500px;
  -webkit-perspective-origin: center center;
  perspective-origin: center center;

  .iphone-video {
    -webkit-transform: rotateY(0deg) rotateZ(0deg);
    transform: rotateY(0deg) rotateZ(0deg);

    &.rotated {
      -webkit-transform: rotateY(-25deg) rotateZ(10deg);
      transform: rotateY(-25deg) rotateZ(10deg);
    }

    &:hover {
      -webkit-transform: rotateY(0deg) rotateZ(0deg);
      transform: rotateY(0deg) rotateZ(0deg);
    }
  }
}

.iphone-video {
  position: relative;
  width: 375px;
  height: 783px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: transform 0.6s ease-out;
  transition: transform 0.6s ease-out;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 375px;
    height: 783px;
    display: block;
    -webkit-border-radius: 67.5px;
    border-radius: 67.5px;
    -webkit-filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
    filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
    -webkit-transform: translateZ(5px);
    transform: translateZ(5px);
    z-index: 3;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 375px;
    height: 783px;
    background-color: #a3a3a3;
    background-image: -webkit-linear-gradient(top, hsl(0, 0%, 50%), hsl(0, 0%, 75%));
    background-image: linear-gradient(to bottom, hsl(0, 0%, 50%), hsl(0, 0%, 75%));
    -webkit-border-radius: 67.5px;
    border-radius: 67.5px;
    -webkit-transform: translateZ(-15px);
    transform: translateZ(-15px);
    pointer-events: none;
    z-index: 0;
  }
}
</style>
<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

export default {
  name: 'IPhone',
  setup() {
    const iphoneVideo = ref(null)
    const rotationY = ref(-25) // Default rotation (-50 to 50 range)
    const isDragging = ref(false)
    const startX = ref(0)
    const startRotation = ref(0)

    // Compute rotateZ based on rotateY (inverse relationship)
    // When Y is -50, Z is 10; when Y is 50, Z is -10
    const rotationZ = computed(() => {
      return (rotationY.value / -50) * 10
    })

    const transformStyle = computed(() => {
      return `rotateY(${rotationY.value}deg) rotateZ(${rotationZ.value}deg)`
    })

    const handleStart = (clientX) => {
      isDragging.value = true
      startX.value = clientX
      startRotation.value = rotationY.value
    }

    const handleMove = (clientX) => {
      if (!isDragging.value) return

      const deltaX = clientX - startX.value
      // Map drag distance to rotation (adjust sensitivity as needed)
      const rotationDelta = deltaX * 0.2
      let newRotation = startRotation.value + rotationDelta

      // Clamp rotation between -50 and 50
      newRotation = Math.max(-50, Math.min(50, newRotation))
      rotationY.value = newRotation
    }

    const handleEnd = () => {
      isDragging.value = false
    }

    // Mouse events
    const handleMouseDown = (e) => {
      handleStart(e.clientX)
    }

    const handleMouseMove = (e) => {
      handleMove(e.clientX)
    }

    const handleMouseUp = () => {
      handleEnd()
    }

    // Touch events
    const handleTouchStart = (e) => {
      handleStart(e.touches[0].clientX)
    }

    const handleTouchMove = (e) => {
      handleMove(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
      handleEnd()
    }

    onMounted(() => {
      // Add global mouse/touch event listeners
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('touchend', handleTouchEnd)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    })

    return {
      iphoneVideo,
      transformStyle,
      isDragging,
      handleMouseDown,
      handleTouchStart
    }
  }
}
</script>

<template>
  <div class="iphone-container">
    <div
      ref="iphoneVideo"
      class="iphone-video"
      :class="{ dragging: isDragging }"
      :style="{ transform: transformStyle }"
      @mousedown="handleMouseDown"
      @touchstart="handleTouchStart"
    >
      <video width="100%" autoplay loop muted playsinline src="@/assets/PD-mobile-walkthrough.mov" />
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
}

.iphone-video {
  position: relative;
  width: 375px;
  height: 783px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  transition: transform 0.3s ease;

  &.dragging {
    cursor: grabbing;
  }

  // Hover effect on desktop only
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: rotateY(25deg) rotateZ(-5deg) !important;
    }
  }

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
    pointer-events: none;
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
<script>
export default {
  name: 'ChicagoMagView',
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true;
  },
}
</script>

<template>
  <div class="chicago-mag" :class="{ loaded: loaded }">
    <div class="video-bg">
      <video src="../assets/vid-1.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-2.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-3.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-4.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-5.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-6.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-7.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-8.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-9.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-10.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-11.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-12.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-13.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-14.mov" autoplay loop muted playsinline></video>
    </div>
    <div class="video-bg">
      <video src="../assets/vid-15.mov" autoplay loop muted playsinline></video>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

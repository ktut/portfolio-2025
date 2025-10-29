<script>
export default {
  name: 'iPhone',
}
</script>

<template>
  <video class="iphone-video" width="100%" autoplay loop muted playsinline
    src="@/assets/PD-mobile-walkthrough.mov"></video>
</template>

<style lang="scss" scoped>
.iphone-video {
  width: 250px;
  display: block;
  width: 250px;
  border-radius: 45px;
  -webkit-filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
  filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
  z-index: 1;
}
</style>
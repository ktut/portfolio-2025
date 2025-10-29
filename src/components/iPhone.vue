<script>
export default {
  name: 'iPhone',
}
</script>

<template>
  <div class="iphone-video">
    <video width="100%" autoplay loop muted playsinline src="@/assets/PD-mobile-walkthrough.mov"></video>
  </div>
</template>

<style lang="scss" scoped>
.iphone-video {
  position: relative;
  width: 250px;
  height: 540px;
  margin: 0 auto;
  -webkit-perspective: 1500px;
  perspective: 1500px;
  -webkit-perspective-origin: center center;
  perspective-origin: center center;

  &:hover>video {
    -webkit-transform: rotateY(-35deg);
    transform: rotateY(-35deg);
  }

  video {
    position: relative;
    width: 250px;
    height: 522px;
    display: block;
    -webkit-border-radius: 45px;
    border-radius: 45px;
    -webkit-filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
    filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: transform 0.6s ease-out;
    transition: transform 0.6s ease-out;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 540px;
    background-color: #a3a3a3;
    background-image: -webkit-linear-gradient(left, hsl(0, 0%, 60%), hsl(0, 0%, 80%));
    background-image: linear-gradient(to right, hsl(0, 0%, 60%), hsl(0, 0%, 80%));
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-transform: rotateY(90deg) translateZ(5px);
    transform: rotateY(90deg) translateZ(5px);
    -webkit-transform-origin: left center;
    transform-origin: left center;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    pointer-events: none;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 540px;
    background-color: #b8b8b8;
    background-image: -webkit-linear-gradient(right, hsl(0, 0%, 60%), hsl(0, 0%, 80%));
    background-image: linear-gradient(to left, hsl(0, 0%, 60%), hsl(0, 0%, 80%));
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-transform: rotateY(-90deg) translateZ(5px);
    transform: rotateY(-90deg) translateZ(5px);
    -webkit-transform-origin: right center;
    transform-origin: right center;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    pointer-events: none;
    z-index: 1;
  }
}
</style>
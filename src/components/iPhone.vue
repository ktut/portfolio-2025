<script>
export default {
  name: 'iPhone',
}
</script>

<template>
  <div class="iphone-container">
    <div class="iphone-video">
      <video width="100%" autoplay loop muted playsinline src="@/assets/PD-mobile-walkthrough.mov"></video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iphone-container {
  width: 250px;
  height: 540px;
  margin: 0 auto;
  -webkit-perspective: 1500px;
  perspective: 1500px;
  -webkit-perspective-origin: center center;
  perspective-origin: center center;

  &:hover .iphone-video {
    -webkit-transform: rotateY(-35deg);
    transform: rotateY(-35deg);
  }
}

.iphone-video {
  position: relative;
  width: 250px;
  height: 522px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: transform 0.6s ease-out;
  transition: transform 0.6s ease-out;

  video {
    position: relative;
    width: 250px;
    height: 522px;
    display: block;
    -webkit-border-radius: 45px;
    border-radius: 45px;
    -webkit-filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
    filter: drop-shadow(5px 13px 9px rgba(0, 0, 0, .8));
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 522px;
    background-color: #a3a3a3;
    background-image: -webkit-linear-gradient(top, hsl(0, 0%, 50%), hsl(0, 0%, 75%));
    background-image: linear-gradient(to bottom, hsl(0, 0%, 50%), hsl(0, 0%, 75%));
    -webkit-border-radius: 45px;
    border-radius: 45px;
    -webkit-transform: translateZ(-10px);
    transform: translateZ(-10px);
    pointer-events: none;
    z-index: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 522px;
    background-color: #1a1a1a;
    background-image: -webkit-linear-gradient(left, hsl(0, 0%, 10%), hsl(0, 0%, 25%));
    background-image: linear-gradient(to right, hsl(0, 0%, 10%), hsl(0, 0%, 25%));
    -webkit-transform: translateX(-5px) rotateY(90deg);
    transform: translateX(-5px) rotateY(90deg);
    -webkit-transform-origin: right center;
    transform-origin: right center;
    pointer-events: none;
    z-index: 1;
  }
}
</style>
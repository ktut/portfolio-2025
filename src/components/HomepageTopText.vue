<script>
export default {
  name: 'HomepageTopText',
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    // Delay to appear after NavBar starts loading (NavBar loads at 100ms in App.vue)
    setTimeout(() => {
      this.isLoaded = true;
    }, 200);
  }
}
</script>
<template>
  <section class="homepage-top-text" :class="{ 'slide-in': isLoaded }">
    <h1>Hi, Iʼm <span class="first-name-expand">Ramzi.</span> </h1>

    <p>I build websites that people like to poke and prod at with their tiny screens.</p>
    <p>More formally, I’m a
      multimedia
      “do-it-all” with <span class="hightlight high">high-level</span> experience in <b>front-end software
        engineering</b>, <b>web/print design</b>, <b>photography</b> and <b>video</b>, and <span
        class="hightlight low">low-level</span>
      experience in <b>making memes</b> and being a <b>dad</b>. </p>
  </section>
</template>
<style lang="scss" scoped>
.homepage-top-text {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px 0;
  opacity: 0;
  transform: translateY(-30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);

  &.slide-in {
    opacity: 1;
    transform: translateY(0);
  }

  @media (min-width: 720px) {
    text-align: center;
    text-wrap: balance;
    padding: 32px;
  }

  h1 {
    text-align: left;
    margin-bottom: 2rem;
    font-variation-settings: "wght" 50, "ital" 400;
    font-size: 3.3rem;

    @media (min-width: 720px) {
      text-align: center;
    }

    .first-name-expand {
      animation-name: font-expand-anim;
      animation-duration: 1s;
      animation-iteration-count: once;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }

  @keyframes font-expand-anim {
    from {
      font-variation-settings: "wght" 100, "ital" 400;
    }

    to {
      font-variation-settings: "wght" 700, "ital" 900;
    }
  }

  h2 {
    margin-top: 1rem;
  }

  p {
    font-size: 1.08rem;
    margin-top: 1rem;
    color: $textColor;
    font-variation-settings: 'wdth' 120, 'wght' 500;
    text-align: left;

    b {
      font-variation-settings: "wght" 800, "ital" 900;
    }

    @media screen and (min-width: 720px) {
      text-align: center;
    }

    .hightlight {
      display: inline-block;

      &.high {
        position: relative;
        font-variation-settings: 'wght' 600;
        animation: gentle-up 3s ease-in-out infinite;
      }

      &.low {
        animation: gentle-down 3s ease-in-out infinite;
      }
    }
  }

  @keyframes underline-draw {
    0% {
      transform: scaleX(0);
    }

    50% {
      transform: scaleX(1);
    }

    100% {
      transform: scaleX(0);
    }
  }

  @keyframes gentle-down {

    0%,
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }

    50% {
      transform: translateY(2px) scale(0.98);
      opacity: 0.85;
    }
  }

  @keyframes gentle-up {

    0%,
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }

    50% {
      transform: translateY(-2px) scale(0.98);
      opacity: 0.85;
    }
  }
}
</style>
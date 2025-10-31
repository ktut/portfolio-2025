<script>
export default {
  name: 'HomepageTopText',
}
</script>
<template>
  <section class="homepage-top-text">
    <h1>Hi, Iʼm <span class="first-name-expand">Ramzi.</span> </h1>

    <p>I build websites that people like to poke and prod at with their tiny screens.</p>
    <p>More formally, I’m a
      multimedia
      “do-it-all” with <span class="hightlight high">high-level</span> experience in <b>front-end software
        engineering</b>, <b>web/print design</b>,
      <b>photography</b> and <b>video</b>, and <span class="hightlight low">low-level</span> experience in
      <b>making memes</b> and <b>being a dad</b>.
    </p>
  </section>
</template>
<style lang="scss" scoped>
.homepage-top-text {
  padding: 32px 16px 0;

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
    font-size: 1.1rem;
    margin-top: 1rem;
    color: $headingColor;
    font-variation-settings: 'wdth' 120, 'wght' 500;
    text-align: left;

    b {
      font-variation-settings: "wght" 800, "ital" 900;
    }

    @media screen and (min-width: 720px) {
      text-align: center;
    }
  }
}
</style>
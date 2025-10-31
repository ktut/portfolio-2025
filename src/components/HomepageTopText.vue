<script>
export default {
  name: 'HomepageTopText',
}
</script>
<template>
  <section class="homepage-top-text">
    <h1>Hi, Iʼm <span>Ramzi.</span> </h1>

    <p>I build websites that people like to poke and prod at with their tiny screens. More formally, I’m a
      multimedia
      “do-it-all” with high-level experience in <b>front-end software engineering</b>, <b>web/print design</b>,
      <b>photography</b>, <b>video</b>,
      <b>making memes</b>, and more.
    </p>
  </section>
</template>
<style lang="scss" scoped>
.homepage-top-text {
  text-align: center;
  margin-bottom: 4rem;
  padding: 16px 16px 0;
  text-wrap: balance;

  @media screen and (min-width: 720px) {
    padding: 32px;
  }

  h1 {
    margin-bottom: 1rem;

    span {
      animation-name: font-expand-anim;
      animation-duration: 5s;
      animation-iteration-count: once;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  }

  @keyframes font-expand-anim {
    from {
      font-variation-settings: "wght" 80, "ital" 400;
    }

    to {
      font-variation-settings: "wght" 800, "ital" 900;
    }
  }

  h2 {
    margin-top: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: $headingColor;
  }
}
</style>
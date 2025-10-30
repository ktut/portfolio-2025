<script>
export default {
  name: 'HomepageTopText',
}
</script>
<template>
  <section class="homepage-top-text">
    <h1>Hi, I'm Ramzi. </h1>
    <p>I build websites that thousands of people poke and prod with their tiny screens. More formally, I’m a multimedia
      “do-it-all” with high-level experience in front-end software engineering, web/print design, photography, video,
      making memes, and some newer experience being a dad.
    </p>
  </section>
</template>
<style lang="scss" scoped>
.homepage-top-text {
  text-align: center;
  margin-bottom: 4rem;
  padding: 16px 16px 0;
  text-wrap: balance;
}

h1 {
  display: inline;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  display: inline;
  font-size: 1.2rem;
  font-weight: 400;
}
</style>
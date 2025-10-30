<script>
import iPhone from '@/components/iPhone.vue'

export default {
  components: {
    iPhone
  },
  name: 'ChaseView',
}
</script>

<template>
  <div class="chase">
    <div class="back-link">
      <RouterLink to="/">
        &#x2190; Back to Home
      </RouterLink>
    </div>
    <section class="chase-content">
      <figure class="chase-image">
        <img v-view-transition-name="'img'" alt="test image" src="../assets/Chase-portfolio-mock.jpg"
          style="width: 100%">
      </figure>
      <h1>JPMorgan Chase Performance Dashboard</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </section>
    <iPhone />
  </div>
</template>

<style lang="scss" scoped>
.chase {
  padding: 20px;

  .chase-image {
    @media (min-width: 768px) {
      width: 550px;
      float: right;
    }

    max-width: 100%;

    img {
      width: 100%;
      border-radius: 16px;
    }
  }
}
</style>

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
    <div>
      <RouterLink to="/">
        back to home
      </RouterLink>
    </div>
    <figure class="chase-image">
      <img v-view-transition-name="'img'" alt="test image" src="../assets/Chase-portfolio-mock.jpg" style="width: 100%">
    </figure>
    <iPhone />
  </div>
</template>

<style lang="scss" scoped>
.chase {
  padding: 20px;

  .chase-image {
    max-width: 300px;
  }
}
</style>

<script>
export default {
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
    <figure>
      <img v-view-transition-name="'img'" alt="test image" src="../assets/test.jpg" style="width: 100%">
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.chase {
  padding: 20px;
}
</style>

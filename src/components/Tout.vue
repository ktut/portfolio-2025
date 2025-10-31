<script>
export default {
  name: 'Tout',
}
</script>

<template>
  <div class="tout">
    <img src="@/assets/tout-5.png">
    <img src="@/assets/tout-4.png">
    <img src="@/assets/tout-3.png">
    <img src="@/assets/tout-2.png">
    <img src="@/assets/tout-1.png">
  </div>
</template>

<style lang="scss" scoped>
.tout {
  position: relative;
  max-width: 100%;
  width: 800px;
  height: 0px;
  padding-bottom: 70%;

  >img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

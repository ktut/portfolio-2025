<script>
export default {
  name: 'ChicagoMagView',
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true;
  },
}
</script>

<template>
  <div class="chicago-mag" :class="{ loaded: loaded }">
    <!-- Chicago Magazine content will go here -->
  </div>
</template>

<style lang="scss" scoped></style>

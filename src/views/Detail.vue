<script>
import { RouterLink } from "vue-router";
export default {
  name: "DetailView",
};
</script>

<template>
  <div>
    <RouterLink to="/"> back to home </RouterLink>
  </div>
  <figure>
    <img
      v-view-transition-name="'img'"
      alt="test image"
      src="../assets/test.jpg"
      style="width: 100%"
    />
  </figure>
</template>

<style></style>

<script>
export default {
  name: 'NavBar'
}
</script>

<template>
  <nav>
    <div class="logo">
      <div class="letter r webkitForceHardwareAcceleration">
        <div class="top webkitForceHardwareAcceleration"></div>
        <div class="bottom webkitForceHardwareAcceleration"></div>
      </div>
      <div class="letter k webkitForceHardwareAcceleration">
        <div class="top webkitForceHardwareAcceleration"></div>
        <div class="bottom webkitForceHardwareAcceleration"></div>
      </div>
      <div class="letter d webkitForceHardwareAcceleration">
        <div class="top webkitForceHardwareAcceleration"></div>
        <div class="bottom webkitForceHardwareAcceleration"></div>
      </div>
    </div>
    <div class="nav-links">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

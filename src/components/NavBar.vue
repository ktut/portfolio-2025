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
      color: color(display-p3 0.15 0.81 0.42);
    }
  }

  .letter,
  .letter>div,
  .letter>div>div {
    border: 0px solid #2c3e50;
    border-radius: 0px;
    opacity: 0;
  }

  .logo {
    transform: scaleX(0);
  }

  .logo,
  .logo .letter,
  .logo .letter>div {
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    will-change: transform, opacity;
  }

  .logo,
  .logo .letter {
    transition: transform 0.8s ease 0s, border-radius 3s ease 0s,
      opacity 1s ease 0s;
  }

  .logo .r .top,
  .logo .r .bottom {
    transition: transform 1s ease 0s, border-radius 1.3s ease 0.5s,
      opacity 1s ease 0s;
  }

  .logo .k .top,
  .logo .k .bottom {
    transition: transform 1s ease 0s, border-radius 1.6s ease 0.6s,
      opacity 1s ease 0s;
  }

  .logo .d .top,
  .logo .d .bottom {
    transition: transform 1s ease 0s, border-radius 1.8s ease 0.7s,
      opacity 1s ease 0s;
  }

  .logo {
    display: flex;
    width: 140px;
  }

  &.loaded {
    opacity: 1;

    .letter,
    .letter>div,
    .letter>div>div {
      opacity: 1;
    }

    .logo {
      transform: scaleX(1);

      &.logoIsDimmed {
        mix-blend-mode: lighten;
      }
    }

    .r {
      >div {
        border-left: 10px solid #2c3e50;
        border-top-right-radius: 10em;
      }

      .top {
        border-right: 10px solid #2c3e50;
        border-bottom-right-radius: 10em;
      }

      .bottom {
        border-right: 10px solid #2c3e50;
      }
    }

    .k {
      >div {
        border-left: 10px solid #2c3e50;
        border-right: 10px solid #2c3e50;
      }

      .top {
        border-bottom-right-radius: 5em;
      }

      .bottom {
        border-top-right-radius: 5em;
      }
    }

    .d {
      >div {
        border-left: 10px solid #2c3e50;
        border-right: 10px solid #2c3e50;
      }

      .top {
        border-top-right-radius: 5em;
      }

      .bottom {
        border-bottom-right-radius: 5em;
      }
    }
  }
}

.letter {
  flex-grow: 1;
}

.letter:not(:first-of-type) {
  margin-left: 2em;
}

.letter>div {
  min-height: 1em;
}



nav {
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1) 1.2s,
    height 0.4s cubic-bezier(0.77, 0, 0.175, 1) 1.2s;
}

// @media (prefers-reduced-motion: reduce) {
//   * {
//     transition: none !important;
//   }
// }</style>

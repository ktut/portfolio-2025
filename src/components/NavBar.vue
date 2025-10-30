<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'home'
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<template>
  <nav>
    <div :class="{ 'back-link': true, 'home-page': isHomePage }">
      <RouterLink to="/">
        <span class="arrow">←</span> Back
      </RouterLink>
    </div>
    <div class="logo" @click="goHome">
      <div class="letter r webkitForceHardwareAcceleration">
        <div class="top webkitForceHardwareAcceleration" />
        <div class="bottom webkitForceHardwareAcceleration" />
      </div>
      <div class="letter k webkitForceHardwareAcceleration">
        <div class="top webkitForceHardwareAcceleration" />
        <div class="bottom webkitForceHardwareAcceleration" />
      </div>
      <div class="letter d webkitForceHardwareAcceleration">
        <div class="top webkitForceHardwareAcceleration" />
        <div class="bottom webkitForceHardwareAcceleration" />
      </div>
    </div>
    <button :class="{ 'hamburger-button': true, 'active': mobileMenuOpen }" aria-label="Toggle menu"
      @click="toggleMobileMenu">
      <span />
      <span />
      <span />
    </button>
    <div :class="{ 'nav-links': true, 'mobile-open': mobileMenuOpen }">
      <a href="/Resume-Ramzi-Dreessen-2025.pdf" download="Resume-Ramzi-Dreessen-2025.pdf"
        class="social-icon resume-icon" aria-label="Download Resume" @click="closeMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 32 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <!-- Back paper -->
          <rect x="3" y="1" width="13" height="18" rx="1" fill="currentColor" opacity="0.15" stroke="none" />
          <!-- Middle paper -->
          <rect x="2" y="2" width="13" height="18" rx="1" fill="currentColor" opacity="0.25" stroke="none" />
          <!-- Front paper -->
          <rect x="1" y="3" width="13" height="18" rx="1" fill="none" stroke="currentColor" />
          <!-- CV text lines -->
          <line x1="3.5" y1="6" x2="6" y2="6" stroke="currentColor" stroke-width="1" />
          <line x1="3.5" y1="9" x2="11.5" y2="9" stroke="currentColor" stroke-width="1" />
          <line x1="3.5" y1="11.5" x2="11.5" y2="11.5" stroke="currentColor" stroke-width="1" />
          <line x1="3.5" y1="14" x2="11.5" y2="14" stroke="currentColor" stroke-width="1" />
          <line x1="3.5" y1="16.5" x2="11.5" y2="16.5" stroke="currentColor" stroke-width="1" />
          <!-- Download arrow -->
          <polyline points="20 15 23 18 26 15" stroke="currentColor" stroke-width="1.8" fill="none" />
          <line x1="23" y1="18" x2="23" y2="11" stroke="currentColor" stroke-width="1.8" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/ramzidreessen/" target="_blank" rel="noopener noreferrer" class="social-icon"
        aria-label="LinkedIn" @click="closeMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
      <a href="https://github.com/ktut" target="_blank" rel="noopener noreferrer" class="social-icon"
        aria-label="GitHub" @click="closeMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <router-link to="/" @click="closeMobileMenu">
        Work
      </router-link>
      <router-link to="/about" @click="closeMobileMenu">
        About
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  padding: 16px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 24px;
  }

  .hamburger-button {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 22px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    span {
      width: 100%;
      height: 3px;
      background-color: $textColor;
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &.active {
      span:nth-child(1) {
        transform: translateY(9.5px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }

      span:nth-child(3) {
        transform: translateY(-9.5px) rotate(-45deg);
      }
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  a {
    font-weight: bold;
    color: $textColor;
    text-decoration: none;

    &.router-link-exact-active {
      color: $redPunch;
    }

    &.social-icon {
      display: flex;
      align-items: center;
      -webkit-transition: transform 0.2s ease, color 0.2s ease;
      transition: transform 0.2s ease, color 0.2s ease;

      svg {
        width: 20px;
        height: 20px;
      }

      &.resume-icon svg {
        width: 32px;
        height: 22px;
        margin-right: -10px;
      }

      &:hover {
        color: $redPunch;
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
      }
    }
  }

  .letter,
  .letter>div,
  .letter>div>div {
    border: 0px solid $textColor;
    border-radius: 0px;
    opacity: 0;
  }

  .logo {
    cursor: pointer;
    transform: scaleX(0.0) scaleY(0.75);
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
      transform: scaleX(0.75) scaleY(0.75);

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

// Mobile menu styles (only active at 450px and below)
@media (max-width: 450px) {
  nav {
    .hamburger-button {
      display: flex;
      margin-left: 20px;
    }

    .nav-links {
      position: absolute;
      top: 100%;
      right: 0;
      flex-direction: column;
      background: white;
      padding: 0;
      margin: 0;
      gap: 0;
      border-radius: 0 0 0 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s ease;
      pointer-events: none;

      &.mobile-open {
        max-height: 400px;
        opacity: 1;
        pointer-events: auto;
      }

      a,
      a.social-icon {
        width: 100%;
        padding: 16px 24px;
        text-align: left;
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease,
          background-color 0.2s ease, color 0.2s ease;

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        svg {
          margin-right: 10px;
        }

        &.resume-icon svg {
          margin-right: 0;
        }
      }

      &.mobile-open {

        a,
        a.social-icon {
          opacity: 1;
          transform: translateY(0);
        }

        // Staggered animation for each link
        a:nth-child(1),
        a.social-icon:nth-child(1) {
          transition-delay: 0.05s;
        }

        a:nth-child(2),
        a.social-icon:nth-child(2) {
          transition-delay: 0.1s;
        }

        a:nth-child(3),
        a.social-icon:nth-child(3) {
          transition-delay: 0.15s;
        }

        a:nth-child(4),
        a.social-icon:nth-child(4) {
          transition-delay: 0.2s;
        }

        a:nth-child(5),
        a.social-icon:nth-child(5) {
          transition-delay: 0.25s;
        }
      }
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>

<script>
import LogoSlider from './LogoSlider.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'FooterSection',
  components: {
    LogoSlider
  },
  setup() {
    const router = useRouter()

    const projectLinks = computed(() => {
      return router.getRoutes()
        .filter(route => {
          const name = route.name?.toLowerCase()
          return name && name !== 'home' && name !== 'about' && route.meta?.displayName
        })
        .map(route => ({
          path: route.path,
          name: route.meta.displayName
        }))
    })

    return {
      projectLinks
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer>
    <hr />
    <div class="project-links">
      <h3>Work I’ve done:</h3>
      <nav>
        <router-link v-for="link in projectLinks" :key="link.path" :to="link.path" class="project-link">
          {{ link.name }}
        </router-link>
      </nav>
    </div>
    <h3>Who I’ve worked with:</h3>
    <LogoSlider />
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; {{ currentYear }} Ramzi Dreessen</p>
      </div>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/ramzidreessen/" target="_blank" rel="noopener noreferrer"
          aria-label="LinkedIn">
          LinkedIn
        </a>
        <span class="separator">|</span>
        <a href="https://github.com/ktut" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          GitHub
        </a>
        <span class="separator">|</span>
        <a href="/Resume-Ramzi-Dreessen-2025.pdf" download="Resume-Ramzi-Dreessen-2025.pdf"
          aria-label="Download Resume">
          Resume
        </a>
      </div>
    </div>
    <div class="sub-footer-content">
      Photo and video content is protected by U.S. Copyright Law and is NOT Public Domain, and may not be manipulated,
      copied, published, reproduced, downloaded, or used in any manner without prior consent of Ramzi Dreessen. Select
      web design and photo content is copyrighted by SPLASH PUBLICATIONS, LLC, Tribune Publishing or Fitch Ratings and
      may not be manipulated, copied, published, reproduced, downloaded, or used in any manner without prior consent of
      SPLASH PUBLICATIONS, LLC, Tribune Publishing or Fitch Ratings. All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;
  padding: 0 0rem 2rem;

  h3 {
    color: $headingColor;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .project-links {
    padding: 2rem 2rem 1rem;
    text-align: center;
    font-variation-settings: 'wdth' 150, 'wght' 500;

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      .project-link {
        color: $textColor;
        text-decoration: none;
        font-size: 1rem;
        letter-spacing: 0.01em;
        padding: 0.5rem 1rem;
        border: 1px solid rgba(90, 94, 99, 0.3);
        border-radius: 4px;
        transition: all 0.2s ease;

        &:hover {
          color: $redPunch;
          border-color: $redPunch;
          background-color: rgba(237, 28, 36, 0.05);
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.75rem;

        .project-link {
          width: 100%;
          max-width: 300px;
        }
      }
    }
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
  }

  .footer-left {
    padding-left: 2rem;

    @media (max-width: 768px) {
      padding-left: 0rem;
    }

    p {
      margin: 0;
      color: #5a5e63;
      font-size: 0.9rem;
      letter-spacing: 0.01em;
    }
  }

  .footer-links {
    display: flex;
    align-items: center;
    padding-right: 2rem;

    @media (max-width: 768px) {
      padding-right: 0rem;
    }

    gap: 1rem;

    a {
      color: $textColor;
      text-decoration: none;
      font-size: 0.9rem;
      letter-spacing: 0.01em;
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;

      &:hover {
        color: $redPunch;
      }
    }

    .separator {
      color: #999;
      font-size: 0.9rem;
    }
  }

  .sub-footer-content {
    max-width: 1200px;
    margin: 0 auto;
    color: #5a5e63;
    font-size: 0.75rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
    text-align: left;
    margin-top: 2.5rem;
    padding: 2rem;
    border-top: 1px solid rgba(90, 94, 99, 0.2);

    @media (max-width: 768px) {
      text-align: center;
      font-size: 0.7rem;
    }
  }
}
</style>

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
          name: route.meta.displayName,
          icon: getIconForRoute(route.name)
        }))
    })

    const getIconForRoute = (routeName) => {
      const icons = {
        chase: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
        chasetravel: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/><path d="M17 8h-1a4 4 0 0 0 0 8h1"/></svg>',
        chicagomagazine: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
        'chicagomagazine-subscription': '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
        high5games: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
        suntimes: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        photo: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'
      }
      return icons[routeName?.toLowerCase()] || ''
    }

    return {
      projectLinks
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isLoaded: false
    }
  },
  mounted() {
    // Delay footer animation until after all project links
    // Last project link starts at 400 + (5 * 150) = 1150ms
    setTimeout(() => {
      this.isLoaded = true;
    }, 1600);
  }
}
</script>

<template>
  <footer :class="{ 'fade-in': isLoaded }">
    <hr />
    <div class="project-links">
      <h3>Work I’ve done:</h3>
      <nav>
        <router-link v-for="link in projectLinks" :key="link.path" :to="link.path" class="project-link">
          <span class="icon" v-html="link.icon"></span>
          <span class="link-text">{{ link.name }}</span>
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
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  background-color: #fcfcfc;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  h3 {
    color: $textColor;
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
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;

        .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;

          :deep(svg) {
            display: block;
          }
        }

        .link-text {
          display: inline-block;
        }

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
    font-variation-settings: 'wdth' 180, 'wght' 150;
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

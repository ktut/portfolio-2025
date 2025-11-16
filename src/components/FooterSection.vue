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
        chasetravel: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512"><path fill="currentColor" d="M509.076,261.325c-5.084-63.715-47.892-116.81-109.069-135.275c-4.72-1.418-9.5-2.62-14.316-3.577c7.748-4.268,15.429-8.335,22.859-12.127l6.494-3.31l6.093-2.954c18.74-9.092,36.24-16.506,50.608-21.449L506.33,70.75l-28.767-22.576c-27.029-21.233-60.887-32.915-95.331-32.915c-27.364-0.008-54.357,7.377-78.054,21.352c-19.208,11.318-35.61,26.658-48.19,44.752c-12.572-18.101-28.981-33.449-48.174-44.752c-23.69-13.968-50.683-21.352-78.054-21.352c-34.437,0-68.295,11.682-95.332,32.908L5.655,70.75l34.592,11.882c14.376,4.943,31.876,12.357,50.608,21.449l6.019,2.924l6.576,3.354c7.399,3.763,15.088,7.829,22.851,12.112c-4.809,0.958-9.589,2.16-14.316,3.577C50.816,144.515,7.993,197.609,2.909,261.325L0,297.773l32.188-17.352c13.388-7.214,30.703-15.044,50.089-22.636l5.982-2.36l7.17-2.658c8.194-3.02,17.018-6.115,26.243-9.188l3.689-1.232l5.373-1.722c4.757-1.521,9.566-3.021,14.457-4.498c4.379-1.321,8.713-2.583,13.025-3.807l7.081-2.011l4.23-1.15c15.304-4.156,30.295-7.741,44.426-10.68l-8.223,278.262h100.542l-8.231-278.262c14.138,2.939,29.123,6.531,44.419,10.68l4.378,1.18l6.939,1.982c4.32,1.224,8.646,2.479,13.018,3.807c4.899,1.477,9.708,2.976,14.458,4.498l5.566,1.788l3.495,1.166c9.211,3.058,18.043,6.152,26.258,9.203l7.103,2.627l6.041,2.375c19.401,7.608,36.723,15.437,50.097,22.636L512,297.773L509.076,261.325z M226.213,476.843l1.581-53.146h56.405l1.573,53.146H226.213z M280.027,282.492l1.7,57.332h-51.454l1.699-57.332H280.027z M232.358,269.229l1.61-54.564c7.778-1.336,15.192-2.45,22.028-3.266c6.843,0.816,14.25,1.93,22.035,3.266l1.61,54.564H232.358z M282.112,353.087l1.7,57.34h-55.626l1.693-57.34H282.112z M436.982,239.26l-14.48-39.647l0.98,34.511c-8.594-3.191-14.487-5.774-23.779-8.861l-15.2-33.249l2.812,29.664c-4.846-1.551-9.76-3.087-14.769-4.601c-4.468-1.351-8.906-2.635-13.307-3.89l-12.736-31.623l-1.9,27.549c-35.038-9.508-63.804-14.977-88.608-17.738c-24.796,2.761-51.143,6.33-86.188,15.838l-5.7-38.949l-11.348,44.923c-4.408,1.255-8.838,2.538-13.322,3.89c-5.002,1.514-7.519,1.885-12.379,3.436l0.802-34.822l-12.469,39.008c-9.292,3.087-14.887,4.022-23.482,7.214l-1.158-41.064L75.011,239.26c-20.418,8-38.215,16.075-52.264,23.645c4.268-53.451,40.545-101.372,94.983-117.797c12.861-3.881,25.842-5.722,38.607-5.722c18.755,0,37.042,3.978,53.8,11.311c-8.98-6.175-18.472-12.446-28.506-18.747l13.003-19.675l-23.2,13.374c-3.919-2.39-7.868-4.772-11.904-7.148c-4.505-2.657-6.168-4.719-10.621-7.236l19-19.95l-30.288,14.673c-8.556-4.736-11.889-7.667-20.06-11.823l19-24.7L99.539,86.18c-19.727-9.566-37.724-17.173-52.828-22.362c23.779-18.665,53.162-28.662,83.049-28.662c23.133,0,46.571,5.989,67.953,18.584c28.306,16.691,48.159,42.177,58.282,70.914c10.124-28.736,29.983-54.222,58.283-70.914c21.381-12.595,44.819-18.584,67.953-18.584c29.887,0,59.262,9.997,83.048,28.662c-15.095,5.188-33.101,12.795-52.834,22.362l-42.193-22.413l24.7,30.399c-8.164,4.156-12.016,7.088-20.588,11.823l-31.661-17.523l23.156,22.302c-4.438,2.516-8.891,5.076-13.396,7.733c-4.03,2.375-7.986,4.758-11.897,7.148l-23.215-13.374l13.003,19.675c-10.034,6.301-19.512,12.572-28.514,18.747c16.773-7.34,35.06-11.318,53.815-11.318c12.758,0,25.746,1.848,38.608,5.73c54.438,16.424,90.715,64.346,94.982,117.797C475.203,255.335,457.398,247.261,436.982,239.26z"/></svg>',
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

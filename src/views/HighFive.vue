<script>
import Tout from '@/components/Tout.vue'

export default {
  name: 'HighFiveView',
  components: {
    Tout
  },
  data() {
    return {
      technologies: [
        {
          name: 'React',
          type: 'svg',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z',
              fill: '#61DAFB'
            }
          ]
        },
        {
          name: 'CSS',
          type: 'image',
          src: require('@/assets/css.png')
        },
        {
          name: 'Tailwind',
          type: 'svg',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z',
              fill: '#06B6D4'
            }
          ]
        },
        {
          name: 'Lottie',
          type: 'image',
          src: require('@/assets/lottie.png')
        },
        {
          name: 'Firebase',
          type: 'svg',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z',
              fill: '#FFCA28'
            }
          ]
        }
      ],
    }
  }
}
</script>

<template>
  <main class="high-five">
    <section class="hero">
      <div class="tout-container">
        <Tout :animate="toutAnimate" />
      </div>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          <img src="@/assets/logo-h5g.png" alt="High 5 Games Logo" class="chase-logo">
          High 5 Games casino web design
        </h1>
        <p class="project-subtitle">
          Building a custom carousel banner builder system
        </p>

        <div class="tech-stack">
          <div v-for="tech in technologies" :key="tech.name" class="tech-pill">
            <svg v-if="tech.type === 'svg'" xmlns="http://www.w3.org/2000/svg" :viewBox="tech.viewBox"
              class="tech-icon">
              <path v-for="(path, index) in tech.paths" :key="index" :d="path.d" :fill="path.fill" />
            </svg>
            <img v-else-if="tech.type === 'image'" :src="tech.src" :alt="tech.name" class="tech-icon">
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </header>

      <div class="project-overview">
        <h2 class="section-title">
          Overview
        </h2>
        <p class="lead">
          As an engineer at (<a href="https://high5casino.com/" target="_blank" rel="noreferrer noopener">High 5
            Casino</a>), product and art teams was to implement
          marketing/advertisement/game-link banners (rotating in a carousel) that would accommodate animation and be
          localized for different
          countries, with multiple potential layers, which would move at different speeds while scrolling (i.e.,
          parallax scrolling). There were no existing dependencies that I could find, at the time, that could handle all
          of these requirements. I decided to embark on the long journey of "rolling my own" solution.
        </p>
        <p>
          First I designed a JSON schema to describe all of the objects present (including info for type,
          animation assets from AE/Bodymovin/Lottie, or SVG-masked JPGs/PNGs for image assets). Each object would have
          its location in the CSS Grid layer grid, which could change based on breakpoints (mobile,
          desktop, etc). By leveraging a CSS-first approach, since we already had tight control of the client
          application where the advertising banner (or "Tout", as we called it) was placed, we could use CSS parallax
          instead of a custom JS approach. This was critical as there was already a lot of JS in the application for the
          games themselves.
        </p>
        <p>
          We taught the art team how to upload their assets to a CMS, so they could be referenced easily. In order for
          anyone (not just developers) to be able to assemble these "Touts" (as we called them), I built a custom React
          app that showed these
          layers split apart using CSS transforms, so that different layers could be assembled separately, and then the
          final "Tout" could be saved to AWS S3 and referenced by the client application.
        </p>
      </div>

      <div class="detail-section">

        <div class="detail-grid">
          <div class="detail-item full-width">
            <img src="../assets/tout-builder.png" alt="Builder tool interface">
            <h3>Visual Layer Builder</h3>
            <p>
              The React-based builder tool allowed for placement of links, text, images, video, gradients, and Lottie
              animations within a
              custom CSS Grid structure. For debugging purposes, layers could be "split apart" visualized in 3D space
              using CSS transforms.
            </p>
          </div>

          <div class="detail-item">
            <img src="../assets/tout-output.png" alt="HTML output display">
            <h3>HTML Output Preview</h3>
            <p>
              Here's a sample HTML output. We used atomic CSS classes following a Tailwind-inspired system,
              maintaining low CSS specificity despite DOM complexity.
            </p>
          </div>

          <div class="detail-item">
            <img src="../assets/tout-desktop-grid.png" alt="CSS Grid layout diagram">
            <h3>Rendered Output</h3>
            <p>
              The underlying CSS Grid structure that powers responsive positioning. Every breakpoint key with a pixel
              width (such as '736') allows different content at different viewport sizes.
            </p>
          </div>

          <div class="detail-item">
            <img src="../assets/tout-desktop.png" alt="Final rendered banner">
            <h3>Final Banner</h3>
            <p>
              The final output shows a polished advertising banner with multiple layers, animations, and responsive
              behavior ready for production deployment to S3.
            </p>
          </div>
        </div>
      </div>

      <div class="features-section">
        <h2 class="section-title">
          Key Features
        </h2>
        <ul class="features-list">
          <li>Custom CSS Grid in React with stacked layers for complex layouts</li>
          <li>Support for diverse content types: links, text, images, video, gradients, and Lottie animations</li>
          <li>JSON schema-based configuration for component definitions</li>
          <li>Responsive design with breakpoint-specific content (e.g., different content at '736px', '1024px')</li>
          <li>Atomic CSS classes following a Tailwind-inspired system for maintainable styling</li>
          <li>Area-based object positioning for precise alignment control across the grid</li>
          <li>Multi-layer parallax scrolling with configurable speeds per layer, using only CSS</li>
          <li>Localization support for international markets via tag replacement in Craft CMS</li>
          <li>Visual layer assembly tool with 3D CSS transforms for non-technical users</li>
          <li>Direct S3 export for production deployment</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.high-five {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);

  .tout-container {
    width: 800px;
    max-width: 100%;
  }

  .hero {
    max-width: 800px;

    figure {
      box-shadow: unset;
      padding: 60px;
      background: #fff;
    }
  }

  .detail-item {
    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      margin-bottom: 1rem;
      display: block;
      background-color: #f5f5f5;
      margin-left: auto;
      margin-right: auto;
    }

    &.full-width {
      img {
        max-width: 800px;
      }
    }
  }
}
</style>

<script>
import PostArticleNav from '@/components/PostArticleNav.vue'

export default {
  name: 'ChicagoMagSubscriptionView',
  components: {
    PostArticleNav
  },
  data() {
    return {
      technologies: [
        {
          name: 'CSS',
          type: 'image',
          src: require('@/assets/css.png')
        },
        {
          name: 'Adobe Creative Suite',
          type: 'image',
          src: require('@/assets/photoshop.png')
        },
        {
          name: 'jQuery',
          type: 'image',
          src: require('@/assets/jquery.png')
        }
      ],
    }
  }
}
</script>

<template>
  <main class="chicago-mag-subscription">
    <section class="hero">
      <figure class="hero-image">
        <img alt="Chicago magazine subscription page redesign" src="../assets/ipad-chimag-mock.jpg"
          v-view-transition-name="'chimag-subscription-redesign'">
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          <img src="@/assets/logo-chimag.png" alt="Chicago Magazine Logo" class="chase-logo">
          <em>Chicago</em> subscription page redesign
        </h1>
        <h2 class="project-subtitle">
          Redesigning the subscription experience to drive conversions
        </h2>

        <div class="tech-stack">
          <div v-for="tech in technologies" :key="tech.name" class="tech-pill">
            <svg v-if="tech.type !== 'image'" xmlns="http://www.w3.org/2000/svg" :viewBox="tech.viewBox"
              class="tech-icon">
              <path v-for="(path, index) in tech.paths" :key="index" :d="path.d" :fill="path.fill" />
            </svg>
            <img v-else :src="tech.src" :alt="tech.name" class="tech-icon">
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </header>

      <div class="project-overview">
        <h2 class="section-title">
          The Challenge
        </h2>
        <p class="lead">
          At <a href="http://www.chicagomag.com" target="_blank" rel="noreferrer noopener"><em>Chicago</em>
            magazine</a>, I was tasked with overhauling our subscription page. The old page had few conversions per
          user, and it was clear as to why:
        </p>
        <div class="old-subscription-page-container">
          <img src="../assets/chimag-purchase-old.jpg" alt="Old subscription page" class="old-subscription-page"></img>
        </div>
        <p>
          The most important, relevant and well-produced visuals (the covers) were the smallest elements on the page,
          while the largest page element (the copy) wasn't even relevant to the page's primary purpose (to convert
          visitors into paid subscribers of the print product). Hiding the most important fields within tabs prevented
          the user from easily accessing them, and it wasn't even clear what order the tabs were meant to be clicked.
          Even our own staff was confused about how to use the interface.
        </p>
      </div>

      <div class="project-overview">
        <h2 class="section-title">
          The Approach
        </h2>
        <p>
          I studied the in-page analytics, researched current industry best practices, and talked with a few of my
          friends (including Bruce Ackerman, former head of UX at Avant). I settled on a simpler approach:
        </p>
        <div class="new-subscription-page-container">
          <img src="../assets/chimag-purchase-new.jpg" alt="New subscription page" class="new-subscription-page"></img>
        </div>

        <p>
          I put the call to action and purchaseable products front and center, and ensured that no important information
          was hidden from the user.
        </p>
        <p>
          After the design of the page was completed, I worked directly with our vendor to eliminate unnecessary fields,
          handle security checks, and create a more direct experience between the load of the page and the click of the
          "Purchase" button.
        </p>
      </div>
      <div class="project-overview">
        <h2 class="section-title">
          The Results
        </h2>
        <p>
          In the six months following the implementation of the new design, <b>conversions per visitor went up 20%.</b>
        </p>
      </div>

      <PostArticleNav />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.chicago-mag-subscription {
  min-height: 100vh;

  .hero {
    max-width: 800px;

    figure {
      box-shadow: unset;
    }
  }

  .old-subscription-page-container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .old-subscription-page-container,
  .new-subscription-page-container {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    margin-bottom: 2rem;
  }

  .results-section {
    margin-top: 3rem;
    padding: 2rem 0;

    .results-highlight {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }

    .result-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 3rem;
      border-radius: 16px;
      text-align: center;
      color: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      max-width: 400px;

      .result-value {
        font-size: 4rem;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 1rem;
      }

      .result-label {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .result-timeframe {
        font-size: 0.95rem;
        opacity: 0.9;
      }
    }
  }
}
</style>

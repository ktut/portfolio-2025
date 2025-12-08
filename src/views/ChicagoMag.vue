<script>
import PostArticleNav from '@/components/PostArticleNav.vue'

export default {
  name: 'ChicagoMagView',
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
  <main class="chicago-mag">
    <section class="hero">
      <figure class="hero-image">
        <img alt="Chicago magazine print editions" src="../assets/chimag-mag-spread.png">
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          <img src="@/assets/logo-chimag.png" alt="Chimag Logo" class="chase-logo">
          <em>Chicago</em> editorial web design
        </h1>
        <h2 class="project-subtitle">
          Handling web-guy duties at a Chicago media staple
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
        <p class="lead bottom-border">
          At <a href="http://www.chicagomag.com" target="_blank" rel="noreferrer noopener"><em>Chicago</em>
            magazine</a>, I was in charge of web design and administration
          (taking over from the
          very talented <a href="https://www.seemann.com/luke/" target="_blank" rel="noreferrer noopener">Luke
            Seemann</a>), and <a
            href="https://citymag.org/crma_events/national-city-and-regional-magazine-2018-award-winners/"
            target="_blank" rel="noreferrer noopener">won a national award for online excellence</a> with my team from
          the City and Regional Magazine Association. During this time, I also attended Northwestern University’s
          full-stack
          coding bootcamp on nights/weekends.
        </p>
        <p>My process went something like this:</p>
        <ul>
          <li><strong>We'd have regular all-staff meetings</strong> about upcoming editorial content. Me and the online
            editors would get a heads-up on what would
            be
            online-only, and what would be coming from the print edition.</li>
          <li>For the larger features, <strong>I'd have specific meetings with the art team</strong> before any shoots
            took place, to
            discuss what
            additional online-only content would be needed. Sometimes this would be more than just an additional photo
            for web. For example, for the house music feature, we had one of
            the writers make a relevant Spotify playlist for online.</li>
          <li>Occasionally, <strong>I'd join cover photoshoots to shoot behind-the-scenes videos</strong> for social
            media/YouTube,
            like this one:
          </li>
        </ul>
        <p><iframe width="100%" height="400" src="https://www.youtube.com/embed/7nJw3GBk9TA"
            title="Behind the Scenes of Chicago Magazine’s Elena Delle Donne Photo Shoot" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
        <ul>
          <li>Before articles went to print, the online team would usually have an editorial schedule already in place,
            and we'd
            together to plan out the online content for the week. For the major features, I'd
            also have
            small meetings with the art teams to <strong>pitch my design ideas and get feedback.</strong></li>
          <li>One by one, <strong>I'd design the article layouts, ensuring that the design was
              consistent with
              the brand and that it was responsive and looked good on all devices</strong>. we'd then publish them
            according
            to the
            editorial schedule.</li>
        </ul>
        <p>Here's some of the work I did there:</p>
      </div>

      <div class="video-container">
        <div class="video-bg">
          <video src="../assets/vid-11.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-7.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-8.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-3.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-5.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-1.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-6.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-9.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-4.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-10.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-12.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-13.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-14.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-2.mov" autoplay loop muted playsinline />
        </div>
        <div class="video-bg">
          <video src="../assets/vid-15.mov" autoplay loop muted playsinline />
        </div>
      </div>
      <div class=" detail-section">
        <br />
        <br />
        <h2 class="section-title">
          Acknowledgments
        </h2>
        <p>A special thanks goes out to all of my former colleagues at <em>Chicago</em> whose hard work went into all of
          these
          pieces:</p>
        <ul class="acknowledgments-list">
          <li>Susanna Wickham (Editor-in-Chief)</li>
          <li>Terry Noland (Managing Editor)</li>
          <li>Penny Pollack (Editor, Dining)</li>
          <li>Dave McAninch (Editor)</li>
          <li>Tal Rosenberg (Editor)</li>
          <li>Martha Williams (Art Director)</li>
          <li>Emily Johnson (Art Director)</li>
          <li>Jessica Sedgwick (Designer)</li>
          <li>Bettina Chang (Editor, Digital)</li>
          <li>Matt Pollock (Editor, Digital)</li>
          <li>Lynette Smith (Online Producer)</li>
          <li>...and many more! including countless photographers, writers, and other contributors.</li>
        </ul>
      </div>

      <PostArticleNav />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.chicago-mag {
  min-height: 100vh;

  ul {
    list-style-position: inside;
    list-style-type: disc;

    li {
      text-align: left;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .hero {
    max-width: 800px;

    figure {
      box-shadow: unset;
    }
  }

  .content-wrapper {
    @media (min-width: 1100px) {
      max-width: 1600px;
    }
  }

  .video-container {
    @media (min-width: 1100px) {
      column-count: 2;
      column-gap: 50px;
    }
  }

  .video-bg {
    &:not(:first-of-type) {
      margin-top: 50px;
    }

    video {
      max-width: 100%;
      margin-left: auto !important;
      margin-right: auto !important;
      -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
      width: 100%;
      height: auto;

      @media (min-width: 540px) {
        width: 1024px;
        border-radius: 16px;
      }
    }
  }
}
</style>

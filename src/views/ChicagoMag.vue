<script>
export default {
  name: 'ChicagoMagView',
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
          <img src="@/assets/logo-chimag.png" alt="Chimag Logo" class="chase-logo" />
          <em>Chicago</em> magazine editorial web design
        </h1>
        <p class="project-subtitle">Leading editorial web design and administration at a Chicago media staple</p>

        <div class="tech-stack">
          <div v-for="tech in technologies" :key="tech.name" class="tech-pill">
            <svg v-if="tech.type !== 'image'" xmlns="http://www.w3.org/2000/svg" :viewBox="tech.viewBox"
              class="tech-icon">
              <path v-for="(path, index) in tech.paths" :key="index" :d="path.d" :fill="path.fill" />
            </svg>
            <img v-else :src="tech.src" :alt="tech.name" class="tech-icon" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </header>

      <div class="project-overview">
        <h2 class="section-title">Overview</h2>
        <p class="lead"> At <a href="http://www.chicagomag.com" target="_blank"
            rel="noreferrer noopener"><em>Chicago</em> magazine</a>, I was in charge of web design and administration
          (taking over from the
          very talented <a href="https://www.seemann.com/luke/" target="_blank" rel="noreferrer noopener">Luke
            Seemann</a>), and <a
            href="https://citymag.org/crma_events/national-city-and-regional-magazine-2018-award-winners/"
            target="_blank" rel="noreferrer noopener">won a national award for online excellence</a> with my team from
          the City and Regional Magazine Association. During this time, I also attended Northwestern University’s
          full-stack
          coding bootcamp on nights/weekends. </p>
        <p>Here's some of the work I did there:</p>
      </div>

      <div class="video-bg">
        <video src="../assets/vid-11.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-7.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-8.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-3.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-5.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-1.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-6.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-9.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-4.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-10.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-12.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-13.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-14.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-2.mov" autoplay loop muted playsinline></video>
      </div>
      <div class="video-bg">
        <video src="../assets/vid-15.mov" autoplay loop muted playsinline></video>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.chicago-mag {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);

  .hero {
    max-width: 800px;

    figure {
      box-shadow: unset;
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
      height: 350px;
      object-fit: cover;

      @media (min-width: 540px) {
        width: 1024px;
        height: auto;
        object-fit: unset;
        border-radius: 16px;
      }
    }
  }
}
</style>

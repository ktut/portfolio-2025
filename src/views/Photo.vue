<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import PortraitSlivers from '@/components/PortraitSlivers.vue'

// Import all images from photo directory
import img1 from '@/assets/photo/00-aless.jpg'
import img2 from '@/assets/photo/1100-westwick.jpg'
import img3 from '@/assets/photo/4.jpg'
import img4 from '@/assets/photo/IMG-365.jpg'
import img5 from '@/assets/photo/IMG_0038-2.jpg'
import img7 from '@/assets/photo/IMG_0164.jpg'
import img8 from '@/assets/photo/Marianos022116-chrishon.jpg'
import img9 from '@/assets/photo/PhotoJ-RKD-1.jpg'
import img11 from '@/assets/photo/lefty-3.jpg'
import img12 from '@/assets/photo/miles-49-RAMZI-DREESSEN.jpg'
import img13 from '@/assets/photo/ruffalo-1.jpg'
import img14 from '@/assets/photo/smyth.jpg'
import img15 from '@/assets/photo/will-1100.jpg'

// Hero composite images
import heroImg1 from '@/assets/photo/ruffalo-1.jpg'
import heroImg2 from '@/assets/photo/1100-westwick.jpg'
import heroImg3 from '@/assets/photo/00-aless.jpg'
import heroImg4 from '@/assets/photo/IMG-365.jpg'
import heroImg5 from '@/assets/photo/lefty-3.jpg'
import heroImg6 from '@/assets/photo/WhoWatchR-SLH-122114.01-2.jpg'

export default {
  name: 'PhotoView',
  components: {
    PortraitSlivers
  },
  data() {
    return {
      heroImages: [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg1, heroImg2, heroImg3],
      technologies: [
        {
          name: 'Adobe Creative Suite',
          type: 'image',
          src: require('@/assets/photoshop.png')
        }
      ],
      images: [
        { src: img1, width: 729, height: 1300, alt: 'Portrait Photography' },
        { src: img2, width: 733, height: 1100, alt: 'Portrait Photography' },
        { src: img3, width: 1667, height: 2501, alt: 'Portrait Photography' },
        { src: img4, width: 800, height: 1200, alt: 'Portrait Photography' },
        { src: img5, width: 1145, height: 1500, alt: 'Portrait Photography' },
        { src: img7, width: 3390, height: 5085, alt: 'Portrait Photography' },
        { src: img8, width: 1002, height: 1200, alt: 'Portrait Photography' },
        { src: img9, width: 2500, height: 1739, alt: 'Portrait Photography' },
        { src: img11, width: 667, height: 1001, alt: 'Portrait Photography' },
        { src: img12, width: 2048, height: 3073, alt: 'Portrait Photography' },
        { src: img13, width: 895, height: 1196, alt: 'Portrait Photography' },
        { src: img14, width: 895, height: 1200, alt: 'Portrait Photography' },
        { src: img15, width: 1100, height: 1100, alt: 'Portrait Photography' }
      ]
    }
  },
  mounted() {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.95,
      loop: true
    })
    lightbox.init()
  }
}
</script>

<template>
  <main class="photo">
    <section class="hero">
      <figure class="hero-image">
        <PortraitSlivers :images="heroImages" />
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          Portrait Photography
        </h1>
        <p class="project-subtitle">
          Capturing moments and people through the lens.
        </p>

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
        <p class="lead">
          I still occasionally take photos, although most of these were from my days working for Chicago
          <em>Sun-Times</em> SPLASH magazine. During my time there, I had the opportunity to photograph a wide range of
          subjects, from community events to celebrity portraits, honing my skills in portrait and event photography.
        </p>
        <p class="lead">
          These images represent a collection of portrait work that captures the essence and character of diverse
          subjects, showcasing my approach to lighting, composition, and storytelling through photography.
        </p>
      </div>

      <div id="gallery" class="gallery-grid">
        <a v-for="(image, index) in images" :key="index" :href="image.src" :data-pswp-width="image.width"
          :data-pswp-height="image.height" class="gallery-item" target="_blank" rel="noreferrer">
          <img :src="image.src" :alt="image.alt">
        </a>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.photo {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);

  .hero {
    max-width: 900px;
    width: 100%;

    figure {
      box-shadow: unset;
      width: 100%;
      height: 0;
      padding-bottom: 64%;
      position: relative;

      @media (min-width: 840px) {
        padding-bottom: 450px;
        max-width: 2400px;
      }

      @media (min-width: 1400px) {
        padding-bottom: 500px;
      }

      @media (min-width: 1800px) {
        max-width: 2800px;
        padding-bottom: 550px;
      }
    }
  }

  .project-overview {
    ol {
      margin-left: 1.5rem;
      margin-top: 1rem;

      li {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
    }
  }

  .gallery-grid {
    column-count: 1;
    column-gap: 20px;
    margin-top: 40px;

    @media (min-width: 768px) {
      column-count: 3;
    }

    .gallery-item {
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: block;
      text-decoration: none;
      margin-bottom: 20px;
      break-inside: avoid;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
}

// PhotoSwipe custom styles to match the site
:deep(.pswp) {
  --pswp-bg: rgba(0, 0, 0, 0.95);
}
</style>

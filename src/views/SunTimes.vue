<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

// Import all images
import img1 from '@/assets/print-design/IMG_0008.jpg'
import img2 from '@/assets/print-design/IMG_0013.jpg'
import img3 from '@/assets/print-design/IMG_0015.jpg'
import img4 from '@/assets/print-design/IMG_0018.jpg'
import img5 from '@/assets/print-design/IMG_0020.jpg'
import img6 from '@/assets/print-design/IMG_0021.jpg'
import img7 from '@/assets/print-design/IMG_0022.jpg'
import img8 from '@/assets/print-design/IMG_0039.jpg'
import img9 from '@/assets/print-design/IMG_0042.jpg'
import img10 from '@/assets/print-design/IMG_0046.jpg'
import img11 from '@/assets/print-design/IMG_0048.jpg'
import img12 from '@/assets/print-design/IMG_0063.jpg'
import img13 from '@/assets/print-design/IMG_0064.jpg'
import img14 from '@/assets/print-design/IMG_0065.jpg'
import img15 from '@/assets/print-design/IMG_0067.jpg'
import img16 from '@/assets/print-design/IMG_0069.jpg'
import img17 from '@/assets/print-design/IMG_0071.jpg'
import img18 from '@/assets/print-design/IMG_0072.jpg'
import img19 from '@/assets/print-design/IMG_0077.jpg'

export default {
  name: 'SunTimesView',
  data() {
    return {
      heroImage: img1,
      technologies: [
        {
          name: 'Adobe Creative Suite',
          type: 'image',
          src: require('@/assets/photoshop.png')
        }
      ],
      images: [
        { src: img1, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img2, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img3, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img4, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img5, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img6, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img7, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img8, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img9, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img10, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img11, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img12, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img13, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img14, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img15, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img16, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img17, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img18, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' },
        { src: img19, width: 1500, height: 1100, alt: 'Chicago Sun-Times Print Design' }
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
  <main class="sun-times">
    <section class="hero">
      <figure class="hero-image">
        <img alt="Chicago Sun-Times print design work" :src="heroImage">
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          <img src="@/assets/logo-cst.png" class="chase-logo" alt="Chicago Sun-Times Logo">
          Chicago <em>Sun-Times</em> print design
        </h1>
        <p class="project-subtitle">
          Did the whole <span class="cmyk-text"><span class="c">C</span><span class="m">M</span><span class="y">Y</span><span class="k">K</span></span> thing, too.
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
          At the <em>Sun-Times</em>, my primary work involved working on a 24-page glossy lifestyle magazine (SPLASH)
          from 2012-2016, with a circulation of 225,000 copies. I worked with a team of three other designers to create
          the magazine.</p>
        <p class="lead">My other major project was designing a 103-page glossy embossed hardcover book for the Chicago
          Sun-Times
          Foundation in Fall/Winter
          2015, including hundreds of photos that I shot over four years of covering the biggest philanthropic events
          in the city.</p>
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
.sun-times {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);

  .hero {
    max-width: 800px;

    figure {
      box-shadow: unset;
    }
  }

  .cst-logo {
    max-width: 200px;
    height: auto;
    margin-bottom: 1rem;
    display: block;
  }

  .cmyk-text {
    display: inline-block;
    font-weight: 700;

    span {
      display: inline-block;
      animation: popLetter 3s ease-in-out infinite;
    }

    .c {
      color: #00E5E5;
      animation-delay: 0s;
    }

    .m {
      color: #FF00FF;
      animation-delay: 0.2s;
    }

    .y {
      color: #FFFF00;
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
      animation-delay: 0.4s;
    }

    .k {
      color: #000000;
      animation-delay: 0.6s;
    }
  }

  @keyframes popLetter {
    0%, 100% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.2);
    }
    20% {
      transform: scale(1);
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .gallery-item {
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: block;
      text-decoration: none;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        aspect-ratio: 4/3;
      }
    }
  }
}


// PhotoSwipe custom styles to match the site
:deep(.pswp) {
  --pswp-bg: rgba(0, 0, 0, 0.95);
}
</style>

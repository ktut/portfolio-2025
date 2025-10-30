<script>
import LogoSlider from './LogoSlider.vue'
export default {
  name: 'Footer',
  components: {
    LogoSlider
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
  background: linear-gradient(to bottom, #e8eaed 0%, #d4d7db 100%);
  padding: 4rem 2rem 2rem;
  margin-top: 6rem;

  // Artistic blend at the top
  &::before {
    content: '';
    position: absolute;
    top: -3rem;
    left: 0;
    right: 0;
    height: 3rem;
    background: linear-gradient(to bottom,
        rgba(232, 234, 237, 0) 0%,
        rgba(232, 234, 237, 0.3) 40%,
        rgba(232, 234, 237, 0.7) 80%,
        rgba(232, 234, 237, 1) 100%);
    pointer-events: none;
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
    p {
      margin: 0;
      color: #5a5e63;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.01em;
    }
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: $textColor;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      letter-spacing: 0.01em;
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;

      &:hover {
        color: $linkActiveColor;
      }
    }

    .separator {
      color: #999;
      font-size: 0.9rem;
      font-weight: 300;
    }
  }

  .sub-footer-content {
    max-width: 1200px;
    margin: 0 auto;
    color: #5a5e63;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.01em;
    text-align: left;
    margin-top: 2.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 1px solid rgba(90, 94, 99, 0.2);

    @media (max-width: 768px) {
      text-align: center;
      font-size: 0.7rem;
    }
  }
}
</style>

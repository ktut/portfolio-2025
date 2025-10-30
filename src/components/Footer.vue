<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer>
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
  background: linear-gradient(to bottom, transparent 0%, #f8f9fa 100%);
  border-top: 1px solid #e0e0e0;
  padding: 3rem 2rem 2rem;
  margin-top: 4rem;

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
      color: #666;
      font-size: 0.9rem;
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
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;

      &:hover {
        color: $linkActiveColor;
      }
    }

    .separator {
      color: #ccc;
      font-size: 0.9rem;
    }
  }

  .sub-footer-content {
    max-width: 1200px;
    margin: 0 auto;
    color: #666;
    font-size: 0.9rem;
    text-align: left;
    margin-top: 2rem;
    padding-bottom: 100px;
  }
}
</style>

<script>
import iPhone from '@/components/iPhone.vue'

export default {
  name: 'ChaseView',
  components: {
    iPhone
  },
  data() {
    return {
      technologies: [
        {
          name: 'Vue.js',
          viewBox: '0 0 261.76 226.69',
          paths: [
            { d: 'M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z', fill: '#41b883' },
            { d: 'M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z', fill: '#35495e' }
          ]
        },
        {
          name: 'TypeScript',
          viewBox: '0 0 128 128',
          paths: [
            { d: 'M0 0h128v128H0z', fill: '#3178c6', rx: 6 },
            { d: 'm74.2622 99.468v14.026c2.2724 1.168 4.9598 2.045 8.0625 2.629 3.1027.585 6.3728.877 9.8105.877 3.3503 0 6.533-.321 9.5478-.964 3.016-.643 5.659-1.702 7.932-3.178 2.272-1.476 4.071-3.404 5.397-5.786 1.325-2.381 1.988-5.325 1.988-8.8313 0-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827 0-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391 2.0976-1.9943c.9031-.5551 2.0101-.9861 3.3211-1.2929 1.311-.3069 2.7676-.4603 4.3699-.4603 1.1658 0 2.3958.0877 3.6928.263 1.296.1753 2.6.4456 3.911.8109 1.311.3652 2.585.8254 3.824 1.3806 1.238.5552 2.381 1.198 3.43 1.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211 0-6.4674.3579-9.439 1.0738-2.9715.7159-5.5862 1.8336-7.844 3.353-2.2578 1.5195-4.0422 3.4553-5.3531 5.8075-1.311 2.3522-1.9665 5.1646-1.9665 8.4373 0 4.1785 1.2017 7.7433 3.6052 10.6945 2.4035 2.9513 6.0523 5.4496 10.9466 7.495 1.9228.7889 3.7145 1.5633 5.375 2.323 1.6606.7597 3.0954 1.5486 4.3044 2.3668s2.1628 1.7094 2.8618 2.6736c.7.9643 1.049 2.06 1.049 3.2873 0 .9062-.218 1.7462-.655 2.5202s-1.1 1.446-1.9885 2.016c-.8886.57-1.9956 1.016-3.3212 1.337-1.3255.321-2.8768.482-4.6539.482-3.0299 0-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z', fill: '#fff' }
          ]
        },
        {
          name: 'Pinia',
          type: 'image',
          src: require('@/assets/pinia.png')
        }
      ],
      metrics: [
        { label: 'Advertisers', value: '7,140' },
        { label: 'Campaigns', value: '8,620' },
        { label: 'Deals', value: '12,952' },
        { label: 'Redemptions', value: '37.2M' },
        // { label: 'Revenue Processed', value: '$3.6B' },
        { label: 'Budget Delivered', value: '$211.2M' },
        { label: 'Reports Generated', value: '9,664' }
      ]
    }
  }
}
</script>

<template>
  <main class="chase">
    <section class="hero">
      <figure class="hero-image">
        <img v-view-transition-name="'img'" alt="Chase Performance Dashboard" src="../assets/PD-night-mock.jpg">
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          <img src="@/assets/chase-logo.png" alt="Chase Logo" class="chase-logo">JPMorgan Chase Performance Dashboard
        </h1>
        <h2 class="project-subtitle">
          Building a web application for monitoring and downloading reports for card-linked offer campaigns
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
          Overview
        </h2>
        <p class="lead">
          Originally built for Figg and later redesigned for <a href="https://www.chase.com/mediasolutions/solutions"
            target="_blank" rel="noopener noreferrer" aria-label="CMS">Chase Media Solutions</a> following our
          acquisition, the platform enabled customers to maximize their card-linked offers program. Brands of all sizes
          could drive conversions, acquire new customers, and inspire incremental sales through data insights.
        </p>
        <p class="lead bottom-border">
          As the sole frontend engineer, my role was to build a client application that was easily maintainable,
          performant, and easy to test.
        </p>
        <p>
          Overall, the platform leveraged transaction data to deliver targeted offers to Chase cardholders across
          digital channels. Customers discovered offers based on their purchase history, activated them via the Chase
          app,
          and received cash back when making purchases at participating merchants.</p>
        <p>Clients benefited from accurate,
          on-demand performance tracking with the app. This always-on portal allowed brands to easily download reports
          and keep tabs on KPIs like budget utilization, ROAS, impressions and sales.
        </p>
      </div>

      <div class="mobile-section">
        <div class="mobile-showcase">
          <iPhone />
        </div>
        <p>
          The mobile interface provided clients with on-the-go access to performances of multiple campaigns. Built with
          responsive design principles, the dashboard adapts seamlessly across devices.
        </p>
      </div>

      <div class="metrics-section">
        <h2 class="section-title">
          Platform Impact
        </h2>
        <div class="metrics-grid">
          <div v-for="metric in metrics" :key="metric.label" class="metric-card">
            <div class="metric-value">
              {{ metric.value }}
            </div>
            <div class="metric-label">
              {{ metric.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="detail-section">
        <h2 class="section-title">
          Engineering
        </h2>
        <p>
          I wanted the app to be refined-looking and powerful, but
          also easy to maintain. Working closely with product and design, I built the app using
          TypeScript (which I learned on the job) and Vue.js (which I had used before at Fitch Ratings).
        </p>
        <p>The application forgoes complex state, and instead uses
          component-based caching (Vue KeepAlive and similar technology, along with route-based Javascript chunking) to
          ensure solid performance. I wanted to ensure that any potential issues would be
          easiliy traceable and fixable.</p>
        <p>In my experience, overcomplication with
          frontend engineering is absolutely rampant, and usually leads to having to solve complicated issues down the
          road, like cache invalidation and state duplication. </p>
        <p>E2E tests written in Selenium integrated with the CI/CD pipeline
          focused on business-critical user journeys,
          while strict schema control with Typescript eliminated the need for many of the unit tests. To simplify error
          handling and field validation, I worked with the product and design teams to promote the use of generic error
          responses over specific ones.</p>
      </div>
      <div class=" detail-section">
        <h2 class="section-title">
          Details
        </h2>
        <p>
          Every interaction was carefully crafted to provide a seamless user experience. From advanced filtering to
          real-time search feedback, these details showcase the polish and precision built into the platform.
        </p>
        <p>It was my goal to support the design team in addition to building what was asked for —
          I frequently contributed design and functionality ideas, many of which made it into the final product.</p>
        <div class="detail-grid">
          <div class="detail-item full-width">
            <video autoplay loop muted playsinline src="@/assets/PD-detail-dates.mov" />
            <h3>Custom Date Picker and Charts</h3>
            <p>
              Built with TypeScript and D3.js, featuring segment selection and precise date range controls for detailed
              analytics.
            </p>
          </div>
          <div class="detail-item">
            <video autoplay loop muted playsinline src="@/assets/PD-detail-campaigns.mov" />
            <h3>Campaign Filtering</h3>
            <p>
              Sophisticated filtering system with intuitive controls and smooth transitions for managing complex
              campaign hierarchies.
            </p>
          </div>
          <div class="detail-item">
            <video autoplay loop muted playsinline src="@/assets/PD-detail-search.mov" />
            <h3>Real-time Search</h3>
            <p>Instant search feedback with live search metadata displayed as the user typed, providing immediate visual
              confirmation.</p>
          </div>
          <div class="detail-item full-width">
            <video autoplay loop muted playsinline src="@/assets/PD-detail-download.mov" />
            <h3>Report Downloads</h3>
            <p>
              Streamlined report generation with format options and progress indicators for exporting campaign data.
            </p>
          </div>
          <div class="detail-item full-width">
            <video autoplay loop muted playsinline src="@/assets/PD-detail-admin.mov" />
            <h3>Admin Panel</h3>
            <p>
              A dedicated admin panel for managing users and permissions, with presets for various roles and thousands
              of available brands to add access to.
            </p>
          </div>
        </div>
      </div>

      <div class="features-section">
        <h2 class="section-title">
          Key Features
        </h2>
        <ul class="features-list">
          <li>Near real-time performance tracking with budget utilization, ROAS, and sales data</li>
          <li>Advanced audience reporting based on transaction history (new, lapsed, and loyal customers)</li>
          <li>Advanced admin panel for managing users and permissions</li>
          <li>Custom date picker and charts for detailed analytics visualization</li>
          <li>Campaign filtering and sorting</li>
        </ul>
      </div>
      <div class="detail-section">
        <h2 class="section-title">
          Acknowledgments
        </h2>
        <p>A special thanks goes out to all of my colleagues at Figg/JPMC who helped make this possible and supported me
          along the way:</p>
        <ul class="acknowledgments-list">
          <li>Nathan Schlechte (Team Lead)</li>
          <li>Marlena Manulis (Product Manager)</li>
          <li><a href="https://www.denverwebdesignservices.com/" target="_blank" rel="noopener noreferrer"
              aria-label="Will Smith's LinkedIn profile">Will Smith</a> (Designer)</li>
          <li>Tim Stratton (Backend Engineer)</li>
          <li>Michael Meloche (Backend Engineer)</li>
          <li>Jon Westbrook (Backend Engineer)</li>
          <li>Demitria Jefferson (Backend Engineer)</li>
          <li>Tim Balaban (QA)</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.chase {
  min-height: 100vh;


  .mobile-section {
    margin-top: -2rem;
    margin-bottom: 4rem;

    p {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #4a4a4a;
      margin-bottom: 1.5rem;
    }

    .mobile-showcase {
      position: relative;
      float: none;
      margin-left: 0;
      max-width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      scale: 0.8;

      @media (min-width: 769px) {
        scale: unset;
        float: right;
        margin-left: 5rem;
        margin-bottom: 1.5rem;
        max-width: 350px;
        display: block;
        margin-top: 0;
        padding-left: 80px;
        left: -150px;
      }
    }
  }

}
</style>

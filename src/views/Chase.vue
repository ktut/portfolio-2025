<script>
import iPhone from '@/components/iPhone.vue'

export default {
  components: {
    iPhone
  },
  name: 'ChaseView',
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
        { label: 'Revenue Processed', value: '$3.6B' },
        { label: 'Budget Delivered', value: '$211.2M' },
        { label: 'Reports Generated', value: '9,664' }
      ]
    }
  }
}
</script>

<template>
  <div class="chase">
    <div class="back-link">
      <RouterLink to="/">
        <span class="arrow">←</span> Back to Home
      </RouterLink>
    </div>

    <section class="hero">
      <figure class="hero-image">
        <img v-view-transition-name="'img'" alt="Chase Performance Dashboard" src="../assets/Chase-portfolio-mock.jpg">
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">Chase Performance Dashboard</h1>
        <p class="project-subtitle">Card-Linked Offers Platform</p>

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
        <p class="lead">
          An always-on performance dashboard for Chase Media Solutions' card-linked offers program, enabling brands to
          drive conversion, acquire new customers, and inspire incremental sales through real-time data insights.
        </p>
        <p>
          The platform leverages first-party transaction data to deliver targeted offers to Chase cardholders across
          digital channels. Customers discover offers based on their purchase history, activate them via the Chase app,
          and receive cash back when making purchases at participating merchants.
        </p>
      </div>

      <div class="metrics-section">
        <h2 class="section-title">Platform Impact</h2>
        <div class="metrics-grid">
          <div v-for="metric in metrics" :key="metric.label" class="metric-card">
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
          </div>
        </div>
      </div>

      <div class="features-section">
        <h2 class="section-title">Key Features</h2>
        <ul class="features-list">
          <li>Real-time performance tracking with budget utilization, ROAS, and sales data</li>
          <li>Advanced audience targeting based on transaction history (new, lapsed, and loyal customers)</li>
          <li>Campaign management system with automated reporting capabilities</li>
          <li>Comprehensive analytics dashboard with data visualization</li>
          <li>Multi-tenant architecture supporting thousands of concurrent campaigns</li>
        </ul>
      </div>

      <div class="mobile-section">
        <h2 class="section-title">Mobile Experience</h2>
        <p>The mobile interface provides advertisers with on-the-go access to campaign performance, enabling quick
          decision-making and real-time optimization.</p>
        <div class="mobile-showcase">
          <iPhone />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.chase {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.back-link {
  padding: 2rem 2rem 0;
  max-width: 1200px;
  margin: 0 auto;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    -webkit-transition: color 0.2s ease;
    transition: color 0.2s ease;

    .arrow {
      font-size: 1.2rem;
      -webkit-transition: transform 0.2s ease;
      transition: transform 0.2s ease;
    }

    &:hover {
      color: $redPunch;

      .arrow {
        -webkit-transform: translateX(-4px);
        transform: translateX(-4px);
      }
    }
  }
}

.hero {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;

  .hero-image {
    margin: 0;
    padding: 0;
    -webkit-border-radius: 16px;
    border-radius: 16px;
    overflow: hidden;
    -webkit-box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.project-header {
  margin-bottom: 4rem;
  text-align: center;

  .project-title {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }

  .project-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    color: #666;
    margin-bottom: 2rem;
  }
}

.tech-stack {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  .tech-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    background: white;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    border: 1px solid #e0e0e0;
    font-weight: 600;
    font-size: 0.9rem;
    color: #2c3e50;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    .tech-icon {
      width: 20px;
      height: 20px;

      &[src] {
        object-fit: contain;
      }
    }
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.project-overview {
  margin-bottom: 4rem;

  .lead {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.7;
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #4a4a4a;
  }
}

.metrics-section {
  margin-bottom: 4rem;

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .metric-card {
    padding: 2rem 1.5rem;
    border-bottom: 2px solid #e8e8e8;
    -webkit-transition: border-color 0.3s ease;
    transition: border-color 0.3s ease;

    &:hover {
      border-bottom-color: #2c3e50;
    }

    .metric-value {
      font-size: 2.25rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
      letter-spacing: -0.02em;
      line-height: 1;
    }

    .metric-label {
      font-size: 0.9rem;
      font-weight: 500;
      color: #666;
      letter-spacing: 0.02em;
      line-height: 1.4;
    }
  }
}

.features-section {
  margin-bottom: 4rem;

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #4a4a4a;
      padding: 1rem 0;
      padding-left: 2rem;
      position: relative;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: $redPunch;
        font-weight: 700;
      }

      &+li {
        border-top: 1px solid #e8e8e8;
      }
    }
  }
}

.mobile-section {
  margin-bottom: 4rem;

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #4a4a4a;
    margin-bottom: 3rem;
  }

  .mobile-showcase {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }
}

@media (max-width: 768px) {
  .project-header {
    .project-title {
      font-size: 2.5rem;
    }

    .project-subtitle {
      font-size: 1.2rem;
    }
  }

  .metrics-section {
    .metrics-grid {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
    }

    .metric-card {
      padding: 1.5rem 1rem;

      .metric-value {
        font-size: 1.75rem;
      }

      .metric-label {
        font-size: 0.8rem;
      }
    }
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>

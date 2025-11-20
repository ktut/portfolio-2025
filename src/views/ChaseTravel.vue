<script>
import iPhone from '@/components/iPhone.vue'
import PostArticleNav from '@/components/PostArticleNav.vue'
import TravelAnim from '@/components/TravelAnim.vue'

export default {
  name: 'ChaseTravelView',
  components: {
    iPhone,
    PostArticleNav,
    TravelAnim
  },
  data() {
    return {
      technologies: [
        {
          name: 'Claude Code',
          type: 'image',
          src: require('@/assets/logos/claude.png')
        },
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
      sections: [],
      activeSection: '',
    }
  },
  mounted() {
    this.collectSections()
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    collectSections() {
      const headings = document.querySelectorAll('.content-wrapper h2.section-title')
      this.sections = Array.from(headings).map(heading => ({
        id: heading.id,
        title: heading.textContent.trim()
      }))
      if (this.sections.length > 0) {
        this.activeSection = this.sections[0].id
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 150
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 150

      // Update sticky state
      const contentWrapper = document.querySelector('.content-wrapper')
      if (contentWrapper) {
        const wrapperTop = contentWrapper.offsetTop
      }

      // Find active section
      const headings = document.querySelectorAll('.content-wrapper h2.section-title')
      let currentSection = this.sections[0]?.id || ''

      headings.forEach(heading => {
        const headingTop = heading.offsetTop
        if (scrollPosition >= headingTop) {
          currentSection = heading.id
        }
      })

      this.activeSection = currentSection
    }
  }
}
</script>

<template>
  <main class="chase-travel">
    <section class="hero">
      <figure class="hero-image">
        <TravelAnim />
        <div class="caption">
          Lake Atitlán, Guatemala | Photo by Ramzi Dreessen
        </div>
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          <img src="@/assets/chase-logo.png" alt="Chase Logo" class="chase-logo">Chase Travel: A Case Study
        </h1>
        <h2 class="project-subtitle">
          How to fix a clunky travel booking app? Get some real user feedback, then apply industry
          standards, cutting-edge AI tooling, and some common sense.
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

      <!-- Sticky Navigation -->
      <div class="sticky-nav">
        <select v-model="activeSection" @change="scrollToSection(activeSection)" class="section-dropdown">
          <option value="" disabled>Jump to section...</option>
          <option v-for="section in sections" :key="section.id" :value="section.id">
            {{ section.title }}
          </option>
        </select>
      </div>

      <div class="disclaimer">
        <p>
          <strong>Disclaimer:</strong> Per JPMC confidentiality policies, no internal information was used in any way on
          this project. Everything was based solely on observations of the public-facing product.
        </p>
      </div>

      <div class="project-overview">
        <h2 class="section-title" id="product-importance-and-context">
          Product importance and context
        </h2>
        <p class="lead">
          According to JPMorgan Chase&rsquo;s public statements:
        </p>
        <ul>
          <li>Chase Travel sales volume was about $8 billion in 2022 was estimated at $10
            billion in 2023.</li>
          <li>At investor days, they have said that they are a &ldquo;Top 5 consumer leisure travel
            provider&rdquo; and that 1 in 4 leisure travel dollars are spent on Chase cards.</li>
          <li>They have seen an average 24% growth in transactions through Chase Travel year
            over year since launch, and approximately 40% YOY growth in the total number of users purchasing travel on
            Chase.</li>
          <li>Chase has also spent hundreds of millions of dollars (estimated) on securing lounge locations across the
            US, all Chase Travel branded.</li>
        </ul>
        <p class="lead bottom-border">
          Therefore, it&rsquo;s fair to say that Chase Travel is a significant part of Chase&rsquo;s consumer business,
          and a
          significant part of
          the consumer travel market.
        </p>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="user-research">
          User research
        </h2>
        <p>
          I have a lot of friends who are 1. Chase Reserve cardholders and 2. Chase Travel users, both for personal and
          business. Here&rsquo;s some of their
          feedback.
        </p>
        <blockquote>
          &ldquo;My main criticism is that it&rsquo;s glacially slow. UX-wise, I think it&rsquo;s way too bulky and
          clunky. The transition
          between each step is awkward. The prices aren&rsquo;t intuitive. It would be really nice if the flight date
          search had one of those little calendars
          that
          compare other day&rsquo;s flight costs around your search.&rdquo;
        </blockquote>
        <blockquote>
          &ldquo;If I have to make a change to a reservation, it&rsquo;s always goofy to figure out who to talk to. If I
          buy a
          flight on Chase Travel on Qantas, but another airline operates it, for example&hellip; then it&rsquo;s a huge
          pain to
          change. Likewise, if I purchase through Chase Travel, then upgrade at the airline&rsquo;s website, it&rsquo;s
          a
          total mess.&rdquo;
        </blockquote>
        <blockquote>
          &ldquo;I would love the ability to one-click upgrade cabin class after I purchase the ticket.&rdquo;
        </blockquote>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="major-issues">
          Major issues
        </h2>
        <p>
          Combining this feedback with my own, I put together a categorized list of issues to resolve:
        </p>
        <h3>UI/UX</h3>
        <ul>
          <li>Why do users need to log in to do anything
            (including basic flight search)? Chase is probably losing tons of non-Chase traffic by doing this. And why
            on earth is there no dedicated travel app?</li>
          <li>The overall overall design and components (filters, maps) are poorly done, and aren&rsquo;t
            mobile-friendly. The user has to scroll way too much
            due
            to 1. poor use of white space and 2. poor use of horizontal and vertical layouts for components and
            filtering. Information should load while the user is able to modify filters.</li>
          <li>Technically &ldquo;uses&rdquo; React but doesn&rsquo;t
            use any of the benefits of
            React (loading some components while keeping others visible, etc), which would greatly enhance the user
            experience</li>
          <li>No proper use of loading indicators to improve perceived performance. Many missed opportunities for
            pre-fetching</li>
          <li>Image quality is terrible, images are not even loaded async or &ldquo;lazy&rdquo;</li>
          <li>Points Boost feature is over-emphasized- sometimes three or four times per page (!). The user
            doesn&rsquo;t need to be beaten over the head about &ldquo;value&rdquo; - they can determine value for
            themselves by looking
            at the points and $ spend.</li>
        </ul>
        <div class="detail-grid">
          <div class="detail-item">
            <img src="@/assets/Chase-travel-loading-global.png" alt="Chase Broken global loading spinner" />
            <p>
              Why use a global loading spinner when you're using React...
            </p>
          </div>
          <div class="detail-item">
            <img src="@/assets/Chase-travel-loading-skeleton.png" alt="Chase Broken skeleton loader" />
            <p>
              ...<em>and</em> use a skeleton loader that covers the entire page? These approaches don't help with either
              real or
              perceived performance. Instead, use a local loading indicator that covers the specific component, or
              provide informational text to the user while waiting for the data to load.
            </p>
          </div>

        </div>

        <h3>Tech</h3>
        <ul>
          <li>There's no need to have the client render everything — most
            of the markup should be server-side generated or rendered (only JS app
            <em>functionality</em> rendered on
            client), to improve performance.
          </li>
          <li>As for the services, repeated user requests should be cached at a minimum,
            and some requests for general groups of users should be cached and ready to serve, such as flights between
            Chicago and New York for users in those areas. </li>
          <li>Caching decisions should be made by 1. Deep analysis
            of past searches and 2. Continual adjustments by ops teams on a weekly basis, perhaps LLM/ML-assisted, to
            update caching based on recent and upcoming events. In my understanding, Chase moved from Expedia to
            cxLoyalty for APIs, so they should definitely be able to do better on the in-house side here.</li>
        </ul>
        <div class="detail-grid">
          <div class="detail-item">
            <img src="@/assets/chase-over-promo.png" alt="Chase Over Promotion" />
            <img src="@/assets/Chase-broken-coupled.png" alt="Chase Broken" />
            <p>
              Chase packs the page full of promotions, even thought the user is already a logged-in Chase customer!.
              Also, when the Chase login service goes down, the application is unusable. Maybe the tight coupling of
              Chase
              login to
              global app
              functionality wasn't such a good idea.
            </p>
          </div>
          <div class="detail-item">
            <img src="@/assets/Kayak-inline-promo.png" alt="Kayak Inline Promotion" />
            <img src="@/assets/HotelsCom-signin-nudge.png" alt="Hotels.com signin nudge" />
            <p>
              Notice how Kayak.com and Hotels.com just use small UI "nudges" for promotions and signin benefits.
            </p>
          </div>
          <div class="detail-item">
            <img src="@/assets/Chase-Travel-hotel-search.webp" alt="Chase Travel hotel search" />
            <video autoplay loop muted playsinline src="@/assets/Chase-cant-move-map.mov" />
            <p>
              Chase's map interaction for hotel search results is just straight-up broken - the map annoyingly snaps
              back to the center after every drag. The interface has extremely poor use of white space and only lists
              two properties at a time.
            </p>
          </div>
          <div class="detail-item">
            <img src="@/assets/HotelsCom-list-view.png" alt="Hotels.com signin nudge" />
            <img src="@/assets/HotelsCom-map-view.png" alt="Hotels.com signin nudge" />
            <p>
              Competitors like Hotels.com have both a list view (default) and a map view, allowing the user to choose
              the best
              view for their needs. Moving the map adjusts the search radius. Simple.
            </p>
          </div>
          <div class="detail-item full-width">
            <img src="@/assets/Airbnb-list-view.png" alt="Airbnb list view" />
            <p>
              Airbnb keeps the per-property information density down so they can show more properties at a time along
              with the map view.
            </p>
          </div>

        </div>
        <h3>Product</h3>
        <ul>
          <li>Prices are uncompetitive and frequently flat-out incorrect. This is well documented: (<a
              href="https://www.seat31b.com/2019/05/chases-terrible-horrible-no-good-very-bad-travel-portal/"
              target="_blank"
              rel="noopener noreferrer">https://www.seat31b.com/2019/05/chases-terrible-horrible-no-good-very-bad-travel-portal/</a>)
          </li>
          <li>Customer support is not reachable via chat — users have to call and wait instead. This is critical
            because inherently, when booking through third party through Chase, users are going to have to make any
            changes through Chase support. Poor
            customer service and hard-to-find
            availability for flights are frequently cited as the leading causes of travel stress (<a
              href="https://www.bankrate.com/credit-cards/news/survey-summer-vacation/" target="_blank"
              rel="noopener noreferrer">https://www.bankrate.com/credit-cards/news/survey-summer-vacation/</a>). Chase
            cardmembers paying $895/yr for Reserve cards should <em>especially</em> not be waiting on hold because Chase
            engineers couldn’t
            figure out how to include relevant metadata in support requests.</li>
        </ul>
        <div class="detail-grid">
          <div class="detail-item">
            <img src="@/assets/Chase-filter-as-modal.png" alt="Chase Broken" />
            <p>
              On desktop, you can't see the list view while adjusting filters - you're forced to use a modal to make
              adjustments and then hope that your results update accordingly.
              This is a mobile-only approach that should not be replicated on desktop.
            </p>
          </div>
          <div class="detail-item">
            <img src="@/assets/Chase-travel-inconsistent-ui.png" alt="Chase Cart for Travel" />
            <p>
              "Start shopping"? Perhaps this should be mentioning "itineraries" instead of "cart"s?
            </p>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="how-did-this-happen">
          How did this happen?
        </h2>
        <p>
          The age-old adage of form over function seems to be at play here.
        </p>
        <p>Perhaps the real goal was to impress executives and just make the product look good enough for slick
          marketing campaigns. Some evidence: A widely-trumpted recent &ldquo;redesign&rdquo; fixed some white space
          issues, added new
          fonts, and slightly improved the general layout, despite the fact that users don&rsquo;t care about fonts or
          stock image
          choice at
          all - they care about legibility, familiarity, and responsiveness of the interface. Fundamentally, using the
          app still feels mostly the same.</p>
        <p>The focus instead should have been to make a UI that was simple and easy enoughto use that it felt
          ubiquitous. The user should have felt so at home with the flow that it would require additional cognitive
          load to use a different app instead. In other words, instead of forcing the user to log into Chase and use
          points, users should want to use Chase Travel <em>by default</em> because other options aren&rsquo;t worth
          the switch, and in addition, points and Points Boost features are only available through Chase.</p>

      </div>

      <div class="detail-section">
        <h2 class="section-title" id="solutions">
          Solutions
        </h2>
        <ul>
          <li>Fixing support should be a top priority. One quick fix to this would be an iMessage integration. About 79%
            of Americans aged 18-34 use iPhones, and
            the target demographic for Chase Reserve customers is the Millennial and Gen Z age groups (ages 25-44) with
            high incomes ($150,000+). The UI should include options to generate tickets/start conversations with minimal
            input from the user.
          </li>
          <li>Flights UI is actually a simple fix - this should be a straight port of Kayak's UI.</li>
          <li>Hotels should be a mix of Hotels.com and Airbnb's UIs. Information density should be akin to Hotels.com,
            and
            map/listing
            views should be akin to Airbnb.</li>
          <li>The app should mention Chase points and offers prominently, but not inhibit the user when doing so.
            Absolutely no popups or banners of any kind should ever be displayed. Instead, use different, standout
            treatments for individual listings or price offerings.</li>
        </ul>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="rebuilding-the-web-app">
          Rebuilding the web app
        </h2>
        <p>Let's build a client-side-only proof-of-concept web application that addresses these issues.</p>
        <p>Given the complexity and
          scale of using real data, I decided to use mock data, but it wouldn't be a stretch to implement
          this with real data if needed, as many of these APIs are already available publicly.</p>
        <p>Using cutting-edge LLM-powered tools, we don't really have to start with Figma mockups - using Claude and
          Cursor, we
          can
          just
          craft UI components, generate mock data with Claude Code, and then build the app in the Cursor IDE with
          assitance from
          Claude for the more repetitive tasks. <a href="https://www.youtube.com/watch?v=bdh8k6DyKxE" target="_blank"
            rel="noopener noreferrer">Here's a video</a> from Cursor's head of design where he describes a similar
          process.
        </p>
        <p>
          For the tech stack, I used my standard stack of Vue.js, SASS, Typescript, and Pinia, but for a real production
          application, I
          would use Nuxt or vite-ssg for server-side rendering of content on key routes for quicker load times. That
          way, the only thing the user is actually waiting on is the loading of the actual search results.
        </p>
        <p>
          The project is still in progress, but you can view it here: <a href="https://chasetravel.netlify.app/"
            target="_blank" rel="noopener noreferrer">https://chasetravel.netlify.app/</a>. </p>
        <p>Here's my current progress:</p>
        <ul class="checklist">
          <li><input type="checkbox" checked disabled> Start with a stock Vue3/SASS/Vite app. Implement proper routing.
          </li>
          <li><input type="checkbox" checked disabled> Let&rsquo;s get some strong lead art going that isn't a stock
            photo. I&rsquo;ll use a photo I took on a
            trip to Lake Atitlan in
            Guatemala a few
            years ago. In Photoshop, we can break it apart into layers, then use a <a
              href="https://keithclark.co.uk/articles/pure-css-parallax-websites/" target="_blank"
              rel="noopener noreferrer">CSS-only parallax effect</a> on the search page.</li>
          <li><input type="checkbox" checked disabled> Let&rsquo;s build schemas for flights and hotels in Typescript.
            Once we have the schemas in place, we can
            use
            Claude to generate some mock data for these schemas.</li>
          <li><input type="checkbox" checked disabled> Let's get basic search in place, keeping all the search params in
            the URL for easy sharing and
            bookmarking.</li>
          <li><input type="checkbox" checked disabled> Let&rsquo;s add E2E testing in Claude as well, and ensure this is
            run after every Claude operation (along
            with a
            fresh build) so we can automatically fix issues as they arise, and negate the need for constant manual
            testing.</li>
          <li><input type="checkbox" checked disabled> Building out the individual listing pages and hotel pages should
            be a breeze once we have the schemas and
            UI components in place.</li>
          <li><input type="checkbox" disabled> Let's add an Itinerary page for all booked flights and hotels.</li>
          <li><input type="checkbox" disabled> Support is an important component of this application. Let's add that
            section to the bottom of Itineraries
            and make it clear that the user can just iMessage the support team directly.</li>
          <li><input type="checkbox" disabled> For the purposes of the demo, we can just mirror our application global
            state for user itineraries to
            localStorage.</li>
        </ul>
      </div>

      <PostArticleNav />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.content-wrapper {
  overflow: unset;
}

.hero {
  width: 100%;
  padding: 1rem 0 0;

  .hero-image {
    overflow: unset;
    box-shadow: unset;
  }
}


.project-header {
  margin-bottom: 2rem;
}

.project-title {
  text-wrap: balance;
}

.chase-travel {
  min-height: 100vh;

  .sticky-nav {
    position: sticky;
    top: 60px;
    z-index: 100;
    margin-bottom: 2rem;
    background: transparent;

    .section-dropdown {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      padding: 0.75rem 2.5rem 0.65rem 0.75rem;
      font-size: 1.2rem;
      border: 2px solid #8e8e8e;
      border-radius: 8px;
      background: white;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;
      cursor: pointer;
      font-family: 'comma-sans', sans-serif;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      color: $textColor;

      &:hover {
        border-color: #333;
      }

      &:focus {
        outline: none;
        border-color: $redPunch;
      }
    }
  }

  blockquote {
    max-width: 700px;
    margin: 1.5rem auto;
    padding: 1.5rem 2rem;
    border-left: 4px solid #999;
    background: #f5f5f5;
    font-style: normal;
    color: #444;
    font-size: 1.05rem;
    line-height: 1.8;
    font-family: 'comma-sans', sans-serif;
    text-align: left;

    &:first-of-type {
      margin-top: 1rem;
    }
  }

  h3 {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  ul,
  ol {
    max-width: 700px;
    margin: 1.5rem auto;
    padding-left: 2rem;
    text-align: left;
    list-style-position: outside;
    list-style-type: disc;

    li {
      margin-bottom: 1rem;
      line-height: 1.8;
      text-align: left;
    }
  }

  ol {
    list-style-type: decimal;
  }

  .checklist {
    list-style-type: none;
    padding-left: 1.5rem;

    li {
      gap: 0.5rem;

      input[type="checkbox"] {
        margin-top: 0.3rem;
        flex-shrink: 0;
        width: 18px;
        height: 18px;
        cursor: default;
        display: inline-block;
        float: left;
        margin-right: 7px;

        &:checked {
          accent-color: #22c55e;
        }
      }
    }
  }


  .disclaimer {
    max-width: 700px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: #fff9e6;
    border-left: 4px solid #f5a623;
    border-radius: 4px;

    p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.6;
      color: #666;
    }

    strong {
      color: #333;
      font-weight: 700;
    }
  }
}
</style>

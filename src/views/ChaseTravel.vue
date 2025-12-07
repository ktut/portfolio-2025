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
      sections: [],
      activeSection: '',
    }
  },
  mounted() {
    this.collectSections()
    window.addEventListener('scroll', this.handleScroll)
    this.setupScrollAnimation()
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.scrollObserver) {
      this.scrollObserver.disconnect()
    }
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
    },
    setupScrollAnimation() {
      // Only apply on mobile
      if (window.innerWidth > 968) return

      // Observe flow cards and arrows
      const flowCards = document.querySelectorAll('.flow-card')
      const flowArrows = document.querySelectorAll('.flow-arrow')
      const allElements = [...flowCards, ...flowArrows]

      let visibleCount = 0
      const totalElements = allElements.length

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      this.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            entry.target.classList.add('visible')
            visibleCount++

            // Stop observing this specific element
            this.scrollObserver.unobserve(entry.target)

            // If all elements have been animated, disconnect the observer
            if (visibleCount >= totalElements) {
              this.scrollObserver.disconnect()
              this.scrollObserver = null
            }
          }
        })
      }, options)

      allElements.forEach(element => this.scrollObserver.observe(element))
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
          standards, cutting-edge AI tooling and some common sense.
        </h2>
      </header>

      <div class="disclaimer">
        <strong>Disclaimer:</strong> Per JPMC confidentiality policies, no internal information was used in any way on
        this project. Everything was based solely on observations of the public-facing product.
      </div>

      <!-- Sticky Navigation -->
      <div class="sticky-nav">
        <select v-model="activeSection" @change="scrollToSection(activeSection)" class="section-dropdown">
          <option value="" disabled>Jump to section...</option>
          <option v-for="section in sections" :key="section.id" :value="section.id">
            {{ section.title }}
          </option>
        </select>
      </div>

      <div class="project-overview">
        <p class="rounded-highlight">
          <svg xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="12" ry="12" />
          </svg>
          Skip to <RouterLink to="/chase-travel-fixed">the resulting app-building process</RouterLink> as a result of
          this
          case study, if you wish.
        </p>
        <br />
        <h2 class="section-title" id="product-importance-and-context">
          Product importance and context
        </h2>
        <p>
          According to JPMorgan Chase&rsquo;s public statements:
        </p>
        <ul>
          <li>Chase Travel sales volume was about $8 billion in 2022 was estimated at $10
            billion in 2023.</li>
          <li>At a recent investor day, they have said that they are a &ldquo;Top 5 consumer leisure travel
            provider&rdquo; and that 1 in 4 leisure travel dollars are spent on Chase cards.</li>
          <li>They have seen an average 24% growth in transactions through Chase Travel year
            over year since launch, and approximately 40% YOY growth in the total number of users purchasing travel on
            Chase.</li>
          <li>Chase has spent hundreds of millions of dollars (estimated) on securing lounge locations across the
            US, all Chase Travel branded.</li>
        </ul>
        <p>
          <strong>Chase Travel is a significant part of
            Chase&rsquo;s consumer
            business</strong>,
          and a
          significant part of
          the consumer travel market.
        </p>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="typical-user-flows">
          Typical Hotel Booking User Flow
        </h2>
        <p>
          Let's focus on a typical user journey for booking a hotel on Chase Travel, showing both
          logged-in and logged-out user experience (the flights user journey is similar, except there's no detail page).
        </p>

        <div class="user-flow-diagram">
          <div class="flow-legend">
            <div class="legend-item">
              <span class="legend-dot logged-out"></span>
              <span>Logged Out User</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot logged-in"></span>
              <span>Logged In User</span>
            </div>
          </div>

          <div class="flow-row">
            <div class="flow-card">
              <div class="card-header">Search Results</div>
              <div class="card-body">
                <p>User browses hotels</p>
                <ul>
                  <li>Select dates & guests</li>
                  <li>Filter by price, rating, amenities</li>
                  <li>View on map</li>
                  <li>Compare options</li>
                </ul>
                <div class="user-states">
                  <span class="state logged-out">Limited info</span>
                  <span class="state logged-in">Points displayed</span>
                </div>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-card">
              <div class="card-header">Hotel Detail Page</div>
              <div class="card-body">
                <p>User selects a room</p>
                <ul>
                  <li>View photos & amenities</li>
                  <li>Read reviews</li>
                  <li>Choose room type</li>
                </ul>
                <div class="user-states">
                  <span class="state logged-out">Prompted to sign in</span>
                  <span class="state logged-in">Points Boost shown</span>
                </div>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-card">
              <div class="card-header">Booking & Payment</div>
              <div class="card-body">
                <p>Complete reservation</p>
                <ul>
                  <li>Enter guest information</li>
                  <li>Choose payment method</li>
                  <li>Apply points (if logged in)</li>
                  <li>Confirm booking</li>
                </ul>
                <div class="user-states">
                  <span class="state logged-out">Must log in or create account</span>
                  <span class="state logged-in">Quick checkout with saved info</span>
                </div>
              </div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-card">
              <div class="card-header">My Bookings</div>
              <div class="card-body">
                <p>Manage your reservation</p>
                <div class="bookings-grid">
                  <div class="booking-action">
                    <strong>View Details</strong>
                    <ul>
                      <li>Confirmation number</li>
                      <li>Hotel info & directions</li>
                      <li>Cancellation policy</li>
                    </ul>
                  </div>
                  <div class="booking-action">
                    <strong>Modify Dates</strong>
                    <ul>
                      <li>Change check-in/out</li>
                      <li>Subject to availability</li>
                      <li>May incur fees</li>
                    </ul>
                  </div>
                  <div class="booking-action">
                    <strong>Contact Support</strong>
                    <ul>
                      <li>Chat or call</li>
                      <li>Special requests</li>
                      <li>Cancellation help</li>
                    </ul>
                  </div>
                  <div class="booking-action">
                    <strong>During Stay</strong>
                    <ul>
                      <li>Digital confirmation</li>
                      <li>Hotel contact info</li>
                      <li>Emergency support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>
          Now that we understand how the app is used, let's see what users are saying about it.
        </p>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="user-research">
          User research
        </h2>
        <p>
          I have a lot of friends who are both Chase Reserve cardholders and Chase Travel users, both for personal and
          business. Here&rsquo;s some of their (consolidated)
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
          Combining this feedback with my own (I've been a Chase Reserve cardholder and Chase Travel user since 2019), I
          put together a categorized list of issues to resolve:
        </p>
        <h3>UI/UX</h3>
        <ul>
          <li><strong>Users can't use the application without logging in. </strong>Many potential users will just use a
            different travel booking site instead. If the login service goes down, Chase Travel is inaccessible, too.
          </li>
          <li><strong>Chase Points features (Points Boost, etc.) are over-emphasized, to the detriment of the user
              experience.</strong> Sometimes they are displayed three or four times per page (!). The user
            doesn&rsquo;t need to be beaten over the head about &ldquo;value&rdquo; - they can determine value for
            themselves by looking
            at the points and $ spend.</li>
          <li><strong>Almost the entire UI needs work.</strong> The user has to scroll way too much
            due
            to poor use of white space and poor choices of horizontal vs. vertical layouts. Components (filters, maps)
            aren&rsquo;t
            mobile-friendly. </li>
          <li><strong>Both real performance and perceived performance are poor.</strong> The user is blocked from
            modifying filters until the page is
            finished loading. No proper use of loading indicators exist. Missed
            opportunities for
            pre-fetching abound. Images are not loaded asynchronously (&ldquo;lazily&rdquo;) as they should be.</li>
        </ul>
        <h3>Product</h3>
        <ul>
          <li><strong>Why is there no dedicated app?</strong> Or at least a more mobile-friendly version of the website?
            Seems like a pretty basic omission for a travel booking service. <a
              href="https://www.mtomconsulting.com/consumers-make-travel-decisions-inspiration-booking/" target="_blank"
              rel="noopener noreferrer">41% of US travelers research travel using mobile devices (smartphone or
              tablet).</a>.</li>
          <li><strong>Prices are uncompetitive and frequently flat-out incorrect.</strong> This is <a
              href="https://www.seat31b.com/2019/05/chases-terrible-horrible-no-good-very-bad-travel-portal/"
              target="_blank" rel="noopener noreferrer">well-documented</a>.
          </li>
          <li><strong>Customer support is not reachable via chat — users have to call and wait instead.</strong> This is
            critical
            because inherently, when booking through third party through Chase, users are going to have to make any
            changes through Chase support. Poor
            customer service and hard-to-find
            availability for flights <a href="https://www.bankrate.com/credit-cards/news/survey-summer-vacation/"
              target="_blank" rel="noopener noreferrer">are frequently cited</a> as the leading causes of travel stress.
            Chase
            cardmembers paying $895/yr for Reserve cards should <em>especially</em> not be waiting on hold because Chase
            engineers couldn’t
            figure out how to include relevant metadata in support requests.</li>
        </ul>
      </div>
      <div class="detail-section">
        <h2 class="section-title" id="ui-issues">
          UI examples vs. competitors
        </h2>
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
              perceived performance. Instead, use a local loading indicators per-component, or
              provide information to the user <em>about</em> the current loading state (e.g. "Loading flights...").
            </p>
          </div>

        </div>

        <div class="detail-grid">
          <div class="detail-item">
            <img src="@/assets/chase-over-promo.png" alt="Chase Over Promotion" />
            <img src="@/assets/Chase-broken-coupled.png" alt="Chase Broken" />
            <p>
              Why is the page packed full of promotions to a paying, logged-in Chase customer?
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
              Chase's hotel search results map is just straight-up broken - it annoyingly snaps
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
              Airbnb keeps the per-property information density down in order to show more properties at a time and
              still retain the map view.
            </p>
          </div>

        </div>
        <div class="detail-grid">
          <div class="detail-item">
            <img src="@/assets/Chase-filter-as-modal.png" alt="Chase Broken" />
            <p>
              On desktop while browsing flights, the user can't see the flight list while adjusting filters - they're
              forced
              into a modal to make their changes, and then hope that their results update accordingly.
              This is a mobile-only approach that should not be replicated on desktop.
            </p>
          </div>
          <div class="detail-item">
            <img src="@/assets/Chase-travel-inconsistent-ui.png" alt="Chase Cart for Travel" />
            <p>
              Components seem to be reused from other Chase applications willy-nilly without considering the context of
              the Travel
              application in particular.
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
          marketing campaigns. A widely-trumpted recent &ldquo;redesign&rdquo; added new custom
          fonts, introduced new branding elements, and slightly improved the general app layout. Unfortunately, using
          the
          app still felt mostly the same after these changes.</p>
        <p>When building functional web UIs, it's important to remember that
          <strong>users don&rsquo;t care about fonts or
            stock image
            choice at
            all - they care about legibility, familiarity, and responsiveness of the interface.</strong>
        </p>
        <p>The focus instead should have been to make a simple, easy-to-use, and <em>familiar</em> UI for both personal
          and business users. Instead of
          <em>forcing</em> the
          user to log into Chase before even seeing value propositions for Points Boost, etc., users should
          be <em>tempted</em> to log in to have access to those features.
        </p>

      </div>

      <div class="detail-section">
        <h2 class="section-title" id="solutions">
          Solutions
        </h2>
        <ul>
          <li><strong>Fixing support should be a top priority.</strong> One quick fix to this would be an iMessage
            integration. About 79%
            of Americans aged 18-34 use iPhones, and
            the target demographic for Chase Reserve customers is the Millennial and Gen Z age groups (ages 25-44) with
            high incomes ($150,000+). The UI should include options to generate tickets/start conversations with minimal
            input from the user.
          </li>
          <li>The Flights UI <strong>should be a straight port of Kayak's UI.</strong></li>
          <li>The Hotels UI <strong>should be a mix of Hotels.com and Airbnb's UIs</strong>. Information density should
            be akin to Hotels.com,
            and
            map/listing
            views should be akin to Airbnb.</li>
          <li>The app should mention Chase points and offers prominently, but not inhibit the user by doing so.
            <strong>Absolutely no popups or large banners of any kind should ever be displayed</strong>. Instead, use
            inline,
            customized
            treatments for each promotion or offer.
          </li>
          <li><strong>The webapp should actually use some of React's features</strong>, instead of just being rendered
            with it. These include loading some components while keeping others visible, having proper loading states,
            etc, which would greatly enhance the user
            experience. There's also no need to have the client render everything — most
            of the markup should be server-side generated or rendered (only JS app
            <em>functionality</em> rendered on
            client), to improve performance.
          </li>
          <li>As for the services, <strong>repeated user requests should be cached</strong> at a minimum,
            and some requests for general groups of users should be cached and ready to serve, such as flights between
            Chicago and New York for users in those areas. </li>
          <li><strong>Additional advanced search analysis should be done</strong> to improve caching decisions as well.
            Perhaps some usage of LLMs to do this analysis would be beneficial, or even using machine
            learning, to
            update caching based on recent and upcoming events. <a
              href="https://medium.com/expedia-group-tech/search-speed-making-expedia-flights-faster-5c3f7fec4c10"
              target="_blank" rel="noopener noreferrer">This is exactly what was done at Expedia</a>, where they
            analyzed top requests to make backend caching decisions, and also used GraphQL on the client to only fetch
            the data that was needed.
          </li>
        </ul>

        <p>
          <RouterLink to="/chase-travel-fixed">Continue reading here</RouterLink> to see the full app-building process
          that I undertook to implement these solutions.
        </p>
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

.image-top-group {
  @media (min-width: 1000px) {
    height: 500px !important;
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
      text-align: left;
    }
  }

  ol {
    list-style-type: decimal;
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

  .user-flow-diagram {
    max-width: 100%;
    margin: 1rem auto 0;
    padding: 2rem;

    .flow-row {
      display: flex;
      align-items: stretch;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .flow-card {
      flex: 1;
      background: white;
      border-radius: 4px;
      border: 1px solid #ddd;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      .card-header {
        font-family: $font-body;
        padding: 0.75rem 1rem;
        background: #f5f5f5;
        border-bottom: 1px solid #ddd;
        font-weight: 600;
        color: #333;
        text-align: left;
      }

      .card-body {
        padding: 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;

        p {
          margin: 0 0 0.75rem 0;
          font-weight: 600;
          color: #333;
          text-align: left;
        }

        ul {
          margin: 0 0 0.75rem 0;
          padding-left: 1.25rem;
          text-align: left;

          li {
            margin-bottom: 0.4rem;
            color: #555;
            text-align: left;
          }
        }

        .bookings-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          .booking-action {
            font-family: 'comma-sans', sans-serif !important;
            padding: 0.75rem;
            background: #fafafa;
            border-radius: 3px;
            border: 1px solid #ddd;

            strong {
              display: block;
              margin-bottom: 0.5rem;
              color: #333;
              font-size: 0.9rem;
              text-align: left;
            }

            ul {
              margin: 0;
              padding-left: 1.25rem;
              text-align: left;

              li {
                margin-bottom: 0.3rem;
                font-size: 0.8rem;
                color: #666;
                text-align: left;
              }
            }
          }
        }
      }

      .user-states {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-top: auto;
        padding: 0.75rem 1rem;
        border-top: 1px solid #eee;

        .state {
          padding: 0.4rem 0.6rem;
          background: #fafafa;
          border: 1px solid #ddd;
          border-radius: 3px;
          font-size: 0.8rem;
          font-weight: 500;
          font-family: 'comma-sans', sans-serif;

          &.logged-out {
            color: #333;
            border-color: #333;
            background: #f0f0f0;
          }

          &.logged-in {
            color: #0066cc;
            border-color: #0066cc;
            background: #e8f2ff;
          }
        }
      }
    }

    .flow-arrow {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: #999;
      font-weight: 300;
      flex-shrink: 0;
    }

    .flow-legend {
      position: sticky;
      top: 110px;
      background: white;
      padding: 1rem;
      z-index: 1;
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #ddd;

      .legend-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: #666;
        font-family: 'comma-sans', sans-serif;

        .legend-dot {
          width: 16px;
          height: 16px;
          border-radius: 2px;
          border: 1px solid;

          &.logged-out {
            background: #f0f0f0;
            border-color: #333;
          }

          &.logged-in {
            background: #e8f2ff;
            border-color: #0066cc;
          }
        }
      }
    }

    @media (max-width: 968px) {
      padding: 1rem;

      .flow-row {
        flex-direction: column;
        gap: 0.5rem;
      }

      .flow-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;

        &.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-header {
          text-align: center;
        }

        .card-body {
          p {
            text-align: center;
          }

          ul {
            text-align: center;
            list-style-position: inside;
            padding-left: 0;

            li {
              text-align: center;
            }
          }

          .bookings-grid {
            .booking-action {
              strong {
                text-align: center;
              }

              ul {
                text-align: center;
                list-style-position: inside;
                padding-left: 0;

                li {
                  text-align: center;
                }
              }
            }
          }
        }
      }

      .flow-arrow {
        transform: rotate(90deg);
        margin: 0.25rem 0;
        align-self: center;
        font-size: 1.2rem;
        height: 1rem;
        opacity: 0;
        transition: opacity 0.5s ease-out;

        &.visible {
          opacity: 1;
        }
      }

      .flow-legend {
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
      }
    }
  }
}
</style>

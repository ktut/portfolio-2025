<script>
import { defineAsyncComponent } from 'vue'
import PostArticleNav from '@/components/PostArticleNav.vue'
import chaseTravelVideo from '@/assets/CT-mobile-walkthrough.mov'

export default {
  name: 'ChaseTravelFixedView',
  components: {
    iPhone: defineAsyncComponent(() => import('@/components/iPhone.vue')),
    PostArticleNav
  },
  data() {
    return {
      chaseTravelVideoSrc: chaseTravelVideo,
      technologies: [
        {
          name: 'Cursor',
          type: 'image',
          src: require('@/assets/logos/cursor.png')
        },
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
        <img src="@/assets/CT-laptop-mock.webp" alt="New Chase Travel booking page"
          v-view-transition-name="'chitravel-bg'" />
      </figure>
    </section>

    <section class="content-wrapper">
      <header class="project-header">
        <h1 class="project-title">
          Reimagining Chase Travel using
          Cursor and Claude Code
        </h1>
        <h2 class="project-subtitle">
          In two weeks, I built a new proof-of-concept webapp for Chase Travel with improved UI + UX and better
          access to support
        </h2>
        <p class="byline">
          By <b>Ramzi Dreessen</b> <span class="separator">|</span> December 2025
        </p>

        <div class="disclaimer">
          <strong>Disclaimer:</strong> Per JPMC confidentiality policies, no internal information was used in any way
          on
          this project. Everything was based solely on observations of the public-facing product.
        </div>

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

      <div class="project-overview">
        <p class="rounded-highlight">
          <svg xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="12" ry="12" />
          </svg>
          <RouterLink to="/chase-travel">View the case study first,</RouterLink> then
          <a href="https://chasetravel.netlify.app/" target="_blank" rel="noopener noreferrer">view the rebuilt app</a>
          or
          <a href="https://github.com/ktut/chasetravel" target="_blank" rel="noopener noreferrer">see my code</a>.
        </p>
        <br />
        <h2 class="section-title" id="objectives">
          Objectives
        </h2>
        <p class="lead bottom-border">As a software engineer at JPMorgan Chase, the opportunity never came to
          work on one of
          our apps
          that was the most in need of a major overhaul — Chase Travel. Therefore, I decided to try it on my own.
          The goal of this project was to build a better webapp (only for
          booking flights and hotels for now), based on the conclusions of <RouterLink to="/chase-travel">my case study.
          </RouterLink>
        </p>
        <p>I decided to
          stick to the building a front-end
          app only for this project - most of the areas for improvement are on the client side anyway. The case study
          already included
          incremental
          improvements for the backend. </p>
        <p>Based on the solutions outlined in the case study, I determined that the new app should:
        </p>
        <ul>
          <li><strong>Have as strong of a UI/UX presence on mobile as it does on desktop.</strong></li>
          <li><strong>Use proper loading states and loading indicators.</strong></li>
          <li><strong>Mirror Kayak's UI for flights and Hotels.com's UI for hotels.</strong></li>
          <li><strong>Mention Chase points and offers, but not inhibit the user by doing
              so.</strong></li>
          <li><strong>Greatly improve support visibility, and add an iMessage integration.</strong></li>
        </ul>
        <p>I wanted to use Cursor and Claude to accelerate the development process, but
          still have control over the architecture and design. I used some special techniques
          to accomplish this.
        </p>
      </div>
      <div class="detail-section">
        <h2 class="section-title" id="schemas-and-mock-data">
          Schemas and mock data
        </h2>
        <p>Given the complexity and
          scale of using real data, I decided to use mock data instead, but it wouldn't have been a stretch to implement
          this with a <a href="https://rapidapi.com/search?sortBy=ByRelevance" target="_blank"
            rel="noopener noreferrer">publicly
            available API.</a></p>
        <p>I
          started by tightly defining schemas in Typescript for <strong>flights,
            hotels, user
            searches, and user
            bookings</strong>:
        </p>
        <div class="detail-grid">
          <div class="detail-item">
            <div class="iframe-container">
              <iframe src="https://gist.github.com/ktut/fe31a3b811527ae8bde75c6a81418b41.pibb" width="100%" height="400"
                frameborder="0">
              </iframe>
            </div>
            <p>Typescript schemas for searches, flights, flight pairs (round-trip flights), hotels and hotel rooms.
              Claude bundled the URL param validation functions into the schema file by accident — this is why we review
              code that LLMs generate!</p>

          </div>
          <div class="detail-item">
            <div class="iframe-container">
              <iframe src="https://gist.github.com/ktut/b0ca38b18d75408689a252ed1bf2c5d5.pibb" width="100%" height="400"
                frameborder="0">
              </iframe>
            </div>
            <p>A clever mock data generation function for flights made by Claude with some guidance, which even
              generates realistic flight durations.
            </p>
          </div>
        </div>
        <p>I then
          <strong>generated mock data</strong> by asking Claude Code to write a function that generates random data
          based
          on the schemas. For flights, I used real airlines, but mocked the
          individual flights, using only six cities and six airlines to keep things manageable.
        </p>
        <p>I asked Claude to pull 20 hotels per city, along with their real geolocation data and
          descriptions. I used stock images because pulling enough real images (even at this smaller scale) was a lot
          more
          effort and not really relevant to the objectives of this project.</p>
        <p>I asked Claude to write E2E tests based on the overall user
          flows (one of which you can see <RouterLink to="/chase-travel">in the case study</RouterLink>). I asked
          it to
          <strong>ensure tests and builds passed going forward when performing any code changes.</strong>
        </p>
      </div>
      <div class="detail-section">
        <h2 class="section-title" id="wireframing">“Wireframing”</h2>
        <p>Now that the schemas were defined, and the basic user flow was hard-coded into the E2E tests, I could feel
          more confident in prompting the LLMS to <strong>iteratively generate new features</strong> based on these
          un-modifiable ground truths.
        </p>
        <p>I <strong>skipped the Figma mockup stage</strong>, and instead used Claude (to build features) and
          Cursor (mainly for the IDE, but sometimes in place of Claude when tokens ran out)
          to
          <strong>just generate a working app</strong> and
          iterate on top of it. <a href="https://www.youtube.com/watch?v=bdh8k6DyKxE" target="_blank"
            rel="noopener noreferrer">Here's a
            video</a> from Cursor's head of design where he describes a similar workflow (albeit without the E2E tests
          and periodic code reviews).
        </p>
        <p>For example, here's one of my many feature prompts:</p>
        <p>
          <code
            style="word-break: unset;">Add a small dropdown for number of passengers within SearchWidget.vue, which allows for selection of Adults or Children. Upon hitting Submit in SearchWidget, console.log() this new information.</code>
        </p>
        <p>Notice that I'm just asking it to display its information initially in the console. If that data is correct,
          I
          can prompt it
          further to fully integrate that functionality.</p>
        <p>Claude is so good that it automatically added appropriate
          business
          logic-based validation
          ("Ensure at least one adult is on the reservation") solely based on the context of the parent component
          (<code style="word-break: unset;">SearchWidget.vue</code>).</p>
      </div>
      <div class="detail-section">
        <h2 class="section-title" id="basic-design-approach">
          Basic design approach
        </h2>
        <p>For the home page, let's get some <strong>strong lead art</strong> going.</p>

        <div class="detail-grid">
          <div class="detail-item">
            <img src="@/assets/gua-lo.jpg" alt="Photo of Lake Atitlan, Guatemal" />
            <p>
              Photo I took of Lake Atitlán, Guatemala, in 2022, with a dormant volcano in the distance. A little
              background: While on this trip, I had gotten
              sick from
              eating a salad in a
              nearby town, and
              ended up stuck at this hotel
              with only this incredible view to comfort me.
            </p>
          </div>
          <div class="detail-item">
            <video autoplay loop muted playsinline src="@/assets/photoshop-layers.mov" />
            <p>In Photoshop, I broke it apart into layers (a three-layer approach was enough — foreground for the
              leaves, midground
              for the pool, and deep background for the lake and volcano in the distance), and used generative fill to
              fill in the gaps. As long as I configured
              Photoshop correctly and exported the PNGs with an ICC profile for Display P3, I was able to retain
              that
              vibrant blue of the pool color (which will be progressively enhanced for P3 displays, like iPhones).</p>
          </div>
          <div class="detail-item full-width">
            <video autoplay loop muted playsinline src="@/assets/parallax-implement.mov" />
            <p>I added these the home page, with a parallax effect (done with <a
                href="https://keithclark.co.uk/articles/pure-css-parallax-websites/" target="_blank"
                rel="noopener noreferrer">just CSS</a>). For a real production application, we'd need to swap
              out the
              PNGs for SVGs with embedded JPGs (again, using that P3 ICC profile) and vector masks, created with <a
                href="https://codepen.io/shshaw/full/LVKEdv" target="_blank" rel="noopener noreferrer">this tool</a>.
            </p>
          </div>
        </div>
        <p>To improve the overall design from what Claude created, I "borrowed" components' designs from the other
          travel
          apps mentioned in the case study (like Kayak and
          Hotels.com), using the method below:</p>
        <div class="detail-grid">
          <div class="detail-item">
            <img src="@/assets/kayak-flight-view-to-steal.jpg" alt="Kayak flight view to copy" />
            <p>Ah, what a beautiful flight card component on Kayak! Let's "borrow" it, starting with a screenshot.</p>
          </div>
          <div class="detail-item">
            <img src="@/assets/chase-flight-view-mock.jpg" alt="Photoshopped version of the Kayak flight view" />
            <p>In Photoshop, we can strip away the unnecessary elements and create a more basic version of the
              component, to pass to Claude, using a prompt like:
              <code
                style="word-break: unset;">Make a FlightCard.vue component designed exactly like the attached screenshot and place it here. Ultra think if necessary to ensure design accuracy.</code>
              "Ultra think" is a hack to ensure the model spends extra time focusing on the details.
            </p>
          </div>
          <div class="detail-item full-width centered">
            <img src="@/assets/chase-flightview-final.jpg" alt="Final component in the app" />
            <p>Let's ask Claude to redesign the existing component in the application, referencing the modified
              screenshot.
              With some manual CSS tweaks for
              extra polish, we can get a pretty good approximation of the Kayak flight card. Here, you can see the
              component conditionally rendering the Points Boost information as well,
              subtly and inline, without beating the user over the head with it 😊.</p>
          </div>
          <div class="detail-item full-width">
            <img src="@/assets/New-filter-for-flights.jpg" alt="New filter for flights" />
            <p>
              Here's that flight card, added to the search results page.</p><br />
            <p>The Filters component on the left is also based on
              Kayak's UI. On mobile, it adapts to be a scrollable modal.
            </p>
          </div>
          <div class="detail-item full-width">
            <img src="@/assets/Chase-filter-as-modal.png" alt="Chase filter as modal" />
            <p>
              Compare this to Chase Travel's existing filter implementation for flight
              searches, shown here. This design results in the user not being able to see the results change
              while
              adjusting filters. This is a mobile-only approach that should not be replicated on desktop. </p><br />
            <p>
              Underneath this modal, in the flight results, notice how <b>only two flight
                choices are shown at a time</b> compared to <b>five</b> in my design. This allows the user to compare
              fare class pricing between different flights (i.e., economy plus for one flight vs economy for another),
              but is
              this really a common use case? I doubt it.</p><br />
            <p>Additionally, <b>there are
                separate
                views for the departure and return flights</b>, unlike my design, where <b>both legs are displayed
                together</b>. Most round-trip flight purchase
              decisions are made considering both legs of the flight (for trip duration and pricing reasons), so showing
              only one choice per screen (i.e., select departure then return) is additional
              cognitive load for the user and quite unnecessary. It's even possible that this design decision was made
              due to
              an inability to fit in all the information on the screen at once for both legs of the flight (!!).
            </p>
          </div>
          <div class="detail-item full-width">
            <picture>
              <source srcset="@/assets/CT-support-mock.jpg" media="(width >= 768px)" />
              <img src="@/assets/CT-support-mock-mobile.jpg" alt="Support section in the Itinerary page on iPhone" />
            </picture>
            <p>In the new app, I made sure that Support info was included in both the bookings
              and itinerary pages, with a link to iMessage the support team directly.</p>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="Design-consistency-with-LLMs">
          Design consistency with LLMs
        </h2>
        <p>One downside to this approach is that the LLMs will often generate designs that are not consistent
          with the overall design language of the application.</p>
        <p>There are many different schools of thought on how to approach this. For this application, I made a "living
          design system" of sorts by creating a <a href="https://chasetravel.netlify.app/components" target="_blank"
            rel="noopener noreferrer">component showcase route</a> in the application (desktop only). As components are
          fine-tuned here, the LLM can be instructed to replace the other components with the new, improved ones.</p>
        <p>However, it's still important to determine fonts, colors, and spacing initially, otherwise the amount of work
          to redesign everything constantly is too substantial.</p>
      </div>
      <div class="detail-section">
        <h2 class="section-title" id="auth-and-state-management">
          Authentication and state management
        </h2>
        <p>The user should be able to use the application without logging in, but if they do, they should be able
          to see
          their points and a hover state CTA for Points Boost. The user shouldn't have to jump to another tab for a
          lengthy login process,
          as the current implementation of Chase Travel mandates its users to.</p>
        <div class="detail-grid">
          <div class="detail-item full-width centered">
            <video autoplay loop muted playsinline src="@/assets/chase-points-signin.mov" />
            <p>
              While this login might appear unrealisticly simple, a real implementation
              shouldn't appear much more complicated than this. It should only involve a popup modal with a form to log
              in, followed
              by
              2FA. This is now <strong>industry-standard</strong>. Using passkeys, this could be an even quicker
              experience. </p><br />
            <p>This experience could also be sped up by improving the global authentication design, with access to
              serious banking/investment features requiring stricter auth (2FA/biometric), versus read-level features
              (i.e., seeing
              balance and points) requiring only
              simple auth.
            </p>
          </div>
        </div>
        <p>For searches, I kept all the params in
          the URL for easy sharing and
          bookmarking. I mirrored this to the application global state with Pinia as well as localStorage (using a
          Pinia plugin), since there was no Personally Identifiable Information (PII) involved. In a
          real production application, I'd simply replace that <code style="word-break: unset;">localStorage</code>
          logic with database calls.</p>
      </div>
      <div class="detail-section">
        <h2 class="section-title" id="the-final-product">
          The final product
        </h2>
        <p>In a little over a month, I completed a case study (2 weeks), developed the app (2 weeks), and wrote
          these articles (1-2 weeks).</p>
        <p>The result was a working app with a significantly improved UI/UX over the original.
          <a href="https://chasetravel.netlify.app/" target="_blank" rel="noopener noreferrer">You can view the final
            product here</a>, or watch the walkthrough video below.
        </p>
        <div class="iphone-super-container">
          <iPhone :videoSrc="chaseTravelVideoSrc" />
        </div>
      </div>
      <div class="detail-section">
        <h2 class="section-title" id="lessons-learned-with-llms">
          Lessons learned working with LLMs
        </h2>
        <p>Sometimes, Claude/Cursor just couldn't get the details right. I frequently
          had to go in and make manual changes to CSS and template files, and simplify things considerably from what was
          intially spit out. Other times, a broad prompt as simple as "Identify areas for improvement and simplification
          in the
          application" would yield an impressive plan of action that I could pick and choose from to
          improve the application with broad strokes.</p>
        <div class="detail-grid" style="max-width: 700px !important;">
          <div class="detail-item">
            <img src="@/assets/git-small-fixes.jpg" alt="Support section in the Itinerary page on iPhone" />
            <p>
              Sure, I frequently had to fix basic front-end mistakes that even a junior developer might not make...
            </p>
          </div>
          <div class="detail-item">
            <img src="@/assets/git-big-fixes.jpg" alt="Support section in the Itinerary page  " />
            <p>
              ...but I could also instruct Claude to, say, "Extract all duplicate
              functions to global utilities where possible", removing hundreds of extra lines of code without any ill
              effects
              whatsoever.
            </p>
          </div>
        </div>
        <p>In the end, I was able to build a working app that was a significant improvement over the original, and I
          learned a lot about the potential of LLMs. I don't think there's one "right" way to use these tools, but I
          think
          there's a lot of potential in the combination of Cursor and Claude for rapid development of web applications.
        </p>
      </div>

      <div class="detail-section">
        <h2 class="section-title" id="the-future-of-travel-search-uis">
          The future of travel search UIs
        </h2>
        <p>Despite the growing popularity of LLM-powered chat interfaces for flight searches, a solid web UI is still
          essential for purchase decisions. Users need to verify options, compare prices and schedules simultaneously,
          and use features like filtering and sorting — tasks that a chat interface handles poorly compared to a
          well-designed visual layout. This desire for verification is going to be even
          stronger as ads are increasingly integrated into the chat interface, making it harder to trust the results.
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
  margin-top: -1rem;

  .hero-image {
    overflow: unset;
    box-shadow: unset;
    margin-bottom: 0;
  }
}

.detail-grid {
  max-width: 1200px !important;
  align-items: flex-start !important;
  margin-bottom: 2rem !important;
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

  h3 {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  ul,
  ol {
    max-width: 700px;
    margin: 1.5rem auto;
    padding-left: 1rem;
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

  figure {
    max-width: 840px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;

    figcaption {
      font-family: 'comma-sans', sans-serif;
      font-size: 0.9rem;
      line-height: 1.4;
      color: #666;
      text-align: left;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .iphone-super-container {
    display: flex;
    justify-content: center;
    margin: 2rem auto;

    @media (max-width: 768px) {
      transform: scale(0.8);
      transform-origin: center top;
    }
  }
}
</style>

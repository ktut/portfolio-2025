<script>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'PostArticleNav',
  setup() {
    const router = useRouter()
    const currentRoute = router.currentRoute

    // Get all project routes (exclude Home and About)
    const projectRoutes = computed(() => {
      return router.getRoutes()
        .filter(route =>
          route.name !== 'home' &&
          route.name !== 'about' &&
          route.meta?.displayName
        )
        .sort((a, b) => {
          // Sort by path to maintain consistent order
          return a.path.localeCompare(b.path)
        })
    })

    // Find current index
    const currentIndex = computed(() => {
      return projectRoutes.value.findIndex(
        route => route.name === currentRoute.value.name
      )
    })

    // Get previous route
    const previousRoute = computed(() => {
      if (currentIndex.value > 0) {
        return projectRoutes.value[currentIndex.value - 1]
      }
      return null
    })

    // Get next route
    const nextRoute = computed(() => {
      if (currentIndex.value >= 0 && currentIndex.value < projectRoutes.value.length - 1) {
        return projectRoutes.value[currentIndex.value + 1]
      }
      return null
    })

    return {
      previousRoute,
      nextRoute
    }
  }
}
</script>

<template>
  <nav class="post-article-nav">
    <router-link
      v-if="previousRoute"
      :to="previousRoute.path"
      class="nav-link nav-link--previous"
    >
      <span class="nav-arrow">&larr;</span>
      <div class="nav-content">
        <span class="nav-label">Previous</span>
        <span class="nav-title">{{ previousRoute.meta.displayName }}</span>
      </div>
    </router-link>
    <div v-else class="nav-link nav-link--disabled"></div>

    <router-link
      v-if="nextRoute"
      :to="nextRoute.path"
      class="nav-link nav-link--next"
    >
      <div class="nav-content">
        <span class="nav-label">Next</span>
        <span class="nav-title">{{ nextRoute.meta.displayName }}</span>
      </div>
      <span class="nav-arrow">&rarr;</span>
    </router-link>
    <div v-else class="nav-link nav-link--disabled"></div>
  </nav>
</template>

<style lang="scss" scoped>
.post-article-nav {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #e0e0e0;

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    flex: 1;
    background-color: #f8f8f8;

    &:hover:not(.nav-link--disabled) {
      background-color: #e8e8e8;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &--previous {
      justify-content: flex-start;

      @media (min-width: 769px) {
        justify-content: center;
      }
    }

    &--next {
      justify-content: flex-end;
      text-align: right;

      @media (min-width: 769px) {
        justify-content: center;
        text-align: center;
      }
    }

    &--disabled {
      visibility: hidden;
    }
  }

  .nav-arrow {
    font-size: 1.5rem;
    color: #666;
    transition: transform 0.3s ease;
  }

  .nav-link:hover .nav-arrow {
    &:first-child {
      transform: translateX(-4px);
    }
    &:last-child {
      transform: translateX(4px);
    }
  }

  .nav-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .nav-label {
    font-size: 0.875rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
  }

  .nav-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    .nav-link {
      &--next {
        text-align: left;
        justify-content: flex-start;
        flex-direction: row-reverse;
      }
    }
  }
}
</style>

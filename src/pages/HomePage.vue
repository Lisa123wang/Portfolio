<template>
  <div class="page home-page">
    <Hero />
    <section class="home-intro container">
      <h2 class="page-subtitle">What I Do</h2>
      <p>
        I design and build reliable, maintainable software systems with a focus on clean architecture,
        performance, and long‑term scalability.
      </p>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'

export default {
  name: 'HomePage',
  components: {
    Hero
  }
}
</script>

<style scoped>
.home-page {
  background: linear-gradient(135deg, #f9fafb 0%, #eef2ff 50%, #e0e7ff 100%);
}

.home-intro {
  padding: 4rem 0 5rem;
  max-width: 800px;
}

.page-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.home-intro p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
}
</style>


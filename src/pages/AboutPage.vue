<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1>About</h1>
        <p>Background, principles, and how I approach software engineering.</p>
      </div>
    </header>
    <About />
    <section class="container page-extra">
      <h2>How I Work</h2>
      <p>
        I value clear communication, pragmatic decision‑making, and strong collaboration with
        product, design, and other engineering teams.
      </p>
    </section>
  </div>
</template>

<script>
import About from '../components/About.vue'

export default {
  name: 'AboutPage',
  components: {
    About
  }
}
</script>

<style scoped>
.page-header {
  padding: 3.5rem 0 2.5rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-primary);
}

.page-header h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: var(--text-secondary);
}

.page-extra {
  padding-bottom: 4rem;
  max-width: 800px;
}

.page-extra h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.page-extra p {
  color: var(--text-secondary);
  line-height: 1.8;
}
</style>


<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1>Projects</h1>
        <p>Selected work demonstrating experience with front‑end, back‑end, and cloud tooling.</p>
      </div>
    </header>
    <Projects />
  </div>
</template>

<script>
import Projects from '../components/Projects.vue'

export default {
  name: 'ProjectsPage',
  components: {
    Projects
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
</style>


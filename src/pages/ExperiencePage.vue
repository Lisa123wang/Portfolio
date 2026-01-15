<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1>Experience</h1>
        <p>Roles, responsibilities, and impact across different teams and companies.</p>
      </div>
    </header>
    <Experience />
  </div>
</template>

<script>
import Experience from '../components/Experience.vue'

export default {
  name: 'ExperiencePage',
  components: {
    Experience
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


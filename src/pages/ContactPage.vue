<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1>Contact</h1>
        <p>Let’s talk about roles, projects, or collaboration opportunities.</p>
      </div>
    </header>
    <Contact />
  </div>
</template>

<script>
import Contact from '../components/Contact.vue'

export default {
  name: 'ContactPage',
  components: {
    Contact
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


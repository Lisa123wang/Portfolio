<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-image">
            <div class="project-placeholder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
              </svg>
            </div>
            <div class="project-overlay">
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a :href="project.demo" target="_blank" rel="noopener noreferrer" class="project-link" v-if="project.demo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">
              {{ project.title }}
              <span v-if="project.isThesis" class="thesis-badge">Thesis</span>
            </h3>
            <p class="project-description">{{ project.description }}</p>
            <div v-if="project.isThesis" class="thesis-details">
              <div class="detail-item">
                <strong>My Contribution:</strong> <span>{{ project.contribution }}</span>
              </div>
              <div v-if="project.improvements" class="detail-item">
                <a :href="project.improvements" target="_blank" rel="noopener noreferrer" class="improvements-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View Improvement Plan
                </a>
              </div>
            </div>
            <div class="project-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Thesis Project: [Your Project Title]',
          description: 'A comprehensive [description] developed as part of my undergraduate thesis work.',
          tags: ['[Tech1]', '[Tech2]', '[Tech3]'],
          github: 'https://github.com/YOUR_USERNAME/YOUR_REPO',
          demo: null,
          contribution: 'XX%',
          improvements: 'https://github.com/YOUR_USERNAME/YOUR_REPO/blob/main/IMPROVEMENTS.md',
          isThesis: true
        },
        {
          id: 2,
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
          tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
          github: 'https://github.com',
          demo: 'https://example.com',
          isThesis: false
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
          tags: ['Vue.js', 'API Integration', 'Chart.js'],
          github: 'https://github.com',
          demo: null
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  overflow: hidden;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.3;
}

.project-placeholder svg {
  width: 80px;
  height: 80px;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: transform 0.3s ease;
}

.project-link:hover {
  transform: scale(1.1);
}

.project-link svg {
  width: 24px;
  height: 24px;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.thesis-badge {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.thesis-details {
  margin: 1rem 0;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border-left: 3px solid var(--primary-color);
}

.detail-item {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.detail-item strong {
  color: var(--text-primary);
}

.improvements-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.improvements-link:hover {
  color: var(--primary-dark);
}

.improvements-link svg {
  width: 16px;
  height: 16px;
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

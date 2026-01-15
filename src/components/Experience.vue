<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(exp, index) in experiences" :key="index">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-title">{{ exp.position }}</h3>
              <span class="timeline-date">{{ exp.period }}</span>
            </div>
            <h4 class="timeline-company">{{ exp.company }}</h4>
            <p class="timeline-description">{{ exp.description }}</p>
            <ul class="timeline-achievements">
              <li v-for="achievement in exp.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          position: 'Senior Software Engineer',
          company: 'Tech Company Inc.',
          period: '2022 - Present',
          description: 'Leading development of scalable web applications and mentoring junior developers.',
          achievements: [
            'Architected and implemented microservices architecture serving 1M+ users',
            'Reduced application load time by 40% through optimization',
            'Led team of 5 developers in agile environment'
          ]
        },
        {
          position: 'Software Engineer',
          company: 'Startup Solutions',
          period: '2020 - 2022',
          description: 'Developed full-stack applications and collaborated with cross-functional teams.',
          achievements: [
            'Built RESTful APIs handling 100K+ requests daily',
            'Implemented real-time features using WebSockets',
            'Improved code quality through unit testing and code reviews'
          ]
        },
        {
          position: 'Junior Developer',
          company: 'Digital Agency',
          period: '2019 - 2020',
          description: 'Created responsive web applications and learned modern development practices.',
          achievements: [
            'Developed 10+ client websites using Vue.js and React',
            'Collaborated with designers to implement pixel-perfect UIs',
            'Maintained and updated legacy codebases'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -1.5rem;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 4px solid var(--bg-secondary);
  z-index: 1;
}

.timeline-content {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(10px);
  box-shadow: var(--shadow-lg);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.timeline-date {
  color: var(--text-secondary);
  font-weight: 500;
  white-space: nowrap;
}

.timeline-company {
  font-size: 1.125rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.timeline-achievements {
  list-style: none;
  padding-left: 0;
}

.timeline-achievements li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .experience {
    padding: 4rem 0;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-item {
    padding-left: 2rem;
  }

  .timeline-marker {
    left: -1rem;
  }

  .timeline-header {
    flex-direction: column;
  }
}
</style>

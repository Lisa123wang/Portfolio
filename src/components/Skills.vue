<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      <div class="skills-grid">
        <div class="skill-category" v-for="category in skillCategories" :key="category.name">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skill-items">
            <div class="skill-item" v-for="skill in category.items" :key="skill.name">
              <div class="skill-icon">
                <span>{{ skill.icon }}</span>
              </div>
              <div class="skill-name">{{ skill.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillCategories: [
        {
          name: 'Frontend',
          items: [
            { name: 'Vue.js', icon: '⚡' },
            { name: 'React', icon: '⚛️' },
            { name: 'JavaScript', icon: '📜' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'HTML/CSS', icon: '🎨' },
            { name: 'Tailwind CSS', icon: '💨' }
          ]
        },
        {
          name: 'Backend',
          items: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Python', icon: '🐍' },
            { name: 'Express', icon: '🚂' },
            { name: 'REST APIs', icon: '🔌' },
            { name: 'GraphQL', icon: '📊' },
            { name: 'MongoDB', icon: '🍃' }
          ]
        },
        {
          name: 'Tools & Others',
          items: [
            { name: 'Git', icon: '🔀' },
            { name: 'Docker', icon: '🐳' },
            { name: 'AWS', icon: '☁️' },
            { name: 'CI/CD', icon: '🔄' },
            { name: 'Testing', icon: '🧪' },
            { name: 'Agile', icon: '📋' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border-color);
}

.skill-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: var(--bg-secondary);
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: var(--primary-color);
  color: white;
  transform: scale(1.05);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 0;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-items {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

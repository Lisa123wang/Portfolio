<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1>Academic Highlights</h1>
        <p>
          Selected coursework and results that are most relevant to my graduate applications.
        </p>
      </div>
    </header>

    <section class="container academics-section">
      <div class="summary-cards">
        <div class="summary-card">
          <div class="label">Overall GPA</div>
          <div class="value">X.XX / 4.30</div>
          <div class="hint">Replace with your actual GPA</div>
        </div>
        <div class="summary-card">
          <div class="label">Major GPA</div>
          <div class="value">X.XX / 4.30</div>
          <div class="hint">Core CS / SE courses</div>
        </div>
        <div class="summary-card">
          <div class="label">Ranking</div>
          <div class="value">Top XX%</div>
          <div class="hint">Optional, if available</div>
        </div>
      </div>

      <div class="section-block">
        <h2>Key Coursework</h2>
        <p class="section-desc">
          A selection of courses that best demonstrate my readiness for graduate-level work.
        </p>

        <div class="course-grid">
          <div
            v-for="course in coreCourses"
            :key="course.code"
            class="course-card"
          >
            <div class="course-header">
              <div>
                <div class="course-code">{{ course.code }}</div>
                <div class="course-name">{{ course.name }}</div>
              </div>
              <div class="course-grade">
                <span>{{ course.grade }}</span>
              </div>
            </div>
            <p class="course-notes">{{ course.note }}</p>
          </div>
        </div>
      </div>

      <div class="section-block">
        <h2>Research / Projects in Coursework</h2>
        <p class="section-desc">
          Course projects that are closely related to my intended research direction.
        </p>

        <ul class="project-list">
          <li v-for="item in projectCourses" :key="item.title">
            <div class="project-title">
              {{ item.title }}
              <span class="project-course"> · {{ item.course }}</span>
            </div>
            <p class="project-desc">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AcademicsPage',
  data() {
    return {
      coreCourses: [
        {
          code: 'CSxxx',
          name: 'Algorithms / Data Structures',
          grade: 'A+',
          note: 'Covered algorithm design and analysis; final score in the top x% of class.'
        },
        {
          code: 'CSxxx',
          name: 'Operating Systems',
          grade: 'A',
          note: 'Implemented a simplified OS kernel including process scheduling and virtual memory.'
        },
        {
          code: 'CSxxx',
          name: 'Database Systems',
          grade: 'A+',
          note: 'Designed and implemented a mini relational DBMS and query optimizer.'
        },
        {
          code: 'CSxxx',
          name: 'Machine Learning / AI',
          grade: 'A',
          note: 'Completed coursework on supervised/unsupervised learning and hands-on projects.'
        }
      ],
      projectCourses: [
        {
          title: 'xxxxxxx',
          course: 'Advanced Software Engineering',
          description:
            'A semester-long team project building a production-grade web application, with CI/CD, testing, and documentation.'
        },
        {
          title: 'xxxxxxx',
          course: 'Machine Learning',
          description:
            'Implemented and evaluated several ML models on real-world datasets, focusing on model selection and evaluation.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.academics-section {
  padding: 3rem 0 4rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.summary-card {
  padding: 1.5rem 1.75rem;
  border-radius: 12px;
  background: var(--bg-secondary);
  box-shadow: var(--shadow);
}

.summary-card .label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.summary-card .value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
}

.summary-card .hint {
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.section-block {
  margin-bottom: 3rem;
}

.section-block h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.section-desc {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.course-card {
  padding: 1.5rem 1.75rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: #ffffff;
  box-shadow: var(--shadow);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  gap: 0.75rem;
}

.course-code {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.course-name {
  font-size: 1.05rem;
  font-weight: 600;
}

.course-grade {
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.08);
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
}

.course-notes {
  font-size: 0.92rem;
  color: var(--text-secondary);
}

.project-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-title {
  font-weight: 600;
}

.project-course {
  font-weight: 500;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.project-desc {
  margin-top: 0.25rem;
  font-size: 0.92rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .academics-section {
    padding-top: 2rem;
  }
}
</style>


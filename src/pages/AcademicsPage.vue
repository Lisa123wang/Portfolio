<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <div class="header-content">
          <div>
            <h1>Academic Highlights</h1>
            <p>
              Selected coursework and results that are most relevant to my graduate applications.
            </p>
          </div>
          <a href="/transcript.pdf" class="download-btn" download>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Full Transcript (PDF)
          </a>
        </div>
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
        <h2>English Proficiency</h2>
        <div class="language-card">
          <div class="language-header">
            <span class="language-name">IELTS</span>
            <span class="language-score">Overall: {{ ieltsScore.overall }}</span>
          </div>
          <div class="language-details">
            <div class="language-item">
              <span>Listening:</span>
              <strong>{{ ieltsScore.listening }}</strong>
            </div>
            <div class="language-item">
              <span>Reading:</span>
              <strong>{{ ieltsScore.reading }}</strong>
            </div>
            <div class="language-item">
              <span>Writing:</span>
              <strong>{{ ieltsScore.writing }}</strong>
            </div>
            <div class="language-item">
              <span>Speaking:</span>
              <strong>{{ ieltsScore.speaking }}</strong>
            </div>
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
      ieltsScore: {
        overall: 'X.X',
        listening: 'X.X',
        reading: 'X.X',
        writing: 'X.X',
        speaking: 'X.X'
      },
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

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.header-content > div {
  flex: 1;
  min-width: 300px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.download-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.download-btn svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

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

.language-card {
  padding: 1.5rem 1.75rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: #ffffff;
  box-shadow: var(--shadow);
  max-width: 500px;
}

.language-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.language-name {
  font-size: 1.25rem;
  font-weight: 600;
}

.language-score {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-color);
}

.language-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.language-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.language-item span {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.language-item strong {
  color: var(--text-primary);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }

  .download-btn {
    width: 100%;
    justify-content: center;
  }

  .language-details {
    grid-template-columns: 1fr;
  }

  .academics-section {
    padding-top: 2rem;
  }
}
</style>


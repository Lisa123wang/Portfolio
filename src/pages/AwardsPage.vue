<template>
  <div class="page">
    <header class="page-header">
      <div class="container">
        <h1>Awards & Competitions</h1>
        <p>Recognition and achievements in competitions and academic excellence.</p>
      </div>
    </header>

    <section class="container awards-section">
      <div class="awards-grid">
        <div v-for="award in awards" :key="award.id" class="award-card">
          <div class="award-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          </div>
          <div class="award-content">
            <div class="award-rank">{{ award.rank }}</div>
            <h3 class="award-title">{{ award.title }}</h3>
            <div class="award-event">{{ award.event }}</div>
            <div class="award-date">{{ award.date }}</div>
            <p v-if="award.description" class="award-description">{{ award.description }}</p>
          </div>
        </div>
      </div>

      <div v-if="awards.length === 0" class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
        </div>
        <h3>No Awards Added Yet</h3>
        <p>Add your competition results and awards to showcase your achievements.</p>
        <div class="empty-instructions">
          <p><strong>To add awards:</strong></p>
          <ol>
            <li>Open <code>src/pages/AwardsPage.vue</code></li>
            <li>Uncomment and fill in the award objects in the <code>awards</code> array</li>
            <li>Include: rank, title, event name, date, and description</li>
          </ol>
          <p class="example-format">
            Example format:<br>
            <code>{{
              `{ id: 1, rank: '1st Place', title: 'Programming Contest', event: 'University Name', date: '2024-03', description: '...' }`
            }}</code>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AwardsPage',
  data() {
    return {
      awards: [
        {
          id: 1,
          rank: '1st Place',
          title: '全國大專院校程式設計競賽',
          event: '教育部 / 中華民國大專校院資訊應用服務創新競賽',
          date: '2024-03',
          description: '在三人隊伍中負責演算法設計與優化，使用 C++ 和 Python 解決所有題目，最終以滿分獲得第一名。'
        },
        {
          id: 2,
          rank: 'Gold Medal',
          title: 'ACM-ICPC Asia Regional Contest',
          event: 'ACM International Collegiate Programming Contest',
          date: '2023-11',
          description: '代表學校參賽，負責動態規劃和圖論題目，協助隊伍在區域賽中獲得金獎。'
        },
        {
          id: 3,
          rank: '2nd Place',
          title: '校際 Hackathon - 智慧校園創新應用',
          event: '大學資訊工程學系',
          date: '2023-06',
          description: '開發智慧課堂管理系統，整合 IoT 感測器與 Web 應用，獲得評審團特別獎。'
        },
        {
          id: 4,
          rank: 'Outstanding Achievement',
          title: '機器學習競賽 - 影像辨識挑戰',
          event: 'Data Science Society',
          date: '2024-01',
          description: '使用深度學習模型（CNN + Transformer）達到 95% 準確率，在參賽隊伍中排名前 10%。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.awards-section {
  padding: 3rem 0 4rem;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.award-card {
  padding: 2rem;
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  gap: 1.5rem;
}

.award-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.award-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.award-icon svg {
  width: 28px;
  height: 28px;
}

.award-content {
  flex: 1;
}

.award-rank {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.award-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.award-event {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.award-date {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.award-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-top: 0.75rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.empty-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  color: var(--text-secondary);
  opacity: 0.3;
}

.empty-icon svg {
  width: 100%;
  height: 100%;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.empty-state > p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.empty-instructions {
  text-align: left;
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
  margin-top: 2rem;
}

.empty-instructions p {
  margin-bottom: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.empty-instructions strong {
  color: var(--text-primary);
}

.empty-instructions ol {
  margin: 1rem 0 1rem 1.5rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.empty-instructions li {
  margin-bottom: 0.5rem;
}

.empty-instructions code {
  background: var(--bg-primary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--primary-color);
  border: 1px solid var(--border-color);
}

.example-format {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.example-format code {
  display: block;
  margin-top: 0.5rem;
  padding: 0.75rem;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-all;
}

@media (max-width: 768px) {
  .awards-grid {
    grid-template-columns: 1fr;
  }

  .award-card {
    flex-direction: column;
  }
}
</style>

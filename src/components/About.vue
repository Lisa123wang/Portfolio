<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            I'm a passionate software engineer with a love for creating elegant solutions to complex problems.
            With expertise in modern web technologies, I specialize in building scalable applications that
            deliver exceptional user experiences.
          </p>
          <p>
            My journey in software development started with curiosity and has evolved into a career focused
            on continuous learning and innovation. I enjoy working with cutting-edge technologies and
            contributing to open-source projects.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to tech communities,
            or working on personal projects that challenge my skills and creativity.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">20+</div>
            <div class="stat-label">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-text p {
  margin-bottom: 1.5rem;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-stats {
    flex-direction: row;
    justify-content: space-around;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-stats {
    flex-direction: column;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}
</style>

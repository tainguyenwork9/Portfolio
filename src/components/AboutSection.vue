<template>
  <section id="about" class="section reveal">
    <p class="section-label">Về tôi</p>
    <h2 class="section-title">Giới thiệu về tôi</h2>

    <div class="about-grid">
      <!-- Column 1: Education -->
      <div class="about-col">
        <div class="about-col-header">
          <span class="about-icon">🎓</span>
          <h3 class="about-col-title">Học vấn</h3>
        </div>
        <div class="about-col-body">
          <p class="about-main">{{ about.education.school }}</p>
          <p class="about-sub">{{ about.education.major }}</p>
          <p class="about-badge">{{ about.education.year }}</p>
        </div>
      </div>

      <div class="col-divider" aria-hidden="true"></div>

      <!-- Column 2: Interests -->
      <div class="about-col">
        <div class="about-col-header">
          <span class="about-icon">🎯</span>
          <h3 class="about-col-title">Lĩnh vực quan tâm</h3>
        </div>
        <ul class="about-col-body interest-list">
          <li
            v-for="interest in about.interests"
            :key="interest"
            class="interest-item"
          >
            <span class="dot" aria-hidden="true"></span>
            {{ interest }}
          </li>
        </ul>
      </div>

      <div class="col-divider" aria-hidden="true"></div>

      <!-- Column 3: Focus -->
      <div class="about-col">
        <div class="about-col-header">
          <span class="about-icon">📍</span>
          <h3 class="about-col-title">Định hướng</h3>
        </div>
        <div class="about-col-body">
          <p class="about-main">{{ about.focus.direction }}</p>
          <div class="focus-stack">
            <div class="focus-row">
              <span class="focus-label">Backend</span>
              <span class="focus-value">{{ about.focus.backend }}</span>
            </div>
            <div class="focus-row">
              <span class="focus-label">Frontend</span>
              <span class="focus-value">{{ about.focus.frontend }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { about } from '../data/portfolio.js'
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  gap: 0 2rem;
}

.col-divider {
  width: 1px;
  background: var(--border);
  min-height: 120px;
  align-self: stretch;
}

.about-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-col-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.about-icon {
  font-size: 1rem;
  line-height: 1;
}

.about-col-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text);
}

.about-col-body {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.about-main {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

.about-sub {
  font-size: 0.83rem;
  color: var(--text-muted);
}

.about-badge {
  margin-top: 0.25rem;
  display: inline-flex;
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-pill);
  background: var(--hover-bg);
  border: 1px solid var(--border);
  font-size: 0.78rem;
  color: var(--text-muted);
  width: fit-content;
}

/* Interests */
.interest-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #AAAAAA;
  flex-shrink: 0;
}

/* Focus stack */
.focus-stack {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.4rem;
}

.focus-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.focus-label {
  font-size: 0.75rem;
  color: var(--text-light);
  font-weight: 500;
  width: 60px;
  flex-shrink: 0;
}

.focus-value {
  font-size: 0.83rem;
  color: var(--text);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem 0;
  }
  .col-divider {
    width: 100%;
    height: 1px;
    min-height: 0;
  }
}
</style>

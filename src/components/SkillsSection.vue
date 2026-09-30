<template>
  <section id="skills" class="section reveal">
    <p class="section-label">Chuyên môn</p>
    <h2 class="section-title">Kỹ năng chuyên môn</h2>

    <div class="skills-grid">
      <div
        v-for="group in skills"
        :key="group.id"
        class="skill-group"
      >
        <div class="skill-group-header">
          <span class="skill-icon" aria-hidden="true">{{ group.icon }}</span>
          <h3 class="skill-group-name">{{ group.group }}</h3>
        </div>
        <div class="skill-tags">
          <span
            v-for="item in group.items"
            :key="item"
            class="tag"
          >{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/portfolio.js'
</script>

<style scoped>
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.skill-group {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  align-items: start;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border);
}
.skill-group:first-child { border-top: 1px solid var(--border); }

.skill-group-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.15rem;
}

.skill-icon {
  font-size: 0.95rem;
  color: var(--text-muted);
  font-style: normal;
  font-family: monospace;
  line-height: 1;
}

.skill-group-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* Responsive */
@media (max-width: 640px) {
  .skill-group {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
}
</style>

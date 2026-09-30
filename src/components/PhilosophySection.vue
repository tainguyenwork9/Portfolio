<template>
  <section id="philosophy" class="section philosophy-section reveal">
    <!-- Quote -->
    <div class="quote-block">
      <span class="quote-mark" aria-hidden="true">"</span>
      <blockquote class="quote-text">{{ philosophy.quote }}</blockquote>
    </div>

    <!-- Values -->
    <div class="values-row">
      <div
        v-for="val in philosophy.values"
        :key="val.id"
        class="value-item"
      >
        <p class="value-title">{{ val.title }}</p>
        <p class="value-desc">{{ val.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { philosophy } from '../data/portfolio.js'
</script>

<style scoped>
.philosophy-section {
  background: #FAFAF8;
}

.quote-block {
  position: relative;
  padding: 0 0 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid var(--border);
}

.quote-mark {
  display: block;
  font-size: 4rem;
  line-height: 0.8;
  color: var(--border);
  font-family: Georgia, serif;
  margin-bottom: 0.5rem;
  user-select: none;
}

.quote-text {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1.75;
  max-width: 680px;
  font-style: normal;
}

.values-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.value-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.value-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text);
}

.value-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.65;
}

@media (max-width: 640px) {
  .values-row {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  .quote-text {
    font-size: 1rem;
  }
}
</style>

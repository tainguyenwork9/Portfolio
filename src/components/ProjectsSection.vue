<template>
  <section id="projects" class="section reveal">
    <p class="section-label">Portfolio</p>
    <h2 class="section-title">Dự án tiêu biểu</h2>

    <div class="projects-list">
      <article
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <!-- Thumbnail -->
        <div class="project-thumb" aria-hidden="true">
          <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Browser mockup -->
            <rect width="160" height="120" rx="8" fill="#F5F5F3"/>
            <rect x="0" y="0" width="160" height="24" rx="8" fill="#EBEBEA"/>
            <rect x="0" y="16" width="160" height="8" fill="#EBEBEA"/>
            <!-- Browser dots -->
            <circle cx="16" cy="12" r="3.5" fill="#D8D8D8"/>
            <circle cx="27" cy="12" r="3.5" fill="#D8D8D8"/>
            <circle cx="38" cy="12" r="3.5" fill="#D8D8D8"/>
            <!-- URL bar -->
            <rect x="50" y="7" width="90" height="10" rx="5" fill="#E5E5E4"/>
            <!-- Content lines -->
            <rect x="12" y="35" width="50" height="5" rx="2.5" fill="#D8D8D8"/>
            <rect x="12" y="45" width="136" height="3" rx="1.5" fill="#E8E8E8"/>
            <rect x="12" y="52" width="110" height="3" rx="1.5" fill="#E8E8E8"/>
            <!-- Card items -->
            <rect x="12" y="65" width="42" height="40" rx="4" fill="#EAEAEA"/>
            <rect x="60" y="65" width="42" height="40" rx="4" fill="#EAEAEA"/>
            <rect x="108" y="65" width="42" height="40" rx="4" fill="#EAEAEA"/>
            <!-- Motorcycle icon placeholder -->
            <text x="33" y="92" text-anchor="middle" font-size="16" fill="#C0C0C0">🏍</text>
            <text x="81" y="92" text-anchor="middle" font-size="16" fill="#C0C0C0">🏍</text>
            <text x="129" y="92" text-anchor="middle" font-size="16" fill="#C0C0C0">🏍</text>
          </svg>
        </div>

        <!-- Main Info -->
        <div class="project-main">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>

          <div class="project-tags">
            <span v-for="tech in project.techStack" :key="tech" class="tag">{{ tech }}</span>
          </div>

          <div class="project-actions">
            <a
              :href="project.links.github"
              target="_blank"
              rel="noopener"
              class="btn btn-ghost btn-sm"
              id="btn-project-github"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Side Info -->
        <div class="project-side">
          <div class="side-block">
            <p class="side-label">Vai trò</p>
            <p class="side-value">{{ project.role }}</p>
          </div>
          <div class="side-block">
            <p class="side-label">Chức năng</p>
            <ul class="feature-list">
              <li v-for="feat in project.features" :key="feat" class="feature-item">
                <span class="feat-dot" aria-hidden="true"></span>
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/portfolio.js'
</script>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  display: grid;
  grid-template-columns: 160px 1fr 200px;
  gap: 1.5rem;
  align-items: start;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card-bg);
  transition: border-color 0.2s ease, background 0.2s ease;
}
.project-card:hover {
  border-color: #C0C0C0;
  background: #FEFEFE;
}

/* Thumbnail */
.project-thumb {
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--border);
  flex-shrink: 0;
}
.project-thumb svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Main */
.project-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.project-desc {
  font-size: 0.83rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 0.9rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-sm {
  padding: 0.38rem 0.8rem;
  font-size: 0.78rem;
}

/* Side */
.project-side {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding-left: 1.2rem;
  border-left: 1px solid var(--border);
}

.side-block {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.side-label {
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-light);
}

.side-value {
  font-size: 0.83rem;
  color: var(--text);
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.81rem;
  color: var(--text-muted);
}

.feat-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #B0B0B0;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .project-card {
    grid-template-columns: 130px 1fr;
    grid-template-rows: auto auto;
  }
  .project-side {
    grid-column: 1 / -1;
    padding-left: 0;
    border-left: none;
    border-top: 1px solid var(--border);
    padding-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .project-card {
    grid-template-columns: 1fr;
  }
  .project-thumb {
    max-width: 200px;
  }
}
</style>

<template>
  <section id="home" class="section hero-section reveal">
    <div class="hero-grid">

      <!-- Left: Content -->
      <div class="hero-content">
        <p class="hero-greeting">Xin chào, mình là</p>
        <h1 class="hero-name">{{ owner.name.toUpperCase() }}</h1>
        <p class="hero-role">{{ owner.role }}</p>
        <p class="hero-bio">{{ owner.bio }}</p>

        <!-- CTA Buttons -->
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary" @click.prevent="scrollTo('projects')" id="btn-view-projects">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Xem dự án
          </a>
          <a href="#contact" class="btn btn-ghost" @click.prevent="scrollTo('contact')" id="btn-contact">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Liên hệ
          </a>
        </div>

        <!-- Social Links -->
        <div class="hero-socials">
          <a :href="owner.socials.github" target="_blank" rel="noopener" class="social-link" aria-label="GitHub" id="social-github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a :href="owner.socials.linkedin" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn" id="social-linkedin">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a :href="owner.socials.facebook" target="_blank" rel="noopener" class="social-link" aria-label="Facebook" id="social-facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: Illustration -->
      <div class="hero-illustration" aria-hidden="true">
        <img
          src="/hero-illustration.png"
          alt="Developer illustration"
          class="illus-img"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { owner } from '../data/portfolio.js'

// Icons are rendered as inline SVGs directly in the template

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  padding: 4rem 3rem 3.5rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 3rem;
  align-items: center;
}

/* Content */
.hero-greeting {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 450;
  margin-bottom: 0.6rem;
}

.hero-name {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 0.6rem;
}

.hero-role {
  font-size: 0.92rem;
  color: var(--text-muted);
  font-weight: 450;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--border);
}

.hero-bio {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1.8rem;
}

.hero-socials {
  display: flex;
  gap: 0.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: var(--ease);
}
.social-link:hover {
  color: var(--text);
  background: var(--hover-bg);
  border-color: #C8C8C8;
}

/* Illustration */
.hero-illustration {
  display: flex;
  justify-content: center;
  align-items: center;
}

.illus-img {
  width: 100%;
  max-width: 460px;
  height: auto;
  display: block;
  object-fit: contain;
  mix-blend-mode: multiply;
  filter: brightness(1.4) contrast(1.6) grayscale(1);
}

/* Responsive */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hero-illustration {
    order: -1;
  }
  .illus-img {
    max-width: 320px;
  }
  .hero-section {
    padding: 3rem 2rem 2.5rem;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 2rem 1.25rem;
  }
  .hero-name {
    font-size: 1.8rem;
  }
}
</style>

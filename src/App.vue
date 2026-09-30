<template>
  <div class="outer-bg">
    <div class="page-wrapper">
      <Navbar />

      <main>
        <HeroSection     class="reveal" />
        <AboutSection    class="reveal" />
        <SkillsSection   class="reveal" />
        <ProjectsSection class="reveal" />
        <PhilosophySection class="reveal" />
        <ContactSection  class="reveal" />
      </main>

      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar           from './components/Navbar.vue'
import HeroSection      from './components/HeroSection.vue'
import AboutSection     from './components/AboutSection.vue'
import SkillsSection    from './components/SkillsSection.vue'
import ProjectsSection  from './components/ProjectsSection.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import ContactSection   from './components/ContactSection.vue'
import FooterSection    from './components/FooterSection.vue'

// Scroll reveal using IntersectionObserver
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )

  // Observe all .reveal elements
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style>
/* ---- Outer background ---- */
.outer-bg {
  min-height: 100vh;
  background: var(--bg);
  padding: 0 1.5rem 3rem;
}

@media (max-width: 768px) {
  .outer-bg {
    padding: 0;
  }
}

/* ---- Reveal animation scoped here for global access ---- */
.reveal {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

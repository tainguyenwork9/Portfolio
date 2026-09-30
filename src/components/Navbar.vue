<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <!-- Brand -->
      <a href="#home" class="navbar-brand" @click.prevent="scrollTo('home')">
        <div class="avatar" aria-label="Avatar Nguyễn Văn Tài">
          <span>NVT</span>
        </div>
        <span class="brand-name">Nguyễn Văn Tài</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="navbar-nav" aria-label="Navigation chính">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Mobile Hamburger -->
      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Mở menu"
        id="hamburger-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="mobile-link"
        :class="{ active: activeSection === item.id }"
        @click.prevent="() => { scrollTo(item.id); menuOpen = false }"
      >
        {{ item.label }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled  = ref(false)
const menuOpen    = ref(false)
const activeSection = ref('home')

const navItems = [
  { id: 'home',         label: 'Trang chủ' },
  { id: 'about',        label: 'Giới thiệu' },
  { id: 'skills',       label: 'Kỹ năng' },
  { id: 'projects',     label: 'Dự án' },
  { id: 'philosophy',   label: 'Phương châm' },
  { id: 'contact',      label: 'Liên hệ' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function onScroll() {
  isScrolled.value = window.scrollY > 20

  // Active section detection
  const sections = navItems.map(i => document.getElementById(i.id)).filter(Boolean)
  let current = 'home'
  for (const sec of sections) {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id
    }
  }
  activeSection.value = current
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 0.2s ease;
}
.navbar.scrolled {
  box-shadow: 0 1px 8px rgba(0,0,0,0.06);
}

.navbar-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 2rem;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--btn-bg);
  color: var(--btn-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.03em;
  flex-shrink: 0;
}

.brand-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

/* Desktop Nav */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.nav-link {
  position: relative;
  padding: 0.35rem 0.65rem;
  font-size: 0.83rem;
  font-weight: 450;
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  transition: var(--ease);
}
.nav-link:hover {
  color: var(--text);
  background: var(--hover-bg);
}
.nav-link.active {
  color: var(--text);
  font-weight: 500;
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 2px;
  border-radius: 1px;
  background: var(--text);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  cursor: pointer;
  background: none;
  border: none;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: var(--ease);
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  border-top: 1px solid var(--border);
  background: var(--card-bg);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.mobile-menu.open {
  max-height: 400px;
}
.mobile-link {
  padding: 0.85rem 2rem;
  font-size: 0.9rem;
  font-weight: 450;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;
}
.mobile-link:hover,
.mobile-link.active {
  background: var(--hover-bg);
  color: var(--text);
}

@media (max-width: 768px) {
  .navbar-nav  { display: none; }
  .hamburger   { display: flex; }
  .mobile-menu { display: flex; }
  .navbar-inner { padding: 0 1.25rem; }
}
</style>

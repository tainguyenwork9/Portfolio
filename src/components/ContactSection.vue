<template>
  <section id="contact" class="section contact-section reveal">
    <p class="section-label">Liên hệ</p>
    <h2 class="section-title">Kết nối với tôi</h2>

    <div class="contact-grid">
      <!-- Left: Info -->
      <div class="contact-info">
        <p class="contact-intro">
          Tôi luôn cởi mở với các cơ hội mới, dự án thú vị,
          hay chỉ đơn giản là một cuộc trò chuyện về công nghệ.
          Đừng ngần ngại liên hệ!
        </p>

        <div class="contact-items">
          <div class="contact-item">
            <span class="contact-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <div>
              <p class="contact-label">Email</p>
              <a href="mailto:your.email@example.com" class="contact-value" id="contact-email">your.email@example.com</a>
            </div>
          </div>

          <div class="contact-item">
            <span class="contact-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <p class="contact-label">Vị trí</p>
              <p class="contact-value">Đà Nẵng, Việt Nam</p>
            </div>
          </div>

          <div class="contact-item">
            <span class="contact-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </span>
            <div>
              <p class="contact-label">Trường</p>
              <p class="contact-value">Đại học Duy Tân, Đà Nẵng</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Social Links -->
      <div class="contact-socials">
        <p class="socials-heading">Mạng xã hội</p>
        <div class="social-cards">
          <a href="https://github.com/" target="_blank" rel="noopener" class="social-card" id="contact-github">
            <div class="social-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <div class="social-card-info">
              <p class="social-card-name">GitHub</p>
              <p class="social-card-handle">@nguyenvantai</p>
            </div>
            <svg class="social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noopener" class="social-card" id="contact-linkedin">
            <div class="social-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div class="social-card-info">
              <p class="social-card-name">LinkedIn</p>
              <p class="social-card-handle">Nguyễn Văn Tài</p>
            </div>
            <svg class="social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>

          <a href="https://facebook.com/" target="_blank" rel="noopener" class="social-card" id="contact-facebook">
            <div class="social-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div class="social-card-info">
              <p class="social-card-name">Facebook</p>
              <p class="social-card-handle">Nguyễn Văn Tài</p>
            </div>
            <svg class="social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contact section — no logic needed (static display)
</script>

<style scoped>
.contact-section {
  background: var(--card-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Left */
.contact-intro {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1.8rem;
  max-width: 360px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  flex-shrink: 0;
  margin-top: 1px;
}

.contact-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-light);
  margin-bottom: 0.15rem;
}

.contact-value {
  font-size: 0.85rem;
  color: var(--text);
  transition: color 0.15s;
}
a.contact-value:hover { color: var(--text-muted); }

/* Right */
.socials-heading {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--text-light);
  margin-bottom: 0.8rem;
}

.social-cards {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card-bg);
  transition: var(--ease);
  text-decoration: none;
}
.social-card:hover {
  background: var(--hover-bg);
  border-color: #C8C8C8;
}

.social-card-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--hover-bg);
  color: var(--text);
  flex-shrink: 0;
}

.social-card-info {
  flex: 1;
}

.social-card-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.1rem;
}

.social-card-handle {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.social-arrow {
  color: var(--text-light);
  flex-shrink: 0;
  transition: transform 0.2s;
}
.social-card:hover .social-arrow {
  transform: translate(2px, -2px);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>

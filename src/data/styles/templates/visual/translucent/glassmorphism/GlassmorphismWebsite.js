// Glassmorphism Website Landing Page - 企業網站著陸頁
// Landing Page 預覽變體（企業網站場景）

export const websiteFullPageHTML = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glassmorphism 2.0 - Enhanced Glass Design</title>
</head>
<body>
  <!-- Navigation -->
  <nav class="glass-nav">
    <div class="glass-nav-content">
      <div class="glass-logo">GlassMorph</div>
      <ul class="glass-nav-menu">
        <li><a href="javascript:void(0)" class="glass-nav-link active">Home</a></li>
        <li><a href="javascript:void(0)" class="glass-nav-link">Features</a></li>
        <li><a href="javascript:void(0)" class="glass-nav-link">Pricing</a></li>
        <li><a href="javascript:void(0)" class="glass-nav-link">Contact</a></li>
      </ul>
      <button class="glass-btn glass-btn-primary">Get Started</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="glass-hero">
    <div class="glass-hero-content">
      <div class="glass-hero-card">
        <span class="glass-badge">New in 2025</span>
        <h1 class="glass-hero-title">The Future of<br/>Glass Design</h1>
        <p class="glass-hero-text">Experience the next generation of glassmorphism with enhanced blur effects, multi-layer translucency, and stunning visual depth.</p>
        <div class="glass-hero-actions">
          <button class="glass-btn glass-btn-primary glass-btn-lg">Explore Now</button>
          <button class="glass-btn glass-btn-secondary glass-btn-lg">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Floating glass elements -->
    <div class="glass-float glass-float-1"></div>
    <div class="glass-float glass-float-2"></div>
    <div class="glass-float glass-float-3"></div>
  </section>

  <!-- Features Section -->
  <section class="glass-features">
    <div class="glass-container">
      <h2 class="glass-section-title">Powerful Features</h2>
      <div class="glass-features-grid">
        <div class="glass-feature-card">
          <div class="glass-feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 6v20M6 16h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="glass-feature-title">Enhanced Blur</h3>
          <p class="glass-feature-text">Advanced backdrop filter with optimized blur and saturation for crystal-clear depth effects.</p>
        </div>

        <div class="glass-feature-card">
          <div class="glass-feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
              <circle cx="16" cy="16" r="4" fill="currentColor"/>
            </svg>
          </div>
          <h3 class="glass-feature-title">Multi-Layer</h3>
          <p class="glass-feature-text">Stack multiple glass layers to create stunning depth and visual hierarchy in your designs.</p>
        </div>

        <div class="glass-feature-card">
          <div class="glass-feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 16l8-8 8 8 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="glass-feature-title">Gradient Magic</h3>
          <p class="glass-feature-text">Beautiful gradient backgrounds that work perfectly with glassmorphism effects.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="glass-stats">
    <div class="glass-container">
      <div class="glass-stats-card">
        <div class="glass-stats-grid">
          <div class="glass-stat-item">
            <div class="glass-stat-number">10K+</div>
            <div class="glass-stat-label">Active Users</div>
          </div>
          <div class="glass-stat-item">
            <div class="glass-stat-number">99.9%</div>
            <div class="glass-stat-label">Uptime</div>
          </div>
          <div class="glass-stat-item">
            <div class="glass-stat-number">24/7</div>
            <div class="glass-stat-label">Support</div>
          </div>
          <div class="glass-stat-item">
            <div class="glass-stat-number">150+</div>
            <div class="glass-stat-label">Countries</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="glass-footer">
    <div class="glass-container">
      <div class="glass-footer-content">
        <div class="glass-footer-info">
          <h3 class="glass-footer-title">GlassMorph</h3>
          <p class="glass-footer-text">The future of glass design</p>
        </div>
        <div class="glass-footer-links">
          <a href="javascript:void(0)" class="glass-footer-link">Privacy</a>
          <a href="javascript:void(0)" class="glass-footer-link">Terms</a>
          <a href="javascript:void(0)" class="glass-footer-link">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
`;

export const websiteFullPageStyles = `
/* Glassmorphism Website Landing Page Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  min-height: 100vh;
  color: #ffffff;
  overflow-x: hidden;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Navigation */
.glass-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.glass-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.glass-nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.glass-nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.glass-nav-link:hover,
.glass-nav-link.active {
  color: #ffffff;
}

/* Buttons */
.glass-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-btn-lg {
  padding: 1rem 2rem;
  font-size: 1.05rem;
}

.glass-btn-primary {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass-btn-primary:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.glass-btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.glass-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* Hero Section */
.glass-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
}

.glass-hero-content {
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.glass-hero-card {
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.glass-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass-hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.glass-hero-text {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.glass-hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Floating glass elements */
.glass-float {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: float 6s ease-in-out infinite;
}

.glass-float-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.glass-float-2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 15%;
  animation-delay: 2s;
}

.glass-float-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Container */
.glass-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Features Section */
.glass-features {
  padding: 6rem 0;
}

.glass-section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.glass-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.glass-feature-card {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.glass-feature-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
}

.glass-feature-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass-feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.glass-feature-text {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}

/* Stats Section */
.glass-stats {
  padding: 4rem 0;
}

.glass-stats-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  border-radius: 32px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.glass-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.glass-stat-item {
  text-align: center;
}

.glass-stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.glass-stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Footer */
.glass-footer {
  padding: 3rem 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.glass-footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.glass-footer-text {
  color: rgba(255, 255, 255, 0.7);
}

.glass-footer-links {
  display: flex;
  gap: 2rem;
}

.glass-footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.glass-footer-link:hover {
  color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
  .glass-nav-menu {
    display: none;
  }

  .glass-hero-title {
    font-size: 2.5rem;
  }

  .glass-hero-actions {
    flex-direction: column;
  }

  .glass-footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}
`;

export default {
  websiteFullPageHTML,
  websiteFullPageStyles
};

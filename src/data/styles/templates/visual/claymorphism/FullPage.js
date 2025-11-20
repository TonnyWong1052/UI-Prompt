// Claymorphism Full Page

export const fullPageHTML = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Claymorphism - 3D Clay Design</title>
</head>
<body>
  <!-- Navigation -->
  <nav class="clay-nav">
    <div class="clay-nav-content">
      <div class="clay-logo">Clay UI</div>
      <ul class="clay-nav-menu">
        <li><a href="javascript:void(0)" class="clay-nav-link active">Home</a></li>
        <li><a href="javascript:void(0)" class="clay-nav-link">About</a></li>
        <li><a href="javascript:void(0)" class="clay-nav-link">Gallery</a></li>
        <li><a href="javascript:void(0)" class="clay-nav-link">Contact</a></li>
      </ul>
      <button class="clay-btn clay-btn-primary">Sign Up</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="clay-hero">
    <div class="clay-hero-content">
      <div class="clay-hero-badge">3D Clay Design</div>
      <h1 class="clay-hero-title">Welcome to<br/>Claymorphism</h1>
      <p class="clay-hero-text">Experience the tactile beauty of 3D clay-inspired UI design with soft shadows, smooth gradients, and playful depth.</p>
      <div class="clay-hero-actions">
        <button class="clay-btn clay-btn-large clay-btn-primary">Get Started</button>
        <button class="clay-btn clay-btn-large clay-btn-secondary">View Demo</button>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="clay-features">
    <div class="clay-container">
      <h2 class="clay-section-title">Key Features</h2>
      <div class="clay-features-grid">
        <div class="clay-feature-card">
          <div class="clay-feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" fill="currentColor" opacity="0.8"/>
              <path d="M20 10v20M10 20h20" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="clay-feature-title">3D Depth</h3>
          <p class="clay-feature-text">Multi-layered shadows create realistic depth and tactile feel like real clay objects.</p>
        </div>

        <div class="clay-feature-card">
          <div class="clay-feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="8" width="24" height="24" rx="8" fill="currentColor" opacity="0.8"/>
              <path d="M15 20l4 4 8-8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="clay-feature-title">Smooth Gradients</h3>
          <p class="clay-feature-text">Soft color transitions that mimic the organic nature of clay materials.</p>
        </div>

        <div class="clay-feature-card">
          <div class="clay-feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 6l-14 8v16l14 8 14-8V14l-14-8z" fill="currentColor" opacity="0.8"/>
              <circle cx="20" cy="20" r="4" fill="white"/>
            </svg>
          </div>
          <h3 class="clay-feature-title">Playful Design</h3>
          <p class="clay-feature-text">Rounded corners and soft edges create a friendly and approachable interface.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Showcase Section -->
  <section class="clay-showcase">
    <div class="clay-container">
      <h2 class="clay-section-title">Design Showcase</h2>
      <div class="clay-showcase-grid">
        <div class="clay-showcase-item clay-color-1">
          <h3>Soft Pink</h3>
          <p>Warm & Friendly</p>
        </div>
        <div class="clay-showcase-item clay-color-2">
          <h3>Ocean Blue</h3>
          <p>Calm & Trust</p>
        </div>
        <div class="clay-showcase-item clay-color-3">
          <h3>Mint Green</h3>
          <p>Fresh & Natural</p>
        </div>
        <div class="clay-showcase-item clay-color-4">
          <h3>Sunset Orange</h3>
          <p>Energy & Joy</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="clay-cta">
    <div class="clay-container">
      <div class="clay-cta-card">
        <h2 class="clay-cta-title">Ready to Start?</h2>
        <p class="clay-cta-text">Join thousands of designers creating beautiful clay-inspired interfaces.</p>
        <button class="clay-btn clay-btn-large clay-btn-primary">Get Started Now</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="clay-footer">
    <div class="clay-container">
      <div class="clay-footer-content">
        <div class="clay-footer-brand">
          <h3 class="clay-footer-title">Clay UI</h3>
          <p class="clay-footer-text">The future of tactile design</p>
        </div>
        <div class="clay-footer-links">
          <a href="javascript:void(0)" class="clay-footer-link">About</a>
          <a href="javascript:void(0)" class="clay-footer-link">Blog</a>
          <a href="javascript:void(0)" class="clay-footer-link">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
`;

export const fullPageStyles = `
/* Claymorphism Full Page Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Rounded Mplus 1c', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ffecd2 100%);
  min-height: 100vh;
  color: #ffffff;
}

/* Navigation */
.clay-nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 1rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 50px;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

.clay-nav-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.clay-logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow:
    2px 2px 4px rgba(255, 143, 171, 0.3),
    -1px -1px 2px rgba(255, 255, 255, 0.3);
}

.clay-nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.clay-nav-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(255, 143, 171, 0.2);
}

.clay-nav-link:hover,
.clay-nav-link.active {
  color: #ffffff;
  text-shadow:
    2px 2px 4px rgba(255, 143, 171, 0.4),
    -1px -1px 2px rgba(255, 255, 255, 0.4);
}

/* Buttons */
.clay-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 24px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.clay-btn-large {
  padding: 1.1rem 2.5rem;
  font-size: 1.05rem;
  border-radius: 32px;
}

.clay-btn-primary {
  background: linear-gradient(145deg, #ff99ac, #ff6a88);
  color: #ffffff;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 106, 136, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
}

.clay-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.7),
    6px 6px 16px rgba(255, 106, 136, 0.5),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 106, 136, 0.3);
}

.clay-btn-secondary {
  background: linear-gradient(145deg, #ffc8dd, #ffafcc);
  color: #ff6a88;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 175, 204, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 175, 204, 0.3);
}

.clay-btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.7),
    6px 6px 16px rgba(255, 175, 204, 0.5),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 175, 204, 0.3);
}

/* Container */
.clay-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.clay-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
}

.clay-hero-content {
  text-align: center;
  max-width: 800px;
}

.clay-hero-badge {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background: linear-gradient(145deg, #ffb3d9, #ff8fab);
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 2rem;
  box-shadow:
    -3px -3px 8px rgba(255, 255, 255, 0.6),
    3px 3px 8px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

.clay-hero-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow:
    4px 4px 8px rgba(255, 143, 171, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 0.3);
}

.clay-hero-text {
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 2px 2px 4px rgba(255, 143, 171, 0.2);
}

.clay-hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Features Section */
.clay-features {
  padding: 6rem 0;
}

.clay-section-title {
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 4rem;
  text-shadow:
    4px 4px 8px rgba(255, 143, 171, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 0.3);
}

.clay-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.clay-feature-card {
  padding: 3rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 40px;
  text-align: center;
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.6),
    8px 8px 20px rgba(255, 143, 171, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
  transition: all 0.3s ease;
}

.clay-feature-card:hover {
  transform: translateY(-8px);
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.7),
    10px 10px 25px rgba(255, 143, 171, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
}

.clay-feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #ff99ac, #ff6a88);
  border-radius: 28px;
  color: rgba(255, 255, 255, 0.95);
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.5),
    4px 4px 12px rgba(255, 106, 136, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.2),
    inset 3px 3px 6px rgba(255, 106, 136, 0.3);
}

.clay-feature-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow:
    2px 2px 4px rgba(255, 143, 171, 0.3),
    -1px -1px 2px rgba(255, 255, 255, 0.3);
}

.clay-feature-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(255, 143, 171, 0.2);
}

/* Showcase Section */
.clay-showcase {
  padding: 6rem 0;
}

.clay-showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.clay-showcase-item {
  padding: 3rem 2rem;
  border-radius: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.clay-showcase-item h3 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.1),
    -1px -1px 2px rgba(255, 255, 255, 0.3);
}

.clay-showcase-item p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.clay-color-1 {
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 143, 171, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 143, 171, 0.3);
}

.clay-color-2 {
  background: linear-gradient(145deg, #a8dadc, #457b9d);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(69, 123, 157, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(69, 123, 157, 0.3);
}

.clay-color-3 {
  background: linear-gradient(145deg, #d8f3dc, #95d5b2);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(149, 213, 178, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(149, 213, 178, 0.3);
}

.clay-color-4 {
  background: linear-gradient(145deg, #ffbe0b, #fb8500);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(251, 133, 0, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(251, 133, 0, 0.3);
}

.clay-showcase-item:hover {
  transform: translateY(-5px) scale(1.02);
}

/* CTA Section */
.clay-cta {
  padding: 6rem 0;
}

.clay-cta-card {
  padding: 4rem 3rem;
  background: linear-gradient(145deg, #ff99ac, #ff6a88);
  border-radius: 48px;
  text-align: center;
  box-shadow:
    -10px -10px 25px rgba(255, 255, 255, 0.6),
    10px 10px 25px rgba(255, 106, 136, 0.4),
    inset -6px -6px 12px rgba(255, 255, 255, 0.2),
    inset 6px 6px 12px rgba(255, 106, 136, 0.3);
}

.clay-cta-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow:
    4px 4px 8px rgba(255, 106, 136, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 0.3);
}

.clay-cta-text {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 2px 2px 4px rgba(255, 106, 136, 0.2);
}

/* Footer */
.clay-footer {
  padding: 4rem 0 3rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  box-shadow:
    0 -8px 20px rgba(255, 143, 171, 0.3),
    inset 0 4px 8px rgba(255, 255, 255, 0.2);
}

.clay-footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clay-footer-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow:
    2px 2px 4px rgba(255, 143, 171, 0.3),
    -1px -1px 2px rgba(255, 255, 255, 0.3);
}

.clay-footer-text {
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 1px 1px 2px rgba(255, 143, 171, 0.2);
}

.clay-footer-links {
  display: flex;
  gap: 2rem;
}

.clay-footer-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(255, 143, 171, 0.2);
}

.clay-footer-link:hover {
  color: #ffffff;
  text-shadow:
    2px 2px 4px rgba(255, 143, 171, 0.4),
    -1px -1px 2px rgba(255, 255, 255, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .clay-nav {
    top: 10px;
    width: calc(100% - 2rem);
    padding: 0.8rem 1rem;
  }

  .clay-nav-content {
    gap: 1rem;
  }

  .clay-nav-menu {
    display: none;
  }

  .clay-hero-title {
    font-size: 2.5rem;
  }

  .clay-hero-actions {
    flex-direction: column;
  }

  .clay-footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}
`;


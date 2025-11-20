// Claymorphism Demo - Clay Texture Effect

export const demoHTML = `
  <div class="clay-demo-container">
    <div class="clay-card">
      <div class="clay-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" fill="currentColor" opacity="0.8"/>
          <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h3 class="clay-title">Claymorphism</h3>
      <p class="clay-text">Soft 3D clay-like UI elements with depth and playful aesthetics</p>
    </div>
  </div>
`;

export const customStyles = `
/* Claymorphism Demo Styles */
.clay-demo-container {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 2rem;
  position: relative;
}

.clay-card {
  position: relative;
  padding: 2rem;
  background: linear-gradient(145deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  border-radius: 32px;
  max-width: 320px;
  text-align: center;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 106, 136, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-card:hover {
  transform: translateY(-3px);
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.7),
    8px 8px 20px rgba(255, 106, 136, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 106, 136, 0.3);
}

.clay-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #ffb6c1, #ff7ba5);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.95);
  box-shadow:
    -3px -3px 8px rgba(255, 255, 255, 0.5),
    3px 3px 8px rgba(255, 123, 165, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 123, 165, 0.3);
}

.clay-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  text-shadow:
    2px 2px 4px rgba(255, 106, 136, 0.3),
    -1px -1px 2px rgba(255, 255, 255, 0.3);
}

.clay-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(255, 106, 136, 0.2);
}
`;


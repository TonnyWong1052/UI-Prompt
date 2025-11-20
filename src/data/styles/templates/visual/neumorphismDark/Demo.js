// Neumorphism Dark Demo

export const demoHTML = `
  <div class="neudark-demo-container">
    <div class="neudark-card">
      <div class="neudark-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"/>
          <path d="M16 10v12M22 16l-6 6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3 class="neudark-title">Neumorphism Dark</h3>
      <p class="neudark-text">Soft shadows and highlights on dark background for elegant depth</p>
    </div>
  </div>
`;

export const customStyles = `
/* Neumorphism Dark Demo Styles */
.neudark-demo-container {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  padding: 2rem;
}

.neudark-card {
  position: relative;
  padding: 2rem;
  background: #1a1a2e;
  border-radius: 24px;
  max-width: 320px;
  text-align: center;
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.05),
    8px 8px 16px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neudark-card:hover {
  box-shadow:
    -12px -12px 20px rgba(255, 255, 255, 0.07),
    12px 12px 20px rgba(0, 0, 0, 0.5);
}

.neudark-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  border-radius: 16px;
  color: #bb86fc;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.05),
    4px 4px 12px rgba(0, 0, 0, 0.4);
}

.neudark-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #e0e0e0;
  margin-bottom: 0.75rem;
}

.neudark-text {
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0;
}
`;


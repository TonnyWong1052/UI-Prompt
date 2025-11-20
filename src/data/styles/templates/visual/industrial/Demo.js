// Industrial Design Demo

export const demoHTML = `
  <div class="industrial-demo-container">
    <div class="industrial-card">
      <div class="industrial-label">SYSTEM-01</div>
      <h3 class="industrial-title">Industrial</h3>
      <p class="industrial-text">Raw materials, bold typography, utilitarian aesthetics</p>
      <div class="industrial-divider"></div>
      <div class="industrial-code">ID: IND-2025</div>
    </div>
  </div>
`;

export const customStyles = `
/* Industrial Design Demo Styles */
.industrial-demo-container {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 2rem;
  position: relative;
}

.industrial-demo-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px);
}

.industrial-card {
  position: relative;
  padding: 2rem;
  background: #2c3e50;
  border: 2px solid #34495e;
  border-left: 4px solid #e74c3c;
  max-width: 320px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.industrial-label {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(231, 76, 60, 0.2);
  border: 1px solid #e74c3c;
  color: #e74c3c;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.industrial-title {
  font-size: 1.8rem;
  font-weight: 900;
  color: #ecf0f1;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Arial Black', sans-serif;
}

.industrial-text {
  font-size: 0.9rem;
  color: #95a5a6;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.industrial-divider {
  height: 2px;
  background: linear-gradient(90deg, #e74c3c, transparent);
  margin: 1rem 0;
}

.industrial-code {
  font-size: 0.75rem;
  color: #7f8c8d;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
}
`;


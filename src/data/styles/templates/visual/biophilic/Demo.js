// Biophilic Design Demo

export const demoHTML = `
  <div class="bio-demo-container">
    <div class="bio-card">
      <div class="bio-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C16 4 10 10 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 10 16 4 16 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 22V28M12 26H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3 class="bio-title">Biophilic Design</h3>
      <p class="bio-text">Nature-inspired, organic shapes, earthy tones, harmonious living</p>
    </div>
  </div>
`;

export const customStyles = `
/* Biophilic Design Demo Styles */
.bio-demo-container {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.bio-demo-container::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(139, 195, 74, 0.1);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: blobFloat 8s ease-in-out infinite;
}

.bio-demo-container::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 150px;
  height: 150px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%;
  animation: blobFloat 10s ease-in-out infinite reverse;
}

@keyframes blobFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(20px, -20px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

.bio-card {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  max-width: 320px;
  text-align: center;
  box-shadow:
    0 8px 32px rgba(76, 175, 80, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.bio-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 12px 48px rgba(76, 175, 80, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.bio-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #81c784, #66bb6a);
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
}

.bio-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2e7d32;
  margin-bottom: 0.75rem;
}

.bio-text {
  font-size: 0.95rem;
  color: #558b2f;
  line-height: 1.7;
  margin: 0;
}
`;


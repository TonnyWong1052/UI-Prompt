// Claymation 风格 - 遊戲界面 Demo
// 展示互動按鈕和遊戲 UI 元素

export const GameInterfaceDemo = {
  id: 'claymation-game-interface',
  title: {
    'zh-CN': 'Claymation 遊戲界面',
    'en-US': 'Claymation Game Interface'
  },
  description: {
    'zh-CN': '定格动画风格的遊戲界面，展示互動按鈕和計分系統',
    'en-US': 'Stop-motion animation style game interface with interactive buttons and scoring system'
  },
  demoHTML: `
    <div class="w-full h-full min-h-[500px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6 flex items-center justify-center">
      <div class="clay-game-wrapper">
        <!-- 遊戲標題 -->
        <div class="clay-game-header">
          <h1 class="clay-game-title">🎮 Clay Quest</h1>
          <p class="clay-game-tagline">Adventure Awaits!</p>
        </div>

        <!-- 計分板區域 -->
        <div class="clay-scoreboard">
          <div class="clay-score-item">
            <span class="clay-score-label">Score</span>
            <span class="clay-score-value">12,450</span>
          </div>
          <div class="clay-score-divider"></div>
          <div class="clay-score-item">
            <span class="clay-score-label">Level</span>
            <span class="clay-score-value">8</span>
          </div>
          <div class="clay-score-divider"></div>
          <div class="clay-score-item">
            <span class="clay-score-label">Lives</span>
            <span class="clay-score-value">❤️❤️❤️</span>
          </div>
        </div>

        <!-- 主要按鈕組 -->
        <div class="clay-button-group">
          <!-- 開始遊戲按鈕 -->
          <button class="clay-game-button primary">
            <span class="clay-button-icon">▶️</span>
            <span class="clay-button-text">Start Game</span>
            <div class="clay-button-shine"></div>
          </button>

          <!-- 次要按鈕組 -->
          <div class="clay-secondary-buttons">
            <button class="clay-game-button secondary pause">
              <span class="clay-button-icon">⏸️</span>
              <span class="clay-button-text">Pause</span>
              <div class="clay-button-shine"></div>
            </button>

            <button class="clay-game-button secondary settings">
              <span class="clay-button-icon">⚙️</span>
              <span class="clay-button-text">Settings</span>
              <div class="clay-button-shine"></div>
            </button>
          </div>
        </div>

        <!-- 圓形控制按鈕 -->
        <div class="clay-controls">
          <button class="clay-round-button sound">
            <span class="clay-round-icon">🔊</span>
            <div class="clay-button-shine"></div>
          </button>

          <button class="clay-round-button share">
            <span class="clay-round-icon">📤</span>
            <div class="clay-button-shine"></div>
          </button>

          <button class="clay-round-button leaderboard">
            <span class="clay-round-icon">🏆</span>
            <div class="clay-button-shine"></div>
          </button>

          <button class="clay-round-button help">
            <span class="clay-round-icon">❓</span>
            <div class="clay-button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    /* === Claymation 遊戲界面核心樣式 === */

    /* 遊戲容器 */
    .clay-game-wrapper {
      max-width: 500px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* 遊戲標題 */
    .clay-game-header {
      text-align: center;
      margin-bottom: 8px;
    }

    .clay-game-title {
      font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif;
      font-size: 48px;
      font-weight: 800;
      color: #5D4E37;
      margin: 0;
      text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.6);
      letter-spacing: -1px;
    }

    .clay-game-tagline {
      font-family: 'Comic Sans MS', sans-serif;
      font-size: 18px;
      color: #8B7355;
      margin: 8px 0 0 0;
      font-style: italic;
    }

    /* 計分板 */
    .clay-scoreboard {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: linear-gradient(145deg, #FFFFFF 0%, #F5F5F5 100%);
      border-radius: 32px;
      padding: 20px 24px;
      box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.15),
        0 2px 4px rgba(0, 0, 0, 0.1),
        inset 0 -2px 4px rgba(0, 0, 0, 0.05);
    }

    .clay-score-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .clay-score-label {
      font-family: 'Comic Sans MS', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .clay-score-value {
      font-family: 'Comic Sans MS', sans-serif;
      font-size: 24px;
      font-weight: 800;
      color: #5D4E37;
    }

    .clay-score-divider {
      width: 2px;
      height: 40px;
      background: linear-gradient(180deg, transparent, #DDD, transparent);
      border-radius: 2px;
    }

    /* 按鈕組容器 */
    .clay-button-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* 遊戲按鈕基礎 */
    .clay-game-button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 20px 40px;
      border: none;
      border-radius: 9999px;
      font-family: 'Comic Sans MS', 'Arial Rounded MT Bold', sans-serif;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.15),
        0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      overflow: hidden;
    }

    /* 主按鈕 */
    .clay-game-button.primary {
      background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
      color: white;
      font-size: 24px;
      padding: 24px 48px;
    }

    /* 次要按鈕 */
    .clay-game-button.secondary {
      background: linear-gradient(145deg, #FFD54F 0%, #FFB300 100%);
      color: #5D4E37;
      font-size: 16px;
      padding: 16px 32px;
    }

    .clay-game-button.secondary.pause {
      background: linear-gradient(145deg, #66BB6A 0%, #43A047 100%);
      color: white;
    }

    .clay-game-button.secondary.settings {
      background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
      color: white;
    }

    /* 按鈕 Hover */
    .clay-game-button:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 
        0 10px 20px rgba(0, 0, 0, 0.2),
        0 4px 8px rgba(0, 0, 0, 0.15);
    }

    /* 按鈕 Active (擠壓效果) */
    .clay-game-button:active {
      transform: translateY(2px) scale(0.98);
      box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.15),
        0 1px 2px rgba(0, 0, 0, 0.1);
    }

    /* 按鈕光澤 */
    .clay-button-shine {
      position: absolute;
      top: 8px;
      left: 20%;
      width: 60%;
      height: 40%;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
      border-radius: 50%;
      pointer-events: none;
    }

    /* 按鈕圖標 */
    .clay-button-icon {
      font-size: 1.2em;
      filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
    }

    .clay-button-text {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    /* 次要按鈕組 */
    .clay-secondary-buttons {
      display: flex;
      gap: 12px;
    }

    .clay-secondary-buttons .clay-game-button {
      flex: 1;
    }

    /* 圓形控制按鈕組 */
    .clay-controls {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 8px;
    }

    /* 圓形按鈕 */
    .clay-round-button {
      position: relative;
      width: 64px;
      height: 64px;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.15),
        0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      overflow: hidden;
    }

    .clay-round-button.sound {
      background: linear-gradient(145deg, #AB47BC 0%, #8E24AA 100%);
    }

    .clay-round-button.share {
      background: linear-gradient(145deg, #FFA726 0%, #F57C00 100%);
    }

    .clay-round-button.leaderboard {
      background: linear-gradient(145deg, #FFEB3B 0%, #FBC02D 100%);
    }

    .clay-round-button.help {
      background: linear-gradient(145deg, #26C6DA 0%, #00ACC1 100%);
    }

    /* 圓形按鈕圖標 */
    .clay-round-icon {
      font-size: 28px;
      filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
    }

    /* 圓形按鈕 Hover */
    .clay-round-button:hover {
      transform: translateY(-6px) scale(1.1);
      box-shadow: 
        0 8px 16px rgba(0, 0, 0, 0.2),
        0 4px 8px rgba(0, 0, 0, 0.15);
    }

    /* 圓形按鈕彈跳动画 */
    @keyframes bounce-gentle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }

    .clay-round-button:hover {
      animation: bounce-gentle 1s ease-in-out infinite;
    }

    /* 圓形按鈕 Active */
    .clay-round-button:active {
      transform: translateY(2px) scale(0.95);
      box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.15),
        0 1px 2px rgba(0, 0, 0, 0.1);
    }

    /* 響應式調整 */
    @media (max-width: 640px) {
      .clay-game-title {
        font-size: 36px;
      }

      .clay-game-tagline {
        font-size: 16px;
      }

      .clay-scoreboard {
        padding: 16px 20px;
      }

      .clay-score-value {
        font-size: 20px;
      }

      .clay-game-button.primary {
        font-size: 20px;
        padding: 20px 40px;
      }

      .clay-game-button.secondary {
        font-size: 14px;
        padding: 14px 24px;
      }

      .clay-round-button {
        width: 56px;
        height: 56px;
      }

      .clay-round-icon {
        font-size: 24px;
      }
    }

    @media (max-width: 480px) {
      .clay-game-wrapper {
        gap: 20px;
      }

      .clay-game-title {
        font-size: 32px;
      }

      .clay-scoreboard {
        padding: 12px 16px;
      }

      .clay-score-label {
        font-size: 10px;
      }

      .clay-score-value {
        font-size: 18px;
      }

      .clay-game-button.primary {
        font-size: 18px;
        padding: 18px 36px;
      }

      .clay-secondary-buttons {
        flex-direction: column;
      }

      .clay-controls {
        gap: 12px;
      }

      .clay-round-button {
        width: 52px;
        height: 52px;
      }

      .clay-round-icon {
        font-size: 22px;
      }
    }
  `
};

export default GameInterfaceDemo;

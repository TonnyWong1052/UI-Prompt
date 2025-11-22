// Claymation 风格 - 玩具角色 Demo
// 展示定格动画风格的角色化设计

export const ToyCharacterDemo = {
  id: 'claymation-toy-character',
  title: {
    'zh-CN': 'Claymation 玩具角色',
    'en-US': 'Claymation Toy Character'
  },
  description: {
    'zh-CN': '定格动画风格的角色化设计，展示可愛的玩具臉部表情系統',
    'en-US': 'Stop-motion animation style character design with adorable toy facial expressions'
  },
  demoHTML: `
    <div class="w-full h-full min-h-[400px] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-8 flex items-center justify-center">
      <div class="flex gap-8 flex-wrap justify-center">
        <!-- 玩具角色 1: 快樂黃色 -->
        <div class="clay-toy-character group">
          <div class="clay-face happy-yellow">
            <!-- 頂部高光 -->
            <div class="clay-highlight"></div>
            
            <!-- 眼睛 -->
            <div class="clay-eyes">
              <div class="clay-eye"></div>
              <div class="clay-eye"></div>
            </div>
            
            <!-- 快樂嘴巴 -->
            <div class="clay-mouth happy"></div>
            
            <!-- 腮紅 -->
            <div class="clay-blush left"></div>
            <div class="clay-blush right"></div>
          </div>
          <div class="clay-name">Happy</div>
        </div>

        <!-- 玩具角色 2: 可愛粉紅 -->
        <div class="clay-toy-character group">
          <div class="clay-face cute-pink">
            <div class="clay-highlight"></div>
            
            <div class="clay-eyes">
              <div class="clay-eye sparkle"></div>
              <div class="clay-eye sparkle"></div>
            </div>
            
            <div class="clay-mouth smile"></div>
            
            <div class="clay-blush left"></div>
            <div class="clay-blush right"></div>
          </div>
          <div class="clay-name">Cutie</div>
        </div>

        <!-- 玩具角色 3: 酷炫藍色 -->
        <div class="clay-toy-character group">
          <div class="clay-face cool-blue">
            <div class="clay-highlight"></div>
            
            <div class="clay-eyes">
              <div class="clay-eye cool"></div>
              <div class="clay-eye cool"></div>
            </div>
            
            <div class="clay-mouth cool"></div>
          </div>
          <div class="clay-name">Cool</div>
        </div>

        <!-- 玩具角色 4: 活力綠色 -->
        <div class="clay-toy-character group">
          <div class="clay-face energy-green">
            <div class="clay-highlight"></div>
            
            <div class="clay-eyes">
              <div class="clay-eye excited"></div>
              <div class="clay-eye excited"></div>
            </div>
            
            <div class="clay-mouth excited"></div>
            
            <div class="clay-blush left"></div>
            <div class="clay-blush right"></div>
          </div>
          <div class="clay-name">Energy</div>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    /* === Claymation 玩具角色核心樣式 === */
    
    /* 角色容器 */
    .clay-toy-character {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    /* 定格动画抖動效果 */
    @keyframes clay-wiggle {
      0%, 100% { transform: rotate(-1deg) translateY(0); }
      25% { transform: rotate(1deg) translateY(-2px); }
      50% { transform: rotate(-0.5deg) translateY(-1px); }
      75% { transform: rotate(0.5deg) translateY(-2px); }
    }

    .clay-toy-character:hover {
      animation: clay-wiggle 0.6s ease-in-out infinite;
    }

    /* 玩具臉部基礎 */
    .clay-face {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.15),
        0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    /* 按下擠壓效果 */
    .clay-toy-character:active .clay-face {
      transform: scale(0.95) translateY(2px);
      box-shadow: 
        0 3px 6px rgba(0, 0, 0, 0.15),
        0 1px 2px rgba(0, 0, 0, 0.1);
    }

    /* 臉部顏色變體 */
    .happy-yellow {
      background: linear-gradient(145deg, #FFD54F 0%, #FFA726 100%);
    }

    .cute-pink {
      background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
    }

    .cool-blue {
      background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
    }

    .energy-green {
      background: linear-gradient(145deg, #66BB6A 0%, #43A047 100%);
    }

    /* 頂部高光 - 玩具光澤 */
    .clay-highlight {
      position: absolute;
      top: 15%;
      left: 25%;
      width: 40px;
      height: 40px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    /* 眼睛容器 */
    .clay-eyes {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
    }

    /* 基礎眼睛 */
    .clay-eye {
      width: 12px;
      height: 12px;
      background: #2C3E50;
      border-radius: 50%;
      position: relative;
    }

    /* 閃亮眼睛 */
    .clay-eye.sparkle::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 3px;
      width: 4px;
      height: 4px;
      background: white;
      border-radius: 50%;
    }

    /* 酷炫眼睛 (橢圓形) */
    .clay-eye.cool {
      width: 16px;
      height: 10px;
      border-radius: 50%;
    }

    /* 興奮眼睛 (放大) */
    .clay-eye.excited {
      width: 14px;
      height: 14px;
      animation: eye-blink 3s infinite;
    }

    @keyframes eye-blink {
      0%, 96%, 100% { transform: scaleY(1); }
      98% { transform: scaleY(0.1); }
    }

    /* 嘴巴基礎 */
    .clay-mouth {
      position: absolute;
      top: 62%;
      left: 50%;
      transform: translateX(-50%);
    }

    /* 快樂嘴巴 (大笑) */
    .clay-mouth.happy {
      width: 40px;
      height: 20px;
      border: 3px solid #2C3E50;
      border-top: none;
      border-radius: 0 0 40px 40px;
    }

    /* 微笑嘴巴 */
    .clay-mouth.smile {
      width: 30px;
      height: 15px;
      border: 2.5px solid #2C3E50;
      border-top: none;
      border-radius: 0 0 30px 30px;
    }

    /* 酷炫嘴巴 (一字) */
    .clay-mouth.cool {
      width: 25px;
      height: 3px;
      background: #2C3E50;
      border-radius: 2px;
    }

    /* 興奮嘴巴 (張開) */
    .clay-mouth.excited {
      width: 20px;
      height: 20px;
      background: #2C3E50;
      border-radius: 50%;
    }

    /* 腮紅 */
    .clay-blush {
      position: absolute;
      top: 55%;
      width: 20px;
      height: 14px;
      background: rgba(255, 105, 180, 0.3);
      border-radius: 50%;
    }

    .clay-blush.left {
      left: 15%;
    }

    .clay-blush.right {
      right: 15%;
    }

    /* 角色名稱標籤 */
    .clay-name {
      font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #5D4E37;
      text-align: center;
      padding: 6px 16px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .clay-toy-character:hover .clay-name {
      background: rgba(255, 255, 255, 0.9);
      transform: scale(1.05);
    }

    /* 響應式調整 */
    @media (max-width: 640px) {
      .clay-face {
        width: 100px;
        height: 100px;
      }

      .clay-highlight {
        width: 30px;
        height: 30px;
      }

      .clay-eyes {
        gap: 16px;
      }

      .clay-name {
        font-size: 14px;
        padding: 4px 12px;
      }
    }
  `
};

export default ToyCharacterDemo;

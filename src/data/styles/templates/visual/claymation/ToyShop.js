// Claymation 风格 - 玩具商店 Demo
// 展示玩具堆疊場景和商店氛圍

export const ToyShopDemo = {
  id: 'claymation-toy-shop',
  title: {
    'zh-CN': 'Claymation 玩具商店',
    'en-US': 'Claymation Toy Shop'
  },
  description: {
    'zh-CN': '定格动画风格的玩具商店場景，展示堆疊和層級感',
    'en-US': 'Stop-motion animation style toy shop scene with stacking and depth'
  },
  demoHTML: `
    <div class="w-full h-full min-h-[500px] bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 p-6">
      <!-- 商店標題 -->
      <div class="clay-shop-header">
        <h1 class="clay-shop-title">🎪 Toy Wonderland</h1>
        <p class="clay-shop-subtitle">Handcrafted Clay Toys Collection</p>
      </div>

      <!-- 玩具堆疊展示區 -->
      <div class="clay-shop-container">
        <!-- 玩具卡片 1: 藝術用品 -->
        <div class="clay-toy-card card-pink">
          <div class="clay-card-icon">🎨</div>
          <div class="clay-card-shine"></div>
          <div class="clay-card-content">
            <h3 class="clay-card-title">Art Set</h3>
            <p class="clay-card-price">$12.99</p>
            <div class="clay-card-badge">New</div>
          </div>
        </div>

        <!-- 玩具卡片 2: 音樂玩具 -->
        <div class="clay-toy-card card-yellow">
          <div class="clay-card-icon">🎵</div>
          <div class="clay-card-shine"></div>
          <div class="clay-card-content">
            <h3 class="clay-card-title">Music Box</h3>
            <p class="clay-card-price">$15.99</p>
            <div class="clay-card-badge hot">Hot</div>
          </div>
        </div>

        <!-- 玩具卡片 3: 運動玩具 -->
        <div class="clay-toy-card card-green">
          <div class="clay-card-icon">⚽</div>
          <div class="clay-card-shine"></div>
          <div class="clay-card-content">
            <h3 class="clay-card-title">Sports Kit</h3>
            <p class="clay-card-price">$18.99</p>
            <div class="clay-card-badge sale">Sale</div>
          </div>
        </div>

        <!-- 玩具卡片 4: 太空玩具 -->
        <div class="clay-toy-card card-blue">
          <div class="clay-card-icon">🚀</div>
          <div class="clay-card-shine"></div>
          <div class="clay-card-content">
            <h3 class="clay-card-title">Space Set</h3>
            <p class="clay-card-price">$22.99</p>
            <div class="clay-card-badge">Trending</div>
          </div>
        </div>

        <!-- 玩具卡片 5: 動物玩具 -->
        <div class="clay-toy-card card-purple">
          <div class="clay-card-icon">🦁</div>
          <div class="clay-card-shine"></div>
          <div class="clay-card-content">
            <h3 class="clay-card-title">Animal Friends</h3>
            <p class="clay-card-price">$14.99</p>
            <div class="clay-card-badge">Popular</div>
          </div>
        </div>

        <!-- 玩具卡片 6: 美食玩具 -->
        <div class="clay-toy-card card-orange">
          <div class="clay-card-icon">🍰</div>
          <div class="clay-card-shine"></div>
          <div class="clay-card-content">
            <h3 class="clay-card-title">Kitchen Play</h3>
            <p class="clay-card-price">$16.99</p>
            <div class="clay-card-badge">Featured</div>
          </div>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    /* === Claymation 玩具商店核心樣式 === */

    /* 商店標題區 */
    .clay-shop-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .clay-shop-title {
      font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif;
      font-size: 36px;
      font-weight: 800;
      color: #5D4E37;
      margin: 0 0 8px 0;
      text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.6);
    }

    .clay-shop-subtitle {
      font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
      font-size: 16px;
      color: #8B7355;
      margin: 0;
    }

    /* 玩具容器 - 網格布局 */
    .clay-shop-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }

    /* 玩具卡片基礎 */
    .clay-toy-card {
      position: relative;
      aspect-ratio: 3 / 4;
      border-radius: 32px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 
        0 8px 16px rgba(0, 0, 0, 0.15),
        0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      overflow: hidden;
    }

    /* 玩具卡片顏色變體 */
    .card-pink {
      background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
    }

    .card-yellow {
      background: linear-gradient(145deg, #FFD54F 0%, #FFB300 100%);
    }

    .card-green {
      background: linear-gradient(145deg, #66BB6A 0%, #43A047 100%);
    }

    .card-blue {
      background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
    }

    .card-purple {
      background: linear-gradient(145deg, #AB47BC 0%, #8E24AA 100%);
    }

    .card-orange {
      background: linear-gradient(145deg, #FFA726 0%, #F57C00 100%);
    }

    /* Hover 效果 - 彈跳上升 */
    .clay-toy-card:hover {
      transform: translateY(-12px) scale(1.03);
      box-shadow: 
        0 16px 32px rgba(0, 0, 0, 0.2),
        0 4px 8px rgba(0, 0, 0, 0.15);
    }

    /* Active 效果 - 擠壓下沉 */
    .clay-toy-card:active {
      transform: translateY(-4px) scale(0.98);
      box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.15),
        0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* 卡片光澤效果 */
    .clay-card-shine {
      position: absolute;
      top: 20px;
      left: 30px;
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%);
      border-radius: 50%;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .clay-toy-card:hover .clay-card-shine {
      opacity: 0.8;
    }

    /* 卡片圖標 */
    .clay-card-icon {
      font-size: 72px;
      margin-bottom: 16px;
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .clay-toy-card:hover .clay-card-icon {
      transform: scale(1.1) rotate(5deg);
    }

    /* 定格动画晃動 */
    @keyframes toy-wobble {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
      75% { transform: rotate(-2deg); }
    }

    .clay-toy-card:hover .clay-card-icon {
      animation: toy-wobble 0.8s ease-in-out infinite;
    }

    /* 卡片內容 */
    .clay-card-content {
      text-align: center;
      color: white;
    }

    .clay-card-title {
      font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif;
      font-size: 20px;
      font-weight: 700;
      margin: 0 0 8px 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .clay-card-price {
      font-family: 'Comic Sans MS', sans-serif;
      font-size: 24px;
      font-weight: 800;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    /* 徽章標籤 */
    .clay-card-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      background: rgba(255, 255, 255, 0.9);
      color: #5D4E37;
      font-family: 'Comic Sans MS', sans-serif;
      font-size: 12px;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
    }

    .clay-card-badge.hot {
      background: linear-gradient(135deg, #FF6B6B, #FF4757);
      color: white;
    }

    .clay-card-badge.sale {
      background: linear-gradient(135deg, #FFA502, #FF6348);
      color: white;
    }

    .clay-toy-card:hover .clay-card-badge {
      transform: scale(1.1) rotate(-5deg);
    }

    /* 響應式調整 */
    @media (max-width: 768px) {
      .clay-shop-title {
        font-size: 28px;
      }

      .clay-shop-subtitle {
        font-size: 14px;
      }

      .clay-shop-container {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 16px;
      }

      .clay-card-icon {
        font-size: 56px;
      }

      .clay-card-title {
        font-size: 16px;
      }

      .clay-card-price {
        font-size: 20px;
      }
    }

    @media (max-width: 480px) {
      .clay-shop-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }

      .clay-toy-card {
        border-radius: 24px;
        padding: 16px;
      }

      .clay-card-icon {
        font-size: 48px;
      }

      .clay-card-title {
        font-size: 14px;
      }

      .clay-card-price {
        font-size: 18px;
      }

      .clay-card-badge {
        font-size: 10px;
        padding: 4px 8px;
      }
    }
  `
};

export default ToyShopDemo;

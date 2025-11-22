// Claymation - Stop-Motion Animation Toy Style

import { ToyCharacterDemo } from './ToyCharacter.js';
import { ToyShopDemo } from './ToyShop.js';
import { GameInterfaceDemo } from './GameInterface.js';
import { customPrompt } from './customPrompts.js';

// 分類展示 Demo UI (for StyleCard)
const demoUI = `
  <div class="w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4 flex items-center justify-center">
    <div class="flex gap-3 flex-wrap justify-center">
      <!-- 粉紅玩具 -->
      <div class="clay-mini-toy pink">
        <div class="clay-mini-highlight"></div>
        <div class="clay-mini-face">
          <div class="clay-mini-eyes">
            <div class="clay-mini-eye"></div>
            <div class="clay-mini-eye"></div>
          </div>
          <div class="clay-mini-smile"></div>
        </div>
      </div>

      <!-- 黃色玩具 -->
      <div class="clay-mini-toy yellow">
        <div class="clay-mini-highlight"></div>
        <div class="clay-mini-face">
          <div class="clay-mini-eyes">
            <div class="clay-mini-eye"></div>
            <div class="clay-mini-eye"></div>
          </div>
          <div class="clay-mini-smile"></div>
        </div>
      </div>

      <!-- 藍色玩具 -->
      <div class="clay-mini-toy blue">
        <div class="clay-mini-highlight"></div>
        <div class="clay-mini-face">
          <div class="clay-mini-eyes">
            <div class="clay-mini-eye"></div>
            <div class="clay-mini-eye"></div>
          </div>
          <div class="clay-mini-smile"></div>
        </div>
      </div>
    </div>
  </div>
`;

// 分類自定義樣式
const customStyles = `
  /* Claymation 分類卡片展示樣式 */

  .clay-mini-toy {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.15),
      0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .clay-mini-toy.pink {
    background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
  }

  .clay-mini-toy.yellow {
    background: linear-gradient(145deg, #FFD54F 0%, #FFA726 100%);
  }

  .clay-mini-toy.blue {
    background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
  }

  .clay-mini-toy:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow:
      0 6px 12px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.15);
  }

  @keyframes mini-wiggle {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  .clay-mini-toy:hover {
    animation: mini-wiggle 0.5s ease-in-out infinite;
  }

  .clay-mini-highlight {
    position: absolute;
    top: 12px;
    left: 15px;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .clay-mini-face {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .clay-mini-eyes {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .clay-mini-eye {
    width: 6px;
    height: 6px;
    background: #2C3E50;
    border-radius: 50%;
  }

  .clay-mini-smile {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 9px;
    border: 2px solid #2C3E50;
    border-top: none;
    border-radius: 0 0 18px 18px;
  }
`;

// StylePrompt (叙事风格描述)
const stylePrompt = {
  'zh-CN': `Claymation 风格灵感来自经典定格动画（如《超级无敌掌门狗》《小鸡快跑》），将手工黏土玩具的质感和童趣带入数字界面。

**设计哲学**
这种风格模拟儿童房中的彩色黏土玩具，每个 UI 元素都像是用手捏制的玩具角色，带有温暖的手工感和亲和力。界面不追求完美，而是刻意保留玩具的圆润可爱，通过角色化设计（表情、动作）与用户建立情感连接。

**核心特征**
- 极度圆润的形状（完全圆形或超大圆角）
- 明亮的糖果色渐变（模拟彩色黏土）
- 顶部高光效果（玩具光泽）
- 短而柔和的阴影（桌面投影）
- 角色化元素（眼睛、嘴巴、表情）
- 定格动画效果（轻微抖动）
- 挤压交互反馈（按压变扁平）

**适用场景**
- 儿童教育应用（识字、数学游戏）
- 玩具电商平台（展示玩具商品）
- 轻松小游戏（休闲益智游戏）
- 亲子应用（家庭相册、育儿记录）
- 创意工具（儿童绘画、手工教程）

**情感定位**
温暖、童趣、友好、轻松、富有想象力。适合需要降低使用门槛、营造轻松氛围的产品。`,

  'en-US': `Claymation style is inspired by classic stop-motion animations (like "Wallace & Gromit", "Chicken Run"), bringing the texture and playfulness of handcrafted clay toys into digital interfaces.

**Design Philosophy**
This style mimics colorful clay toys in a child's room, where each UI element resembles a hand-molded toy character with warm handcrafted charm and approachability. The interface doesn't pursue perfection but deliberately preserves the rounded cuteness of toys, establishing emotional connections through character design (expressions, gestures).

**Core Features**
- Extremely rounded shapes (fully circular or extra-large radius)
- Bright candy color gradients (mimicking colorful clay)
- Top highlight effects (toy glossiness)
- Short and soft shadows (tabletop projection)
- Character elements (eyes, mouth, expressions)
- Stop-motion effects (gentle wiggle)
- Squish interaction feedback (flatten when pressed)

**Use Cases**
- Children's educational apps (literacy, math games)
- Toy e-commerce platforms (showcasing toy products)
- Casual mini-games (leisure puzzle games)
- Family apps (photo albums, parenting records)
- Creative tools (children's drawing, craft tutorials)

**Emotional Positioning**
Warm, playful, friendly, relaxed, imaginative. Suitable for products that need to lower barriers to entry and create a relaxed atmosphere.`
};

export const claymation = {
  id: 'visual-claymation',
  title: 'styles.visual.claymation.title',
  description: 'styles.visual.claymation.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML: demoUI,
  customStyles,

  // Previews (Three full-page templates)
  previews: [
    {
      id: ToyCharacterDemo.id,
      name: ToyCharacterDemo.title,
      description: ToyCharacterDemo.description,
      type: 'full',
      html: ToyCharacterDemo.demoHTML,
      styles: ToyCharacterDemo.customStyles,
      customPrompt: customPrompt  // 使用家族級別的 customPrompt
    },
    {
      id: ToyShopDemo.id,
      name: ToyShopDemo.title,
      description: ToyShopDemo.description,
      type: 'full',
      html: ToyShopDemo.demoHTML,
      styles: ToyShopDemo.customStyles,
      customPrompt: customPrompt  // 使用家族級別的 customPrompt
    },
    {
      id: GameInterfaceDemo.id,
      name: GameInterfaceDemo.title,
      description: GameInterfaceDemo.description,
      type: 'full',
      html: GameInterfaceDemo.demoHTML,
      styles: GameInterfaceDemo.customStyles,
      customPrompt: customPrompt  // 使用家族級別的 customPrompt
    }
  ],

  // Custom Prompt (for AI generation)
  customPrompt: customPrompt,

  // Style Prompt (shared narrative description for all templates)
  stylePrompt: stylePrompt
};

export default claymation;

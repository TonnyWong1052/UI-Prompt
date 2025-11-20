// Claymorphism - Clay Texture Effect

import { demoHTML, customStyles } from './Demo'
import { fullPageHTML, fullPageStyles } from './FullPage'

export const claymorphism = {
  id: 'visual-claymorphism',
  title: 'styles.visual.claymorphism.title',
  description: 'styles.visual.claymorphism.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML,
  customStyles,

  // Full Page Preview
  fullPageHTML,
  fullPageStyles,

  // Previews
  previews: [
    {
      id: 'claymorphism',
      name: 'Claymorphism',
      type: 'full',
      previewId: 'claymorphism'
    }
  ],

  // Custom Prompt (bilingual AI instructions)
  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个 Claymorphism（黏土质感设计）风格的界面，通过立体阴影、柔和渐变和圆润造型创造如同真实黏土般的3D质感。

**核心设计要求**

1. **多层立体阴影**
   - 使用内外阴影组合创造深度
   - 外阴影：模拟光源从左上方照射
   - 内阴影：创造凹陷或凸起的立体感
   - 示例：
     \`\`\`css
     .clay-element {
       background: linear-gradient(145deg, #ff99ac, #ff6a88);
       border-radius: 32px;
       box-shadow:
         -6px -6px 16px rgba(255, 255, 255, 0.6),
         6px 6px 16px rgba(255, 106, 136, 0.4),
         inset -4px -4px 8px rgba(255, 255, 255, 0.2),
         inset 4px 4px 8px rgba(255, 106, 136, 0.3);
     }
     \`\`\`

2. **柔和的渐变背景**
   - 使用同色系的渐变模拟光影
   - 渐变角度通常是 145deg
   - 从浅到深创造立体感
   - 示例：
     \`\`\`css
     /* 粉色黏土 */
     .clay-pink {
       background: linear-gradient(145deg, #ffb3ba, #ff8fab);
     }

     /* 蓝色黏土 */
     .clay-blue {
       background: linear-gradient(145deg, #a8dadc, #457b9d);
     }

     /* 绿色黏土 */
     .clay-green {
       background: linear-gradient(145deg, #d8f3dc, #95d5b2);
     }

     /* 橙色黏土 */
     .clay-orange {
       background: linear-gradient(145deg, #ffbe0b, #fb8500);
     }
     \`\`\`

3. **大圆角设计**
   - 圆角半径较大：border-radius: 24px-48px
   - 创造柔软、可塑的触感
   - 不同尺寸元素使用不同圆角
   - 示例：
     \`\`\`css
     .clay-small { border-radius: 16px; }
     .clay-medium { border-radius: 24px; }
     .clay-large { border-radius: 32px; }
     .clay-xlarge { border-radius: 48px; }
     \`\`\`

4. **柔和的配色**
   - 使用低饱和度、高亮度的色彩
   - 避免纯色，使用渐变
   - 常用色系：粉色、蓝色、绿色、橙色、紫色
   - 示例：
     \`\`\`css
     /* 粉色系 */
     --clay-pink-light: #ffb3ba;
     --clay-pink-dark: #ff8fab;

     /* 蓝色系 */
     --clay-blue-light: #a8dadc;
     --clay-blue-dark: #457b9d;

     /* 绿色系 */
     --clay-green-light: #d8f3dc;
     --clay-green-dark: #95d5b2;

     /* 橙色系 */
     --clay-orange-light: #ffbe0b;
     --clay-orange-dark: #fb8500;
     \`\`\`

5. **文字阴影**
   - 使用双向文字阴影创造立体感
   - 亮色阴影在左上，暗色阴影在右下
   - 示例：
     \`\`\`css
     .clay-text {
       text-shadow:
         2px 2px 4px rgba(255, 106, 136, 0.3),
         -1px -1px 2px rgba(255, 255, 255, 0.3);
     }

     .clay-title {
       text-shadow:
         4px 4px 8px rgba(255, 106, 136, 0.3),
         -2px -2px 4px rgba(255, 255, 255, 0.3);
     }
     \`\`\`

6. **交互动画**
   - 悬停时元素轻微上移
   - 阴影增强创造"浮起"效果
   - 过渡要平滑柔和
   - 示例：
     \`\`\`css
     .clay-interactive {
       transition: all 0.3s ease;
     }

     .clay-interactive:hover {
       transform: translateY(-3px);
       box-shadow:
         -8px -8px 20px rgba(255, 255, 255, 0.7),
         8px 8px 20px rgba(255, 106, 136, 0.5),
         inset -4px -4px 8px rgba(255, 255, 255, 0.2),
         inset 4px 4px 8px rgba(255, 106, 136, 0.3);
     }

     .clay-interactive:active {
       transform: translateY(1px);
       box-shadow:
         -4px -4px 12px rgba(255, 255, 255, 0.5),
         4px 4px 12px rgba(255, 106, 136, 0.3),
         inset -2px -2px 4px rgba(255, 255, 255, 0.2),
         inset 2px 2px 4px rgba(255, 106, 136, 0.3);
     }
     \`\`\`

**配色方案**

主要配色（柔和渐变色）：
- 粉色系：#ffb3ba → #ff8fab
- 蓝色系：#a8dadc → #457b9d
- 绿色系：#d8f3dc → #95d5b2
- 橙色系：#ffbe0b → #fb8500
- 紫色系：#e0aaff → #c77dff
- 薄荷系：#caf0f8 → #90e0ef

背景色：
- 浅粉背景：#ffecd2 → #fcb69f
- 浅蓝背景：#e3f2fd → #bbdefb
- 浅绿背景：#f1f8e9 → #dcedc8

文字色：
- 主要文字：#ffffff
- 次要文字：rgba(255, 255, 255, 0.9)

**关键 CSS 类示例**

\`\`\`css
/* 黏土卡片 */
.clay-card {
  padding: 2rem;
  background: linear-gradient(145deg, #ff99ac, #ff6a88);
  border-radius: 32px;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 106, 136, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-card:hover {
  transform: translateY(-5px);
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.7),
    8px 8px 20px rgba(255, 106, 136, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 106, 136, 0.3);
}

/* 黏土按钮 */
.clay-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border: none;
  border-radius: 24px;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
  text-shadow: 1px 1px 2px rgba(255, 143, 171, 0.2);
  transition: all 0.3s ease;
}

.clay-button:hover {
  transform: translateY(-2px);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.7),
    6px 6px 16px rgba(255, 143, 171, 0.5),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

.clay-button:active {
  transform: translateY(1px);
  box-shadow:
    -3px -3px 8px rgba(255, 255, 255, 0.5),
    3px 3px 8px rgba(255, 143, 171, 0.3),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

/* 黏土输入框 */
.clay-input {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(145deg, #ffc8dd, #ffafcc);
  border: none;
  border-radius: 20px;
  color: #ff6a88;
  font-size: 1rem;
  font-weight: 600;
  box-shadow:
    inset -3px -3px 8px rgba(255, 255, 255, 0.5),
    inset 3px 3px 8px rgba(255, 175, 204, 0.4);
  transition: all 0.3s ease;
}

.clay-input:focus {
  outline: none;
  box-shadow:
    inset -4px -4px 10px rgba(255, 255, 255, 0.6),
    inset 4px 4px 10px rgba(255, 175, 204, 0.5),
    0 0 0 3px rgba(255, 175, 204, 0.3);
}

.clay-input::placeholder {
  color: rgba(255, 106, 136, 0.6);
}

/* 黏土导航栏 */
.clay-nav {
  padding: 1rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 50px;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

/* 黏土图标 */
.clay-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #ffb6c1, #ff7ba5);
  border-radius: 20px;
  box-shadow:
    -3px -3px 8px rgba(255, 255, 255, 0.5),
    3px 3px 8px rgba(255, 123, 165, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 123, 165, 0.3);
}
\`\`\`

**重要提示**

- ✅ 必须使用内外阴影组合创造立体感
- ✅ 必须使用渐变背景，避免纯色
- ✅ 圆角要大，创造柔软触感
- ✅ 使用柔和的配色，避免高饱和度
- ✅ 文字需要阴影增强立体感
- ✅ 交互动画要平滑柔和
- ❌ 避免使用纯色背景
- ❌ 避免尖锐的边角
- ❌ 避免单一方向的阴影
- ❌ 避免高对比度的配色
- 黏土效果的关键是内外阴影的组合
- 所有元素都应该看起来柔软、可塑、立体`,

    'en-US': `Please create a Claymorphism interface using TailwindCSS, creating 3D clay-like texture through layered shadows, soft gradients, and rounded shapes.

**Core Design Requirements**

1. **Multi-Layer 3D Shadows**
   - Use combination of outer and inner shadows to create depth
   - Outer shadows: simulate light from top-left
   - Inner shadows: create concave or convex 3D feel
   - Example:
     \`\`\`css
     .clay-element {
       background: linear-gradient(145deg, #ff99ac, #ff6a88);
       border-radius: 32px;
       box-shadow:
         -6px -6px 16px rgba(255, 255, 255, 0.6),
         6px 6px 16px rgba(255, 106, 136, 0.4),
         inset -4px -4px 8px rgba(255, 255, 255, 0.2),
         inset 4px 4px 8px rgba(255, 106, 136, 0.3);
     }
     \`\`\`

2. **Soft Gradient Backgrounds**
   - Use same-tone gradients to simulate light and shadow
   - Gradient angle usually 145deg
   - Light to dark creates 3D feel
   - Example:
     \`\`\`css
     /* Pink clay */
     .clay-pink {
       background: linear-gradient(145deg, #ffb3ba, #ff8fab);
     }

     /* Blue clay */
     .clay-blue {
       background: linear-gradient(145deg, #a8dadc, #457b9d);
     }

     /* Green clay */
     .clay-green {
       background: linear-gradient(145deg, #d8f3dc, #95d5b2);
     }

     /* Orange clay */
     .clay-orange {
       background: linear-gradient(145deg, #ffbe0b, #fb8500);
     }
     \`\`\`

3. **Large Border Radius**
   - Large radius: border-radius: 24px-48px
   - Create soft, malleable feel
   - Different sizes use different radius
   - Example:
     \`\`\`css
     .clay-small { border-radius: 16px; }
     .clay-medium { border-radius: 24px; }
     .clay-large { border-radius: 32px; }
     .clay-xlarge { border-radius: 48px; }
     \`\`\`

4. **Soft Color Palette**
   - Use low-saturation, high-brightness colors
   - Avoid solid colors, use gradients
   - Common colors: pink, blue, green, orange, purple
   - Example:
     \`\`\`css
     /* Pink series */
     --clay-pink-light: #ffb3ba;
     --clay-pink-dark: #ff8fab;

     /* Blue series */
     --clay-blue-light: #a8dadc;
     --clay-blue-dark: #457b9d;

     /* Green series */
     --clay-green-light: #d8f3dc;
     --clay-green-dark: #95d5b2;

     /* Orange series */
     --clay-orange-light: #ffbe0b;
     --clay-orange-dark: #fb8500;
     \`\`\`

5. **Text Shadows**
   - Use bi-directional text shadows for 3D feel
   - Light shadow top-left, dark shadow bottom-right
   - Example:
     \`\`\`css
     .clay-text {
       text-shadow:
         2px 2px 4px rgba(255, 106, 136, 0.3),
         -1px -1px 2px rgba(255, 255, 255, 0.3);
     }

     .clay-title {
       text-shadow:
         4px 4px 8px rgba(255, 106, 136, 0.3),
         -2px -2px 4px rgba(255, 255, 255, 0.3);
     }
     \`\`\`

6. **Interaction Animations**
   - Elements slightly lift on hover
   - Enhanced shadows create "floating" effect
   - Transitions smooth and gentle
   - Example:
     \`\`\`css
     .clay-interactive {
       transition: all 0.3s ease;
     }

     .clay-interactive:hover {
       transform: translateY(-3px);
       box-shadow:
         -8px -8px 20px rgba(255, 255, 255, 0.7),
         8px 8px 20px rgba(255, 106, 136, 0.5),
         inset -4px -4px 8px rgba(255, 255, 255, 0.2),
         inset 4px 4px 8px rgba(255, 106, 136, 0.3);
     }

     .clay-interactive:active {
       transform: translateY(1px);
       box-shadow:
         -4px -4px 12px rgba(255, 255, 255, 0.5),
         4px 4px 12px rgba(255, 106, 136, 0.3),
         inset -2px -2px 4px rgba(255, 255, 255, 0.2),
         inset 2px 2px 4px rgba(255, 106, 136, 0.3);
     }
     \`\`\`

**Color Scheme**

Main colors (soft gradients):
- Pink series: #ffb3ba → #ff8fab
- Blue series: #a8dadc → #457b9d
- Green series: #d8f3dc → #95d5b2
- Orange series: #ffbe0b → #fb8500
- Purple series: #e0aaff → #c77dff
- Mint series: #caf0f8 → #90e0ef

Background colors:
- Light pink background: #ffecd2 → #fcb69f
- Light blue background: #e3f2fd → #bbdefb
- Light green background: #f1f8e9 → #dcedc8

Text colors:
- Primary text: #ffffff
- Secondary text: rgba(255, 255, 255, 0.9)

**Key CSS Class Examples**

\`\`\`css
/* Clay card */
.clay-card {
  padding: 2rem;
  background: linear-gradient(145deg, #ff99ac, #ff6a88);
  border-radius: 32px;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 106, 136, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 106, 136, 0.3);
  transition: all 0.3s ease;
}

.clay-card:hover {
  transform: translateY(-5px);
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.7),
    8px 8px 20px rgba(255, 106, 136, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.2),
    inset 4px 4px 8px rgba(255, 106, 136, 0.3);
}

/* Clay button */
.clay-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border: none;
  border-radius: 24px;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
  text-shadow: 1px 1px 2px rgba(255, 143, 171, 0.2);
  transition: all 0.3s ease;
}

.clay-button:hover {
  transform: translateY(-2px);
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.7),
    6px 6px 16px rgba(255, 143, 171, 0.5),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

.clay-button:active {
  transform: translateY(1px);
  box-shadow:
    -3px -3px 8px rgba(255, 255, 255, 0.5),
    3px 3px 8px rgba(255, 143, 171, 0.3),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

/* Clay input */
.clay-input {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(145deg, #ffc8dd, #ffafcc);
  border: none;
  border-radius: 20px;
  color: #ff6a88;
  font-size: 1rem;
  font-weight: 600;
  box-shadow:
    inset -3px -3px 8px rgba(255, 255, 255, 0.5),
    inset 3px 3px 8px rgba(255, 175, 204, 0.4);
  transition: all 0.3s ease;
}

.clay-input:focus {
  outline: none;
  box-shadow:
    inset -4px -4px 10px rgba(255, 255, 255, 0.6),
    inset 4px 4px 10px rgba(255, 175, 204, 0.5),
    0 0 0 3px rgba(255, 175, 204, 0.3);
}

.clay-input::placeholder {
  color: rgba(255, 106, 136, 0.6);
}

/* Clay navigation */
.clay-nav {
  padding: 1rem 2rem;
  background: linear-gradient(145deg, #ffb3ba, #ff8fab);
  border-radius: 50px;
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.6),
    6px 6px 16px rgba(255, 143, 171, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 143, 171, 0.3);
}

/* Clay icon */
.clay-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #ffb6c1, #ff7ba5);
  border-radius: 20px;
  box-shadow:
    -3px -3px 8px rgba(255, 255, 255, 0.5),
    3px 3px 8px rgba(255, 123, 165, 0.4),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2),
    inset 2px 2px 4px rgba(255, 123, 165, 0.3);
}
\`\`\`

**Important Notes**

- ✅ MUST use combination of outer and inner shadows for 3D feel
- ✅ MUST use gradient backgrounds, avoid solid colors
- ✅ Large border-radius for soft touch
- ✅ Use soft colors, avoid high saturation
- ✅ Text needs shadows for 3D enhancement
- ✅ Smooth and gentle interaction animations
- ❌ Avoid solid color backgrounds
- ❌ Avoid sharp corners
- ❌ Avoid single-direction shadows
- ❌ Avoid high-contrast color schemes
- Key to clay effect is combination of inner and outer shadows
- All elements should look soft, malleable, and three-dimensional`
  },

  stylePrompt: {
    'zh-CN': `角色：你是一名专精 Claymorphism（黏土质感设计）的 UI 设计师，需要通过立体阴影和柔和渐变创造如同真实黏土般的3D质感。

场景定位：
- 适合儿童应用、创意工具、社交平台、游戏界面等需要友好、有趣、易接近的产品。
- 用户在进入页面时，应立即感受到柔软、可爱、立体的视觉体验。

视觉设计理念：
- 以3D黏土质感为核心，让界面元素看起来像是用黏土捏制而成。
- 使用多层阴影（内外阴影组合）创造真实的立体感。
- 配色柔和温暖，避免刺眼的高饱和度色彩。

材质与质感：
- 表面有明显的内外光影，创造凹凸感。
- 使用渐变模拟黏土的光滑表面和光影变化。
- 圆角大而柔和，让元素看起来可塑、柔软。

交互体验：
- 悬停时元素"浮起"，阴影增强。
- 按下时元素"下陷"，阴影减弱。
- 所有动画平滑，模拟真实物理触感。

氛围营造：
- 整体氛围是友好、温暖、有趣、可爱的。
- 用户感觉像是在玩一个由黏土构成的玩具界面。`,

    'en-US': `Role: You are a UI designer specializing in Claymorphism, creating 3D clay-like texture through layered shadows and soft gradients.

Scene:
- Ideal for children's apps, creative tools, social platforms, game interfaces requiring friendly, fun, approachable products.
- Users should immediately feel soft, cute, three-dimensional visual experience.

Visual philosophy:
- Core focus on 3D clay texture, making interface elements look like molded clay.
- Use multi-layer shadows (inner and outer combination) to create realistic 3D feel.
- Soft and warm colors, avoid harsh high-saturation colors.

Material and texture:
- Surface has obvious inner and outer light effects, creating relief.
- Use gradients to simulate smooth clay surface and light changes.
- Large and soft border-radius, making elements look malleable and soft.

Interaction experience:
- Elements "float up" on hover, shadows enhance.
- Elements "press down" on click, shadows reduce.
- All animations smooth, simulating real physical touch.

Mood:
- Overall mood is friendly, warm, fun, cute.
- Users feel like playing with a toy interface made of clay.`
  }
}

export default claymorphism


// Glassmorphism 2.0 - Enhanced Glass Effect

import { demoHTML, customStyles } from './Demo'
import { fullPageHTML, fullPageStyles } from './FullPage'

export const glassmorphism2 = {
  id: 'visual-glassmorphism-2',
  title: 'styles.visual.glassmorphism2.title',
  description: 'styles.visual.glassmorphism2.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML,
  customStyles,

  // Full Page Preview
  fullPageHTML,
  fullPageStyles,

  // Previews
  previews: [
    {
      id: 'glassmorphism-2',
      name: 'Glassmorphism 2.0',
      type: 'full',
      previewId: 'glassmorphism-2'
    }
  ],

  // Custom Prompt (bilingual AI instructions)
  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个 Glassmorphism 2.0（玻璃态设计2.0）风格的界面，通过增强的模糊效果、多层半透明和精致的边框创造现代时尚的玻璃质感。

**核心设计要求**

1. **增强型背景模糊**
   - 使用 backdrop-filter: blur(20px-30px) saturate(180%)
   - 配合 -webkit-backdrop-filter 确保跨浏览器兼容
   - 半透明背景: background: rgba(255, 255, 255, 0.1-0.15)
   - 示例：
     \`\`\`css
     .glass-card {
       background: rgba(255, 255, 255, 0.1);
       backdrop-filter: blur(20px) saturate(180%);
       -webkit-backdrop-filter: blur(20px) saturate(180%);
       border-radius: 24px;
       border: 1px solid rgba(255, 255, 255, 0.2);
       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
     }
     \`\`\`

2. **多层玻璃效果**
   - 堆叠多个玻璃层创造深度
   - 每层使用不同的透明度和模糊程度
   - 外层模糊更强，内层更清晰
   - 示例：
     \`\`\`css
     /* 外层玻璃容器 */
     .glass-outer {
       background: rgba(255, 255, 255, 0.08);
       backdrop-filter: blur(30px);
       padding: 2rem;
       border-radius: 32px;
     }

     /* 内层玻璃卡片 */
     .glass-inner {
       background: rgba(255, 255, 255, 0.15);
       backdrop-filter: blur(15px);
       padding: 1.5rem;
       border-radius: 20px;
       border: 1px solid rgba(255, 255, 255, 0.25);
     }
     \`\`\`

3. **精致的边框系统**
   - 使用半透明白色边框: border: 1px solid rgba(255, 255, 255, 0.2-0.3)
   - 边框可以是渐变: border-image
   - 顶部边框略亮，底部略暗
   - 示例：
     \`\`\`css
     .glass-border {
       border: 1px solid rgba(255, 255, 255, 0.2);
       border-top: 1px solid rgba(255, 255, 255, 0.3);
       border-bottom: 1px solid rgba(255, 255, 255, 0.1);
     }

     /* 渐变边框效果 */
     .glass-gradient-border {
       position: relative;
       border-radius: 20px;
       padding: 2px;
       background: linear-gradient(135deg,
         rgba(255, 255, 255, 0.3),
         rgba(255, 255, 255, 0.1));
     }

     .glass-gradient-border::before {
       content: '';
       position: absolute;
       inset: 0;
       border-radius: inherit;
       padding: 1px;
       background: inherit;
       -webkit-mask: linear-gradient(#fff 0 0) content-box,
                     linear-gradient(#fff 0 0);
       -webkit-mask-composite: xor;
       mask-composite: exclude;
     }
     \`\`\`

4. **渐变背景**
   - 使用柔和的多色渐变背景
   - 渐变应缓慢变化（15-20s动画）
   - 推荐紫色系、蓝色系、粉色系渐变
   - 示例：
     \`\`\`css
     body {
       background: linear-gradient(135deg,
         #667eea 0%,
         #764ba2 25%,
         #f093fb 50%,
         #667eea 75%,
         #764ba2 100%);
       background-size: 400% 400%;
       animation: gradientShift 15s ease infinite;
     }

     @keyframes gradientShift {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

5. **柔和的阴影**
   - 使用轻柔的投影: box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
   - 悬停时阴影增强: box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15)
   - 避免硬边阴影，保持柔和
   - 示例：
     \`\`\`css
     .glass-element {
       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
       transition: all 0.3s ease;
     }

     .glass-element:hover {
       box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
       transform: translateY(-4px);
     }
     \`\`\`

6. **圆润的圆角**
   - 大圆角: border-radius: 20px-32px
   - 创造柔和、现代的外观
   - 不同元素使用不同圆角大小
   - 示例：
     \`\`\`css
     .glass-card { border-radius: 24px; }
     .glass-button { border-radius: 12px; }
     .glass-icon { border-radius: 16px; }
     .glass-large { border-radius: 32px; }
     \`\`\`

**配色方案**

主要背景渐变：
- 紫色系: #667eea → #764ba2
- 粉紫系: #764ba2 → #f093fb
- 蓝色系: #4facfe → #00f2fe
- 粉色系: #ff9a9e → #fecfef

玻璃元素：
- 主要玻璃: rgba(255, 255, 255, 0.1-0.15)
- 深色玻璃: rgba(0, 0, 0, 0.1-0.15)
- 边框: rgba(255, 255, 255, 0.2-0.3)
- 文字: #ffffff, rgba(255, 255, 255, 0.8-0.9)

**关键 CSS 类示例**

\`\`\`css
/* 主要玻璃卡片 */
.glass-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

/* 玻璃按钮 */
.glass-button {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* 玻璃导航栏 */
.glass-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
}

/* 玻璃输入框 */
.glass-input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.glass-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
\`\`\`

**重要提示**

- ✅ 必须使用 backdrop-filter 创造真正的玻璃效果
- ✅ 使用半透明背景，让背景内容透出
- ✅ 使用饱和度增强 saturate(180%) 让颜色更鲜艳
- ✅ 边框必须是半透明的，通常是白色
- ✅ 阴影要柔和，不要太重
- ✅ 圆角要大，创造现代感
- ❌ 避免使用纯色不透明背景
- ❌ 避免使用硬边和直角
- ❌ 避免使用重色深色阴影
- ❌ 避免模糊度过低（至少 15px）
- 背景必须是渐变或有色彩的，纯色背景无法体现玻璃效果
- 所有交互元素应有平滑的过渡动画`,

    'en-US': `Please create a Glassmorphism 2.0 interface using TailwindCSS, creating modern and sophisticated glass texture through enhanced blur effects, multi-layer translucency, and refined borders.

**Core Design Requirements**

1. **Enhanced Background Blur**
   - Use backdrop-filter: blur(20px-30px) saturate(180%)
   - Add -webkit-backdrop-filter for cross-browser compatibility
   - Semi-transparent background: background: rgba(255, 255, 255, 0.1-0.15)
   - Example:
     \`\`\`css
     .glass-card {
       background: rgba(255, 255, 255, 0.1);
       backdrop-filter: blur(20px) saturate(180%);
       -webkit-backdrop-filter: blur(20px) saturate(180%);
       border-radius: 24px;
       border: 1px solid rgba(255, 255, 255, 0.2);
       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
     }
     \`\`\`

2. **Multi-Layer Glass Effect**
   - Stack multiple glass layers to create depth
   - Each layer uses different opacity and blur levels
   - Outer layers more blurred, inner layers clearer
   - Example:
     \`\`\`css
     /* Outer glass container */
     .glass-outer {
       background: rgba(255, 255, 255, 0.08);
       backdrop-filter: blur(30px);
       padding: 2rem;
       border-radius: 32px;
     }

     /* Inner glass card */
     .glass-inner {
       background: rgba(255, 255, 255, 0.15);
       backdrop-filter: blur(15px);
       padding: 1.5rem;
       border-radius: 20px;
       border: 1px solid rgba(255, 255, 255, 0.25);
     }
     \`\`\`

3. **Refined Border System**
   - Use semi-transparent white borders: border: 1px solid rgba(255, 255, 255, 0.2-0.3)
   - Borders can be gradient: border-image
   - Top border slightly brighter, bottom slightly darker
   - Example:
     \`\`\`css
     .glass-border {
       border: 1px solid rgba(255, 255, 255, 0.2);
       border-top: 1px solid rgba(255, 255, 255, 0.3);
       border-bottom: 1px solid rgba(255, 255, 255, 0.1);
     }

     /* Gradient border effect */
     .glass-gradient-border {
       position: relative;
       border-radius: 20px;
       padding: 2px;
       background: linear-gradient(135deg,
         rgba(255, 255, 255, 0.3),
         rgba(255, 255, 255, 0.1));
     }
     \`\`\`

4. **Gradient Background**
   - Use soft multi-color gradient backgrounds
   - Gradients should change slowly (15-20s animation)
   - Recommended purple, blue, pink gradients
   - Example:
     \`\`\`css
     body {
       background: linear-gradient(135deg,
         #667eea 0%,
         #764ba2 25%,
         #f093fb 50%,
         #667eea 75%,
         #764ba2 100%);
       background-size: 400% 400%;
       animation: gradientShift 15s ease infinite;
     }

     @keyframes gradientShift {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

5. **Soft Shadows**
   - Use soft shadows: box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
   - Enhanced on hover: box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15)
   - Avoid hard-edged shadows, keep soft
   - Example:
     \`\`\`css
     .glass-element {
       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
       transition: all 0.3s ease;
     }

     .glass-element:hover {
       box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
       transform: translateY(-4px);
     }
     \`\`\`

6. **Rounded Corners**
   - Large radius: border-radius: 20px-32px
   - Create soft, modern appearance
   - Different elements use different radius sizes
   - Example:
     \`\`\`css
     .glass-card { border-radius: 24px; }
     .glass-button { border-radius: 12px; }
     .glass-icon { border-radius: 16px; }
     .glass-large { border-radius: 32px; }
     \`\`\`

**Color Scheme**

Main background gradients:
- Purple series: #667eea → #764ba2
- Pink-purple series: #764ba2 → #f093fb
- Blue series: #4facfe → #00f2fe
- Pink series: #ff9a9e → #fecfef

Glass elements:
- Main glass: rgba(255, 255, 255, 0.1-0.15)
- Dark glass: rgba(0, 0, 0, 0.1-0.15)
- Borders: rgba(255, 255, 255, 0.2-0.3)
- Text: #ffffff, rgba(255, 255, 255, 0.8-0.9)

**Key CSS Class Examples**

\`\`\`css
/* Main glass card */
.glass-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

/* Glass button */
.glass-button {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Glass navigation */
.glass-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
}

/* Glass input */
.glass-input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.glass-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
\`\`\`

**Important Notes**

- ✅ MUST use backdrop-filter to create genuine glass effect
- ✅ Use semi-transparent backgrounds to let content show through
- ✅ Use saturation enhancement saturate(180%) for vibrant colors
- ✅ Borders must be semi-transparent, usually white
- ✅ Shadows should be soft, not too heavy
- ✅ Large border-radius for modern feel
- ❌ Avoid using solid opaque backgrounds
- ❌ Avoid hard edges and sharp corners
- ❌ Avoid heavy dark shadows
- ❌ Avoid blur levels below 15px
- Background must be gradient or colorful, solid colors cannot showcase glass effect
- All interactive elements should have smooth transition animations`
  },

  stylePrompt: {
    'zh-CN': `角色：你是一名专精 Glassmorphism 2.0 设计的 UI 设计师，需要通过增强的玻璃效果创造现代时尚的界面。

场景定位：
- 适合现代应用、创意展示、数据仪表板、音乐播放器等需要时尚感和科技感的产品。
- 用户在进入页面时，应立即感受到透明、轻盈、现代的视觉体验。

视觉设计理念：
- 以半透明玻璃效果为核心，通过背景模糊让内容若隐若现。
- 使用渐变背景创造丰富的色彩层次，玻璃层透出背景色彩。
- 保持界面轻盈感，避免过重的视觉元素。

材质与质感：
- 玻璃表面有明显的模糊效果，让背后的内容透出。
- 边框是半透明的，通常是白色或浅色。
- 整体质感类似磨砂玻璃或亚克力材料。

交互体验：
- 悬停时元素轻微上移，玻璃效果略微增强。
- 所有动画平滑流畅，保持优雅感。
- 点击时有轻微的视觉反馈，但不夸张。

氛围营造：
- 整体氛围是现代、时尚、科技感、轻盈的。
- 用户感觉像是在操作一个由玻璃构成的未来界面。`,

    'en-US': `Role: You are a UI designer specializing in Glassmorphism 2.0, creating modern and sophisticated interfaces through enhanced glass effects.

Scene:
- Ideal for modern applications, creative showcases, data dashboards, music players and products that need fashion and tech feel.
- Users should immediately feel transparent, lightweight, modern visual experience when entering the page.

Visual philosophy:
- Core focus on semi-transparent glass effect, letting content peek through background blur.
- Use gradient backgrounds to create rich color layers, glass layers revealing background colors.
- Keep interface lightweight, avoid heavy visual elements.

Material and texture:
- Glass surfaces have obvious blur effect, letting background content show through.
- Borders are semi-transparent, usually white or light colors.
- Overall texture similar to frosted glass or acrylic materials.

Interaction experience:
- Elements slightly lift on hover, glass effect slightly enhanced.
- All animations smooth and fluid, maintaining elegance.
- Subtle visual feedback on click, but not exaggerated.

Mood:
- Overall mood is modern, fashionable, tech-savvy, lightweight.
- Users feel like they are operating a futuristic interface made of glass.`
  }
}

export default glassmorphism2


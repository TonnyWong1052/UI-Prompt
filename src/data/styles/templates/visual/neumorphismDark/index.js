// Neumorphism Dark - Soft UI Dark Mode

import { demoHTML, customStyles } from './Demo'

export const neumorphismDark = {
  id: 'visual-neumorphism-dark',
  title: 'styles.visual.neumorphismDark.title',
  description: 'styles.visual.neumorphismDark.description',

  demoHTML,
  customStyles,

  fullPageHTML: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neumorphism Dark</title>
</head>
<body style="margin:0;font-family:system-ui;background:#1a1a2e;color:#e0e0e0;padding:2rem;">
  <div style="max-width:1200px;margin:0 auto;">
    <h1 style="font-size:3rem;margin-bottom:2rem;text-align:center;">Neumorphism Dark</h1>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
      <div style="padding:2rem;background:#1a1a2e;border-radius:24px;box-shadow:-8px -8px 16px rgba(255,255,255,0.05),8px 8px 16px rgba(0,0,0,0.4);">
        <h3 style="color:#bb86fc;margin-bottom:1rem;">Dark Mode</h3>
        <p style="color:#a0a0a0;line-height:1.6;">Elegant soft shadows on dark background</p>
      </div>
      <div style="padding:2rem;background:#1a1a2e;border-radius:24px;box-shadow:-8px -8px 16px rgba(255,255,255,0.05),8px 8px 16px rgba(0,0,0,0.4);">
        <h3 style="color:#bb86fc;margin-bottom:1rem;">Subtle Depth</h3>
        <p style="color:#a0a0a0;line-height:1.6;">Perfect for modern dark interfaces</p>
      </div>
    </div>
  </div>
</body>
</html>`,

  fullPageStyles: ``,

  previews: [
    {
      id: 'neumorphism-dark',
      name: 'Neumorphism Dark',
      type: 'full',
      previewId: 'neumorphism-dark'
    }
  ],

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建 Neumorphism Dark（新拟态暗色）风格界面，在深色背景上使用柔和的阴影和高光创造微妙优雅的立体感。

**核心设计要求**

1. **深色背景系统**
   - 主背景：#1a1a2e（深紫蓝）
   - 元素背景：与主背景相同 #1a1a2e
   - 文字色：#e0e0e0（浅灰）、#a0a0a0（次要灰）
   - 强调色：#bb86fc（紫色）
   - 示例：
     \`\`\`css
     body {
       background: #1a1a2e;
       color: #e0e0e0;
     }

     .neudark-element {
       background: #1a1a2e;
     }
     \`\`\`

2. **柔和的双向阴影**
   - 浅色高光：rgba(255, 255, 255, 0.05-0.07) 在左上方
   - 深色阴影：rgba(0, 0, 0, 0.4-0.5) 在右下方
   - 阴影偏移：-8px -8px（高光）和 8px 8px（阴影）
   - 阴影模糊：16px-20px
   - 示例：
     \`\`\`css
     /* 凸起效果（浮起） */
     .neudark-raised {
       background: #1a1a2e;
       border-radius: 24px;
       box-shadow:
         -8px -8px 16px rgba(255, 255, 255, 0.05),
         8px 8px 16px rgba(0, 0, 0, 0.4);
     }

     /* 悬停时增强效果 */
     .neudark-raised:hover {
       box-shadow:
         -12px -12px 20px rgba(255, 255, 255, 0.07),
         12px 12px 20px rgba(0, 0, 0, 0.5);
     }

     /* 凹陷效果（下陷） */
     .neudark-inset {
       background: #1a1a2e;
       border-radius: 24px;
       box-shadow:
         inset -4px -4px 12px rgba(255, 255, 255, 0.05),
         inset 4px 4px 12px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

3. **大圆角设计**
   - 标准圆角：24px
   - 小元素圆角：16px
   - 大卡片圆角：32px
   - 按钮圆角：20px
   - 示例：
     \`\`\`css
     .neudark-card { border-radius: 24px; }
     .neudark-button { border-radius: 20px; }
     .neudark-icon { border-radius: 16px; }
     .neudark-large { border-radius: 32px; }
     \`\`\`

4. **紫色强调系统**
   - 主强调色：#bb86fc（紫色）
   - 次强调色：#03dac6（青色，可选）
   - 使用在：标题、图标、高亮、活动状态
   - 示例：
     \`\`\`css
     .neudark-accent {
       color: #bb86fc;
     }

     .neudark-icon {
       color: #bb86fc;
       background: #1a1a2e;
       box-shadow:
         -4px -4px 12px rgba(255, 255, 255, 0.05),
         4px 4px 12px rgba(0, 0, 0, 0.4);
     }

     .neudark-link:hover {
       color: #bb86fc;
     }
     \`\`\`

5. **微妙的立体层次**
   - 元素与背景同色，靠阴影区分
   - 避免使用边框（除非必要）
   - 层次通过阴影深浅表现
   - 示例：
     \`\`\`css
     /* 第一层：平面 */
     .neudark-flat {
       background: #1a1a2e;
     }

     /* 第二层：轻微凸起 */
     .neudark-layer-1 {
       background: #1a1a2e;
       box-shadow:
         -4px -4px 12px rgba(255, 255, 255, 0.04),
         4px 4px 12px rgba(0, 0, 0, 0.3);
     }

     /* 第三层：明显凸起 */
     .neudark-layer-2 {
       background: #1a1a2e;
       box-shadow:
         -8px -8px 16px rgba(255, 255, 255, 0.05),
         8px 8px 16px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

6. **平滑的交互过渡**
   - 悬停时阴影增强
   - 点击时切换为凹陷效果
   - 过渡时间：0.3s
   - 示例：
     \`\`\`css
     .neudark-button {
       background: #1a1a2e;
       border-radius: 20px;
       padding: 0.75rem 1.5rem;
       color: #e0e0e0;
       box-shadow:
         -6px -6px 14px rgba(255, 255, 255, 0.05),
         6px 6px 14px rgba(0, 0, 0, 0.4);
       transition: all 0.3s ease;
       cursor: pointer;
     }

     .neudark-button:hover {
       box-shadow:
         -8px -8px 18px rgba(255, 255, 255, 0.06),
         8px 8px 18px rgba(0, 0, 0, 0.45);
     }

     .neudark-button:active {
       box-shadow:
         inset -4px -4px 12px rgba(255, 255, 255, 0.05),
         inset 4px 4px 12px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

**配色方案**

主要颜色：
- 深紫蓝背景：#1a1a2e
- 浅灰文字：#e0e0e0
- 次要灰文字：#a0a0a0
- 紫色强调：#bb86fc
- 青色次要强调：#03dac6（可选）

阴影颜色：
- 浅色高光：rgba(255, 255, 255, 0.05-0.07)
- 深色阴影：rgba(0, 0, 0, 0.4-0.5)

**关键 CSS 类示例**

\`\`\`css
/* 新拟态暗色卡片 */
.neudark-card {
  padding: 2rem;
  background: #1a1a2e;
  border-radius: 24px;
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

/* 新拟态暗色按钮 */
.neudark-button {
  padding: 0.75rem 1.5rem;
  background: #1a1a2e;
  border: none;
  border-radius: 20px;
  color: #e0e0e0;
  font-weight: 600;
  box-shadow:
    -6px -6px 14px rgba(255, 255, 255, 0.05),
    6px 6px 14px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.neudark-button:hover {
  color: #bb86fc;
  box-shadow:
    -8px -8px 18px rgba(255, 255, 255, 0.06),
    8px 8px 18px rgba(0, 0, 0, 0.45);
}

.neudark-button:active {
  box-shadow:
    inset -4px -4px 12px rgba(255, 255, 255, 0.05),
    inset 4px 4px 12px rgba(0, 0, 0, 0.4);
}

/* 新拟态暗色输入框（凹陷） */
.neudark-input {
  width: 100%;
  padding: 0.75rem;
  background: #1a1a2e;
  border: none;
  border-radius: 16px;
  color: #e0e0e0;
  font-size: 1rem;
  box-shadow:
    inset -4px -4px 12px rgba(255, 255, 255, 0.05),
    inset 4px 4px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neudark-input:focus {
  outline: none;
  box-shadow:
    inset -4px -4px 12px rgba(255, 255, 255, 0.05),
    inset 4px 4px 12px rgba(0, 0, 0, 0.4),
    0 0 0 2px rgba(187, 134, 252, 0.3);
}

.neudark-input::placeholder {
  color: #666666;
}

/* 新拟态暗色图标容器 */
.neudark-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  border-radius: 16px;
  color: #bb86fc;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.05),
    4px 4px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neudark-icon:hover {
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.06),
    6px 6px 16px rgba(0, 0, 0, 0.45);
}

/* 新拟态暗色开关 */
.neudark-switch {
  width: 56px;
  height: 28px;
  background: #1a1a2e;
  border-radius: 28px;
  position: relative;
  box-shadow:
    inset -3px -3px 8px rgba(255, 255, 255, 0.05),
    inset 3px 3px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.neudark-switch-knob {
  width: 22px;
  height: 22px;
  background: #1a1a2e;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.05),
    2px 2px 6px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neudark-switch.active {
  box-shadow:
    inset -3px -3px 8px rgba(187, 134, 252, 0.1),
    inset 3px 3px 8px rgba(0, 0, 0, 0.4);
}

.neudark-switch.active .neudark-switch-knob {
  left: 31px;
  background: #bb86fc;
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.1),
    2px 2px 6px rgba(0, 0, 0, 0.4);
}

/* 新拟态暗色进度条 */
.neudark-progress {
  width: 100%;
  height: 8px;
  background: #1a1a2e;
  border-radius: 8px;
  box-shadow:
    inset -2px -2px 6px rgba(255, 255, 255, 0.05),
    inset 2px 2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.neudark-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #bb86fc, #03dac6);
  border-radius: 8px;
  box-shadow:
    0 2px 8px rgba(187, 134, 252, 0.4);
  transition: width 0.3s ease;
}
\`\`\`

**间距系统**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)

**重要提示**
- ✅ 元素背景必须与主背景相同（#1a1a2e）
- ✅ 使用柔和的双向阴影创造立体感
- ✅ 圆角要大（24px 左右）
- ✅ 紫色作为唯一的强调色
- ✅ 交互时阴影要有明显变化
- ❌ 避免使用边框（除非特殊需要）
- ❌ 避免阴影对比度过高
- ❌ 避免使用鲜艳的多种颜色
- ❌ 避免尖锐的边角
- 整体氛围应该优雅、现代、微妙
- 立体感要明显但不夸张`,

    'en-US': `Create a Neumorphism Dark style interface using TailwindCSS, using soft shadows and highlights on dark background to create subtle elegant depth.

**Core Design Requirements**

1. **Dark Background System**
   - Main background: #1a1a2e (deep purple-blue)
   - Element background: same as main #1a1a2e
   - Text color: #e0e0e0 (light gray), #a0a0a0 (secondary gray)
   - Accent color: #bb86fc (purple)
   - Example:
     \`\`\`css
     body {
       background: #1a1a2e;
       color: #e0e0e0;
     }

     .neudark-element {
       background: #1a1a2e;
     }
     \`\`\`

2. **Soft Bi-directional Shadows**
   - Light highlight: rgba(255, 255, 255, 0.05-0.07) top-left
   - Dark shadow: rgba(0, 0, 0, 0.4-0.5) bottom-right
   - Shadow offset: -8px -8px (highlight) and 8px 8px (shadow)
   - Shadow blur: 16px-20px
   - Example:
     \`\`\`css
     /* Raised effect (floating) */
     .neudark-raised {
       background: #1a1a2e;
       border-radius: 24px;
       box-shadow:
         -8px -8px 16px rgba(255, 255, 255, 0.05),
         8px 8px 16px rgba(0, 0, 0, 0.4);
     }

     /* Enhanced on hover */
     .neudark-raised:hover {
       box-shadow:
         -12px -12px 20px rgba(255, 255, 255, 0.07),
         12px 12px 20px rgba(0, 0, 0, 0.5);
     }

     /* Inset effect (sunken) */
     .neudark-inset {
       background: #1a1a2e;
       border-radius: 24px;
       box-shadow:
         inset -4px -4px 12px rgba(255, 255, 255, 0.05),
         inset 4px 4px 12px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

3. **Large Border Radius**
   - Standard radius: 24px
   - Small elements: 16px
   - Large cards: 32px
   - Buttons: 20px
   - Example:
     \`\`\`css
     .neudark-card { border-radius: 24px; }
     .neudark-button { border-radius: 20px; }
     .neudark-icon { border-radius: 16px; }
     .neudark-large { border-radius: 32px; }
     \`\`\`

4. **Purple Accent System**
   - Main accent: #bb86fc (purple)
   - Secondary accent: #03dac6 (cyan, optional)
   - Use in: headings, icons, highlights, active states
   - Example:
     \`\`\`css
     .neudark-accent {
       color: #bb86fc;
     }

     .neudark-icon {
       color: #bb86fc;
       background: #1a1a2e;
       box-shadow:
         -4px -4px 12px rgba(255, 255, 255, 0.05),
         4px 4px 12px rgba(0, 0, 0, 0.4);
     }

     .neudark-link:hover {
       color: #bb86fc;
     }
     \`\`\`

5. **Subtle Depth Layers**
   - Elements same color as background, differentiated by shadows
   - Avoid borders (unless necessary)
   - Hierarchy shown through shadow depth
   - Example:
     \`\`\`css
     /* Layer 1: Flat */
     .neudark-flat {
       background: #1a1a2e;
     }

     /* Layer 2: Slight raise */
     .neudark-layer-1 {
       background: #1a1a2e;
       box-shadow:
         -4px -4px 12px rgba(255, 255, 255, 0.04),
         4px 4px 12px rgba(0, 0, 0, 0.3);
     }

     /* Layer 3: Clear raise */
     .neudark-layer-2 {
       background: #1a1a2e;
       box-shadow:
         -8px -8px 16px rgba(255, 255, 255, 0.05),
         8px 8px 16px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

6. **Smooth Interactive Transitions**
   - Enhanced shadows on hover
   - Switch to inset on click
   - Transition time: 0.3s
   - Example:
     \`\`\`css
     .neudark-button {
       background: #1a1a2e;
       border-radius: 20px;
       padding: 0.75rem 1.5rem;
       color: #e0e0e0;
       box-shadow:
         -6px -6px 14px rgba(255, 255, 255, 0.05),
         6px 6px 14px rgba(0, 0, 0, 0.4);
       transition: all 0.3s ease;
       cursor: pointer;
     }

     .neudark-button:hover {
       box-shadow:
         -8px -8px 18px rgba(255, 255, 255, 0.06),
         8px 8px 18px rgba(0, 0, 0, 0.45);
     }

     .neudark-button:active {
       box-shadow:
         inset -4px -4px 12px rgba(255, 255, 255, 0.05),
         inset 4px 4px 12px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

**Color Scheme**

Primary colors:
- Deep purple-blue background: #1a1a2e
- Light gray text: #e0e0e0
- Secondary gray text: #a0a0a0
- Purple accent: #bb86fc
- Cyan secondary accent: #03dac6 (optional)

Shadow colors:
- Light highlight: rgba(255, 255, 255, 0.05-0.07)
- Dark shadow: rgba(0, 0, 0, 0.4-0.5)

**Key CSS Class Examples**

\`\`\`css
/* Neumorphism Dark Card */
.neudark-card {
  padding: 2rem;
  background: #1a1a2e;
  border-radius: 24px;
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

/* Neumorphism Dark Button */
.neudark-button {
  padding: 0.75rem 1.5rem;
  background: #1a1a2e;
  border: none;
  border-radius: 20px;
  color: #e0e0e0;
  font-weight: 600;
  box-shadow:
    -6px -6px 14px rgba(255, 255, 255, 0.05),
    6px 6px 14px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.neudark-button:hover {
  color: #bb86fc;
  box-shadow:
    -8px -8px 18px rgba(255, 255, 255, 0.06),
    8px 8px 18px rgba(0, 0, 0, 0.45);
}

.neudark-button:active {
  box-shadow:
    inset -4px -4px 12px rgba(255, 255, 255, 0.05),
    inset 4px 4px 12px rgba(0, 0, 0, 0.4);
}

/* Neumorphism Dark Input (inset) */
.neudark-input {
  width: 100%;
  padding: 0.75rem;
  background: #1a1a2e;
  border: none;
  border-radius: 16px;
  color: #e0e0e0;
  font-size: 1rem;
  box-shadow:
    inset -4px -4px 12px rgba(255, 255, 255, 0.05),
    inset 4px 4px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neudark-input:focus {
  outline: none;
  box-shadow:
    inset -4px -4px 12px rgba(255, 255, 255, 0.05),
    inset 4px 4px 12px rgba(0, 0, 0, 0.4),
    0 0 0 2px rgba(187, 134, 252, 0.3);
}

.neudark-input::placeholder {
  color: #666666;
}

/* Neumorphism Dark Icon Container */
.neudark-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  border-radius: 16px;
  color: #bb86fc;
  box-shadow:
    -4px -4px 12px rgba(255, 255, 255, 0.05),
    4px 4px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neudark-icon:hover {
  box-shadow:
    -6px -6px 16px rgba(255, 255, 255, 0.06),
    6px 6px 16px rgba(0, 0, 0, 0.45);
}

/* Neumorphism Dark Switch */
.neudark-switch {
  width: 56px;
  height: 28px;
  background: #1a1a2e;
  border-radius: 28px;
  position: relative;
  box-shadow:
    inset -3px -3px 8px rgba(255, 255, 255, 0.05),
    inset 3px 3px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.neudark-switch-knob {
  width: 22px;
  height: 22px;
  background: #1a1a2e;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.05),
    2px 2px 6px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neudark-switch.active {
  box-shadow:
    inset -3px -3px 8px rgba(187, 134, 252, 0.1),
    inset 3px 3px 8px rgba(0, 0, 0, 0.4);
}

.neudark-switch.active .neudark-switch-knob {
  left: 31px;
  background: #bb86fc;
  box-shadow:
    -2px -2px 6px rgba(255, 255, 255, 0.1),
    2px 2px 6px rgba(0, 0, 0, 0.4);
}

/* Neumorphism Dark Progress Bar */
.neudark-progress {
  width: 100%;
  height: 8px;
  background: #1a1a2e;
  border-radius: 8px;
  box-shadow:
    inset -2px -2px 6px rgba(255, 255, 255, 0.05),
    inset 2px 2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.neudark-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #bb86fc, #03dac6);
  border-radius: 8px;
  box-shadow:
    0 2px 8px rgba(187, 134, 252, 0.4);
  transition: width 0.3s ease;
}
\`\`\`

**Spacing System**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)

**Important Notes**
- ✅ Element background MUST match main background (#1a1a2e)
- ✅ Use soft bi-directional shadows for depth
- ✅ Large border-radius (around 24px)
- ✅ Purple as only accent color
- ✅ Obvious shadow changes on interaction
- ❌ Avoid borders (unless specifically needed)
- ❌ Avoid high shadow contrast
- ❌ Avoid bright multiple colors
- ❌ Avoid sharp corners
- Overall atmosphere should be elegant, modern, subtle
- Depth should be noticeable but not exaggerated`
  },

  stylePrompt: {
    'zh-CN': `Neumorphism Dark 是新拟态设计的暗色版本，适合现代暗色主题应用。使用柔和的阴影和高光在深色背景上创造微妙的立体感，营造优雅、现代的氛围。`,
    'en-US': `Neumorphism Dark is the dark version of neomorphism, ideal for modern dark-themed applications. Uses soft shadows and highlights on dark backgrounds to create subtle depth, creating an elegant, modern atmosphere.`
  }
}

export default neumorphismDark


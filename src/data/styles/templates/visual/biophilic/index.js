// Biophilic Design Style

import { demoHTML, customStyles } from './Demo'

export const biophilic = {
  id: 'visual-biophilic',
  title: 'styles.visual.biophilic.title',
  description: 'styles.visual.biophilic.description',

  demoHTML,
  customStyles,

  fullPageHTML: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Biophilic Design</title>
</head>
<body style="margin:0;font-family:system-ui;background:linear-gradient(135deg,#e8f5e9,#c8e6c9);padding:2rem;">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:3rem;">
      <h1 style="font-size:3rem;color:#2e7d32;margin:0 0 1rem 0;">Biophilic Design</h1>
      <p style="font-size:1.2rem;color:#558b2f;margin:0;">Connect with Nature</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
      <div style="padding:2rem;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-radius:32px;box-shadow:0 8px 32px rgba(76,175,80,0.15);">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,#81c784,#66bb6a);border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;color:white;font-size:1.5rem;">🌿</div>
        <h3 style="color:#2e7d32;margin:0 0 0.5rem 0;text-align:center;">Natural Elements</h3>
        <p style="color:#558b2f;margin:0;text-align:center;line-height:1.7;">Organic shapes, earthy tones, natural textures</p>
      </div>
      <div style="padding:2rem;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-radius:32px;box-shadow:0 8px 32px rgba(76,175,80,0.15);">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,#aed581,#9ccc65);border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;color:white;font-size:1.5rem;">🍃</div>
        <h3 style="color:#2e7d32;margin:0 0 0.5rem 0;text-align:center;">Harmonious Living</h3>
        <p style="color:#558b2f;margin:0;text-align:center;line-height:1.7;">Bringing the outdoors in, sustainable design</p>
      </div>
    </div>
  </div>
</body>
</html>`,

  fullPageStyles: ``,

  previews: [
    {
      id: 'biophilic',
      name: 'Biophilic',
      type: 'full',
      previewId: 'biophilic'
    }
  ],

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建 Biophilic Design（亲生物设计）风格界面，将自然元素融入数字界面，创造和谐宁静的氛围。

**核心设计要求**

1. **自然绿色系配色**
   - 主绿色：#2e7d32（森林绿）
   - 中绿色：#4caf50（叶绿）
   - 浅绿色：#66bb6a, #81c784（嫩绿）
   - 辅助色：#558b2f（深绿）
   - 背景渐变：#e8f5e9 → #c8e6c9（浅绿渐变）
   - 示例：
     \`\`\`css
     body {
       background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
       color: #2e7d32;
     }

     .bio-primary {
       background: linear-gradient(135deg, #81c784, #66bb6a);
     }

     .bio-text {
       color: #558b2f;
     }
     \`\`\`

2. **有机形状和流动曲线**
   - 使用 border-radius 创造不规则圆角
   - Blob 形状动画（border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%）
   - 流动的曲线边框
   - 避免直角和硬边
   - 示例：
     \`\`\`css
     /* Blob 形状 */
     .bio-blob {
       width: 200px;
       height: 200px;
       background: rgba(129, 199, 132, 0.2);
       border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
       animation: blobFloat 8s ease-in-out infinite;
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

     /* 大圆角卡片 */
     .bio-card {
       border-radius: 32px;
     }
     \`\`\`

3. **柔和的渐变背景**
   - 使用绿色系渐变
   - 背景可以有轻微的动态变化
   - 使用半透明层创造深度
   - 示例：
     \`\`\`css
     /* 主背景渐变 */
     .bio-background {
       background: linear-gradient(135deg,
         #e8f5e9 0%,
         #c8e6c9 50%,
         #a5d6a7 100%);
     }

     /* 叠加半透明层 */
     .bio-overlay {
       background: rgba(255, 255, 255, 0.9);
       backdrop-filter: blur(10px);
     }
     \`\`\`

4. **自然纹理和图案**
   - 使用植物、叶子、树枝图案
   - 木纹、石纹等自然纹理
   - 水波纹效果
   - 示例：
     \`\`\`css
     /* 叶子图案装饰 */
     .bio-leaf-pattern::before {
       content: '🌿';
       font-size: 1.5rem;
       opacity: 0.3;
       position: absolute;
     }

     /* 有机纹理背景 */
     .bio-texture {
       background-image:
         radial-gradient(circle at 20% 30%, rgba(129, 199, 132, 0.1) 0%, transparent 50%),
         radial-gradient(circle at 80% 70%, rgba(102, 187, 106, 0.1) 0%, transparent 50%);
     }
     \`\`\`

5. **大圆角和柔和边缘**
   - 标准圆角：32px
   - 大卡片圆角：40px-48px
   - 圆形元素：50%
   - 所有元素避免尖角
   - 示例：
     \`\`\`css
     .bio-card { border-radius: 32px; }
     .bio-large-card { border-radius: 40px; }
     .bio-icon { border-radius: 50%; }
     .bio-button { border-radius: 24px; }
     \`\`\`

6. **自然光影效果**
   - 柔和的阴影，模拟自然光
   - 使用绿色调的阴影
   - 避免硬边阴影
   - 示例：
     \`\`\`css
     .bio-shadow {
       box-shadow:
         0 8px 32px rgba(76, 175, 80, 0.15),
         inset 0 1px 0 rgba(255, 255, 255, 0.5);
     }

     .bio-shadow:hover {
       box-shadow:
         0 12px 48px rgba(76, 175, 80, 0.2),
         inset 0 1px 0 rgba(255, 255, 255, 0.5);
     }
     \`\`\`

**配色方案**

主要绿色系：
- 深森林绿：#2e7d32
- 标准叶绿：#4caf50
- 中等绿：#66bb6a
- 浅嫩绿：#81c784
- 更浅绿：#aed581, #9ccc65

背景色系：
- 极浅绿：#e8f5e9
- 浅绿背景：#c8e6c9
- 中浅绿：#a5d6a7

中性色：
- 白色：#ffffff
- 浅灰绿：#f1f8e9
- 深绿文字：#558b2f

**关键 CSS 类示例**

\`\`\`css
/* 亲生物卡片 */
.bio-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 32px;
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

/* 亲生物按钮 */
.bio-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #81c784, #66bb6a);
  border: none;
  border-radius: 24px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
}

.bio-button:hover {
  background: linear-gradient(135deg, #66bb6a, #4caf50);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(76, 175, 80, 0.4);
}

/* 亲生物图标容器 */
.bio-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #81c784, #66bb6a);
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
}

.bio-icon:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 6px 24px rgba(76, 175, 80, 0.4);
}

/* Blob 装饰元素 */
.bio-blob-decorator {
  position: absolute;
  background: rgba(129, 199, 132, 0.1);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: blobFloat 8s ease-in-out infinite;
}

@keyframes blobFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  33% {
    transform: translate(20px, -20px) rotate(120deg);
    border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%;
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
    border-radius: 50% 50% 60% 40% / 70% 30% 50% 60%;
  }
}

/* 亲生物输入框 */
.bio-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #c8e6c9;
  border-radius: 16px;
  color: #2e7d32;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.bio-input:focus {
  outline: none;
  border-color: #81c784;
  background: #ffffff;
  box-shadow:
    0 0 0 3px rgba(129, 199, 132, 0.2),
    0 4px 16px rgba(76, 175, 80, 0.15);
}

.bio-input::placeholder {
  color: #a5d6a7;
}

/* 亲生物徽章 */
.bio-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #aed581, #9ccc65);
  border-radius: 20px;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(129, 199, 132, 0.3);
}

/* 亲生物分隔线 */
.bio-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    rgba(129, 199, 132, 0.3) 20%,
    rgba(129, 199, 132, 0.3) 80%,
    transparent);
  margin: 2rem 0;
}

/* 自然光效果 */
.bio-glow {
  position: relative;
}

.bio-glow::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(129, 199, 132, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bio-glow:hover::after {
  opacity: 1;
}
\`\`\`

**间距系统**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

**自然元素建议**
- 使用植物图标：🌿 🍃 🌱 🌳 🌲
- 使用花朵图标：🌸 🌺 🌻 🌷
- 使用自然图案作为装饰
- 可以使用 SVG 自然图案

**重要提示**
- ✅ 使用自然的绿色系配色
- ✅ 圆角要大（32px+）
- ✅ 使用有机形状和流动曲线
- ✅ 添加 Blob 装饰元素
- ✅ 阴影要柔和，带有绿色调
- ✅ 使用自然元素图标和图案
- ❌ 避免尖锐的边角
- ❌ 避免冷色调（蓝色、灰色）
- ❌ 避免硬边和几何形状
- ❌ 避免高对比度
- 整体氛围应该自然、和谐、平静
- 让用户感受到与自然的连接`,

    'en-US': `Create a Biophilic Design style interface using TailwindCSS, integrating natural elements into digital interface to create harmonious peaceful atmosphere.

**Core Design Requirements**

1. **Natural Green Color Scheme**
   - Main green: #2e7d32 (forest green)
   - Mid green: #4caf50 (leaf green)
   - Light green: #66bb6a, #81c784 (tender green)
   - Supporting: #558b2f (deep green)
   - Background gradient: #e8f5e9 → #c8e6c9 (light green gradient)
   - Example:
     \`\`\`css
     body {
       background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
       color: #2e7d32;
     }

     .bio-primary {
       background: linear-gradient(135deg, #81c784, #66bb6a);
     }

     .bio-text {
       color: #558b2f;
     }
     \`\`\`

2. **Organic Shapes and Flowing Curves**
   - Use border-radius to create irregular rounded corners
   - Blob shape animation (border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%)
   - Flowing curved borders
   - Avoid right angles and hard edges
   - Example:
     \`\`\`css
     /* Blob shape */
     .bio-blob {
       width: 200px;
       height: 200px;
       background: rgba(129, 199, 132, 0.2);
       border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
       animation: blobFloat 8s ease-in-out infinite;
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

     /* Large rounded card */
     .bio-card {
       border-radius: 32px;
     }
     \`\`\`

3. **Soft Gradient Backgrounds**
   - Use green gradient backgrounds
   - Background can have subtle dynamic changes
   - Use semi-transparent layers for depth
   - Example:
     \`\`\`css
     /* Main background gradient */
     .bio-background {
       background: linear-gradient(135deg,
         #e8f5e9 0%,
         #c8e6c9 50%,
         #a5d6a7 100%);
     }

     /* Semi-transparent overlay */
     .bio-overlay {
       background: rgba(255, 255, 255, 0.9);
       backdrop-filter: blur(10px);
     }
     \`\`\`

4. **Natural Textures and Patterns**
   - Use plants, leaves, branch patterns
   - Wood grain, stone texture natural textures
   - Water ripple effects
   - Example:
     \`\`\`css
     /* Leaf pattern decoration */
     .bio-leaf-pattern::before {
       content: '🌿';
       font-size: 1.5rem;
       opacity: 0.3;
       position: absolute;
     }

     /* Organic texture background */
     .bio-texture {
       background-image:
         radial-gradient(circle at 20% 30%, rgba(129, 199, 132, 0.1) 0%, transparent 50%),
         radial-gradient(circle at 80% 70%, rgba(102, 187, 106, 0.1) 0%, transparent 50%);
     }
     \`\`\`

5. **Large Border Radius and Soft Edges**
   - Standard radius: 32px
   - Large cards: 40px-48px
   - Circular elements: 50%
   - All elements avoid sharp corners
   - Example:
     \`\`\`css
     .bio-card { border-radius: 32px; }
     .bio-large-card { border-radius: 40px; }
     .bio-icon { border-radius: 50%; }
     .bio-button { border-radius: 24px; }
     \`\`\`

6. **Natural Light and Shadow Effects**
   - Soft shadows simulating natural light
   - Use green-toned shadows
   - Avoid hard-edged shadows
   - Example:
     \`\`\`css
     .bio-shadow {
       box-shadow:
         0 8px 32px rgba(76, 175, 80, 0.15),
         inset 0 1px 0 rgba(255, 255, 255, 0.5);
     }

     .bio-shadow:hover {
       box-shadow:
         0 12px 48px rgba(76, 175, 80, 0.2),
         inset 0 1px 0 rgba(255, 255, 255, 0.5);
     }
     \`\`\`

**Color Scheme**

Primary green series:
- Deep forest green: #2e7d32
- Standard leaf green: #4caf50
- Mid green: #66bb6a
- Light tender green: #81c784
- Lighter green: #aed581, #9ccc65

Background colors:
- Very light green: #e8f5e9
- Light green background: #c8e6c9
- Mid-light green: #a5d6a7

Neutral colors:
- White: #ffffff
- Light gray-green: #f1f8e9
- Deep green text: #558b2f

**Key CSS Class Examples**

\`\`\`css
/* Biophilic Card */
.bio-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 32px;
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

/* Biophilic Button */
.bio-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #81c784, #66bb6a);
  border: none;
  border-radius: 24px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
}

.bio-button:hover {
  background: linear-gradient(135deg, #66bb6a, #4caf50);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(76, 175, 80, 0.4);
}

/* Biophilic Icon Container */
.bio-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #81c784, #66bb6a);
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
}

.bio-icon:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 6px 24px rgba(76, 175, 80, 0.4);
}

/* Blob Decorator Element */
.bio-blob-decorator {
  position: absolute;
  background: rgba(129, 199, 132, 0.1);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: blobFloat 8s ease-in-out infinite;
}

@keyframes blobFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  33% {
    transform: translate(20px, -20px) rotate(120deg);
    border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%;
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
    border-radius: 50% 50% 60% 40% / 70% 30% 50% 60%;
  }
}

/* Biophilic Input */
.bio-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #c8e6c9;
  border-radius: 16px;
  color: #2e7d32;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.bio-input:focus {
  outline: none;
  border-color: #81c784;
  background: #ffffff;
  box-shadow:
    0 0 0 3px rgba(129, 199, 132, 0.2),
    0 4px 16px rgba(76, 175, 80, 0.15);
}

.bio-input::placeholder {
  color: #a5d6a7;
}

/* Biophilic Badge */
.bio-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #aed581, #9ccc65);
  border-radius: 20px;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(129, 199, 132, 0.3);
}

/* Biophilic Divider */
.bio-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    rgba(129, 199, 132, 0.3) 20%,
    rgba(129, 199, 132, 0.3) 80%,
    transparent);
  margin: 2rem 0;
}

/* Natural Glow Effect */
.bio-glow {
  position: relative;
}

.bio-glow::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(129, 199, 132, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bio-glow:hover::after {
  opacity: 1;
}
\`\`\`

**Spacing System**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

**Natural Element Suggestions**
- Use plant icons: 🌿 🍃 🌱 🌳 🌲
- Use flower icons: 🌸 🌺 🌻 🌷
- Use natural patterns as decorations
- Can use SVG natural patterns

**Important Notes**
- ✅ Use natural green color scheme
- ✅ Large border-radius (32px+)
- ✅ Use organic shapes and flowing curves
- ✅ Add blob decorator elements
- ✅ Soft shadows with green tone
- ✅ Use natural element icons and patterns
- ❌ Avoid sharp corners
- ❌ Avoid cool colors (blue, gray)
- ❌ Avoid hard edges and geometric shapes
- ❌ Avoid high contrast
- Overall atmosphere should be natural, harmonious, peaceful
- Let users feel connection with nature`
  },

  stylePrompt: {
    'zh-CN': `Biophilic Design（亲生物设计）将自然元素融入数字界面，使用绿色调、有机形状、自然纹理创造和谐宁静的氛围。适合健康、环保、生活方式类应用，帮助用户在数字世界中感受自然的平静和美好。`,
    'en-US': `Biophilic Design integrates natural elements into digital interfaces, using green tones, organic shapes, and natural textures to create harmonious and peaceful atmosphere. Ideal for health, environmental, lifestyle applications, helping users feel the calm and beauty of nature in the digital world.`
  }
}

export default biophilic


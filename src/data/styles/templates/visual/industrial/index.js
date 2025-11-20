// Industrial Design Style

import { demoHTML, customStyles } from './Demo'

export const industrial = {
  id: 'visual-industrial',
  title: 'styles.visual.industrial.title',
  description: 'styles.visual.industrial.description',

  demoHTML,
  customStyles,

  fullPageHTML: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Industrial Design</title>
</head>
<body style="margin:0;font-family:Arial,sans-serif;background:#2c3e50;color:#ecf0f1;padding:2rem;">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="border-left:4px solid #e74c3c;padding-left:1rem;margin-bottom:2rem;">
      <h1 style="font-size:3rem;margin:0;text-transform:uppercase;letter-spacing:0.05em;">Industrial Design</h1>
      <p style="color:#95a5a6;margin:0.5rem 0 0 0;">Raw | Functional | Utilitarian</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;">
      <div style="padding:1.5rem;background:#34495e;border:2px solid #2c3e50;border-top:3px solid #e74c3c;">
        <div style="color:#e74c3c;font-size:0.7rem;font-weight:700;letter-spacing:0.1em;margin-bottom:1rem;font-family:monospace;">FEATURE-01</div>
        <h3 style="margin:0 0 0.5rem 0;text-transform:uppercase;letter-spacing:0.03em;">Raw Materials</h3>
        <p style="color:#95a5a6;margin:0;font-size:0.9rem;line-height:1.6;">Exposed structure, honest materials, functional aesthetics</p>
      </div>
      <div style="padding:1.5rem;background:#34495e;border:2px solid #2c3e50;border-top:3px solid #e74c3c;">
        <div style="color:#e74c3c;font-size:0.7rem;font-weight:700;letter-spacing:0.1em;margin-bottom:1rem;font-family:monospace;">FEATURE-02</div>
        <h3 style="margin:0 0 0.5rem 0;text-transform:uppercase;letter-spacing:0.03em;">Bold Typography</h3>
        <p style="color:#95a5a6;margin:0;font-size:0.9rem;line-height:1.6;">Strong, geometric fonts with utilitarian feel</p>
      </div>
    </div>
  </div>
</body>
</html>`,

  fullPageStyles: ``,

  previews: [
    {
      id: 'industrial',
      name: 'Industrial',
      type: 'full',
      previewId: 'industrial'
    }
  ],

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建 Industrial Design（工业设计）风格界面，通过深色调、粗体字、网格纹理和金属质感营造专业、可靠的工业氛围。

**核心设计要求**

1. **深色工业配色**
   - 主背景：#2c3e50（深蓝灰）
   - 次背景：#34495e（中蓝灰）
   - 强调色：#e74c3c（工业红）
   - 文字色：#ecf0f1（浅灰白）、#95a5a6（次要灰）
   - 边框色：#2c3e50（深色边框）
   - 示例：
     \`\`\`css
     .industrial-container {
       background: #2c3e50;
       color: #ecf0f1;
       border: 2px solid #34495e;
     }

     .industrial-accent {
       border-left: 4px solid #e74c3c;
       background: #34495e;
     }
     \`\`\`

2. **粗体大写字体系统**
   - 标题：全部大写（text-transform: uppercase）
   - 字重：700-900（font-weight）
   - 字间距：0.03em-0.1em（letter-spacing）
   - 字体：Arial Black, Helvetica, sans-serif
   - 示例：
     \`\`\`css
     .industrial-title {
       font-size: 2.5rem;
       font-weight: 900;
       text-transform: uppercase;
       letter-spacing: 0.05em;
       color: #ecf0f1;
     }

     .industrial-label {
       font-size: 0.75rem;
       font-weight: 700;
       text-transform: uppercase;
       letter-spacing: 0.1em;
       color: #e74c3c;
       font-family: 'Courier New', monospace;
     }
     \`\`\`

3. **等宽字体标签和编号系统**
   - 使用 Courier New 或 monospace 字体
   - 编号格式：SYSTEM-01, MODULE-A1, ID: XXX-000
   - 标签样式：小字号、大写、宽字间距
   - 示例：
     \`\`\`css
     .industrial-code {
       font-family: 'Courier New', monospace;
       font-size: 0.7rem;
       font-weight: 700;
       letter-spacing: 0.1em;
       color: #e74c3c;
       background: rgba(231, 76, 60, 0.1);
       padding: 0.25rem 0.75rem;
       border: 1px solid #e74c3c;
     }

     .industrial-id {
       font-family: 'Courier New', monospace;
       font-size: 0.75rem;
       color: #7f8c8d;
       letter-spacing: 0.05em;
     }
     \`\`\`

4. **网格纹理背景**
   - 使用 repeating-linear-gradient 创建网格
   - 网格线细且透明（rgba(255,255,255,0.02-0.03)）
   - 网格大小：2px-4px
   - 示例：
     \`\`\`css
     .industrial-grid {
       background:
         repeating-linear-gradient(
           90deg,
           transparent,
           transparent 2px,
           rgba(255,255,255,0.03) 2px,
           rgba(255,255,255,0.03) 4px
         ),
         repeating-linear-gradient(
           0deg,
           transparent,
           transparent 2px,
           rgba(255,255,255,0.03) 2px,
           rgba(255,255,255,0.03) 4px
         ),
         #2c3e50;
     }
     \`\`\`

5. **功能性边框系统**
   - 使用粗细不同的边框强调层级
   - 顶部或左侧使用红色强调边框
   - 边框宽度：2px-4px
   - 示例：
     \`\`\`css
     .industrial-card {
       padding: 1.5rem;
       background: #34495e;
       border: 2px solid #2c3e50;
       border-top: 3px solid #e74c3c;
     }

     .industrial-section {
       border-left: 4px solid #e74c3c;
       padding-left: 1rem;
     }
     \`\`\`

6. **金属质感和阴影**
   - 使用轻微的内阴影创造金属质感
   - 外阴影深色且柔和
   - 避免过于华丽的效果
   - 示例：
     \`\`\`css
     .industrial-metal {
       background: #34495e;
       box-shadow:
         0 4px 16px rgba(0, 0, 0, 0.3),
         inset 0 1px 0 rgba(255, 255, 255, 0.1);
     }

     .industrial-button:active {
       box-shadow:
         inset 0 2px 8px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

**配色方案**

主要颜色：
- 深蓝灰背景：#2c3e50
- 中蓝灰次要：#34495e
- 工业红强调：#e74c3c
- 浅灰白文字：#ecf0f1
- 次要灰文字：#95a5a6
- 深灰文字：#7f8c8d

功能色（可选）：
- 警告黄：#f39c12
- 成功绿：#27ae60
- 信息蓝：#3498db

**关键 CSS 类示例**

\`\`\`css
/* 工业卡片 */
.industrial-card {
  padding: 1.5rem;
  background: #34495e;
  border: 2px solid #2c3e50;
  border-top: 3px solid #e74c3c;
  transition: all 0.3s ease;
}

.industrial-card:hover {
  border-top-color: #c0392b;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

/* 工业标题区 */
.industrial-header {
  border-left: 4px solid #e74c3c;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.industrial-header h1 {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  color: #ecf0f1;
}

.industrial-header p {
  color: #95a5a6;
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
}

/* 工业按钮 */
.industrial-button {
  padding: 0.75rem 1.5rem;
  background: #e74c3c;
  color: #ecf0f1;
  border: 2px solid #c0392b;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.industrial-button:hover {
  background: #c0392b;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
}

.industrial-button:active {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* 工业输入框 */
.industrial-input {
  width: 100%;
  padding: 0.75rem;
  background: #2c3e50;
  border: 2px solid #34495e;
  color: #ecf0f1;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.industrial-input:focus {
  outline: none;
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
}

/* 工业表格 */
.industrial-table {
  width: 100%;
  border-collapse: collapse;
  background: #34495e;
}

.industrial-table thead {
  background: #2c3e50;
  border-bottom: 3px solid #e74c3c;
}

.industrial-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ecf0f1;
}

.industrial-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #2c3e50;
  color: #ecf0f1;
}

.industrial-table tr:hover {
  background: rgba(231, 76, 60, 0.1);
}

/* 工业标签 */
.industrial-label {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(231, 76, 60, 0.2);
  border: 1px solid #e74c3c;
  color: #e74c3c;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
}

/* 网格背景容器 */
.industrial-grid-bg {
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.03) 2px,
      rgba(255,255,255,0.03) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.03) 2px,
      rgba(255,255,255,0.03) 4px
    ),
    #2c3e50;
}
\`\`\`

**间距系统**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)

**重要提示**
- ✅ 使用深色背景和高对比度文字
- ✅ 标题必须大写并使用粗体字
- ✅ 使用等宽字体的编号和标签系统
- ✅ 添加细微的网格纹理背景
- ✅ 使用红色作为唯一的强调色
- ❌ 避免圆角过大（最多 4px）
- ❌ 避免使用多种强调色
- ❌ 避免过度装饰和华丽效果
- ❌ 避免使用轻薄字体
- 强调功能性和实用性，而非装饰性
- 界面应该看起来坚固、可靠、专业`,

    'en-US': `Create an Industrial Design style interface using TailwindCSS, creating professional and reliable industrial atmosphere through dark tones, bold typography, grid textures, and metallic feel.

**Core Design Requirements**

1. **Dark Industrial Color Scheme**
   - Main background: #2c3e50 (deep blue-gray)
   - Secondary background: #34495e (mid blue-gray)
   - Accent color: #e74c3c (industrial red)
   - Text color: #ecf0f1 (light gray-white), #95a5a6 (secondary gray)
   - Border color: #2c3e50 (dark borders)
   - Example:
     \`\`\`css
     .industrial-container {
       background: #2c3e50;
       color: #ecf0f1;
       border: 2px solid #34495e;
     }

     .industrial-accent {
       border-left: 4px solid #e74c3c;
       background: #34495e;
     }
     \`\`\`

2. **Bold Uppercase Typography System**
   - Headings: all uppercase (text-transform: uppercase)
   - Font weight: 700-900 (font-weight)
   - Letter spacing: 0.03em-0.1em (letter-spacing)
   - Font family: Arial Black, Helvetica, sans-serif
   - Example:
     \`\`\`css
     .industrial-title {
       font-size: 2.5rem;
       font-weight: 900;
       text-transform: uppercase;
       letter-spacing: 0.05em;
       color: #ecf0f1;
     }

     .industrial-label {
       font-size: 0.75rem;
       font-weight: 700;
       text-transform: uppercase;
       letter-spacing: 0.1em;
       color: #e74c3c;
       font-family: 'Courier New', monospace;
     }
     \`\`\`

3. **Monospace Labels and Numbering System**
   - Use Courier New or monospace fonts
   - Number format: SYSTEM-01, MODULE-A1, ID: XXX-000
   - Label style: small size, uppercase, wide letter spacing
   - Example:
     \`\`\`css
     .industrial-code {
       font-family: 'Courier New', monospace;
       font-size: 0.7rem;
       font-weight: 700;
       letter-spacing: 0.1em;
       color: #e74c3c;
       background: rgba(231, 76, 60, 0.1);
       padding: 0.25rem 0.75rem;
       border: 1px solid #e74c3c;
     }

     .industrial-id {
       font-family: 'Courier New', monospace;
       font-size: 0.75rem;
       color: #7f8c8d;
       letter-spacing: 0.05em;
     }
     \`\`\`

4. **Grid Texture Background**
   - Use repeating-linear-gradient to create grid
   - Grid lines thin and transparent (rgba(255,255,255,0.02-0.03))
   - Grid size: 2px-4px
   - Example:
     \`\`\`css
     .industrial-grid {
       background:
         repeating-linear-gradient(
           90deg,
           transparent,
           transparent 2px,
           rgba(255,255,255,0.03) 2px,
           rgba(255,255,255,0.03) 4px
         ),
         repeating-linear-gradient(
           0deg,
           transparent,
           transparent 2px,
           rgba(255,255,255,0.03) 2px,
           rgba(255,255,255,0.03) 4px
         ),
         #2c3e50;
     }
     \`\`\`

5. **Functional Border System**
   - Use different border widths to emphasize hierarchy
   - Top or left side uses red accent border
   - Border width: 2px-4px
   - Example:
     \`\`\`css
     .industrial-card {
       padding: 1.5rem;
       background: #34495e;
       border: 2px solid #2c3e50;
       border-top: 3px solid #e74c3c;
     }

     .industrial-section {
       border-left: 4px solid #e74c3c;
       padding-left: 1rem;
     }
     \`\`\`

6. **Metallic Feel and Shadows**
   - Use subtle inset shadows for metallic feel
   - Outer shadows dark and soft
   - Avoid overly fancy effects
   - Example:
     \`\`\`css
     .industrial-metal {
       background: #34495e;
       box-shadow:
         0 4px 16px rgba(0, 0, 0, 0.3),
         inset 0 1px 0 rgba(255, 255, 255, 0.1);
     }

     .industrial-button:active {
       box-shadow:
         inset 0 2px 8px rgba(0, 0, 0, 0.4);
     }
     \`\`\`

**Color Scheme**

Primary colors:
- Deep blue-gray background: #2c3e50
- Mid blue-gray secondary: #34495e
- Industrial red accent: #e74c3c
- Light gray-white text: #ecf0f1
- Secondary gray text: #95a5a6
- Dark gray text: #7f8c8d

Functional colors (optional):
- Warning yellow: #f39c12
- Success green: #27ae60
- Info blue: #3498db

**Key CSS Class Examples**

\`\`\`css
/* Industrial Card */
.industrial-card {
  padding: 1.5rem;
  background: #34495e;
  border: 2px solid #2c3e50;
  border-top: 3px solid #e74c3c;
  transition: all 0.3s ease;
}

.industrial-card:hover {
  border-top-color: #c0392b;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

/* Industrial Header */
.industrial-header {
  border-left: 4px solid #e74c3c;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.industrial-header h1 {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  color: #ecf0f1;
}

.industrial-header p {
  color: #95a5a6;
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
}

/* Industrial Button */
.industrial-button {
  padding: 0.75rem 1.5rem;
  background: #e74c3c;
  color: #ecf0f1;
  border: 2px solid #c0392b;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.industrial-button:hover {
  background: #c0392b;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
}

.industrial-button:active {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* Industrial Input */
.industrial-input {
  width: 100%;
  padding: 0.75rem;
  background: #2c3e50;
  border: 2px solid #34495e;
  color: #ecf0f1;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.industrial-input:focus {
  outline: none;
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
}

/* Industrial Table */
.industrial-table {
  width: 100%;
  border-collapse: collapse;
  background: #34495e;
}

.industrial-table thead {
  background: #2c3e50;
  border-bottom: 3px solid #e74c3c;
}

.industrial-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ecf0f1;
}

.industrial-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #2c3e50;
  color: #ecf0f1;
}

.industrial-table tr:hover {
  background: rgba(231, 76, 60, 0.1);
}

/* Industrial Label */
.industrial-label {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(231, 76, 60, 0.2);
  border: 1px solid #e74c3c;
  color: #e74c3c;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
}

/* Grid Background Container */
.industrial-grid-bg {
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.03) 2px,
      rgba(255,255,255,0.03) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.03) 2px,
      rgba(255,255,255,0.03) 4px
    ),
    #2c3e50;
}
\`\`\`

**Spacing System**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)

**Important Notes**
- ✅ Use dark backgrounds with high contrast text
- ✅ Headings MUST be uppercase and use bold fonts
- ✅ Use monospace font for numbering and label systems
- ✅ Add subtle grid texture backgrounds
- ✅ Use red as the only accent color
- ❌ Avoid excessive border-radius (max 4px)
- ❌ Avoid using multiple accent colors
- ❌ Avoid over-decoration and fancy effects
- ❌ Avoid using thin fonts
- Emphasize functionality and utility, not decoration
- Interface should look sturdy, reliable, and professional`
  },

  stylePrompt: {
    'zh-CN': `Industrial Design 风格强调原始材料、功能性和实用主义美学。适合工业控制系统、技术文档、制造业应用等。使用深色调、粗体字、网格纹理和金属质感，营造专业、可靠的工业氛围。`,
    'en-US': `Industrial Design emphasizes raw materials, functionality and utilitarian aesthetics. Ideal for industrial control systems, technical documentation, manufacturing applications. Uses dark tones, bold fonts, grid textures and metallic feel to create professional, reliable industrial atmosphere.`
  }
}

export default industrial


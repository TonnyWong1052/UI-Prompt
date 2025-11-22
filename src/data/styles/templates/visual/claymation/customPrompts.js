// Claymation 风格的完整 customPrompt
// 符合 CUSTOM_PROMPT_TEMPLATE.md 規範

export const customPrompt = {
  'zh-CN': `请使用 TailwindCSS 创建一个 **Claymation（黏土定格动画）** 风格的界面，模拟经典定格动画的玩具质感和儿童友好的视觉语言。

**核心设计要求**

1. **极度圆润的形状系统**
   - 所有元素必须使用完全圆形或超大圆角
   - 按钮/卡片: \`rounded-full\`（完全圆形）或 \`rounded-3xl\`（24px 圆角）
   - 避免尖角，所有边缘柔和圆滑，模拟黏土玩具的手工感
   - CSS 实现:
     \`\`\`css
     .clay-button {
       border-radius: 9999px; /* 完全圆形 */
     }
     .clay-card {
       border-radius: 32px; /* 大圆角 */
     }
     \`\`\`

2. **糖果色渐变系统**
   - 使用明亮、高饱和度的渐变色，模拟彩色黏土玩具
   - 每个元素使用 145deg 角度的线性渐变（从浅到深）
   - 避免纯色，渐变营造玩具的立体感
   - CSS 实现:
     \`\`\`css
     .clay-pink {
       background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
     }
     .clay-yellow {
       background: linear-gradient(145deg, #FFD54F 0%, #FFA726 100%);
     }
     .clay-green {
       background: linear-gradient(145deg, #66BB6A 0%, #43A047 100%);
     }
     .clay-blue {
       background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
     }
     \`\`\`

3. **顶部高光效果 - 玩具光泽**
   - 每个元素必须在左上角添加白色半透明圆形高光
   - 高光位置: \`top: 15-20%, left: 20-30%\`
   - 使用 \`radial-gradient\` 创建柔和光晕
   - CSS 实现:
     \`\`\`css
     .clay-highlight {
       position: absolute;
       top: 15%;
       left: 25%;
       width: 40px;
       height: 40px;
       background: radial-gradient(
         circle, 
         rgba(255, 255, 255, 0.8) 0%, 
         rgba(255, 255, 255, 0) 70%
       );
       border-radius: 50%;
       pointer-events: none;
     }
     \`\`\`

4. **短而柔和的阴影系统**
   - 使用短距离、低透明度的阴影，模拟玩具在桌面上的投影
   - 默认阴影: \`0 6px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)\`
   - Hover 阴影: \`0 10px 20px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.15)\`
   - Active 阴影: \`0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)\`
   - CSS 实现:
     \`\`\`css
     .clay-element {
       box-shadow: 
         0 6px 12px rgba(0, 0, 0, 0.15),
         0 2px 4px rgba(0, 0, 0, 0.1);
       transition: all 0.3s ease;
     }
     .clay-element:hover {
       transform: translateY(-6px);
       box-shadow: 
         0 10px 20px rgba(0, 0, 0, 0.2),
         0 4px 8px rgba(0, 0, 0, 0.15);
     }
     \`\`\`

5. **角色化元素 - 表情系统**
   - 为界面元素添加拟人化特征（眼睛、嘴巴、腮红）
   - 眼睛: 12px 黑色圆形，间距 20px
   - 嘴巴: 使用 \`border-radius\` 创建弧形笑脸
   - 腮红: 粉色半透明椭圆（\`rgba(255,105,180,0.3)\`）
   - CSS 实现:
     \`\`\`css
     .clay-face {
       position: relative;
       width: 120px;
       height: 120px;
       border-radius: 50%;
     }
     .clay-eye {
       width: 12px;
       height: 12px;
       background: #2C3E50;
       border-radius: 50%;
     }
     .clay-mouth {
       width: 40px;
       height: 20px;
       border: 3px solid #2C3E50;
       border-top: none;
       border-radius: 0 0 40px 40px;
     }
     .clay-blush {
       width: 20px;
       height: 14px;
       background: rgba(255, 105, 180, 0.3);
       border-radius: 50%;
     }
     \`\`\`

6. **定格动画效果 - 轻微抖动**
   - 元素 hover 时触发轻微旋转和位移动画
   - 动画周期: 0.6-0.8s，使用 \`ease-in-out\`
   - 模拟定格动画的逐帧跳动感
   - CSS 实现:
     \`\`\`css
     @keyframes clay-wiggle {
       0%, 100% { transform: rotate(-1deg) translateY(0); }
       25% { transform: rotate(1deg) translateY(-2px); }
       50% { transform: rotate(-0.5deg) translateY(-1px); }
       75% { transform: rotate(0.5deg) translateY(-2px); }
     }
     .clay-toy:hover {
       animation: clay-wiggle 0.6s ease-in-out infinite;
     }
     \`\`\`

7. **挤压交互反馈**
   - 点击时元素略微变扁平（\`scale(0.95-0.98)\`）
   - 模拟按压黏土玩具的物理反馈
   - 同时减少阴影强度，营造按入桌面的效果
   - CSS 实现:
     \`\`\`css
     .clay-button:active {
       transform: translateY(2px) scale(0.98);
       box-shadow: 
         0 2px 4px rgba(0, 0, 0, 0.15),
         0 1px 2px rgba(0, 0, 0, 0.1);
     }
     \`\`\`

**配色方案（明亮糖果色系）**

主色调（玩具色彩）:
- 粉红玩具: #FF6B9D（浅粉）→ #F06292（深粉）
- 黄色玩具: #FFD54F（浅黄）→ #FFA726（深橙黄）
- 绿色玩具: #66BB6A（浅绿）→ #43A047（深绿）
- 蓝色玩具: #42A5F5（天蓝）→ #1E88E5（深蓝）
- 紫色玩具: #AB47BC（浅紫）→ #8E24AA（深紫）
- 橙色玩具: #FFA726（浅橙）→ #F57C00（深橙）

中性色（背景与文字）:
- 深棕色文字: #5D4E37（玩具标签色）
- 浅棕色辅助文字: #8B7355
- 白色背景: #FFFFFF
- 柔和背景渐变: \`from-blue-100 via-purple-50 to-pink-100\`

功能色（高光与阴影）:
- 高光白色: rgba(255, 255, 255, 0.8)
- 阴影黑色: rgba(0, 0, 0, 0.15)
- 腮红粉色: rgba(255, 105, 180, 0.3)

**关键 CSS 类示例**

\`\`\`css
/* 基础玩具元素 */
.clay-toy {
  position: relative;
  border-radius: 50%;
  background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.clay-toy:hover {
  transform: translateY(-6px) scale(1.05);
  animation: clay-wiggle 0.6s ease-in-out infinite;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

.clay-toy:active {
  transform: translateY(2px) scale(0.98);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 玩具按钮 */
.clay-button {
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
  color: white;
  background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.clay-button:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

.clay-button:active {
  transform: translateY(2px) scale(0.98);
}

/* 玩具卡片 */
.clay-card {
  position: relative;
  border-radius: 32px;
  padding: 24px;
  background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

.clay-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 
    0 16px 32px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

/* 角色脸部 */
.clay-face {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(145deg, #FFD54F 0%, #FFA726 100%);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
}

.clay-face .clay-highlight {
  position: absolute;
  top: 15%;
  left: 25%;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
}

.clay-face .clay-eyes {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
}

.clay-face .clay-eye {
  width: 12px;
  height: 12px;
  background: #2C3E50;
  border-radius: 50%;
}

.clay-face .clay-mouth {
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 20px;
  border: 3px solid #2C3E50;
  border-top: none;
  border-radius: 0 0 40px 40px;
}

/* 定格动画抖动 */
@keyframes clay-wiggle {
  0%, 100% { transform: rotate(-1deg) translateY(0); }
  25% { transform: rotate(1deg) translateY(-2px); }
  50% { transform: rotate(-0.5deg) translateY(-1px); }
  75% { transform: rotate(0.5deg) translateY(-2px); }
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
\`\`\`

**字体系统**

- 主标题字体: 'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold' (圆润童趣字体)
- 标题大小: 36-48px，font-weight: 800
- 正文大小: 16-20px，font-weight: 700
- 小标签: 12-14px，font-weight: 700
- 字母间距: 正常或略微负值（-0.5px ~ -1px），增强紧凑感
- 文字阴影: \`text-shadow: 0 2px 4px rgba(0,0,0,0.2)\`（增强玩具质感）

**间距系统（基于 8px 基础单位）**

- xs: 8px（按钮内间距）
- sm: 12px（小元素间隙）
- md: 16px（标准间距）
- lg: 24px（卡片间隙）
- xl: 32px（区块间隙）
- 2xl: 48px（章节间隙）

**图标系统**

- 优先使用 emoji 图标（🎨 🎵 ⚽ 🚀 🦁 🍰）
- 图标大小: 48-72px
- 图标阴影: \`filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15))\`
- Hover 时图标旋转: \`transform: rotate(5deg) scale(1.1)\`

**重要提示**

1. **绝对避免尖角**: 所有元素必须使用 \`rounded-full\` 或 \`rounded-3xl\`，没有例外
2. **必须使用渐变**: 禁止使用纯色背景，所有主要元素必须使用 145deg 线性渐变
3. **高光是必需的**: 每个玩具元素都必须包含左上角的白色高光圆形
4. **阴影必须柔和**: 阴影透明度不超过 0.2，模糊半径不超过 32px
5. **动画必须轻微**: 所有动画幅度控制在 ±2deg 旋转和 ±6px 位移内
6. **颜色必须明亮**: 使用高饱和度、高明度的糖果色，避免暗色或灰色
7. **字体必须圆润**: 优先使用 Comic Sans MS 或其他圆润字体
8. **元素必须可爱**: 适当添加表情（眼睛、嘴巴）增强亲和力
9. **交互必须有趣**: Hover 时添加抖动/弹跳动画，Active 时添加挤压效果
10. **背景必须柔和**: 使用渐变背景（如 \`from-blue-100 via-purple-50 to-pink-100\`），避免纯白
`,

  'en-US': `Please create a **Claymation (Clay Stop-Motion Animation)** style interface using TailwindCSS, simulating the toy-like texture and child-friendly visual language of classic stop-motion animation.

**Core Design Requirements**

1. **Extremely Rounded Shape System**
   - All elements must use fully rounded or extra-large border radius
   - Buttons/Cards: \`rounded-full\` (fully rounded) or \`rounded-3xl\` (24px radius)
   - Avoid sharp corners; all edges should be soft and smooth, mimicking handcrafted clay toys
   - CSS Implementation:
     \`\`\`css
     .clay-button {
       border-radius: 9999px; /* Fully rounded */
     }
     .clay-card {
       border-radius: 32px; /* Large radius */
     }
     \`\`\`

2. **Candy Color Gradient System**
   - Use bright, high-saturation gradients to mimic colorful clay toys
   - Each element uses 145deg linear gradient (light to dark)
   - Avoid solid colors; gradients create toy-like dimensionality
   - CSS Implementation:
     \`\`\`css
     .clay-pink {
       background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
     }
     .clay-yellow {
       background: linear-gradient(145deg, #FFD54F 0%, #FFA726 100%);
     }
     .clay-green {
       background: linear-gradient(145deg, #66BB6A 0%, #43A047 100%);
     }
     .clay-blue {
       background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
     }
     \`\`\`

3. **Top Highlight Effect - Toy Glossiness**
   - Every element must have a white semi-transparent circular highlight in the top-left
   - Highlight position: \`top: 15-20%, left: 20-30%\`
   - Use \`radial-gradient\` to create soft glow
   - CSS Implementation:
     \`\`\`css
     .clay-highlight {
       position: absolute;
       top: 15%;
       left: 25%;
       width: 40px;
       height: 40px;
       background: radial-gradient(
         circle, 
         rgba(255, 255, 255, 0.8) 0%, 
         rgba(255, 255, 255, 0) 70%
       );
       border-radius: 50%;
       pointer-events: none;
     }
     \`\`\`

4. **Short and Soft Shadow System**
   - Use short-distance, low-opacity shadows to mimic toys on a tabletop
   - Default shadow: \`0 6px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)\`
   - Hover shadow: \`0 10px 20px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.15)\`
   - Active shadow: \`0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)\`
   - CSS Implementation:
     \`\`\`css
     .clay-element {
       box-shadow: 
         0 6px 12px rgba(0, 0, 0, 0.15),
         0 2px 4px rgba(0, 0, 0, 0.1);
       transition: all 0.3s ease;
     }
     .clay-element:hover {
       transform: translateY(-6px);
       box-shadow: 
         0 10px 20px rgba(0, 0, 0, 0.2),
         0 4px 8px rgba(0, 0, 0, 0.15);
     }
     \`\`\`

5. **Character Elements - Expression System**
   - Add anthropomorphic features to interface elements (eyes, mouth, blush)
   - Eyes: 12px black circles, 20px apart
   - Mouth: Use \`border-radius\` to create curved smile
   - Blush: Pink semi-transparent ellipses (\`rgba(255,105,180,0.3)\`)
   - CSS Implementation:
     \`\`\`css
     .clay-face {
       position: relative;
       width: 120px;
       height: 120px;
       border-radius: 50%;
     }
     .clay-eye {
       width: 12px;
       height: 12px;
       background: #2C3E50;
       border-radius: 50%;
     }
     .clay-mouth {
       width: 40px;
       height: 20px;
       border: 3px solid #2C3E50;
       border-top: none;
       border-radius: 0 0 40px 40px;
     }
     .clay-blush {
       width: 20px;
       height: 14px;
       background: rgba(255, 105, 180, 0.3);
       border-radius: 50%;
     }
     \`\`\`

6. **Stop-Motion Effect - Gentle Wiggle**
   - Trigger slight rotation and displacement animation on hover
   - Animation cycle: 0.6-0.8s, using \`ease-in-out\`
   - Mimic frame-by-frame jumping of stop-motion animation
   - CSS Implementation:
     \`\`\`css
     @keyframes clay-wiggle {
       0%, 100% { transform: rotate(-1deg) translateY(0); }
       25% { transform: rotate(1deg) translateY(-2px); }
       50% { transform: rotate(-0.5deg) translateY(-1px); }
       75% { transform: rotate(0.5deg) translateY(-2px); }
     }
     .clay-toy:hover {
       animation: clay-wiggle 0.6s ease-in-out infinite;
     }
     \`\`\`

7. **Squish Interaction Feedback**
   - Elements slightly flatten when clicked (\`scale(0.95-0.98)\`)
   - Mimic physical feedback of pressing clay toys
   - Simultaneously reduce shadow intensity, creating pressed-into-table effect
   - CSS Implementation:
     \`\`\`css
     .clay-button:active {
       transform: translateY(2px) scale(0.98);
       box-shadow: 
         0 2px 4px rgba(0, 0, 0, 0.15),
         0 1px 2px rgba(0, 0, 0, 0.1);
     }
     \`\`\`

**Color Scheme (Bright Candy Colors)**

Primary Colors (Toy Colors):
- Pink Toy: #FF6B9D (Light Pink) → #F06292 (Deep Pink)
- Yellow Toy: #FFD54F (Light Yellow) → #FFA726 (Deep Orange-Yellow)
- Green Toy: #66BB6A (Light Green) → #43A047 (Deep Green)
- Blue Toy: #42A5F5 (Sky Blue) → #1E88E5 (Deep Blue)
- Purple Toy: #AB47BC (Light Purple) → #8E24AA (Deep Purple)
- Orange Toy: #FFA726 (Light Orange) → #F57C00 (Deep Orange)

Neutral Colors (Background & Text):
- Dark Brown Text: #5D4E37 (Toy label color)
- Light Brown Secondary Text: #8B7355
- White Background: #FFFFFF
- Soft Background Gradient: \`from-blue-100 via-purple-50 to-pink-100\`

Functional Colors (Highlights & Shadows):
- Highlight White: rgba(255, 255, 255, 0.8)
- Shadow Black: rgba(0, 0, 0, 0.15)
- Blush Pink: rgba(255, 105, 180, 0.3)

**Key CSS Class Examples**

\`\`\`css
/* Basic Toy Element */
.clay-toy {
  position: relative;
  border-radius: 50%;
  background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.clay-toy:hover {
  transform: translateY(-6px) scale(1.05);
  animation: clay-wiggle 0.6s ease-in-out infinite;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

.clay-toy:active {
  transform: translateY(2px) scale(0.98);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Toy Button */
.clay-button {
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
  color: white;
  background: linear-gradient(145deg, #FF6B9D 0%, #F06292 100%);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.clay-button:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

.clay-button:active {
  transform: translateY(2px) scale(0.98);
}

/* Toy Card */
.clay-card {
  position: relative;
  border-radius: 32px;
  padding: 24px;
  background: linear-gradient(145deg, #42A5F5 0%, #1E88E5 100%);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

.clay-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 
    0 16px 32px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Character Face */
.clay-face {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(145deg, #FFD54F 0%, #FFA726 100%);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
}

.clay-face .clay-highlight {
  position: absolute;
  top: 15%;
  left: 25%;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
}

.clay-face .clay-eyes {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
}

.clay-face .clay-eye {
  width: 12px;
  height: 12px;
  background: #2C3E50;
  border-radius: 50%;
}

.clay-face .clay-mouth {
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 20px;
  border: 3px solid #2C3E50;
  border-top: none;
  border-radius: 0 0 40px 40px;
}

/* Stop-Motion Wiggle */
@keyframes clay-wiggle {
  0%, 100% { transform: rotate(-1deg) translateY(0); }
  25% { transform: rotate(1deg) translateY(-2px); }
  50% { transform: rotate(-0.5deg) translateY(-1px); }
  75% { transform: rotate(0.5deg) translateY(-2px); }
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
\`\`\`

**Typography System**

- Headline Font: 'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold' (rounded playful fonts)
- Headline Size: 36-48px, font-weight: 800
- Body Size: 16-20px, font-weight: 700
- Small Labels: 12-14px, font-weight: 700
- Letter Spacing: Normal or slightly negative (-0.5px ~ -1px) for compact feel
- Text Shadow: \`text-shadow: 0 2px 4px rgba(0,0,0,0.2)\` (enhance toy texture)

**Spacing System (Based on 8px unit)**

- xs: 8px (button padding)
- sm: 12px (small element gaps)
- md: 16px (standard spacing)
- lg: 24px (card gaps)
- xl: 32px (section gaps)
- 2xl: 48px (chapter gaps)

**Icon System**

- Prioritize emoji icons (🎨 🎵 ⚽ 🚀 🦁 🍰)
- Icon Size: 48-72px
- Icon Shadow: \`filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15))\`
- Icon Rotation on Hover: \`transform: rotate(5deg) scale(1.1)\`

**Important Guidelines**

1. **Absolutely Avoid Sharp Corners**: All elements must use \`rounded-full\` or \`rounded-3xl\`, no exceptions
2. **Gradients Are Mandatory**: Prohibit solid color backgrounds; all major elements must use 145deg linear gradients
3. **Highlights Are Required**: Every toy element must include a top-left white highlight circle
4. **Shadows Must Be Soft**: Shadow opacity not exceeding 0.2, blur radius not exceeding 32px
5. **Animations Must Be Subtle**: Keep all animations within ±2deg rotation and ±6px displacement
6. **Colors Must Be Bright**: Use high-saturation, high-luminosity candy colors; avoid dark or gray tones
7. **Fonts Must Be Rounded**: Prioritize Comic Sans MS or other rounded fonts
8. **Elements Must Be Adorable**: Add appropriate expressions (eyes, mouth) to enhance friendliness
9. **Interactions Must Be Fun**: Add wiggle/bounce animations on hover, squish effect on active
10. **Backgrounds Must Be Soft**: Use gradient backgrounds (e.g., \`from-blue-100 via-purple-50 to-pink-100\`); avoid pure white
`
};

export default customPrompt;

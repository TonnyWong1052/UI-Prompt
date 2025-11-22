// Glassmorphism Landing Page - Unique CustomPrompt
// 企业网站着陆页专属 Prompt（3000+ 字）

export const landingPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，需要生成一个与当前「Glassmorphism 企业网站着陆页」风格高度接近的界面。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新企业着陆页。你需要严格延续当前 Glassmorphism Landing Page 风格的布局逻辑、玻璃质感和专业商业氛围，只替换品牌、文案和业务内容。

【使用场景】
- 这是一个现代 SaaS 产品、科技公司或设计工作室的企业官网着陆页
- 面向企业决策者、产品经理、设计师等专业用户
- 需要传达专业、现代、创新、可信赖的品牌形象
- 适合展示产品特性、统计数据、CTA 转化

【整体布局结构】
1. **固定玻璃导航栏**
   - 顶部固定导航，使用 \`position: fixed\` + \`backdrop-filter: blur(20px) saturate(180%)\`
   - 左侧品牌 Logo，中间导航链接（Home, Features, Pricing, Contact），右侧 CTA 按钮
   - 背景：\`rgba(255, 255, 255, 0.1)\`，下边框：\`1px solid rgba(255, 255, 255, 0.2)\`
   - 最大宽度：1200px，居中对齐

2. **Hero Section（全屏主视觉区）**
   - 最小高度：100vh，垂直居中内容
   - 主玻璃卡片：
     - 最大宽度 800px，内边距 3rem，圆角 32px
     - 背景：\`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(30px) saturate(180%)\`
     - 阴影：\`0 20px 60px rgba(0, 0, 0, 0.2)\`
     - 边框：\`1px solid rgba(255, 255, 255, 0.2)\`
   - 内容结构：
     - 顶部徽章（"New in 2025"）：小玻璃胶囊，\`rgba(255, 255, 255, 0.2)\`
     - 主标题（h1）：3.5rem，font-weight 800，行高 1.2
     - 描述文字（p）：1.25rem，行高 1.8，颜色 \`rgba(255, 255, 255, 0.9)\`
     - 双 CTA 按钮：主按钮 + 次要按钮，水平排列，间距 1rem
   - 背景装饰：3 个浮动玻璃圆圈（300px, 200px, 150px），使用绝对定位 + 旋转浮动动画

3. **Features Section（特性展示区）**
   - 内边距：6rem 0
   - 标题居中：2.5rem，font-weight 800，底部间距 4rem
   - 卡片网格：\`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))\`，间距 2rem
   - 每个特性卡片：
     - 内边距 2.5rem，圆角 24px
     - 背景：\`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(20px) saturate(180%)\`
     - 悬停效果：\`translateY(-8px)\` + 阴影增强至 \`0 16px 48px rgba(0, 0, 0, 0.2)\`
   - 图标容器：64x64px，圆角 16px，\`rgba(255, 255, 255, 0.15)\`
   - 使用 SVG 图标（简洁线条风格）

4. **Stats Section（统计数据区）**
   - 内边距：4rem 0
   - 大玻璃卡片：圆角 32px，内边距 3rem，\`backdrop-filter: blur(30px) saturate(180%)\`
   - 统计数字网格：4 列自适应布局，间距 2rem
   - 每个统计项：
     - 文字居中
     - 数字：3rem，font-weight 800
     - 标签：1rem，\`rgba(255, 255, 255, 0.8)\`

5. **Footer（底部区域）**
   - 背景：\`rgba(0, 0, 0, 0.2)\` + \`backdrop-filter: blur(20px)\`
   - 顶部边框：\`1px solid rgba(255, 255, 255, 0.1)\`
   - 内边距：3rem 0
   - 左右布局：品牌信息 + 链接列表

【色彩体系与玻璃材質】
1. **背景渐变**
   - 使用动态多色渐变：\`linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)\`
   - 背景尺寸：\`400% 400%\`
   - 15 秒循环动画：
     \`\`\`css
     @keyframes gradientShift {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

2. **玻璃卡片颜色规范**
   - 主卡片：\`rgba(255, 255, 255, 0.1)\`
   - 悬停后：\`rgba(255, 255, 255, 0.15)\`
   - 按钮主色：\`rgba(255, 255, 255, 0.25)\`
   - 按钮悬停：\`rgba(255, 255, 255, 0.35)\`
   - 次要按钮：透明背景 + \`border: 1px solid rgba(255, 255, 255, 0.4)\`

3. **边框与描边**
   - 标准边框：\`1px solid rgba(255, 255, 255, 0.2)\`
   - 徽章边框：\`1px solid rgba(255, 255, 255, 0.3)\`
   - 导航底边：\`1px solid rgba(255, 255, 255, 0.2)\`

4. **文字颜色**
   - 主标题：\`#ffffff\`
   - 描述文字：\`rgba(255, 255, 255, 0.9)\`
   - 次要文字：\`rgba(255, 255, 255, 0.8)\`
   - 导航链接：\`rgba(255, 255, 255, 0.8)\` → hover 变 \`#ffffff\`

【光影与玻璃效果】
1. **背景模糊（核心效果）**
   - 所有玻璃元素必須使用：\`backdrop-filter: blur(20px-30px) saturate(180%)\`
   - 添加 WebKit 前綴：\`-webkit-backdrop-filter: blur(20px) saturate(180%)\`
   - 飽和度增強 180% 让背景色彩更鲜艳

2. **阴影系统**
   - 导航栏：无明顯阴影，仅依赖背景模糊和边框
   - Hero 卡片：\`0 20px 60px rgba(0, 0, 0, 0.2)\`
   - 特性卡片默认：\`0 8px 32px rgba(0, 0, 0, 0.1)\`
   - 特性卡片悬停：\`0 16px 48px rgba(0, 0, 0, 0.2)\`
   - 统计卡片：\`0 20px 60px rgba(0, 0, 0, 0.15)\`

3. **圆角规范**
   - 大卡片（Hero, Stats）：32px
   - 中型卡片（Features）：24px
   - 按钮：12px
   - 图标容器：16px
   - 徽章：20px（胶囊形）

【交互状态与動效】
1. **导航链接**
   - 默认：\`color: rgba(255, 255, 255, 0.8)\`
   - Hover：\`color: #ffffff\`，过渡 0.3s ease

2. **按钮交互**
   - 主按钮 Hover：
     - 背景：\`rgba(255, 255, 255, 0.35)\`
     - 位移：\`translateY(-2px)\`
     - 阴影：\`0 8px 24px rgba(0, 0, 0, 0.15)\`
   - 次要按钮 Hover：
     - 背景：\`rgba(255, 255, 255, 0.15)\`
     - 位移：\`translateY(-2px)\`

3. **特性卡片悬停**
   - 位移：\`translateY(-8px)\`
   - 背景变亮：\`rgba(255, 255, 255, 0.15)\`
   - 阴影增強：\`0 16px 48px rgba(0, 0, 0, 0.2)\`
   - 过渡：\`all 0.3s ease\`

4. **浮動装饰动画**
   \`\`\`css
   @keyframes float {
     0%, 100% { transform: translateY(0px) rotate(0deg); }
     50% { transform: translateY(-20px) rotate(180deg); }
   }
   \`\`\`
   - 3 个圆圈使用不同延遲（0s, 2s, 4s）
   - 动画時長：6s ease-in-out infinite

【输出技術要求】
- 使用 HTML5 语义化标签：\`<nav>\`、\`<section>\`、\`<footer>\`
- 所有样式内联在 \`<style>\` 标签中
- 使用現代 CSS Grid 和 Flexbox 布局
- 响应式设计：768px 以下隐藏导航菜單、调整 Hero 标题大小、垂直排列 CTA 按钮
- 确保与現有 Glassmorphism Landing Page 在视觉密度、玻璃质感强度、专业商業氛围上完全一致

【关键约束】
- ✅ 必須使用 \`backdrop-filter + saturate(180%)\` 创造增強玻璃效果
- ✅ 背景渐变必須有动画（15s 循环）
- ✅ 所有玻璃卡片必須有柔和大阴影
- ✅ 圆角統一使用 12-32px 范围
- ✅ 保持专业商業風格，避免过度装饰
- ❌ 不使用纯色不透明背景
- ❌ 不使用小于 15px 的模糊值
- ❌ 不使用硬边直角设计`,

  'en-US': `You are a senior UI designer and front-end engineer tasked with generating an interface that closely matches the current "Glassmorphism Corporate Landing Page" style.

Your goal: Without copying the existing page content verbatim, create a brand new corporate landing page that clearly belongs to the same design family. You must strictly follow the current Glassmorphism Landing Page's layout logic, glass texture, and professional business atmosphere, only replacing the brand, copy, and business content.

【Use Case】
- This is a landing page for a modern SaaS product, tech company, or design studio
- Target audience: business decision-makers, product managers, designers, and other professionals
- Must convey professional, modern, innovative, and trustworthy brand image
- Suitable for showcasing product features, statistics, and CTA conversions

【Overall Layout Structure】
1. **Fixed Glass Navigation Bar**
   - Top fixed navigation using \`position: fixed\` + \`backdrop-filter: blur(20px) saturate(180%)\`
   - Left: Brand Logo, Middle: Nav links (Home, Features, Pricing, Contact), Right: CTA button
   - Background: \`rgba(255, 255, 255, 0.1)\`, Bottom border: \`1px solid rgba(255, 255, 255, 0.2)\`
   - Max width: 1200px, centered

2. **Hero Section (Full-Screen Main Visual)**
   - Min height: 100vh, vertically centered content
   - Main glass card:
     - Max width 800px, padding 3rem, border-radius 32px
     - Background: \`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(30px) saturate(180%)\`
     - Shadow: \`0 20px 60px rgba(0, 0, 0, 0.2)\`
     - Border: \`1px solid rgba(255, 255, 255, 0.2)\`
   - Content structure:
     - Top badge ("New in 2025"): Small glass pill, \`rgba(255, 255, 255, 0.2)\`
     - Main title (h1): 3.5rem, font-weight 800, line-height 1.2
     - Description (p): 1.25rem, line-height 1.8, color \`rgba(255, 255, 255, 0.9)\`
     - Dual CTA buttons: Primary + Secondary, horizontal layout, gap 1rem
   - Background decoration: 3 floating glass circles (300px, 200px, 150px), absolute positioning + rotation float animation

3. **Features Section**
   - Padding: 6rem 0
   - Centered title: 2.5rem, font-weight 800, margin-bottom 4rem
   - Card grid: \`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))\`, gap 2rem
   - Each feature card:
     - Padding 2.5rem, border-radius 24px
     - Background: \`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(20px) saturate(180%)\`
     - Hover: \`translateY(-8px)\` + enhanced shadow to \`0 16px 48px rgba(0, 0, 0, 0.2)\`
   - Icon container: 64x64px, border-radius 16px, \`rgba(255, 255, 255, 0.15)\`
   - Use SVG icons (simple line style)

4. **Stats Section**
   - Padding: 4rem 0
   - Large glass card: border-radius 32px, padding 3rem, \`backdrop-filter: blur(30px) saturate(180%)\`
   - Stats grid: 4 columns auto-fit layout, gap 2rem
   - Each stat item:
     - Text centered
     - Number: 3rem, font-weight 800
     - Label: 1rem, \`rgba(255, 255, 255, 0.8)\`

5. **Footer**
   - Background: \`rgba(0, 0, 0, 0.2)\` + \`backdrop-filter: blur(20px)\`
   - Top border: \`1px solid rgba(255, 255, 255, 0.1)\`
   - Padding: 3rem 0
   - Left-right layout: Brand info + Link list

【Color System & Glass Material】
1. **Background Gradient**
   - Use dynamic multi-color gradient: \`linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)\`
   - Background size: \`400% 400%\`
   - 15s loop animation:
     \`\`\`css
     @keyframes gradientShift {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

2. **Glass Card Color Specifications**
   - Main cards: \`rgba(255, 255, 255, 0.1)\`
   - After hover: \`rgba(255, 255, 255, 0.15)\`
   - Button primary: \`rgba(255, 255, 255, 0.25)\`
   - Button hover: \`rgba(255, 255, 255, 0.35)\`
   - Secondary button: Transparent background + \`border: 1px solid rgba(255, 255, 255, 0.4)\`

3. **Borders & Outlines**
   - Standard border: \`1px solid rgba(255, 255, 255, 0.2)\`
   - Badge border: \`1px solid rgba(255, 255, 255, 0.3)\`
   - Nav bottom: \`1px solid rgba(255, 255, 255, 0.2)\`

4. **Text Colors**
   - Main title: \`#ffffff\`
   - Description: \`rgba(255, 255, 255, 0.9)\`
   - Secondary text: \`rgba(255, 255, 255, 0.8)\`
   - Nav links: \`rgba(255, 255, 255, 0.8)\` → hover to \`#ffffff\`

【Light & Glass Effects】
1. **Background Blur (Core Effect)**
   - All glass elements must use: \`backdrop-filter: blur(20px-30px) saturate(180%)\`
   - Add WebKit prefix: \`-webkit-backdrop-filter: blur(20px) saturate(180%)\`
   - 180% saturation boost makes background colors more vibrant

2. **Shadow System**
   - Navigation: No obvious shadow, relies on blur and border only
   - Hero card: \`0 20px 60px rgba(0, 0, 0, 0.2)\`
   - Feature cards default: \`0 8px 32px rgba(0, 0, 0, 0.1)\`
   - Feature cards hover: \`0 16px 48px rgba(0, 0, 0, 0.2)\`
   - Stats card: \`0 20px 60px rgba(0, 0, 0, 0.15)\`

3. **Border Radius Specs**
   - Large cards (Hero, Stats): 32px
   - Medium cards (Features): 24px
   - Buttons: 12px
   - Icon containers: 16px
   - Badges: 20px (pill shape)

【Interaction States & Animations】
1. **Navigation Links**
   - Default: \`color: rgba(255, 255, 255, 0.8)\`
   - Hover: \`color: #ffffff\`, transition 0.3s ease

2. **Button Interactions**
   - Primary button hover:
     - Background: \`rgba(255, 255, 255, 0.35)\`
     - Transform: \`translateY(-2px)\`
     - Shadow: \`0 8px 24px rgba(0, 0, 0, 0.15)\`
   - Secondary button hover:
     - Background: \`rgba(255, 255, 255, 0.15)\`
     - Transform: \`translateY(-2px)\`

3. **Feature Card Hover**
   - Transform: \`translateY(-8px)\`
   - Brighter background: \`rgba(255, 255, 255, 0.15)\`
   - Enhanced shadow: \`0 16px 48px rgba(0, 0, 0, 0.2)\`
   - Transition: \`all 0.3s ease\`

4. **Floating Decoration Animation**
   \`\`\`css
   @keyframes float {
     0%, 100% { transform: translateY(0px) rotate(0deg); }
     50% { transform: translateY(-20px) rotate(180deg); }
   }
   \`\`\`
   - 3 circles use different delays (0s, 2s, 4s)
   - Animation duration: 6s ease-in-out infinite

【Output Technical Requirements】
- Use HTML5 semantic tags: \`<nav>\`, \`<section>\`, \`<footer>\`
- All styles inlined in \`<style>\` tag
- Use modern CSS Grid and Flexbox layout
- Responsive design: Below 768px hide nav menu, adjust Hero title size, stack CTA buttons vertically
- Ensure complete consistency with existing Glassmorphism Landing Page in visual density, glass texture intensity, and professional business atmosphere

【Key Constraints】
- ✅ MUST use \`backdrop-filter + saturate(180%)\` for enhanced glass effect
- ✅ Background gradient MUST have animation (15s loop)
- ✅ All glass cards MUST have soft large shadows
- ✅ Border radius consistently 12-32px range
- ✅ Maintain professional business style, avoid over-decoration
- ❌ NO solid opaque backgrounds
- ❌ NO blur values less than 15px
- ❌ NO hard-edged right-angle designs`
};

export default landingPageCustomPrompt;

// Glassmorphism Music Player - Unique CustomPrompt
// 音乐播放器专属 Prompt（3000+ 字）

export const musicPlayerCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，需要生成一个与当前「Glassmorphism 音乐播放器」风格高度接近的界面。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新音乐/媒体播放器界面。你需要严格延续当前 Glassmorphism Music Player 风格的布局逻辑、玻璃质感和丰富交互组件，只替换歌曲、艺人和功能模块内容。

【使用场景】
- 这是一个现代音乐流媒体播放器、播客应用或视频播放器的主界面
- 面向音乐爱好者、内容消费者、创作者等用户
- 需要传达沉浸式、现代、动感、情绪化的视听体验
- 适合展示播放控制、歌单管理、推荐内容、用户收藏

【整体布局结构】
1. **玻璃导航栏（顶部固定）**
   - 使用 \`position: fixed\` + \`backdrop-filter: blur(20px) saturate(180%)\`
   - 左侧：App Logo 和名称
   - 中间：搜索栏（玻璃质感输入框）
   - 右侧：用户头像和设置图标
   - 背景：\`rgba(255, 255, 255, 0.1)\`，下边框 \`1px solid rgba(255, 255, 255, 0.2)\`

2. **Hero 区域（专辑封面 + 播放控制）**
   - 居中布局，最大宽度 1200px
   - 专辑封面：大玻璃卡片（400x400px），包含：
     - 封面图片（圆角 24px）
     - 玻璃覆盖层：\`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(10px)\`
   - 播放控制区：
     - 歌曲标题（h1，2.5rem，font-weight 700）
     - 艺人名称（1.25rem，\`rgba(255, 255, 255, 0.8)\`）
     - 播放进度条（玻璃质感滑块）
     - 控制按钮：上一曲、播放/暂停、下一曲（圆形玻璃按钮，60px）
     - 音量控制、循环模式、收藏按钮

3. **统计卡片网格（4 列）**
   - 收藏歌曲数、总播放时长、歌单数量、关注艺人
   - 每个卡片：
     - 背景：\`rgba(255, 255, 255, 0.08)\` + \`backdrop-filter: blur(15px)\`
     - 圆角 20px，内边距 2rem
     - 图标 + 数字 + 标签垂直排列
     - 悬停效果：\`translateY(-5px)\` + 背景变亮

4. **歌单网格（3x2 网格）**
   - 标题：「我的歌单」或「推荐歌单」
   - 每个歌单卡片：
     - 玻璃卡片：\`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(20px)\`
     - 包含：封面缩略图、歌单名、歌曲数量
     - 圆角 20px，悬停时上移并增强阴影
     - 播放按钮：小玻璃圆圈，悬停时显示

5. **推荐艺人卡片（水平滚动）**
   - 圆形头像 + 艺人名称
   - 玻璃卡片：\`rgba(255, 255, 255, 0.08)\`，圆角 16px
   - 关注按钮：半透明玻璃按钮

6. **正在播放队列 + 歌词**
   - 右侧侧边栏或底部区域
   - 队列列表：每首歌一个小玻璃卡片
   - 歌词显示：滚动玻璃面板，当前歌词高亮

7. **等化器可视化（装饰性）**
   - 10 个彩色柱状图（玻璃质感）
   - CSS 动画：上下弹跳，模拟音频波形
   - 颜色：紫色、粉色、蓝色渐变

8. **播放模式切换（芯片按钮）**
   - 4 个小玻璃按钮：顺序播放、单曲循环、随机播放、列表循环
   - 激活状态：背景更亮 + 边框高亮

9. **Loading 状态展示**
   - 3 种加载动画：旋转 Spinner、脉冲点、波浪进度条
   - 所有使用玻璃质感

10. **Toast 通知**
    - 小玻璃卡片，右上角浮现
    - 显示：「已添加到收藏」、「播放模式已切换」等

11. **Footer（底部信息栏）**
    - 背景：\`rgba(0, 0, 0, 0.2)\` + \`backdrop-filter: blur(20px)\`
    - 版权信息 + 社交链接

【色彩体系与玻璃材质】
1. **背景渐变 + 粒子动画**
   - 使用深色紫蓝渐变：\`linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)\`
   - 15 个浮动粒子（紫色、粉色系）：
     - 大小：60-120px 的圆形
     - 位置：随机分布，使用 \`position: absolute\`
     - 动画：上下浮动 + 左右漂移（20-35s 循环，不同延迟）
     - 样式：\`background: radial-gradient(circle, rgba(...))\` + \`filter: blur(40px)\`

2. **玻璃卡片颜色规范**
   - 主卡片（专辑、歌单）：\`rgba(255, 255, 255, 0.1)\`
   - 次级卡片（统计、队列）：\`rgba(255, 255, 255, 0.08)\`
   - 悬停后：\`rgba(255, 255, 255, 0.15)\`
   - 激活状态：\`rgba(255, 255, 255, 0.2)\`

3. **交互元素颜色**
   - 播放按钮（大）：\`rgba(255, 255, 255, 0.2)\`，悬停变 \`0.3\`
   - 小按钮：\`rgba(255, 255, 255, 0.15)\`
   - 进度条背景：\`rgba(255, 255, 255, 0.1)\`
   - 进度条填充：\`rgba(255, 255, 255, 0.4)\`
   - 滑块圆点：\`rgba(255, 255, 255, 0.8)\`，悬停变 \`#ffffff\`

4. **文字颜色**
   - 主标题（歌曲名）：\`#ffffff\`
   - 次要文字（艺人名、歌单数量）：\`rgba(255, 255, 255, 0.8)\`
   - 辅助文字（时间、标签）：\`rgba(255, 255, 255, 0.6)\`

【光影与玻璃效果】
1. **背景模糊系统**
   - 主卡片：\`backdrop-filter: blur(20px) saturate(180%)\`
   - 导航栏：\`backdrop-filter: blur(20px) saturate(180%)\`
   - 小卡片：\`backdrop-filter: blur(15px) saturate(180%)\`
   - 侧边栏：\`backdrop-filter: blur(25px) saturate(180%)\`

2. **阴影规范**
   - 专辑封面：\`0 20px 60px rgba(0, 0, 0, 0.3)\`
   - 歌单卡片默认：\`0 8px 32px rgba(0, 0, 0, 0.2)\`
   - 歌单卡片悬停：\`0 16px 48px rgba(0, 0, 0, 0.25)\`
   - 播放按钮：\`0 4px 16px rgba(0, 0, 0, 0.2)\`

3. **圆角系统**
   - 专辑封面：24px
   - 歌单卡片：20px
   - 统计卡片：20px
   - 播放按钮（圆形）：50%
   - 小按钮：12px
   - 芯片按钮：20px（胶囊形）

【动画与交互效果】
1. **浮动粒子动画**
   \`\`\`css
   @keyframes floatParticle {
     0%, 100% { 
       transform: translate(0, 0) scale(1); 
     }
     25% { 
       transform: translate(20px, -30px) scale(1.1); 
     }
     50% { 
       transform: translate(-15px, -60px) scale(0.9); 
     }
     75% { 
       transform: translate(25px, -40px) scale(1.05); 
     }
   }
   \`\`\`
   - 15 个粒子使用不同延迟（0-35s）
   - 动画时长：20-35s ease-in-out infinite

2. **等化器柱状图动画**
   \`\`\`css
   @keyframes equalizerBounce {
     0%, 100% { height: 20%; }
     50% { height: 100%; }
   }
   \`\`\`
   - 10 个柱子，每个不同延迟（0-0.9s，间隔 0.1s）
   - 动画时长：0.6s ease-in-out infinite

3. **卡片悬停效果**
   - 专辑/歌单卡片：
     - \`transform: translateY(-8px)\`
     - 背景：\`rgba(255, 255, 255, 0.15)\`
     - 阴影增强：\`0 16px 48px rgba(0, 0, 0, 0.25)\`
     - 过渡：\`all 0.3s ease\`

4. **播放按钮交互**
   - 默认：60px 圆形，\`rgba(255, 255, 255, 0.2)\`
   - 悬停：缩放 1.1，背景变 \`0.3\`，外圈光晕
   - 点击：缩放 0.95，持续 150ms
   - 图标：▶️ 或 ⏸（SVG，24px）

5. **进度条交互**
   - 默认：高度 6px，圆角 3px
   - 悬停：高度 8px，滑块变大（16px → 20px）
   - 拖动：滑块缩放 1.2，显示当前时间 Tooltip

6. **Toast 通知动画**
   \`\`\`css
   @keyframes toastSlideIn {
     from { 
       transform: translateX(400px); 
       opacity: 0; 
     }
     to { 
       transform: translateX(0); 
       opacity: 1; 
     }
   }
   \`\`\`
   - 从右侧滑入，3 秒后淡出

7. **Loading 动画**
   - Spinner：旋转动画，360deg，1s linear infinite
   - 脉冲点：3 个点依次放大缩小（scale 0.5-1.2）
   - 波浪进度：3 个条形依次上下移动

【特殊组件细节】
1. **搜索栏**
   - 背景：\`rgba(255, 255, 255, 0.1)\`
   - 圆角：24px（胶囊形）
   - 内边距：12px 24px
   - placeholder：\`rgba(255, 255, 255, 0.5)\`
   - 聚焦时：边框亮度提升，外圈光晕

2. **音量滑块**
   - 垂直或水平布局
   - 轨道：\`rgba(255, 255, 255, 0.1)\`，高度 4px
   - 填充：\`rgba(255, 255, 255, 0.4)\`
   - 滑块：12px 圆形，\`rgba(255, 255, 255, 0.8)\`

3. **歌词面板**
   - 玻璃卡片：\`rgba(255, 255, 255, 0.08)\`
   - 圆角：20px，内边距：2rem
   - 当前歌词：\`font-size: 1.25rem\`，\`color: #ffffff\`
   - 其他歌词：\`font-size: 1rem\`，\`color: rgba(255, 255, 255, 0.5)\`
   - 自动滚动居中

4. **播放队列项**
   - 小玻璃卡片：\`rgba(255, 255, 255, 0.08)\`
   - 圆角 12px，内边距 1rem
   - 包含：缩略图（50x50px）、歌名、艺人、时长
   - 当前播放：边框高亮 + 背景更亮
   - 悬停：背景变亮 + 显示删除按钮

【输出技术要求】
- 使用 HTML5 语义化标签：\`<header>\`、\`<main>\`、\`<aside>\`、\`<footer>\`
- 所有样式内联在 \`<style>\` 标签中
- 使用 CSS Grid 和 Flexbox 布局
- 响应式设计：768px 以下调整为单列布局
- 确保与现有 Glassmorphism Music Player 在视觉丰富度、动画流畅度、沉浸式氛围上完全一致

【关键约束】
- ✅ 必须包含 15 个浮动粒子背景动画
- ✅ 必须有等化器可视化（10 个柱子）
- ✅ 所有玻璃元素使用 \`backdrop-filter + saturate(180%)\`
- ✅ 播放控制必须有流畅的悬停和点击动画
- ✅ 进度条必须可交互（悬停放大、显示 Tooltip）
- ✅ 至少包含 3 种加载动画
- ✅ Toast 通知必须有滑入/淡出动画
- ❌ 不使用纯色不透明背景
- ❌ 不使用小于 15px 的模糊值
- ❌ 动画不能过快或过慢（150-400ms 过渡，1-6s 循环动画）`,

  'en-US': `You are a senior UI designer and front-end engineer tasked with generating an interface that closely matches the current "Glassmorphism Music Player" style.

Your goal: Without copying the existing page content verbatim, create a brand new music/media player interface that clearly belongs to the same design family. You must strictly follow the current Glassmorphism Music Player's layout logic, glass texture, and rich interactive components, only replacing songs, artists, and functional module content.

【Use Case】
- This is a main interface for a modern music streaming player, podcast app, or video player
- Target audience: music enthusiasts, content consumers, creators, etc.
- Must convey immersive, modern, dynamic, and emotional audiovisual experience
- Suitable for showcasing playback controls, playlist management, recommended content, user favorites

【Overall Layout Structure】
1. **Glass Navigation Bar (Top Fixed)**
   - Use \`position: fixed\` + \`backdrop-filter: blur(20px) saturate(180%)\`
   - Left: App Logo and name
   - Center: Search bar (glass texture input)
   - Right: User avatar and settings icon
   - Background: \`rgba(255, 255, 255, 0.1)\`, bottom border \`1px solid rgba(255, 255, 255, 0.2)\`

2. **Hero Area (Album Cover + Playback Controls)**
   - Centered layout, max width 1200px
   - Album cover: Large glass card (400x400px), containing:
     - Cover image (border-radius 24px)
     - Glass overlay: \`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(10px)\`
   - Playback control area:
     - Song title (h1, 2.5rem, font-weight 700)
     - Artist name (1.25rem, \`rgba(255, 255, 255, 0.8)\`)
     - Progress bar (glass texture slider)
     - Control buttons: Previous, Play/Pause, Next (circular glass buttons, 60px)
     - Volume control, loop mode, favorite button

3. **Stats Card Grid (4 columns)**
   - Favorite songs count, total play time, playlist count, following artists
   - Each card:
     - Background: \`rgba(255, 255, 255, 0.08)\` + \`backdrop-filter: blur(15px)\`
     - Border-radius 20px, padding 2rem
     - Icon + number + label vertically arranged
     - Hover effect: \`translateY(-5px)\` + brighter background

4. **Playlist Grid (3x2 grid)**
   - Title: "My Playlists" or "Recommended Playlists"
   - Each playlist card:
     - Glass card: \`rgba(255, 255, 255, 0.1)\` + \`backdrop-filter: blur(20px)\`
     - Contains: Cover thumbnail, playlist name, song count
     - Border-radius 20px, lift on hover with enhanced shadow
     - Play button: Small glass circle, shows on hover

5. **Recommended Artists Cards (Horizontal Scroll)**
   - Circular avatars + artist names
   - Glass cards: \`rgba(255, 255, 255, 0.08)\`, border-radius 16px
   - Follow button: Semi-transparent glass button

6. **Now Playing Queue + Lyrics**
   - Right sidebar or bottom area
   - Queue list: Each song a small glass card
   - Lyrics display: Scrolling glass panel, current lyric highlighted

7. **Equalizer Visualization (Decorative)**
   - 10 colored bars (glass texture)
   - CSS animation: Bounce up and down, simulating audio waveform
   - Colors: Purple, pink, blue gradients

8. **Play Mode Toggle (Chip Buttons)**
   - 4 small glass buttons: Sequential, Single loop, Random, List loop
   - Active state: Brighter background + highlighted border

9. **Loading States Display**
   - 3 loading animations: Rotating Spinner, Pulse dots, Wave progress bar
   - All using glass texture

10. **Toast Notifications**
    - Small glass cards, appear in top-right
    - Display: "Added to favorites", "Play mode switched", etc.

11. **Footer (Bottom Info Bar)**
    - Background: \`rgba(0, 0, 0, 0.2)\` + \`backdrop-filter: blur(20px)\`
    - Copyright info + social links

【Color System & Glass Material】
1. **Background Gradient + Particle Animation**
   - Use dark purple-blue gradient: \`linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)\`
   - 15 floating particles (purple, pink series):
     - Size: 60-120px circles
     - Position: Random distribution, using \`position: absolute\`
     - Animation: Float up-down + drift left-right (20-35s loop, different delays)
     - Style: \`background: radial-gradient(circle, rgba(...))\` + \`filter: blur(40px)\`

2. **Glass Card Color Specs**
   - Main cards (album, playlists): \`rgba(255, 255, 255, 0.1)\`
   - Secondary cards (stats, queue): \`rgba(255, 255, 255, 0.08)\`
   - After hover: \`rgba(255, 255, 255, 0.15)\`
   - Active state: \`rgba(255, 255, 255, 0.2)\`

3. **Interactive Element Colors**
   - Play button (large): \`rgba(255, 255, 255, 0.2)\`, hover to \`0.3\`
   - Small buttons: \`rgba(255, 255, 255, 0.15)\`
   - Progress bar background: \`rgba(255, 255, 255, 0.1)\`
   - Progress bar fill: \`rgba(255, 255, 255, 0.4)\`
   - Slider thumb: \`rgba(255, 255, 255, 0.8)\`, hover to \`#ffffff\`

4. **Text Colors**
   - Main title (song name): \`#ffffff\`
   - Secondary text (artist name, playlist count): \`rgba(255, 255, 255, 0.8)\`
   - Helper text (time, tags): \`rgba(255, 255, 255, 0.6)\`

【Light & Glass Effects】
1. **Background Blur System**
   - Main cards: \`backdrop-filter: blur(20px) saturate(180%)\`
   - Navigation bar: \`backdrop-filter: blur(20px) saturate(180%)\`
   - Small cards: \`backdrop-filter: blur(15px) saturate(180%)\`
   - Sidebar: \`backdrop-filter: blur(25px) saturate(180%)\`

2. **Shadow Specs**
   - Album cover: \`0 20px 60px rgba(0, 0, 0, 0.3)\`
   - Playlist cards default: \`0 8px 32px rgba(0, 0, 0, 0.2)\`
   - Playlist cards hover: \`0 16px 48px rgba(0, 0, 0, 0.25)\`
   - Play buttons: \`0 4px 16px rgba(0, 0, 0, 0.2)\`

3. **Border Radius System**
   - Album cover: 24px
   - Playlist cards: 20px
   - Stats cards: 20px
   - Play buttons (circular): 50%
   - Small buttons: 12px
   - Chip buttons: 20px (pill shape)

【Animations & Interactive Effects】
1. **Floating Particle Animation**
   \`\`\`css
   @keyframes floatParticle {
     0%, 100% { 
       transform: translate(0, 0) scale(1); 
     }
     25% { 
       transform: translate(20px, -30px) scale(1.1); 
     }
     50% { 
       transform: translate(-15px, -60px) scale(0.9); 
     }
     75% { 
       transform: translate(25px, -40px) scale(1.05); 
     }
   }
   \`\`\`
   - 15 particles use different delays (0-35s)
   - Animation duration: 20-35s ease-in-out infinite

2. **Equalizer Bar Animation**
   \`\`\`css
   @keyframes equalizerBounce {
     0%, 100% { height: 20%; }
     50% { height: 100%; }
   }
   \`\`\`
   - 10 bars, each different delay (0-0.9s, 0.1s interval)
   - Animation duration: 0.6s ease-in-out infinite

3. **Card Hover Effect**
   - Album/Playlist cards:
     - \`transform: translateY(-8px)\`
     - Background: \`rgba(255, 255, 255, 0.15)\`
     - Enhanced shadow: \`0 16px 48px rgba(0, 0, 0, 0.25)\`
     - Transition: \`all 0.3s ease\`

4. **Play Button Interaction**
   - Default: 60px circle, \`rgba(255, 255, 255, 0.2)\`
   - Hover: Scale 1.1, background to \`0.3\`, outer glow
   - Click: Scale 0.95, duration 150ms
   - Icon: ▶️ or ⏸ (SVG, 24px)

5. **Progress Bar Interaction**
   - Default: Height 6px, border-radius 3px
   - Hover: Height 8px, thumb enlarges (16px → 20px)
   - Dragging: Thumb scale 1.2, show current time Tooltip

6. **Toast Notification Animation**
   \`\`\`css
   @keyframes toastSlideIn {
     from { 
       transform: translateX(400px); 
       opacity: 0; 
     }
     to { 
       transform: translateX(0); 
       opacity: 1; 
     }
   }
   \`\`\`
   - Slide in from right, fade out after 3s

7. **Loading Animations**
   - Spinner: Rotation animation, 360deg, 1s linear infinite
   - Pulse dots: 3 dots sequentially scale (scale 0.5-1.2)
   - Wave progress: 3 bars move up-down in sequence

【Special Component Details】
1. **Search Bar**
   - Background: \`rgba(255, 255, 255, 0.1)\`
   - Border-radius: 24px (pill shape)
   - Padding: 12px 24px
   - Placeholder: \`rgba(255, 255, 255, 0.5)\`
   - On focus: Border brightness increase, outer glow

2. **Volume Slider**
   - Vertical or horizontal layout
   - Track: \`rgba(255, 255, 255, 0.1)\`, height 4px
   - Fill: \`rgba(255, 255, 255, 0.4)\`
   - Thumb: 12px circle, \`rgba(255, 255, 255, 0.8)\`

3. **Lyrics Panel**
   - Glass card: \`rgba(255, 255, 255, 0.08)\`
   - Border-radius: 20px, padding: 2rem
   - Current lyric: \`font-size: 1.25rem\`, \`color: #ffffff\`
   - Other lyrics: \`font-size: 1rem\`, \`color: rgba(255, 255, 255, 0.5)\`
   - Auto-scroll to center

4. **Queue Items**
   - Small glass cards: \`rgba(255, 255, 255, 0.08)\`
   - Border-radius 12px, padding 1rem
   - Contains: Thumbnail (50x50px), song name, artist, duration
   - Currently playing: Highlighted border + brighter background
   - Hover: Brighter background + show delete button

【Output Technical Requirements】
- Use HTML5 semantic tags: \`<header>\`, \`<main>\`, \`<aside>\`, \`<footer>\`
- All styles inlined in \`<style>\` tag
- Use CSS Grid and Flexbox layout
- Responsive design: Below 768px adjust to single column layout
- Ensure complete consistency with existing Glassmorphism Music Player in visual richness, animation smoothness, and immersive atmosphere

【Key Constraints】
- ✅ MUST include 15 floating particle background animations
- ✅ MUST have equalizer visualization (10 bars)
- ✅ All glass elements use \`backdrop-filter + saturate(180%)\`
- ✅ Playback controls MUST have smooth hover and click animations
- ✅ Progress bar MUST be interactive (hover enlarge, show Tooltip)
- ✅ At least 3 loading animations
- ✅ Toast notifications MUST have slide-in/fade-out animation
- ❌ NO solid opaque backgrounds
- ❌ NO blur values less than 15px
- ❌ Animations cannot be too fast or slow (150-400ms transitions, 1-6s loop animations)`
};

export default musicPlayerCustomPrompt;

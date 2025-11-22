// Glassmorphism CustomPrompts - 音樂播放器 & 企業網站兩種實現方式
// 每個 customPrompt 至少 3000+ 字符,雙語 (zh-CN + en-US)

// 音樂播放器版本的 CustomPrompt (為音樂應用場景優化)
export const musicPlayerCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个與當前「Glassmorphism 玻璃態音樂播放器」示例風格高度接近的界面。
要求：保持半透明玻璃卡片、背景模糊、浮動彩色圓球、柔和圓角与淡陰影，整體呈現「深色/漸變背景 + 浮起玻璃卡片 + 音樂播放器元素」布局。輸出使用語義化 HTML 結構和 TailwindCSS 風格原子類（或等價工具類方案）。

【使用場景】
- 音樂播放器應用、媒體播放控制台、播客播放器
- 音頻藝術展示、音樂創作工具、DJ 混音台
- 需要展現現代感、輕盈質感与音樂氛圍的 UI

【整體布局結構】
1. 背景層
   - 使用深色或彩色漸變背景（推薦藍紫漸變：#667eea → #764ba2）
   - 疊加 3-5 個彩色浮動圓球（使用 position: absolute + 高斯模糊）
   - 圓球顏色：粉色系 (#ff6ec4)、紫色系 (#7873f5)、藍色系 (#4facfe)
   - 圓球尺寸：120px-300px，使用 blur(80px-120px)
   - 圓球動畫：緩慢浮動（20-30s duration），使用 ease-in-out

2. 導航欄（頂部玻璃條）
   - 固定於頂部，使用玻璃態效果
   - 包含 Logo、搜索框、用戶頭像
   - 背景：rgba(255, 255, 255, 0.08)
   - backdrop-filter: blur(20px)
   - 邊框：border-bottom: 1px solid rgba(255, 255, 255, 0.15)

3. Hero 區域（主玻璃卡片）
   - 中央大型玻璃卡片，展示當前播放的專輯封面
   - 專輯封面：圓角 16px，帶柔和陰影
   - 歌曲標題：大號字體（32px-48px），純白色
   - 藝人名稱：中號字體（18px-24px），rgba(255, 255, 255, 0.8)

4. 播放控制區
   - 位於 Hero 卡片下方或內部底部
   - 進度條：玻璃態滑塊，軌道背景 rgba(255, 255, 255, 0.2)
   - 已播放部分：rgba(255, 255, 255, 0.6) 或主題色
   - 播放/暫停/上一首/下一首按鈕：圓形玻璃按鈕
   - 按鈕尺寸：48px-64px（中央播放按鈕可更大）
   - 按鈕 hover：背景略亮，輕微放大（scale 1.05）

5. 播放列表/隊列區
   - 側邊欄或底部區域
   - 每首歌曲為一個小型玻璃卡片
   - 卡片內包含：封面縮圖、歌名、藝人、時長
   - 當前播放歌曲：背景略亮，邊框高亮
   - Hover 狀態：輕微上浮（translateY(-2px)）

6. 附加功能區（可選）
   - 音量控制：玻璃滑塊
   - 等化器視覺化：動態條狀圖，玻璃質感
   - 歌詞顯示：滾動玻璃面板
   - 收藏/分享/更多按鈕：玻璃態圖標按鈕

【色彩與材質】
1. 卡片本體
   - 主卡片背景：rgba(255, 255, 255, 0.1-0.15)
   - 次級卡片背景：rgba(255, 255, 255, 0.08-0.12)
   - 略帶輕微的線性漸變增加厚度感

2. 背景漸變
   - 推薦配色：
     ```css
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
     background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
     ```

3. 浮動圓球配色
   - 圓球 1：rgba(255, 110, 196, 0.4) - 粉色
   - 圓球 2：rgba(120, 115, 245, 0.4) - 紫色
   - 圓球 3：rgba(79, 172, 254, 0.4) - 藍色
   - 使用 filter: blur(80px-120px) 創造柔和光暈

4. 文字與圖標
   - 主標題：#ffffff
   - 副標題/描述：rgba(255, 255, 255, 0.8)
   - 次要信息：rgba(255, 255, 255, 0.6)
   - 禁用狀態：rgba(255, 255, 255, 0.4)

【光影與結構細節】
1. 背景模糊
   - 主卡片：backdrop-filter: blur(20px-24px)
   - 導航欄：backdrop-filter: blur(16px-20px)
   - 小卡片：backdrop-filter: blur(12px-16px)
   - 確保添加 -webkit-backdrop-filter 以支持 Safari

2. 邊框系統
   - 主卡片：border: 1px solid rgba(255, 255, 255, 0.2)
   - 邊框可使用漸變效果：
     ```css
     border-top: 1px solid rgba(255, 255, 255, 0.25);
     border-bottom: 1px solid rgba(255, 255, 255, 0.15);
     ```

3. 陰影層次
   - 浮動卡片：box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
   - Hover 狀態：box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15)
   - 按鈕：box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08)
   - 陰影應柔和擴散，避免硬邊

4. 圓角規範
   - 主卡片：border-radius: 24px-32px
   - 次級卡片：border-radius: 16px-20px
   - 按鈕：border-radius: 12px-16px（圓形按鈕 50%）
   - 輸入框：border-radius: 12px

【交互與動效】
1. Hover 狀態
   - 卡片：
     ```css
     .glass-card:hover {
       background: rgba(255, 255, 255, 0.15);
       transform: translateY(-4px);
       box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
       transition: all 0.3s ease;
     }
     ```
   - 按鈕：
     ```css
     .glass-button:hover {
       background: rgba(255, 255, 255, 0.25);
       transform: scale(1.05);
       box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
     }
     ```

2. Active / Focus 狀態
   - 按鈕按下：
     ```css
     .glass-button:active {
       transform: scale(0.98);
       box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
     }
     ```
   - 輸入框聚焦：
     ```css
     .glass-input:focus {
       border-color: rgba(255, 255, 255, 0.4);
       box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
     }
     ```

3. 載入與動畫
   - 浮動圓球動畫：
     ```css
     @keyframes float {
       0%, 100% { transform: translate(0, 0) scale(1); }
       25% { transform: translate(20px, -30px) scale(1.05); }
       50% { transform: translate(-10px, 20px) scale(0.95); }
       75% { transform: translate(15px, 10px) scale(1.02); }
     }
     .orb {
       animation: float 20s ease-in-out infinite;
     }
     ```
   - 進度條動畫：
     ```css
     .progress-bar {
       transition: width 0.3s ease;
     }
     ```
   - 等化器條狀圖：
     ```css
     @keyframes pulse {
       0%, 100% { height: 20%; }
       50% { height: 80%; }
     }
     .equalizer-bar {
       animation: pulse 0.8s ease-in-out infinite;
     }
     ```

【完整組件範例】

\`\`\`css
/* 主容器 */
.music-player-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
}

/* 浮動圓球 */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.6;
  pointer-events: none;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: rgba(255, 110, 196, 0.4);
  top: 10%;
  left: 15%;
  animation: float 25s ease-in-out infinite;
}

.orb-2 {
  width: 250px;
  height: 250px;
  background: rgba(120, 115, 245, 0.4);
  bottom: 20%;
  right: 10%;
  animation: float 20s ease-in-out infinite reverse;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: rgba(79, 172, 254, 0.4);
  top: 60%;
  left: 50%;
  animation: float 30s ease-in-out infinite;
  animation-delay: -5s;
}

/* 主玻璃卡片 */
.glass-music-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 32px;
  max-width: 500px;
  width: 100%;
  transition: all 0.3s ease;
}

.glass-music-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

/* 專輯封面 */
.album-cover {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 24px;
}

/* 進度條 */
.progress-container {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  margin: 16px 0;
}

.progress-bar {
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  transition: width 0.3s ease;
}

/* 播放控制按鈕 */
.control-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.control-button {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
}

.control-button.play {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
}

.control-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

.control-button:active {
  transform: scale(0.98);
}

/* 播放列表項目 */
.playlist-item {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.playlist-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.playlist-item.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}
\`\`\`

【輸出要求】
- 使用語義化 HTML 將背景容器、導航、主卡片、播放列表分開
- 使用 TailwindCSS 原子類控制 layout（flex/grid）、間距、圓角與陰影
- 玻璃效果使用自定義類配合 backdrop-filter 與透明背景
- 生成的 UI 必須保留「深色/漸變背景 + 浮動彩色圓球 + 半透明模糊玻璃卡片 + 音樂播放器元素 + 白色文字」這一核心結構

【重要提示】
- 必須有深色或漸變背景襯托，否則玻璃效果不明顯
- backdrop-filter 在 Safari 需要 -webkit- 前綴
- 透明度不宜過高（避免超過 0.3），否則失去玻璃質感
- 邊框透明度應低於背景透明度，保持細膩感
- 圓角建議 12px-24px 之間，避免過於銳利
- 陰影使用黑色低透明度，不要使用彩色陰影
- 浮動圓球動畫速度應緩慢（20-30s），避免分散注意力
- 所有交互元素應有平滑的過渡動畫（0.3s ease）`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Glassmorphism music player interface that looks very close to the current demo.
Keep the semi-transparent glass cards, background blur, floating colored orbs, soft rounded corners and gentle shadows. The overall pattern should be "dark/gradient background + floating glass cards + music player elements". Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage Scenario]
- Music player applications, media playback consoles, podcast players
- Audio art showcases, music creation tools, DJ mixing boards
- UI that needs to convey modern feel, lightweight texture and musical atmosphere

[Layout Structure]
1. Background Layer
   - Use dark or colorful gradient background (recommended blue-purple: #667eea → #764ba2)
   - Overlay 3-5 colored floating orbs (using position: absolute + Gaussian blur)
   - Orb colors: pink (#ff6ec4), purple (#7873f5), blue (#4facfe)
   - Orb sizes: 120px-300px, with blur(80px-120px)
   - Orb animation: slow float (20-30s duration), using ease-in-out

2. Navigation Bar (top glass strip)
   - Fixed at top, using glass effect
   - Contains Logo, search box, user avatar
   - Background: rgba(255, 255, 255, 0.08)
   - backdrop-filter: blur(20px)
   - Border: border-bottom: 1px solid rgba(255, 255, 255, 0.15)

3. Hero Area (main glass card)
   - Central large glass card showing current album cover
   - Album cover: 16px border-radius, soft shadow
   - Song title: large font (32px-48px), pure white
   - Artist name: medium font (18px-24px), rgba(255, 255, 255, 0.8)

4. Playback Controls
   - Located below or inside Hero card bottom
   - Progress bar: glass slider, track background rgba(255, 255, 255, 0.2)
   - Played portion: rgba(255, 255, 255, 0.6) or theme color
   - Play/pause/prev/next buttons: circular glass buttons
   - Button size: 48px-64px (central play button can be larger)
   - Button hover: slightly brighter background, slight scale (1.05)

5. Playlist/Queue Area
   - Sidebar or bottom region
   - Each song is a small glass card
   - Card contains: cover thumbnail, song name, artist, duration
   - Currently playing song: slightly brighter background, highlighted border
   - Hover state: slight lift (translateY(-2px))

6. Additional Features (optional)
   - Volume control: glass slider
   - Equalizer visualization: dynamic bars, glass texture
   - Lyrics display: scrolling glass panel
   - Favorite/share/more buttons: glass icon buttons

[Color and Materials]
1. Card Body
   - Main card background: rgba(255, 255, 255, 0.1-0.15)
   - Secondary card background: rgba(255, 255, 255, 0.08-0.12)
   - Subtle linear gradient for thickness

2. Background Gradient
   - Recommended colors:
     ```css
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
     background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
     ```

3. Floating Orb Colors
   - Orb 1: rgba(255, 110, 196, 0.4) - pink
   - Orb 2: rgba(120, 115, 245, 0.4) - purple
   - Orb 3: rgba(79, 172, 254, 0.4) - blue
   - Use filter: blur(80px-120px) for soft glow

4. Text and Icons
   - Main title: #ffffff
   - Subtitle/description: rgba(255, 255, 255, 0.8)
   - Secondary info: rgba(255, 255, 255, 0.6)
   - Disabled state: rgba(255, 255, 255, 0.4)

[Light and Structure Details]
1. Background Blur
   - Main card: backdrop-filter: blur(20px-24px)
   - Nav bar: backdrop-filter: blur(16px-20px)
   - Small cards: backdrop-filter: blur(12px-16px)
   - Ensure -webkit-backdrop-filter for Safari support

2. Border System
   - Main card: border: 1px solid rgba(255, 255, 255, 0.2)
   - Gradient borders:
     ```css
     border-top: 1px solid rgba(255, 255, 255, 0.25);
     border-bottom: 1px solid rgba(255, 255, 255, 0.15);
     ```

3. Shadow Hierarchy
   - Floating cards: box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
   - Hover state: box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15)
   - Buttons: box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08)
   - Shadows should be soft and diffuse

4. Border Radius Standards
   - Main cards: border-radius: 24px-32px
   - Secondary cards: border-radius: 16px-20px
   - Buttons: border-radius: 12px-16px (circular buttons 50%)
   - Input fields: border-radius: 12px

[Interaction and Motion]
1. Hover State
   - Cards:
     ```css
     .glass-card:hover {
       background: rgba(255, 255, 255, 0.15);
       transform: translateY(-4px);
       box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
       transition: all 0.3s ease;
     }
     ```
   - Buttons:
     ```css
     .glass-button:hover {
       background: rgba(255, 255, 255, 0.25);
       transform: scale(1.05);
       box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
     }
     ```

2. Active / Focus State
   - Button press:
     ```css
     .glass-button:active {
       transform: scale(0.98);
       box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
     }
     ```
   - Input focus:
     ```css
     .glass-input:focus {
       border-color: rgba(255, 255, 255, 0.4);
       box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
     }
     ```

3. Loading and Animations
   - Floating orb animation:
     ```css
     @keyframes float {
       0%, 100% { transform: translate(0, 0) scale(1); }
       25% { transform: translate(20px, -30px) scale(1.05); }
       50% { transform: translate(-10px, 20px) scale(0.95); }
       75% { transform: translate(15px, 10px) scale(1.02); }
     }
     .orb {
       animation: float 20s ease-in-out infinite;
     }
     ```

[Complete Component Examples]

\`\`\`css
/* Main Container */
.music-player-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
}

/* Floating Orbs */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.6;
  pointer-events: none;
}

/* Main Glass Card */
.glass-music-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 32px;
  max-width: 500px;
  width: 100%;
  transition: all 0.3s ease;
}

.glass-music-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

/* Control Buttons */
.control-button {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
}

.control-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}
\`\`\`

[Output Requirements]
- Use semantic HTML to separate background container, nav, main card, playlist
- Use Tailwind utilities for layout (flex/grid), spacing, radius and shadows
- Implement glass effects with custom classes using backdrop-filter and transparent backgrounds
- Generated UI must preserve core structure: "dark/gradient background + floating colored orbs + semi-transparent blurred glass cards + music player elements + white text"

[Important Notes]
- Must have dark or gradient background, otherwise glass effect is not obvious
- backdrop-filter requires -webkit- prefix for Safari
- Transparency should not be too high (avoid exceeding 0.3)
- Border opacity should be lower than background opacity
- Border radius recommended between 12px-24px
- Shadows use black with low opacity, no colored shadows
- Floating orb animations should be slow (20-30s) to avoid distraction
- All interactive elements should have smooth transitions (0.3s ease)`
};

// 企業網站版本的 CustomPrompt (為企業著陸頁優化)
export const websiteCustomPrompt = {
  'zh-CN': `請使用 TailwindCSS 創建一個 Glassmorphism 2.0（玻璃態設計2.0）風格的企業網站著陸頁面，通過增強的模糊效果、多層半透明和精致的邊框創造現代時尚的玻璃質感。

**核心設計要求**

1. **增強型背景模糊**
   - 使用 backdrop-filter: blur(20px-30px) saturate(180%)
   - 配合 -webkit-backdrop-filter 確保跨瀏覽器兼容
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

2. **多層玻璃效果**
   - 堆疊多個玻璃層創造深度
   - 每層使用不同的透明度和模糊程度
   - 外層模糊更強，內層更清晰
   - 示例：
     \`\`\`css
     /* 外層玻璃容器 */
     .glass-outer {
       background: rgba(255, 255, 255, 0.08);
       backdrop-filter: blur(30px);
       padding: 2rem;
       border-radius: 32px;
     }

     /* 內層玻璃卡片 */
     .glass-inner {
       background: rgba(255, 255, 255, 0.15);
       backdrop-filter: blur(15px);
       padding: 1.5rem;
       border-radius: 20px;
       border: 1px solid rgba(255, 255, 255, 0.25);
     }
     \`\`\`

3. **精致的邊框系統**
   - 使用半透明白色邊框: border: 1px solid rgba(255, 255, 255, 0.2-0.3)
   - 邊框可以是漸變: border-image
   - 頂部邊框略亮，底部略暗
   - 示例：
     \`\`\`css
     .glass-border {
       border: 1px solid rgba(255, 255, 255, 0.2);
       border-top: 1px solid rgba(255, 255, 255, 0.3);
       border-bottom: 1px solid rgba(255, 255, 255, 0.1);
     }

     /* 漸變邊框效果 */
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
   - 使用柔和的多色漸變背景
   - 漸變應緩慢變化（15-20s動畫）
   - 推薦紫色系、藍色系、粉色系漸變
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

5. **柔和的陰影**
   - 使用輕柔的投影: box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
   - 懸停時陰影增強: box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15)
   - 避免硬邊陰影，保持柔和
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

6. **圓潤的圓角**
   - 大圓角: border-radius: 20px-32px
   - 創造柔和、現代的外觀
   - 不同元素使用不同圓角大小
   - 示例：
     \`\`\`css
     .glass-card { border-radius: 24px; }
     .glass-button { border-radius: 12px; }
     .glass-icon { border-radius: 16px; }
     .glass-large { border-radius: 32px; }
     \`\`\`

**配色方案**

主要背景漸變：
- 紫色系: #667eea → #764ba2
- 粉紫系: #764ba2 → #f093fb
- 藍色系: #4facfe → #00f2fe
- 粉色系: #ff9a9e → #fecfef

玻璃元素：
- 主要玻璃: rgba(255, 255, 255, 0.1-0.15)
- 深色玻璃: rgba(0, 0, 0, 0.1-0.15)
- 邊框: rgba(255, 255, 255, 0.2-0.3)
- 文字: #ffffff, rgba(255, 255, 255, 0.8-0.9)

**關鍵 CSS 類示例**

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

/* 玻璃按鈕 */
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

/* 玻璃導航欄 */
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

/* 玻璃輸入框 */
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

- ✅ 必須使用 backdrop-filter 創造真正的玻璃效果
- ✅ 使用半透明背景，讓背景內容透出
- ✅ 使用飽和度增強 saturate(180%) 讓顏色更鮮艷
- ✅ 邊框必須是半透明的，通常是白色
- ✅ 陰影要柔和，不要太重
- ✅ 圓角要大，創造現代感
- ❌ 避免使用純色不透明背景
- ❌ 避免使用硬邊和直角
- ❌ 避免使用重色深色陰影
- ❌ 避免模糊度過低（至少 15px）
- 背景必須是漸變或有色彩的，純色背景無法體現玻璃效果
- 所有交互元素應有平滑的過渡動畫`,

  'en-US': `Please create a Glassmorphism 2.0 corporate website landing page using TailwindCSS, creating modern and sophisticated glass texture through enhanced blur effects, multi-layer translucency, and refined borders.

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
};

export default {
  musicPlayerCustomPrompt,
  websiteCustomPrompt
};

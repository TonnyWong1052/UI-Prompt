// Aggregator for Visual templates (含 modern 和 visualTech)
// 新增：7 個 Visual 家族（符合 Core 標準結構）
import { translucentTemplates } from './translucent'
import { gradientTemplates } from './gradient'
import { threedTemplates } from './threed'
import { shapeTemplates } from './shape'
import { textureTemplates } from './texture'
import { lightTemplates } from './light'
import { natureTemplates } from './nature'

// 舊的單獨風格（保留兼容性）
import { visualMonochrome } from './monochrome'
import neoBrutalism from './neoBrutalism'
import { visualSoftUI } from './softUI'
import { y2kStyle } from './y2k'
import { visualNeonCyberpunk } from './neonCyberpunk'
import { visualNeonNoir } from './neonNoir'
import { outlineStyleTemplates } from './outlineStyle'
import { handDrawnSketchTemplates } from './handDrawnSketch'
// natural 風格已合併到 visualStyles.js，不再需要從 natural 目錄導入
import { visualStyles } from './visualStyles'
import { modernStyles } from './modernStyles'
import { saasMinimalStyles } from './saasMinimalStyles'
import { kawaiiMinimalStyles } from './kawaiiMinimalStyles'
import { accessibilityStyles } from './accessibilityStyles'
import { paperCutoutStyles } from './paperCutoutStyles'
import { newTrendStyles } from './newTrendStyles'
import { visualTechStyles } from './visualTechStyles'

// Modern 子模板 (已整合在 modernStyles.js 中，無需單獨導入)

// VisualTech 子模板
import { visualTechGradients } from './gradients'
import { visualTechDataVisualization } from './dataVisualization'
import { visualTechBentoGrids } from './bentoGrids'
import { visualTech3dElements } from './3dElements'
import { visualTechAntiDesign } from './antiDesign'
import { visualTechGenerativeArt } from './generativeArt'
import { visualTechSciFiHud } from './sciFiHud'
import { liminalSpace } from './liminalSpace'

// Scroll Narrative (NEW)
import { scrollNarrative } from './scrollNarrative'

// Kinetic Typography (NEW)
import { kineticTypography } from './kinetic'

// New Styles 2025
import { glassmorphism2 } from './glassmorphism2'
import { claymorphism } from './claymorphism'
import { neumorphismDark } from './neumorphismDark'
import { industrial } from './industrial'
import { biophilic } from './biophilic'

export const name = 'nav.visual'

export const visualTemplateStyles = [
  // 新增：前 4 個 Visual 家族（符合 Core 標準）
  ...translucentTemplates,   // 5 個透明質感風格
  ...gradientTemplates,      // 5 個漸變風格
  ...threedTemplates,        // 5 個 3D 風格
  ...shapeTemplates,         // 5 個形狀風格

  // 舊的風格（保留兼容性）
  ...visualStyles,
  visualMonochrome,
  neoBrutalism,
  visualSoftUI,
  y2kStyle,
  visualNeonCyberpunk,
  visualNeonNoir,
  ...outlineStyleTemplates,  // Outline Style (線條風格)
  ...handDrawnSketchTemplates,  // Hand-Drawn Sketch (手繪涂鸦风格)
  // natural 風格已合併到 visualStyles.js 中
  // Modern 系列 (已整合在 modernStyles.js)
  ...modernStyles,
  ...saasMinimalStyles,
  ...accessibilityStyles,
  // VisualTech 系列
  ...visualTechStyles,
  visualTechGradients,
  visualTechDataVisualization,
  visualTechBentoGrids,
  visualTech3dElements,
  visualTechAntiDesign,
  visualTechGenerativeArt,
  visualTechSciFiHud,
  scrollNarrative,  // Scroll Narrative (替換 parallaxScrolling)
  kineticTypography,  // Kinetic Typography (動態排版)
  // New Styles 2025
  glassmorphism2,  // Glassmorphism 2.0 (增强版玻璃态)
  claymorphism,  // Claymorphism (黏土质感)
  neumorphismDark,  // Neumorphism Dark (新拟态暗色)
  industrial,  // Industrial Design (工业设计)
  biophilic,  // Biophilic Design (亲生物设计)
  // 其他補充
  ...kawaiiMinimalStyles,
  ...paperCutoutStyles,
  ...newTrendStyles,
  liminalSpace,

  // 移到最後的 3 個 Visual 家族（包含用戶要求下移的風格）
  ...textureTemplates,       // 5 個紋理風格 (包含 Fabric Texture, Grain Noise)
  ...lightTemplates,         // 5 個光效風格 (包含 Ambient Light)
  ...natureTemplates,        // 5 個自然元素風格 (包含 Liquid Motion)
]

// Demo UI for style card display (from first template)
export const demoUI = visualTemplateStyles[0].demoHTML

// Custom styles for demo UI
export const customStyles = visualTemplateStyles[0].customStyles

// Description for style card (category level)
export const description = 'styles.visual.description'

export default visualTemplateStyles

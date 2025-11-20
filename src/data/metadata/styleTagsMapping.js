// Style Multi-dimensional Tags Mapping (clean minimal version)
// If an enhancement for a style ID is missing, defaults are applied via enhanceStyle.

export const styleEnhancements = {
  // Core Design Families
  'core-skeuomorphism': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['classic', 'depth', 'creative', 'enterprise'],
    relatedStyles: ['core-material', 'visual-translucent-glassMorphism']
  },
  'core-flat': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'flat', 'minimal', 'bold'],
    relatedStyles: ['core-minimalism', 'core-material']
  },
  'core-material': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'depth', 'geometric', 'enterprise'],
    relatedStyles: ['core-flat', 'core-fluent2']
  },
  'core-minimalism': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'minimal', 'flat', 'creative'],
    relatedStyles: ['core-flat']
  },
  'core-fluent2': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'translucent', 'depth', 'enterprise'],
    relatedStyles: ['core-material', 'visual-translucent-glassMorphism']
  },
  // core-typography 已移除 - 重複顯示

  // Visual Design Styles
  'visual-neo-brutalism': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'bold', 'flat', 'geometric', 'colorful', 'creative'],
    relatedStyles: ['core-flat', 'visual-y2k', 'retro-visual-brutalism']
  },
  'visual-nature-solarpunk': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'animated'],
    relatedStyles: ['visual-nature-liquid']
  },
  'visual-liminalSpace': {
    primaryCategory: 'visual',
    categories: ['visual', 'effectDriven'],
    tags: ['contemporary', 'minimal', 'effectDriven', 'creative'],
    relatedStyles: ['visual-neon-noir', 'visual-neon-cyberpunk', 'visual-translucent-glassmorphism']
  },
  'visual-outlineStyle': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'flat', 'clean', 'enterprise'],
    relatedStyles: ['core-minimalism', 'visual-neo-brutalism', 'core-flat']
  },
  'visual-outlineStyle-business': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'flat', 'clean', 'enterprise'],
    relatedStyles: ['core-minimalism', 'visual-neo-brutalism', 'core-flat']
  },
  'visual-outlineStyle-elearning': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'flat', 'clean', 'colorful', 'education'],
    relatedStyles: ['visual-outlineStyle-business', 'visual-paperCutout', 'visual-kawaii']
  },
  'hand-drawn-sketch': {
    primaryCategory: 'visual',
    categories: ['visual', 'creative'],
    tags: ['timeless', 'playful', 'organic', 'handwritten', 'creative', 'informal', 'friendly'],
    relatedStyles: ['visual-paperCutout', 'visual-kawaii', 'visual-outlineStyle-elearning']
  },

  // Retro Digital Styles
  'retro-digital-arcadeCRT': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'effectDriven', 'gaming', 'creative'],
    relatedStyles: ['visual-neonCyberpunk', 'retro-digital-pixelArt', 'retro-digital-vaporwave']
  },
  'terminal-cli': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'monochrome', 'monospace', 'codeHeavy', 'enterprise'],
    relatedStyles: ['retro-digital-arcadeCRT', 'visual-y2k', 'retro-digital-pixelArt']
  },
  'terminal-cli-y2k': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'colorful', 'futuristic', 'creative'],
    relatedStyles: ['terminal-cli', 'visual-y2k', 'retro-digital-arcadeCRT']
  },
  'retro-os-windows95': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'classic', 'skeuomorphic', 'enterprise', 'creative'],
    relatedStyles: ['retro-digital-arcadeCRT', 'terminal-cli', 'core-skeuomorphism']
  },
  'retro-classic': {
    primaryCategory: 'retro',
    categories: ['retro', 'print'],
    tags: ['retro', 'classic', 'typography', 'content', 'creative'],
    relatedStyles: ['retro-swiss-design', 'visual-outlineStyle-business', 'core-minimalism']
  },
  'retro-swiss-design': {
    primaryCategory: 'retro',
    categories: ['retro', 'print'],
    tags: ['retro', 'minimal', 'typography', 'geometric', 'clean', 'creative'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business', 'retro-classic']
  },
  'retro-art-deco-luxury': {
    primaryCategory: 'retro',
    categories: ['retro', 'luxury'],
    tags: ['retro', 'classic', 'geometric', 'bold', 'creative', 'enterprise'],
    relatedStyles: ['retro-classic', 'visual-neo-brutalism', 'core-skeuomorphism']
  },
  'retro-dark-academia-library': {
    primaryCategory: 'retro',
    categories: ['retro', 'academic'],
    tags: ['retro', 'classic', 'depth', 'content', 'creative'],
    relatedStyles: ['retro-classic', 'core-skeuomorphism', 'visual-texture-leather']
  },
  'retro-frutiger-aero-os': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'colorful', 'organic', 'translucent', 'creative'],
    relatedStyles: ['visual-translucent-glassmorphism', 'visual-nature-solarpunk', 'visual-y2k']
  },
  'retro-futurism-dos': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'futuristic', 'monochrome', 'monospace', 'creative'],
    relatedStyles: ['terminal-cli', 'retro-digital-arcadeCRT', 'visual-neon-cyberpunk']
  },
  'retro-arcadeCRT-arcade-hall': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'gaming', 'effectDriven', 'creative'],
    relatedStyles: ['retro-digital-arcadeCRT', 'visual-neon-cyberpunk', 'retro-digital-arcadeCRT']
  },
  'retro-arcadeCRT-cyberpunk-control': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'futuristic', 'gaming', 'effectDriven', 'creative'],
    relatedStyles: ['retro-digital-arcadeCRT', 'visual-neon-cyberpunk', 'visual-tech-sci-fi-hud']
  },
  'visual-y2k': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'colorful', 'translucent', 'futuristic', 'creative'],
    relatedStyles: ['terminal-cli', 'visual-translucent-glassmorphism']
  },

  // New Styles 2025
  'visual-glassmorphism-2': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'translucent', 'depth', 'gradient', 'creative', 'modern'],
    relatedStyles: ['visual-translucent-glassmorphism', 'core-fluent2', 'visual-y2k']
  },
  'visual-claymorphism': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'depth', 'soft', 'colorful', 'playful', 'creative'],
    relatedStyles: ['visual-soft-ui', 'visual-paperCutout', 'visual-kawaii-minimal']
  },
  'visual-neumorphism-dark': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'depth', 'soft', 'minimal', 'dark', 'elegant'],
    relatedStyles: ['visual-soft-ui', 'core-minimalism', 'visual-monochrome']
  },
  'visual-industrial': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'bold', 'minimal', 'utilitarian', 'enterprise', 'technical'],
    relatedStyles: ['visual-monochrome', 'core-minimalism', 'visual-outlineStyle-business']
  },
  'visual-biophilic': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'natural', 'harmonious', 'creative'],
    relatedStyles: ['visual-nature-solarpunk', 'visual-nature-liquid', 'natural']
  },

  // Scroll Narrative (NEW - replaces parallaxScrolling)
  'visual-scrollNarrative': {
    primaryCategory: 'visual',
    categories: ['visual', 'interaction'],
    tags: ['contemporary', 'motionBased', 'immersive', 'creative', 'content'],
    relatedStyles: ['interaction-mouseTracking']
  },
  'visual-kineticTypography': {
    primaryCategory: 'visual',
    categories: ['visual', 'typography'],
    tags: ['contemporary', 'bold', 'motionBased', 'creative'],
    relatedStyles: ['visual-scrollNarrative', 'retro-arcadeCRT', 'visual-neonCyberpunk']
  },

  // VisualTech 系列
  'visual-tech-gradients': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'colorful', 'effectDriven', 'creative'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'visual-gradient-animated-gradient']
  },
  'visual-tech-3d-elements': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech', 'threed'],
    tags: ['contemporary', 'depth', 'effectDriven', 'creative', 'geometric'],
    relatedStyles: ['visual-threed-cube3d']
  },
  'visual-tech-anti-design': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'bold', 'experimental', 'creative', 'colorful'],
    relatedStyles: ['visual-neo-brutalism', 'visual-y2k', 'core-flat']
  },
  'visual-tech-generative-art': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'effectDriven', 'aiPowered', 'creative', 'animated'],
    relatedStyles: ['visual-nature-particle', 'visual-nature-liquid', 'visual-tech-sci-fi-hud']
  },
  'visual-tech-sci-fi-hud': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'effectDriven', 'futuristic', 'gaming', 'creative'],
    relatedStyles: ['visual-neon-cyberpunk', 'visual-neon-noir', 'visual-tech-generative-art']
  },
  'visual-tech-data-visualization': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'dataDriven', 'enterprise', 'geometric', 'clean'],
    relatedStyles: ['visual-tech-bento-grids', 'core-minimalism', 'visual-outlineStyle-business']
  },
  'visual-tech-bento-grids': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech', 'layout'],
    tags: ['contemporary', 'geometric', 'clean', 'enterprise', 'creative'],
    relatedStyles: ['visual-tech-data-visualization', 'core-minimalism', 'visual-outlineStyle-business']
  },

  // Translucent 系列
  'visual-translucent-glassmorphism': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent'],
    tags: ['contemporary', 'translucent', 'depth', 'clean', 'creative'],
    relatedStyles: ['core-fluent2']
  },
  'visual-translucent-translucent-layers': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent'],
    tags: ['contemporary', 'translucent', 'depth', 'layered', 'creative'],
    relatedStyles: ['visual-translucent-glassmorphism', 'visual-translucent-aurora-glass', 'core-fluent2']
  },
  'visual-translucent-aurora-glass': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent', 'nature'],
    tags: ['contemporary', 'translucent', 'colorful', 'organic', 'creative'],
    relatedStyles: ['visual-translucent-glassmorphism', 'visual-y2k']
  },
  // visual-translucent-frost-glass 已移除 - 無 preview HTML
  // visual-translucent-acrylic-material 已移除 - 無 preview HTML

  // Gradient 系列
  'visual-gradient-mesh-gradient': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'organic', 'creative', 'animated'],
    relatedStyles: ['visual-tech-gradients', 'visual-gradient-animated-gradient']
  },
  'visual-gradient-animated-gradient': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'motionBased', 'creative', 'animated'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'visual-y2k']
  },
  'visual-gradient-color-transition': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'motionBased', 'creative'],
    relatedStyles: ['visual-gradient-animated-gradient', 'visual-tech-gradients']
  },
  'visual-gradient-duotone': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'bold', 'colorful', 'creative', 'minimal'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'core-flat', 'visual-neo-brutalism']
  },
  'visual-gradient-holographic': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'futuristic', 'creative', 'effectDriven'],
    relatedStyles: ['visual-y2k', 'visual-neon-cyberpunk', 'visual-gradient-mesh-gradient']
  },

  // 3D 系列
  'visual-threed-cube3d': {
    primaryCategory: 'visual',
    categories: ['visual', 'threed'],
    tags: ['contemporary', 'depth', 'geometric', 'effectDriven', 'creative'],
    relatedStyles: ['visual-tech-3d-elements']
  },
  // visual-threed-floating 已移除 - 無 preview HTML
  // visual-threed-depth-card 已移除 - 無 preview HTML
  // visual-threed-parallax 已移除 - 與 scrollNarrative 重複（無 preview HTML）
  // visual-threed-isometric 已移除 - 無 preview HTML

  // Shape 系列
  // visual-shape-blob 已移除 - 無 preview HTML
  // visual-shape-polygon 已移除 - 無 preview HTML
  // visual-shape-morphing 已移除 - 無 preview HTML
  // visual-shape-geometric 已移除 - 無 preview HTML
  // visual-shape-organic 已移除 - 無 preview HTML

  // Texture 系列
  // visual-texture-clay 已移除 - 無 preview HTML
  'visual-texture-leather': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['classic', 'depth', 'creative', 'enterprise'],
    relatedStyles: ['core-skeuomorphism', 'visual-texture-fabric']
  },
  'visual-texture-grain': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'minimal', 'creative', 'retro'],
    relatedStyles: ['visual-monochrome', 'core-minimalism']
  },
  'visual-texture-fabric': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative'],
    relatedStyles: ['visual-texture-leather', 'visual-nature-solarpunk']
  },
  // visual-texture-paper 已移除 - 無 preview HTML

  // Light 系列
  'visual-light-glow': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'colorful', 'creative', 'animated'],
    relatedStyles: ['visual-light-neon', 'visual-neon-cyberpunk']
  },
  'visual-light-spotlight': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'dramatic', 'creative'],
    relatedStyles: ['visual-light-glow', 'visual-light-backlight', 'visual-light-ambient']
  },
  'visual-light-backlight': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'depth', 'creative'],
    relatedStyles: ['visual-light-spotlight', 'visual-light-glow', 'visual-translucent-glassmorphism']
  },
  'visual-light-ambient': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'minimal', 'clean', 'creative'],
    relatedStyles: ['visual-light-glow', 'core-minimalism', 'visual-translucent-glassmorphism']
  },
  'visual-light-neon': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'neon', 'colorful', 'futuristic', 'creative'],
    relatedStyles: ['visual-neon-cyberpunk', 'visual-neon-noir', 'visual-y2k']
  },

  // Nature 系列
  'visual-nature-smoke': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'effectDriven', 'creative', 'animated'],
    relatedStyles: ['visual-nature-liquid', 'visual-nature-particle']
  },
  'visual-nature-liquid': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'animated'],
    relatedStyles: []
  },
  'visual-nature-particle': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'effectDriven', 'creative', 'animated'],
    relatedStyles: ['visual-tech-generative-art', 'visual-nature-smoke']
  },
  'visual-nature-wave': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'motionBased', 'creative', 'animated'],
    relatedStyles: ['visual-nature-liquid']
  },
  'visual-nature-aurora-wave': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'gradient', 'animation', 'dreamlike', 'futuristic', 'nature'],
    relatedStyles: ['visual-nature-liquid', 'visual-nature-particle', 'visual-gradient-mesh-gradient']
  },

  // 其他 Visual 風格
  'visual-neon-cyberpunk': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'neon', 'colorful', 'futuristic', 'gaming', 'creative'],
    relatedStyles: ['visual-neon-noir', 'visual-y2k', 'retro-digital-arcadeCRT']
  },
  'visual-neon-noir': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'neon', 'minimal', 'dramatic', 'creative'],
    relatedStyles: ['visual-neon-cyberpunk', 'visual-liminalSpace', 'visual-y2k']
  },
  'visual-soft-ui': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'depth', 'soft', 'clean', 'creative'],
    relatedStyles: ['core-material', 'visual-translucent-glassmorphism', 'core-fluent2']
  },
  'visual-monochrome': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'monochrome', 'clean', 'enterprise'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business', 'visual-texture-grain']
  },

  // Modern & Minimal 系列
  'saas-minimal': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'clean', 'enterprise', 'saas'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business', 'visual-monochrome']
  },
  'kawaii-minimal': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'colorful', 'creative', 'playful'],
    relatedStyles: ['visual-y2k', 'visual-paper-cutout', 'visual-outlineStyle-elearning']
  },
  'paperCutout': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'playful'],
    relatedStyles: ['visual-kawaii-minimal', 'visual-outlineStyle-elearning']
  },

  // New Trend 系列
  'maximalism': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'bold', 'colorful', 'experimental', 'creative'],
    relatedStyles: ['visual-neo-brutalism', 'visual-tech-anti-design', 'visual-y2k']
  },
  'scandi': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'clean', 'organic', 'creative'],
    relatedStyles: ['core-minimalism', 'visual-texture-wood']
  },
  'memphis': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'bold', 'geometric', 'colorful', 'creative'],
    relatedStyles: ['visual-y2k', 'visual-neo-brutalism']
  },
  'claymation': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'playful'],
    relatedStyles: ['visual-paper-cutout']
  },
  'corporate': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'clean', 'enterprise', 'professional'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business', 'saas-minimal']
  },

  // Accessibility 系列
  'accessibilityHighContrast': {
    primaryCategory: 'visual',
    categories: ['visual', 'accessibility'],
    tags: ['contemporary', 'minimal', 'clean', 'enterprise', 'accessible'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business', 'visual-monochrome']
  },
  'accessibility-high-contrast': {
    primaryCategory: 'visual',
    categories: ['visual', 'accessibility'],
    tags: ['contemporary', 'minimal', 'clean', 'enterprise', 'accessible'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business', 'visual-monochrome']
  },

  // VisualStyles 中的風格
  'natural': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'creative'],
    relatedStyles: ['visual-nature-solarpunk']
  },
  'clay': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative'],
    relatedStyles: ['visual-nature-solarpunk']
  },

  // Newspaper Typography Family
  'core-typography-newspaper-modern-editorial': {
    primaryCategory: 'core',
    categories: ['core', 'typography', 'editorial'],
    tags: ['classic', 'editorial', 'newspaper', 'multi-column', 'drop-cap', 'serif', 'professional', 'authoritative', 'depth', 'enterprise'],
    relatedStyles: [
      'core-typography-newspaper-vintage-retro',
      'core-minimalism',
      'core-skeuomorphism'
    ]
  },

  'core-typography-newspaper-vintage-retro': {
    primaryCategory: 'core',
    categories: ['core', 'typography', 'retro'],
    tags: ['classic', 'vintage', 'newspaper', 'aged-paper', 'retro', 'print-era', 'nostalgic', 'depth', 'texture'],
    relatedStyles: [
      'core-typography-newspaper-modern-editorial',
      'core-skeuomorphism',
      'visual-texture-clay'
    ]
  }
};

export const enhanceStyle = (style) => {
  const enhancement = styleEnhancements[style.id];
  if (!enhancement) {
    // 自動推斷 primaryCategory 基於 style id
    let inferredCategory = style.primaryCategory;
    if (!inferredCategory) {
      if (style.id.startsWith('core-')) {
        inferredCategory = 'core';
      } else if (style.id.startsWith('visual-')) {
        inferredCategory = 'visual';
      } else if (style.id.startsWith('retro-')) {
        inferredCategory = 'retro';
      } else if (style.id.startsWith('layout-')) {
        inferredCategory = 'layout';
      } else if (style.id.startsWith('interaction-')) {
        inferredCategory = 'interaction';
      } else {
        inferredCategory = 'core'; // 默認值
      }
    }

    // 自動推斷 categories
    let inferredCategories = style.categories;
    if (!inferredCategories || inferredCategories.length === 0) {
      inferredCategories = [inferredCategory];
      // 根據 id 添加子分類
      if (style.id.includes('-tech-')) {
        inferredCategories.push('tech');
      }
      if (style.id.includes('-translucent-')) {
        inferredCategories.push('translucent');
      }
      if (style.id.includes('-gradient-')) {
        inferredCategories.push('gradient');
      }
      if (style.id.includes('-threed-') || style.id.includes('-3d-')) {
        inferredCategories.push('threed');
      }
      if (style.id.includes('-shape-')) {
        inferredCategories.push('shape');
      }
      if (style.id.includes('-texture-')) {
        inferredCategories.push('texture');
      }
      if (style.id.includes('-light-')) {
        inferredCategories.push('light');
      }
      if (style.id.includes('-nature-')) {
        inferredCategories.push('nature');
      }
      if (style.id.includes('-retro') || style.id.includes('neon') || style.id.includes('y2k')) {
        inferredCategories.push('retro');
      }
    }

    return {
      ...style,
      primaryCategory: inferredCategory,
      categories: inferredCategories,
      tags: style.tags || [],
      relatedStyles: style.relatedStyles || []
    };
  }
  return { ...style, ...enhancement };
};

export const enhanceStyles = (styles) => styles.map(enhanceStyle);

export default {
  styleEnhancements,
  enhanceStyle,
  enhanceStyles,
};

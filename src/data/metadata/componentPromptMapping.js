/**
 * 組件 Prompt 映射表
 * 為組件提供 customPrompt 和 stylePrompt
 * 
 * 使用方式：
 * - customPrompt: 完整的 AI 指令，用於生成特定組件
 * - stylePrompt: 簡短的風格說明（可選）
 * 
 * 支持語言：zh-CN（簡體中文）、en-US（英文）
 */

/**
 * 組件級 Prompt 映射表
 * 為每個組件提供通用的 Prompt 模板
 */
export const componentPromptMapping = {
  /**
   * 導航組件 - 麵包屑導航
   */
  'breadcrumbs': {
    customPrompt: {
      'zh-CN': `请使用 TailwindCSS 创建一个面包屑导航组件，用于显示用户当前在网站中的位置层级。

**核心设计要求**

1. **层级结构**
   - 使用 \`<nav>\` + \`<ol>\` 语义化结构
   - 每个层级项使用 \`<li>\`，确保无障碍访问
   - 示例结构：首页 > 产品 > 鞋类

2. **分隔符设计**
   - 使用 \`/\`、\`>\`、\`|\` 或箭头符号
   - 分隔符使用低对比度颜色（如 \`text-gray-400\`）
   - 示例：\`<span class="mx-2 text-gray-400">/</span>\`

3. **当前页标识**
   - 最后一项使用粗体或高对比度颜色
   - 添加 \`aria-current="page"\` 属性
   - 示例：\`<span class="font-semibold text-gray-900" aria-current="page">鞋类</span>\`

4. **悬停效果**
   - 可点击的链接使用 \`hover:text-blue-600\` 或 \`hover:underline\`
   - 过渡动画：\`transition-colors duration-200\`

**配色方案**

- 已访问链接：\`text-gray-600\`
- 悬停状态：\`text-blue-600\`
- 当前页：\`text-gray-900 font-semibold\`
- 分隔符：\`text-gray-400\`

**无障碍要求**

- 使用 \`<nav aria-label="面包屑导航">\` 包裹
- 每个链接有清晰的文字描述
- 当前页使用 \`aria-current="page"\`

**关键 CSS 类示例**

\`\`\`html
<nav aria-label="面包屑导航" class="text-sm">
  <ol class="flex items-center gap-2">
    <li>
      <a href="/" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">
        首页
      </a>
    </li>
    <li class="text-gray-400">/</li>
    <li>
      <a href="/products" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">
        产品
      </a>
    </li>
    <li class="text-gray-400">/</li>
    <li>
      <span class="font-semibold text-gray-900" aria-current="page">鞋类</span>
    </li>
  </ol>
</nav>
\`\`\`

**重要提示**

- 避免过长的层级路径（建议不超过 5 层）
- 在移动端考虑使用省略号或折叠中间层级
- 确保触控目标不小于 44x44px
`,
      'en-US': `Please create a breadcrumb navigation component using TailwindCSS to show the user's current location hierarchy.

**Core Design Requirements**

1. **Hierarchical Structure**
   - Use semantic \`<nav>\` + \`<ol>\` structure
   - Each level item uses \`<li>\` for accessibility
   - Example structure: Home > Products > Shoes

2. **Separator Design**
   - Use \`/\`, \`>\`, \`|\`, or arrow symbols
   - Separators use low-contrast color (e.g., \`text-gray-400\`)
   - Example: \`<span class="mx-2 text-gray-400">/</span>\`

3. **Current Page Identifier**
   - Last item uses bold or high-contrast color
   - Add \`aria-current="page"\` attribute
   - Example: \`<span class="font-semibold text-gray-900" aria-current="page">Shoes</span>\`

4. **Hover Effects**
   - Clickable links use \`hover:text-blue-600\` or \`hover:underline\`
   - Transition animation: \`transition-colors duration-200\`

**Color Scheme**

- Visited links: \`text-gray-600\`
- Hover state: \`text-blue-600\`
- Current page: \`text-gray-900 font-semibold\`
- Separators: \`text-gray-400\`

**Accessibility Requirements**

- Wrap with \`<nav aria-label="Breadcrumb navigation">\`
- Each link has clear text description
- Current page uses \`aria-current="page"\`

**Key CSS Classes Example**

\`\`\`html
<nav aria-label="Breadcrumb navigation" class="text-sm">
  <ol class="flex items-center gap-2">
    <li>
      <a href="/" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">
        Home
      </a>
    </li>
    <li class="text-gray-400">/</li>
    <li>
      <a href="/products" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">
        Products
      </a>
    </li>
    <li class="text-gray-400">/</li>
    <li>
      <span class="font-semibold text-gray-900" aria-current="page">Shoes</span>
    </li>
  </ol>
</nav>
\`\`\`

**Important Tips**

- Avoid overly long hierarchy paths (recommend no more than 5 levels)
- Consider using ellipsis or collapsing middle levels on mobile
- Ensure touch targets are no smaller than 44x44px
`
    },
    stylePrompt: {
      'zh-CN': `这是一个经典的导航辅助组件，用于显示用户当前在网站中的位置层级，帮助用户理解页面结构和快速返回上层页面。`,
      'en-US': `This is a classic navigation aid component used to show the user's current location hierarchy in the website, helping users understand the page structure and quickly return to parent pages.`
    }
  },

  // 可以為其他高頻組件添加 Prompt
  // TODO: 後續添加更多組件的 Prompt 映射
};

/**
 * 變體級 Prompt 覆蓋表（可選）
 * 允許特定變體使用自定義 Prompt，覆蓋組件級 Prompt
 * 
 * 鍵格式：`${componentId}-${variantId}`
 * 例如：'breadcrumbs-minimalism'、'button-skeuomorphism'
 */
export const variantPromptOverrides = {
  // 示例：為 Breadcrumbs 的極簡主義變體提供特殊 Prompt
  'breadcrumbs-minimalism': {
    stylePrompt: {
      'zh-CN': `极简风格的面包屑导航，采用纤细的分隔符（|）和低对比度文字（text-gray-400），通过字重差异区分当前页（font-semibold）和链接项（font-normal），避免使用任何图标或背景色。`,
      'en-US': `A minimalist breadcrumb navigation with thin separators (|) and low-contrast text (text-gray-400), differentiating current page (font-semibold) from links (font-normal) through font-weight only, avoiding any icons or background colors.`
    }
  }

  // TODO: 後續為特殊變體添加覆蓋 Prompt
};

/**
 * 分類級 Prompt 映射表（可選）
 * 為整個分類提供通用 Prompt，當組件級 Prompt 缺失時使用
 */
export const categoryPromptMapping = {
  'navigation': {
    customPrompt: {
      'zh-CN': `请使用 TailwindCSS 创建一个导航组件。导航组件用于帮助用户在网站中移动和定位，应该清晰、易用且符合无障碍标准（ARIA）。

**通用设计要求**
- 使用语义化 HTML 标签（\`<nav>\`、\`<a>\`、\`<button>\`）
- 提供清晰的视觉反馈（悬停、激活状态）
- 支持键盘导航（Tab、Enter、Arrow keys）
- 响应式设计（移动端友好）

请提供完整的 HTML 和 TailwindCSS 类名。`,
      'en-US': `Please create a navigation component using TailwindCSS. Navigation components help users move and locate within the website, should be clear, easy to use, and follow accessibility standards (ARIA).

**General Design Requirements**
- Use semantic HTML tags (\`<nav>\`, \`<a>\`, \`<button>\`)
- Provide clear visual feedback (hover, active states)
- Support keyboard navigation (Tab, Enter, Arrow keys)
- Responsive design (mobile-friendly)

Please provide complete HTML and TailwindCSS classes.`
    }
  }

  // TODO: 後續為其他分類添加通用 Prompt
};

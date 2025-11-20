// 导航组件数据 - Navigation Components Data
import { loadingSkeletons } from './loadingSkeletons';

export const navigationComponents = [
  {
    id: 'breadcrumbs',
    title: 'data.components.navigation.breadcrumbs.title',
    description: 'data.components.navigation.breadcrumbs.description',
    // 五種 UI 風格設計
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.navigation.breadcrumbs.variants.minimalism.name',
        description: 'data.components.navigation.breadcrumbs.variants.minimalism.description',
        demoHTML: `
          <nav class="w-full text-sm" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <ol class="flex items-center gap-3">
              <li>
                <a href="javascript:void(0)" class="text-black hover:opacity-60 transition-opacity duration-200" style="font-weight: 400;">
                  {{t:demo.navigation.home}}
                </a>
              </li>
              <li class="text-gray-300" style="font-weight: 200;">|</li>
              <li>
                <a href="javascript:void(0)" class="text-black hover:opacity-60 transition-opacity duration-200" style="font-weight: 400;">
                  {{t:demo.navigation.products}}
                </a>
              </li>
              <li class="text-gray-300" style="font-weight: 200;">|</li>
              <li class="text-black" style="font-weight: 600; letter-spacing: 0.02em;">
                {{t:demo.navigation.shoes}}
              </li>
            </ol>
          </nav>
        `
      },
      {
        id: 'skeuomorphism',
        name: 'data.components.navigation.breadcrumbs.variants.skeuomorphism.name',
        description: 'data.components.navigation.breadcrumbs.variants.skeuomorphism.description',
        demoHTML: `
          <nav class="w-full" style="font-family: 'Courier New', monospace;">
            <ol class="flex items-center gap-2 text-sm">
              <li>
                <a href="javascript:void(0)" class="breadcrumb-skeuo-link">
                  {{t:demo.navigation.home}}
                </a>
              </li>
              <li class="breadcrumb-skeuo-arrow">▶</li>
              <li>
                <a href="javascript:void(0)" class="breadcrumb-skeuo-link">
                  {{t:demo.navigation.products}}
                </a>
              </li>
              <li class="breadcrumb-skeuo-arrow">▶</li>
              <li class="breadcrumb-skeuo-active">
                {{t:demo.navigation.shoes}}
              </li>
            </ol>
          </nav>
        `,
        customStyles: `
          .breadcrumb-skeuo-link {
            padding: 0.5rem 1rem;
            background: linear-gradient(to bottom, #3b82f6, #2563eb);
            color: white;
            border-radius: 0.375rem;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            box-shadow:
              0 4px 6px rgba(0,0,0,0.3),
              inset 0 1px 0 rgba(255,255,255,0.2),
              inset 0 -1px 0 rgba(0,0,0,0.2);
            border: 1px solid rgba(0,0,0,0.2);
            transition: all 0.2s;
            display: inline-block;
            text-decoration: none;
          }
          .breadcrumb-skeuo-link:hover {
            background: linear-gradient(to bottom, #2563eb, #1d4ed8);
            box-shadow:
              0 6px 10px rgba(0,0,0,0.4),
              inset 0 1px 0 rgba(255,255,255,0.2);
          }
          .breadcrumb-skeuo-arrow {
            color: #64748b;
            font-size: 0.75rem;
            text-shadow: 0 0 4px rgba(100, 116, 139, 0.5);
          }
          .breadcrumb-skeuo-active {
            padding: 0.5rem 1rem;
            background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
            color: #4ade80;
            border-radius: 0.375rem;
            font-weight: 700;
            text-shadow: 0 0 8px rgba(74, 222, 128, 0.8);
            box-shadow:
              inset 0 2px 8px rgba(0,0,0,0.6),
              inset 0 -1px 2px rgba(255,255,255,0.05);
            border: 1px solid rgba(0,0,0,0.4);
            display: inline-block;
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.navigation.breadcrumbs.variants.neumorphism.name',
        description: 'data.components.navigation.breadcrumbs.variants.neumorphism.description',
        demoHTML: `
          <nav class="w-full">
            <ol class="flex items-center gap-3 text-sm">
              <li>
                <a href="javascript:void(0)" class="breadcrumb-neomorph-link">
                  {{t:demo.navigation.home}}
                </a>
              </li>
              <li class="breadcrumb-neomorph-separator">›</li>
              <li>
                <a href="javascript:void(0)" class="breadcrumb-neomorph-link">
                  {{t:demo.navigation.products}}
                </a>
              </li>
              <li class="breadcrumb-neomorph-separator">›</li>
              <li class="breadcrumb-neomorph-active">
                {{t:demo.navigation.shoes}}
              </li>
            </ol>
          </nav>
        `,
        customStyles: `
          nav {
            background: #e0e5ec;
            padding: 1.5rem;
            border-radius: 1rem;
          }
          .breadcrumb-neomorph-link {
            padding: 0.625rem 1.25rem;
            background: #e0e5ec;
            color: #6b7280;
            border-radius: 0.75rem;
            font-weight: 500;
            box-shadow:
              6px 6px 12px #b8bdc4,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
            display: inline-block;
            text-decoration: none;
          }
          .breadcrumb-neomorph-link:hover {
            color: #3b82f6;
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
          }
          .breadcrumb-neomorph-separator {
            color: #9ca3af;
            font-size: 1.25rem;
            font-weight: 300;
          }
          .breadcrumb-neomorph-active {
            padding: 0.625rem 1.25rem;
            background: linear-gradient(145deg, #d1d6dd, #e8edf4);
            color: #1f2937;
            border-radius: 0.75rem;
            font-weight: 600;
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
            display: inline-block;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.breadcrumbs.variants.glassmorphism.name',
        description: 'data.components.navigation.breadcrumbs.variants.glassmorphism.description',
        demoHTML: `
          <nav class="w-full breadcrumb-glass-container">
            <ol class="flex items-center gap-2 text-sm">
              <li>
                <a href="javascript:void(0)" class="breadcrumb-glass-link">
                  {{t:demo.navigation.home}}
                </a>
              </li>
              <li class="breadcrumb-glass-separator">•</li>
              <li>
                <a href="javascript:void(0)" class="breadcrumb-glass-link">
                  {{t:demo.navigation.products}}
                </a>
              </li>
              <li class="breadcrumb-glass-separator">•</li>
              <li class="breadcrumb-glass-active">
                {{t:demo.navigation.shoes}}
              </li>
            </ol>
          </nav>
        `,
        customStyles: `
          .breadcrumb-glass-container {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1rem;
            padding: 1rem 1.5rem;
            box-shadow:
              0 8px 32px 0 rgba(31, 38, 135, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
          }
          .breadcrumb-glass-link {
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: #8b5cf6;
            border-radius: 0.5rem;
            font-weight: 500;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            display: inline-block;
            text-decoration: none;
          }
          .breadcrumb-glass-link:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
            color: #7c3aed;
            box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
          }
          .breadcrumb-glass-separator {
            color: rgba(139, 92, 246, 0.5);
            font-size: 1.5rem;
            line-height: 1;
          }
          .breadcrumb-glass-active {
            padding: 0.5rem 1rem;
            background: rgba(139, 92, 246, 0.3);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: #5b21b6;
            border-radius: 0.5rem;
            font-weight: 700;
            border: 1px solid rgba(139, 92, 246, 0.4);
            box-shadow:
              0 4px 16px rgba(139, 92, 246, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            display: inline-block;
          }
        `
      },
      {
        id: 'hybrid-modern',
        name: 'data.components.navigation.breadcrumbs.variants.hybrid.name',
        description: 'data.components.navigation.breadcrumbs.variants.hybrid.description',
        demoHTML: `
          <nav class="w-full breadcrumb-hybrid-container">
            <ol class="flex items-center gap-3 text-sm flex-wrap">
              <li>
                <a href="javascript:void(0)" class="breadcrumb-hybrid-link">
                  {{t:demo.navigation.home}}
                </a>
              </li>
              <li class="breadcrumb-hybrid-separator">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </li>
              <li>
                <a href="javascript:void(0)" class="breadcrumb-hybrid-link">
                  {{t:demo.navigation.products}}
                </a>
              </li>
              <li class="breadcrumb-hybrid-separator">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </li>
              <li class="breadcrumb-hybrid-active">
                {{t:demo.navigation.shoes}}
              </li>
            </ol>
          </nav>
        `,
        customStyles: `
          .breadcrumb-hybrid-container {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            padding: 1.25rem 1.75rem;
            border-radius: 1.25rem;
            box-shadow:
              0 10px 25px -5px rgba(0, 0, 0, 0.1),
              0 8px 10px -6px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
            position: relative;
            overflow: hidden;
          }
          .breadcrumb-hybrid-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
          }
          .breadcrumb-hybrid-link {
            display: inline-block;
            padding: 0.625rem 1rem;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            color: #6b7280;
            border-radius: 0.625rem;
            font-weight: 500;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow:
              0 2px 8px rgba(0, 0, 0, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-decoration: none;
          }
          .breadcrumb-hybrid-link:hover {
            background: rgba(255, 255, 255, 0.95);
            color: #8b5cf6;
            transform: translateY(-2px);
            box-shadow:
              0 8px 16px rgba(139, 92, 246, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 1);
            border-color: rgba(139, 92, 246, 0.2);
          }
          .breadcrumb-hybrid-separator {
            color: #9ca3af;
            display: flex;
            align-items: center;
          }
          .breadcrumb-hybrid-active {
            display: inline-block;
            padding: 0.625rem 1rem;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            color: #5b21b6;
            border-radius: 0.625rem;
            font-weight: 700;
            border: 1px solid rgba(139, 92, 246, 0.3);
            box-shadow:
              0 4px 12px rgba(139, 92, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              inset 0 -1px 0 rgba(139, 92, 246, 0.1);
          }
        `
      }
    ],
    // 保留原有數據作為回退 (向後兼容)
    demoHTML: `
      <nav class="w-3/4 text-sm">
        <ol class="flex items-center gap-1 text-neutral-500">
          <li><a href="javascript:void(0)" class="hover:text-blue-600">{{t:demo.navigation.home}}</a></li>
          <li>/</li>
          <li><a href="javascript:void(0)" class="hover:text-blue-600">{{t:demo.navigation.products}}</a></li>
          <li>/</li>
          <li class="text-neutral-800 font-medium">{{t:demo.navigation.shoes}}</li>
        </ol>
      </nav>
    `,
    customStyles: '',
    demoBoxClass: 'bg-white'
  },
  {
    id: 'tabs',
    title: 'data.components.navigation.tabs.title',
    description: 'data.components.navigation.tabs.description',
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.navigation.tabs.variants.minimalism.name',
        description: 'data.components.navigation.tabs.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-3xl" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <div role="tablist" class="flex border-b border-gray-200 relative">
              <button class="tabs-min-btn tabs-min-active px-6 py-3 text-sm font-medium transition-colors duration-200 relative">
                Overview
              </button>
              <button class="tabs-min-btn px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Details
              </button>
              <button class="tabs-min-btn px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Settings
              </button>
              <button class="tabs-min-btn px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200">
                History
              </button>
            </div>
            <div class="tabs-min-panel py-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">
                This project aims to revolutionize the way teams collaborate on design systems.
                Our platform provides a unified workspace for designers and developers to create,
                maintain, and evolve their design language.
              </p>
              <div class="flex gap-4">
                <div class="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div class="text-2xl font-bold text-gray-900">847</div>
                  <div class="text-xs text-gray-500 mt-1">Components</div>
                </div>
                <div class="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div class="text-2xl font-bold text-gray-900">23</div>
                  <div class="text-xs text-gray-500 mt-1">Contributors</div>
                </div>
                <div class="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div class="text-2xl font-bold text-gray-900">98%</div>
                  <div class="text-xs text-gray-500 mt-1">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .tabs-min-btn {
            position: relative;
            background: none;
            border: none;
            cursor: pointer;
            outline: none;
          }
          .tabs-min-active {
            color: #000;
          }
          .tabs-min-active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background: #000;
            animation: tabs-min-slide 0.3s ease-out;
          }
          @keyframes tabs-min-slide {
            from {
              transform: scaleX(0);
              opacity: 0;
            }
            to {
              transform: scaleX(1);
              opacity: 1;
            }
          }
          .tabs-min-panel {
            animation: tabs-min-fade 0.4s ease-out;
          }
          @keyframes tabs-min-fade {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      },
      {
        id: 'skeuomorphism',
        name: 'data.components.navigation.tabs.variants.skeuomorphism.name',
        description: 'data.components.navigation.tabs.variants.skeuomorphism.description',
        demoHTML: `
          <div class="w-full max-w-3xl" style="font-family: 'Courier New', monospace;">
            <div role="tablist" class="flex gap-1 relative" style="padding-top: 8px;">
              <button class="tabs-skeuo-btn tabs-skeuo-active">
                Overview
              </button>
              <button class="tabs-skeuo-btn">
                Details
              </button>
              <button class="tabs-skeuo-btn">
                Settings
              </button>
              <button class="tabs-skeuo-btn">
                History
              </button>
            </div>
            <div class="tabs-skeuo-panel">
              <h3 class="text-base font-bold text-white mb-3" style="text-shadow: 0 0 10px rgba(74, 222, 128, 0.8);">
                System Overview
              </h3>
              <p class="text-sm text-gray-300 leading-relaxed mb-4">
                Real-time monitoring dashboard displaying critical system metrics and performance indicators.
                All systems operational and running at peak efficiency.
              </p>
              <div class="grid grid-cols-3 gap-3">
                <div class="tabs-skeuo-stat">
                  <div class="text-xl font-bold text-green-400">Active</div>
                  <div class="text-xs text-gray-400 mt-1">Status</div>
                </div>
                <div class="tabs-skeuo-stat">
                  <div class="text-xl font-bold text-blue-400">99.9%</div>
                  <div class="text-xs text-gray-400 mt-1">Uptime</div>
                </div>
                <div class="tabs-skeuo-stat">
                  <div class="text-xl font-bold text-yellow-400">142ms</div>
                  <div class="text-xs text-gray-400 mt-1">Response</div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .tabs-skeuo-btn {
            padding: 0.75rem 1.5rem;
            background: linear-gradient(to bottom, #2d2d2d, #1a1a1a);
            color: #9ca3af;
            border: none;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            font-weight: 600;
            font-size: 0.875rem;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.05),
              inset 0 -1px 0 rgba(0,0,0,0.3);
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            top: 0;
          }
          .tabs-skeuo-btn:hover:not(.tabs-skeuo-active) {
            background: linear-gradient(to bottom, #3a3a3a, #242424);
            color: #d1d5db;
          }
          .tabs-skeuo-active {
            background: linear-gradient(to bottom, #1f2937, #111827);
            color: #4ade80;
            text-shadow: 0 0 8px rgba(74, 222, 128, 0.8);
            box-shadow:
              inset 0 2px 8px rgba(0,0,0,0.6),
              inset 0 -1px 2px rgba(255,255,255,0.05),
              0 0 15px rgba(74, 222, 128, 0.3);
            top: 2px;
            animation: tabs-skeuo-glow 2s ease-in-out infinite;
          }
          @keyframes tabs-skeuo-glow {
            0%, 100% {
              box-shadow:
                inset 0 2px 8px rgba(0,0,0,0.6),
                inset 0 -1px 2px rgba(255,255,255,0.05),
                0 0 15px rgba(74, 222, 128, 0.3);
            }
            50% {
              box-shadow:
                inset 0 2px 8px rgba(0,0,0,0.6),
                inset 0 -1px 2px rgba(255,255,255,0.05),
                0 0 25px rgba(74, 222, 128, 0.5);
            }
          }
          .tabs-skeuo-panel {
            background: linear-gradient(to bottom, #1f2937, #111827);
            border: 1px solid rgba(0,0,0,0.4);
            border-top: none;
            border-radius: 0 0.5rem 0.5rem 0.5rem;
            padding: 1.5rem;
            box-shadow:
              inset 0 2px 8px rgba(0,0,0,0.6),
              inset 0 -1px 2px rgba(255,255,255,0.05);
            animation: tabs-skeuo-fade 0.4s ease-out;
          }
          @keyframes tabs-skeuo-fade {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .tabs-skeuo-stat {
            padding: 1rem;
            background: linear-gradient(to bottom, #2d2d2d, #1a1a1a);
            border-radius: 0.5rem;
            box-shadow:
              inset 0 2px 4px rgba(0,0,0,0.4),
              inset 0 -1px 0 rgba(255,255,255,0.05);
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.navigation.tabs.variants.neumorphism.name',
        description: 'data.components.navigation.tabs.variants.neumorphism.description',
        demoHTML: `
          <div class="tabs-neomorph-container">
            <div class="w-full max-w-3xl">
              <div role="tablist" class="flex gap-3 mb-0">
                <button class="tabs-neomorph-btn tabs-neomorph-active">
                  Overview
                </button>
                <button class="tabs-neomorph-btn">
                  Details
                </button>
                <button class="tabs-neomorph-btn">
                  Settings
                </button>
                <button class="tabs-neomorph-btn">
                  History
                </button>
              </div>
              <div class="tabs-neomorph-panel">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">
                  Project Overview
                </h3>
                <p class="text-sm text-gray-600 leading-relaxed mb-4">
                  Welcome to your project dashboard. Here you can monitor progress,
                  track team activities, and manage all aspects of your workflow in one place.
                </p>
                <div class="grid grid-cols-3 gap-4">
                  <div class="tabs-neomorph-stat">
                    <div class="text-2xl font-bold text-blue-600">12</div>
                    <div class="text-xs text-gray-500 mt-1">Active Tasks</div>
                  </div>
                  <div class="tabs-neomorph-stat">
                    <div class="text-2xl font-bold text-green-600">8</div>
                    <div class="text-xs text-gray-500 mt-1">Team Members</div>
                  </div>
                  <div class="tabs-neomorph-stat">
                    <div class="text-2xl font-bold text-purple-600">76%</div>
                    <div class="text-xs text-gray-500 mt-1">Completion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .tabs-neomorph-container {
            background: #e0e5ec;
            padding: 2rem;
            border-radius: 1.5rem;
          }
          .tabs-neomorph-btn {
            padding: 0.75rem 1.5rem;
            background: #e0e5ec;
            color: #6b7280;
            border: none;
            border-radius: 0.75rem;
            font-weight: 500;
            font-size: 0.875rem;
            box-shadow:
              6px 6px 12px #b8bdc4,
              -6px -6px 12px #ffffff;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .tabs-neomorph-btn:hover:not(.tabs-neomorph-active) {
            color: #3b82f6;
          }
          .tabs-neomorph-active {
            color: #1f2937;
            font-weight: 600;
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
            animation: tabs-neomorph-press 0.3s ease-out;
          }
          @keyframes tabs-neomorph-press {
            0% {
              box-shadow:
                6px 6px 12px #b8bdc4,
                -6px -6px 12px #ffffff;
            }
            100% {
              box-shadow:
                inset 4px 4px 8px #b8bdc4,
                inset -4px -4px 8px #ffffff;
            }
          }
          .tabs-neomorph-panel {
            background: #e0e5ec;
            border-radius: 1rem;
            padding: 1.5rem;
            margin-top: 1rem;
            box-shadow:
              inset 2px 2px 6px #b8bdc4,
              inset -2px -2px 6px #ffffff;
            animation: tabs-neomorph-fade 0.4s ease-out;
          }
          @keyframes tabs-neomorph-fade {
            from {
              opacity: 0;
              transform: scale(0.98);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .tabs-neomorph-stat {
            padding: 1rem;
            background: #e0e5ec;
            border-radius: 0.75rem;
            box-shadow:
              6px 6px 12px #b8bdc4,
              -6px -6px 12px #ffffff;
            text-align: center;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.tabs.variants.glassmorphism.name',
        description: 'data.components.navigation.tabs.variants.glassmorphism.description',
        demoHTML: `
          <div class="tabs-glass-container">
            <div class="w-full max-w-3xl">
              <div role="tablist" class="flex gap-2 p-1 tabs-glass-nav">
                <button class="tabs-glass-btn tabs-glass-active">
                  Overview
                </button>
                <button class="tabs-glass-btn">
                  Details
                </button>
                <button class="tabs-glass-btn">
                  Settings
                </button>
                <button class="tabs-glass-btn">
                  History
                </button>
              </div>
              <div class="tabs-glass-panel">
                <h3 class="text-lg font-bold text-purple-900 mb-3">
                  Dashboard Overview
                </h3>
                <p class="text-sm text-purple-800 leading-relaxed mb-4">
                  Experience the future of project management with our intuitive glassmorphic interface.
                  Beautiful design meets powerful functionality.
                </p>
                <div class="grid grid-cols-3 gap-3">
                  <div class="tabs-glass-stat">
                    <div class="text-2xl font-bold text-purple-700">245</div>
                    <div class="text-xs text-purple-600 mt-1">Projects</div>
                  </div>
                  <div class="tabs-glass-stat">
                    <div class="text-2xl font-bold text-blue-700">1.2k</div>
                    <div class="text-xs text-blue-600 mt-1">Users</div>
                  </div>
                  <div class="tabs-glass-stat">
                    <div class="text-2xl font-bold text-pink-700">89%</div>
                    <div class="text-xs text-pink-600 mt-1">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .tabs-glass-container {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow:
              0 8px 32px 0 rgba(31, 38, 135, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
          }
          .tabs-glass-nav {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
          }
          .tabs-glass-btn {
            padding: 0.75rem 1.5rem;
            background: transparent;
            color: rgba(139, 92, 246, 0.7);
            border: none;
            border-radius: 0.75rem;
            font-weight: 500;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
          }
          .tabs-glass-btn:hover:not(.tabs-glass-active) {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(139, 92, 246, 0.9);
          }
          .tabs-glass-active {
            background: rgba(139, 92, 246, 0.3);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            color: #5b21b6;
            font-weight: 700;
            border: 1px solid rgba(139, 92, 246, 0.4);
            box-shadow:
              0 4px 16px rgba(139, 92, 246, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
            animation: tabs-glass-glow 2s ease-in-out infinite;
          }
          @keyframes tabs-glass-glow {
            0%, 100% {
              box-shadow:
                0 4px 16px rgba(139, 92, 246, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
            }
            50% {
              box-shadow:
                0 8px 24px rgba(139, 92, 246, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.5);
            }
          }
          .tabs-glass-panel {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1rem;
            padding: 1.5rem;
            margin-top: 1rem;
            box-shadow:
              0 4px 16px rgba(31, 38, 135, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
            animation: tabs-glass-fade 0.5s ease-out;
          }
          @keyframes tabs-glass-fade {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .tabs-glass-stat {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 0.75rem;
            text-align: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        `
      },
      {
        id: 'neobrutalism',
        name: 'data.components.navigation.tabs.variants.neobrutalism.name',
        description: 'data.components.navigation.tabs.variants.neobrutalism.description',
        demoHTML: `
          <div class="w-full max-w-3xl" style="font-family: 'Arial Black', 'Arial Bold', sans-serif;">
            <div role="tablist" class="flex gap-3 flex-wrap">
              <button class="tabs-brutal-btn tabs-brutal-active" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);">
                OVERVIEW
              </button>
              <button class="tabs-brutal-btn" style="background: linear-gradient(135deg, #60a5fa, #3b82f6);">
                DETAILS
              </button>
              <button class="tabs-brutal-btn" style="background: linear-gradient(135deg, #34d399, #10b981);">
                SETTINGS
              </button>
              <button class="tabs-brutal-btn" style="background: linear-gradient(135deg, #f472b6, #ec4899);">
                HISTORY
              </button>
            </div>
            <div class="tabs-brutal-panel">
              <h3 class="text-xl font-black text-black mb-3 uppercase">
                Project Dashboard
              </h3>
              <p class="text-sm font-bold text-black leading-tight mb-4">
                BOLD. VIBRANT. UNAPOLOGETIC. This is where creativity meets brutalist design philosophy.
                No compromise. Pure functionality with maximum visual impact.
              </p>
              <div class="grid grid-cols-3 gap-4">
                <div class="tabs-brutal-stat" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);">
                  <div class="text-2xl font-black text-black">156</div>
                  <div class="text-xs font-black text-black mt-1">TASKS</div>
                </div>
                <div class="tabs-brutal-stat" style="background: linear-gradient(135deg, #34d399, #10b981);">
                  <div class="text-2xl font-black text-black">24</div>
                  <div class="text-xs font-black text-black mt-1">TEAM</div>
                </div>
                <div class="tabs-brutal-stat" style="background: linear-gradient(135deg, #f472b6, #ec4899);">
                  <div class="text-2xl font-black text-black">92%</div>
                  <div class="text-xs font-black text-black mt-1">DONE</div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .tabs-brutal-btn {
            padding: 0.75rem 1.5rem;
            color: #000;
            border: 4px solid #000;
            border-radius: 0.5rem;
            font-weight: 900;
            font-size: 0.75rem;
            box-shadow: 6px 6px 0 #000;
            cursor: pointer;
            transition: all 0.2s ease;
            transform: rotate(-1deg);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .tabs-brutal-btn:hover:not(.tabs-brutal-active) {
            transform: rotate(0deg) translateY(-2px);
            box-shadow: 8px 8px 0 #000;
          }
          .tabs-brutal-btn:active:not(.tabs-brutal-active) {
            transform: rotate(1deg) translateY(0);
            box-shadow: 4px 4px 0 #000;
          }
          .tabs-brutal-active {
            transform: rotate(2deg) scale(1.05);
            box-shadow:
              8px 8px 0 #000,
              inset 0 0 0 3px #fff;
            animation: tabs-brutal-pulse 1.5s ease-in-out infinite;
          }
          @keyframes tabs-brutal-pulse {
            0%, 100% {
              box-shadow:
                8px 8px 0 #000,
                inset 0 0 0 3px #fff;
            }
            50% {
              box-shadow:
                10px 10px 0 #000,
                inset 0 0 0 4px #fff;
            }
          }
          .tabs-brutal-panel {
            background: #fff;
            border: 5px solid #000;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-top: 1.5rem;
            box-shadow: 10px 10px 0 #000;
            transform: rotate(-0.5deg);
            animation: tabs-brutal-fade 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          @keyframes tabs-brutal-fade {
            from {
              opacity: 0;
              transform: rotate(-0.5deg) scale(0.95);
            }
            to {
              opacity: 1;
              transform: rotate(-0.5deg) scale(1);
            }
          }
          .tabs-brutal-stat {
            padding: 1rem;
            border: 4px solid #000;
            border-radius: 0.5rem;
            text-align: center;
            box-shadow: 6px 6px 0 #000;
            transform: rotate(1deg);
          }
        `
      }
    ],
    demoBoxClass: 'bg-white'
  },
  {
    id: 'pagination',
    title: 'data.components.navigation.pagination.title',
    description: 'data.components.navigation.pagination.description',
    // 五種 UI 風格設計
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.navigation.pagination.variants.minimalism.name',
        description: 'data.components.navigation.pagination.variants.minimalism.description',
        demoHTML: `
          <nav class="w-full" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <div class="flex items-center justify-center gap-2 text-sm">
              <button class="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                ← {{t:demo.navigation.prev}}
              </button>

              <button class="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                1
              </button>
              <button class="px-3 py-2 bg-black text-white rounded-md font-medium">
                2
              </button>
              <button class="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                3
              </button>
              <span class="px-2 text-gray-400">...</span>
              <button class="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                10
              </button>

              <button class="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                {{t:demo.navigation.next}} →
              </button>
            </div>
          </nav>
        `
      },
      {
        id: 'skeuomorphism',
        name: 'data.components.navigation.pagination.variants.skeuomorphism.name',
        description: 'data.components.navigation.pagination.variants.skeuomorphism.description',
        demoHTML: `
          <nav class="w-full" style="font-family: 'Courier New', monospace;">
            <div class="flex items-center justify-center gap-2 text-sm flex-wrap">
              <button class="pagination-skeuo-btn">
                ◄ {{t:demo.navigation.prev}}
              </button>

              <button class="pagination-skeuo-btn">1</button>
              <button class="pagination-skeuo-active">2</button>
              <button class="pagination-skeuo-btn">3</button>
              <button class="pagination-skeuo-btn">4</button>
              <span class="pagination-skeuo-ellipsis">...</span>
              <button class="pagination-skeuo-btn">10</button>

              <button class="pagination-skeuo-btn">
                {{t:demo.navigation.next}} ►
              </button>
            </div>
          </nav>
        `,
        customStyles: `
          .pagination-skeuo-btn {
            padding: 0.5rem 1rem;
            background: linear-gradient(to bottom, #3b82f6, #2563eb);
            color: white;
            border-radius: 0.375rem;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            box-shadow:
              0 4px 6px rgba(0,0,0,0.3),
              inset 0 1px 0 rgba(255,255,255,0.2),
              inset 0 -1px 0 rgba(0,0,0,0.2);
            border: 1px solid rgba(0,0,0,0.2);
            transition: all 0.2s;
            cursor: pointer;
          }
          .pagination-skeuo-btn:hover {
            background: linear-gradient(to bottom, #2563eb, #1d4ed8);
            box-shadow:
              0 6px 10px rgba(0,0,0,0.4),
              inset 0 1px 0 rgba(255,255,255,0.2);
          }
          .pagination-skeuo-btn:active {
            box-shadow:
              inset 0 2px 8px rgba(0,0,0,0.5),
              inset 0 -1px 2px rgba(255,255,255,0.1);
            transform: translateY(1px);
          }
          .pagination-skeuo-active {
            padding: 0.5rem 1rem;
            background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
            color: #4ade80;
            border-radius: 0.375rem;
            font-weight: 700;
            text-shadow: 0 0 8px rgba(74, 222, 128, 0.8);
            box-shadow:
              inset 0 2px 8px rgba(0,0,0,0.6),
              inset 0 -1px 2px rgba(255,255,255,0.05),
              0 0 12px rgba(74, 222, 128, 0.4);
            border: 1px solid rgba(0,0,0,0.4);
          }
          .pagination-skeuo-ellipsis {
            color: #64748b;
            font-size: 1rem;
            font-weight: 700;
            padding: 0 0.25rem;
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.navigation.pagination.variants.neumorphism.name',
        description: 'data.components.navigation.pagination.variants.neumorphism.description',
        demoHTML: `
          <nav class="pagination-neomorph-container">
            <div class="flex items-center justify-center gap-3 text-sm flex-wrap">
              <button class="pagination-neomorph-btn">
                ← {{t:demo.navigation.prev}}
              </button>

              <button class="pagination-neomorph-btn">1</button>
              <button class="pagination-neomorph-active">2</button>
              <button class="pagination-neomorph-btn">3</button>
              <button class="pagination-neomorph-btn">4</button>
              <span class="pagination-neomorph-ellipsis">...</span>
              <button class="pagination-neomorph-btn">10</button>

              <button class="pagination-neomorph-btn">
                {{t:demo.navigation.next}} →
              </button>
            </div>
          </nav>
        `,
        customStyles: `
          .pagination-neomorph-container {
            background: #e0e5ec;
            padding: 1.5rem;
            border-radius: 1rem;
          }
          .pagination-neomorph-btn {
            padding: 0.625rem 1rem;
            background: #e0e5ec;
            color: #6b7280;
            border-radius: 0.75rem;
            font-weight: 500;
            box-shadow:
              6px 6px 12px #b8bdc4,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          .pagination-neomorph-btn:hover {
            color: #3b82f6;
            box-shadow:
              inset 3px 3px 6px #b8bdc4,
              inset -3px -3px 6px #ffffff;
          }
          .pagination-neomorph-active {
            padding: 0.625rem 1rem;
            background: linear-gradient(145deg, #d1d6dd, #e8edf4);
            color: #1f2937;
            border-radius: 0.75rem;
            font-weight: 600;
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
            border: none;
          }
          .pagination-neomorph-ellipsis {
            color: #9ca3af;
            font-size: 1.25rem;
            font-weight: 300;
            padding: 0 0.25rem;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.pagination.variants.glassmorphism.name',
        description: 'data.components.navigation.pagination.variants.glassmorphism.description',
        demoHTML: `
          <nav class="pagination-glass-container">
            <div class="flex items-center justify-center gap-2 text-sm flex-wrap">
              <button class="pagination-glass-btn">
                ← {{t:demo.navigation.prev}}
              </button>

              <button class="pagination-glass-btn">1</button>
              <button class="pagination-glass-active">2</button>
              <button class="pagination-glass-btn">3</button>
              <button class="pagination-glass-btn">4</button>
              <span class="pagination-glass-ellipsis">•••</span>
              <button class="pagination-glass-btn">10</button>

              <button class="pagination-glass-btn">
                {{t:demo.navigation.next}} →
              </button>
            </div>
          </nav>
        `,
        customStyles: `
          .pagination-glass-container {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1rem;
            padding: 1rem 1.5rem;
            box-shadow:
              0 8px 32px 0 rgba(31, 38, 135, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
          }
          .pagination-glass-btn {
            padding: 0.5rem 0.875rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: #8b5cf6;
            border-radius: 0.5rem;
            font-weight: 500;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .pagination-glass-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
            color: #7c3aed;
            box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
            transform: translateY(-2px);
          }
          .pagination-glass-active {
            padding: 0.5rem 0.875rem;
            background: rgba(139, 92, 246, 0.3);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: #5b21b6;
            border-radius: 0.5rem;
            font-weight: 700;
            border: 1px solid rgba(139, 92, 246, 0.4);
            box-shadow:
              0 4px 16px rgba(139, 92, 246, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          .pagination-glass-ellipsis {
            color: rgba(139, 92, 246, 0.5);
            font-size: 1rem;
            padding: 0 0.25rem;
          }
        `
      },
      {
        id: 'neobrutalism',
        name: 'data.components.navigation.pagination.variants.neobrutalism.name',
        description: 'data.components.navigation.pagination.variants.neobrutalism.description',
        demoHTML: `
          <nav class="w-full">
            <div class="flex items-center justify-center gap-3 text-sm flex-wrap">
              <button class="pagination-brutal-btn pagination-brutal-prev">
                ← {{t:demo.navigation.prev}}
              </button>

              <button class="pagination-brutal-btn pagination-brutal-number">1</button>
              <button class="pagination-brutal-active">2</button>
              <button class="pagination-brutal-btn pagination-brutal-number">3</button>
              <button class="pagination-brutal-btn pagination-brutal-number">4</button>
              <span class="pagination-brutal-ellipsis">...</span>
              <button class="pagination-brutal-btn pagination-brutal-number">10</button>

              <button class="pagination-brutal-btn pagination-brutal-next">
                {{t:demo.navigation.next}} →
              </button>
            </div>
          </nav>
        `,
        customStyles: `
          .pagination-brutal-btn {
            padding: 0.625rem 1rem;
            font-weight: 700;
            border: 4px solid #000;
            border-radius: 0.5rem;
            box-shadow: 6px 6px 0 #000;
            transition: all 0.2s ease;
            cursor: pointer;
            transform: rotate(-1deg);
          }
          .pagination-brutal-btn:hover {
            transform: rotate(0deg) translateY(-2px);
            box-shadow: 8px 8px 0 #000;
          }
          .pagination-brutal-btn:active {
            transform: rotate(1deg) translateY(0);
            box-shadow: 4px 4px 0 #000;
          }
          .pagination-brutal-prev {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: #000;
          }
          .pagination-brutal-next {
            background: linear-gradient(135deg, #34d399, #10b981);
            color: #000;
          }
          .pagination-brutal-number {
            background: linear-gradient(135deg, #60a5fa, #3b82f6);
            color: #fff;
            transform: rotate(1deg);
          }
          .pagination-brutal-number:hover {
            transform: rotate(-1deg) translateY(-2px);
          }
          .pagination-brutal-active {
            padding: 0.625rem 1rem;
            background: linear-gradient(135deg, #ff6b6b, #ee5a52);
            color: #fff;
            font-weight: 800;
            border: 4px solid #000;
            border-radius: 0.5rem;
            box-shadow:
              6px 6px 0 #000,
              inset 0 0 0 2px #fff;
            transform: rotate(2deg);
          }
          .pagination-brutal-ellipsis {
            color: #000;
            font-size: 1.25rem;
            font-weight: 900;
            padding: 0 0.5rem;
          }
        `
      }
    ],
    // 保留原有數據作為回退 (向後兼容)
    demoHTML: `
      <div class="w-full flex items-center justify-between text-sm px-4">
        <button class="px-3 py-1 border rounded-md">{{t:demo.navigation.previousPage}}</button>
        <ul class="flex items-center gap-1">
          <li><button class="px-3 py-1 rounded-md border bg-blue-600 text-white">1</button></li>
          <li><button class="px-3 py-1 rounded-md border">2</button></li>
          <li><button class="px-3 py-1 rounded-md border">3</button></li>
          <li><span class="px-2">…</span></li>
          <li><button class="px-3 py-1 rounded-md border">10</button></li>
        </ul>
        <button class="px-3 py-1 border rounded-md">{{t:demo.navigation.nextPage}}</button>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'bg-white'
  },
  {
    id: 'stepper',
    title: 'data.components.navigation.stepper.title',
    description: 'data.components.navigation.stepper.description',
    // 五種 UI 風格設計
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.navigation.stepper.variants.minimalism.name',
        description: 'data.components.navigation.stepper.variants.minimalism.description',
        demoHTML: `
          <div class="w-full" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <ol class="flex items-center justify-between">
              <!-- 步驟 1: 已完成 -->
              <li class="flex flex-col items-center gap-2 relative flex-1">
                <div class="stepper-min-step-completed">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-xs font-medium text-gray-900">{{t:demo.navigation.step1}}</span>
              </li>

              <!-- 連接線 1: 已完成 -->
              <div class="stepper-min-line-completed"></div>

              <!-- 步驟 2: 當前 -->
              <li class="flex flex-col items-center gap-2 relative flex-1">
                <div class="stepper-min-step-current">2</div>
                <span class="text-xs font-semibold text-black">{{t:demo.navigation.step2}}</span>
              </li>

              <!-- 連接線 2: 未完成 -->
              <div class="stepper-min-line-pending"></div>

              <!-- 步驟 3: 未完成 -->
              <li class="flex flex-col items-center gap-2 relative flex-1">
                <div class="stepper-min-step-pending">3</div>
                <span class="text-xs font-light text-gray-400">{{t:demo.navigation.step3}}</span>
              </li>
            </ol>
          </div>
        `,
        customStyles: `
          .stepper-min-step-completed {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            background: #000;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 0.875rem;
            transition: all 0.3s ease;
          }
          .stepper-min-step-current {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            background: #000;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.875rem;
            box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .stepper-min-step-pending {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            background: #fff;
            color: #9ca3af;
            border: 2px solid #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 400;
            font-size: 0.875rem;
            transition: all 0.3s ease;
          }
          .stepper-min-line-completed {
            flex: 1;
            height: 2px;
            background: #000;
            margin: 0 0.5rem;
            transition: all 0.4s ease;
          }
          .stepper-min-line-pending {
            flex: 1;
            height: 2px;
            background: #e5e7eb;
            margin: 0 0.5rem;
            transition: all 0.4s ease;
          }
        `
      },
      {
        id: 'skeuomorphism',
        name: 'data.components.navigation.stepper.variants.skeuomorphism.name',
        description: 'data.components.navigation.stepper.variants.skeuomorphism.description',
        demoHTML: `
          <div class="w-full" style="font-family: 'Courier New', monospace;">
            <ol class="flex items-center justify-between">
              <!-- 步驟 1: 已完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-skeuo-step-completed">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-xs font-bold text-green-700 text-shadow-sm">{{t:demo.navigation.step1}}</span>
              </li>

              <!-- 連接線 1: 已完成 -->
              <div class="stepper-skeuo-line-completed"></div>

              <!-- 步驟 2: 當前 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-skeuo-step-current">2</div>
                <span class="text-xs font-bold text-blue-800 text-shadow-sm">{{t:demo.navigation.step2}}</span>
              </li>

              <!-- 連接線 2: 未完成 -->
              <div class="stepper-skeuo-line-pending"></div>

              <!-- 步驟 3: 未完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-skeuo-step-pending">3</div>
                <span class="text-xs font-medium text-gray-500">{{t:demo.navigation.step3}}</span>
              </li>
            </ol>
          </div>
        `,
        customStyles: `
          .stepper-skeuo-step-completed {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 9999px;
            background: linear-gradient(to bottom, #4ade80, #22c55e);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1rem;
            text-shadow: 0 1px 2px rgba(0,0,0,0.4);
            box-shadow:
              0 4px 8px rgba(0,0,0,0.3),
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(0,0,0,0.2),
              0 0 16px rgba(74, 222, 128, 0.6);
            border: 2px solid rgba(255,255,255,0.3);
          }
          .stepper-skeuo-step-current {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 9999px;
            background: linear-gradient(to bottom, #3b82f6, #2563eb);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1rem;
            text-shadow: 0 1px 2px rgba(0,0,0,0.4);
            box-shadow:
              0 6px 12px rgba(0,0,0,0.4),
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(0,0,0,0.2),
              0 0 20px rgba(59, 130, 246, 0.8);
            border: 2px solid rgba(255,255,255,0.4);
            animation: stepper-pulse 2s ease-in-out infinite;
          }
          .stepper-skeuo-step-pending {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 9999px;
            background: linear-gradient(to bottom, #e5e7eb, #d1d5db);
            color: #6b7280;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1rem;
            text-shadow: 0 1px 0 rgba(255,255,255,0.8);
            box-shadow:
              inset 0 2px 4px rgba(0,0,0,0.2),
              inset 0 -1px 0 rgba(255,255,255,0.5);
            border: 1px solid rgba(0,0,0,0.1);
          }
          .stepper-skeuo-line-completed {
            flex: 1;
            height: 4px;
            background: linear-gradient(to right, #4ade80, #22c55e);
            margin: 0 0.75rem;
            border-radius: 2px;
            box-shadow:
              0 2px 4px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.2),
              0 0 8px rgba(74, 222, 128, 0.4);
          }
          .stepper-skeuo-line-pending {
            flex: 1;
            height: 4px;
            background: linear-gradient(to bottom, #e5e7eb, #d1d5db);
            margin: 0 0.75rem;
            border-radius: 2px;
            box-shadow:
              inset 0 2px 3px rgba(0,0,0,0.15),
              inset 0 -1px 0 rgba(255,255,255,0.5);
          }
          @keyframes stepper-pulse {
            0%, 100% {
              box-shadow:
                0 6px 12px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.3),
                inset 0 -1px 0 rgba(0,0,0,0.2),
                0 0 20px rgba(59, 130, 246, 0.8);
            }
            50% {
              box-shadow:
                0 8px 16px rgba(0,0,0,0.5),
                inset 0 1px 0 rgba(255,255,255,0.3),
                inset 0 -1px 0 rgba(0,0,0,0.2),
                0 0 30px rgba(59, 130, 246, 1);
            }
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.navigation.stepper.variants.neumorphism.name',
        description: 'data.components.navigation.stepper.variants.neumorphism.description',
        demoHTML: `
          <div class="stepper-neomorph-container">
            <ol class="flex items-center justify-between">
              <!-- 步驟 1: 已完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-neomorph-step-completed">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-xs font-semibold text-green-700">{{t:demo.navigation.step1}}</span>
              </li>

              <!-- 連接線 1: 已完成 -->
              <div class="stepper-neomorph-line-completed"></div>

              <!-- 步驟 2: 當前 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-neomorph-step-current">2</div>
                <span class="text-xs font-semibold text-blue-700">{{t:demo.navigation.step2}}</span>
              </li>

              <!-- 連接線 2: 未完成 -->
              <div class="stepper-neomorph-line-pending"></div>

              <!-- 步驟 3: 未完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-neomorph-step-pending">3</div>
                <span class="text-xs font-medium text-gray-500">{{t:demo.navigation.step3}}</span>
              </li>
            </ol>
          </div>
        `,
        customStyles: `
          .stepper-neomorph-container {
            background: #e0e5ec;
            padding: 2rem;
            border-radius: 1.5rem;
          }
          .stepper-neomorph-step-completed {
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 9999px;
            background: linear-gradient(145deg, #22c55e, #16a34a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1rem;
            box-shadow:
              6px 6px 12px #b8bdc4,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }
          .stepper-neomorph-step-current {
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 9999px;
            background: linear-gradient(145deg, #3b82f6, #2563eb);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1rem;
            box-shadow:
              8px 8px 16px #b8bdc4,
              -8px -8px 16px #ffffff,
              inset 0 0 0 2px rgba(255,255,255,0.3);
            transition: all 0.3s ease;
          }
          .stepper-neomorph-step-pending {
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 9999px;
            background: #e0e5ec;
            color: #9ca3af;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1rem;
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          .stepper-neomorph-line-completed {
            flex: 1;
            height: 6px;
            background: linear-gradient(145deg, #22c55e, #16a34a);
            margin: 0 1rem;
            border-radius: 3px;
            box-shadow:
              3px 3px 6px #b8bdc4,
              -3px -3px 6px #ffffff;
          }
          .stepper-neomorph-line-pending {
            flex: 1;
            height: 6px;
            background: #e0e5ec;
            margin: 0 1rem;
            border-radius: 3px;
            box-shadow:
              inset 2px 2px 4px #b8bdc4,
              inset -2px -2px 4px #ffffff;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.stepper.variants.glassmorphism.name',
        description: 'data.components.navigation.stepper.variants.glassmorphism.description',
        demoHTML: `
          <div class="stepper-glass-container">
            <ol class="flex items-center justify-between">
              <!-- 步驟 1: 已完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-glass-step-completed">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-xs font-semibold text-green-700">{{t:demo.navigation.step1}}</span>
              </li>

              <!-- 連接線 1: 已完成 -->
              <div class="stepper-glass-line-completed"></div>

              <!-- 步驟 2: 當前 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-glass-step-current">2</div>
                <span class="text-xs font-bold text-purple-700">{{t:demo.navigation.step2}}</span>
              </li>

              <!-- 連接線 2: 未完成 -->
              <div class="stepper-glass-line-pending"></div>

              <!-- 步驟 3: 未完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-glass-step-pending">3</div>
                <span class="text-xs font-medium text-purple-400">{{t:demo.navigation.step3}}</span>
              </li>
            </ol>
          </div>
        `,
        customStyles: `
          .stepper-glass-container {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow:
              0 8px 32px 0 rgba(31, 38, 135, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
          }
          .stepper-glass-step-completed {
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 9999px;
            background: rgba(34, 197, 94, 0.6);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.5);
            box-shadow:
              0 8px 24px rgba(34, 197, 94, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
            transition: all 0.3s ease;
          }
          .stepper-glass-step-current {
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 9999px;
            background: rgba(139, 92, 246, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.6);
            box-shadow:
              0 12px 32px rgba(139, 92, 246, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              0 0 24px rgba(139, 92, 246, 0.6);
            transition: all 0.3s ease;
          }
          .stepper-glass-step-pending {
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: rgba(139, 92, 246, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow:
              0 4px 16px rgba(139, 92, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
          }
          .stepper-glass-line-completed {
            flex: 1;
            height: 6px;
            background: rgba(34, 197, 94, 0.5);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            margin: 0 1rem;
            border-radius: 3px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow:
              0 4px 16px rgba(34, 197, 94, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          .stepper-glass-line-pending {
            flex: 1;
            height: 6px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            margin: 0 1rem;
            border-radius: 3px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow:
              inset 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `
      },
      {
        id: 'neobrutalism',
        name: 'data.components.navigation.stepper.variants.neobrutalism.name',
        description: 'data.components.navigation.stepper.variants.neobrutalism.description',
        demoHTML: `
          <div class="w-full">
            <ol class="flex items-center justify-between">
              <!-- 步驟 1: 已完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-brutal-step-completed">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-xs font-black text-black">{{t:demo.navigation.step1}}</span>
              </li>

              <!-- 連接線 1: 已完成 -->
              <div class="stepper-brutal-line-completed"></div>

              <!-- 步驟 2: 當前 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-brutal-step-current">2</div>
                <span class="text-xs font-black text-black">{{t:demo.navigation.step2}}</span>
              </li>

              <!-- 連接線 2: 未完成 -->
              <div class="stepper-brutal-line-pending"></div>

              <!-- 步驟 3: 未完成 -->
              <li class="flex flex-col items-center gap-3 relative flex-1">
                <div class="stepper-brutal-step-pending">3</div>
                <span class="text-xs font-bold text-gray-500">{{t:demo.navigation.step3}}</span>
              </li>
            </ol>
          </div>
        `,
        customStyles: `
          .stepper-brutal-step-completed {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #4ade80, #22c55e);
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.125rem;
            border: 5px solid #000;
            box-shadow: 7px 7px 0 #000;
            transform: rotate(-2deg);
            transition: all 0.2s ease;
          }
          .stepper-brutal-step-completed:hover {
            transform: rotate(0deg) translateY(-3px);
            box-shadow: 9px 9px 0 #000;
          }
          .stepper-brutal-step-current {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.125rem;
            border: 5px solid #000;
            box-shadow:
              8px 8px 0 #000,
              inset 0 0 0 3px #fff;
            transform: rotate(2deg) scale(1.1);
            transition: all 0.2s ease;
            animation: stepper-brutal-pulse 1.5s ease-in-out infinite;
          }
          .stepper-brutal-step-pending {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: #f3f4f6;
            color: #9ca3af;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.125rem;
            border: 4px solid #d1d5db;
            box-shadow: 5px 5px 0 #d1d5db;
            transform: rotate(1deg);
            transition: all 0.2s ease;
          }
          .stepper-brutal-line-completed {
            flex: 1;
            height: 8px;
            background: linear-gradient(135deg, #4ade80, #22c55e);
            margin: 0 1rem;
            border-radius: 2px;
            border-top: 4px solid #000;
            border-bottom: 4px solid #000;
            box-shadow: 0 4px 0 #000;
            transform: translateY(-2px);
          }
          .stepper-brutal-line-pending {
            flex: 1;
            height: 8px;
            background: #f3f4f6;
            margin: 0 1rem;
            border-radius: 2px;
            border-top: 3px solid #d1d5db;
            border-bottom: 3px solid #d1d5db;
            transform: translateY(-2px);
          }
          @keyframes stepper-brutal-pulse {
            0%, 100% {
              box-shadow:
                8px 8px 0 #000,
                inset 0 0 0 3px #fff;
            }
            50% {
              box-shadow:
                10px 10px 0 #000,
                inset 0 0 0 4px #fff;
            }
          }
        `
      }
    ],
    // 保留原有數據作為回退 (向後兼容)
    demoHTML: `
      <ol class="w-5/6 flex items-center justify-between text-sm">
        <li class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
          <span class="text-xs">{{t:demo.navigation.step1}}</span>
        </li>
        <div class="flex-1 h-1 bg-neutral-200 mx-2">
          <div class="h-1 bg-blue-600 w-1/2"></div>
        </div>
        <li class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center text-xs">2</span>
          <span class="text-xs">{{t:demo.navigation.step2}}</span>
        </li>
        <div class="flex-1 h-1 bg-neutral-200 mx-2"></div>
        <li class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-full border flex items-center justify-center text-xs">3</span>
          <span class="text-xs">{{t:demo.navigation.step3}}</span>
        </li>
      </ol>
    `,
    customStyles: '',
    demoBoxClass: 'bg-white'
  },
  {
    id: 'segmented-control',
    title: 'data.components.navigation.segmented-control.title',
    description: 'data.components.navigation.segmented-control.description',
    // Five UI style variants
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.navigation.segmented-control.variants.minimalism.name',
        description: 'data.components.navigation.segmented-control.variants.minimalism.description',
        demoHTML: `
          <div class="inline-flex border border-black text-sm" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <input class="sr-only peer/day" type="radio" name="seg-min" id="seg-min-1" checked>
            <label for="seg-min-1" class="segmented-minimal-label">
              Day
            </label>
            <input class="sr-only peer/week" type="radio" name="seg-min" id="seg-min-2">
            <label for="seg-min-2" class="segmented-minimal-label">
              Week
            </label>
            <input class="sr-only peer/month" type="radio" name="seg-min" id="seg-min-3">
            <label for="seg-min-3" class="segmented-minimal-label">
              Month
            </label>
          </div>
        `,
        customStyles: `
          .segmented-minimal-label {
            padding: 0.5rem 1.5rem;
            cursor: pointer;
            font-weight: 400;
            border-right: 1px solid black;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: white;
            position: relative;
          }
          .segmented-minimal-label:last-child {
            border-right: none;
          }
          input:checked + .segmented-minimal-label {
            background: black;
            color: white;
            font-weight: 600;
          }
          .segmented-minimal-label:hover:not(input:checked + .segmented-minimal-label) {
            background: #f5f5f5;
          }
        `
      },
      {
        id: 'material',
        name: 'data.components.navigation.segmented-control.variants.material.name',
        description: 'data.components.navigation.segmented-control.variants.material.description',
        demoHTML: `
          <div class="relative inline-flex bg-purple-50 rounded-lg p-1 text-sm" style="font-family: 'Roboto', sans-serif;">
            <input class="sr-only peer/day" type="radio" name="seg-mat" id="seg-mat-1" checked>
            <label for="seg-mat-1" class="segmented-material-label">
              Day
            </label>
            <input class="sr-only peer/week" type="radio" name="seg-mat" id="seg-mat-2">
            <label for="seg-mat-2" class="segmented-material-label">
              Week
            </label>
            <input class="sr-only peer/month" type="radio" name="seg-mat" id="seg-mat-3">
            <label for="seg-mat-3" class="segmented-material-label">
              Month
            </label>
            <div class="segmented-material-indicator"></div>
          </div>
        `,
        customStyles: `
          .segmented-material-label {
            position: relative;
            padding: 0.5rem 1.25rem;
            cursor: pointer;
            font-weight: 500;
            border-radius: 0.5rem;
            transition: all 0.2s ease;
            z-index: 1;
            overflow: hidden;
          }
          input:checked + .segmented-material-label {
            color: #7c3aed;
          }
          .segmented-material-label::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(124, 58, 237, 0.1);
            transform: translate(-50%, -50%);
            transition: width 0.5s, height 0.5s;
          }
          .segmented-material-label:active::before {
            width: 200%;
            height: 200%;
          }
          input:checked + .segmented-material-label {
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.segmented-control.variants.glassmorphism.name',
        description: 'data.components.navigation.segmented-control.variants.glassmorphism.description',
        demoHTML: `
          <div class="inline-flex rounded-xl p-1 text-sm segmented-glass-container">
            <input class="sr-only peer/day" type="radio" name="seg-glass" id="seg-glass-1" checked>
            <label for="seg-glass-1" class="segmented-glass-label">
              Day
            </label>
            <input class="sr-only peer/week" type="radio" name="seg-glass" id="seg-glass-2">
            <label for="seg-glass-2" class="segmented-glass-label">
              Week
            </label>
            <input class="sr-only peer/month" type="radio" name="seg-glass" id="seg-glass-3">
            <label for="seg-glass-3" class="segmented-glass-label">
              Month
            </label>
          </div>
        `,
        customStyles: `
          .segmented-glass-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .segmented-glass-label {
            padding: 0.5rem 1.25rem;
            cursor: pointer;
            font-weight: 500;
            border-radius: 0.75rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            color: #374151;
            position: relative;
          }
          input:checked + .segmented-glass-label {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            color: #6366f1;
            font-weight: 600;
          }
          .segmented-glass-label::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.75rem;
            padding: 1px;
            background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s;
          }
          input:checked + .segmented-glass-label::before {
            opacity: 1;
          }
          .segmented-glass-label:hover:not(input:checked + .segmented-glass-label) {
            background: rgba(255, 255, 255, 0.3);
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.navigation.segmented-control.variants.neumorphism.name',
        description: 'data.components.navigation.segmented-control.variants.neumorphism.description',
        demoHTML: `
          <div class="inline-flex rounded-full p-1.5 text-sm segmented-neomorph-container">
            <input class="sr-only peer/day" type="radio" name="seg-neomorph" id="seg-neomorph-1" checked>
            <label for="seg-neomorph-1" class="segmented-neomorph-label">
              Day
            </label>
            <input class="sr-only peer/week" type="radio" name="seg-neomorph" id="seg-neomorph-2">
            <label for="seg-neomorph-2" class="segmented-neomorph-label">
              Week
            </label>
            <input class="sr-only peer/month" type="radio" name="seg-neomorph" id="seg-neomorph-3">
            <label for="seg-neomorph-3" class="segmented-neomorph-label">
              Month
            </label>
          </div>
        `,
        customStyles: `
          .segmented-neomorph-container {
            background: #e0e5ec;
            box-shadow:
              inset 2px 2px 5px rgba(136, 165, 191, 0.48),
              inset -2px -2px 5px rgba(255, 255, 255, 0.8);
          }
          .segmented-neomorph-label {
            padding: 0.5rem 1.25rem;
            cursor: pointer;
            font-weight: 500;
            border-radius: 9999px;
            transition: all 0.3s ease;
            color: #6b7280;
          }
          input:checked + .segmented-neomorph-label {
            background: #e0e5ec;
            box-shadow:
              4px 4px 8px rgba(136, 165, 191, 0.48),
              -4px -4px 8px rgba(255, 255, 255, 0.8);
            color: #4f46e5;
            font-weight: 600;
          }
          .segmented-neomorph-label:hover:not(input:checked + .segmented-neomorph-label) {
            color: #374151;
          }
        `
      },
      {
        id: 'bootstrap',
        name: 'data.components.navigation.segmented-control.variants.bootstrap.name',
        description: 'data.components.navigation.segmented-control.variants.bootstrap.description',
        demoHTML: `
          <div class="inline-flex border border-gray-300 rounded text-sm" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <input class="sr-only peer/day" type="radio" name="seg-boot" id="seg-boot-1" checked>
            <label for="seg-boot-1" class="segmented-bootstrap-label segmented-bootstrap-first">
              Day
            </label>
            <input class="sr-only peer/week" type="radio" name="seg-boot" id="seg-boot-2">
            <label for="seg-boot-2" class="segmented-bootstrap-label">
              Week
            </label>
            <input class="sr-only peer/month" type="radio" name="seg-boot" id="seg-boot-3">
            <label for="seg-boot-3" class="segmented-bootstrap-label segmented-bootstrap-last">
              Month
            </label>
          </div>
        `,
        customStyles: `
          .segmented-bootstrap-label {
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-weight: 400;
            transition: all 0.15s ease-in-out;
            background: white;
            color: #0d6efd;
            border-right: 1px solid #d1d5db;
          }
          .segmented-bootstrap-label:last-child {
            border-right: none;
          }
          .segmented-bootstrap-first {
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
          }
          .segmented-bootstrap-last {
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
          }
          input:checked + .segmented-bootstrap-label {
            background: #0d6efd;
            color: white;
            font-weight: 500;
            box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
          }
          .segmented-bootstrap-label:hover:not(input:checked + .segmented-bootstrap-label) {
            background: #e7f1ff;
            color: #0a58ca;
          }
          .segmented-bootstrap-label:active {
            background: #0a58ca;
            color: white;
          }
        `
      }
    ]
  },
  {
    id: 'nav-card-grid',
    title: 'data.components.navigation.nav-card-grid.title',
    description: 'data.components.navigation.nav-card-grid.description',
    // Five brand new UI style variants: Bootstrap 5, Material Design 3, Glassmorphism, Neo-brutalism, 3D Perspective
    variants: [
      // ==================== Variant 1: Bootstrap 5 Style ====================
      {
        id: 'bootstrap5',
        name: 'data.components.navigation.nav-card-grid.variants.bootstrap5.name',
        description: 'data.components.navigation.nav-card-grid.variants.bootstrap5.description',
        demoHTML: `
          <div class="w-full max-w-5xl mx-auto" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Card 1: Smart Watch -->
              <div class="bs5-card">
                <div class="bs5-card-img">
                  <div class="flex items-center justify-center h-48 bg-gradient-to-br from-indigo-100 to-indigo-50">
                    <svg class="w-20 h-20 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="bs5-card-body">
                  <h5 class="bs5-card-title">{{t:demo.card-grid.smartWatch}}</h5>
                  <p class="bs5-card-text">{{t:demo.card-grid.smartWatchDesc}}</p>
                  <div class="flex items-baseline gap-2 mb-3">
                    <span class="text-2xl font-bold text-gray-900">$299</span>
                    <span class="text-sm text-gray-500 line-through">$399</span>
                  </div>
                  <a href="javascript:void(0)" class="bs5-btn bs5-btn-primary">{{t:demo.card-grid.addToCart}}</a>
                </div>
              </div>

              <!-- Card 2: Wireless Earbuds -->
              <div class="bs5-card">
                <div class="bs5-card-img">
                  <div class="flex items-center justify-center h-48 bg-gradient-to-br from-purple-100 to-purple-50">
                    <svg class="w-20 h-20 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                    </svg>
                  </div>
                </div>
                <div class="bs5-card-body">
                  <h5 class="bs5-card-title">{{t:demo.card-grid.wirelessEarbuds}}</h5>
                  <p class="bs5-card-text">{{t:demo.card-grid.wirelessEarbudsDesc}}</p>
                  <div class="flex items-baseline gap-2 mb-3">
                    <span class="text-2xl font-bold text-gray-900">$199</span>
                    <span class="text-sm text-gray-500 line-through">$249</span>
                  </div>
                  <a href="javascript:void(0)" class="bs5-btn bs5-btn-primary">{{t:demo.card-grid.addToCart}}</a>
                </div>
              </div>

              <!-- Card 3: Portable Charger -->
              <div class="bs5-card">
                <div class="bs5-card-img">
                  <div class="flex items-center justify-center h-48 bg-gradient-to-br from-green-100 to-green-50">
                    <svg class="w-20 h-20 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div class="bs5-card-body">
                  <h5 class="bs5-card-title">{{t:demo.card-grid.portableCharger}}</h5>
                  <p class="bs5-card-text">{{t:demo.card-grid.portableChargerDesc}}</p>
                  <div class="flex items-baseline gap-2 mb-3">
                    <span class="text-2xl font-bold text-gray-900">$79</span>
                    <span class="text-sm text-gray-500 line-through">$99</span>
                  </div>
                  <a href="javascript:void(0)" class="bs5-btn bs5-btn-primary">{{t:demo.card-grid.addToCart}}</a>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .bs5-card {
            background: white;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }
          .bs5-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
          }
          .bs5-card-img {
            overflow: hidden;
          }
          .bs5-card-body {
            padding: 1.5rem;
          }
          .bs5-card-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 0.5rem;
          }
          .bs5-card-text {
            font-size: 0.875rem;
            color: #718096;
            margin-bottom: 1rem;
            line-height: 1.5;
          }
          .bs5-btn {
            display: inline-block;
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            border-radius: 0.375rem;
            transition: all 0.2s ease;
            width: 100%;
          }
          .bs5-btn-primary {
            background-color: #4f46e5;
            color: white;
            border: none;
          }
          .bs5-btn-primary:hover {
            background-color: #4338ca;
            transform: translateY(-1px);
          }
        `
      },

      // ==================== Variant 2: Material Design 3 ====================
      {
        id: 'material3',
        name: 'data.components.navigation.nav-card-grid.variants.material3.name',
        description: 'data.components.navigation.nav-card-grid.variants.material3.description',
        demoHTML: `
          <div class="w-full max-w-5xl mx-auto" style="font-family: 'Roboto', -apple-system, sans-serif;">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Card 1: Sarah Johnson -->
              <div class="md3-card">
                <div class="md3-card-header">
                  <div class="md3-avatar md3-avatar-pink">
                    <span class="text-2xl font-semibold">SJ</span>
                  </div>
                </div>
                <div class="md3-card-content">
                  <h3 class="md3-title">{{t:demo.card-grid.sarahJohnson}}</h3>
                  <p class="md3-subtitle">{{t:demo.card-grid.productDesigner}}</p>
                  <p class="md3-description">{{t:demo.card-grid.sarahDesc}}</p>
                  <div class="md3-socials">
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="LinkedIn">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="Twitter">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="GitHub">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Card 2: Michael Chen -->
              <div class="md3-card">
                <div class="md3-card-header">
                  <div class="md3-avatar md3-avatar-blue">
                    <span class="text-2xl font-semibold">MC</span>
                  </div>
                </div>
                <div class="md3-card-content">
                  <h3 class="md3-title">{{t:demo.card-grid.michaelChen}}</h3>
                  <p class="md3-subtitle">{{t:demo.card-grid.frontendDev}}</p>
                  <p class="md3-description">{{t:demo.card-grid.michaelDesc}}</p>
                  <div class="md3-socials">
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="LinkedIn">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="Twitter">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="GitHub">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Card 3: Emma Wilson -->
              <div class="md3-card">
                <div class="md3-card-header">
                  <div class="md3-avatar md3-avatar-green">
                    <span class="text-2xl font-semibold">EW</span>
                  </div>
                </div>
                <div class="md3-card-content">
                  <h3 class="md3-title">{{t:demo.card-grid.emmaWilson}}</h3>
                  <p class="md3-subtitle">{{t:demo.card-grid.uxResearcher}}</p>
                  <p class="md3-description">{{t:demo.card-grid.emmaDesc}}</p>
                  <div class="md3-socials">
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="LinkedIn">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="Twitter">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a href="javascript:void(0)" class="md3-social-link" aria-label="GitHub">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .md3-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
          }
          .md3-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            transform: translateY(-4px);
          }
          .md3-card-header {
            padding: 1.5rem 1.5rem 0;
            display: flex;
            justify-content: center;
          }
          .md3-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
          }
          .md3-avatar-pink {
            background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          }
          .md3-avatar-blue {
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          }
          .md3-avatar-green {
            background: linear-gradient(135deg, #10b981 0%, #065f46 100%);
          }
          .md3-card-content {
            padding: 1.5rem;
            text-align: center;
          }
          .md3-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.25rem;
          }
          .md3-subtitle {
            font-size: 0.875rem;
            color: #6366f1;
            font-weight: 500;
            margin-bottom: 0.75rem;
          }
          .md3-description {
            font-size: 0.875rem;
            color: #6b7280;
            line-height: 1.5;
            margin-bottom: 1rem;
          }
          .md3-socials {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
          .md3-social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6b7280;
            transition: all 0.2s;
            text-decoration: none;
          }
          .md3-social-link:hover {
            background: #4f46e5;
            color: white;
            transform: translateY(-2px);
          }
        `
      },

      // ==================== Variant 3: Glassmorphism ====================
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.nav-card-grid.variants.glassmorphism.name',
        description: 'data.components.navigation.nav-card-grid.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-5xl mx-auto" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <div class="glass-background">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Card 1: The Future of AI -->
                <div class="glass-card">
                  <div class="glass-card-tag">Technology</div>
                  <h3 class="glass-card-title">{{t:demo.card-grid.futureAI}}</h3>
                  <p class="glass-card-excerpt">{{t:demo.card-grid.futureAIDesc}}</p>
                  <div class="glass-card-meta">
                    <span>{{t:demo.card-grid.readTime5}}</span>
                    <span class="glass-dot">•</span>
                    <span>{{t:demo.card-grid.jan2024}}</span>
                  </div>
                  <a href="javascript:void(0)" class="glass-card-link">{{t:demo.card-grid.readMore}} →</a>
                </div>

                <!-- Card 2: Web3 Revolution -->
                <div class="glass-card">
                  <div class="glass-card-tag glass-card-tag-purple">Blockchain</div>
                  <h3 class="glass-card-title">{{t:demo.card-grid.web3Revolution}}</h3>
                  <p class="glass-card-excerpt">{{t:demo.card-grid.web3Desc}}</p>
                  <div class="glass-card-meta">
                    <span>{{t:demo.card-grid.readTime8}}</span>
                    <span class="glass-dot">•</span>
                    <span>{{t:demo.card-grid.dec2023}}</span>
                  </div>
                  <a href="javascript:void(0)" class="glass-card-link">{{t:demo.card-grid.readMore}} →</a>
                </div>

                <!-- Card 3: Quantum Computing -->
                <div class="glass-card">
                  <div class="glass-card-tag glass-card-tag-green">Science</div>
                  <h3 class="glass-card-title">{{t:demo.card-grid.quantumComputing}}</h3>
                  <p class="glass-card-excerpt">{{t:demo.card-grid.quantumDesc}}</p>
                  <div class="glass-card-meta">
                    <span>{{t:demo.card-grid.readTime12}}</span>
                    <span class="glass-dot">•</span>
                    <span>{{t:demo.card-grid.nov2023}}</span>
                  </div>
                  <a href="javascript:void(0)" class="glass-card-link">{{t:demo.card-grid.readMore}} →</a>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .glass-background {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 3rem 2rem;
            border-radius: 1.5rem;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            padding: 1.5rem;
            transition: all 0.3s ease;
          }
          .glass-card:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
          .glass-card-tag {
            display: inline-block;
            padding: 0.375rem 0.875rem;
            background: rgba(59, 130, 246, 0.7);
            color: white;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            border-radius: 9999px;
            margin-bottom: 1rem;
            letter-spacing: 0.05em;
          }
          .glass-card-tag-purple {
            background: rgba(139, 92, 246, 0.7);
          }
          .glass-card-tag-green {
            background: rgba(16, 185, 129, 0.7);
          }
          .glass-card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }
          .glass-card-excerpt {
            font-size: 0.875rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin-bottom: 1rem;
          }
          .glass-card-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 1rem;
          }
          .glass-dot {
            color: rgba(255, 255, 255, 0.4);
          }
          .glass-card-link {
            display: inline-flex;
            align-items: center;
            color: white;
            font-weight: 600;
            font-size: 0.875rem;
            text-decoration: none;
            transition: all 0.2s;
          }
          .glass-card-link:hover {
            transform: translateX(4px);
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
          }
        `
      },

      // ==================== Variant 4: Neo-brutalism ====================
      {
        id: 'neo-brutalism',
        name: 'data.components.navigation.nav-card-grid.variants.neo-brutalism.name',
        description: 'data.components.navigation.nav-card-grid.variants.neo-brutalism.description',
        demoHTML: `
          <div class="w-full max-w-5xl mx-auto" style="font-family: 'Arial Black', Arial, sans-serif;">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Card 1: Brand Identity -->
              <div class="brutal-card brutal-card-yellow">
                <div class="brutal-badge">{{t:demo.card-grid.featured}}</div>
                <h3 class="brutal-title">{{t:demo.card-grid.brandIdentity}}</h3>
                <p class="brutal-description">{{t:demo.card-grid.brandIdentityDesc}}</p>
                <div class="brutal-tags">
                  <span class="brutal-tag">Branding</span>
                  <span class="brutal-tag">Logo</span>
                  <span class="brutal-tag">Visual</span>
                </div>
                <a href="javascript:void(0)" class="brutal-button">{{t:demo.card-grid.viewProject}} →</a>
              </div>

              <!-- Card 2: Mobile App Design -->
              <div class="brutal-card brutal-card-pink">
                <div class="brutal-badge brutal-badge-purple">{{t:demo.card-grid.trending}}</div>
                <h3 class="brutal-title">{{t:demo.card-grid.mobileAppDesign}}</h3>
                <p class="brutal-description">{{t:demo.card-grid.mobileAppDesc}}</p>
                <div class="brutal-tags">
                  <span class="brutal-tag">Mobile</span>
                  <span class="brutal-tag">UX/UI</span>
                  <span class="brutal-tag">Figma</span>
                </div>
                <a href="javascript:void(0)" class="brutal-button">{{t:demo.card-grid.viewProject}} →</a>
              </div>

              <!-- Card 3: Design System -->
              <div class="brutal-card brutal-card-blue">
                <div class="brutal-badge brutal-badge-green">{{t:demo.card-grid.newProject}}</div>
                <h3 class="brutal-title">{{t:demo.card-grid.designSystem}}</h3>
                <p class="brutal-description">{{t:demo.card-grid.designSystemDesc}}</p>
                <div class="brutal-tags">
                  <span class="brutal-tag">System</span>
                  <span class="brutal-tag">Components</span>
                  <span class="brutal-tag">Tokens</span>
                </div>
                <a href="javascript:void(0)" class="brutal-button">{{t:demo.card-grid.viewProject}} →</a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .brutal-card {
            border: 4px solid #000;
            padding: 2rem;
            position: relative;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .brutal-card::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 8px;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: -1;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .brutal-card:hover {
            transform: translate(-4px, -4px);
          }
          .brutal-card:hover::before {
            top: 12px;
            left: 12px;
          }
          .brutal-card-yellow {
            background: #fef08a;
          }
          .brutal-card-pink {
            background: #fda4af;
          }
          .brutal-card-blue {
            background: #93c5fd;
          }
          .brutal-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: #000;
            color: #fef08a;
            font-size: 0.75rem;
            font-weight: 900;
            text-transform: uppercase;
            border: 3px solid #000;
            margin-bottom: 1rem;
            letter-spacing: 0.1em;
          }
          .brutal-badge-purple {
            background: #a855f7;
            color: #fff;
          }
          .brutal-badge-green {
            background: #22c55e;
            color: #fff;
          }
          .brutal-title {
            font-size: 1.5rem;
            font-weight: 900;
            color: #000;
            margin-bottom: 1rem;
            line-height: 1.2;
            text-transform: uppercase;
          }
          .brutal-description {
            font-family: 'Courier New', monospace;
            font-size: 0.875rem;
            color: #000;
            line-height: 1.6;
            margin-bottom: 1.25rem;
            font-weight: 600;
          }
          .brutal-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
          }
          .brutal-tag {
            padding: 0.375rem 0.75rem;
            background: #fff;
            border: 2px solid #000;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
          }
          .brutal-button {
            display: inline-block;
            padding: 0.875rem 1.75rem;
            background: #000;
            color: #fff;
            font-weight: 900;
            text-decoration: none;
            text-transform: uppercase;
            border: 3px solid #000;
            transition: all 0.2s;
            font-size: 0.875rem;
          }
          .brutal-button:hover {
            background: #fff;
            color: #000;
            transform: translate(2px, 2px);
          }
        `
      },

      // ==================== Variant 5: 3D Perspective Cards (with Mouse Follow) ====================
      {
        id: '3d-perspective',
        name: 'data.components.navigation.nav-card-grid.variants.3d-perspective.name',
        description: 'data.components.navigation.nav-card-grid.variants.3d-perspective.description',
        demoHTML: `
          <div class="w-full max-w-5xl mx-auto" style="font-family: 'Cinzel', serif; perspective: 1500px;">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Card 1: Fire Mage -->
              <div class="perspective-card perspective-card-fire">
                <div class="card-shine"></div>
                <div class="perspective-card-content">
                  <div class="card-rarity card-rarity-legendary">★★★★★</div>
                  <div class="card-image">
                    <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                    </svg>
                  </div>
                  <h3 class="card-name">{{t:demo.card-grid.fireMage}}</h3>
                  <p class="card-class">{{t:demo.card-grid.elementalCaster}}</p>
                  <div class="card-stats">
                    <div class="stat">
                      <span class="stat-label">{{t:demo.card-grid.atk}}</span>
                      <span class="stat-value">850</span>
                    </div>
                    <div class="stat">
                      <span class="stat-label">{{t:demo.card-grid.def}}</span>
                      <span class="stat-value">600</span>
                    </div>
                  </div>
                  <p class="card-ability">{{t:demo.card-grid.fireMageAbility}}</p>
                </div>
              </div>

              <!-- Card 2: Shadow Assassin -->
              <div class="perspective-card perspective-card-shadow">
                <div class="card-shine"></div>
                <div class="perspective-card-content">
                  <div class="card-rarity card-rarity-epic">★★★★</div>
                  <div class="card-image">
                    <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                  </div>
                  <h3 class="card-name">{{t:demo.card-grid.shadowAssassin}}</h3>
                  <p class="card-class">{{t:demo.card-grid.darkRogue}}</p>
                  <div class="card-stats">
                    <div class="stat">
                      <span class="stat-label">{{t:demo.card-grid.atk}}</span>
                      <span class="stat-value">950</span>
                    </div>
                    <div class="stat">
                      <span class="stat-label">{{t:demo.card-grid.def}}</span>
                      <span class="stat-value">500</span>
                    </div>
                  </div>
                  <p class="card-ability">{{t:demo.card-grid.shadowAssassinAbility}}</p>
                </div>
              </div>

              <!-- Card 3: Holy Paladin -->
              <div class="perspective-card perspective-card-holy">
                <div class="card-shine"></div>
                <div class="perspective-card-content">
                  <div class="card-rarity card-rarity-rare">★★★</div>
                  <div class="card-image">
                    <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h3 class="card-name">{{t:demo.card-grid.holyPaladin}}</h3>
                  <p class="card-class">{{t:demo.card-grid.divineKnight}}</p>
                  <div class="card-stats">
                    <div class="stat">
                      <span class="stat-label">{{t:demo.card-grid.atk}}</span>
                      <span class="stat-value">700</span>
                    </div>
                    <div class="stat">
                      <span class="stat-label">{{t:demo.card-grid.def}}</span>
                      <span class="stat-value">900</span>
                    </div>
                  </div>
                  <p class="card-ability">{{t:demo.card-grid.holyPaladinAbility}}</p>
                </div>
              </div>
            </div>
          </div>

          <script>
            // 3D Mouse Follow Effect
            (function() {
              const cards = document.querySelectorAll('.perspective-card');

              cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  // Calculate rotation based on mouse position
                  const rotateX = (y - centerY) / 8;
                  const rotateY = (centerX - x) / 8;

                  // Apply 3D transformation
                  card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.05, 1.05, 1.05)\`;

                  // Move shine effect
                  const shine = card.querySelector('.card-shine');
                  if (shine) {
                    const shineX = (x / rect.width) * 100;
                    const shineY = (y / rect.height) * 100;
                    shine.style.background = \`radial-gradient(circle at \${shineX}% \${shineY}%, rgba(255,255,255,0.3) 0%, transparent 60%)\`;
                  }
                });

                card.addEventListener('mouseleave', () => {
                  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                  const shine = card.querySelector('.card-shine');
                  if (shine) {
                    shine.style.background = 'transparent';
                  }
                });
              });
            })();
          </script>
        `,
        customStyles: `
          .perspective-card {
            position: relative;
            border-radius: 1rem;
            padding: 2rem;
            transform-style: preserve-3d;
            transition: transform 0.1s ease-out;
            will-change: transform;
            cursor: pointer;
            overflow: hidden;
          }
          .perspective-card-fire {
            background: linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%);
          }
          .perspective-card-shadow {
            background: linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%);
          }
          .perspective-card-holy {
            background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
          }
          .card-shine {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            transition: background 0.1s ease-out;
          }
          .perspective-card-content {
            position: relative;
            z-index: 1;
            transform: translateZ(20px);
          }
          .card-rarity {
            font-size: 1.25rem;
            color: #fef08a;
            text-shadow: 0 0 10px rgba(254, 240, 138, 0.8);
            margin-bottom: 1rem;
            filter: drop-shadow(0 0 8px rgba(254, 240, 138, 0.6));
          }
          .card-rarity-legendary {
            color: #fbbf24;
            font-size: 1.5rem;
          }
          .card-rarity-epic {
            color: #a78bfa;
          }
          .card-rarity-rare {
            color: #60a5fa;
          }
          .card-image {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.9);
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          }
          .card-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
            text-align: center;
            margin-bottom: 0.25rem;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
          }
          .card-class {
            font-size: 0.875rem;
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            margin-bottom: 1rem;
            font-style: italic;
          }
          .card-stats {
            display: flex;
            justify-content: space-around;
            margin-bottom: 1rem;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 0.5rem;
          }
          .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .stat-label {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .stat-value {
            font-size: 1.5rem;
            color: #fff;
            font-weight: 700;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
          }
          .card-ability {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.9);
            text-align: center;
            line-height: 1.4;
            font-style: italic;
            padding: 0.75rem;
            background: rgba(0, 0, 0, 0.15);
            border-radius: 0.375rem;
          }
        `
      }
    ]
  },
  {
    id: 'timeline',
    title: 'data.components.navigation.timeline.title',
    description: 'data.components.navigation.timeline.description',
    // Five UI style variants
    variants: [
      {
        id: 'minimal-vertical',
        name: 'data.components.navigation.timeline.variants.minimal-vertical.name',
        description: 'data.components.navigation.timeline.variants.minimal-vertical.description',
        demoHTML: `
          <div class="w-full max-w-2xl" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <div class="relative">
              <!-- Vertical Line -->
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              <!-- Timeline Items -->
              <div class="space-y-8">
                <!-- Item 1 -->
                <div class="relative pl-12 timeline-fade-in" style="animation-delay: 0s;">
                  <div class="absolute left-2.5 w-3 h-3 bg-black rounded-full"></div>
                  <div>
                    <time class="text-xs text-gray-500">2025-01-15</time>
                    <h3 class="text-base font-semibold text-gray-900 mt-1">Project Launched</h3>
                    <p class="text-sm text-gray-600 mt-1">Successfully deployed the initial version to production environment.</p>
                  </div>
                </div>

                <!-- Item 2 -->
                <div class="relative pl-12 timeline-fade-in" style="animation-delay: 0.2s;">
                  <div class="absolute left-2.5 w-3 h-3 bg-black rounded-full"></div>
                  <div>
                    <time class="text-xs text-gray-500">2025-01-20</time>
                    <h3 class="text-base font-semibold text-gray-900 mt-1">Feature Update</h3>
                    <p class="text-sm text-gray-600 mt-1">Added user authentication and role management system.</p>
                  </div>
                </div>

                <!-- Item 3 -->
                <div class="relative pl-12 timeline-fade-in" style="animation-delay: 0.4s;">
                  <div class="absolute left-2.5 w-3 h-3 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div>
                    <time class="text-xs text-gray-400">2025-02-01</time>
                    <h3 class="text-base font-medium text-gray-500 mt-1">Upcoming Release</h3>
                    <p class="text-sm text-gray-400 mt-1">Version 2.0 with enhanced performance and new features.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes timeline-fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .timeline-fade-in {
            animation: timeline-fade-in 0.6s ease-out forwards;
            opacity: 0;
          }
        `
      },
      {
        id: 'card-based',
        name: 'data.components.navigation.timeline.variants.card-based.name',
        description: 'data.components.navigation.timeline.variants.card-based.description',
        demoHTML: `
          <div class="w-full max-w-2xl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="relative">
              <!-- Vertical Line -->
              <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

              <!-- Timeline Items -->
              <div class="space-y-6">
                <!-- Item 1 -->
                <div class="relative pl-16 timeline-slide-in" style="animation-delay: 0s;">
                  <div class="absolute left-3.5 w-5 h-5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                  <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <time class="text-xs font-medium text-blue-600">January 15, 2025</time>
                    <h3 class="text-lg font-bold text-gray-900 mt-2">Project Kickoff</h3>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">Initial planning and requirements gathering completed. Team assembled and resources allocated.</p>
                  </div>
                </div>

                <!-- Item 2 -->
                <div class="relative pl-16 timeline-slide-in" style="animation-delay: 0.15s;">
                  <div class="absolute left-3.5 w-5 h-5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                  <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <time class="text-xs font-medium text-purple-600">January 28, 2025</time>
                    <h3 class="text-lg font-bold text-gray-900 mt-2">Development Phase</h3>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">Core features implementation in progress. API endpoints and database schema finalized.</p>
                  </div>
                </div>

                <!-- Item 3 -->
                <div class="relative pl-16 timeline-slide-in" style="animation-delay: 0.3s;">
                  <div class="absolute left-3.5 w-5 h-5 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>
                  <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <time class="text-xs font-medium text-pink-600">February 10, 2025</time>
                    <h3 class="text-lg font-bold text-gray-900 mt-2">Beta Testing</h3>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">Public beta release scheduled. Collecting user feedback for final optimizations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes timeline-slide-in {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .timeline-slide-in {
            animation: timeline-slide-in 0.5s ease-out forwards;
            opacity: 0;
          }
        `
      },
      {
        id: 'cyberpunk',
        name: 'data.components.navigation.timeline.variants.cyberpunk.name',
        description: 'data.components.navigation.timeline.variants.cyberpunk.description',
        demoHTML: `
          <div class="w-full max-w-2xl bg-gray-900 p-6 rounded-lg" style="font-family: 'Courier New', monospace;">
            <div class="relative">
              <!-- Glowing Line -->
              <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 timeline-cyber-glow"></div>

              <!-- Timeline Items -->
              <div class="space-y-8">
                <!-- Item 1 -->
                <div class="relative pl-16 timeline-cyber-pulse" style="animation-delay: 0s;">
                  <div class="absolute left-4 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/80 timeline-cyber-dot"></div>
                  <div class="bg-gray-800/50 backdrop-blur-sm rounded-md p-4 border border-cyan-400/30 timeline-cyber-border">
                    <time class="text-xs font-bold text-cyan-400 tracking-wider">2025.01.15</time>
                    <h3 class="text-base font-bold text-white mt-2 tracking-wide">SYSTEM INIT</h3>
                    <p class="text-sm text-gray-300 mt-2 leading-relaxed">&gt; Mainframe connection established_</p>
                  </div>
                </div>

                <!-- Item 2 -->
                <div class="relative pl-16 timeline-cyber-pulse" style="animation-delay: 0.2s;">
                  <div class="absolute left-4 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/80 timeline-cyber-dot"></div>
                  <div class="bg-gray-800/50 backdrop-blur-sm rounded-md p-4 border border-purple-500/30 timeline-cyber-border">
                    <time class="text-xs font-bold text-purple-400 tracking-wider">2025.01.28</time>
                    <h3 class="text-base font-bold text-white mt-2 tracking-wide">DATA SYNC</h3>
                    <p class="text-sm text-gray-300 mt-2 leading-relaxed">&gt; Neural network training in progress_</p>
                  </div>
                </div>

                <!-- Item 3 -->
                <div class="relative pl-16 timeline-cyber-pulse" style="animation-delay: 0.4s;">
                  <div class="absolute left-4 w-4 h-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/80 timeline-cyber-dot"></div>
                  <div class="bg-gray-800/50 backdrop-blur-sm rounded-md p-4 border border-pink-500/30 timeline-cyber-border">
                    <time class="text-xs font-bold text-pink-400 tracking-wider">2025.02.10</time>
                    <h3 class="text-base font-bold text-white mt-2 tracking-wide">DEPLOY SEQUENCE</h3>
                    <p class="text-sm text-gray-300 mt-2 leading-relaxed">&gt; Quantum encryption enabled_</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes timeline-cyber-glow {
            0%, 100% {
              box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            }
            50% {
              box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            }
          }
          .timeline-cyber-glow {
            animation: timeline-cyber-glow 2s ease-in-out infinite;
          }
          @keyframes timeline-cyber-dot {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            }
            50% {
              transform: scale(1.2);
              box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            }
          }
          .timeline-cyber-dot {
            animation: timeline-cyber-dot 1.5s ease-in-out infinite;
          }
          @keyframes timeline-cyber-border {
            0%, 100% {
              border-color: currentColor;
              box-shadow: 0 0 5px currentColor;
            }
            50% {
              box-shadow: 0 0 15px currentColor;
            }
          }
          .timeline-cyber-border {
            animation: timeline-cyber-border 3s ease-in-out infinite;
          }
          @keyframes timeline-cyber-pulse {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .timeline-cyber-pulse {
            animation: timeline-cyber-pulse 0.6s ease-out forwards;
            opacity: 0;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.timeline.variants.glassmorphism.name',
        description: 'data.components.navigation.timeline.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl p-6 rounded-2xl" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);">
            <div class="relative">
              <!-- Glass Line -->
              <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/40 via-blue-400/40 to-cyan-400/40 rounded-full backdrop-blur-sm"></div>

              <!-- Timeline Items -->
              <div class="space-y-6">
                <!-- Item 1 -->
                <div class="relative pl-16 timeline-glass-float" style="animation-delay: 0s;">
                  <div class="absolute left-4 w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                  <div class="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <time class="text-xs font-semibold text-purple-700">January 15, 2025</time>
                    <h3 class="text-lg font-bold text-gray-900 mt-2">Vision Created</h3>
                    <p class="text-sm text-gray-700 mt-2 leading-relaxed">Conceptualized the project roadmap with innovative solutions and cutting-edge technologies.</p>
                  </div>
                </div>

                <!-- Item 2 -->
                <div class="relative pl-16 timeline-glass-float" style="animation-delay: 0.15s;">
                  <div class="absolute left-4 w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <div class="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <time class="text-xs font-semibold text-blue-700">January 28, 2025</time>
                    <h3 class="text-lg font-bold text-gray-900 mt-2">Building Progress</h3>
                    <p class="text-sm text-gray-700 mt-2 leading-relaxed">Frontend and backend architectures taking shape with modern frameworks and best practices.</p>
                  </div>
                </div>

                <!-- Item 3 -->
                <div class="relative pl-16 timeline-glass-float" style="animation-delay: 0.3s;">
                  <div class="absolute left-4 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                  <div class="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <time class="text-xs font-semibold text-cyan-700">February 10, 2025</time>
                    <h3 class="text-lg font-bold text-gray-900 mt-2">Launch Approaching</h3>
                    <p class="text-sm text-gray-700 mt-2 leading-relaxed">Final touches and quality assurance before the grand unveiling to the world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes timeline-glass-float {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .timeline-glass-float {
            animation: timeline-glass-float 0.7s ease-out forwards;
            opacity: 0;
          }
        `
      },
      {
        id: 'brutalism',
        name: 'data.components.navigation.timeline.variants.brutalism.name',
        description: 'data.components.navigation.timeline.variants.brutalism.description',
        demoHTML: `
          <div class="w-full max-w-2xl" style="font-family: 'Arial Black', 'Arial Bold', sans-serif;">
            <div class="relative">
              <!-- Bold Line -->
              <div class="absolute left-6 top-0 bottom-0 w-2 bg-black"></div>

              <!-- Timeline Items -->
              <div class="space-y-6">
                <!-- Item 1 -->
                <div class="relative pl-16 timeline-brutal-bounce" style="animation-delay: 0s;">
                  <div class="absolute left-4 w-6 h-6 bg-yellow-400 border-4 border-black rotate-45"></div>
                  <div class="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all duration-200">
                    <time class="text-xs font-black text-black tracking-wider uppercase">2025-01-15</time>
                    <h3 class="text-xl font-black text-black mt-2 uppercase">START</h3>
                    <p class="text-sm font-bold text-black mt-2 leading-tight">PROJECT INITIALIZATION COMPLETE</p>
                  </div>
                </div>

                <!-- Item 2 -->
                <div class="relative pl-16 timeline-brutal-bounce" style="animation-delay: 0.15s;">
                  <div class="absolute left-4 w-6 h-6 bg-red-500 border-4 border-black rotate-45"></div>
                  <div class="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all duration-200">
                    <time class="text-xs font-black text-black tracking-wider uppercase">2025-01-28</time>
                    <h3 class="text-xl font-black text-black mt-2 uppercase">BUILD</h3>
                    <p class="text-sm font-bold text-black mt-2 leading-tight">CORE FEATURES UNDER CONSTRUCTION</p>
                  </div>
                </div>

                <!-- Item 3 -->
                <div class="relative pl-16 timeline-brutal-bounce" style="animation-delay: 0.3s;">
                  <div class="absolute left-4 w-6 h-6 bg-green-400 border-4 border-black rotate-45"></div>
                  <div class="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all duration-200">
                    <time class="text-xs font-black text-black tracking-wider uppercase">2025-02-10</time>
                    <h3 class="text-xl font-black text-black mt-2 uppercase">LAUNCH</h3>
                    <p class="text-sm font-bold text-black mt-2 leading-tight">DEPLOYMENT TO PRODUCTION</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes timeline-brutal-bounce {
            from {
              opacity: 0;
              transform: scale(0.8) rotate(-5deg);
            }
            50% {
              transform: scale(1.05) rotate(2deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
          .timeline-brutal-bounce {
            animation: timeline-brutal-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            opacity: 0;
          }
        `
      }
    ]
  }
  ,
  {
    id: 'progress-indicators',
    title: 'data.components.navigation.progress-indicators.title',
    description: 'data.components.navigation.progress-indicators.description',
    // 四種 UI 風格設計
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.navigation.progress-indicators.variants.minimalism.name',
        description: 'data.components.navigation.progress-indicators.variants.minimalism.description',
        demoHTML: `
          <div class="min-h-screen flex items-center justify-center p-8 bg-white">
            <div class="w-full max-w-xl space-y-8" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
              <!-- 線性進度條 1: 簡潔細線 -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-gray-900">{{t:demo.progressIndicators.uploadingFile}}</span>
                  <span class="text-sm font-semibold text-black">73%</span>
                </div>
                <div class="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div class="progress-min-bar h-1 bg-black rounded-full" style="width: 73%"></div>
                </div>
                <p class="text-xs text-gray-500 mt-1">{{t:demo.progressIndicators.processingFile}}</p>
              </div>

              <!-- 線性進度條 2: 粗條帶標籤 -->
              <div>
                <div class="flex justify-between items-center mb-3">
                  <span class="text-base font-semibold text-gray-900">{{t:demo.progressIndicators.dataSync}}</span>
                  <span class="text-xs text-gray-600">{{t:demo.progressIndicators.estimatedTimeRemaining}}</span>
                </div>
                <div class="w-full h-3 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div class="progress-min-thick h-3 bg-gradient-to-r from-gray-800 to-black" style="width: 45%"></div>
                </div>
                <div class="flex justify-between mt-2">
                  <span class="text-xs text-gray-500">{{t:demo.progressIndicators.syncedItems}}</span>
                  <span class="text-xs font-medium text-gray-700">45%</span>
                </div>
              </div>

              <!-- 線性進度條 3: 多段進度 -->
              <div>
                <h4 class="text-sm font-semibold text-gray-900 mb-4">{{t:demo.progressIndicators.installationProgress}}</h4>
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-900">{{t:demo.progressIndicators.downloadingFiles}}</p>
                      <div class="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                        <div class="h-1.5 bg-black rounded-full" style="width: 100%"></div>
                      </div>
                    </div>
                    <span class="text-xs text-gray-500">{{t:demo.progressIndicators.completed}}</span>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 progress-min-pulse">
                      <div class="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-900">{{t:demo.progressIndicators.installingDependencies}}</p>
                      <div class="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                        <div class="progress-min-bar h-1.5 bg-black rounded-full" style="width: 68%"></div>
                      </div>
                    </div>
                    <span class="text-xs font-semibold text-black">68%</span>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                      <span class="text-xs text-gray-400">3</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-400">{{t:demo.progressIndicators.configuringEnvironment}}</p>
                      <div class="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                        <div class="h-1.5 bg-gray-300 rounded-full" style="width: 0%"></div>
                      </div>
                    </div>
                    <span class="text-xs text-gray-400">{{t:demo.progressIndicators.waiting}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .progress-min-bar {
            transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .progress-min-thick {
            transition: width 0.8s ease-out;
          }
          .progress-min-pulse {
            animation: progress-min-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes progress-min-pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.05);
            }
          }
        `
      },
      {
        id: 'skeuomorphism',
        name: 'data.components.navigation.progress-indicators.variants.skeuomorphism.name',
        description: 'data.components.navigation.progress-indicators.variants.skeuomorphism.description',
        demoHTML: `
          <div class="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-100 to-gray-200">
            <div class="w-full max-w-2xl" style="font-family: 'Courier New', monospace;">
              <div class="grid md:grid-cols-2 gap-8">
              <!-- 圓形進度環 1: 立體感 -->
              <div class="progress-skeuo-card">
                <h4 class="text-sm font-bold text-gray-800 mb-4 text-center">{{t:demo.progressIndicators.downloadProgress}}</h4>
                <div class="flex justify-center mb-4">
                  <div class="relative w-40 h-40">
                    <svg class="w-40 h-40 transform -rotate-90">
                      <!-- 背景圓環 -->
                      <circle cx="80" cy="80" r="60" stroke="#e5e7eb" stroke-width="12" fill="none"></circle>
                      <!-- 進度圓環 (65%) -->
                      <circle cx="80" cy="80" r="60" class="progress-skeuo-circle" stroke="url(#skeuo-gradient-1)" stroke-width="12" fill="none" stroke-dasharray="377" stroke-dashoffset="132" stroke-linecap="round"></circle>
                      <defs>
                        <linearGradient id="skeuo-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                      <span class="text-3xl font-black text-gray-800 progress-skeuo-glow">65</span>
                      <span class="text-sm font-bold text-gray-600">%</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-xs text-gray-700 font-semibold">{{t:demo.progressIndicators.downloadedSize}}</p>
                  <p class="text-xs text-blue-600 mt-1">{{t:demo.progressIndicators.timeRemaining}}</p>
                </div>
              </div>

              <!-- 圓形進度環 2: 儀表盤風格 -->
              <div class="progress-skeuo-card">
                <h4 class="text-sm font-bold text-gray-800 mb-4 text-center">{{t:demo.progressIndicators.performanceMetrics}}</h4>
                <div class="flex justify-center mb-4">
                  <div class="relative w-40 h-40">
                    <svg class="w-40 h-40 transform -rotate-90">
                      <!-- 背景圓環 -->
                      <circle cx="80" cy="80" r="60" stroke="#1a1a1a" stroke-width="14" fill="none" opacity="0.2"></circle>
                      <!-- 進度圓環 (88%) -->
                      <circle cx="80" cy="80" r="60" class="progress-skeuo-gauge" stroke="#4ade80" stroke-width="14" fill="none" stroke-dasharray="377" stroke-dashoffset="45" stroke-linecap="round"></circle>
                    </svg>
                    <div class="absolute inset-0 flex flex-col items-center justify-center progress-skeuo-screen">
                      <span class="text-4xl font-black text-green-500 progress-skeuo-neon">88</span>
                      <span class="text-xs font-bold text-green-400">{{t:demo.progressIndicators.excellent}}</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-xs text-gray-700 font-semibold">{{t:demo.progressIndicators.systemRunningNormal}}</p>
                  <div class="flex justify-center gap-4 mt-2">
                    <span class="text-xs text-green-600">{{t:demo.progressIndicators.cpuUsage}}</span>
                    <span class="text-xs text-green-600">{{t:demo.progressIndicators.ramUsage}}</span>
                  </div>
                </div>
              </div>

              <!-- 立體條形進度 -->
              <div class="md:col-span-2 progress-skeuo-card">
                <h4 class="text-sm font-bold text-gray-800 mb-4">{{t:demo.progressIndicators.uploadQueue}}</h4>
                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-xs font-bold text-gray-700">image_001.png</span>
                      <span class="text-xs font-black text-blue-700">92%</span>
                    </div>
                    <div class="progress-skeuo-bar">
                      <div class="progress-skeuo-fill progress-skeuo-blue" style="width: 92%">
                        <div class="progress-skeuo-shine"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-xs font-bold text-gray-700">document.pdf</span>
                      <span class="text-xs font-black text-green-700">100%</span>
                    </div>
                    <div class="progress-skeuo-bar">
                      <div class="progress-skeuo-fill progress-skeuo-green" style="width: 100%">
                        <div class="progress-skeuo-shine"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-xs font-bold text-gray-700">video_tutorial.mp4</span>
                      <span class="text-xs font-black text-orange-700 progress-skeuo-pulse">47%</span>
                    </div>
                    <div class="progress-skeuo-bar">
                      <div class="progress-skeuo-fill progress-skeuo-orange progress-skeuo-animated" style="width: 47%">
                        <div class="progress-skeuo-shine progress-skeuo-shine-move"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .progress-skeuo-card {
            background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
            border: 2px solid rgba(0,0,0,0.15);
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow:
              0 8px 16px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.8),
              inset 0 -2px 0 rgba(0,0,0,0.1);
          }
          .progress-skeuo-circle {
            transition: stroke-dashoffset 1.5s ease-out;
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
          }
          .progress-skeuo-gauge {
            transition: stroke-dashoffset 1.5s ease-out;
            filter: drop-shadow(0 0 12px rgba(74, 222, 128, 0.8));
          }
          .progress-skeuo-glow {
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
          .progress-skeuo-neon {
            text-shadow: 0 0 16px rgba(74, 222, 128, 0.9), 0 0 8px rgba(74, 222, 128, 0.6);
            animation: progress-skeuo-neon-pulse 2s ease-in-out infinite;
          }
          .progress-skeuo-screen {
            background: radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%);
            border-radius: 50%;
            width: 90px;
            height: 90px;
            margin: auto;
          }
          .progress-skeuo-bar {
            height: 1.5rem;
            background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
            border-radius: 0.75rem;
            border: 2px solid rgba(0,0,0,0.4);
            box-shadow:
              inset 0 3px 8px rgba(0,0,0,0.6),
              inset 0 -1px 2px rgba(255,255,255,0.1);
            overflow: hidden;
            position: relative;
          }
          .progress-skeuo-fill {
            height: 100%;
            border-radius: 0.5rem;
            position: relative;
            transition: width 1s ease-out;
          }
          .progress-skeuo-blue {
            background: linear-gradient(to bottom, #60a5fa, #3b82f6);
            box-shadow:
              0 0 12px rgba(59, 130, 246, 0.6),
              inset 0 1px 0 rgba(255,255,255,0.3);
          }
          .progress-skeuo-green {
            background: linear-gradient(to bottom, #4ade80, #22c55e);
            box-shadow:
              0 0 12px rgba(34, 197, 94, 0.6),
              inset 0 1px 0 rgba(255,255,255,0.3);
          }
          .progress-skeuo-orange {
            background: linear-gradient(to bottom, #fb923c, #f97316);
            box-shadow:
              0 0 12px rgba(249, 115, 22, 0.6),
              inset 0 1px 0 rgba(255,255,255,0.3);
          }
          .progress-skeuo-shine {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
            border-radius: 0.5rem 0.5rem 0 0;
          }
          .progress-skeuo-shine-move {
            animation: progress-skeuo-shine-move 2s ease-in-out infinite;
          }
          .progress-skeuo-animated {
            animation: progress-skeuo-pulse-glow 1.5s ease-in-out infinite;
          }
          .progress-skeuo-pulse {
            animation: progress-skeuo-text-pulse 1s ease-in-out infinite;
          }
          @keyframes progress-skeuo-neon-pulse {
            0%, 100% {
              text-shadow: 0 0 16px rgba(74, 222, 128, 0.9), 0 0 8px rgba(74, 222, 128, 0.6);
            }
            50% {
              text-shadow: 0 0 24px rgba(74, 222, 128, 1), 0 0 12px rgba(74, 222, 128, 0.8);
            }
          }
          @keyframes progress-skeuo-shine-move {
            0%, 100% {
              opacity: 0.4;
            }
            50% {
              opacity: 0.7;
            }
          }
          @keyframes progress-skeuo-pulse-glow {
            0%, 100% {
              box-shadow:
                0 0 12px rgba(249, 115, 22, 0.6),
                inset 0 1px 0 rgba(255,255,255,0.3);
            }
            50% {
              box-shadow:
                0 0 20px rgba(249, 115, 22, 0.9),
                inset 0 1px 0 rgba(255,255,255,0.4);
            }
          }
          @keyframes progress-skeuo-text-pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.navigation.progress-indicators.variants.neumorphism.name',
        description: 'data.components.navigation.progress-indicators.variants.neumorphism.description',
        demoHTML: `
          <div class="min-h-screen flex items-center justify-center">
            <div class="progress-neomorph-container w-full max-w-4xl">
              <div class="max-w-2xl mx-auto space-y-10">
              <!-- 圓形進度環 -->
              <div class="text-center">
                <h4 class="text-sm font-semibold text-gray-700 mb-6">{{t:demo.progressIndicators.overallProgress}}</h4>
                <div class="flex justify-center mb-6">
                  <div class="relative">
                    <div class="progress-neomorph-circle-outer">
                      <svg class="w-48 h-48 transform -rotate-90">
                        <circle cx="96" cy="96" r="76" stroke="#e0e5ec" stroke-width="16" fill="none"></circle>
                        <circle cx="96" cy="96" r="76" class="progress-neomorph-arc" stroke="url(#neomorph-gradient)" stroke-width="16" fill="none" stroke-dasharray="477" stroke-dashoffset="143" stroke-linecap="round"></circle>
                        <defs>
                          <linearGradient id="neomorph-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <div class="progress-neomorph-inner-circle">
                          <span class="text-4xl font-bold text-gray-800">70</span>
                          <span class="text-sm font-medium text-gray-600">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-600">{{t:demo.progressIndicators.tasksCompleted}}</p>
              </div>

              <!-- 線性進度條 -->
              <div class="space-y-6">
                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-sm font-semibold text-gray-800">{{t:demo.progressIndicators.dataBackup}}</span>
                    <span class="text-sm font-bold text-blue-600">85%</span>
                  </div>
                  <div class="progress-neomorph-bar">
                    <div class="progress-neomorph-fill progress-neomorph-blue" style="width: 85%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-sm font-semibold text-gray-800">{{t:demo.progressIndicators.fileSync}}</span>
                    <span class="text-sm font-bold text-purple-600">62%</span>
                  </div>
                  <div class="progress-neomorph-bar">
                    <div class="progress-neomorph-fill progress-neomorph-purple" style="width: 62%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-sm font-semibold text-gray-800">{{t:demo.progressIndicators.systemUpdate}}</span>
                    <span class="text-sm font-bold text-green-600">100%</span>
                  </div>
                  <div class="progress-neomorph-bar">
                    <div class="progress-neomorph-fill progress-neomorph-green" style="width: 100%"></div>
                  </div>
                </div>
              </div>

              <!-- 步驟進度 -->
              <div>
                <h4 class="text-sm font-semibold text-gray-800 mb-5">{{t:demo.progressIndicators.installationSteps}}</h4>
                <div class="space-y-4">
                  <div class="flex items-center gap-4">
                    <div class="progress-neomorph-step progress-neomorph-step-done">
                      <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-semibold text-gray-800">{{t:demo.progressIndicators.downloadPackage}}</p>
                      <p class="text-xs text-green-600 mt-1">{{t:demo.progressIndicators.completed}}</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="progress-neomorph-step progress-neomorph-step-active">
                      <div class="w-3 h-3 bg-blue-600 rounded-full progress-neomorph-dot"></div>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-semibold text-gray-800">{{t:demo.progressIndicators.installing}}</p>
                      <div class="progress-neomorph-bar mt-2" style="height: 0.5rem;">
                        <div class="progress-neomorph-fill progress-neomorph-blue progress-neomorph-animate" style="width: 56%; height: 0.5rem;"></div>
                      </div>
                      <p class="text-xs text-blue-600 mt-1">{{t:demo.progressIndicators.inProgress}}</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="progress-neomorph-step progress-neomorph-step-pending">
                      <span class="text-sm font-medium text-gray-500">3</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-500">{{t:demo.progressIndicators.configureSystem}}</p>
                      <p class="text-xs text-gray-400 mt-1">{{t:demo.progressIndicators.waiting}}</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="progress-neomorph-step progress-neomorph-step-pending">
                      <span class="text-sm font-medium text-gray-500">4</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-500">{{t:demo.progressIndicators.finishInstallation}}</p>
                      <p class="text-xs text-gray-400 mt-1">{{t:demo.progressIndicators.waiting}}</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .progress-neomorph-container {
            background: #e0e5ec;
            padding: 3rem 2rem;
            border-radius: 2rem;
          }
          .progress-neomorph-circle-outer {
            width: 12rem;
            height: 12rem;
            border-radius: 50%;
            background: #e0e5ec;
            box-shadow:
              12px 12px 24px #b8bdc4,
              -12px -12px 24px #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .progress-neomorph-arc {
            transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .progress-neomorph-inner-circle {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            background: #e0e5ec;
            box-shadow:
              inset 6px 6px 12px #b8bdc4,
              inset -6px -6px 12px #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .progress-neomorph-bar {
            height: 1.25rem;
            background: #e0e5ec;
            border-radius: 1rem;
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
            overflow: hidden;
            position: relative;
          }
          .progress-neomorph-fill {
            height: 100%;
            border-radius: 1rem;
            transition: width 1s ease-out;
            position: relative;
          }
          .progress-neomorph-blue {
            background: linear-gradient(135deg, #60a5fa, #3b82f6);
            box-shadow:
              4px 4px 8px rgba(59, 130, 246, 0.3),
              -2px -2px 6px rgba(96, 165, 250, 0.5);
          }
          .progress-neomorph-purple {
            background: linear-gradient(135deg, #a78bfa, #8b5cf6);
            box-shadow:
              4px 4px 8px rgba(139, 92, 246, 0.3),
              -2px -2px 6px rgba(167, 139, 250, 0.5);
          }
          .progress-neomorph-green {
            background: linear-gradient(135deg, #4ade80, #22c55e);
            box-shadow:
              4px 4px 8px rgba(34, 197, 94, 0.3),
              -2px -2px 6px rgba(74, 222, 128, 0.5);
          }
          .progress-neomorph-animate {
            animation: progress-neomorph-shimmer 2s ease-in-out infinite;
          }
          .progress-neomorph-step {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: #e0e5ec;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .progress-neomorph-step-done {
            box-shadow:
              6px 6px 12px #b8bdc4,
              -6px -6px 12px #ffffff;
          }
          .progress-neomorph-step-active {
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
          }
          .progress-neomorph-step-pending {
            box-shadow:
              inset 3px 3px 6px #b8bdc4,
              inset -3px -3px 6px #ffffff;
          }
          .progress-neomorph-dot {
            animation: progress-neomorph-pulse 2s ease-in-out infinite;
          }
          @keyframes progress-neomorph-shimmer {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
          @keyframes progress-neomorph-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.7;
            }
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.progress-indicators.variants.glassmorphism.name',
        description: 'data.components.navigation.progress-indicators.variants.glassmorphism.description',
        demoHTML: `
          <div class="min-h-screen flex items-center justify-center">
            <div class="progress-glass-container w-full max-w-5xl">
              <div class="max-w-2xl mx-auto space-y-8">
              <!-- 圓形進度 + 漸變動畫 -->
              <div class="progress-glass-card">
                <h4 class="text-sm font-semibold text-purple-800 mb-6 text-center">{{t:demo.progressIndicators.processingProgress}}</h4>
                <div class="flex justify-center mb-6">
                  <div class="relative">
                    <svg class="w-48 h-48 transform -rotate-90">
                      <circle cx="96" cy="96" r="76" stroke="rgba(255,255,255,0.3)" stroke-width="14" fill="none"></circle>
                      <circle cx="96" cy="96" r="76" class="progress-glass-arc" stroke="url(#glass-gradient)" stroke-width="14" fill="none" stroke-dasharray="477" stroke-dashoffset="120" stroke-linecap="round"></circle>
                      <defs>
                        <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                          <stop offset="50%" style="stop-color:#ec4899;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                      <div class="progress-glass-inner">
                        <span class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500 progress-glass-glow">75</span>
                        <span class="text-sm font-semibold text-purple-400">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-sm font-medium text-purple-700">{{t:demo.progressIndicators.processingData}}</p>
                  <p class="text-xs text-purple-500 mt-1">{{t:demo.progressIndicators.estimatedTimeRemaining2}}</p>
                </div>
              </div>

              <!-- 漸變線性進度條 -->
              <div class="progress-glass-card">
                <div class="space-y-6">
                  <div>
                    <div class="flex justify-between items-center mb-3">
                      <span class="text-sm font-semibold text-purple-800">{{t:demo.progressIndicators.videoRendering}}</span>
                      <span class="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">92%</span>
                    </div>
                    <div class="progress-glass-bar">
                      <div class="progress-glass-fill progress-glass-purple progress-glass-shimmer" style="width: 92%">
                        <div class="progress-glass-glow-effect"></div>
                      </div>
                    </div>
                    <p class="text-xs text-purple-600 mt-2">{{t:demo.progressIndicators.videoProgress}}</p>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-3">
                      <span class="text-sm font-semibold text-purple-800">{{t:demo.progressIndicators.audioEncoding}}</span>
                      <span class="text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">100%</span>
                    </div>
                    <div class="progress-glass-bar">
                      <div class="progress-glass-fill progress-glass-cyan" style="width: 100%">
                        <div class="progress-glass-glow-effect"></div>
                      </div>
                    </div>
                    <p class="text-xs text-green-600 mt-2">{{t:demo.progressIndicators.completedWithCheck}}</p>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-3">
                      <span class="text-sm font-semibold text-purple-800">{{t:demo.progressIndicators.mergingOutput}}</span>
                      <span class="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">38%</span>
                    </div>
                    <div class="progress-glass-bar">
                      <div class="progress-glass-fill progress-glass-orange progress-glass-shimmer progress-glass-pulse" style="width: 38%">
                        <div class="progress-glass-glow-effect progress-glass-wave"></div>
                      </div>
                    </div>
                    <p class="text-xs text-orange-600 mt-2">{{t:demo.progressIndicators.processing}}</p>
                  </div>
                </div>
              </div>

              <!-- 多層次進度 -->
              <div class="progress-glass-card">
                <h4 class="text-sm font-semibold text-purple-800 mb-5">{{t:demo.progressIndicators.taskQueue}}</h4>
                <div class="space-y-4">
                  <div class="flex items-center gap-4">
                    <div class="progress-glass-icon progress-glass-icon-done">
                      <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-semibold text-purple-800">{{t:demo.progressIndicators.downloadingMaterials}}</p>
                      <div class="flex items-center gap-2 mt-1">
                        <div class="flex-1 h-1 bg-white/20 rounded-full">
                          <div class="h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style="width: 100%"></div>
                        </div>
                        <span class="text-xs text-green-600">{{t:demo.progressIndicators.completed}}</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="progress-glass-icon progress-glass-icon-active">
                      <div class="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full progress-glass-dot"></div>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-semibold text-purple-800">{{t:demo.progressIndicators.aiAnalyzing}}</p>
                      <div class="flex items-center gap-2 mt-1">
                        <div class="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                          <div class="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full progress-glass-loading" style="width: 67%"></div>
                        </div>
                        <span class="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">67%</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="progress-glass-icon progress-glass-icon-pending">
                      <span class="text-xs font-medium text-purple-400">3</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-purple-400">{{t:demo.progressIndicators.generatingReport}}</p>
                      <div class="flex items-center gap-2 mt-1">
                        <div class="flex-1 h-1 bg-white/10 rounded-full">
                          <div class="h-1 bg-purple-300/30 rounded-full" style="width: 0%"></div>
                        </div>
                        <span class="text-xs text-purple-400">{{t:demo.progressIndicators.pending}}</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .progress-glass-container {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.15) 50%, rgba(245, 158, 11, 0.1) 100%);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 2rem;
            padding: 3rem 2rem;
            box-shadow:
              0 8px 32px 0 rgba(31, 38, 135, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
          }
          .progress-glass-card {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow:
              0 8px 32px 0 rgba(139, 92, 246, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
          }
          .progress-glass-arc {
            transition: stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1);
            filter: drop-shadow(0 0 12px rgba(139, 92, 246, 0.6));
          }
          .progress-glass-inner {
            width: 9rem;
            height: 9rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 2px solid rgba(255, 255, 255, 0.5);
            box-shadow:
              0 8px 24px rgba(139, 92, 246, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .progress-glass-glow {
            animation: progress-glass-glow-pulse 2s ease-in-out infinite;
          }
          .progress-glass-bar {
            height: 1.25rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1rem;
            overflow: hidden;
            box-shadow:
              inset 0 2px 4px rgba(0, 0, 0, 0.1);
            position: relative;
          }
          .progress-glass-fill {
            height: 100%;
            border-radius: 1rem;
            transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          .progress-glass-purple {
            background: linear-gradient(90deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
            box-shadow:
              0 0 16px rgba(139, 92, 246, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
          }
          .progress-glass-cyan {
            background: linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(34, 211, 238, 0.8));
            box-shadow:
              0 0 16px rgba(34, 211, 238, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
          }
          .progress-glass-orange {
            background: linear-gradient(90deg, rgba(251, 146, 60, 0.8), rgba(239, 68, 68, 0.8));
            box-shadow:
              0 0 16px rgba(251, 146, 60, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
          }
          .progress-glass-glow-effect {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
            border-radius: 1rem 1rem 0 0;
          }
          .progress-glass-shimmer {
            animation: progress-glass-shimmer 2s ease-in-out infinite;
          }
          .progress-glass-wave {
            animation: progress-glass-wave 3s ease-in-out infinite;
          }
          .progress-glass-pulse {
            animation: progress-glass-pulse 1.5s ease-in-out infinite;
          }
          .progress-glass-icon {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .progress-glass-icon-done {
            background: rgba(74, 222, 128, 0.3);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 2px solid rgba(74, 222, 128, 0.6);
            box-shadow: 0 4px 16px rgba(74, 222, 128, 0.4);
          }
          .progress-glass-icon-active {
            background: rgba(139, 92, 246, 0.3);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 2px solid rgba(139, 92, 246, 0.6);
            box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
          }
          .progress-glass-icon-pending {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
          .progress-glass-dot {
            animation: progress-glass-dot-pulse 2s ease-in-out infinite;
          }
          .progress-glass-loading {
            animation: progress-glass-loading-wave 2s ease-in-out infinite;
          }
          @keyframes progress-glass-glow-pulse {
            0%, 100% {
              filter: brightness(1);
            }
            50% {
              filter: brightness(1.2);
            }
          }
          @keyframes progress-glass-shimmer {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.85;
            }
          }
          @keyframes progress-glass-wave {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }
          @keyframes progress-glass-pulse {
            0%, 100% {
              box-shadow:
                0 0 16px rgba(251, 146, 60, 0.6),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
            }
            50% {
              box-shadow:
                0 0 24px rgba(251, 146, 60, 0.9),
                inset 0 1px 0 rgba(255, 255, 255, 0.5);
            }
          }
          @keyframes progress-glass-dot-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.7;
            }
          }
          @keyframes progress-glass-loading-wave {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `
      }
    ],
    // 保留原有數據作為回退 (向後兼容)
    demoHTML: `
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex justify-between items-center mb-3">
            <h4 class="font-semibold text-gray-900">{{t:demo.progressIndicators.uploadingFile}}</h4>
            <span class="text-sm text-gray-600">75%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-blue-600 h-2 rounded-full transition-all duration-500" style="width: 75%"></div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },

  // Login - 登录组件
  {
    id: 'login',
    title: 'data.components.navigation.login.title',
    description: 'data.components.navigation.login.description',
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.navigation.login.variants.minimalism.name',
        description: 'data.components.navigation.login.variants.minimalism.description',
        demoHTML: `
          <div class="login-mini-container">
            <div class="login-mini-card">
              <h2 class="login-mini-title">Welcome Back</h2>
              <p class="login-mini-subtitle">Sign in to continue</p>

              <form class="login-mini-form">
                <div class="login-mini-field">
                  <label class="login-mini-label">Email</label>
                  <input
                    type="email"
                    class="login-mini-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div class="login-mini-field">
                  <label class="login-mini-label">Password</label>
                  <input
                    type="password"
                    class="login-mini-input"
                    placeholder="••••••••"
                  />
                </div>

                <div class="login-mini-options">
                  <label class="login-mini-checkbox">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="javascript:void(0)" class="login-mini-link">Forgot password?</a>
                </div>

                <button type="button" class="login-mini-button">
                  Sign In
                </button>
              </form>

              <div class="login-mini-footer">
                <span>Don't have an account?</span>
                <a href="javascript:void(0)" class="login-mini-link-bold">Sign up</a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .login-mini-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 500px;
            background: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          .login-mini-card {
            width: 100%;
            max-width: 380px;
            padding: 0;
          }
          .login-mini-title {
            font-size: 1.75rem;
            font-weight: 300;
            color: #000000;
            margin: 0 0 0.5rem 0;
            letter-spacing: -0.02em;
          }
          .login-mini-subtitle {
            font-size: 0.875rem;
            color: #6b7280;
            margin: 0 0 2rem 0;
            font-weight: 300;
          }
          .login-mini-form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          .login-mini-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .login-mini-label {
            font-size: 0.875rem;
            color: #000000;
            font-weight: 400;
          }
          .login-mini-input {
            width: 100%;
            padding: 0.75rem 0;
            border: none;
            border-bottom: 1px solid #e5e7eb;
            font-size: 0.9375rem;
            color: #000000;
            background: transparent;
            transition: border-color 0.2s;
            outline: none;
          }
          .login-mini-input::placeholder {
            color: #d1d5db;
          }
          .login-mini-input:focus {
            border-bottom-color: #000000;
          }
          .login-mini-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
          }
          .login-mini-checkbox {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #6b7280;
            cursor: pointer;
          }
          .login-mini-checkbox input {
            width: 16px;
            height: 16px;
            cursor: pointer;
          }
          .login-mini-link {
            color: #6b7280;
            text-decoration: none;
            transition: color 0.2s;
          }
          .login-mini-link:hover {
            color: #000000;
          }
          .login-mini-button {
            width: 100%;
            padding: 0.875rem;
            background: #000000;
            color: #ffffff;
            border: none;
            font-size: 0.9375rem;
            font-weight: 500;
            cursor: pointer;
            transition: opacity 0.2s;
            margin-top: 0.5rem;
          }
          .login-mini-button:hover {
            opacity: 0.85;
          }
          .login-mini-footer {
            text-align: center;
            margin-top: 2rem;
            font-size: 0.875rem;
            color: #6b7280;
          }
          .login-mini-link-bold {
            color: #000000;
            text-decoration: none;
            font-weight: 500;
            margin-left: 0.25rem;
            transition: opacity 0.2s;
          }
          .login-mini-link-bold:hover {
            opacity: 0.7;
          }
        `
      },
      {
        id: 'material',
        name: 'data.components.navigation.login.variants.material.name',
        description: 'data.components.navigation.login.variants.material.description',
        demoHTML: `
          <div class="login-material-container">
            <div class="login-material-card">
              <h2 class="login-material-title">Sign In</h2>

              <form class="login-material-form">
                <div class="login-material-field">
                  <input
                    type="email"
                    class="login-material-input"
                    placeholder=" "
                    id="mat-email"
                  />
                  <label for="mat-email" class="login-material-label">Email Address</label>
                  <div class="login-material-underline"></div>
                </div>

                <div class="login-material-field">
                  <input
                    type="password"
                    class="login-material-input"
                    placeholder=" "
                    id="mat-password"
                  />
                  <label for="mat-password" class="login-material-label">Password</label>
                  <div class="login-material-underline"></div>
                </div>

                <div class="login-material-options">
                  <label class="login-material-checkbox">
                    <input type="checkbox" />
                    <span class="login-material-checkmark"></span>
                    <span>Remember me</span>
                  </label>
                  <a href="javascript:void(0)" class="login-material-link">Forgot?</a>
                </div>

                <button type="button" class="login-material-button">
                  <span>Sign In</span>
                  <div class="login-material-ripple"></div>
                </button>
              </form>

              <div class="login-material-divider">
                <span>OR</span>
              </div>

              <button type="button" class="login-material-button-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          .login-material-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 600px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Roboto', sans-serif;
          }
          .login-material-card {
            width: 100%;
            max-width: 400px;
            padding: 2.5rem;
            background: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          }
          .login-material-title {
            font-size: 1.75rem;
            font-weight: 500;
            color: #1f2937;
            margin: 0 0 2rem 0;
          }
          .login-material-form {
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
          }
          .login-material-field {
            position: relative;
            padding-top: 0.5rem;
          }
          .login-material-input {
            width: 100%;
            padding: 0.75rem 0 0.5rem 0;
            border: none;
            border-bottom: 1px solid #d1d5db;
            font-size: 1rem;
            color: #1f2937;
            background: transparent;
            outline: none;
            transition: border-color 0.3s;
          }
          .login-material-input:focus {
            border-bottom-color: #667eea;
          }
          .login-material-input:focus + .login-material-label,
          .login-material-input:not(:placeholder-shown) + .login-material-label {
            transform: translateY(-1.5rem) scale(0.85);
            color: #667eea;
          }
          .login-material-label {
            position: absolute;
            left: 0;
            top: 1.25rem;
            font-size: 1rem;
            color: #9ca3af;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: left top;
          }
          .login-material-underline {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #667eea;
            transition: width 0.3s ease;
          }
          .login-material-input:focus ~ .login-material-underline {
            width: 100%;
          }
          .login-material-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: -0.5rem;
          }
          .login-material-checkbox {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            font-size: 0.875rem;
            color: #6b7280;
            position: relative;
          }
          .login-material-checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          .login-material-checkmark {
            width: 18px;
            height: 18px;
            border: 2px solid #d1d5db;
            border-radius: 2px;
            transition: all 0.3s;
          }
          .login-material-checkbox input:checked + .login-material-checkmark {
            background: #667eea;
            border-color: #667eea;
          }
          .login-material-checkbox input:checked + .login-material-checkmark::after {
            content: '✓';
            position: absolute;
            top: -2px;
            left: 4px;
            color: white;
            font-size: 12px;
          }
          .login-material-link {
            color: #667eea;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            transition: opacity 0.2s;
          }
          .login-material-link:hover {
            opacity: 0.8;
          }
          .login-material-button {
            position: relative;
            width: 100%;
            padding: 0.875rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            border: none;
            border-radius: 0.375rem;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.3s;
            margin-top: 0.5rem;
          }
          .login-material-button:hover {
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
            transform: translateY(-2px);
          }
          .login-material-button:active {
            transform: translateY(0);
          }
          .login-material-divider {
            display: flex;
            align-items: center;
            margin: 1.5rem 0;
            color: #9ca3af;
            font-size: 0.875rem;
          }
          .login-material-divider::before,
          .login-material-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #e5e7eb;
          }
          .login-material-divider span {
            padding: 0 1rem;
          }
          .login-material-button-secondary {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            width: 100%;
            padding: 0.875rem;
            background: #ffffff;
            color: #1f2937;
            border: 1px solid #e5e7eb;
            border-radius: 0.375rem;
            font-size: 0.9375rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
          }
          .login-material-button-secondary:hover {
            background: #f9fafb;
            border-color: #d1d5db;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.login.variants.glassmorphism.name',
        description: 'data.components.navigation.login.variants.glassmorphism.description',
        demoHTML: `
          <div class="login-glass-container">
            <div class="login-glass-bg"></div>
            <div class="login-glass-card">
              <div class="login-glass-header">
                <h2 class="login-glass-title">Welcome</h2>
                <p class="login-glass-subtitle">Enter your credentials</p>
              </div>

              <form class="login-glass-form">
                <div class="login-glass-field">
                  <div class="login-glass-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    class="login-glass-input"
                    placeholder="Email address"
                  />
                </div>

                <div class="login-glass-field">
                  <div class="login-glass-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    class="login-glass-input"
                    placeholder="Password"
                  />
                </div>

                <button type="button" class="login-glass-button">
                  <span>Sign In</span>
                  <svg class="login-glass-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>

              <div class="login-glass-footer">
                <a href="javascript:void(0)" class="login-glass-link">Forgot password?</a>
                <span class="login-glass-separator">•</span>
                <a href="javascript:void(0)" class="login-glass-link">Create account</a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .login-glass-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 600px;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          .login-glass-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg,
              #667eea 0%,
              #764ba2 25%,
              #f093fb 50%,
              #667eea 75%,
              #764ba2 100%);
            background-size: 400% 400%;
            animation: login-glass-gradient 15s ease infinite;
          }
          @keyframes login-glass-gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .login-glass-card {
            position: relative;
            width: 100%;
            max-width: 420px;
            padding: 2.5rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1.5rem;
            box-shadow:
              0 8px 32px 0 rgba(31, 38, 135, 0.37),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          .login-glass-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          .login-glass-title {
            font-size: 2rem;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 0.5rem 0;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          .login-glass-subtitle {
            font-size: 0.9375rem;
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
          }
          .login-glass-form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          .login-glass-field {
            position: relative;
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 0.75rem;
            padding: 0.75rem 1rem;
            transition: all 0.3s;
          }
          .login-glass-field:focus-within {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
          }
          .login-glass-icon {
            color: rgba(255, 255, 255, 0.7);
            margin-right: 0.75rem;
            display: flex;
            align-items: center;
          }
          .login-glass-input {
            flex: 1;
            border: none;
            background: transparent;
            color: #ffffff;
            font-size: 0.9375rem;
            outline: none;
          }
          .login-glass-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          .login-glass-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0.75rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 0.5rem;
          }
          .login-glass-button:hover {
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
          .login-glass-button:active {
            transform: translateY(0);
          }
          .login-glass-arrow {
            transition: transform 0.3s;
          }
          .login-glass-button:hover .login-glass-arrow {
            transform: translateX(4px);
          }
          .login-glass-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.75rem;
            margin-top: 1.5rem;
            font-size: 0.875rem;
          }
          .login-glass-link {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            transition: all 0.2s;
          }
          .login-glass-link:hover {
            color: #ffffff;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          .login-glass-separator {
            color: rgba(255, 255, 255, 0.4);
          }
        `
      },
      {
        id: 'neobrutalism',
        name: 'data.components.navigation.login.variants.neobrutalism.name',
        description: 'data.components.navigation.login.variants.neobrutalism.description',
        demoHTML: `
          <div class="login-brutal-container">
            <div class="login-brutal-card">
              <div class="login-brutal-header">
                <h2 class="login-brutal-title">LOG IN</h2>
                <div class="login-brutal-badge">SECURE</div>
              </div>

              <form class="login-brutal-form">
                <div class="login-brutal-field">
                  <label class="login-brutal-label">USERNAME</label>
                  <input
                    type="text"
                    class="login-brutal-input"
                    placeholder="Enter username"
                  />
                </div>

                <div class="login-brutal-field">
                  <label class="login-brutal-label">PASSWORD</label>
                  <input
                    type="password"
                    class="login-brutal-input"
                    placeholder="Enter password"
                  />
                </div>

                <div class="login-brutal-options">
                  <label class="login-brutal-checkbox">
                    <input type="checkbox" />
                    <span class="login-brutal-checkmark"></span>
                    <span class="login-brutal-checkbox-text">KEEP ME LOGGED IN</span>
                  </label>
                </div>

                <button type="button" class="login-brutal-button">
                  SIGN IN →
                </button>

                <button type="button" class="login-brutal-button-secondary">
                  CREATE ACCOUNT
                </button>
              </form>

              <div class="login-brutal-footer">
                <a href="javascript:void(0)" class="login-brutal-link">FORGOT PASSWORD?</a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .login-brutal-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 650px;
            background: #ffd43b;
            font-family: 'Courier New', monospace;
          }
          .login-brutal-card {
            width: 100%;
            max-width: 440px;
            padding: 2.5rem;
            background: #ffffff;
            border: 4px solid #000000;
            box-shadow: 10px 10px 0 #000000;
            position: relative;
          }
          .login-brutal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 3px solid #000000;
          }
          .login-brutal-title {
            font-size: 2rem;
            font-weight: 900;
            color: #000000;
            margin: 0;
            letter-spacing: 0.05em;
          }
          .login-brutal-badge {
            padding: 0.375rem 0.75rem;
            background: #4ade80;
            border: 2px solid #000000;
            font-size: 0.75rem;
            font-weight: 900;
            letter-spacing: 0.05em;
            box-shadow: 3px 3px 0 #000000;
          }
          .login-brutal-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .login-brutal-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .login-brutal-label {
            font-size: 0.875rem;
            font-weight: 900;
            color: #000000;
            letter-spacing: 0.05em;
          }
          .login-brutal-input {
            width: 100%;
            padding: 0.875rem;
            border: 3px solid #000000;
            font-size: 0.9375rem;
            font-family: 'Courier New', monospace;
            font-weight: 600;
            background: #ffffff;
            transition: all 0.2s;
            outline: none;
          }
          .login-brutal-input:focus {
            box-shadow: 4px 4px 0 #000000;
            transform: translate(-2px, -2px);
          }
          .login-brutal-input::placeholder {
            color: #9ca3af;
            font-weight: 500;
          }
          .login-brutal-options {
            margin-top: -0.5rem;
          }
          .login-brutal-checkbox {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            cursor: pointer;
            position: relative;
          }
          .login-brutal-checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          .login-brutal-checkmark {
            width: 24px;
            height: 24px;
            background: #ffffff;
            border: 3px solid #000000;
            transition: all 0.2s;
            flex-shrink: 0;
          }
          .login-brutal-checkbox input:checked + .login-brutal-checkmark {
            background: #4ade80;
          }
          .login-brutal-checkbox input:checked + .login-brutal-checkmark::after {
            content: '✓';
            position: absolute;
            left: 4px;
            top: -2px;
            color: #000000;
            font-size: 18px;
            font-weight: 900;
          }
          .login-brutal-checkbox-text {
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.03em;
          }
          .login-brutal-button {
            width: 100%;
            padding: 1rem;
            background: #ffd43b;
            color: #000000;
            border: 3px solid #000000;
            font-size: 1rem;
            font-weight: 900;
            font-family: 'Courier New', monospace;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 5px 5px 0 #000000;
            margin-top: 0.5rem;
          }
          .login-brutal-button:hover {
            box-shadow: 7px 7px 0 #000000;
            transform: translate(-2px, -2px);
          }
          .login-brutal-button:active {
            box-shadow: 2px 2px 0 #000000;
            transform: translate(3px, 3px);
          }
          .login-brutal-button-secondary {
            width: 100%;
            padding: 1rem;
            background: #ffffff;
            color: #000000;
            border: 3px solid #000000;
            font-size: 1rem;
            font-weight: 900;
            font-family: 'Courier New', monospace;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 5px 5px 0 #000000;
          }
          .login-brutal-button-secondary:hover {
            background: #f3f4f6;
            box-shadow: 7px 7px 0 #000000;
            transform: translate(-2px, -2px);
          }
          .login-brutal-button-secondary:active {
            box-shadow: 2px 2px 0 #000000;
            transform: translate(3px, 3px);
          }
          .login-brutal-footer {
            text-align: center;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 3px solid #000000;
          }
          .login-brutal-link {
            color: #000000;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 900;
            letter-spacing: 0.05em;
            transition: all 0.2s;
            display: inline-block;
          }
          .login-brutal-link:hover {
            transform: scale(1.05);
          }
        `
      },
      {
        id: 'bootstrap',
        name: 'data.components.navigation.login.variants.bootstrap.name',
        description: 'data.components.navigation.login.variants.bootstrap.description',
        demoHTML: `
          <div class="login-bootstrap-container">
            <div class="login-bootstrap-card">
              <div class="login-bootstrap-header">
                <h2 class="login-bootstrap-title">Sign in to your account</h2>
                <p class="login-bootstrap-subtitle">Welcome back! Please enter your details.</p>
              </div>

              <form class="login-bootstrap-form">
                <div class="login-bootstrap-field">
                  <label for="bs-email" class="login-bootstrap-label">Email</label>
                  <input
                    type="email"
                    class="login-bootstrap-input"
                    id="bs-email"
                    placeholder="name@example.com"
                  />
                  <small class="login-bootstrap-helper">We'll never share your email with anyone else.</small>
                </div>

                <div class="login-bootstrap-field">
                  <div class="login-bootstrap-label-row">
                    <label for="bs-password" class="login-bootstrap-label">Password</label>
                    <a href="javascript:void(0)" class="login-bootstrap-link-small">Forgot password?</a>
                  </div>
                  <div class="login-bootstrap-input-group">
                    <input
                      type="password"
                      class="login-bootstrap-input"
                      id="bs-password"
                      placeholder="••••••••"
                    />
                    <button type="button" class="login-bootstrap-input-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="login-bootstrap-check">
                  <label class="login-bootstrap-checkbox">
                    <input type="checkbox" class="login-bootstrap-check-input" />
                    <span>Remember me for 30 days</span>
                  </label>
                </div>

                <button type="button" class="login-bootstrap-button">
                  Sign in
                </button>

                <div class="login-bootstrap-divider">
                  <span>Or continue with</span>
                </div>

                <div class="login-bootstrap-social">
                  <button type="button" class="login-bootstrap-social-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </button>
                  <button type="button" class="login-bootstrap-social-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                    </svg>
                  </button>
                  <button type="button" class="login-bootstrap-social-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </button>
                </div>
              </form>

              <div class="login-bootstrap-footer">
                <span>Don't have an account?</span>
                <a href="javascript:void(0)" class="login-bootstrap-link">Sign up for free</a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .login-bootstrap-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 700px;
            background: #f8f9fa;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          }
          .login-bootstrap-card {
            width: 100%;
            max-width: 440px;
            padding: 2rem;
            background: #ffffff;
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          }
          .login-bootstrap-header {
            margin-bottom: 1.5rem;
          }
          .login-bootstrap-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #212529;
            margin: 0 0 0.5rem 0;
          }
          .login-bootstrap-subtitle {
            font-size: 0.875rem;
            color: #6c757d;
            margin: 0;
          }
          .login-bootstrap-form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          .login-bootstrap-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .login-bootstrap-label-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .login-bootstrap-label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #212529;
          }
          .login-bootstrap-link-small {
            font-size: 0.8125rem;
            color: #0d6efd;
            text-decoration: none;
            transition: color 0.15s;
          }
          .login-bootstrap-link-small:hover {
            color: #0a58ca;
            text-decoration: underline;
          }
          .login-bootstrap-input {
            width: 100%;
            padding: 0.625rem 0.875rem;
            font-size: 0.9375rem;
            color: #212529;
            background: #ffffff;
            border: 1px solid #ced4da;
            border-radius: 0.375rem;
            transition: border-color 0.15s, box-shadow 0.15s;
            outline: none;
          }
          .login-bootstrap-input:focus {
            border-color: #86b7fe;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
          }
          .login-bootstrap-input::placeholder {
            color: #6c757d;
          }
          .login-bootstrap-input-group {
            position: relative;
            display: flex;
          }
          .login-bootstrap-input-group .login-bootstrap-input {
            padding-right: 3rem;
          }
          .login-bootstrap-input-button {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            padding: 0 0.875rem;
            background: transparent;
            border: none;
            color: #6c757d;
            cursor: pointer;
            transition: color 0.15s;
          }
          .login-bootstrap-input-button:hover {
            color: #212529;
          }
          .login-bootstrap-helper {
            font-size: 0.8125rem;
            color: #6c757d;
          }
          .login-bootstrap-check {
            margin-top: -0.5rem;
          }
          .login-bootstrap-checkbox {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            font-size: 0.875rem;
            color: #212529;
          }
          .login-bootstrap-check-input {
            width: 1rem;
            height: 1rem;
            margin: 0;
            cursor: pointer;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
          }
          .login-bootstrap-button {
            width: 100%;
            padding: 0.625rem;
            background: #0d6efd;
            color: #ffffff;
            border: 1px solid #0d6efd;
            border-radius: 0.375rem;
            font-size: 0.9375rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.15s;
          }
          .login-bootstrap-button:hover {
            background: #0b5ed7;
            border-color: #0a58ca;
          }
          .login-bootstrap-button:active {
            background: #0a58ca;
            border-color: #0a53be;
          }
          .login-bootstrap-divider {
            display: flex;
            align-items: center;
            margin: 1.5rem 0;
            color: #6c757d;
            font-size: 0.875rem;
          }
          .login-bootstrap-divider::before,
          .login-bootstrap-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #dee2e6;
          }
          .login-bootstrap-divider span {
            padding: 0 1rem;
          }
          .login-bootstrap-social {
            display: flex;
            gap: 0.75rem;
          }
          .login-bootstrap-social-button {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.625rem;
            background: #ffffff;
            border: 1px solid #dee2e6;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: all 0.15s;
          }
          .login-bootstrap-social-button:hover {
            background: #f8f9fa;
            border-color: #adb5bd;
          }
          .login-bootstrap-footer {
            text-align: center;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid #dee2e6;
            font-size: 0.875rem;
            color: #6c757d;
          }
          .login-bootstrap-link {
            color: #0d6efd;
            text-decoration: none;
            font-weight: 500;
            margin-left: 0.25rem;
            transition: color 0.15s;
          }
          .login-bootstrap-link:hover {
            color: #0a58ca;
            text-decoration: underline;
          }
        `
      }
    ]
  },

  // Autocomplete Search - 自动完成搜索
  {
    id: 'autocomplete',
    title: 'data.components.navigation.autocomplete.title',
    description: 'data.components.navigation.autocomplete.description',
    variants: [
      // 1. Minimalism - 极简风格
      {
        id: 'minimalism',
        name: 'data.components.navigation.autocomplete.variants.minimalism.name',
        description: 'data.components.navigation.autocomplete.variants.minimalism.description',
        demoHTML: `
          <div class="autocomplete-minimalism-container">
            <div class="autocomplete-minimalism-input-wrapper">
              <svg class="autocomplete-minimalism-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                class="autocomplete-minimalism-input"
                placeholder="{{t:demo.autocomplete.placeholder}}"
                value="{{t:demo.autocomplete.query}}"
              />
            </div>
            <ul class="autocomplete-minimalism-dropdown">
              <li class="autocomplete-minimalism-item autocomplete-minimalism-item-hover">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span>{{t:demo.autocomplete.option1}}</span>
              </li>
              <li class="autocomplete-minimalism-item">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{t:demo.autocomplete.option2}}</span>
              </li>
              <li class="autocomplete-minimalism-item">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
                <span>{{t:demo.autocomplete.option3}}</span>
              </li>
            </ul>
          </div>
        `,
        customStyles: `
          .autocomplete-minimalism-container {
            width: 100%;
            max-width: 28rem;
            position: relative;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          .autocomplete-minimalism-input-wrapper {
            position: relative;
          }
          .autocomplete-minimalism-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            width: 1.25rem;
            height: 1.25rem;
            color: #9ca3af;
            pointer-events: none;
          }
          .autocomplete-minimalism-input {
            width: 100%;
            padding: 0.75rem 1rem 0.75rem 3rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            font-size: 0.9375rem;
            color: #111827;
            outline: none;
            transition: all 0.2s ease;
            background: #ffffff;
          }
          .autocomplete-minimalism-input:focus {
            border-color: #000000;
            box-shadow: 0 0 0 1px #000000;
          }
          .autocomplete-minimalism-dropdown {
            position: absolute;
            width: 100%;
            margin-top: 0.5rem;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            list-style: none;
            padding: 0;
            animation: fadeIn 0.2s ease;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .autocomplete-minimalism-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            color: #374151;
            cursor: pointer;
            transition: background-color 0.15s ease;
          }
          .autocomplete-minimalism-item:hover,
          .autocomplete-minimalism-item-hover {
            background-color: #f9fafb;
          }
          .autocomplete-minimalism-item svg {
            flex-shrink: 0;
            color: #9ca3af;
          }
        `
      },

      // 2. Material Design - Material 风格
      {
        id: 'material',
        name: 'data.components.navigation.autocomplete.variants.material.name',
        description: 'data.components.navigation.autocomplete.variants.material.description',
        demoHTML: `
          <div class="autocomplete-material-container">
            <div class="autocomplete-material-input-wrapper">
              <input
                type="text"
                class="autocomplete-material-input"
                placeholder=" "
                value="{{t:demo.autocomplete.query}}"
              />
              <label class="autocomplete-material-label">{{t:demo.autocomplete.label}}</label>
              <svg class="autocomplete-material-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <ul class="autocomplete-material-dropdown">
              <li class="autocomplete-material-item autocomplete-material-ripple">
                <div class="autocomplete-material-icon-circle" style="background-color: #3b82f6;">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div class="autocomplete-material-content">
                  <div class="autocomplete-material-title">{{t:demo.autocomplete.option1}}</div>
                  <div class="autocomplete-material-subtitle">{{t:demo.autocomplete.subtitle1}}</div>
                </div>
              </li>
              <li class="autocomplete-material-item">
                <div class="autocomplete-material-icon-circle" style="background-color: #10b981;">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="autocomplete-material-content">
                  <div class="autocomplete-material-title">{{t:demo.autocomplete.option2}}</div>
                  <div class="autocomplete-material-subtitle">{{t:demo.autocomplete.subtitle2}}</div>
                </div>
              </li>
              <li class="autocomplete-material-item">
                <div class="autocomplete-material-icon-circle" style="background-color: #8b5cf6;">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                </div>
                <div class="autocomplete-material-content">
                  <div class="autocomplete-material-title">{{t:demo.autocomplete.option3}}</div>
                  <div class="autocomplete-material-subtitle">{{t:demo.autocomplete.subtitle3}}</div>
                </div>
              </li>
            </ul>
          </div>
        `,
        customStyles: `
          .autocomplete-material-container {
            width: 100%;
            max-width: 28rem;
            position: relative;
            font-family: 'Roboto', sans-serif;
          }
          .autocomplete-material-input-wrapper {
            position: relative;
          }
          .autocomplete-material-input {
            width: 100%;
            padding: 1.5rem 3rem 0.5rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.25rem;
            font-size: 1rem;
            color: #111827;
            outline: none;
            transition: all 0.2s ease;
            background: #ffffff;
          }
          .autocomplete-material-input:focus {
            border-color: #3b82f6;
            border-width: 2px;
            padding-top: calc(1.5rem - 1px);
            padding-bottom: calc(0.5rem - 1px);
          }
          .autocomplete-material-label {
            position: absolute;
            left: 1rem;
            top: 0.625rem;
            font-size: 0.75rem;
            color: #6b7280;
            pointer-events: none;
            transition: all 0.2s ease;
          }
          .autocomplete-material-input:focus + .autocomplete-material-label {
            color: #3b82f6;
          }
          .autocomplete-material-icon {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            width: 1.25rem;
            height: 1.25rem;
            color: #9ca3af;
            pointer-events: none;
          }
          .autocomplete-material-dropdown {
            position: absolute;
            width: 100%;
            margin-top: 0.5rem;
            background: #ffffff;
            border-radius: 0.25rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            list-style: none;
            padding: 0.5rem 0;
            animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .autocomplete-material-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem 1rem;
            cursor: pointer;
            transition: background-color 0.15s ease;
            position: relative;
            overflow: hidden;
          }
          .autocomplete-material-item:hover,
          .autocomplete-material-ripple {
            background-color: #f3f4f6;
          }
          .autocomplete-material-icon-circle {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .autocomplete-material-content {
            flex: 1;
          }
          .autocomplete-material-title {
            font-size: 0.9375rem;
            color: #111827;
            font-weight: 500;
            margin-bottom: 0.125rem;
          }
          .autocomplete-material-subtitle {
            font-size: 0.8125rem;
            color: #6b7280;
          }
        `
      },

      // 3. Glassmorphism - 玻璃态
      {
        id: 'glassmorphism',
        name: 'data.components.navigation.autocomplete.variants.glassmorphism.name',
        description: 'data.components.navigation.autocomplete.variants.glassmorphism.description',
        demoHTML: `
          <div class="autocomplete-glass-background">
            <div class="autocomplete-glass-container">
              <div class="autocomplete-glass-input-wrapper">
                <svg class="autocomplete-glass-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  class="autocomplete-glass-input"
                  placeholder="{{t:demo.autocomplete.placeholder}}"
                  value="{{t:demo.autocomplete.query}}"
                />
              </div>
              <ul class="autocomplete-glass-dropdown">
                <li class="autocomplete-glass-item autocomplete-glass-glow">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <span>{{t:demo.autocomplete.option1}}</span>
                </li>
                <li class="autocomplete-glass-item">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{{t:demo.autocomplete.option2}}</span>
                </li>
                <li class="autocomplete-glass-item">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                  <span>{{t:demo.autocomplete.option3}}</span>
                </li>
              </ul>
            </div>
          </div>
        `,
        customStyles: `
          .autocomplete-glass-background {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem;
            border-radius: 1rem;
          }
          .autocomplete-glass-container {
            width: 100%;
            max-width: 28rem;
            position: relative;
            margin: 0 auto;
          }
          .autocomplete-glass-input-wrapper {
            position: relative;
          }
          .autocomplete-glass-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            width: 1.25rem;
            height: 1.25rem;
            color: rgba(255, 255, 255, 0.7);
            pointer-events: none;
            z-index: 2;
          }
          .autocomplete-glass-input {
            width: 100%;
            padding: 0.875rem 1rem 0.875rem 3rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            font-size: 0.9375rem;
            color: #ffffff;
            outline: none;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          .autocomplete-glass-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          .autocomplete-glass-input:focus {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
          .autocomplete-glass-dropdown {
            position: absolute;
            width: 100%;
            margin-top: 0.75rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            overflow: hidden;
            list-style: none;
            padding: 0.5rem;
            animation: slideIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-12px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .autocomplete-glass-item {
            display: flex;
            align-items: center;
            gap: 0.875rem;
            padding: 0.875rem;
            color: #ffffff;
            cursor: pointer;
            transition: all 0.2s ease;
            border-radius: 0.75rem;
          }
          .autocomplete-glass-item:hover,
          .autocomplete-glass-glow {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
          }
          .autocomplete-glass-item svg {
            flex-shrink: 0;
            color: rgba(255, 255, 255, 0.9);
          }
        `
      },

      // 4. Neumorphism - 新拟态
      {
        id: 'neumorphism',
        name: 'data.components.navigation.autocomplete.variants.neumorphism.name',
        description: 'data.components.navigation.autocomplete.variants.neumorphism.description',
        demoHTML: `
          <div class="autocomplete-neomorph-background">
            <div class="autocomplete-neomorph-container">
              <div class="autocomplete-neomorph-input-wrapper">
                <svg class="autocomplete-neomorph-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  class="autocomplete-neomorph-input"
                  placeholder="{{t:demo.autocomplete.placeholder}}"
                  value="{{t:demo.autocomplete.query}}"
                />
              </div>
              <ul class="autocomplete-neomorph-dropdown">
                <li class="autocomplete-neomorph-item autocomplete-neomorph-pressed">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <span>{{t:demo.autocomplete.option1}}</span>
                </li>
                <li class="autocomplete-neomorph-item">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{{t:demo.autocomplete.option2}}</span>
                </li>
                <li class="autocomplete-neomorph-item">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                  <span>{{t:demo.autocomplete.option3}}</span>
                </li>
              </ul>
            </div>
          </div>
        `,
        customStyles: `
          .autocomplete-neomorph-background {
            background: #e0e5ec;
            padding: 2rem;
            border-radius: 1.5rem;
          }
          .autocomplete-neomorph-container {
            width: 100%;
            max-width: 28rem;
            position: relative;
            margin: 0 auto;
          }
          .autocomplete-neomorph-input-wrapper {
            position: relative;
          }
          .autocomplete-neomorph-icon {
            position: absolute;
            left: 1.25rem;
            top: 50%;
            transform: translateY(-50%);
            width: 1.25rem;
            height: 1.25rem;
            color: #6b7280;
            pointer-events: none;
            z-index: 2;
          }
          .autocomplete-neomorph-input {
            width: 100%;
            padding: 1rem 1.25rem 1rem 3.5rem;
            border: none;
            border-radius: 1rem;
            font-size: 0.9375rem;
            color: #374151;
            outline: none;
            transition: all 0.3s ease;
            background: #e0e5ec;
            box-shadow:
              inset 6px 6px 12px #b8bdc4,
              inset -6px -6px 12px #ffffff;
          }
          .autocomplete-neomorph-input::placeholder {
            color: #9ca3af;
          }
          .autocomplete-neomorph-input:focus {
            box-shadow:
              inset 4px 4px 8px #b8bdc4,
              inset -4px -4px 8px #ffffff;
          }
          .autocomplete-neomorph-dropdown {
            position: absolute;
            width: 100%;
            margin-top: 1rem;
            background: #e0e5ec;
            border-radius: 1rem;
            overflow: hidden;
            list-style: none;
            padding: 0.75rem;
            box-shadow:
              8px 8px 16px #b8bdc4,
              -8px -8px 16px #ffffff;
            animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .autocomplete-neomorph-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s ease;
            border-radius: 0.75rem;
            margin-bottom: 0.5rem;
            background: #e0e5ec;
            box-shadow:
              4px 4px 8px #b8bdc4,
              -4px -4px 8px #ffffff;
          }
          .autocomplete-neomorph-item:last-child {
            margin-bottom: 0;
          }
          .autocomplete-neomorph-item:hover,
          .autocomplete-neomorph-pressed {
            box-shadow:
              inset 3px 3px 6px #b8bdc4,
              inset -3px -3px 6px #ffffff;
          }
          .autocomplete-neomorph-item svg {
            flex-shrink: 0;
            color: #6b7280;
          }
        `
      },

      // 5. Bootstrap 5 - Bootstrap 风格
      {
        id: 'bootstrap',
        name: 'data.components.navigation.autocomplete.variants.bootstrap.name',
        description: 'data.components.navigation.autocomplete.variants.bootstrap.description',
        demoHTML: `
          <div class="autocomplete-bootstrap-container">
            <div class="autocomplete-bootstrap-input-wrapper">
              <span class="autocomplete-bootstrap-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                type="text"
                class="autocomplete-bootstrap-input"
                placeholder="{{t:demo.autocomplete.placeholder}}"
                value="{{t:demo.autocomplete.query}}"
              />
            </div>
            <ul class="autocomplete-bootstrap-dropdown">
              <li class="autocomplete-bootstrap-item active">
                <svg class="autocomplete-bootstrap-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                {{t:demo.autocomplete.option1}}
                <span class="badge">12</span>
              </li>
              <li class="autocomplete-bootstrap-item">
                <svg class="autocomplete-bootstrap-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {{t:demo.autocomplete.option2}}
                <span class="badge">8</span>
              </li>
              <li class="autocomplete-bootstrap-item">
                <svg class="autocomplete-bootstrap-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
                {{t:demo.autocomplete.option3}}
                <span class="badge">5</span>
              </li>
            </ul>
          </div>
        `,
        customStyles: `
          .autocomplete-bootstrap-container {
            width: 100%;
            max-width: 28rem;
            position: relative;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .autocomplete-bootstrap-input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
          }
          .autocomplete-bootstrap-icon {
            position: absolute;
            left: 0.75rem;
            display: flex;
            align-items: center;
            color: #6c757d;
            pointer-events: none;
            z-index: 2;
          }
          .autocomplete-bootstrap-icon svg {
            width: 1rem;
            height: 1rem;
          }
          .autocomplete-bootstrap-input {
            width: 100%;
            padding: 0.625rem 0.75rem 0.625rem 2.5rem;
            border: 1px solid #ced4da;
            border-radius: 0.375rem;
            font-size: 1rem;
            color: #212529;
            outline: none;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            background: #ffffff;
          }
          .autocomplete-bootstrap-input:focus {
            border-color: #86b7fe;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
          }
          .autocomplete-bootstrap-dropdown {
            position: absolute;
            width: 100%;
            margin-top: 0.25rem;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 0.375rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
            overflow: hidden;
            list-style: none;
            padding: 0.5rem 0;
            animation: dropdownSlide 0.2s ease;
          }
          @keyframes dropdownSlide {
            from {
              opacity: 0;
              transform: translateY(-0.5rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .autocomplete-bootstrap-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 1rem;
            color: #212529;
            cursor: pointer;
            transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
            font-size: 0.9375rem;
          }
          .autocomplete-bootstrap-item:hover,
          .autocomplete-bootstrap-item.active {
            background-color: #0d6efd;
            color: #ffffff;
          }
          .autocomplete-bootstrap-item-icon {
            width: 1rem;
            height: 1rem;
            flex-shrink: 0;
            color: inherit;
          }
          .badge {
            margin-left: auto;
            padding: 0.25rem 0.5rem;
            background-color: #6c757d;
            color: #ffffff;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          .autocomplete-bootstrap-item.active .badge {
            background-color: rgba(255, 255, 255, 0.2);
          }
        `
      }
    ]
  },

  // Loading Skeleton - 加载骨架屏
  loadingSkeletons
];

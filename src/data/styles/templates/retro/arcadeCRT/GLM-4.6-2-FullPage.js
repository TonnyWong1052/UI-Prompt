// Arcade Hall Full Page Template
// 街機大廳完整頁面模板

export const GLM_4_6_2_FullPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arcade CRT Interface</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');

        :root {
            --bg-black: #0a0a0a;
            --neon-magenta: #ff00ff;
            --neon-cyan: #00ffff;
            --neon-yellow: #ffff00;
            --neon-green: #00ff41;
            --neon-red: #ff0040;
        }

        body {
            font-family: 'Orbitron', monospace;
            background-color: var(--bg-black);
            color: var(--neon-cyan);
            overflow-x: hidden;
        }

        /* CRT Effect */
        .crt-container {
            position: relative;
            overflow: hidden;
        }

        .crt-container::before {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 2;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }

        .crt-container::after {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(18, 16, 16, 0.1);
            opacity: 0;
            z-index: 2;
            pointer-events: none;
            animation: flicker 0.15s infinite;
        }

        @keyframes flicker {
            0% { opacity: 0.27861; }
            5% { opacity: 0.34769; }
            10% { opacity: 0.23604; }
            15% { opacity: 0.90626; }
            20% { opacity: 0.18128; }
            25% { opacity: 0.83891; }
            30% { opacity: 0.65583; }
            35% { opacity: 0.67807; }
            40% { opacity: 0.26559; }
            45% { opacity: 0.84693; }
            50% { opacity: 0.96019; }
            55% { opacity: 0.08594; }
            60% { opacity: 0.20313; }
            65% { opacity: 0.71988; }
            70% { opacity: 0.53455; }
            75% { opacity: 0.37288; }
            80% { opacity: 0.71428; }
            85% { opacity: 0.70419; }
            90% { opacity: 0.7003; }
            95% { opacity: 0.36108; }
            100% { opacity: 0.24387; }
        }

        /* Neon Glow Effect */
        .neon-glow {
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }

        .neon-border {
            box-shadow: 0 0 5px var(--neon-cyan), 0 0 10px var(--neon-cyan), inset 0 0 5px var(--neon-cyan);
        }

        .neon-border-magenta {
            box-shadow: 0 0 5px var(--neon-magenta), 0 0 10px var(--neon-magenta), inset 0 0 5px var(--neon-magenta);
        }

        .neon-border-yellow {
            box-shadow: 0 0 5px var(--neon-yellow), 0 0 10px var(--neon-yellow), inset 0 0 5px var(--neon-yellow);
        }

        .neon-border-green {
            box-shadow: 0 0 5px var(--neon-green), 0 0 10px var(--neon-green), inset 0 0 5px var(--neon-green);
        }

        .neon-border-red {
            box-shadow: 0 0 5px var(--neon-red), 0 0 10px var(--neon-red), inset 0 0 5px var(--neon-red);
        }

        /* Loading Animation */
        .loading-dots span {
            animation: blink 1.4s infinite both;
        }

        .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes blink {
            0%, 60%, 100% { opacity: 0.2; }
            20% { opacity: 1; }
        }

        /* Progress Bar Animation */
        .progress-bar {
            background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta));
            animation: progress-animation 3s ease-in-out infinite;
        }

        @keyframes progress-animation {
            0% { width: 0%; }
            50% { width: 75%; }
            100% { width: 100%; }
        }

        /* Notification Animation */
        .notification {
            animation: slide-in 0.5s ease-out;
        }

        @keyframes slide-in {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }

        /* Timeline Animation */
        .timeline-item {
            position: relative;
            padding-left: 40px;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: 9px;
            top: 0;
            height: 100%;
            width: 2px;
            background: var(--neon-cyan);
        }

        .timeline-dot {
            position: absolute;
            left: 0;
            top: 5px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--bg-black);
            border: 2px solid var(--neon-cyan);
        }

        /* Data Table Hover Effect */
        .data-table tr:hover {
            background-color: rgba(0, 255, 255, 0.1);
        }

        /* Button Effects */
        .btn-arcade {
            position: relative;
            overflow: hidden;
            transition: all 0.3s;
        }

        .btn-arcade::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .btn-arcade:hover::before {
            left: 100%;
        }

        /* Form Input Effects */
        .form-input {
            background-color: rgba(10, 10, 10, 0.7);
            border: 1px solid var(--neon-cyan);
            transition: all 0.3s;
        }

        .form-input:focus {
            box-shadow: 0 0 10px var(--neon-cyan);
            outline: none;
        }

        /* Card Hover Effect */
        .arcade-card {
            transition: all 0.3s;
        }

        .arcade-card:hover {
            transform: translateY(-5px);
        }

        /* Chart Container */
        .chart-container {
            position: relative;
            height: 200px;
            width: 100%;
        }

        .chart-bar {
            position: absolute;
            bottom: 0;
            width: 40px;
            background: linear-gradient(to top, var(--neon-cyan), var(--neon-magenta));
            transition: height 1s ease-out;
        }
    </style>
</head>
<body class="crt-container">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-cyan-500">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-gamepad text-cyan-400 text-2xl neon-glow"></i>
                <span class="text-xl font-bold text-cyan-400 neon-glow">ARCADE CRT</span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#hero" class="text-cyan-400 hover:text-magenta-400 transition-colors">HOME</a>
                <a href="#features" class="text-cyan-400 hover:text-magenta-400 transition-colors">FEATURES</a>
                <a href="#timeline" class="text-cyan-400 hover:text-magenta-400 transition-colors">TIMELINE</a>
                <a href="#form" class="text-cyan-400 hover:text-magenta-400 transition-colors">CONTACT</a>
            </div>
            <button id="mobile-menu-btn" class="md:hidden text-cyan-400">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-black bg-opacity-90 border-t border-cyan-500">
            <div class="px-4 py-2 space-y-2">
                <a href="#hero" class="block text-cyan-400 hover:text-magenta-400 transition-colors py-2">HOME</a>
                <a href="#features" class="block text-cyan-400 hover:text-magenta-400 transition-colors py-2">FEATURES</a>
                <a href="#timeline" class="block text-cyan-400 hover:text-magenta-400 transition-colors py-2">TIMELINE</a>
                <a href="#form" class="block text-cyan-400 hover:text-magenta-400 transition-colors py-2">CONTACT</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div class="container mx-auto px-4 z-10 text-center">
            <h1 class="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 neon-glow">
                ARCADE CRT INTERFACE
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-cyan-300">
                Retro-Futuristic Control Room Experience
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="btn-arcade px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded font-bold hover:bg-cyan-400 hover:text-black transition-all neon-border">
                    <i class="fas fa-play mr-2"></i>START EXPERIENCE
                </button>
                <button class="btn-arcade px-8 py-3 bg-transparent border-2 border-magenta-500 text-magenta-500 rounded font-bold hover:bg-magenta-500 hover:text-black transition-all neon-border-magenta">
                    <i class="fas fa-info-circle mr-2"></i>LEARN MORE
                </button>
            </div>
        </div>
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
            <i class="fas fa-chevron-down text-2xl"></i>
        </div>
    </section>

    <!-- Features Grid -->
    <section id="features" class="py-20 relative">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12 text-cyan-400 neon-glow">CORE FEATURES</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Feature Card 1 -->
                <div class="arcade-card bg-black bg-opacity-70 border border-cyan-400 rounded-lg p-6 neon-border">
                    <div class="text-4xl mb-4 text-cyan-400">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-cyan-400">CRT Display</h3>
                    <p class="text-gray-300 mb-4">Authentic retro CRT monitor effects with scanlines and screen curvature for nostalgic gaming experience.</p>
                    <div class="flex items-center text-cyan-400">
                        <span class="text-sm">Status:</span>
                        <div class="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span class="ml-2 text-green-400 text-sm">ACTIVE</span>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="arcade-card bg-black bg-opacity-70 border border-magenta-500 rounded-lg p-6 neon-border-magenta">
                    <div class="text-4xl mb-4 text-magenta-500">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-magenta-500">Data Visualization</h3>
                    <p class="text-gray-300 mb-4">Real-time data monitoring with vibrant neon charts and graphs that pulse with information.</p>
                    <div class="chart-container mt-4">
                        <div class="chart-bar" style="left: 10%; height: 40%;"></div>
                        <div class="chart-bar" style="left: 30%; height: 70%;"></div>
                        <div class="chart-bar" style="left: 50%; height: 55%;"></div>
                        <div class="chart-bar" style="left: 70%; height: 85%;"></div>
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="arcade-card bg-black bg-opacity-70 border border-yellow-400 rounded-lg p-6 neon-border-yellow">
                    <div class="text-4xl mb-4 text-yellow-400">
                        <i class="fas fa-bell"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-yellow-400">Notification System</h3>
                    <p class="text-gray-300 mb-4">Instant alerts and notifications with eye-catching neon animations to keep you informed.</p>
                    <button id="notification-btn" class="mt-2 px-4 py-2 bg-transparent border border-yellow-400 text-yellow-400 rounded text-sm hover:bg-yellow-400 hover:text-black transition-all">
                        Test Notification
                    </button>
                </div>

                <!-- Feature Card 4 -->
                <div class="arcade-card bg-black bg-opacity-70 border border-green-400 rounded-lg p-6 neon-border-green">
                    <div class="text-4xl mb-4 text-green-400">
                        <i class="fas fa-tasks"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-green-400">Progress Tracking</h3>
                    <p class="text-gray-300 mb-4">Visual progress indicators with animated bars that showcase completion status in real-time.</p>
                    <div class="w-full bg-gray-800 rounded-full h-2.5 mt-4">
                        <div class="progress-bar h-2.5 rounded-full"></div>
                    </div>
                </div>

                <!-- Feature Card 5 -->
                <div class="arcade-card bg-black bg-opacity-70 border border-red-500 rounded-lg p-6 neon-border-red">
                    <div class="text-4xl mb-4 text-red-500">
                        <i class="fas fa-database"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-red-500">Data Table</h3>
                    <p class="text-gray-300 mb-4">Organized data presentation with sortable columns and highlighted rows for easy scanning.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="data-table w-full text-xs">
                            <thead>
                                <tr class="border-b border-red-500">
                                    <th class="text-left py-1">ID</th>
                                    <th class="text-left py-1">NAME</th>
                                    <th class="text-left py-1">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-700">
                                    <td class="py-1">001</td>
                                    <td class="py-1">SYSTEM</td>
                                    <td class="py-1 text-green-400">ONLINE</td>
                                </tr>
                                <tr class="border-b border-gray-700">
                                    <td class="py-1">002</td>
                                    <td class="py-1">MODULE</td>
                                    <td class="py-1 text-yellow-400">STANDBY</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Feature Card 6 -->
                <div class="arcade-card bg-black bg-opacity-70 border border-cyan-400 rounded-lg p-6 neon-border">
                    <div class="text-4xl mb-4 text-cyan-400">
                        <i class="fas fa-spinner"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-cyan-400">Loading States</h3>
                    <p class="text-gray-300 mb-4">Animated loading indicators that keep users engaged during data processing and transitions.</p>
                    <div class="loading-dots flex justify-center mt-4">
                        <span class="inline-block w-3 h-3 bg-cyan-400 rounded-full mx-1"></span>
                        <span class="inline-block w-3 h-3 bg-cyan-400 rounded-full mx-1"></span>
                        <span class="inline-block w-3 h-3 bg-cyan-400 rounded-full mx-1"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Timeline Section -->
    <section id="timeline" class="py-20 relative bg-gradient-to-b from-transparent to-purple-900/10">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12 text-cyan-400 neon-glow">DEVELOPMENT TIMELINE</h2>
            <div class="max-w-4xl mx-auto">
                <div class="timeline-item mb-8">
                    <div class="timeline-dot"></div>
                    <div class="bg-black bg-opacity-70 border border-cyan-400 rounded-lg p-6 neon-border">
                        <h3 class="text-xl font-bold mb-2 text-cyan-400">Phase 1: Concept Development</h3>
                        <p class="text-gray-300 mb-2">Initial design concepts and style exploration for the Arcade CRT interface.</p>
                        <span class="text-xs text-cyan-300">Q1 2023</span>
                    </div>
                </div>

                <div class="timeline-item mb-8">
                    <div class="timeline-dot"></div>
                    <div class="bg-black bg-opacity-70 border border-magenta-500 rounded-lg p-6 neon-border-magenta">
                        <h3 class="text-xl font-bold mb-2 text-magenta-500">Phase 2: Prototyping</h3>
                        <p class="text-gray-300 mb-2">Creation of interactive prototypes with core functionality and visual effects.</p>
                        <span class="text-xs text-magenta-300">Q2 2023</span>
                    </div>
                </div>

                <div class="timeline-item mb-8">
                    <div class="timeline-dot"></div>
                    <div class="bg-black bg-opacity-70 border border-yellow-400 rounded-lg p-6 neon-border-yellow">
                        <h3 class="text-xl font-bold mb-2 text-yellow-400">Phase 3: User Testing</h3>
                        <p class="text-gray-300 mb-2">Comprehensive testing and refinement based on user feedback and performance metrics.</p>
                        <span class="text-xs text-yellow-300">Q3 2023</span>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="bg-black bg-opacity-70 border border-green-400 rounded-lg p-6 neon-border-green">
                        <h3 class="text-xl font-bold mb-2 text-green-400">Phase 4: Final Implementation</h3>
                        <p class="text-gray-300 mb-2">Polishing and final implementation of all features with optimization for performance.</p>
                        <span class="text-xs text-green-300">Q4 2023</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Form Section -->
    <section id="form" class="py-20 relative">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12 text-cyan-400 neon-glow">CONTROL PANEL</h2>
            <div class="max-w-2xl mx-auto bg-black bg-opacity-70 border border-cyan-400 rounded-lg p-8 neon-border">
                <form id="arcade-form" class="space-y-6">
                    <div>
                        <label for="username" class="block text-cyan-400 mb-2">USERNAME</label>
                        <input type="text" id="username" name="username" class="form-input w-full px-4 py-2 rounded text-cyan-300" placeholder="Enter your username">
                    </div>

                    <div>
                        <label for="email" class="block text-cyan-400 mb-2">EMAIL ADDRESS</label>
                        <input type="email" id="email" name="email" class="form-input w-full px-4 py-2 rounded text-cyan-300" placeholder="your.email@example.com">
                    </div>

                    <div>
                        <label for="system" class="block text-cyan-400 mb-2">SYSTEM PREFERENCE</label>
                        <select id="system" name="system" class="form-input w-full px-4 py-2 rounded text-cyan-300 bg-black">
                            <option value="">Select a system</option>
                            <option value="arcade">Arcade Cabinet</option>
                            <option value="console">Home Console</option>
                            <option value="pc">PC Gaming</option>
                            <option value="mobile">Mobile Device</option>
                        </select>
                    </div>

                    <div>
                        <label for="message" class="block text-cyan-400 mb-2">MESSAGE</label>
                        <textarea id="message" name="message" rows="4" class="form-input w-full px-4 py-2 rounded text-cyan-300" placeholder="Enter your message here..."></textarea>
                    </div>

                    <div class="flex items-center">
                        <input type="checkbox" id="subscribe" name="subscribe" class="mr-2">
                        <label for="subscribe" class="text-cyan-300">Subscribe to system updates</label>
                    </div>

                    <div class="flex space-x-4">
                        <button type="submit" class="btn-arcade flex-1 px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded font-bold hover:bg-cyan-400 hover:text-black transition-all neon-border">
                            <i class="fas fa-paper-plane mr-2"></i>TRANSMIT
                        </button>
                        <button type="reset" class="btn-arcade flex-1 px-6 py-3 bg-transparent border-2 border-magenta-500 text-magenta-500 rounded font-bold hover:bg-magenta-500 hover:text-black transition-all neon-border-magenta">
                            <i class="fas fa-undo mr-2"></i>RESET
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-cyan-400 bg-black bg-opacity-80">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center space-x-2 mb-4 md:mb-0">
                    <i class="fas fa-gamepad text-cyan-400 text-xl neon-glow"></i>
                    <span class="text-cyan-400 font-bold">ARCADE CRT INTERFACE</span>
                </div>
                <div class="flex space-x-6">
                    <a href="javascript:void(0)" class="text-cyan-400 hover:text-magenta-400 transition-colors">
                        <i class="fab fa-github text-xl"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-cyan-400 hover:text-magenta-400 transition-colors">
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-cyan-400 hover:text-magenta-400 transition-colors">
                        <i class="fab fa-discord text-xl"></i>
                    </a>
                </div>
            </div>
            <div class="mt-6 text-center text-gray-400 text-sm">
                <p>&copy; 2023 ARCADE CRT INTERFACE. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </footer>

    <!-- Notification Element (Hidden by default) -->
    <div id="notification" class="notification fixed top-20 right-4 bg-black bg-opacity-90 border-2 border-yellow-400 rounded-lg p-4 max-w-sm neon-border-yellow hidden z-50">
        <div class="flex items-start">
            <i class="fas fa-exclamation-circle text-yellow-400 text-xl mr-3 mt-1"></i>
            <div>
                <h4 class="text-yellow-400 font-bold mb-1">SYSTEM ALERT</h4>
                <p class="text-gray-300 text-sm">This is a notification from the Arcade CRT Interface system.</p>
            </div>
            <button id="close-notification" class="ml-auto text-yellow-400 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>

    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        // Notification system
        document.getElementById('notification-btn').addEventListener('click', function() {
            const notification = document.getElementById('notification');
            notification.classList.remove('hidden');

            // Auto-hide after 5 seconds
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 5000);
        });

        document.getElementById('close-notification').addEventListener('click', function() {
            document.getElementById('notification').classList.add('hidden');
        });

        // Form submission
        document.getElementById('arcade-form').addEventListener('submit', function(e) {
            e.preventDefault();

            // Create success notification
            const notification = document.getElementById('notification');
            const notificationContent = notification.querySelector('p');
            notificationContent.textContent = 'Form submitted successfully! Data transmitted to system.';

            // Show notification
            notification.classList.remove('hidden');

            // Auto-hide after 5 seconds
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 5000);

            // Reset form
            this.reset();
        });

        // Animate chart bars on scroll
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('.chart-bar');
                    bars.forEach(bar => {
                        const height = bar.style.height;
                        bar.style.height = '0';
                        setTimeout(() => {
                            bar.style.height = height;
                        }, 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all chart containers
        document.querySelectorAll('.chart-container').forEach(container => {
            observer.observe(container);
        });

        // Add glitch effect to title on hover
        const title = document.querySelector('h1');
        title.addEventListener('mouseenter', function() {
            this.style.animation = 'flicker 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    </script>
</body>
</html>
`;

export const GLM_4_6_2_FullPageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');

        :root {
            --bg-black: #0a0a0a;
            --neon-magenta: #ff00ff;
            --neon-cyan: #00ffff;
            --neon-yellow: #ffff00;
            --neon-green: #00ff41;
            --neon-red: #ff0040;
        }

        body {
            font-family: 'Orbitron', monospace;
            background-color: var(--bg-black);
            color: var(--neon-cyan);
            overflow-x: hidden;
        }

        /* CRT Effect */
        .crt-container {
            position: relative;
            overflow: hidden;
        }

        .crt-container::before {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 2;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }

        .crt-container::after {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(18, 16, 16, 0.1);
            opacity: 0;
            z-index: 2;
            pointer-events: none;
            animation: flicker 0.15s infinite;
        }

        @keyframes flicker {
            0% { opacity: 0.27861; }
            5% { opacity: 0.34769; }
            10% { opacity: 0.23604; }
            15% { opacity: 0.90626; }
            20% { opacity: 0.18128; }
            25% { opacity: 0.83891; }
            30% { opacity: 0.65583; }
            35% { opacity: 0.67807; }
            40% { opacity: 0.26559; }
            45% { opacity: 0.84693; }
            50% { opacity: 0.96019; }
            55% { opacity: 0.08594; }
            60% { opacity: 0.20313; }
            65% { opacity: 0.71988; }
            70% { opacity: 0.53455; }
            75% { opacity: 0.37288; }
            80% { opacity: 0.71428; }
            85% { opacity: 0.70419; }
            90% { opacity: 0.7003; }
            95% { opacity: 0.36108; }
            100% { opacity: 0.24387; }
        }

        /* Neon Glow Effect */
        .neon-glow {
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }

        .neon-border {
            box-shadow: 0 0 5px var(--neon-cyan), 0 0 10px var(--neon-cyan), inset 0 0 5px var(--neon-cyan);
        }

        .neon-border-magenta {
            box-shadow: 0 0 5px var(--neon-magenta), 0 0 10px var(--neon-magenta), inset 0 0 5px var(--neon-magenta);
        }

        .neon-border-yellow {
            box-shadow: 0 0 5px var(--neon-yellow), 0 0 10px var(--neon-yellow), inset 0 0 5px var(--neon-yellow);
        }

        .neon-border-green {
            box-shadow: 0 0 5px var(--neon-green), 0 0 10px var(--neon-green), inset 0 0 5px var(--neon-green);
        }

        .neon-border-red {
            box-shadow: 0 0 5px var(--neon-red), 0 0 10px var(--neon-red), inset 0 0 5px var(--neon-red);
        }

        /* Loading Animation */
        .loading-dots span {
            animation: blink 1.4s infinite both;
        }

        .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes blink {
            0%, 60%, 100% { opacity: 0.2; }
            20% { opacity: 1; }
        }

        /* Progress Bar Animation */
        .progress-bar {
            background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta));
            animation: progress-animation 3s ease-in-out infinite;
        }

        @keyframes progress-animation {
            0% { width: 0%; }
            50% { width: 75%; }
            100% { width: 100%; }
        }

        /* Notification Animation */
        .notification {
            animation: slide-in 0.5s ease-out;
        }

        @keyframes slide-in {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }

        /* Timeline Animation */
        .timeline-item {
            position: relative;
            padding-left: 40px;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: 9px;
            top: 0;
            height: 100%;
            width: 2px;
            background: var(--neon-cyan);
        }

        .timeline-dot {
            position: absolute;
            left: 0;
            top: 5px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--bg-black);
            border: 2px solid var(--neon-cyan);
        }

        /* Data Table Hover Effect */
        .data-table tr:hover {
            background-color: rgba(0, 255, 255, 0.1);
        }

        /* Button Effects */
        .btn-arcade {
            position: relative;
            overflow: hidden;
            transition: all 0.3s;
        }

        .btn-arcade::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .btn-arcade:hover::before {
            left: 100%;
        }

        /* Form Input Effects */
        .form-input {
            background-color: rgba(10, 10, 10, 0.7);
            border: 1px solid var(--neon-cyan);
            transition: all 0.3s;
        }

        .form-input:focus {
            box-shadow: 0 0 10px var(--neon-cyan);
            outline: none;
        }

        /* Card Hover Effect */
        .arcade-card {
            transition: all 0.3s;
        }

        .arcade-card:hover {
            transform: translateY(-5px);
        }

        /* Chart Container */
        .chart-container {
            position: relative;
            height: 200px;
            width: 100%;
        }

        .chart-bar {
            position: absolute;
            bottom: 0;
            width: 40px;
            background: linear-gradient(to top, var(--neon-cyan), var(--neon-magenta));
            transition: height 1s ease-out;
        }
    </style>
`;
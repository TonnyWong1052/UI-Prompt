// Arcade Hall Full Page Template
// 街機大廳完整頁面模板

export const GLM_4_6_1_FullPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arcade CRT - Retro Gaming Experience</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&display=swap');

        :root {
            --neon-magenta: #ff00ff;
            --neon-cyan: #00ffff;
            --neon-yellow: #ffff00;
            --neon-green: #00ff41;
            --neon-orange: #ff6600;
            --bg-black: #0a0a0a;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-black);
            font-family: 'Rajdhani', sans-serif;
            color: white;
            overflow-x: hidden;
            position: relative;
        }

        /* CRT Screen Effect */
        .crt::before {
            content: " ";
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 2;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }

        .crt::after {
            content: " ";
            display: block;
            position: fixed;
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

        /* Neon Glow Effects */
        .neon-text {
            text-shadow:
                0 0 5px currentColor,
                0 0 10px currentColor,
                0 0 15px currentColor,
                0 0 20px currentColor,
                0 0 35px currentColor,
                0 0 40px currentColor;
        }

        .neon-border {
            box-shadow:
                0 0 5px currentColor,
                0 0 10px currentColor,
                0 0 15px currentColor,
                inset 0 0 5px currentColor;
        }

        .neon-magenta { color: var(--neon-magenta); }
        .neon-cyan { color: var(--neon-cyan); }
        .neon-yellow { color: var(--neon-yellow); }
        .neon-green { color: var(--neon-green); }
        .neon-orange { color: var(--neon-orange); }

        /* Font Classes */
        .font-orbitron {
            font-family: 'Orbitron', sans-serif;
        }

        /* RGB Split Effect */
        .rgb-split {
            position: relative;
        }

        .rgb-split::before, .rgb-split::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .rgb-split::before {
            color: var(--neon-cyan);
            z-index: -1;
            animation: rgb-animation 3s infinite alternate-reverse;
        }

        .rgb-split::after {
            color: var(--neon-magenta);
            z-index: -2;
            animation: rgb-animation 2s infinite alternate-reverse;
        }

        @keyframes rgb-animation {
            0% { transform: translate(0); }
            100% { transform: translate(3px, 3px); }
        }

        /* Arcade Cabinet Style */
        .arcade-cabinet {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 4px solid #333;
            border-radius: 10px 10px 30px 30px;
            box-shadow:
                0 10px 20px rgba(0, 0, 0, 0.5),
                inset 0 0 20px rgba(0, 0, 0, 0.8);
            position: relative;
            overflow: hidden;
        }

        .arcade-cabinet::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 30px;
            background: linear-gradient(90deg, #222, #444, #222);
            border-bottom: 2px solid #555;
        }

        .arcade-cabinet::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(90deg, #222, #444, #222);
            border-top: 2px solid #555;
            border-radius: 0 0 30px 30px;
        }

        /* Game Card Styles */
        .game-card {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 2px solid #333;
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
        }

        .game-card:hover {
            transform: translateY(-5px);
            border-color: var(--neon-cyan);
            box-shadow: 0 0 15px var(--neon-cyan);
        }

        .game-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, var(--neon-magenta), var(--neon-cyan), var(--neon-yellow), var(--neon-green), var(--neon-orange));
        }

        /* Leaderboard Styles */
        .leaderboard-entry {
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            margin-bottom: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-left: 3px solid transparent;
            transition: all 0.3s ease;
        }

        .leaderboard-entry:hover {
            background: rgba(255, 255, 255, 0.1);
            border-left-color: var(--neon-yellow);
        }

        .leaderboard-entry:nth-child(1) { border-left-color: var(--neon-yellow); }
        .leaderboard-entry:nth-child(2) { border-left-color: var(--neon-cyan); }
        .leaderboard-entry:nth-child(3) { border-left-color: var(--neon-orange); }

        /* Button Styles */
        .arcade-btn {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 2px solid;
            color: white;
            padding: 10px 20px;
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            z-index: 1;
        }

        .arcade-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            transition: all 0.5s ease;
            z-index: -1;
        }

        .arcade-btn:hover::before {
            left: 0;
        }

        .arcade-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }

        /* Navigation Styles */
        .nav-link {
            position: relative;
            padding: 5px 10px;
            transition: all 0.3s ease;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: currentColor;
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .rgb-split::before, .rgb-split::after {
                display: none;
            }
        }

        /* Ripple Effect */
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    </style>
</head>
<body class="crt">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-gamepad text-2xl neon-cyan"></i>
                <span class="text-xl font-bold font-orbitron neon-cyan">ARCADE CRT</span>
            </div>

            <div class="hidden md:flex space-x-6">
                <a href="#home" class="nav-link neon-magenta">HOME</a>
                <a href="#games" class="nav-link neon-cyan">GAMES</a>
                <a href="#leaderboard" class="nav-link neon-yellow">LEADERBOARD</a>
                <a href="#gallery" class="nav-link neon-green">GALLERY</a>
                <a href="#contact" class="nav-link neon-orange">CONTACT</a>
            </div>

            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1 bg-gray-900 px-3 py-1 rounded-full">
                    <i class="fas fa-coins text-yellow-400"></i>
                    <span class="font-bold">1250</span>
                </div>
                <button class="md:hidden text-white">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
        <div class="container mx-auto text-center">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
                <span class="rgb-split neon-cyan" data-text="ARCADE CRT">ARCADE CRT</span>
            </h1>
            <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto neon-green">
                Step back in time to the golden age of arcade gaming with authentic CRT effects and neon aesthetics
            </p>

            <div class="flex flex-wrap justify-center gap-4 mb-16">
                <button class="arcade-btn neon-border neon-cyan">PLAY NOW</button>
                <button class="arcade-btn neon-border neon-magenta">VIEW GAMES</button>
                <button class="arcade-btn neon-border neon-yellow">HIGH SCORES</button>
            </div>

            <div class="arcade-cabinet max-w-4xl mx-auto p-8">
                <div class="bg-black p-6 rounded-lg">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="text-center p-4 bg-gray-900 rounded-lg">
                            <i class="fas fa-trophy text-4xl neon-yellow mb-2"></i>
                            <h3 class="text-xl font-bold mb-1">HIGH SCORES</h3>
                            <p class="text-gray-400">Compete for the top spot</p>
                        </div>
                        <div class="text-center p-4 bg-gray-900 rounded-lg">
                            <i class="fas fa-coins text-4xl neon-orange mb-2"></i>
                            <h3 class="text-xl font-bold mb-1">COIN SYSTEM</h3>
                            <p class="text-gray-400">Earn coins to play more</p>
                        </div>
                        <div class="text-center p-4 bg-gray-900 rounded-lg">
                            <i class="fas fa-users text-4xl neon-green mb-2"></i>
                            <h3 class="text-xl font-bold mb-1">MULTIPLAYER</h3>
                            <p class="text-gray-400">Challenge your friends</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Card Grid Section -->
    <section id="games" class="py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 font-orbitron">
                <span class="neon-magenta neon-text">FEATURED GAMES</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Game Card 1 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                        <i class="fas fa-rocket text-6xl neon-cyan"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-cyan">SPACE INVADERS</h3>
                        <p class="text-gray-400 mb-4">Defend Earth from alien invasion in this classic arcade shooter.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 45,230</span>
                            <button class="arcade-btn neon-border neon-cyan text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 2 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-yellow-900 to-orange-900 flex items-center justify-center">
                        <i class="fas fa-ghost text-6xl neon-yellow"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-yellow">PAC-MAN</h3>
                        <p class="text-gray-400 mb-4">Navigate the maze and eat all the pellets while avoiding ghosts.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 32,150</span>
                            <button class="arcade-btn neon-border neon-yellow text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 3 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-green-900 to-teal-900 flex items-center justify-center">
                        <i class="fas fa-meteor text-6xl neon-green"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-green">ASTEROIDS</h3>
                        <p class="text-gray-400 mb-4">Blast asteroids and avoid collisions in this space adventure.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 58,760</span>
                            <button class="arcade-btn neon-border neon-green text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 4 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-red-900 to-pink-900 flex items-center justify-center">
                        <i class="fas fa-dragon text-6xl neon-magenta"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-magenta">DONKEY KONG</h3>
                        <p class="text-gray-400 mb-4">Rescue Pauline from Donkey Kong in this platform classic.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 41,890</span>
                            <button class="arcade-btn neon-border neon-magenta text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 5 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
                        <i class="fas fa-fighter-jet text-6xl neon-cyan"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-cyan">GALAGA</h3>
                        <p class="text-gray-400 mb-4">Shoot down waves of alien insects in this space shooter.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 63,420</span>
                            <button class="arcade-btn neon-border neon-cyan text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 6 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center">
                        <i class="fas fa-car text-6xl neon-orange"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-orange">OUT RUN</h3>
                        <p class="text-gray-400 mb-4">Race against time in this high-speed driving game.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 52,310</span>
                            <button class="arcade-btn neon-border neon-orange text-sm">PLAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Leaderboard Section -->
    <section id="leaderboard" class="py-20 px-4 bg-gray-900 bg-opacity-50">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 font-orbitron">
                <span class="neon-yellow neon-text">HALL OF FAME</span>
            </h2>

            <div class="max-w-3xl mx-auto arcade-cabinet p-8">
                <div class="bg-black p-6 rounded-lg">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold neon-yellow">TOP PLAYERS</h3>
                        <div class="flex space-x-2">
                            <button class="arcade-btn neon-border neon-cyan text-sm">WEEKLY</button>
                            <button class="arcade-btn neon-border neon-magenta text-sm">ALL TIME</button>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold neon-yellow">1</span>
                                <div>
                                    <p class="font-bold">ACE_GAMER</p>
                                    <p class="text-sm text-gray-500">Space Invaders</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold neon-yellow">45,230</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold neon-cyan">2</span>
                                <div>
                                    <p class="font-bold">PIXEL_WIZARD</p>
                                    <p class="text-sm text-gray-500">Galaga</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold neon-cyan">63,420</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold neon-orange">3</span>
                                <div>
                                    <p class="font-bold">RETRO_KING</p>
                                    <p class="text-sm text-gray-500">Asteroids</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold neon-orange">58,760</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold">4</span>
                                <div>
                                    <p class="font-bold">ARCADE_MASTER</p>
                                    <p class="text-sm text-gray-500">Donkey Kong</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold">41,890</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold">5</span>
                                <div>
                                    <p class="font-bold">NEON_NINJA</p>
                                    <p class="text-sm text-gray-500">Pac-Man</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold">32,150</span>
                        </div>
                    </div>

                    <div class="mt-8 text-center">
                        <button class="arcade-btn neon-border neon-green">VIEW FULL LEADERBOARD</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 font-orbitron">
                <span class="neon-green neon-text">ARCADE GALLERY</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade1/400/300.jpg" alt="Arcade Cabinet" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-cyan">Classic Cabinets</h3>
                    </div>
                </div>

                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade2/400/300.jpg" alt="Gaming Setup" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-magenta">Gaming Setup</h3>
                    </div>
                </div>

                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade3/400/300.jpg" alt="Retro Gaming" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-yellow">Retro Gaming</h3>
                    </div>
                </div>

                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade4/400/300.jpg" alt="Neon Lights" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-green">Neon Lights</h3>
                    </div>
                </div>

                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade5/400/300.jpg" alt="Game Room" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-orange">Game Room</h3>
                    </div>
                </div>

                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade6/400/300.jpg" alt="Joystick" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-cyan">Joystick</h3>
                    </div>
                </div>

                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade7/400/300.jpg" alt="Pixel Art" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-magenta">Pixel Art</h3>
                    </div>
                </div>

                <div class="relative overflow-hidden rounded-lg group">
                    <img src="https://picsum.photos/seed/arcade8/400/300.jpg" alt="High Score" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-xl font-bold neon-yellow">High Score</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="py-12 px-4 bg-black border-t border-gray-800">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-gamepad text-2xl neon-cyan"></i>
                        <span class="text-xl font-bold font-orbitron neon-cyan">ARCADE CRT</span>
                    </div>
                    <p class="text-gray-400">Relive the golden age of arcade gaming with authentic CRT effects and classic games.</p>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-4 neon-magenta">QUICK LINKS</h3>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="#games" class="text-gray-400 hover:text-white transition-colors">Games</a></li>
                        <li><a href="#leaderboard" class="text-gray-400 hover:text-white transition-colors">Leaderboard</a></li>
                        <li><a href="#gallery" class="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-4 neon-yellow">POPULAR GAMES</h3>
                    <ul class="space-y-2">
                        <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Space Invaders</a></li>
                        <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Pac-Man</a></li>
                        <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Galaga</a></li>
                        <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white transition-colors">Donkey Kong</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-4 neon-green">CONNECT WITH US</h3>
                    <div class="flex space-x-4 mb-4">
                        <a href="javascript:void(0)" class="text-gray-400 hover:text-neon-cyan transition-colors"><i class="fab fa-facebook text-xl"></i></a>
                        <a href="javascript:void(0)" class="text-gray-400 hover:text-neon-cyan transition-colors"><i class="fab fa-twitter text-xl"></i></a>
                        <a href="javascript:void(0)" class="text-gray-400 hover:text-neon-cyan transition-colors"><i class="fab fa-instagram text-xl"></i></a>
                        <a href="javascript:void(0)" class="text-gray-400 hover:text-neon-cyan transition-colors"><i class="fab fa-youtube text-xl"></i></a>
                    </div>
                    <p class="text-gray-400">Subscribe to our newsletter for updates on new games and events.</p>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; 2023 Arcade CRT. All rights reserved. Designed with nostalgia in mind.</p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add active class to navigation links on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('neon-text');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('neon-text');
                }
            });
        });

        // Coin animation
        const coinElement = document.querySelector('.fa-coins').parentElement;
        setInterval(() => {
            const currentCoins = parseInt(coinElement.querySelector('span').textContent);
            const newCoins = currentCoins + Math.floor(Math.random() * 5);
            coinElement.querySelector('span').textContent = newCoins;

            // Add animation class
            coinElement.classList.add('animate-pulse');
            setTimeout(() => {
                coinElement.classList.remove('animate-pulse');
            }, 500);
        }, 5000);

        // Play button click effect
        document.querySelectorAll('.arcade-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Create a ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = event.clientX - rect.left - size / 2;
                const y = event.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);

            });
        });
    </script>
</body>
</html>
`;

export const GLM_4_6_1_FullPageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&display=swap');

:root {
    --neon-magenta: #ff00ff;
    --neon-cyan: #00ffff;
    --neon-yellow: #ffff00;
    --neon-green: #00ff41;
    --neon-orange: #ff6600;
    --bg-black: #0a0a0a;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-black);
    font-family: 'Rajdhani', sans-serif;
    color: white;
    overflow-x: hidden;
    position: relative;
}

/* CRT Screen Effect */
.crt::before {
    content: " ";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
}

.crt::after {
    content: " ";
    display: block;
    position: fixed;
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

/* Neon Glow Effects */
.neon-text {
    text-shadow:
        0 0 5px currentColor,
        0 0 10px currentColor,
        0 0 15px currentColor,
        0 0 20px currentColor,
        0 0 35px currentColor,
        0 0 40px currentColor;
}

.neon-border {
    box-shadow:
        0 0 5px currentColor,
        0 0 10px currentColor,
        0 0 15px currentColor,
        inset 0 0 5px currentColor;
}

.neon-magenta { color: var(--neon-magenta); }
.neon-cyan { color: var(--neon-cyan); }
.neon-yellow { color: var(--neon-yellow); }
.neon-green { color: var(--neon-green); }
.neon-orange { color: var(--neon-orange); }

/* Font Classes */
.font-orbitron {
    font-family: 'Orbitron', sans-serif;
}

/* RGB Split Effect */
.rgb-split {
    position: relative;
}

.rgb-split::before, .rgb-split::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.rgb-split::before {
    color: var(--neon-cyan);
    z-index: -1;
    animation: rgb-animation 3s infinite alternate-reverse;
}

.rgb-split::after {
    color: var(--neon-magenta);
    z-index: -2;
    animation: rgb-animation 2s infinite alternate-reverse;
}

@keyframes rgb-animation {
    0% { transform: translate(0); }
    100% { transform: translate(3px, 3px); }
}

/* Arcade Cabinet Style */
.arcade-cabinet {
    background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
    border: 4px solid #333;
    border-radius: 10px 10px 30px 30px;
    box-shadow:
        0 10px 20px rgba(0, 0, 0, 0.5),
        inset 0 0 20px rgba(0, 0, 0, 0.8);
    position: relative;
    overflow: hidden;
}

.arcade-cabinet::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(90deg, #222, #444, #222);
    border-bottom: 2px solid #555;
}

.arcade-cabinet::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(90deg, #222, #444, #222);
    border-top: 2px solid #555;
    border-radius: 0 0 30px 30px;
}

/* Game Card Styles */
.game-card {
    background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
    border: 2px solid #333;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
}

.game-card:hover {
    transform: translateY(-5px);
    border-color: var(--neon-cyan);
    box-shadow: 0 0 15px var(--neon-cyan);
}

.game-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--neon-magenta), var(--neon-cyan), var(--neon-yellow), var(--neon-green), var(--neon-orange));
}

/* Leaderboard Styles */
.leaderboard-entry {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    margin-bottom: 8px;
    background: rgba(255, 255, 255, 0.05);
    border-left: 3px solid transparent;
    transition: all 0.3s ease;
}

.leaderboard-entry:hover {
    background: rgba(255, 255, 255, 0.1);
    border-left-color: var(--neon-yellow);
}

.leaderboard-entry:nth-child(1) { border-left-color: var(--neon-yellow); }
.leaderboard-entry:nth-child(2) { border-left-color: var(--neon-cyan); }
.leaderboard-entry:nth-child(3) { border-left-color: var(--neon-orange); }

/* Button Styles */
.arcade-btn {
    background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
    border: 2px solid;
    color: white;
    padding: 10px 20px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 1;
}

.arcade-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.5s ease;
    z-index: -1;
}

.arcade-btn:hover::before {
    left: 0;
}

.arcade-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

/* Navigation Styles */
.nav-link {
    position: relative;
    padding: 5px 10px;
    transition: all 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .rgb-split::before, .rgb-split::after {
        display: none;
    }
}

/* Ripple Effect */
.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

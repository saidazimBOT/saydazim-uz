const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const projectsDir = path.join(publicDir, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// 1. Profile Avatar (800x800)
const profileSvg = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#1e1b4b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="neonViolet" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="50%" stop-color="#ec4899"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="800" fill="url(#bgGlow)"/>

  <!-- Cyber Grid Lines -->
  <g stroke="#6366f1" stroke-opacity="0.15" stroke-width="1.5">
    <line x1="0" y1="200" x2="800" y2="200" />
    <line x1="0" y1="400" x2="800" y2="400" />
    <line x1="0" y1="600" x2="800" y2="600" />
    <line x1="200" y1="0" x2="200" y2="800" />
    <line x1="400" y1="0" x2="400" y2="800" />
    <line x1="600" y1="0" x2="600" y2="800" />
  </g>

  <!-- Glowing Aura Circle -->
  <circle cx="400" cy="380" r="280" fill="none" stroke="url(#neonViolet)" stroke-width="3" filter="url(#glowFilter)" stroke-dasharray="12 8"/>
  <circle cx="400" cy="380" r="240" fill="none" stroke="url(#neonCyan)" stroke-width="1.5" stroke-opacity="0.6"/>

  <!-- Developer Silhouette / Tech Persona -->
  <!-- Shoulders & Torso -->
  <path d="M 220 720 C 220 570 290 530 400 530 C 510 530 580 570 580 720 Z" fill="url(#jacketGrad)" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.4"/>
  
  <!-- Cyber Hoodie Collar -->
  <path d="M 320 530 L 400 620 L 480 530 Z" fill="#090d16" stroke="url(#neonCyan)" stroke-width="2"/>
  <line x1="400" y1="620" x2="400" y2="720" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 4"/>

  <!-- Neck -->
  <path d="M 360 480 L 440 480 L 420 540 L 380 540 Z" fill="#e2e8f0" fill-opacity="0.9"/>

  <!-- Head Base -->
  <rect x="330" y="270" width="140" height="190" rx="70" fill="#f1f5f9"/>

  <!-- Hair / Cyber Cut -->
  <path d="M 310 320 C 310 210 370 180 430 180 C 490 180 500 230 495 290 C 470 240 430 220 370 230 C 330 240 320 270 310 320 Z" fill="#0f172a"/>
  
  <!-- Sleek Cyber Visor / Smart Glasses -->
  <rect x="315" y="325" width="170" height="42" rx="12" fill="#090d16" stroke="url(#neonCyan)" stroke-width="3" filter="url(#glowFilter)"/>
  <rect x="325" y="333" width="150" height="26" rx="6" fill="url(#neonCyan)" fill-opacity="0.8"/>
  <line x1="335" y1="346" x2="465" y2="346" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>

  <!-- Headset / Audio Interface -->
  <path d="M 310 310 C 310 240 340 210 400 210 C 460 210 490 240 490 310" fill="none" stroke="url(#neonViolet)" stroke-width="8" stroke-linecap="round"/>
  <rect x="300" y="310" width="22" height="60" rx="10" fill="#06b6d4" filter="url(#glowFilter)"/>
  <rect x="478" y="310" width="22" height="60" rx="10" fill="#a855f7" filter="url(#glowFilter)"/>

  <!-- Floating Tech Badges -->
  <g transform="translate(140, 220)">
    <rect width="130" height="38" rx="19" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" fill-opacity="0.9"/>
    <text x="65" y="24" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">&lt;DEV /&gt;</text>
  </g>

  <g transform="translate(530, 250)">
    <rect width="140" height="38" rx="19" fill="#0f172a" stroke="#ec4899" stroke-width="1.5" fill-opacity="0.9"/>
    <text x="70" y="24" fill="#f472b6" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">130+ WPM ⚡</text>
  </g>

  <g transform="translate(480, 560)">
    <rect width="170" height="42" rx="21" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5" fill-opacity="0.9"/>
    <text x="85" y="26" fill="#c084fc" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">Next.js • Three.js</text>
  </g>

  <!-- Bottom Name Banner -->
  <rect x="180" y="700" width="440" height="64" rx="32" fill="#030712" stroke="url(#neonCyan)" stroke-width="2" fill-opacity="0.95"/>
  <text x="400" y="740" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="20" font-weight="800" text-anchor="middle" letter-spacing="3">CREATIVE INNOVATOR</text>
</svg>
`;

// 2. Workspace Image (1200x800)
const workspaceSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="deskGlow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.7"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <filter id="neonFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#deskGlow)"/>

  <!-- Ambient Light Bar on Wall -->
  <line x1="200" y1="120" x2="1000" y2="120" stroke="url(#accentGlow)" stroke-width="12" stroke-linecap="round" filter="url(#neonFilter)"/>

  <!-- Acoustic Wall Panels / Hexagon Pattern -->
  <g stroke="#334155" stroke-opacity="0.3" stroke-width="2" fill="none">
    <polygon points="120,200 160,180 200,200 200,240 160,260 120,240"/>
    <polygon points="200,200 240,180 280,200 280,240 240,260 200,240"/>
    <polygon points="920,200 960,180 1000,200 1000,240 960,260 920,240"/>
    <polygon points="1000,200 1040,180 1080,200 1080,240 1040,260 1000,240"/>
  </g>

  <!-- Desk Surface -->
  <polygon points="100,560 1100,560 1200,800 0,800" fill="#090d16" stroke="#1e293b" stroke-width="2"/>
  <line x1="100" y1="560" x2="1100" y2="560" stroke="#38bdf8" stroke-width="3" stroke-opacity="0.6" filter="url(#neonFilter)"/>

  <!-- Ultra-wide Curved Monitor -->
  <!-- Stand -->
  <rect x="585" y="470" width="30" height="110" rx="4" fill="#334155"/>
  <polygon points="500,580 700,580 680,600 520,600" fill="#1e293b"/>
  <!-- Bezel -->
  <rect x="220" y="180" width="760" height="320" rx="16" fill="#000000" stroke="#334155" stroke-width="4"/>
  <!-- Screen Display -->
  <rect x="232" y="192" width="736" height="296" rx="10" fill="url(#screenGrad)"/>

  <!-- Code Editor Window (Left half of monitor) -->
  <g transform="translate(245, 205)">
    <!-- Header -->
    <rect width="350" height="24" rx="4" fill="#1e293b"/>
    <circle cx="12" cy="12" r="4" fill="#ef4444"/>
    <circle cx="26" cy="12" r="4" fill="#f59e0b"/>
    <circle cx="40" cy="12" r="4" fill="#10b981"/>
    <text x="65" y="16" fill="#94a3b8" font-family="monospace" font-size="11">App.tsx — Next.js 16</text>
    
    <!-- Code Lines Mockup -->
    <rect x="10" y="40" width="90" height="8" rx="4" fill="#38bdf8"/>
    <rect x="110" y="40" width="120" height="8" rx="4" fill="#c084fc"/>
    <rect x="25" y="60" width="160" height="8" rx="4" fill="#64748b"/>
    <rect x="25" y="80" width="220" height="8" rx="4" fill="#f43f5e"/>
    <rect x="40" y="100" width="140" height="8" rx="4" fill="#34d399"/>
    <rect x="40" y="120" width="180" height="8" rx="4" fill="#38bdf8"/>
    <rect x="40" y="140" width="110" height="8" rx="4" fill="#fbbf24"/>
    <rect x="25" y="160" width="190" height="8" rx="4" fill="#64748b"/>
    <rect x="25" y="180" width="80" height="8" rx="4" fill="#a78bfa"/>
  </g>

  <!-- 3D Viewport / Canvas (Right half of monitor) -->
  <g transform="translate(615, 205)">
    <rect width="340" height="270" rx="8" fill="#030712" stroke="#475569" stroke-width="1"/>
    <!-- Wireframe 3D Mesh -->
    <circle cx="170" cy="135" r="75" fill="none" stroke="url(#accentGlow)" stroke-width="2" filter="url(#neonFilter)"/>
    <ellipse cx="170" cy="135" rx="75" ry="30" fill="none" stroke="#06b6d4" stroke-width="1.5"/>
    <ellipse cx="170" cy="135" rx="30" ry="75" fill="none" stroke="#ec4899" stroke-width="1.5"/>
    <circle cx="170" cy="135" r="5" fill="#ffffff"/>
    <text x="170" y="245" fill="#38bdf8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">THREE.JS / SHADERS 60 FPS</text>
  </g>

  <!-- Mechanical Keyboard -->
  <g transform="translate(370, 620)">
    <rect width="460" height="120" rx="14" fill="#1e1b4b" stroke="#6366f1" stroke-width="2" filter="url(#neonFilter)"/>
    <!-- Key Rows Glow -->
    <rect x="15" y="15" width="430" height="90" rx="8" fill="#0f172a"/>
    <!-- Keyboard Keys Grid -->
    <g fill="#334155" stroke="#475569" stroke-width="1">
      <rect x="25" y="25" width="22" height="18" rx="3" fill="#06b6d4"/>
      <rect x="55" y="25" width="22" height="18" rx="3"/>
      <rect x="85" y="25" width="22" height="18" rx="3"/>
      <rect x="115" y="25" width="22" height="18" rx="3"/>
      <rect x="145" y="25" width="22" height="18" rx="3"/>
      <rect x="175" y="25" width="22" height="18" rx="3"/>
      <rect x="205" y="25" width="22" height="18" rx="3"/>
      <rect x="235" y="25" width="22" height="18" rx="3"/>
      <rect x="265" y="25" width="22" height="18" rx="3"/>
      <rect x="295" y="25" width="22" height="18" rx="3"/>
      <rect x="325" y="25" width="22" height="18" rx="3"/>
      <rect x="355" y="25" width="22" height="18" rx="3"/>
      <rect x="385" y="25" width="50" height="18" rx="3" fill="#ec4899"/>

      <rect x="25" y="48" width="30" height="18" rx="3" fill="#8b5cf6"/>
      <rect x="62" y="48" width="22" height="18" rx="3"/>
      <rect x="92" y="48" width="22" height="18" rx="3"/>
      <rect x="122" y="48" width="22" height="18" rx="3"/>
      <rect x="152" y="48" width="22" height="18" rx="3"/>
      <rect x="182" y="48" width="22" height="18" rx="3"/>
      <rect x="212" y="48" width="22" height="18" rx="3"/>
      <rect x="242" y="48" width="22" height="18" rx="3"/>
      <rect x="272" y="48" width="22" height="18" rx="3"/>
      <rect x="302" y="48" width="22" height="18" rx="3"/>
      <rect x="332" y="48" width="22" height="18" rx="3"/>
      <rect x="362" y="48" width="73" height="18" rx="3" fill="#8b5cf6"/>

      <!-- Spacebar Row -->
      <rect x="25" y="72" width="40" height="22" rx="3" fill="#06b6d4"/>
      <rect x="140" y="72" width="180" height="22" rx="4" fill="#38bdf8"/>
      <rect x="380" y="72" width="55" height="22" rx="3" fill="#06b6d4"/>
    </g>
  </g>

  <!-- Ergonomic Gaming Mouse -->
  <g transform="translate(880, 640)">
    <ellipse cx="40" cy="50" rx="32" ry="48" fill="#1e293b" stroke="#06b6d4" stroke-width="2" filter="url(#neonFilter)"/>
    <line x1="40" y1="15" x2="40" y2="50" stroke="#06b6d4" stroke-width="2"/>
    <circle cx="40" cy="35" r="5" fill="#38bdf8"/>
  </g>

  <!-- Coffee Mug -->
  <g transform="translate(260, 650)">
    <rect x="0" y="0" width="45" height="55" rx="8" fill="#334155" stroke="#64748b" stroke-width="2"/>
    <path d="M 45 15 C 60 15 60 40 45 40" fill="none" stroke="#64748b" stroke-width="4"/>
    <path d="M 12 -5 Q 16 -15 20 -20 Q 24 -15 28 -5" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-opacity="0.5"/>
  </g>

  <!-- Audio Studio Monitors -->
  <rect x="130" y="280" width="70" height="150" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <circle cx="165" cy="330" r="20" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="165" cy="385" r="28" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>

  <rect x="1000" y="280" width="70" height="150" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <circle cx="1035" cy="330" r="20" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="1035" cy="385" r="28" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
</svg>
`;

// 3. Project 1: KeyPulse - Speed Coding & Touch Typing (1200x800)
const project1Svg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="p1Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#0e1726"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="p1Glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="50%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <filter id="p1Filter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#p1Bg)"/>

  <!-- Top Glass Bar -->
  <rect x="80" y="60" width="1040" height="70" rx="16" fill="#111827" stroke="#1f2937" stroke-width="2"/>
  <text x="130" y="104" fill="#10b981" font-family="system-ui, sans-serif" font-size="24" font-weight="800" letter-spacing="1">⚡ KEYPULSE</text>
  <text x="310" y="103" fill="#64748b" font-family="monospace" font-size="14">v2.4 • SPEED CODING BENCHMARK</text>

  <!-- Mode Badges -->
  <g transform="translate(740, 78)">
    <rect width="100" height="34" rx="17" fill="#1e293b" stroke="#334155"/>
    <text x="50" y="22" fill="#38bdf8" font-family="monospace" font-size="13" text-anchor="middle">TS/REACT</text>
  </g>
  <g transform="translate(860, 78)">
    <rect width="80" height="34" rx="17" fill="#1e293b" stroke="#334155"/>
    <text x="40" y="22" fill="#e2e8f0" font-family="monospace" font-size="13" text-anchor="middle">60s TEST</text>
  </g>
  <g transform="translate(960, 78)">
    <rect width="130" height="34" rx="17" fill="#10b981" fill-opacity="0.2" stroke="#10b981"/>
    <text x="65" y="22" fill="#34d399" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">LIVE LEADER</text>
  </g>

  <!-- Big Metrics HUD -->
  <g transform="translate(80, 160)">
    <!-- WPM Card -->
    <rect width="320" height="150" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2" filter="url(#p1Filter)"/>
    <text x="30" y="50" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16" font-weight="600">PEAK SPEED</text>
    <text x="30" y="125" fill="#34d399" font-family="monospace" font-size="64" font-weight="900">142</text>
    <text x="170" y="115" fill="#10b981" font-family="monospace" font-size="22" font-weight="bold">WPM</text>

    <!-- Accuracy Card -->
    <g transform="translate(360, 0)">
      <rect width="320" height="150" rx="20" fill="#0f172a" stroke="#06b6d4" stroke-width="2" filter="url(#p1Filter)"/>
      <text x="30" y="50" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16" font-weight="600">ACCURACY</text>
      <text x="30" y="125" fill="#38bdf8" font-family="monospace" font-size="64" font-weight="900">99.4</text>
      <text x="210" y="115" fill="#06b6d4" font-family="monospace" font-size="24" font-weight="bold">%</text>
    </g>

    <!-- Consistency Card -->
    <g transform="translate(720, 0)">
      <rect width="320" height="150" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2" filter="url(#p1Filter)"/>
      <text x="30" y="50" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16" font-weight="600">BURST CONSISTENCY</text>
      <text x="30" y="125" fill="#c084fc" font-family="monospace" font-size="64" font-weight="900">96.8</text>
      <text x="215" y="115" fill="#8b5cf6" font-family="monospace" font-size="24" font-weight="bold">%</text>
    </g>
  </g>

  <!-- Interactive Live Typing Code Area -->
  <g transform="translate(80, 340)">
    <rect width="1040" height="380" rx="20" fill="#030712" stroke="#334155" stroke-width="1.5"/>
    <!-- Line numbers & code stream -->
    <g font-family="monospace" font-size="21" xml:space="preserve">
      <!-- Line 1 -->
      <text x="35" y="60" fill="#475569">01</text>
      <text x="80" y="60" fill="#10b981">export async function</text>
      <text x="340" y="60" fill="#38bdf8">createHyperTunnel</text>
      <text x="560" y="60" fill="#f8fafc">(config: TunnelOptions) {</text>

      <!-- Line 2 -->
      <text x="35" y="110" fill="#475569">02</text>
      <text x="110" y="110" fill="#818cf8">const</text>
      <text x="190" y="110" fill="#f8fafc">stream =</text>
      <text x="310" y="110" fill="#f472b6">new</text>
      <text x="370" y="110" fill="#fbbf24">WebSocketBridge</text>
      <text x="580" y="110" fill="#f8fafc">({ latency: 0, buffer: 2048 });</text>

      <!-- Line 3 (Active cursor line) -->
      <text x="35" y="160" fill="#475569">03</text>
      <text x="110" y="160" fill="#818cf8">await</text>
      <text x="190" y="160" fill="#f8fafc">stream.</text>
      <text x="290" y="160" fill="#38bdf8">synchronizeState</text>
      <text x="520" y="160" fill="#f8fafc">({</text>
      
      <!-- Blinking Cursor -->
      <rect x="545" y="140" width="4" height="28" fill="#10b981" filter="url(#p1Filter)"/>
      <text x="560" y="160" fill="#475569">burstMode: true, precision: 1.0 });</text>

      <!-- Line 4 (Pending) -->
      <text x="35" y="210" fill="#334155">04</text>
      <text x="110" y="210" fill="#475569">return stream.getExecutionMetrics();</text>

      <!-- Line 5 -->
      <text x="35" y="260" fill="#334155">05</text>
      <text x="80" y="260" fill="#475569">}</text>
    </g>

    <!-- Speed Graph Wave at Bottom of Terminal -->
    <path d="M 40 340 Q 150 280, 260 320 T 480 290 T 700 310 T 920 270 L 1000 280" fill="none" stroke="url(#p1Glow)" stroke-width="4" stroke-linecap="round" filter="url(#p1Filter)"/>
    <text x="40" y="360" fill="#64748b" font-family="monospace" font-size="12">REAL-TIME KEYSTROKE TELEMETRY • ZERO JITTER</text>
  </g>
</svg>
`;

// 4. Project 2: NovaSphere 3D - Immersive WebGL Showroom (1200x800)
const project2Svg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="p2Bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="50%" stop-color="#090514"/>
      <stop offset="100%" stop-color="#02020a"/>
    </radialGradient>
    <linearGradient id="p2Neon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="50%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <filter id="p2Glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#p2Bg)"/>

  <!-- WebGL HUD Grid -->
  <circle cx="600" cy="400" r="320" fill="none" stroke="#6366f1" stroke-width="1" stroke-opacity="0.2"/>
  <circle cx="600" cy="400" r="260" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-opacity="0.4" stroke-dasharray="10 8"/>
  <circle cx="600" cy="400" r="200" fill="none" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.3"/>

  <!-- 3D Polyhedron / Sphere Shaders -->
  <g transform="translate(600, 400)">
    <!-- Core Glow -->
    <circle cx="0" cy="0" r="140" fill="#4f46e5" fill-opacity="0.25" filter="url(#p2Glow)"/>

    <!-- Wireframe Latitudes & Longitudes -->
    <ellipse cx="0" cy="0" rx="140" ry="140" fill="none" stroke="url(#p2Neon)" stroke-width="3" filter="url(#p2Glow)"/>
    <ellipse cx="0" cy="0" rx="140" ry="60" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="60" ry="140" fill="none" stroke="#ec4899" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="140" ry="110" fill="none" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="8 6"/>
    <ellipse cx="0" cy="0" rx="110" ry="140" fill="none" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="8 6"/>

    <!-- Orbiting Energy Points -->
    <circle cx="-130" cy="-60" r="7" fill="#38bdf8" filter="url(#p2Glow)"/>
    <circle cx="110" cy="90" r="9" fill="#f43f5e" filter="url(#p2Glow)"/>
    <circle cx="60" cy="-120" r="6" fill="#a855f7" filter="url(#p2Glow)"/>
    <circle cx="-90" cy="110" r="8" fill="#34d399" filter="url(#p2Glow)"/>

    <!-- Glowing Center Monolith -->
    <polygon points="0,-70 50,20 0,60 -50,20" fill="none" stroke="#ffffff" stroke-width="2.5" filter="url(#p2Glow)"/>
  </g>

  <!-- Left Floating Control Panel -->
  <g transform="translate(70, 100)">
    <rect width="280" height="320" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5" fill-opacity="0.85"/>
    <text x="25" y="40" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="700">SHADER CONTROLS</text>
    <line x1="25" y1="55" x2="255" y2="55" stroke="#334155"/>

    <text x="25" y="90" fill="#94a3b8" font-family="monospace" font-size="12">ROUGHNESS / METALLIC</text>
    <rect x="25" y="102" width="230" height="8" rx="4" fill="#1e293b"/>
    <rect x="25" y="102" width="180" height="8" rx="4" fill="#06b6d4"/>
    <circle cx="205" cy="106" r="8" fill="#ffffff"/>

    <text x="25" y="150" fill="#94a3b8" font-family="monospace" font-size="12">BLOOM INTENSITY</text>
    <rect x="25" y="162" width="230" height="8" rx="4" fill="#1e293b"/>
    <rect x="25" y="162" width="200" height="8" rx="4" fill="#a855f7"/>
    <circle cx="225" cy="166" r="8" fill="#ffffff"/>

    <text x="25" y="210" fill="#94a3b8" font-family="monospace" font-size="12">CAMERA ORBIT SPEED</text>
    <rect x="25" y="222" width="230" height="8" rx="4" fill="#1e293b"/>
    <rect x="25" y="222" width="120" height="8" rx="4" fill="#ec4899"/>
    <circle cx="145" cy="226" r="8" fill="#ffffff"/>

    <rect x="25" y="260" width="230" height="38" rx="19" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1"/>
    <text x="140" y="284" fill="#a5b4fc" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">TOGGLE RAYMARCHING</text>
  </g>

  <!-- Right Diagnostics HUD -->
  <g transform="translate(860, 100)">
    <rect width="270" height="230" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5" fill-opacity="0.85"/>
    <text x="25" y="40" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="700">RENDER ENGINE</text>
    <line x1="25" y1="55" x2="245" y2="55" stroke="#334155"/>

    <text x="25" y="90" fill="#34d399" font-family="monospace" font-size="15" font-weight="bold">60.0 FPS LOCKED</text>
    <text x="25" y="125" fill="#94a3b8" font-family="monospace" font-size="13">VERTICES: 124,800</text>
    <text x="25" y="155" fill="#94a3b8" font-family="monospace" font-size="13">DRAW CALLS: 14</text>
    <text x="25" y="185" fill="#94a3b8" font-family="monospace" font-size="13">SHADERS: GLSL PBR</text>
  </g>

  <!-- Title Bottom Ribbon -->
  <g transform="translate(350, 680)">
    <rect width="500" height="60" rx="30" fill="#030712" stroke="url(#p2Neon)" stroke-width="2" filter="url(#p2Glow)"/>
    <text x="250" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="800" text-anchor="middle" letter-spacing="3">NOVASPHERE • WEBGL 3D</text>
  </g>
</svg>
`;

// 5. Project 3: AetherDuel - Cyber Tactical Deckbuilder (1200x800)
const project3Svg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="p3Bg" cx="50%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#2e1065"/>
      <stop offset="60%" stop-color="#0f0728"/>
      <stop offset="100%" stop-color="#030014"/>
    </radialGradient>
    <linearGradient id="cardGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="cardGlow2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <linearGradient id="cardGlow3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <filter id="p3Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#p3Bg)"/>

  <!-- Cyber Arena Field Lines -->
  <polygon points="200,300 1000,300 1150,750 50,750" fill="#090514" stroke="#6366f1" stroke-width="2" stroke-opacity="0.3"/>
  <line x1="600" y1="300" x2="600" y2="750" stroke="#a855f7" stroke-width="1.5" stroke-opacity="0.4" stroke-dasharray="10 8"/>

  <!-- Top Enemy Stats Bar -->
  <g transform="translate(300, 50)">
    <rect width="600" height="60" rx="14" fill="#090514" stroke="#ef4444" stroke-width="2" filter="url(#p3Glow)"/>
    <text x="35" y="38" fill="#f87171" font-family="system-ui, sans-serif" font-size="18" font-weight="800">AI NEURAL CORE (BOSS)</text>
    <!-- HP bar -->
    <rect x="290" y="20" width="280" height="20" rx="10" fill="#1e1b4b"/>
    <rect x="290" y="20" width="210" height="20" rx="10" fill="#ef4444"/>
    <text x="500" y="35" fill="#ffffff" font-family="monospace" font-size="13" font-weight="bold">750 / 1000 HP</text>
  </g>

  <!-- 3 Holographic Cyber Cards (Player Hand) -->
  <!-- Card 1: Quantum Glitch -->
  <g transform="translate(180, 360)">
    <rect width="240" height="350" rx="18" fill="#090d16" stroke="url(#cardGlow1)" stroke-width="2.5" filter="url(#p3Glow)"/>
    <rect x="15" y="15" width="210" height="150" rx="12" fill="#0e1e38"/>
    <!-- Card Art -->
    <circle cx="120" cy="90" r="45" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <polygon points="120,60 145,105 95,105" fill="#38bdf8" fill-opacity="0.8"/>
    <!-- Cost Badge -->
    <circle cx="35" cy="35" r="16" fill="#0284c7"/>
    <text x="35" y="41" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">3</text>
    <text x="120" y="200" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="18" font-weight="800" text-anchor="middle">QUANTUM SHIELD</text>
    <text x="120" y="235" fill="#94a3b8" font-family="sans-serif" font-size="13" text-anchor="middle">Nullify incoming attack</text>
    <text x="120" y="255" fill="#94a3b8" font-family="sans-serif" font-size="13" text-anchor="middle">and reflect 40% damage.</text>
    <rect x="40" y="285" width="160" height="34" rx="17" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8"/>
    <text x="120" y="307" fill="#bae6fd" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">DEFENSE • TACTIC</text>
  </g>

  <!-- Card 2: Overclock Beam (Center Highlighted Card) -->
  <g transform="translate(480, 320)">
    <rect width="240" height="350" rx="18" fill="#1a0b0b" stroke="url(#cardGlow2)" stroke-width="3" filter="url(#p3Glow)"/>
    <rect x="15" y="15" width="210" height="150" rx="12" fill="#300d0d"/>
    <!-- Card Art -->
    <path d="M 120 45 L 140 85 L 125 85 L 145 130 L 95 85 L 115 85 Z" fill="#f59e0b" filter="url(#p3Glow)"/>
    <!-- Cost Badge -->
    <circle cx="35" cy="35" r="16" fill="#dc2626"/>
    <text x="35" y="41" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">5</text>
    <text x="120" y="200" fill="#f87171" font-family="system-ui, sans-serif" font-size="18" font-weight="800" text-anchor="middle">OVERCLOCK BEAM</text>
    <text x="120" y="235" fill="#fca5a5" font-family="sans-serif" font-size="13" text-anchor="middle">Deal 350 Burst damage.</text>
    <text x="120" y="255" fill="#fca5a5" font-family="sans-serif" font-size="13" text-anchor="middle">+50 if energy &gt; 4.</text>
    <rect x="40" y="285" width="160" height="34" rx="17" fill="#dc2626" fill-opacity="0.3" stroke="#f87171"/>
    <text x="120" y="307" fill="#fee2e2" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">ATTACK • LETHAL</text>
  </g>

  <!-- Card 3: Cyber Synthesis -->
  <g transform="translate(780, 360)">
    <rect width="240" height="350" rx="18" fill="#130924" stroke="url(#cardGlow3)" stroke-width="2.5" filter="url(#p3Glow)"/>
    <rect x="15" y="15" width="210" height="150" rx="12" fill="#241142"/>
    <!-- Card Art -->
    <circle cx="120" cy="90" r="40" fill="none" stroke="#ec4899" stroke-width="3"/>
    <circle cx="120" cy="90" r="20" fill="#a855f7" filter="url(#p3Glow)"/>
    <!-- Cost Badge -->
    <circle cx="35" cy="35" r="16" fill="#9333ea"/>
    <text x="35" y="41" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">2</text>
    <text x="120" y="200" fill="#f472b6" font-family="system-ui, sans-serif" font-size="18" font-weight="800" text-anchor="middle">CYBER SYNTHESIS</text>
    <text x="120" y="235" fill="#d8b4fe" font-family="sans-serif" font-size="13" text-anchor="middle">Draw 2 bonus cards</text>
    <text x="120" y="255" fill="#d8b4fe" font-family="sans-serif" font-size="13" text-anchor="middle">and restore 2 Energy.</text>
    <rect x="40" y="285" width="160" height="34" rx="17" fill="#9333ea" fill-opacity="0.2" stroke="#c084fc"/>
    <text x="120" y="307" fill="#f3e8ff" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">SPECIAL • DRAW</text>
  </g>

  <!-- Energy Crystals UI -->
  <g transform="translate(50, 680)">
    <rect width="180" height="50" rx="25" fill="#090514" stroke="#a855f7" stroke-width="1.5"/>
    <text x="30" y="32" fill="#e9d5ff" font-family="monospace" font-size="16" font-weight="bold">⚡ 7 / 10</text>
  </g>
</svg>
`;

async function generate() {
  console.log('Generating images with sharp...');
  
  await sharp(Buffer.from(profileSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(publicDir, 'profile.jpg'));
  console.log('✓ Created /profile.jpg');

  await sharp(Buffer.from(workspaceSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(publicDir, 'workspace.jpg'));
  console.log('✓ Created /workspace.jpg');

  await sharp(Buffer.from(project1Svg))
    .jpeg({ quality: 92 })
    .toFile(path.join(projectsDir, 'project-1.jpg'));
  console.log('✓ Created /projects/project-1.jpg');

  await sharp(Buffer.from(project2Svg))
    .jpeg({ quality: 92 })
    .toFile(path.join(projectsDir, 'project-2.jpg'));
  console.log('✓ Created /projects/project-2.jpg');

  await sharp(Buffer.from(project3Svg))
    .jpeg({ quality: 92 })
    .toFile(path.join(projectsDir, 'project-3.jpg'));
  console.log('✓ Created /projects/project-3.jpg');

  console.log('All placeholder images generated successfully!');
}

generate().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});

<div align="center">

# 🪼 ✨ Aurelia

*Real-time procedural jellyfish dancing in your browser, powered by WebGPU.*

[![Three.js](https://img.shields.io/badge/Three.js-r175-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![WebGPU](https://img.shields.io/badge/WebGPU-Ready-2d9cff?style=flat-square&logo=webgpu&logoColor=white)](https://www.w3.org/TR/webgpu/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=flat-square&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![GLSL](https://img.shields.io/badge/GLSL-4.0-563D7C?style=flat-square&logo=opengl&logoColor=white)](https://www.khronos.org/opengl/)

</div>

---

[![Aurelia Preview](https://github.com/user-attachments/assets/21b278f3-f42b-4b43-aa06-1ed5d734c949)](https://holtsetio.com/lab/aurelia/)

<div align="center">

**[→ Watch Aurelia swim live ←](https://holtsetio.com/lab/aurelia/)**

</div>

---

There's a moment when you open this project. A moment of silence. Then... they appear. Ten translucent bells, emerging from the darkness, each breathing with its own quiet rhythm. They pulse upward, trailing gossamer tentacles that sway with currents you can't see.

I've been obsessed with jellyfish since I was a kid. Their movements are hypnotic. Their geometry is perfect. They don't fight the water—they become it. Fifteen years ago, I built my first jellyfish game in Flash. The web was a different place then. No touch screens. No WebGPU. Just magic trapped in a dying technology.

**Aurelia** is that dream, reborn.

And here's what makes it special: nothing here was pre-recorded. Every movement, every glow, every particle of plankton floating by is generated in real-time. Right there. On your GPU. This isn't a demo. It's an ecosystem.

---

## Table of Contents

- [The Journey](#-the-journey)
- [Features](#-features)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [How to Use](#-how-to-use)
- [How It Works](#-how-it-works)
- [Behind the Scenes](#-behind-the-scenes)
- [Performance](#-performance)
- [Responsive Design](#-responsive-design)
- [What's Next?](#-whats-next)
- [Credits](#-credits)
- [License](#-license)

---

## 🌟 The Journey

When someone opens Aurelia, they don't see code. They don't see polygons or shaders. They see a deep blue void, and then... movement. Slow. Deliberate. Alive.

Ten jellyfish swim upward through an infinite ocean. Each one pulses with its own rhythm—some faster, some slower. Their bells expand and contract, propelling them forward. Tentacles trail behind like silk threads caught in a current.

Move your mouse near one, and something beautiful happens. It reacts. It glows brighter, as if charging with energy. The closer you get, the more it responds. It's a small interaction, but it changes everything. Suddenly, this isn't just a visualization. It's a conversation.

And the deeper you look, the more you notice. The plankton drifting in the background. The god rays streaming from above. The way each jellyfish moves just slightly differently from the others. It's the kind of project that makes you stop and think... *how did they do this?*

Let me show you.

---

## ✨ Features

**Real-time Procedural Jellyfish**
Ten unique creatures, each with their own personality. No two are alike.

**GPU-Accelerated Verlet Physics**
Hundreds of particles connected by springs, simulated at 360 steps per second on the GPU.

**Procedural Underwater Environment**
Background, fog, god rays, plankton—all generated in shaders. Zero texture files.

**Interactive Bloom & Glow**
Custom MRT bloom system. Jellyfish glow brighter when you hover near them.

**Mouse Interaction**
Move your cursor and watch the jellyfish scatter. An invisible force field pushes them away.

**Floating Plankton**
Over a thousand tiny particles drift through the water, creating depth and atmosphere.

**Procedural Everything**
No images. No 3D models. Everything is math and noise.

---

## 🛠 Technologies

| Technology | Why It Was Chosen |
|:-----------|:------------------|
| **Three.js** | The heart of the rendering engine. Powerful, flexible, and well-documented. |
| **WebGPU** | Next-gen GPU API. Enables compute shaders for physics simulation. |
| **Vite** | Lightning-fast dev experience. Instant hot module replacement. |
| **GLSL** | Shader language for procedural generation and post-processing. |
| **JavaScript** | Application logic. No frameworks, just pure JS. |
| **WebGL** | Fallback rendering for browsers without WebGPU support. |
| **Tweakpane** | Elegant debug UI for tweaking parameters in real-time. |
| **Simplex Noise** | Procedural generation. Creates organic, natural-looking movement. |

---

## 📂 Project Structure

```
jellyfish-three.js/
├── index.html              # Entry point
├── index.js                # Bootstrap
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
│
└── src/
    ├── app.js                 # Main orchestrator
    ├── conf.js                # Settings & parameters
    │
    ├── medusa.js              # Individual jellyfish logic
    ├── medusaBell.js          # Bell assembly
    ├── medusaBellGeometry.js  # Procedural mesh generation
    ├── medusaBellFormula.js   # Mathematical shape formula
    ├── medusaBellPattern.js   # Color patterns
    ├── medusaBellMargin.js    # Bell edge details
    ├── medusaBellTop.js       # Bell crown
    ├── medusaBellBottom.js    # Bell base
    ├── medusaOralArms.js      # Flowing oral arms
    ├── medusaTentacles.js     # Trailing tentacles
    ├── medusaVerletBridge.js  # Physics bridge
    │
    ├── background.js          # Underwater environment
    ├── godrays.js             # Volumetric light rays
    ├── lights.js              # Scene lighting
    ├── plankton.js            # Floating particles
    │
    └── physics/
        ├── verletPhysics.js   # GPU physics engine
        ├── springVisualizer.js
        └── vertexVisualizer.js
```

---

## 🚀 Installation

```bash
git clone https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js.git
cd jellyfish-three.js
npm install
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

WebGPU is required. Use Chrome 113+ or Edge 113+ for the best experience.

---

## 🎮 How to Use

The controls are simple:

- **Click and drag** to orbit around the jellyfish
- **Scroll** to zoom in and out
- **Hover** near a jellyfish to push it away

When the page loads, you'll see ten jellyfish swimming upward through a deep blue void. Each one has a pulsing bell, twenty tentacles, oral arms that sway with the movement, and a unique movement pattern driven by noise.

Move your mouse near a jellyfish and watch it react. The closer you get, the more it glows. It's a small touch, but it makes the experience feel alive.

---

## ⚙ How It Works

### The Bell

The jellyfish bell is a hemisphere that contracts sinusoidally. Imagine a dome that breathes—in, out, in, out. The formula combines sinusoidal pulse for the primary contraction, noise perturbation for organic irregularity, and phase offset so each jellyfish moves independently.

### Verlet Physics

The tentacles and oral arms aren't animated—they're simulated. A verlet particle system runs entirely on the GPU at 360 steps per second. Spring forces are computed in parallel, vertex positions are updated on the GPU, and mouse interaction creates ripple effects. Dampening ensures smooth, realistic motion.

Each tentacle has twenty segments connected by springs. With twenty tentacles per jellyfish and ten jellyfish, that's four thousand particles simulated in real-time.

### Post-Processing

The bloom effect uses Multiple Render Targets to separate bloom intensity from charge. The final pass combines these to create that ethereal, bioluminescent look.

### The Environment

The underwater atmosphere is built from procedural fog using triNoise3D, god rays streaming from above, and plankton—over a thousand billboarded particles with drift and flickering. No textures. No images. Everything is math.

---

## 🎨 Behind the Scenes

Here are some details that developers might find interesting.

**The Math Behind the Bell**
The bell shape uses a custom formula that combines sinusoidal contraction for the pulsing motion, noise-based perturbation for organic irregularity, and phase offset so each jellyfish moves independently.

**GPU Compute Shaders**
The verlet physics runs entirely on the GPU using Three.js TSL. The system computes spring forces between connected particles, aggregates forces at each vertex, updates positions based on accumulated force—all happening in parallel, 360 times per second.

**Custom Bloom Pass**
Instead of a simple full-screen bloom, the project uses MRT to tag pixels that should glow based on material properties, apply bloom selectively to emissive areas, and create that magical bioluminescent effect.

**Procedural Plankton**
Each plankton particle is positioned using a hash function, drifted by 3D noise, billboarded to always face the camera, and fogged based on distance. The instance count scales dynamically with the visible volume—no wasted particles.

---

## ⚡ Performance

The project is optimized for smooth performance:

- **GPU Compute**: Physics runs on the GPU, not the CPU
- **Instanced Rendering**: Plankton and tentacles use instanced draw calls
- **Frustum Culling**: Off-screen objects aren't rendered
- **LOD Scaling**: Plankton count adapts to visible volume
- **Efficient Shaders**: Minimal branching, optimized math

| Browser | WebGPU | WebGL Fallback |
|:--------|:------:|:--------------:|
| Chrome 113+ | Yes | Yes |
| Edge 113+ | Yes | Yes |
| Firefox | No | Yes |
| Safari 18+ | Yes | Yes |

---

## 📱 Responsive Design

The canvas automatically resizes to fill the viewport. Camera aspect ratio adjusts on the fly. Works on both desktop and mobile—though touch controls are still a dream for another day.

---

## 🚧 What's Next?

Some ideas for where this could go:

- Touch controls for mobile interaction
- More jellyfish species with unique behaviors
- Ambient underwater audio
- Simulated water currents affecting movement
- Web Audio API integration to react to music
- Custom shader system for user-defined materials
- VR/AR support for diving into the scene
- Performance monitoring with FPS and draw call stats

---

## ❤️ Credits

**Libraries & Tools**

- [Three.js](https://threejs.org/) — The heart of the rendering
- [Vite](https://vitejs.dev/) — Lightning-fast dev experience
- [Tweakpane](https://tweakpane.github.io/docs/) — Elegant debug UI

**Inspirations**

- [Chrysaora](https://akirodic.com/p/jellyfish/) by Aki Rodic — The GOAT of WebGL jellyfish
- [Particulate Medusae](https://github.com/milcktoast/particulate-medusae) by Ash Weeks — Beautiful particle-based approach
- [Luminescence](https://www.shadertoy.com/view/4sXBRn) by BigWings — Stunning shader work

**Original Project**

This is a reimagination of [Aurelia](https://holtsetio.com/old/aurelia/)—a Flash/ActionScript jellyfish game from 2011, rebuilt for the modern web.

---

## 📜 License

MIT License. Use it, modify it, share it.

---

<div align="center">
<i>"In the ocean of code, we are all just jellyfish drifting on the currents of creativity."</i>
</div>

---

<div align="center">
Made with ❤️ by <a href="https://sebas-dev.vercel.app/" target="_blank" rel="noopener noreferrer">Sebastián V</a>
</div>
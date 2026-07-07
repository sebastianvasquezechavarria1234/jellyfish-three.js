<div align="center">

🪼 ✨

# **Aurelia**

**Real-time procedural jellyfish dancing in your browser, powered by WebGPU.**

[![GitHub stars](https://img.shields.io/github/stars/sebastianvasquezechavarria1234/jellyfish-three.js?style=flat-square&logo=github&color=yellow)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/sebastianvasquezechavarria1234/jellyfish-three.js?style=flat-square&logo=github&color=blue)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square&logo=mit)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/sebastianvasquezechavarria1234/jellyfish-three.js?style=flat-square&logo=github&color=orange)](https://github.com/sebastianvasquezechavarria1234/commits/master)
[![GitHub repo size](https://img.shields.io/github/repo-size/sebastianvasquezechavarria1234/jellyfish-three.js?style=flat-square&logo=github&color=purple)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js)
[![Top Language](https://img.shields.io/badge/Top%20Language-JavaScript-yellow?style=flat-square&logo=javascript&logoColor=white)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js)
[![Languages Count](https://img.shields.io/badge/Languages-1-blue?style=flat-square&logo=visualstudiocode&logoColor=white)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js)
[![GitHub issues](https://img.shields.io/github/issues/sebastianvasquezechavarria1234/jellyfish-three.js?style=flat-square&logo=github&color=red)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sebastianvasquezechavarria1234/jellyfish-three.js?style=flat-square&logo=github&color=cyan)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js/pulls)
[![GitHub open issues](https://img.shields.io/github/issues/sebastianvasquezechavarria1234/jellyfish-three.js?style=flat-square&label=Open%20Issues&color=orange)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js/issues)
[![Visitors](https://img.shields.io/badge/👀-Visitors-blue?style=flat-square)](https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js)
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

**[→ Watch Aurelia Swim Live ←](https://holtsetio.com/lab/aurelia/)**

</div>

---

## 📚 Table of Contents

- [The Story](#-the-story)
- [Features](#-features)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [How to Use](#-how-to-use)
- [How It Works](#-how-it-works)
- [Behind the Scenes](#-behind-the-scenes)
- [Performance](#-performance)
- [Responsive Design](#-responsive-design)
- [Where Could This Adventure Continue?](#-where-could-this-adventure-continue)
- [Credits](#-credits)
- [License](#-license)

---

## 🌊 The Story

There's something about jellyfish that stops you in your tracks.

They don't swim like fish. They don't fight the current. They *become* the current—pulsing, drifting, glowing like living lanterns in the deep blue. Their movements are so hypnotic, so perfectly geometric, that watching them feels like meditation.

I've been obsessed with these creatures since I was a kid. Fifteen years ago, I built my first jellyfish game in ActionScript. Flash was dying, touch screens didn't exist yet, and the web was a very different place. But the dream never faded.

**Aurelia** is that dream reborn.

When you open this project, something magical happens. Ten translucent bells emerge from the darkness, each one breathing with its own rhythm. They pulse upward, trailing gossamer tentacles that sway with invisible currents. The deeper you go, the more you realize—nothing here was pre-recorded. Every movement, every glow, every particle of plankton floating by is generated in real-time, right there on your GPU.

This isn't just a demo. It's a living, breathing ecosystem.

---

## ✨ Features

🪼 **Real-time Procedural Jellyfish**
Ten unique jellyfish, each with their own phase, noise seed, and personality. No two are alike.

🧬 **GPU-Accelerated Verlet Physics**
Hundreds of particles connected by springs, simulated at 360 steps per second entirely on the GPU using compute shaders.

🌊 **Procedural Underwater Environment**
The background, fog, god rays, and even the plankton are generated in shaders. Zero texture files.

✨ **Interactive Bloom & Glow**
Custom MRT (Multiple Render Targets) bloom system. Jellyfish glow brighter when you hover near them.

🖱️ **Mouse Interaction**
Move your cursor and watch the jellyfish scatter. An invisible force field pushes them away from your pointer.

🌱 **Floating Plankton**
1000+ tiny particles drift through the water, creating depth and atmosphere. They're all procedural too.

🔬 **Procedural Everything**
No images. No 3D models. Everything is math and noise.

---

## 🛠️ Technologies

| Technology | Purpose | Badge |
|:-----------|:--------|:------|
| **Three.js** | 3D rendering engine | ![Three.js](https://img.shields.io/badge/Three.js-r175-black?style=flat-square&logo=three.js) |
| **WebGPU** | Next-gen GPU API | ![WebGPU](https://img.shields.io/badge/WebGPU-Ready-2d9cff?style=flat-square&logo=webgpu&logoColor=white) |
| **Vite** | Build tool & dev server | ![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **GLSL** | Shader language | ![GLSL](https://img.shields.io/badge/GLSL-4.0-563D7C?style=flat-square&logo=opengl&logoColor=white) |
| **JavaScript** | Application logic | ![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=white) |
| **WebGL** | Fallback rendering | ![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=flat-square&logo=webgl&logoColor=white) |
| **Tweakpane** | Debug UI | ![Tweakpane](https://img.shields.io/badge/Tweakpane-4.0-orange?style=flat-square) |
| **Simplex Noise** | Procedural generation | ![Simplex Noise](https://img.shields.io/badge/Simplex%20Noise-4.0-green?style=flat-square) |

---

## 📁 Project Structure

```
jellyfish-three.js/
├── index.html              # Entry point
├── index.js                # Bootstrap
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
│
└── src/
    ├── app.js                 # 🎬 Main orchestrator — glues everything together
    ├── conf.js                # ⚙️ Settings & tweakable parameters
    │
    ├── medusa.js              # 🪼 Individual jellyfish logic
    ├── medusaBell.js          # 🔔 Bell assembly (combines top, bottom, margin)
    ├── medusaBellGeometry.js  # 📐 Procedural bell mesh generation
    ├── medusaBellFormula.js   # 📊 Mathematical shape formula
    ├── medusaBellPattern.js   # 🎨 Color & pattern generation
    ├── medusaBellMargin.js    # 🌊 Bell edge details
    ├── medusaBellTop.js       # 👑 Bell crown geometry
    ├── medusaBellBottom.js    # 🔽 Bell base geometry
    ├── medusaOralArms.js      # 🌸 Flowing oral arms
    ├── medusaTentacles.js     # 🧵 Trailing tentacles
    ├── medusaVerletBridge.js  # 🔗 Physics bridge between jellyfish
    │
    ├── background.js          # 🌌 Procedural underwater environment
    ├── godrays.js             # 💡 Volumetric light rays
    ├── lights.js              # 💡 Scene lighting
    ├── plankton.js            # 🌱 Floating particles
    │
    └── physics/
        ├── verletPhysics.js   # ⚡ GPU compute shader physics engine
        ├── springVisualizer.js  # 👁️ Debug: visualize springs
        └── vertexVisualizer.js  # 👁️ Debug: visualize vertices
```

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js.git

# 2. Navigate into the project
cd jellyfish-three.js

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`. 🐙

> **Note:** WebGPU is required. Use Chrome 113+ or Edge 113+ for the best experience.

---

## 🎮 How to Use

### Controls

| Action | Effect |
|:-------|:-------|
| 🖱️ **Click & Drag** | Orbit around the jellyfish |
| 🔍 **Scroll** | Zoom in / out |
| 👆 **Hover** | Push jellyfish away with invisible force |

### The Scene

When the page loads, you'll see **10 jellyfish** swimming upward through a deep blue void. Each one has:

- A pulsing bell that contracts to propel it
- 20 tentacles that trail behind
- Oral arms that sway with the movement
- A unique movement pattern driven by noise

### Interaction

Move your mouse near a jellyfish and watch it react. The closer you get, the more it "charges" and glows brighter. It's a small touch, but it makes the experience feel alive.

---

## ⚙️ How It Works

### The Bell

The jellyfish bell is a hemisphere that contracts sinusoidally. Imagine a dome that breathes—in, out, in, out. The formula combines:

- **Sinusoidal pulse** for the primary contraction
- **Noise perturbation** for organic irregularity
- **Phase offset** so each jellyfish moves independently

```
bellRadius = sin(zenith × π) × pulseFactor
```

### Verlet Physics

The tentacles and oral arms aren't animated—they're *simulated*. A verlet particle system runs entirely on the GPU:

```
360 physics steps per second
├── Spring forces computed in parallel
├── Vertex positions updated on GPU  
├── Mouse interaction creates ripple effects
└── Dampening ensures smooth, realistic motion
```

Each tentacle has **20 segments** connected by springs. With 20 tentacles per jellyfish and 10 jellyfish, that's **4,000 particles** simulated in real-time.

### Post-Processing

The bloom effect uses **Multiple Render Targets (MRT)** to separate:

- `bloomIntensity` — how much each pixel should glow
- `charge` — interactive glow from mouse proximity

The final pass combines these to create that ethereal, bioluminescent look.

### The Environment

The underwater atmosphere is built from:

- **Procedural fog** using triNoise3D
- **God rays** streaming from above
- **Plankton** — 1000+ billboarded particles with drift and flickering

No textures. No images. Everything is math.

---

## 🔍 Behind the Scenes

Here are some implementation details that developers might find interesting:

### 🔢 The Math Behind the Bell

The bell shape uses a custom formula that combines:
- **Sinusoidal contraction** for the pulsing motion
- **Noise-based perturbation** for organic irregularity  
- **Phase offset** so each jellyfish moves independently

### 🎯 GPU Compute Shaders

The verlet physics runs entirely on the GPU using Three.js TSL (Three Shading Language). The system:

1. Computes spring forces between connected particles
2. Aggregates forces at each vertex
3. Updates positions based on accumulated force
4. All happening in parallel, 360 times per second

### 🌈 Custom Bloom Pass

Instead of a simple full-screen bloom, the project uses MRT to:

- Tag pixels that should glow based on material properties
- Apply bloom selectively to emissive areas
- Create that magical bioluminescent effect

### 🎲 Procedural Plankton

Each plankton particle is:
- Positioned using a hash function
- Drifted by 3D noise
- Billboarded to always face the camera
- Fogged based on distance

The instance count scales dynamically with the visible volume—no wasted particles.

---

## ⚡ Performance

The project is optimized for smooth performance:

- **GPU Compute**: Physics runs on the GPU, not the CPU
- **Instanced Rendering**: Plankton and tentacles use instanced draw calls
- **Frustum Culling**: Off-screen objects aren't rendered
- **LOD Scaling**: Plankton count adapts to visible volume
- **Efficient Shaders**: Minimal branching, optimized math

### Browser Support

| Browser | WebGPU | WebGL Fallback |
|:--------|:------:|:--------------:|
| Chrome 113+ | ✅ | ✅ |
| Edge 113+ | ✅ | ✅ |
| Firefox | ❌ | ✅ |
| Safari 18+ | ✅ | ✅ |

---

## 📱 Responsive Design

The canvas automatically resizes to fill the viewport. Camera aspect ratio adjusts on the fly. Works on both desktop and mobile—though touch controls are still a dream for another day.

---

## ✨ Where Could This Adventure Continue?

Some ideas for the future:

- 🎮 **Touch Controls** — Swipe to interact on mobile
- 🐙 **More Species** — Different jellyfish types with unique behaviors
- 🎵 **Sound** — Ambient underwater audio
- 🌊 **Currents** — Simulated water flow affecting movement
- 🔊 **Web Audio API** — React to music
- 🎨 **Custom Shaders** — Let users write their own jellyfish materials
- 🌍 **VR/AR Support** — Dive into the scene with a headset
- 📊 **Performance Monitor** — FPS and draw call stats

---

## 🙏 Credits

### Libraries & Tools

- [Three.js](https://threejs.org/) — The heart of the rendering
- [Vite](https://vitejs.dev/) — Lightning-fast dev experience
- [Tweakpane](https://tweakpane.github.io/docs/) — Elegant debug UI

### Inspirations

- **[Chrysaora](https://akirodic.com/p/jellyfish/)** by [Aki Rodic](https://akirodic.com/) — The GOAT of WebGL jellyfish
- **[Particulate Medusae](https://github.com/milcktoast/particulate-medusae)** by [Ash Weeks](https://github.com/milcktoast) — Beautiful particle-based approach
- **[Luminescence](https://www.shadertoy.com/view/4sXBRn)** by BigWings — Stunning shader work

### Original Project

This is a reimagination of [Aurelia](https://holtsetio.com/old/aurelia/) — a Flash/ActionScript jellyfish game from 2011, rebuilt for the modern web.

---

## 📜 License

MIT License — use it, modify it, share it. Just don't forget to credit the jellyfish. 🪼

---

<div align="center">
<i>"In the ocean of code, we are all just jellyfish drifting on the currents of creativity."</i>
</div>

---

<div align="center">
Made with ❤️ by <a href="https://sebas-dev.vercel.app/" target="_blank" rel="noopener noreferrer">Sebastián V</a>
</div>
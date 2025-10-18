# Blur CSS v2

A real-time playground for creating stunning **Liquid Glass**, **Glassmorphism**, and **Neumorphism** effects with live preview and instant CSS generation. Built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- Features
- Preset Categories
- Getting Started
- How It Works
- Customization
- Export Formats
- Browser Support
- Contributing
- License
- Acknowledgments
- Contact

## ✨ Features

- 🎨 **50+ Preset Styles** - Carefully crafted liquid glass effects across multiple themes
- 🔧 **Advanced Controls** - Fine-tune every aspect of your effect with real-time sliders
- 👁️ **Live Preview** - See changes instantly in a beautiful preview panel
- 💾 **Multiple Export Formats**:
  - React + Tailwind CSS
  - React + Native CSS
  - HTML + CSS
- 🔍 **Smart Search** - Quickly find the perfect preset
- 📱 **Responsive Design** - Works beautifully on all screen sizes
- 🎯 **100% Client-Side** - No server required, all processing in browser
- 🚀 **Open Source** - Free to use and contribute

## 🎭 Preset Categories

### Crystal Series

Pure, clear effects with subtle distortion

- Liquid Crystal, Crystal Clear, Crystal Mist, Crystal Ocean, Crystal Frost

### Fluid Series

Smooth, flowing effects with vibrant colors

- Fluid Amber, Fluid Azure, Fluid Rose, Fluid Emerald, Fluid Violet

### Ice Series

Frozen, crystalline effects with cool tones

- Ice Ripple, Ice Wave, Ice Drift, Ice Shard, Ice Glow

### Mercury Series

Metallic, reflective effects

- Mercury Drop, Mercury Flow, Mercury Orb, Mercury Swirl, Mercury Lens

### Ocean Series

Deep water effects with organic movement

- Ocean Wave, Ocean Deep, Ocean Tide, Ocean Foam, Ocean Current

### Aurora Series

Ethereal, luminous effects

- Aurora Borealis, Aurora Pink, Aurora Violet, Aurora Cyan, Aurora Shimmer

### Neon Series

Bright, electric effects

- Neon Pulse, Neon Glow, Neon Flux, Neon Spark, Neon Wave

### Plasma Series

Energy-based, dynamic effects

- Plasma Flow, Plasma Burst, Plasma Surge, Plasma Drift, Plasma Core

### Prism Series

Light-splitting, colorful effects

- Prism Light, Prism Rainbow, Prism Reflect, Prism Spectrum, Prism Glow

### Cosmic Series

Space-inspired, mysterious effects

- Cosmic Dust, Cosmic Void, Cosmic Nebula, Cosmic Star, Cosmic Realm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd BlurCSS-gotodev

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action!

### Available Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🎨 How It Works

Blur CSS uses SVG filters to create liquid glass distortion effects:

1. **feTurbulence** - Generates fractal noise patterns
2. **feGaussianBlur** - Smooths the noise for organic shapes
3. **feDisplacementMap** - Applies the distortion to elements

The result is a beautiful, fluid glass effect that can be customized to your needs.

## 🛠️ Customization

### Parameters You Can Control

- **Base Frequency** (0.010 - 0.050): Size of distortion patterns
- **Octaves** (1 - 8): Number of noise layers for detail
- **Blur Amount** (0.5 - 5.0): Softness of the distortion
- **Displacement Scale** (20 - 100): Intensity of the effect

## 📦 Export Formats

### React + Tailwind

Perfect for modern React applications using Tailwind CSS

### React + CSS

Traditional React with separate CSS files

### HTML + CSS

Pure HTML/CSS for any project

## 🌐 Browser Support

**Best Experience:**

- Chrome 90+
- Edge 90+
- Opera 76+

**Note:** Liquid glass effects use SVG filters with `feDisplacementMap`, which work best on Chromium-based browsers. Firefox and Safari have limited support.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions

- Add more preset styles
- Improve glassmorphism and neumorphism generators
- Add color picker for background/glass colors
- Create preset sharing functionality
- Add animation options
- Improve mobile experience

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Contact

Have questions or suggestions? Open an issue or contribute!

---

Made with ❤️ by the open-source community

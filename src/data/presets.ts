import { LiquidGlassPreset, GlassmorphismPreset, NeumorphismPreset } from "@/types/effect";

export const liquidGlassPresets: LiquidGlassPreset[] = [
  // Crystal Series
  { id: "liquid-crystal", name: "Liquid Crystal", baseFrequency: 0.025, numOctaves: 2, blurAmount: 2, displacementScale: 65, backgroundColor: "rgba(139, 92, 246, 0.1)", glassColor: "rgba(139, 92, 246, 0.15)" },
  { id: "crystal-clear", name: "Crystal Clear", baseFrequency: 0.015, numOctaves: 1, blurAmount: 1.5, displacementScale: 40, backgroundColor: "rgba(96, 165, 250, 0.08)", glassColor: "rgba(96, 165, 250, 0.12)" },
  { id: "crystal-mist", name: "Crystal Mist", baseFrequency: 0.022, numOctaves: 2, blurAmount: 3.2, displacementScale: 55, backgroundColor: "rgba(167, 139, 250, 0.1)", glassColor: "rgba(167, 139, 250, 0.15)" },
  { id: "crystal-ocean", name: "Crystal Ocean", baseFrequency: 0.028, numOctaves: 3, blurAmount: 2.5, displacementScale: 58, backgroundColor: "rgba(14, 165, 233, 0.1)", glassColor: "rgba(14, 165, 233, 0.15)" },
  { id: "crystal-frost", name: "Crystal Frost", baseFrequency: 0.018, numOctaves: 2, blurAmount: 2.8, displacementScale: 48, backgroundColor: "rgba(186, 230, 253, 0.12)", glassColor: "rgba(186, 230, 253, 0.18)" },
  
  // Fluid Series
  { id: "fluid-amber", name: "Fluid Amber", baseFrequency: 0.03, numOctaves: 3, blurAmount: 3, displacementScale: 50, backgroundColor: "rgba(245, 158, 11, 0.1)", glassColor: "rgba(245, 158, 11, 0.15)" },
  { id: "fluid-azure", name: "Fluid Azure", baseFrequency: 0.026, numOctaves: 2, blurAmount: 2.2, displacementScale: 62, backgroundColor: "rgba(59, 130, 246, 0.1)", glassColor: "rgba(59, 130, 246, 0.15)" },
  { id: "fluid-rose", name: "Fluid Rose", baseFrequency: 0.032, numOctaves: 3, blurAmount: 2.6, displacementScale: 54, backgroundColor: "rgba(244, 114, 182, 0.1)", glassColor: "rgba(244, 114, 182, 0.15)" },
  { id: "fluid-emerald", name: "Fluid Emerald", baseFrequency: 0.024, numOctaves: 2, blurAmount: 2.4, displacementScale: 60, backgroundColor: "rgba(16, 185, 129, 0.1)", glassColor: "rgba(16, 185, 129, 0.15)" },
  { id: "fluid-violet", name: "Fluid Violet", baseFrequency: 0.029, numOctaves: 3, blurAmount: 2.9, displacementScale: 56, backgroundColor: "rgba(124, 58, 237, 0.1)", glassColor: "rgba(124, 58, 237, 0.15)" },
  
  // Ice Series
  { id: "ice-ripple", name: "Ice Ripple", baseFrequency: 0.02, numOctaves: 2, blurAmount: 2.5, displacementScale: 70, backgroundColor: "rgba(99, 102, 241, 0.1)", glassColor: "rgba(99, 102, 241, 0.15)" },
  { id: "ice-wave", name: "Ice Wave", baseFrequency: 0.023, numOctaves: 3, blurAmount: 3.5, displacementScale: 68, backgroundColor: "rgba(147, 197, 253, 0.1)", glassColor: "rgba(147, 197, 253, 0.15)" },
  { id: "ice-drift", name: "Ice Drift", baseFrequency: 0.019, numOctaves: 2, blurAmount: 2.1, displacementScale: 52, backgroundColor: "rgba(191, 219, 254, 0.12)", glassColor: "rgba(191, 219, 254, 0.18)" },
  { id: "ice-shard", name: "Ice Shard", baseFrequency: 0.027, numOctaves: 2, blurAmount: 1.8, displacementScale: 72, backgroundColor: "rgba(165, 180, 252, 0.1)", glassColor: "rgba(165, 180, 252, 0.15)" },
  { id: "ice-glow", name: "Ice Glow", baseFrequency: 0.021, numOctaves: 3, blurAmount: 3.8, displacementScale: 64, backgroundColor: "rgba(129, 140, 248, 0.1)", glassColor: "rgba(129, 140, 248, 0.15)" },
  
  // Mercury Series
  { id: "mercury-drop", name: "Mercury Drop", baseFrequency: 0.035, numOctaves: 2, blurAmount: 1.5, displacementScale: 45, backgroundColor: "rgba(148, 163, 184, 0.1)", glassColor: "rgba(148, 163, 184, 0.15)" },
  { id: "mercury-flow", name: "Mercury Flow", baseFrequency: 0.031, numOctaves: 3, blurAmount: 2.3, displacementScale: 53, backgroundColor: "rgba(203, 213, 225, 0.12)", glassColor: "rgba(203, 213, 225, 0.18)" },
  { id: "mercury-orb", name: "Mercury Orb", baseFrequency: 0.028, numOctaves: 2, blurAmount: 1.9, displacementScale: 48, backgroundColor: "rgba(226, 232, 240, 0.1)", glassColor: "rgba(226, 232, 240, 0.15)" },
  { id: "mercury-swirl", name: "Mercury Swirl", baseFrequency: 0.033, numOctaves: 4, blurAmount: 2.7, displacementScale: 58, backgroundColor: "rgba(241, 245, 249, 0.12)", glassColor: "rgba(241, 245, 249, 0.18)" },
  { id: "mercury-lens", name: "Mercury Lens", baseFrequency: 0.026, numOctaves: 2, blurAmount: 2.1, displacementScale: 51, backgroundColor: "rgba(148, 163, 184, 0.08)", glassColor: "rgba(148, 163, 184, 0.12)" },
  
  // Ocean Series
  { id: "ocean-wave", name: "Ocean Wave", baseFrequency: 0.028, numOctaves: 3, blurAmount: 2.8, displacementScale: 60, backgroundColor: "rgba(6, 182, 212, 0.1)", glassColor: "rgba(6, 182, 212, 0.15)" },
  { id: "ocean-deep", name: "Ocean Deep", baseFrequency: 0.022, numOctaves: 4, blurAmount: 3.5, displacementScale: 68, backgroundColor: "rgba(8, 145, 178, 0.12)", glassColor: "rgba(8, 145, 178, 0.18)" },
  { id: "ocean-tide", name: "Ocean Tide", baseFrequency: 0.025, numOctaves: 2, blurAmount: 2.4, displacementScale: 62, backgroundColor: "rgba(34, 211, 238, 0.1)", glassColor: "rgba(34, 211, 238, 0.15)" },
  { id: "ocean-foam", name: "Ocean Foam", baseFrequency: 0.032, numOctaves: 3, blurAmount: 4.0, displacementScale: 54, backgroundColor: "rgba(103, 232, 249, 0.12)", glassColor: "rgba(103, 232, 249, 0.18)" },
  { id: "ocean-current", name: "Ocean Current", baseFrequency: 0.027, numOctaves: 3, blurAmount: 2.6, displacementScale: 66, backgroundColor: "rgba(14, 116, 144, 0.1)", glassColor: "rgba(14, 116, 144, 0.15)" },
  
  // Aurora Series
  { id: "aurora-borealis", name: "Aurora Borealis", baseFrequency: 0.024, numOctaves: 4, blurAmount: 3.2, displacementScale: 58, backgroundColor: "rgba(167, 243, 208, 0.1)", glassColor: "rgba(167, 243, 208, 0.15)" },
  { id: "aurora-pink", name: "Aurora Pink", baseFrequency: 0.026, numOctaves: 3, blurAmount: 2.9, displacementScale: 61, backgroundColor: "rgba(251, 207, 232, 0.12)", glassColor: "rgba(251, 207, 232, 0.18)" },
  { id: "aurora-violet", name: "Aurora Violet", baseFrequency: 0.023, numOctaves: 4, blurAmount: 3.4, displacementScale: 64, backgroundColor: "rgba(221, 214, 254, 0.1)", glassColor: "rgba(221, 214, 254, 0.15)" },
  { id: "aurora-cyan", name: "Aurora Cyan", baseFrequency: 0.025, numOctaves: 3, blurAmount: 3.0, displacementScale: 59, backgroundColor: "rgba(165, 243, 252, 0.12)", glassColor: "rgba(165, 243, 252, 0.18)" },
  { id: "aurora-shimmer", name: "Aurora Shimmer", baseFrequency: 0.021, numOctaves: 5, blurAmount: 3.6, displacementScale: 56, backgroundColor: "rgba(196, 181, 253, 0.1)", glassColor: "rgba(196, 181, 253, 0.15)" },
  
  // Neon Series
  { id: "neon-pulse", name: "Neon Pulse", baseFrequency: 0.038, numOctaves: 2, blurAmount: 2.2, displacementScale: 48, backgroundColor: "rgba(217, 70, 239, 0.12)", glassColor: "rgba(217, 70, 239, 0.18)" },
  { id: "neon-glow", name: "Neon Glow", baseFrequency: 0.034, numOctaves: 3, blurAmount: 3.1, displacementScale: 52, backgroundColor: "rgba(168, 85, 247, 0.1)", glassColor: "rgba(168, 85, 247, 0.15)" },
  { id: "neon-flux", name: "Neon Flux", baseFrequency: 0.036, numOctaves: 2, blurAmount: 2.5, displacementScale: 55, backgroundColor: "rgba(192, 132, 252, 0.12)", glassColor: "rgba(192, 132, 252, 0.18)" },
  { id: "neon-spark", name: "Neon Spark", baseFrequency: 0.041, numOctaves: 2, blurAmount: 1.9, displacementScale: 46, backgroundColor: "rgba(232, 121, 249, 0.1)", glassColor: "rgba(232, 121, 249, 0.15)" },
  { id: "neon-wave", name: "Neon Wave", baseFrequency: 0.033, numOctaves: 4, blurAmount: 3.3, displacementScale: 61, backgroundColor: "rgba(240, 171, 252, 0.12)", glassColor: "rgba(240, 171, 252, 0.18)" },
  
  // Plasma Series
  { id: "plasma-flow", name: "Plasma Flow", baseFrequency: 0.029, numOctaves: 4, blurAmount: 3.7, displacementScale: 63, backgroundColor: "rgba(236, 72, 153, 0.1)", glassColor: "rgba(236, 72, 153, 0.15)" },
  { id: "plasma-burst", name: "Plasma Burst", baseFrequency: 0.037, numOctaves: 3, blurAmount: 2.8, displacementScale: 58, backgroundColor: "rgba(249, 115, 22, 0.12)", glassColor: "rgba(249, 115, 22, 0.18)" },
  { id: "plasma-surge", name: "Plasma Surge", baseFrequency: 0.031, numOctaves: 4, blurAmount: 3.4, displacementScale: 67, backgroundColor: "rgba(239, 68, 68, 0.1)", glassColor: "rgba(239, 68, 68, 0.15)" },
  { id: "plasma-drift", name: "Plasma Drift", baseFrequency: 0.027, numOctaves: 3, blurAmount: 3.0, displacementScale: 60, backgroundColor: "rgba(251, 146, 60, 0.12)", glassColor: "rgba(251, 146, 60, 0.18)" },
  { id: "plasma-core", name: "Plasma Core", baseFrequency: 0.035, numOctaves: 5, blurAmount: 4.2, displacementScale: 65, backgroundColor: "rgba(220, 38, 38, 0.1)", glassColor: "rgba(220, 38, 38, 0.15)" },
  
  // Prism Series
  { id: "prism-light", name: "Prism Light", baseFrequency: 0.023, numOctaves: 3, blurAmount: 2.7, displacementScale: 57, backgroundColor: "rgba(253, 224, 71, 0.1)", glassColor: "rgba(253, 224, 71, 0.15)" },
  { id: "prism-rainbow", name: "Prism Rainbow", baseFrequency: 0.026, numOctaves: 4, blurAmount: 3.5, displacementScale: 62, backgroundColor: "rgba(134, 239, 172, 0.12)", glassColor: "rgba(134, 239, 172, 0.18)" },
  { id: "prism-reflect", name: "Prism Reflect", baseFrequency: 0.024, numOctaves: 2, blurAmount: 2.3, displacementScale: 54, backgroundColor: "rgba(96, 165, 250, 0.1)", glassColor: "rgba(96, 165, 250, 0.15)" },
  { id: "prism-spectrum", name: "Prism Spectrum", baseFrequency: 0.028, numOctaves: 5, blurAmount: 3.9, displacementScale: 68, backgroundColor: "rgba(251, 113, 133, 0.12)", glassColor: "rgba(251, 113, 133, 0.18)" },
  { id: "prism-glow", name: "Prism Glow", baseFrequency: 0.025, numOctaves: 3, blurAmount: 3.1, displacementScale: 59, backgroundColor: "rgba(254, 215, 170, 0.1)", glassColor: "rgba(254, 215, 170, 0.15)" },
  
  // Cosmic Series
  { id: "cosmic-dust", name: "Cosmic Dust", baseFrequency: 0.021, numOctaves: 5, blurAmount: 4.1, displacementScale: 63, backgroundColor: "rgba(109, 40, 217, 0.1)", glassColor: "rgba(109, 40, 217, 0.15)" },
  { id: "cosmic-void", name: "Cosmic Void", baseFrequency: 0.019, numOctaves: 4, blurAmount: 3.8, displacementScale: 71, backgroundColor: "rgba(30, 27, 75, 0.15)", glassColor: "rgba(30, 27, 75, 0.22)" },
  { id: "cosmic-nebula", name: "Cosmic Nebula", baseFrequency: 0.024, numOctaves: 6, blurAmount: 4.5, displacementScale: 66, backgroundColor: "rgba(88, 28, 135, 0.12)", glassColor: "rgba(88, 28, 135, 0.18)" },
  { id: "cosmic-star", name: "Cosmic Star", baseFrequency: 0.027, numOctaves: 3, blurAmount: 2.9, displacementScale: 58, backgroundColor: "rgba(147, 51, 234, 0.1)", glassColor: "rgba(147, 51, 234, 0.15)" },
  { id: "cosmic-realm", name: "Cosmic Realm", baseFrequency: 0.022, numOctaves: 5, blurAmount: 4.0, displacementScale: 69, backgroundColor: "rgba(126, 34, 206, 0.12)", glassColor: "rgba(126, 34, 206, 0.18)" },
];


export const glassmorphismPresets: GlassmorphismPreset[] = [
  // Light Presets
  { id: "frost-light", name: "Frost Light", backgroundColor: "rgba(255, 255, 255, 0.1)", backdropBlur: 10, borderOpacity: 0.2, backgroundOpacity: 0.1 },
  { id: "crystal-white", name: "Crystal White", backgroundColor: "rgba(255, 255, 255, 0.15)", backdropBlur: 12, borderOpacity: 0.25, backgroundOpacity: 0.15 },
  { id: "snow-glass", name: "Snow Glass", backgroundColor: "rgba(255, 255, 255, 0.08)", backdropBlur: 16, borderOpacity: 0.15, backgroundOpacity: 0.08 },
  { id: "pearl-shimmer", name: "Pearl Shimmer", backgroundColor: "rgba(248, 250, 252, 0.12)", backdropBlur: 14, borderOpacity: 0.22, backgroundOpacity: 0.12 },
  { id: "cloud-white", name: "Cloud White", backgroundColor: "rgba(241, 245, 249, 0.1)", backdropBlur: 18, borderOpacity: 0.18, backgroundOpacity: 0.1 },
  
  // Colored Glass
  { id: "blue-frost", name: "Blue Frost", backgroundColor: "rgba(59, 130, 246, 0.1)", backdropBlur: 12, borderOpacity: 0.2, backgroundOpacity: 0.1 },
  { id: "purple-haze", name: "Purple Haze", backgroundColor: "rgba(139, 92, 246, 0.12)", backdropBlur: 14, borderOpacity: 0.25, backgroundOpacity: 0.12 },
  { id: "pink-glass", name: "Pink Glass", backgroundColor: "rgba(236, 72, 153, 0.1)", backdropBlur: 10, borderOpacity: 0.2, backgroundOpacity: 0.1 },
  { id: "cyan-bubble", name: "Cyan Bubble", backgroundColor: "rgba(34, 211, 238, 0.12)", backdropBlur: 16, borderOpacity: 0.22, backgroundOpacity: 0.12 },
  { id: "green-mist", name: "Green Mist", backgroundColor: "rgba(16, 185, 129, 0.1)", backdropBlur: 12, borderOpacity: 0.18, backgroundOpacity: 0.1 },
  
  // Dark Glass
  { id: "smoke-dark", name: "Smoke Dark", backgroundColor: "rgba(15, 23, 42, 0.4)", backdropBlur: 20, borderOpacity: 0.15, backgroundOpacity: 0.4 },
  { id: "obsidian", name: "Obsidian", backgroundColor: "rgba(17, 24, 39, 0.5)", backdropBlur: 16, borderOpacity: 0.2, backgroundOpacity: 0.5 },
  { id: "midnight-glass", name: "Midnight Glass", backgroundColor: "rgba(30, 41, 59, 0.35)", backdropBlur: 14, borderOpacity: 0.18, backgroundOpacity: 0.35 },
  { id: "charcoal", name: "Charcoal", backgroundColor: "rgba(51, 65, 85, 0.3)", backdropBlur: 18, borderOpacity: 0.2, backgroundOpacity: 0.3 },
  
  // Subtle Effects
  { id: "barely-there", name: "Barely There", backgroundColor: "rgba(255, 255, 255, 0.03)", backdropBlur: 8, borderOpacity: 0.1, backgroundOpacity: 0.03 },
  { id: "whisper", name: "Whisper", backgroundColor: "rgba(248, 250, 252, 0.05)", backdropBlur: 10, borderOpacity: 0.12, backgroundOpacity: 0.05 },
  { id: "ghost", name: "Ghost", backgroundColor: "rgba(241, 245, 249, 0.06)", backdropBlur: 12, borderOpacity: 0.14, backgroundOpacity: 0.06 },
  
  // Intense Effects
  { id: "heavy-blur", name: "Heavy Blur", backgroundColor: "rgba(255, 255, 255, 0.2)", backdropBlur: 24, borderOpacity: 0.3, backgroundOpacity: 0.2 },
  { id: "ultra-frost", name: "Ultra Frost", backgroundColor: "rgba(255, 255, 255, 0.18)", backdropBlur: 28, borderOpacity: 0.28, backgroundOpacity: 0.18 },
  { id: "dense-fog", name: "Dense Fog", backgroundColor: "rgba(248, 250, 252, 0.25)", backdropBlur: 32, borderOpacity: 0.32, backgroundOpacity: 0.25 },
];

export const neumorphismPresets: NeumorphismPreset[] = [
  // Soft Light
  { id: "soft-clay", name: "Soft Clay", backgroundColor: "#e0e5ec", lightShadow: "#ffffff", darkShadow: "#a3b1c6", blur: 20, distance: 10 },
  { id: "puffy-cloud", name: "Puffy Cloud", backgroundColor: "#ecf0f3", lightShadow: "#ffffff", darkShadow: "#d1d9e6", blur: 24, distance: 12 },
  { id: "cotton-soft", name: "Cotton Soft", backgroundColor: "#e8ecf1", lightShadow: "#ffffff", darkShadow: "#b8c4d6", blur: 22, distance: 11 },
  { id: "silk-smooth", name: "Silk Smooth", backgroundColor: "#dee3ea", lightShadow: "#ffffff", darkShadow: "#b0bac7", blur: 18, distance: 9 },
  
  // Pressed/Inset
  { id: "pressed-button", name: "Pressed Button", backgroundColor: "#e0e5ec", lightShadow: "#a3b1c6", darkShadow: "#ffffff", blur: 15, distance: 8 },
  { id: "graphite-inset", name: "Graphite Inset", backgroundColor: "#d5dce5", lightShadow: "#a8b5c7", darkShadow: "#f8fafc", blur: 16, distance: 7 },
  { id: "deep-press", name: "Deep Press", backgroundColor: "#dce1e8", lightShadow: "#98a6b8", darkShadow: "#ffffff", blur: 20, distance: 10 },
  { id: "carved-stone", name: "Carved Stone", backgroundColor: "#d8dfe7", lightShadow: "#a5b3c5", darkShadow: "#f5f8fb", blur: 18, distance: 9 },
  
  // Sharp Edges
  { id: "sharp-edge", name: "Sharp Edge", backgroundColor: "#e0e5ec", lightShadow: "#ffffff", darkShadow: "#a3b1c6", blur: 10, distance: 5 },
  { id: "crisp-shadow", name: "Crisp Shadow", backgroundColor: "#e4e9f0", lightShadow: "#ffffff", darkShadow: "#a8b5c6", blur: 8, distance: 4 },
  { id: "hard-light", name: "Hard Light", backgroundColor: "#dfe4eb", lightShadow: "#ffffff", darkShadow: "#a0aec0", blur: 12, distance: 6 },
  
  // Dark Mode
  { id: "dark-mode-ui", name: "Dark Mode UI", backgroundColor: "#2d3748", lightShadow: "#3a4556", darkShadow: "#1a202c", blur: 20, distance: 10 },
  { id: "deep-slate", name: "Deep Slate", backgroundColor: "#334155", lightShadow: "#475569", darkShadow: "#1e293b", blur: 18, distance: 9 },
  { id: "midnight-neu", name: "Midnight Neu", backgroundColor: "#1e293b", lightShadow: "#334155", darkShadow: "#0f172a", blur: 22, distance: 11 },
  { id: "charcoal-neu", name: "Charcoal Neu", backgroundColor: "#374151", lightShadow: "#4b5563", darkShadow: "#1f2937", blur: 16, distance: 8 },
  
  // Colorful
  { id: "aqua-bubble", name: "Aqua Bubble", backgroundColor: "#d4f1f4", lightShadow: "#e8f9fa", darkShadow: "#b8dce0", blur: 20, distance: 10 },
  { id: "lavender-dream", name: "Lavender Dream", backgroundColor: "#e9d8fd", lightShadow: "#f5ebff", darkShadow: "#cbb5e8", blur: 18, distance: 9 },
  { id: "mint-fresh", name: "Mint Fresh", backgroundColor: "#d4f4dd", lightShadow: "#e8fbed", darkShadow: "#b8e2c4", blur: 20, distance: 10 },
  { id: "peach-glow", name: "Peach Glow", backgroundColor: "#fed7d7", lightShadow: "#fee8e8", darkShadow: "#e8b4b4", blur: 22, distance: 11 },
  
  // Extreme Effects
  { id: "ultra-soft", name: "Ultra Soft", backgroundColor: "#e0e5ec", lightShadow: "#ffffff", darkShadow: "#a3b1c6", blur: 30, distance: 15 },
  { id: "mega-depth", name: "Mega Depth", backgroundColor: "#dce1e8", lightShadow: "#ffffff", darkShadow: "#95a3b8", blur: 28, distance: 14 },
];

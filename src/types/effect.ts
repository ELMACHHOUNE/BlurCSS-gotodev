export type EffectType = 'liquid-glass' | 'glassmorphism' | 'neumorphism';

export type OutputFormat = 'react-tailwind' | 'react-css' | 'html-css';

export interface LiquidGlassPreset {
  id: string;
  name: string;
  baseFrequency: number;
  numOctaves: number;
  blurAmount: number;
  displacementScale: number;
  backgroundColor: string;
  glassColor: string;
}

export interface GlassmorphismPreset {
  id: string;
  name: string;
  backgroundColor: string;
  backdropBlur: number;
  borderOpacity: number;
  backgroundOpacity: number;
}

export interface NeumorphismPreset {
  id: string;
  name: string;
  backgroundColor: string;
  lightShadow: string;
  darkShadow: string;
  blur: number;
  distance: number;
}

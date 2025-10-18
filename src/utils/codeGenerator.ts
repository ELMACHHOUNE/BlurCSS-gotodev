import { LiquidGlassPreset, GlassmorphismPreset, NeumorphismPreset, OutputFormat } from "@/types/effect";

export const generateLiquidGlassCode = (
  preset: LiquidGlassPreset,
  format: OutputFormat
): string => {
  const filterId = `glass-distortion-${preset.id}`;

  if (format === "html-css") {
    return `<!-- SVG Filter (Include once in your document) -->
<svg width="0" height="0" style="position: absolute;">
  <defs>
    <filter id="${filterId}" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="${preset.baseFrequency} ${preset.baseFrequency}"
        numOctaves="${preset.numOctaves}"
        seed="92"
        result="noise"
      />
      <feGaussianBlur
        in="noise"
        stdDeviation="${preset.blurAmount}"
        result="blurred"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurred"
        scale="${preset.displacementScale}"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </defs>
</svg>

<!-- Your Content -->
<div class="liquid-glass-container">
  <div class="liquid-glass-content">
    <h2>Styled Component</h2>
    <p>Your content here</p>
  </div>
</div>

<style>
.liquid-glass-container {
  filter: url(#${filterId});
  background-color: ${preset.backgroundColor};
  border: 1px solid ${preset.glassColor};
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.liquid-glass-content {
  position: relative;
  z-index: 1;
}
</style>`;
  }

  if (format === "react-css") {
    return `import React from 'react';
import './LiquidGlass.css';

export const LiquidGlassComponent = () => {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="${filterId}" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="${preset.baseFrequency} ${preset.baseFrequency}"
              numOctaves="${preset.numOctaves}"
              seed="92"
              result="noise"
            />
            <feGaussianBlur
              in="noise"
              stdDeviation="${preset.blurAmount}"
              result="blurred"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="${preset.displacementScale}"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="liquid-glass-container">
        <div className="liquid-glass-content">
          <h2>Styled Component</h2>
          <p>Your content here</p>
        </div>
      </div>
    </>
  );
};

/* LiquidGlass.css */
.liquid-glass-container {
  filter: url(#${filterId});
  background-color: ${preset.backgroundColor};
  border: 1px solid ${preset.glassColor};
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.liquid-glass-content {
  position: relative;
  z-index: 1;
}`;
  }

  // react-tailwind
  return `import React from 'react';

export const LiquidGlassComponent = () => {
  const filterId = "${filterId}";
  
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="${preset.baseFrequency} ${preset.baseFrequency}"
              numOctaves="${preset.numOctaves}"
              seed="92"
              result="noise"
            />
            <feGaussianBlur
              in="noise"
              stdDeviation="${preset.blurAmount}"
              result="blurred"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="${preset.displacementScale}"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="rounded-2xl p-8 backdrop-blur-xl border"
        style={{
          filter: \`url(#\${filterId})\`,
          backgroundColor: "${preset.backgroundColor}",
          borderColor: "${preset.glassColor}",
        }}
      >
        <h2 className="text-xl font-bold">Styled Component</h2>
        <p className="text-sm text-gray-400">Your content here</p>
      </div>
    </>
  );
};`;
};

export const generateGlassmorphismCode = (
  preset: GlassmorphismPreset,
  format: OutputFormat
): string => {
  if (format === "html-css") {
    return `<div class="glass-container">
  <h2>Glassmorphic Component</h2>
  <p>Your content here</p>
</div>

<style>
.glass-container {
  background: ${preset.backgroundColor};
  backdrop-filter: blur(${preset.backdropBlur}px);
  -webkit-backdrop-filter: blur(${preset.backdropBlur}px);
  border: 1px solid rgba(255, 255, 255, ${preset.borderOpacity});
  border-radius: 1rem;
  padding: 2rem;
}
</style>`;
  }

  if (format === "react-css") {
    return `import React from 'react';
import './Glass.css';

export const GlassComponent = () => {
  return (
    <div className="glass-container">
      <h2>Glassmorphic Component</h2>
      <p>Your content here</p>
    </div>
  );
};

/* Glass.css */
.glass-container {
  background: ${preset.backgroundColor};
  backdrop-filter: blur(${preset.backdropBlur}px);
  -webkit-backdrop-filter: blur(${preset.backdropBlur}px);
  border: 1px solid rgba(255, 255, 255, ${preset.borderOpacity});
  border-radius: 1rem;
  padding: 2rem;
}`;
  }

  return `import React from 'react';

export const GlassComponent = () => {
  return (
    <div
      className="rounded-2xl p-8 border"
      style={{
        background: "${preset.backgroundColor}",
        backdropFilter: "blur(${preset.backdropBlur}px)",
        WebkitBackdropFilter: "blur(${preset.backdropBlur}px)",
        borderColor: \`rgba(255, 255, 255, ${preset.borderOpacity})\`,
      }}
    >
      <h2 className="text-xl font-bold">Glassmorphic Component</h2>
      <p className="text-sm">Your content here</p>
    </div>
  );
};`;
};

export const generateNeumorphismCode = (
  preset: NeumorphismPreset,
  format: OutputFormat
): string => {
  const lightShadow = `${preset.distance}px ${preset.distance}px ${preset.blur}px ${preset.darkShadow}`;
  const darkShadow = `-${preset.distance}px -${preset.distance}px ${preset.blur}px ${preset.lightShadow}`;
  const boxShadow = `${lightShadow}, ${darkShadow}`;

  if (format === "html-css") {
    return `<div class="neu-container">
  <h2>Neumorphic Component</h2>
  <p>Your content here</p>
</div>

<style>
.neu-container {
  background: ${preset.backgroundColor};
  box-shadow: ${boxShadow};
  border-radius: 1rem;
  padding: 2rem;
}
</style>`;
  }

  if (format === "react-css") {
    return `import React from 'react';
import './Neumorphism.css';

export const NeumorphicComponent = () => {
  return (
    <div className="neu-container">
      <h2>Neumorphic Component</h2>
      <p>Your content here</p>
    </div>
  );
};

/* Neumorphism.css */
.neu-container {
  background: ${preset.backgroundColor};
  box-shadow: ${boxShadow};
  border-radius: 1rem;
  padding: 2rem;
}`;
  }

  return `import React from 'react';

export const NeumorphicComponent = () => {
  return (
    <div
      className="rounded-2xl p-8"
      style={{
        background: "${preset.backgroundColor}",
        boxShadow: "${boxShadow}",
      }}
    >
      <h2 className="text-xl font-bold">Neumorphic Component</h2>
      <p className="text-sm">Your content here</p>
    </div>
  );
};`;
};

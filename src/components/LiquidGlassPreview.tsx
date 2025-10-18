import React from "react";
import { LiquidGlassPreset } from "@/types/effect";
import { User, Bell, ArrowUpLeft } from "lucide-react";

interface LiquidGlassPreviewProps {
  preset: LiquidGlassPreset;
  showText?: boolean;
  onBackToPresets?: () => void;
}

export const LiquidGlassPreview = ({
  preset,
  showText = true,
  onBackToPresets,
}: LiquidGlassPreviewProps) => {
  const filterId = `glass-distortion-${preset.id}`;

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Floating back-to-presets button */}
      {onBackToPresets && (
        <button
          onClick={onBackToPresets}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg glass-button"
          title="Back to Presets"
        >
          <ArrowUpLeft className="w-4 h-4 text-muted-foreground" />
        </button>
      )}

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${preset.baseFrequency} ${preset.baseFrequency}`}
              numOctaves={preset.numOctaves}
              seed="92"
              result="noise"
            />
            <feGaussianBlur
              in="noise"
              stdDeviation={preset.blurAmount}
              result="blurred"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale={preset.displacementScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative rounded-2xl p-8 max-w-md w-full backdrop-blur-xl border"
        style={{
          filter: `url(#${filterId})`,
          backgroundColor: preset.backgroundColor,
          borderColor: preset.glassColor,
        }}
      >
        {showText && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">UX Designer</p>
                </div>
              </div>
              <Bell className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                Styled Component
              </h2>
              <p className="text-sm text-muted-foreground">
                This is a sample of how your content might look inside.
              </p>
              <button className="w-full py-3 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors border border-primary/20">
                Get Started
              </button>
              <p className="text-xs text-center text-muted-foreground">
                Tip: Try adjusting the sliders and colors to see real-time
                changes!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

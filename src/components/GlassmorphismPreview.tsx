import React from "react";
import { GlassmorphismPreset } from "@/types/effect";
import { Wifi, Sun, Moon, ArrowUpLeft } from "lucide-react";

interface GlassmorphismPreviewProps {
  preset: GlassmorphismPreset;
  showText?: boolean;
  onBackToPresets?: () => void;
}

export const GlassmorphismPreview = ({
  preset,
  showText = true,
  onBackToPresets,
}: GlassmorphismPreviewProps) => {
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

      <div
        className="relative rounded-2xl p-8 max-w-md w-full border"
        style={{
          backgroundColor: preset.backgroundColor,
          backdropFilter: `blur(${preset.backdropBlur}px)`,
          WebkitBackdropFilter: `blur(${preset.backdropBlur}px)`,
          borderColor: `rgba(255, 255, 255, ${preset.borderOpacity})`,
        }}
      >
        {showText && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">
              Settings Panel
            </h2>

            <div
              className="flex items-center justify-center gap-4 p-4 rounded-xl border"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${
                  preset.backgroundOpacity * 0.5
                })`,
                borderColor: `rgba(255, 255, 255, ${
                  preset.borderOpacity * 0.8
                })`,
              }}
            >
              <button
                className="p-3 rounded-lg border transition-all"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${preset.backgroundOpacity})`,
                  borderColor: `rgba(255, 255, 255, ${preset.borderOpacity})`,
                }}
              >
                <Sun className="w-5 h-5 text-foreground" />
              </button>
              <button
                className="p-3 rounded-lg border transition-all"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${
                    preset.backgroundOpacity * 0.5
                  })`,
                  borderColor: `rgba(255, 255, 255, ${
                    preset.borderOpacity * 0.6
                  })`,
                }}
              >
                <Moon className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div
              className="flex items-center justify-between p-4 rounded-xl border"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${
                  preset.backgroundOpacity * 0.5
                })`,
                borderColor: `rgba(255, 255, 255, ${
                  preset.borderOpacity * 0.8
                })`,
              }}
            >
              <div className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Wi-Fi Network
                </span>
              </div>
              <div
                className="w-12 h-6 rounded-full border"
                style={{
                  backgroundColor: `rgba(99, 102, 241, ${preset.backgroundOpacity})`,
                  borderColor: `rgba(255, 255, 255, ${preset.borderOpacity})`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

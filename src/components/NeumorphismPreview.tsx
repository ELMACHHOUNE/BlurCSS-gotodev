import React from "react";
import { NeumorphismPreset } from "@/types/effect";
import { Wifi, Sun, Moon, ArrowUpLeft } from "lucide-react";

interface NeumorphismPreviewProps {
  preset: NeumorphismPreset;
  showText?: boolean;
  onBackToPresets?: () => void;
}

export const NeumorphismPreview = ({
  preset,
  showText = true,
  onBackToPresets,
}: NeumorphismPreviewProps) => {
  const getShadowStyle = (inset = false) => {
    const lightShadow = `${inset ? "inset " : ""}${preset.distance}px ${
      preset.distance
    }px ${preset.blur}px ${preset.lightShadow}`;
    const darkShadow = `${inset ? "inset " : ""}-${preset.distance}px -${
      preset.distance
    }px ${preset.blur}px ${preset.darkShadow}`;
    return `${lightShadow}, ${darkShadow}`;
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center p-8"
      style={{ backgroundColor: preset.backgroundColor }}
    >
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
        className="relative rounded-2xl p-8 max-w-md w-full"
        style={{
          backgroundColor: preset.backgroundColor,
          boxShadow: getShadowStyle(),
        }}
      >
        {showText && (
          <div className="space-y-6">
            <h2
              className="text-2xl font-bold text-center"
              style={{
                color:
                  preset.backgroundColor === "#e0e5ec" ? "#2d3748" : "#f1f5f9",
              }}
            >
              Settings Panel
            </h2>

            <div
              className="flex items-center justify-center gap-4 p-4 rounded-xl"
              style={{
                backgroundColor: preset.backgroundColor,
                boxShadow: getShadowStyle(),
              }}
            >
              <button
                className="p-3 rounded-lg transition-all"
                style={{
                  backgroundColor: preset.backgroundColor,
                  boxShadow: getShadowStyle(),
                }}
              >
                <Sun
                  className="w-5 h-5"
                  style={{
                    color:
                      preset.backgroundColor === "#e0e5ec"
                        ? "#2d3748"
                        : "#f1f5f9",
                  }}
                />
              </button>
              <button
                className="p-3 rounded-lg transition-all"
                style={{
                  backgroundColor: preset.backgroundColor,
                  boxShadow: getShadowStyle(true),
                }}
              >
                <Moon
                  className="w-5 h-5"
                  style={{
                    color:
                      preset.backgroundColor === "#e0e5ec"
                        ? "#64748b"
                        : "#94a3b8",
                  }}
                />
              </button>
            </div>

            <div
              className="flex items-center justify-between p-4 rounded-xl"
              style={{
                backgroundColor: preset.backgroundColor,
                boxShadow: getShadowStyle(),
              }}
            >
              <div className="flex items-center gap-3">
                <Wifi
                  className="w-5 h-5"
                  style={{
                    color:
                      preset.backgroundColor === "#e0e5ec"
                        ? "#2d3748"
                        : "#f1f5f9",
                  }}
                />
                <span
                  className="text-sm font-medium"
                  style={{
                    color:
                      preset.backgroundColor === "#e0e5ec"
                        ? "#2d3748"
                        : "#f1f5f9",
                  }}
                >
                  Wi-Fi Network
                </span>
              </div>
              <div
                className="w-12 h-6 rounded-full"
                style={{
                  backgroundColor: preset.backgroundColor,
                  boxShadow: getShadowStyle(true),
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import {
  LiquidGlassPreset,
  GlassmorphismPreset,
  NeumorphismPreset,
  EffectType,
} from "@/types/effect";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RotateCcw } from "lucide-react";

interface AdvancedControlsProps {
  effectType: EffectType;
  preset: LiquidGlassPreset | GlassmorphismPreset | NeumorphismPreset;
  onUpdate: (
    preset: LiquidGlassPreset | GlassmorphismPreset | NeumorphismPreset
  ) => void;
  onReset: () => void;
}

export const AdvancedControls = ({
  effectType,
  preset,
  onUpdate,
  onReset,
}: AdvancedControlsProps) => {
  if (effectType === "glassmorphism") {
    const p = preset as GlassmorphismPreset;
    return (
      <div className="p-4 md:p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="text-sm">
            <span className="block mb-1 text-muted-foreground">
              Backdrop Blur
            </span>
            <input
              type="range"
              min={0}
              max={40}
              value={p.backdropBlur}
              onChange={(e) =>
                onUpdate({ ...p, backdropBlur: Number(e.target.value) })
              }
              className="w-full"
            />
          </label>
          <label className="text-sm">
            <span className="block mb-1 text-muted-foreground">
              Background Color
            </span>
            <input
              type="color"
              value={p.backgroundColor}
              onChange={(e) =>
                onUpdate({ ...p, backgroundColor: e.target.value })
              }
              className="h-9 w-16 p-0 bg-transparent border border-glass-border rounded"
            />
          </label>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="glass-button px-3 py-1.5 text-xs"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  if (effectType === "neumorphism") {
    const p = preset as NeumorphismPreset;
    return (
      <div className="p-4 md:p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="text-sm">
            <span className="block mb-1 text-muted-foreground">Distance</span>
            <input
              type="range"
              min={0}
              max={30}
              value={p.distance}
              onChange={(e) =>
                onUpdate({ ...p, distance: Number(e.target.value) })
              }
              className="w-full"
            />
          </label>
          <label className="text-sm">
            <span className="block mb-1 text-muted-foreground">Blur</span>
            <input
              type="range"
              min={0}
              max={40}
              value={p.blur}
              onChange={(e) => onUpdate({ ...p, blur: Number(e.target.value) })}
              className="w-full"
            />
          </label>
          <label className="text-sm">
            <span className="block mb-1 text-muted-foreground">Background</span>
            <input
              type="color"
              value={p.backgroundColor}
              onChange={(e) =>
                onUpdate({ ...p, backgroundColor: e.target.value })
              }
              className="h-9 w-16 p-0 bg-transparent border border-glass-border rounded"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="text-sm">
            <span className="block mb-1 text-muted-foreground">
              Dark Shadow
            </span>
            <input
              type="color"
              value={p.darkShadow}
              onChange={(e) => onUpdate({ ...p, darkShadow: e.target.value })}
              className="h-9 w-16 p-0 bg-transparent border border-glass-border rounded"
            />
          </label>
          <label className="text-sm">
            <span className="block mb-1 text-muted-foreground">
              Light Shadow
            </span>
            <input
              type="color"
              value={p.lightShadow}
              onChange={(e) => onUpdate({ ...p, lightShadow: e.target.value })}
              className="h-9 w-16 p-0 bg-transparent border border-glass-border rounded"
            />
          </label>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="glass-button px-3 py-1.5 text-xs"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  // Default: Liquid Glass advanced controls (existing UI)
  const updateParam = (key: keyof LiquidGlassPreset, value: number) => {
    onUpdate({ ...preset, [key]: value });
  };

  return (
    <div className="space-y-6 p-6 bg-secondary/30 rounded-xl border border-glass-border">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          Advanced Controls
        </h3>
        <button
          onClick={onReset}
          className="p-2 rounded-lg glass-button"
          title="Reset to preset defaults"
        >
          <RotateCcw className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="space-y-5">
        {/* Base Frequency */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-medium text-foreground">
              Base Frequency
            </Label>
            <span className="text-xs text-muted-foreground font-mono">
              {preset.baseFrequency.toFixed(3)}
            </span>
          </div>
          <Slider
            value={[preset.baseFrequency * 1000]}
            onValueChange={([v]) => updateParam("baseFrequency", v / 1000)}
            min={10}
            max={50}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Controls the size of distortion patterns
          </p>
        </div>

        {/* Octaves */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-medium text-foreground">
              Octaves
            </Label>
            <span className="text-xs text-muted-foreground font-mono">
              {preset.numOctaves}
            </span>
          </div>
          <Slider
            value={[preset.numOctaves]}
            onValueChange={([v]) => updateParam("numOctaves", v)}
            min={1}
            max={8}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Number of noise layers (more = more detail)
          </p>
        </div>

        {/* Blur Amount */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-medium text-foreground">
              Blur Amount
            </Label>
            <span className="text-xs text-muted-foreground font-mono">
              {preset.blurAmount.toFixed(1)}
            </span>
          </div>
          <Slider
            value={[preset.blurAmount * 10]}
            onValueChange={([v]) => updateParam("blurAmount", v / 10)}
            min={5}
            max={50}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Softness of the distortion effect
          </p>
        </div>

        {/* Displacement Scale */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-medium text-foreground">
              Displacement Scale
            </Label>
            <span className="text-xs text-muted-foreground font-mono">
              {preset.displacementScale}
            </span>
          </div>
          <Slider
            value={[preset.displacementScale]}
            onValueChange={([v]) => updateParam("displacementScale", v)}
            min={20}
            max={100}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Intensity of the liquid glass effect
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-glass-border">
        <p className="text-xs text-muted-foreground italic">
          💡 Tip: Adjust sliders to create your own unique liquid glass effect
        </p>
      </div>
    </div>
  );
};

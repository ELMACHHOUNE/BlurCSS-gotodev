import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sliders, Search } from "lucide-react";
import { PresetCard } from "./PresetCard";
import {
  liquidGlassPresets,
  glassmorphismPresets,
  neumorphismPresets,
} from "@/data/presets";
import {
  LiquidGlassPreset,
  GlassmorphismPreset,
  NeumorphismPreset,
  EffectType,
} from "@/types/effect";
import { Input } from "@/components/ui/input";

interface ControlsPanelProps {
  effectType: EffectType;
  setEffectType: (type: EffectType) => void;
  selectedLiquidGlass: LiquidGlassPreset;
  selectedGlassmorphism: GlassmorphismPreset;
  selectedNeumorphism: NeumorphismPreset;
  onLiquidGlassChange: (preset: LiquidGlassPreset) => void;
  onGlassmorphismChange: (preset: GlassmorphismPreset) => void;
  onNeumorphismChange: (preset: NeumorphismPreset) => void;
  onLiquidGlassUpdate: (preset: LiquidGlassPreset) => void;
  showAdvanced: boolean;
  onToggleAdvanced: () => void;
}

export const ControlsPanel = ({
  effectType,
  setEffectType,
  selectedLiquidGlass,
  selectedGlassmorphism,
  selectedNeumorphism,
  onLiquidGlassChange,
  onGlassmorphismChange,
  onNeumorphismChange,
  onLiquidGlassUpdate,
  showAdvanced,
  onToggleAdvanced,
}: ControlsPanelProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const allPresets =
    effectType === "liquid-glass"
      ? liquidGlassPresets
      : effectType === "glassmorphism"
      ? glassmorphismPresets
      : neumorphismPresets;

  const filteredPresets = allPresets.filter((preset) =>
    preset.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePresetClick = (preset: any) => {
    if (effectType === "liquid-glass") {
      onLiquidGlassChange(preset as LiquidGlassPreset);
    } else if (effectType === "glassmorphism") {
      onGlassmorphismChange(preset as GlassmorphismPreset);
    } else {
      onNeumorphismChange(preset as NeumorphismPreset);
    }
    // Smooth-scroll to preview panel
    document
      .getElementById("preview-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isPresetSelected = (preset: any) => {
    if (effectType === "liquid-glass") {
      return selectedLiquidGlass.id === preset.id;
    } else if (effectType === "glassmorphism") {
      return selectedGlassmorphism.id === preset.id;
    } else {
      return selectedNeumorphism.id === preset.id;
    }
  };

  return (
    <div className="flex min-h-0 flex-col overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-0 z-10 p-4 md:p-6 border-b border-glass-border flex items-center justify-between bg-card/60 backdrop-blur">
        <div className="flex items-center gap-3">
          <Sliders className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Controls</h2>
        </div>
        <button
          onClick={onToggleAdvanced}
          className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
            showAdvanced
              ? "bg-primary/20 text-primary border border-primary/30"
              : "glass-button text-foreground"
          }`}
        >
          {showAdvanced ? "Hide Advanced" : "Show Advanced"}
        </button>
      </div>

      {/* Effect Type Tabs */}
      <div className="p-4 md:p-6 border-b border-glass-border">
        <Tabs
          value={effectType}
          onValueChange={(v) => setEffectType(v as EffectType)}
        >
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            <TabsTrigger value="liquid-glass" className="relative">
              <span className="text-xs">Liquid Glass</span>
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded">
                NEW
              </span>
            </TabsTrigger>
            <TabsTrigger value="glassmorphism">
              <span className="text-xs">Glassmorphism</span>
            </TabsTrigger>
            <TabsTrigger value="neumorphism">
              <span className="text-xs">Neumorphism</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Browser Warning */}
      <div className="p-4 mx-4 md:mx-6 mt-4 bg-accent/10 border border-accent/30 rounded-lg">
        <div className="flex items-start gap-2">
          <div className="w-1 h-4 bg-accent rounded-full mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This feature is experimental and currently works only on
            Chromium-based browsers and desktop devices. Firefox and Safari are
            not supported. For a similar effect without distortion, consider
            using "Glassmorphism."
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 md:px-6 pt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search presets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary/50 border-glass-border"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {filteredPresets.length} of {allPresets.length} presets
        </p>
      </div>

      {/* Presets */}
      <div id="presets-section" className="flex-1 p-4 md:p-6">
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            PRESETS ({filteredPresets.length})
          </h3>
          <div className="grid grid-cols-6 gap-1 md:gap-2">
            {filteredPresets.map((preset: any) => (
              <PresetCard
                key={preset.id}
                name={preset.name}
                isSelected={isPresetSelected(preset)}
                onClick={() => handlePresetClick(preset)}
                preview={
                  effectType === "liquid-glass" ? (
                    <div
                      className="w-full aspect-square rounded-md overflow-hidden transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${preset.glassColor}, ${preset.backgroundColor})`,
                      }}
                    />
                  ) : effectType === "glassmorphism" ? (
                    <div
                      className="w-full aspect-square rounded-md overflow-hidden transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: preset.backgroundColor,
                        backdropFilter: `blur(${preset.backdropBlur}px)`,
                      }}
                    />
                  ) : (
                    <div
                      className="w-full aspect-square rounded-md overflow-hidden transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: preset.backgroundColor,
                        boxShadow: `${preset.distance}px ${preset.distance}px ${preset.blur}px ${preset.darkShadow}, -${preset.distance}px -${preset.distance}px ${preset.blur}px ${preset.lightShadow}`,
                      }}
                    />
                  )
                }
              />
            ))}
          </div>

          {filteredPresets.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">No presets found</p>
              <p className="text-xs text-muted-foreground mt-1">
                Try a different search term
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

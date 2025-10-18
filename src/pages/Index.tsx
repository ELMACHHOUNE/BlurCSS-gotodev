import { useState } from "react";
import { ControlsPanel } from "@/components/ControlsPanel";
import { PreviewPanel } from "@/components/PreviewPanel";
import { AdvancedControls } from "@/components/AdvancedControls";
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

const Index = () => {
  const [effectType, setEffectType] = useState<EffectType>("neumorphism");

  const [selectedLiquidGlass, setSelectedLiquidGlass] =
    useState<LiquidGlassPreset>(liquidGlassPresets[0]);
  const [customLiquidGlass, setCustomLiquidGlass] = useState<LiquidGlassPreset>(
    liquidGlassPresets[0]
  );

  const [selectedGlassmorphism, setSelectedGlassmorphism] =
    useState<GlassmorphismPreset>(glassmorphismPresets[0]);
  const [selectedNeumorphism, setSelectedNeumorphism] =
    useState<NeumorphismPreset>(neumorphismPresets[0]);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleLiquidGlassChange = (preset: LiquidGlassPreset) => {
    setSelectedLiquidGlass(preset);
    setCustomLiquidGlass(preset);
  };

  const handleLiquidGlassUpdate = (preset: LiquidGlassPreset) => {
    setCustomLiquidGlass(preset);
  };

  const handleGlassmorphismUpdate = (preset: GlassmorphismPreset) => {
    setSelectedGlassmorphism(preset);
  };

  const handleNeumorphismUpdate = (preset: NeumorphismPreset) => {
    setSelectedNeumorphism(preset);
  };

  const handleReset = () => {
    if (effectType === "liquid-glass") {
      const original = liquidGlassPresets.find(
        (p) => p.id === customLiquidGlass.id
      );
      if (original) setCustomLiquidGlass(original);
    } else if (effectType === "glassmorphism") {
      const original = glassmorphismPresets.find(
        (p) => p.id === selectedGlassmorphism.id
      );
      if (original) setSelectedGlassmorphism(original);
    } else {
      const original = neumorphismPresets.find(
        (p) => p.id === selectedNeumorphism.id
      );
      if (original) setSelectedNeumorphism(original);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative border-b border-glass-border bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Build modern glass, blur, and soft-shadow effects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Live preview, instant CSS, and fine-grained controls for Liquid
            Glass, Glassmorphism, and Neumorphism.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Liquid Glass
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/90 border border-glass-border">
              Glassmorphism
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/90 border border-glass-border">
              Neumorphism
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <a
              href="#"
              className="px-5 py-2.5 rounded-lg glass-button text-sm font-semibold"
            >
              Start building
            </a>
            <a
              href="https://www.producthunt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-glass-border/80 bg-card/50 text-sm font-medium text-foreground hover:bg-card/70 transition"
            >
              View launch
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Tweak parameters and copy CSS in seconds.
          </p>
        </div>
      </section>

      {/* Mobile Preview (mobile only) */}
      <section className="block md:hidden container mx-auto px-6 py-6">
        <div className="glass-panel overflow-hidden">
          <PreviewPanel
            effectType={effectType}
            liquidGlassPreset={customLiquidGlass}
            glassmorphismPreset={selectedGlassmorphism}
            neumorphismPreset={selectedNeumorphism}
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Preview Panel (desktop only) */}
        <section className="hidden md:block container mx-auto px-6 py-8">
          <div className="glass-panel overflow-hidden max-w-5xl mx-auto">
            <PreviewPanel
              effectType={effectType}
              liquidGlassPreset={customLiquidGlass}
              glassmorphismPreset={selectedGlassmorphism}
              neumorphismPreset={selectedNeumorphism}
            />
          </div>

          {/* Advanced Controls after Preview Panel (desktop only) */}
          {showAdvanced && (
            <div className="glass-panel overflow-hidden max-w-5xl mx-auto mt-6">
              <AdvancedControls
                effectType={effectType}
                preset={
                  effectType === "liquid-glass"
                    ? customLiquidGlass
                    : effectType === "glassmorphism"
                    ? selectedGlassmorphism
                    : selectedNeumorphism
                }
                onUpdate={
                  effectType === "liquid-glass"
                    ? handleLiquidGlassUpdate
                    : effectType === "glassmorphism"
                    ? handleGlassmorphismUpdate
                    : handleNeumorphismUpdate
                }
                onReset={handleReset}
              />
            </div>
          )}
        </section>

        {/* Controls Panel */}
        <section className="md:container md:mx-auto md:px-6 md:pb-12">
          <div className="glass-panel w-full flex flex-col md:overflow-visible md:h-auto md:mx-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] bg-card/70 md:bg-transparent">
            <ControlsPanel
              effectType={effectType}
              setEffectType={setEffectType}
              selectedLiquidGlass={customLiquidGlass}
              selectedGlassmorphism={selectedGlassmorphism}
              selectedNeumorphism={selectedNeumorphism}
              onLiquidGlassChange={handleLiquidGlassChange}
              onGlassmorphismChange={setSelectedGlassmorphism}
              onNeumorphismChange={setSelectedNeumorphism}
              onLiquidGlassUpdate={handleLiquidGlassUpdate}
              showAdvanced={showAdvanced}
              onToggleAdvanced={() => setShowAdvanced((v) => !v)}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;

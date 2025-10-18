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
      <section className="relative isolate overflow-hidden border-b border-glass-border">
        {/* Decorative background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>

        <div className="container relative mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border/60 bg-card/60 text-xs font-medium backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Refreshed UI • v1
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Design crisp glass, blur, and soft shadows
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              with zero CSS guesswork
            </span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Craft Liquid Glass, Glassmorphism, and Neumorphism with live preview
            and production‑ready CSS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/ELMACHHOUNE/BlurCSS-gotodev"
              className="px-5 py-2.5 rounded-lg glass-button text-sm font-semibold"
              target="_blank"
            >
              Start building
            </a>
            <a
              href="#controls"
              className="px-5 py-2.5 rounded-lg border border-glass-border/80 bg-card/60 hover:bg-card text-sm font-semibold"
            >
              Explore presets
            </a>
          </div>

          <div className="mt-8 inline-flex items-center rounded-xl border border-glass-border bg-card/60 backdrop-blur-md overflow-hidden">
            <span className="px-4 py-2 text-xs font-medium bg-primary/10 text-primary border-r border-glass-border">
              Liquid Glass
            </span>
            <span className="px-4 py-2 text-xs font-medium text-foreground/80 border-r border-glass-border/80">
              Glassmorphism
            </span>
            <span className="px-4 py-2 text-xs font-medium text-foreground/80">
              Neumorphism
            </span>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No signup. Tweak parameters and copy CSS in seconds.
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
        <section
          id="controls"
          className="md:container md:mx-auto md:px-6 md:pb-12"
        >
          <div className="glass-panel w-full flex flex-col md:overflow-visible md:h-auto md:mx-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] bg-card/70 md:bg-transparent">
            {/* Advanced Controls on mobile (before presets inside Controls Panel) */}
            {showAdvanced && (
              <div className="md:hidden mb-4">
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

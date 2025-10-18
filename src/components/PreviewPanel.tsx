import { useState, useRef } from "react";
import {
  Eye,
  Code2,
  Share2,
  Download,
  Type,
  Image as ImageIcon,
} from "lucide-react";
import { LiquidGlassPreview } from "./LiquidGlassPreview";
import { GlassmorphismPreview } from "./GlassmorphismPreview";
import { NeumorphismPreview } from "./NeumorphismPreview";
import { CodeOutput } from "./CodeOutput";
import {
  LiquidGlassPreset,
  GlassmorphismPreset,
  NeumorphismPreset,
  OutputFormat,
  EffectType,
} from "@/types/effect";
import {
  generateLiquidGlassCode,
  generateGlassmorphismCode,
  generateNeumorphismCode,
} from "@/utils/codeGenerator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PreviewPanelProps {
  effectType: EffectType;
  liquidGlassPreset: LiquidGlassPreset;
  glassmorphismPreset: GlassmorphismPreset;
  neumorphismPreset: NeumorphismPreset;
}

export const PreviewPanel = ({
  effectType,
  liquidGlassPreset,
  glassmorphismPreset,
  neumorphismPreset,
}: PreviewPanelProps) => {
  const [view, setView] = useState<"preview" | "code">("preview");
  const [outputFormat, setOutputFormat] =
    useState<OutputFormat>("react-tailwind");
  const [showText, setShowText] = useState(true);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const code =
    effectType === "liquid-glass"
      ? generateLiquidGlassCode(liquidGlassPreset, outputFormat)
      : effectType === "glassmorphism"
      ? generateGlassmorphismCode(glassmorphismPreset, outputFormat)
      : generateNeumorphismCode(neumorphismPreset, outputFormat);

  const formatLabels = {
    "react-tailwind": "React + Tailwind",
    "react-css": "React + CSS",
    "html-css": "HTML + CSS",
  };

  // Share to WhatsApp with a prefilled message containing the code
  const handleShare = async () => {
    const message = [
      `Blur CSS Effect (${formatLabels[outputFormat]} - ${effectType})`,
      "",
      code,
    ].join("\n");
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(message);
      } catch {
        // no-op
      }
    }
  };

  // Download current code with a sensible filename/extension
  const handleDownload = () => {
    const ext = outputFormat === "html-css" ? "html" : "tsx";
    const filename = `${effectType}-${outputFormat}.${ext}`;
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // Open file picker
  const handleUploadClick = () => fileInputRef.current?.click();

  // Load file as data URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setBgImage(reader.result as string);
    reader.readAsDataURL(file);
    // allow selecting the same file again later
    e.target.value = "";
  };

  const scrollToPresets = () =>
    document
      .getElementById("presets-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div id="preview-panel" className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-glass-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("preview")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              view === "preview"
                ? "bg-primary/20 text-primary border border-primary/30"
                : "glass-button text-muted-foreground"
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => setView("code")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              view === "code"
                ? "bg-primary/20 text-primary border border-primary/30"
                : "glass-button text-muted-foreground"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Code
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-lg glass-button"
            title="Share on WhatsApp"
          >
            <Share2 className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg glass-button"
            title="Download"
          >
            <Download className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            onClick={handleUploadClick}
            className="p-2 rounded-lg glass-button"
            title="Upload Background"
          >
            <ImageIcon className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            onClick={() => setShowText(!showText)}
            className={`p-2 rounded-lg ${
              showText
                ? "bg-primary/20 border border-primary/30"
                : "glass-button"
            }`}
            title="Toggle Text"
          >
            <Type
              className={`w-4 h-4 ${
                showText ? "text-primary" : "text-muted-foreground"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="relative h-full">
          {bgImage && (
            <div className="absolute inset-0 -z-10">
              <img
                src={bgImage}
                alt="Custom background"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {view === "preview" ? (
            effectType === "liquid-glass" ? (
              <LiquidGlassPreview
                preset={liquidGlassPreset}
                showText={showText}
                onBackToPresets={scrollToPresets}
              />
            ) : effectType === "glassmorphism" ? (
              <div className="relative rounded-2xl overflow-hidden">
                {/* Background layer: gradient if no custom image */}
                {!bgImage && (
                  <div className="absolute inset-0 -z-10 opacity-80">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#8b5cf6,transparent_40%),radial-gradient(circle_at_80%_30%,#ec4899,transparent_40%),radial-gradient(circle_at_50%_80%,#10b981,transparent_40%)]" />
                  </div>
                )}

                {/* Frosted element with dynamic blur */}
                <div
                  className="rounded-2xl border border-glass-border bg-card/40"
                  style={{
                    backdropFilter: `blur(${glassmorphismPreset.backdropBlur}px)`,
                    WebkitBackdropFilter: `blur(${glassmorphismPreset.backdropBlur}px)`,
                  }}
                >
                  <GlassmorphismPreview
                    preset={glassmorphismPreset}
                    showText={showText}
                    onBackToPresets={scrollToPresets}
                  />
                </div>
              </div>
            ) : (
              <NeumorphismPreview
                preset={neumorphismPreset}
                showText={showText}
                onBackToPresets={scrollToPresets}
              />
            )
          ) : (
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Output Format
                </label>
                <Tabs
                  value={outputFormat}
                  onValueChange={(v) => setOutputFormat(v as OutputFormat)}
                >
                  <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
                    <TabsTrigger value="react-tailwind" className="text-xs">
                      React + Tailwind
                    </TabsTrigger>
                    <TabsTrigger value="react-css" className="text-xs">
                      React + CSS
                    </TabsTrigger>
                    <TabsTrigger value="html-css" className="text-xs">
                      HTML + CSS
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <CodeOutput code={code} title={formatLabels[outputFormat]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";

interface PresetCardProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
  preview?: React.ReactNode;
}

export const PresetCard = ({ name, isSelected, onClick, preview }: PresetCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative group w-full aspect-square rounded-xl overflow-hidden transition-all",
        "border-2",
        isSelected
          ? "border-primary shadow-glow"
          : "border-glass-border hover:border-primary/50"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm">
        {preview}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-card/80 backdrop-blur-sm border-t border-glass-border">
        <p className="text-xs font-medium text-foreground truncate">{name}</p>
      </div>
    </button>
  );
};

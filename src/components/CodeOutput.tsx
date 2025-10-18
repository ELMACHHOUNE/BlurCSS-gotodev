import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CodeOutputProps {
  code: string;
  title: string;
}

export const CodeOutput = ({ code, title }: CodeOutputProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">
            Complete implementation - just copy and paste
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-lg glass-button text-sm font-medium text-foreground"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy All
            </>
          )}
        </button>
      </div>
      <div className="relative">
        <pre className="bg-secondary/50 backdrop-blur-sm border border-glass-border rounded-lg p-6 overflow-x-auto text-sm">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  );
};

import { Github, Linkedin, Globe } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto backdrop-blur bg-card/70 border-t border-glass-border">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} Blur CSS. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ELMACHHOUNE/BlurCSS-gotodev"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button p-2 rounded-lg text-sm font-medium text-foreground"
            aria-label="GitHub repository"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-el-machhoune"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button p-2 rounded-lg text-sm font-medium text-foreground"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://gotodev.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button p-2 rounded-lg text-sm font-medium text-foreground"
            aria-label="GotoDev website"
          >
            <Globe className="h-4 w-4" />
            <span className="sr-only">GotoDev</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

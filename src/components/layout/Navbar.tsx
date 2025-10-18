import { Github, Linkedin, Globe } from "lucide-react";
import logoUrl from "/blurcss.webp";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-card/70 border-b border-glass-border">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Blur CSS logo"
              className="h-8 w-8 rounded-xl object-cover shadow-inner shadow-primary/30"
            />
            <div className="leading-tight">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Blur CSS
              </span>
            </div>
          </a>

          <nav className="flex items-center gap-2">
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
              href="https://www.linkedin.com/company/gotodev-ma/"
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
          </nav>
        </div>
      </div>
    </header>
  );
};

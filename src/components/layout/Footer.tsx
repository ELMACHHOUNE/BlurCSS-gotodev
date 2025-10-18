import { Github, Linkedin, Globe, Image, Wrench, Palette } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto backdrop-blur bg-card/70 border-t border-glass-border">
      <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* Social: left */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
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
        </div>

        {/* Center: copyright */}
        <div>
          <p className="text-sm text-muted-foreground text-center">
            © {year} GoToDev. All rights reserved.
          </p>
        </div>

        {/* Websites: right */}
        <div className="flex items-center gap-2 justify-center md:justify-end">
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
          <a
            href="http://imgconvert.gotodev.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button p-2 rounded-lg text-sm font-medium text-foreground"
            aria-label="GotoDev ImgConvert"
          >
            <Image className="h-4 w-4" />
            <span className="sr-only">ImgConvert</span>
          </a>
          <a
            href="https://toolkit-hub.gotodev.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button p-2 rounded-lg text-sm font-medium text-foreground"
            aria-label="GotoDev Toolkit Hub"
          >
            <Wrench className="h-4 w-4" />
            <span className="sr-only">Toolkit Hub</span>
          </a>
          <a
            href="http://background.gotodev.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button p-2 rounded-lg text-sm font-medium text-foreground"
            aria-label="GotoDev Background"
          >
            <Palette className="h-4 w-4" />
            <span className="sr-only">Background</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

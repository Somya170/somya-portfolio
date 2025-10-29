import { useEffect, useState } from "react";

const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [asciiFrame, setAsciiFrame] = useState(0);

  const asciiArt = [
    `
   ███████╗     ██╗
   ██╔════╝     ██║
   ███████╗     ██║
   ╚════██║██   ██║
   ███████║╚█████╔╝
   ╚══════╝ ╚════╝ 
    `,
    `
   ███████╗     ██╗
   ██╔════╝     ██║
   ███████╗█████╗██║
   ╚════██║╚════╝██║
   ███████║     ╚█╗
   ╚══════╝      ╚╝
    `,
    `
   ███████╗     ██╗
   ██╔════╝█████╗██║
   ███████╗╚════╝██║
   ╚════██║     ██║
   ███████║     ██║
   ╚══════╝     ╚═╝
    `,
  ];

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setAsciiFrame((prev) => (prev + 1) % asciiArt.length);
    }, 300);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(frameInterval);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Terminal Window */}
      <div className="relative w-full max-w-2xl mx-4">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-card rounded-t-lg border-b border-primary/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-primary font-mono">portfolio.sh</span>
        </div>
        
        {/* Terminal Body */}
        <div className="bg-card p-8 rounded-b-lg border border-primary/20 border-t-0">
          <div className="font-mono text-xs sm:text-sm md:text-base">
            <div className="text-muted-foreground mb-4">
              <span className="text-primary">somya@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-foreground">./initialize_portfolio.sh</span>
            </div>
            
            <pre className="text-primary leading-relaxed whitespace-pre animate-pulse">
              {asciiArt[asciiFrame]}
            </pre>
            
            <div className="mt-4 space-y-1">
              <div className="text-muted-foreground">
                <span className="text-primary">→</span> Loading profile...
                <span className="animate-pulse">▋</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">→</span> Initializing portfolio modules...
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">→</span> Building experience...
              </div>
            </div>
          </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
          <div className="absolute inset-0 bg-primary"></div>
        </div>
      </div>
      
      {/* Loading Progress */}
      <div className="mt-8 w-64">
        <div className="h-1 bg-card rounded-full overflow-hidden border border-border">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

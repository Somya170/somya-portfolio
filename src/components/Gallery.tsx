import { useEffect, useRef } from "react";

// Import activity images - you can replace these with actual activity photos
import activity1 from "@/assets/achievement-ibm.jpg";
import activity2 from "@/assets/achievement-sih.jpg";
import activity3 from "@/assets/achievement-iima.jpg";
import activity4 from "@/assets/IEEE World.jpg";
import activity5 from "@/assets/achievement-iit.jpg";
import activity6 from "@/assets/Bowling.jpg";
import activity7 from "@/assets/project-aqi.jpg";
import activity8 from "@/assets/project-canvas.jpg";


const activities = [
  { image: activity1, title: "IBM TechXchange 2025" },
  { image: activity2, title: "Internal SIH Hackathon Winner" },
  { image: activity3, title: "IIMA Presentation" },
  { image: activity4, title: "IEEE WorldSUAS" },
  { image: activity5, title: "IIT Indore Program" },
  { image: activity6, title: "Bowling Competition" },
  { image: activity7, title: "AI Project Demo" },
  { image: activity8, title: "Computer Vision Workshop" },
];

const Gallery = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate content for seamless loop
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      scroller.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 overflow-hidden bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> <span className="text-foreground">gallery</span> <span className="text-accent">--recent</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono ml-2"><span className="text-accent">→</span> A glimpse into my journey and latest achievements</p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content */}
          <div className="overflow-hidden py-4">
            <div
              ref={scrollerRef}
              className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
            >
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">→</span> Hover to pause • <span className="text-accent">∞</span> Continuous scroll
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

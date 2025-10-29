import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "AI powered BMS for EVs",
    status: "Under review at ACET-25",
    description: "Advanced battery management system using AI for electric vehicles",
    link: "https://example.com/ai-bms-paper", // 🔗 Add your real link here
  },
  {
    title: "Virtual Whiteboard Using Computer Vision",
    status: "Presented at CTDP (IIMA)",
    description: "Interactive whiteboard system leveraging computer vision technologies",
    link: "https://example.com/virtual-whiteboard",
  },
  {
    title: "AI-Driven EDA",
    status: "Published at IEEE Xplore",
    description: "Exploratory data analysis framework powered by artificial intelligence",
    link: "https://ieeexplore.ieee.org/document/11199227",
  },
  {
    title: "Clustering Students Based on Learning Styles",
    status: "Published at IEEE Xplore",
    description: "Machine learning approach to categorize students by learning preferences",
    link: "https://ieeexplore.ieee.org/document/11198965/",
  },
  {
    title: "Optimizing Document Processing",
    status: "Under review at ICACTMMS",
    description: "Efficient document processing pipeline using advanced algorithms",
    link: "https://example.com/document-optimization",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-20 px-4 md:px-8 border-b border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> <span className="text-foreground">cat</span>{" "}
              <span className="text-accent">research.log</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono ml-2">
            <span className="text-accent">→</span> Contributing to the academic community through research
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 w-fit">
                      {pub.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pub.description}</p>
                </div>

                {/* External Link Icon */}
                <div className="flex-shrink-0">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;

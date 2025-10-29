import symbiosisLogo from "@/assets/symbiosis-logo.png";
import starnoldsLogo from "@/assets/starnolds-logo.png";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "Symbiosis University of Applied Sciences",
    degree: "B.Tech in Computer Science & Information Technology",
    duration: "2022 – 2026",
    grade: "CGPA: 8.12",
    logo: symbiosisLogo,
  },
  {
    institution: "St. Arnolds Hr. Sec. School",
    degree: "12th Grade - Higher Secondary",
    duration: "2022",
    grade: "72%",
    logo: starnoldsLogo,
  },
  {
    institution: "St. Arnolds Hr. Sec. School",
    degree: "10th Grade - Secondary",
    duration: "2020",
    grade: "71%",
    logo: starnoldsLogo,
  },
];


const Education = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 border-b border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> <span className="text-foreground">git log</span> <span className="text-accent">--education</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono ml-2"><span className="text-accent">→</span> Academic journey and qualifications</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 animate-slide-up ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 bg-card border-4 border-primary rounded-full z-10 flex items-center justify-center group-hover:border-accent transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:bg-accent transition-colors animate-glow-pulse"></div>
                </div>

                {/* Content Card */}
                <div className="flex items-start gap-3">
  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center overflow-hidden">
    <img
      src={edu.logo}
      alt={`${edu.institution} logo`}
      className="w-full h-full object-contain p-1"
      loading="lazy"
    />
  </div>
  <div className="flex-grow space-y-2">
    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
      {edu.institution}
    </h3>
    <p className="text-sm text-muted-foreground">{edu.degree}</p>
    <div className="flex flex-wrap gap-3 pt-2">
      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 font-medium">
        {edu.duration}
      </span>
      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-medium">
        {edu.grade}
      </span>
    </div>
  </div>
</div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

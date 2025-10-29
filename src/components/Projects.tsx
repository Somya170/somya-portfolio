import { ExternalLink } from "lucide-react";
import projectAQI from "@/assets/project-aqi.jpg";
import projectCanvas from "@/assets/project-canvas.jpg";
import projectScanner from "@/assets/project-scanner.jpg";
import projectSummarizer from "@/assets/project-summarizer.jpg";
import projectCrowd from "@/assets/project-crowd.jpg";
import projectJansetu from "@/assets/project-Jansetu.jpg";

const projects = [
  {
    title: "AQI Prediction Model",
    tech: ["Python", "LSTM", "TensorFlow", "Data Analysis"],
    description: "Advanced air quality prediction system using LSTM neural networks for accurate forecasting.",
    image: projectAQI,
    github: "https://aero-sensee.netlify.app/",
  },
  {
    title: "Air Canvas",
    tech: ["OpenCV", "Python", "Computer Vision"],
    description: "Virtual drawing tool that enables drawing in the air using hand gestures and computer vision.",
    image: projectCanvas,
    github: "https://github.com/Somya170/Virtual-Board",
  },
  {
    title: "Document Scanner",
    tech: ["Tesseract OCR", "Python", "Image Processing"],
    description: "Intelligent document scanning system with OCR capabilities for text extraction.",
    image: projectScanner,
    github: "https://github.com/Somya170/Document-Scanner",
  },
  {
    title: "Document Summarizer",
    tech: ["NLP", "Transformers", "Python"],
    description: "AI-powered document summarization tool using transformer models for extracting key information.",
    image: projectSummarizer,
    github: "https://github.com/Jiyaa04/Document-Summerize",
  },
  {
    title: "Crowd Analysis System",
    tech: ["Deep Learning", "Computer Vision", "Python"],
    description: "Real-time crowd monitoring and analysis system using deep learning for security applications.",
    image: projectCrowd,
    github: "https://github.com/Somya170/IBM-TechXchange-CrowdDetection",
  },
  {
    title: "Jan Setu",
    tech: ["Python", "Flask", "AWS S3", "Firebase"],
    description: "Full-stack web application with REST APIs, AWS S3 storage, and Firebase authentication & database integration.",
    image: projectJansetu,
    github: "https://youtu.be/1cCGIY3QLAs?si=osJq49tymU3wI1Qt",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> <span className="text-foreground">cd</span> <span className="text-accent">projects/ && tree</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono ml-2"><span className="text-accent">→</span> Innovative solutions powered by AI and cutting-edge technology</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition-transform duration-200"
>
  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
</a>

                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

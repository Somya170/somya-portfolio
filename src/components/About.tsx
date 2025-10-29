import { Linkedin, Github, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  "Python",  "SQL", "HTML", "CSS", "Flask", "REST APIs","Django", "AI/ML Libraries", "Data Science", "EDA", "Data Analysis", "Stastical Modelling", "Data Visualization", "Model Deployment","MLOps", "Time Series Forecasting", "OCR Systems", "Data Wrangling",
  "MVC", "JDBC", "Git", "GitHub", "AWS S3",
  "Google Colab", "Jupyter Notebook", "Computer Vision", 
  "CUDA", "Power BI", "Java",, "Springboot", "Project Management"
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Terminal-style header */}
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> <span className="text-foreground">cat</span> <span className="text-accent">about_me.md</span>
            </h2>
          </div>
        </div>

        <div className="space-y-8 max-w-4xl">
          {/* Content with terminal styling */}
          <div className="space-y-6 animate-fade-in bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-primary font-mono text-sm flex-shrink-0 mt-1">01 |</span>
              <p className="text-lg text-foreground leading-relaxed">
                I'm a passionate B.Tech student specializing in Computer Science and Information Technology, 
                with a strong focus on Artificial Intelligence and Machine Learning. I thrive on solving 
                complex problems through innovative solutions and have experience in developing cutting-edge 
                projects in AI, ML, and computer vision.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-mono text-sm flex-shrink-0 mt-1">02 |</span>
              <p className="text-lg text-foreground leading-relaxed">
                With multiple research publications and internship experiences, I'm constantly exploring 
                new technologies and methodologies to push the boundaries of what's possible in the field 
                of AI and software development.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6 border-t border-border/50">
              <span className="text-muted-foreground font-mono text-sm mr-2 flex items-center">
                <span className="text-primary">→</span> Connect:
              </span>
              <a
                href="https://www.linkedin.com/in/somyajaiswal218"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Somya170"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="somya.jaiswal1218@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono">$</span>
              <h3 className="text-2xl font-bold text-foreground font-mono">skills --list</h3>
            </div>
            <div className="flex flex-wrap gap-3 animate-slide-up">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-background border border-primary/30 rounded text-sm font-mono text-foreground hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-accent">→</span> {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

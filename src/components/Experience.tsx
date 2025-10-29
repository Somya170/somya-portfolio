import { Briefcase } from "lucide-react";
import companyISoftZone from "@/assets/company-isoftzone.jpg";
import companyProdigy from "@/assets/company-prodigy.jpg";
import yipsilionit from "@/assets/imagee.png";
import companyigtr from "@/assets/igtr.png";

const experiences = [
  {
    company: "I-SOFTZONE",
    role: "Software Engineer Intern (AI/ML)",
    duration: "May 2025 – July 2025",
    skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow"],
    description: "Developed AI-powered solutions and implemented machine learning models for real-world applications.",
    logo: companyISoftZone,
  },
  {
    company: "Prodigy InfoTech",
    role: "Generative AI Intern",
    duration: "Aug 2024 – Sep 2024",
    skills: ["Generative AI", "NLP", "Transformers", "Python"],
    description: "Worked on cutting-edge generative AI projects including text generation and document processing.",
    logo: companyProdigy,
  },

  {
    company: "Ypsilon IT Solutions",
    role: "Software Engineer Intern (Java)",
    duration: "Dec 2023 – Feb 2024",
    skills: ["Java", "MVC", "CRUD", "JDBC", "REST API"],
    description: "Developed a Java-based Bus Booking System, strengthening backend and database integration skills using Java, JDBC, MySQL, HTML, and CSS.",
    logo: yipsilionit,
  },
  {
    company: "Indo-German Tool Room",
    role: "Software Engineer Intern (Java)",
    duration: "July 2023 – Aug 2023",
    skills: ["Java", "JDBC", "MySQL", "HTML5", "CSS"],
    description: "Acquired core Java skills with hands-on experience in OOP principles and built basic applications using control structures, arrays, and exception handling.",
    logo: companyigtr,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 border-b border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> <span className="text-foreground">ls</span> <span className="text-accent">-la /experience/</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono ml-2"><span className="text-accent">→</span> Building expertise through hands-on industry experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:bg-card/80 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Company Logo */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="relative w-20 h-20 rounded-lg object-cover border border-border"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                <p className="text-sm text-accent font-medium">{exp.duration}</p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

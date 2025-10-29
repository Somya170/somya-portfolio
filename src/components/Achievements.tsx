import { Trophy } from "lucide-react";
import achievementIBM from "@/assets/achievement-ibm.jpg";
import achievementSIH from "@/assets/achievement-sih.jpg";
import achievementIIITM from "@/assets/iiitmhacka.jpg";
import achievementNVIDIA from "@/assets/cuda.jpg";
import achievementpython from "@/assets/pythonn.jpg";
import achievementIIT from "@/assets/achievement-iit.jpg";
import achievementMath from "@/assets/achievement-math.jpg";
import MLcerti from "@/assets/MLcolumb.jpg";

const achievements = [
  {
    title: "IBM TechXchange 2025",
    description: "Top 50 Participants",
    image: achievementIBM,
  },
  {
    title: "SIH Internal Hackathon",
    description: "1st Prize Winner",
    image: achievementSIH,
  },
  {
    title: "Columbia University",
    description: "Machine Learning 1 - Columbia+",
    image: MLcerti,
  },
  {
    title: "IIITM Gwalior",
    description: "Top Performers - Data Science & ML",
    image: achievementIIITM,
  },
 
  {
    title: "NVIDIA CUDA Python",
    description: "Certificate of Achievement",
    image: achievementNVIDIA,
  },
    {
    title: "Microsoft",
    description: "Fundamental of Python Certification",
    image: achievementpython,
  },
   {
    title: "Mathematical Model Making",
    description: "2nd Prize",
    image: achievementMath,
  },
  {
    title: "IIT Indore",
    description: "AI & ML Certification",
    image: achievementIIT,
  },
    
  


];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold font-mono">
                <span className="text-primary">$</span> <span className="text-foreground">achievements</span> <span className="text-accent">--all</span>
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground font-mono ml-2"><span className="text-accent">→</span> Recognition and milestones in my journey</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-4 hover:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:scale-105 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="text-center space-y-1">
                <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {achievement.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {achievement.description}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

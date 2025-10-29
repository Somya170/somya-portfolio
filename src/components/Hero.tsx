import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2, Terminal, Braces, Anchor } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: '0s' }} />
        <Terminal className="absolute top-40 right-20 w-10 h-10 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />
        <Braces className="absolute bottom-32 left-20 w-12 h-12 text-primary/20 animate-float" style={{ animationDelay: '2s' }} />
        <Code2 className="absolute bottom-20 right-32 w-8 h-8 text-accent/20 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Terminal Window Effect */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Terminal Window Container */}
              <div className="relative bg-card border-2 border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-primary/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-xs font-mono text-muted-foreground">profile.jsx</span>
                </div>
                
                {/* Image Container */}
                <div className="p-2 bg-gradient-to-br from-card via-card to-secondary/20">
                  <div className="relative">
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    
                    {/* Profile Image */}
                    <img
                      src={profilePhoto}
                      alt="Somya Jaiswal - Software Engineer"
                      className="relative w-80 h-80 object-cover rounded-xl border-4 border-primary/50 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                    
                    {/* Code Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end p-4">
                      <code className="text-xs font-mono text-primary">
                        {'<Developer />'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card border-2 border-primary/30 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-foreground">Status: <span className="text-primary">Active</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            {/* Terminal-style Greeting */}
            <div className="inline-block bg-secondary/50 border border-primary/20 rounded-lg px-4 py-2 font-mono text-sm">
              <span className="text-primary">$</span> <span className="text-muted-foreground">whoami</span>
            </div>

            {/* Name with Glitch Effect */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Somya <span className="text-primary">Jaiswal</span>
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start font-mono text-sm text-muted-foreground">
                <span className="bg-secondary/50 px-3 py-1 rounded border border-primary/20">{'<B.Tech CSIT />'}</span>
                <span className="bg-secondary/50 px-3 py-1 rounded border border-accent/20">{'{ AI & ML }'}</span>
                <span className="bg-secondary/50 px-3 py-1 rounded border border-primary/20">{'[ Full-Stack ]'}</span>
              </div>
            </div>

            {/* Description with Typing Effect */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                <span className="text-accent">//</span> Building intelligent solutions with Python, Java, and modern web technologies
              </p>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <div><span className="text-primary">const</span> passion = <span className="text-accent">'AI & Machine Learning'</span>;</div>
                <div><span className="text-primary">const</span> focus = <span className="text-accent">'Innovation & Problem Solving'</span>;</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Somya170"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary border-2 border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/somyajaiswal218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary border-2 border-accent/30 rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:somya.jaiswal1218@gmail.com"
                className="w-12 h-12 bg-secondary border-2 border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              
<a
  href="https://drive.google.com/file/d/1vbiNU5F_F0PLX9yzsi7GwoW0ArjXsx0X/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    size="lg" 
    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50 px-8 font-mono"
  >
    <Terminal className="w-4 h-4 mr-2" />
    View Resume
  </Button>
</a>

              
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary shadow-lg transition-all duration-300 hover:scale-105 px-8 font-mono"
              >
                <Code2 className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Projects', value: '15+', icon: Code2 },
            { label: 'Experience', value: '1 Year', icon: Terminal },
            { label: 'Certifications', value: '8+', icon: Braces },
            { label: 'Publications', value: '5', icon: Code2 },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-foreground font-mono">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

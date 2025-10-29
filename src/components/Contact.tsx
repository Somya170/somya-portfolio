import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/xdkpgvda", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  } else {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-card/30 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-card border border-primary/30 rounded-lg px-6 py-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">$</span> <span className="text-foreground">touch</span> <span className="text-accent">contact.sh</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono ml-2"><span className="text-accent">→</span> Let's connect and collaborate on exciting projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/somyajaiswal218"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect professionally</p>
                </div>
              </a>

              <a
                href="https://github.com/Somya170"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border-2 border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my projects</p>
                </div>
              </a>

              <a
                href="mailto:somya.jaiswal1218@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">somya.jaiswal1218@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

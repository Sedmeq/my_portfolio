import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-border rounded-full blur-sm" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-border rounded-full blur-sm" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-border/50 rotate-45" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Said Mammadov
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, elegant design, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/Sedmeq', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/seid-mammedov', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:saidmammadov32@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
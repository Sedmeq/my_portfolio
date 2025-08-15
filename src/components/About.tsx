import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Development',
      description: 'Creating robust, scalable applications with modern frameworks and best practices.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Crafting beautiful, intuitive user interfaces that provide exceptional user experiences.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing the boundaries of what\'s possible.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience building web applications. 
            I love turning complex problems into simple, beautiful designs and writing clean, 
            efficient code that makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Card 
              key={title} 
              className="bg-card border border-border hover:bg-muted transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
            or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'card-gradient border-b' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gradient">Portfolio</h2>
          
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="capitalize hover:text-primary transition-colors"
              >
                {section}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
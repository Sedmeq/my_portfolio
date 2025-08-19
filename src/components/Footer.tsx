import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sedmeq', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/seid-mammedov', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:saidmammadov32@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Said Mammadov
          </p>
          
          <p className="text-sm text-muted-foreground/70 mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
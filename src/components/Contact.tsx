import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mblkvrkb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'saidmammadov32@gmail.com', href: 'mailto:saidmammadov32@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+994 10-717-32-00', href: 'tel:+994107173200' },
    { icon: MapPin, title: 'Location', value: 'Baku, Azerbaijan', href: 'https://www.google.com/maps/place/Baku,+Azerbaijan' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're looking to build something together, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                      <Icon className="w-8 h-8 text-foreground" />
                  </div>

                  <div>
                    <p className="font-medium">{title}</p>
                    <a href={href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input name="firstName" id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name="lastName" id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input name="subject" id="subject" placeholder="Project inquiry" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" id="message" placeholder="Tell me about your project..." rows={6} required />
                </div>
                <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Send Message
                </Button>

                {status === "SUCCESS" && (
                  <p className="text-green-600 text-center mt-4">
                    ✅ Thanks! Your message has been sent.
                  </p>
                )}
                {status === "ERROR" && (
                  <p className="text-red-600 text-center mt-4">
                    ❌ Oops! Something went wrong.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

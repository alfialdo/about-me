import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/alfialdo', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/alfialdo/', label: 'LinkedIn' },
  // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="section-container text-center">
        {/* Section Header */}
        <p className="text-primary font-medium mb-4">
          What's Next?
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Let's Connect
        </h2>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
          I'm always open to any conversations, whether it's about a potential collaboration, 
          contributing to open source project, or just sharing thoughts. 
          Feel free to reach out, I promise I don't bite :)
        </p>

        {/* CTA */}
        <Button variant="hero" size="lg" className="mb-12" asChild>
          <a href="mailto:alfialdo.connect@gmail.com">
            <Mail className="w-5 h-5" />
            Get in touch
          </a>
        </Button>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

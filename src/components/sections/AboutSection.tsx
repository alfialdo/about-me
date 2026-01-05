import { Button } from '@/components/ui/button';
import { Mail, FileDown, ArrowDown, User} from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex relative items-center pt-20 pb-16">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Photo placeholder */}
          <div className="flex-shrink-0 animate-fade-up opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-2xl scale-110" />
              
              {/* Photo container */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-primary/20 overflow-hidden group">
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-accent/30 flex items-center justify-center">
                    <img 
                      src="/profile.png" 
                      alt="Profile"
                      style={{ opacity: 0.5 }}
                      className="w-full h-full object-cover rounded-full grayscale opacity-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            {/* Greeting */}
            <p className="text-primary font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Hi there, I'm
            </p>

            {/* Name */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-display font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Alfi Aldo.
            </h1>

            {/* Tagline */}
            <h2 className="font-heading text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <span className="text-primary">Data Scientist </span> and <br />
              <span className="text-accent">MLOps Engineer</span>.
            </h2>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <p>
                I considered myself as analyst with a deep curiosity to solve variety of challenging engineering and business problems. 
                My journey started with a simple question:
              </p>
              <p>
                <em>"How can we perceive the unseen values through data?"</em>
              </p>
              <p>
                I spend my time transforming data into insights, building end-to-end ML pipelines by bridging the gap between 
                experimental notebooks and production-ready systems, also reducing hours of manual work through automation.
              </p>
              <p>
                When I'm not wrangling data or tinkering with ML system, you'll find me dribbling basketball, tuning
                guitar, or exploring new tech knowledge and ideas while sipping cup of coffee~
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:alfialdo.connect@gmail.com">
                  <Mail className="w-5 h-5" />
                  Get in touch
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/resume.pdf" download="Alfi_Aldo_CV.pdf">
                  <FileDown className="w-5 h-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-pulse-glow">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { ExternalLink, Github, Folder } from 'lucide-react';
import SkillBadge from '@/components/SkillBadge';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Drone Localization with Sensor Fusion',
    description: 'Part of Drone SLAM project focused on localizing drone and measuring the relative distance with multi sensors integration.',
    techStack: ['Python', 'C++', 'ROS2', 'OpenCV', 'AI/ML'],
    githubUrl: 'https://github.com/alfialdo/ros2-drone-localization',
    featured: true,
  },
  {
    title: 'Findtech | ML-based Laptop Recommender',
    description: 'Friendly and fast ML-based Laptop/Notebook recommender tools for non-technical persons. Included with end-to-end ML-based app deployment and integration.',
    techStack: ['Playwright', 'Scikit Learn', 'Docker', 'Streamlit', 'Supabase', 'CI/CD'],
    githubUrl: 'https://github.com/alfialdo/Findtech',
    liveUrl: 'https://github.com/alfialdo/Findtech',
    featured: true,
  },
  {
    title: 'Personal Profile Website',
    description: 'Website showcasing my interests in tech knowledge and professional journey.',
    techStack: ['Java Script', 'React', 'Tailwind CSS', 'HTML'],
    githubUrl: 'https://github.com/alfialdo/about-me',
    liveUrl: '#',
    featured: true,
  },
  // {
  //   title: 'A/B Testing & Analysis',
  //   description: 'Project to explore data and perform a/b test for control and treatment group.',
  //   techStack: ['Python', 'Statistics', 'A/B Test'],
  //   githubUrl: '#',
  // },
  {
    title: 'ML Experiment Templates',
    description: 'Custom AI/ML experiment that provide necessary needs, configuration, and tools to ease model development.',
    techStack: ['Python', 'DVC', 'Poetry'],
    githubUrl: 'https://github.com/alfialdo/ml-experiment',
  },
  {
    title: 'Fashion Bundle Recommendation',
    description: 'Content-based recommendation system with focuses on what makes business profitability by increasing the AOV and maximizing inventory management.',
    techStack: ['Python', 'Pandas', 'Recommendation', 'XGboost'],
    githubUrl: 'https://github.com/alfialdo/fashion-bundle-recom',
  },
  {
    title: 'Human Activity Recognition via Radar',
    description: 'Developed feature engineering calculation to convert raw Radar data into cleaned spectograms followed by ML model to recognize 6 activities with 91% accuracy.',
    techStack: ['Python', 'PyTorch', 'Scipy', 'FFT'],
    githubUrl: 'https://github.com/alfialdo/radar-human-activity',
  },
  {
    title: 'Dynamic Multimodal UAV Detection',
    description: 'Implementation of multimodal detection framework for UAV perception using RGB/IR imagery with ~85% accuracy.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'DVC'],
    githubUrl: 'https://github.com/alfialdo/multimodal-uav-det',
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="section-container">
        {/* Section Header */}
        <h2 className="font-heading text-h2 md:text-3xl font-bold text-foreground mb-4">
          <span className="text-primary">03.</span> Featured Projects
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          A selection of projects that showcase my approach and technical implementation to solve engineering and business challenges.
        </p>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-border bg-card card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                      target="_blank"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <SkillBadge key={tech} skill={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <h3 className="font-heading text-h3 font-semibold text-foreground mb-8">
          And More Other Projects...
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card card-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-8 h-8 text-primary" />
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                      target="_blank"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                      target="_blank"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

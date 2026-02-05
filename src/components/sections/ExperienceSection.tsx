import SkillBadge from '@/components/SkillBadge';

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    period: '2024 — Now',
    role: 'Computer Vision Researcher',
    company: 'WicomAI Lab Kookmin University',
    description: 'Led the system design and implementation of Drone SLAM with sensor fusion that achieve ±11 cm error at 20 meters. Developed lightweight vision algorithm for edge computing device.',
    skills: ['Python', 'C++', 'ROS2', 'OpenCV', 'PyTorch'],
  },
  {
    period: '2022 — 2025',
    role: 'Data Scientist',
    company: 'Hypefast (Largest House of Digital Native Brands in SEA)',
    description: 'Built and deployed recommendation systems that contribute around $35,600 to monthly revenue with 3.6% CVR. Developed enterprise-scale data warehouse include ETL automation for data collections and processing.',
    skills: ['Python', 'GCP', 'PyTorch', 'Docker', 'SQL', 'Airflow', 'CI/CD', 'A/B Test'],
  },
  {
    period: '2021 — 2022',
    role: 'ML Engineer',
    company: 'PT PLN (Indonesia National Electricity Company Project)',
    description: 'Designed SQL database and ETL process for storing cleaned residents data all over Capital City. Built end-to-end ML pipelines extract feature and classify electricity theft with around 20% actual hit rate.',
    skills: ['Scikit-learn', 'XGBoost', 'SQL', 'FastAPI'],
  },
  {
    period: '2021',
    role: 'Data Scientist',
    company: 'NTUST TEEP 2021 Internship Program',
    description: 'Analyzed and visualized water dispenser usage behavior. Developed Stacked LSTM-based model to process time series data and predict water dispenser usage with 64% performance (RMSE) compared to baseline method.',
    skills: ['Python', 'Pandas', 'Seaborn', 'NoSQL', 'Statistics'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        <h2 className="font-heading text-h2 md:text-3xl font-bold text-foreground mb-4">
          <span className="text-primary">02.</span> Work Experience
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          A timeline of my professional journey, from curious analyst to building data-driven systems at scale.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-border" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[120px_1fr] md:gap-8 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[120px] top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary/50 border-2 border-primary group-hover:bg-primary transition-colors" />

                {/* Period */}
                <div className="hidden md:block text-sm text-muted-foreground pt-1">
                  {exp.period}
                </div>

                {/* Content */}
                <div className="p-6 rounded-xl border border-border bg-card/50 card-hover">
                  <span className="md:hidden text-xs text-muted-foreground mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="font-heading text-h3 font-semibold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

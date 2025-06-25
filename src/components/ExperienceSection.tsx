
import React from 'react';
import { useExperiences } from '@/hooks/useExperiences';

const ExperienceSection: React.FC = () => {
  const { data: experiences = [], isLoading, error } = useExperiences();

  if (isLoading) {
    return (
      <section id="experience" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-cyan to-tech-purple mx-auto rounded-full mb-8"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Loading professional experience...
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-8 animate-pulse">
                  <div className="h-6 bg-slate-700 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-slate-700 rounded mb-2 w-1/2"></div>
                  <div className="h-4 bg-slate-700 rounded mb-4 w-1/3"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-700 rounded w-full"></div>
                    <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-cyan to-tech-purple mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My career progression through various roles in full-stack development and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-cyan to-tech-purple"></div>

          {experiences.map((exp, index) => (
  <div
    key={exp.id}
    className="relative mb-12 animate-fade-in-up"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    {/* Timeline dot */}
    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-tech-cyan to-tech-purple rounded-full border-4 border-slate-900 z-10"></div>

    {/* Content */}
    <div className="ml-20">
      <div className="glass-card p-8 hover-glow transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-tech-cyan mb-1">
              {exp.position || ''}
            </h3>
            <h4 className="text-xl text-white font-semibold">
              {exp.company || ''}
            </h4>
            <p className="text-slate-400 text-sm mt-1">{exp.location || ''}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="px-4 py-2 bg-gradient-to-r from-tech-purple/20 to-tech-cyan/20 text-tech-cyan rounded-full text-sm font-medium">
              {exp.duration || ''}
            </span>
          </div>
        </div>

        <p className="text-slate-300 mb-6 leading-relaxed">
          {exp.description || ''}
        </p>

        <div className="mb-6">
          <h5 className="text-lg font-semibold text-tech-purple mb-3">
            Key Achievements
          </h5>
          <ul className="space-y-2">
            {(exp.achievements || []).map((achievement, achIndex) => (
              <li key={achIndex} className="text-slate-300 flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-tech-cyan to-tech-purple rounded-full mr-3 mt-2 flex-shrink-0"></div>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-tech-cyan mb-3">
            Technologies Used
          </h5>
          <div className="flex flex-wrap gap-2">
            {(exp.technologies || []).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md hover:bg-tech-cyan/20 hover:text-tech-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
))}

          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto hover-glow transition-all duration-300">
            <h3 className="text-2xl font-bold text-tech-cyan mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Final year student at IIT Tirupati, always excited to take on new projects and collaborate with innovative teams. 
              Let's build something amazing together!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-tech-cyan to-tech-purple text-white rounded-full font-medium hover:shadow-xl hover:shadow-tech-cyan/25 transition-all duration-300 hover:scale-105">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

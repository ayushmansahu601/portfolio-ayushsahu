
import React from 'react';

const AboutSection: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL'] },
    { category: 'ML/AI', items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Pandas'] },
    { category: 'Cloud/DevOps', items: ['AWS', 'Docker', 'Firebase', 'Vercel', 'Git'] },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-cyan to-tech-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 hover-glow transition-all duration-300">
              <h3 className="text-3xl font-bold text-tech-cyan mb-6">
                Passionate Developer & Innovator
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                With over 5 years of experience in software development, I specialize in creating 
                robust full-stack applications and implementing cutting-edge machine learning solutions. 
                My journey began with curiosity about how things work, and it has evolved into a 
                passion for building technology that makes a difference.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                I thrive at the intersection of web development and artificial intelligence, 
                combining traditional software engineering principles with modern ML techniques 
                to create intelligent, scalable applications.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical blogs and mentoring.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="glass-card p-8 hover-glow transition-all duration-300">
              <h3 className="text-2xl font-bold text-tech-purple mb-6">Technical Arsenal</h3>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-lg font-semibold text-tech-cyan border-b border-tech-cyan/30 pb-2">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-slate-300 flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-tech-cyan to-tech-purple rounded-full mr-3"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="glass-card p-6 hover-glow transition-all duration-300">
            <div className="text-4xl font-bold text-tech-cyan mb-2">50+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="glass-card p-6 hover-glow transition-all duration-300">
            <div className="text-4xl font-bold text-tech-purple mb-2">5+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div className="glass-card p-6 hover-glow transition-all duration-300">
            <div className="text-4xl font-bold text-tech-blue mb-2">100%</div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

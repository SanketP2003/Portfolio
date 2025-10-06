import React from 'react';

// skill % just rough numbers – learning never exact
const SKILLS = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'CSS / Tailwind', level: 95 },
  { name: 'MongoDB', level: 70 },
];
const EXPERIENCES = [
  { title: 'Computer Science Student', company: 'B.Tech Program', period: '2022 → now', description: 'Grinding DSA + building stuff. Keeping it practical.', icon: '🎓' },
  { title: 'Problem Solver', company: 'Practice Platforms', period: '2023 → now', description: '500+ problems. Reading carefully saves time.', icon: '⚡' },
];
const TRAITS = [
  { icon: '🚀', title: 'Quick Learner', description: 'Break → fix → remember.' },
  { icon: '🛠️', title: 'Build > Theory', description: 'Projects stick better than notes.' },
  { icon: '🤝', title: 'Collaborative', description: 'Happy to pair or ask “why?”' },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container-base space-y-16">
        <div className="text-center space-y-4 fade-in">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="text-lead">CSE student shipping small projects. Iterate &gt; perfect. Learning by doing.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white">Skills</h3>
            <div className="space-y-5">
              {SKILLS.map(s => (
                <div key={s.name} className="space-y-2 fade-in">
                  <div className="flex justify-between text-xs uppercase tracking-wide text-gray-400"><span>{s.name}</span><span>{s.level}%</span></div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">What I've Been Doing</h3>
            <div className="space-y-4">
              {EXPERIENCES.map(exp => (
                <div key={exp.title} className="card flex gap-4 fade-in hover-pop">
                  <div className="text-3xl" aria-hidden>{exp.icon}</div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                    <div className="text-xs uppercase tracking-wide text-gray-400 flex gap-2">
                      <span className="text-blue-400 font-medium">{exp.company}</span><span>•</span><span>{exp.period}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAITS.map(t => (
            <div key={t.title} className="card text-center space-y-3 fade-in hover-pop">
              <div className="text-3xl" aria-hidden>{t.icon}</div>
              <h4 className="font-semibold text-white">{t.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;